# async 函数

## 概述

`ES2017` 引入了 `async` 函数，使得异步操作变得更加简单。

什么是 `async` 函数呢？ **其实就是 Generator 函数的语法糖。**

`async` 函数就是将 `Generator` 函数的 `*` 替换成 `async`，将 `yield` 表达式替换成 `await`。

***

`async` 函数相对于 `Generator` 函数的改进：

- **内置执行器。**

  `async` 函数的执行只需要直接调用函数名即可，而 `Generator` 函数的执行需要调用 `next` 方法。
  
- **更好的语义。**
    
  `async` 和 `await` 比起 `*` 和 `yield`，语义更清楚了，`async` 表示函数内部有异步操作，`await` 表示紧跟在后面的表达式需要等待结果。

- **返回值是 `Promise` 对象。**
  
  `async` 函数的返回值是 `Promise` 对象，比起 `Generator` 函数的返回值是 `Iterator` 对象更好操作，通过 `then` 方法就可以指定下一步操作。

## 语法

### 返回 Promise 对象

`async` 函数返回一个 `Promise` 对象。

`async` 函数内部 `return` 语句返回的值，会成为 `then` 方法回调函数的参数。

```js
async function f() {
  return 'hello world'
}

f().then(v => {
  console.log(v)  // hello world
})
```
上面代码中，函数 `f` 内部的 `return` 语句返回的字符串，会被 `then` 方法回调函数接收到。

async 函数内部 `throw` 语句抛出的错误，会使返回的 `Promise` 对象变为 `reject` 状态。抛出的错误对象会被 `catch` 方法回调函数接收到。

```js
async function f() {
  throw new Error('出错了')
}

f().catch(e => {
  console.log(e)  // 出错了
})
```

### Promise 对象的状态变化

`async` 函数返回的 `Promise` 对象，必须等到函数内部所有 `await` 命令后面的 `Promise` 对象执行完，才会发生状态改变。除非遇到 `return` 语句或者抛出错误。也就是说，**只有当 `async` 函数内部的异步操作执行完，才会执行 `then` 方法指定的回调函数。**

### await 命令

正常情况下，await 命令后面跟的是一个 Promise 对象，返回的是对象的结果，如果不是 Promise 对象，那就直接返回对应的值。

```js
async function f() {
  return await 123 // 相当于 return 123
}

f().then(v => {
  console.log(v) // 123
})
```

还有一种情况就是 `await` 命令后面跟的是 `thenable` 对象（即定义了 `then` 方法的对象），那么 `await` 会将其等同于 `Promise` 对象。

***

任何一个 await 语句后面的 Promise 对象变成了 reject 状态，那么整个 async 函数都会中断执行。

```js
async function f() {
  await Promise.reject('出错了')
  await Promise.resolve('hello world') // 不会执行
}
```

### 错误处理

如果 `await` 后面的异步操作出错，那么等同于 `async` 函数返回的 `Promise` 对象被 `reject`。

防止出错的方式，就是将其放在 `try...catch` 中。

```js
async function f() {
  try {
    await new Promise(function (resolve, reject) {
      throw new Error('出错了')
    })
  } catch(e) {
    //
  }
  return await('hello world')
}
```

### 使用注意点

**`await` 命令后面的 `Promise` 对象的运行结果很可能是 `reject`，所以最好把 `await` 命令写在 `try...catch` 中。**

```js
async function f() {
  try {
    await somethingReturnAPromise()
  } catch (err) {
    console.log(err)
  }
}
// 另一种写法
async function f() {
  await somethingReturnAPromise()
  .catch(function (err) {
    console.log(err)
  })
}
```

**多个 `await` 命令后面的异步操作，如果不存在继发关系，最好让它们同时进行。**

```js
let foo = await getFoo()
let bar = await getBar()
```
上面代码中，`getFoo` 和 `getBar` 是两个独立异步操作（即互不关联，不存在继发关系），如果写成继发关系，会比较耗时，因为只有执行了 `getFoo` 才能够执行 `getBar`，完全可以让它们同时进行。

```js
// 写法一
let [foo, bar] = await Promise.all([getFoo(), getBar()])

// 写法二
let fooPromise = getFoo()
let barPromise = getBar()
let foo = await fooPromise
let bar = await barPromise
```

***

**`await` 命令只能用在 `async` 函数中，如果用在普通函数中，就会报错。**

*** 

**`async` 函数可以保留运行栈。**

```js
const a = () => {
  b().then(() => c())
};
```
上面代码中，函数 `a` 内部运行了一个异步任务 `b()`。当 `b()` 运行的时候，函数 `a()` 不会中断，而是继续执行。等到 `b()` 运行结束，可能 `a()` 早就运行结束了，`b()` 所在的上下文环境已经消失了。如果 `b()` 或 `c()` 报错，错误堆栈将不包括 `a()`。

现在将其改成 `async` 函数

```js
const a = async () => {
  await b();
  c();
}
```
上面代码中，`b()` 运行的时候，`a()` 是暂停执行，上下文环境都保存着。一旦 `b()` 或 `c()` 报错，错误堆栈将包括 `a()`。

## async 函数的实现原理

`async` 函数的实现原理主要分为两部分：**`async` 函数内部的语法转换**和 **`Promise` 对象的包装**。

1. `async` 函数内部的语法转换

`async` 函数内部的语法转换可以看成是 `Generator` 函数的语法转化，将 `async` 函数转换成一个状态机。

举一个简单的 `async` 函数的例子：

```js
async function fetchData() {
  const result = await fetch('https://example.com/data')
  const data = await result.json()
  return data
}
```
上面的函数可以转化成如下的代码：

```js
function fetchData() {
  return spawn(function* () {
    const result = yield fetch('https://example.com/data')
    const data = yield result.json()
    return data
  })
}

function spawn(genFn) {
  return new Promise(funtcion(resolve, reject) {
    const gen = genFen()
    function step(nextFn) {
      let next
      try {
        next = nextFn()
      } catch(e) {
        return reject(e)
      }
      if (next.done) {
        return resolve(next.value)
      }
      Promise.resolve(next.value).then(
        function(v) {
          return step(function() { return gen.next(v) })
        },
        function(e) {
          return step(function() { return gen.throw(e) })
        }
      ) 
    }
    step(function() { return gen.next(undefined) })
  })
} 
```
在上面的代码中， `fetchData` 函数被转换成了一个普通函数，内部使用 `spawn` 函数生成了一个状态机，状态机的初始状态是通过调用 `genFn` 得到的 `Generator` 对象的 `next` 方法，每次执行 `yield` 表达式都会暂停状态机，并返回一个 `Promise` 对象。当 `Promise` 对象 `resolve` 时，状态机会继续执行下一条语句。

2. `Promise` 对象的包装
   
`async` 函数返回的是一个 `Promise` 对象，所以还需要对函数的返回值进行包装。如果返回的是一个非 `Promise` 对象，那么会自动将返回值包装成一个 `Promise` 对象并 `resolve`；如果返回的是一个 `Promise` 对象，那么会直接返回这个 `Promise` 对象。
