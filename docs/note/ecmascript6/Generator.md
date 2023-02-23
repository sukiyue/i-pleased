# Generator 函数的语法

## 基本概念

`Generator` 函数是 ES6 提供的一种异步的解决方案。

在语法上，可以理解为 `Generator` 函数是一个状态机，封装了多个内部状态。`Generator` 还是一个遍历器对象生成函数，执行 `Generator` 函数会返回一个遍历器对象。

形式上，`Generator` 函数是一个普通函数，它有两个特征：一是关键字 `function` 和 函数名之间有个 `*`。二是函数内部使用 `yield` 表达式，定义不同的内部状态。

```js
function* generatorDemo() {
  yield 1
  yield 2
  return 3
}
var GD = generatorDemo()
```
上面代码定义了一个 `Generator` 函数 `generatorDemo`，它的内部有两个 `yield` 表达式，即该函数有三个状态 `1`，`2` 和 `return` 语句。

`Generator` 函数的调用方式跟普通函数一样，在函数名后面加上 `()`。不同的是，调用 `Generator` 函数后，函数并不执行，返回的也不是函数的执行结果，而是一个指向函数内部状态的指针对象，也就是一个遍历器对象。

调用遍历器对象的 `next` 方法，可以是指针指向下一个状态。每次调用 `next` 方法，内部指针就从函数的头部或上一次停下来的地方开始执行，直到遇到下一个 `yield表达式` 或 `return语句` 为止。

换言之，`Generator` 函数是分段执行的，`yield` 表达式暂停执行的标记，`next` 方法可以恢复执行。

```js
console.log(GD.next()) // { value: 1, done: false }
console.log(GD.next()) // { value: 2, done: false }
console.log(GD.next()) // { value: 3, done: true }
console.log(GD.next()) // { value: undefined, done: true }
```

上述代码输出执行了四次 `next` 方法，`next` 方法返回的是一个对象，它的 `value` 属性就是当前 `yield 表达式的值` 或者 `return 语句后面表达式的值`，它的 `done` 属性就是表示遍历是否已经结束，`done` 为 `true` 时，表示遍历已经结束，此时再次调用 `next` 方法，返回对象的 `value` 值为 `undefined`。

## yield 表达式

当 Generator 函数不用 `yield` 表达式时，此时就变成了一个单纯的暂缓执行函数。

```js
function* f() {
  console.log('执行了！')
}

var generator = f();

generator.next()
```

上面代码中，如果函数 `f` 为普通函数，那么在为 `generator` 赋值的时候就会执行，但是函数 `f` 是一个 Generator 函数，只有调用 `next` 方法后，函数 `f` 才会执行。

:::tip
`yield` 表达式只能在 Generator 函数里使用，用在其他地方就会报语法错误。
:::

## next 方法的参数

`yield` 表达式本身没有返回值，或者说返回值总为 `undefined`。`next` 方法可以携带一个参数，该参数就会被当成是上一个 `yield` 表达式返回的值。

```js
function* f() {
  for(var i = 0; true; i++) {
    var reset = yield i;
    if(reset) { i = -1; }
  }
}

var g = f();

g.next() // { value: 0, done: false }
g.next() // { value: 1, done: false }
g.next(true) // { value: 0, done: false }
```
上面代码中，定义了一个可以无限运行的 Generator 函数`f`，如果 `next` 方法一直没有携带参数，每次运行到 `yield` 表达式，变量 `reset` 的值永远都是 `undefined`，当 `next` 方法携带了参数 `true` 时，**变量 reset 的值就被重置为这个参数**。所以，`if` 的条件判断成立，`i` 的值就变成了 `-1`。

:::tip
这个功能有很重要的语法意义。Generator 函数从暂停状态到恢复运行，它的上下文状态（context）是不变的。通过next方法的参数，就有办法在 Generator 函数开始运行之后，继续向函数体内部注入值。也就是说，可以在 Generator 函数运行的不同阶段，从外部向内部注入不同的值，从而调整函数行为。
:::

由于 `next` 方法携带的参数表示的是上一个 `yield` 表达式返回的值，所以在第一次使用 `next` 方法时携带参数时无效的。`V8 引擎`直接忽略第一次使用 `next` 方法携带的参数，只有从第二次开始，`next` 方法携带的参数才是有效的。

从语义来说，第一次 `next` 方法是为了启动遍历器对象，所以不需要参数。

## for...of 循环

`for...of` 循环可以自动遍历 Generator 函数运行生成的 `Iterator` 对象，且不需要调用 `next` 方法。

```js
function* f() {
  yield 1
  yield 2
  yield 3
  yield 4
  yield 5
  return 6
}

for(let item of f()) {
  console.log(item)
}
// 1 2 3 4 5
```
上面代码中使用了 `for...of` 遍历，依次输出了 `5` 个 `yield` 表达式的值。需要注意的是，一旦 `next` 方法的返回对象的 `done` 属性值为 `true` 时，`for...of` 的循环就会终止，并且不返回该对象，所以上述例子中 `return` 语句返回的 `6` 没有输出，因为其不包含在 `for...of` 的循环之中。

## Generator.prototype.throw()

Generator 函数返回的遍历器对象，都有一个 `throw` 方法，可以在函数体外抛出错误，然后在函数体内捕获。

```js
var g = function* () {
  try {
    yield;
  } catch (e) {
    console.log('内部捕获', e);
  }
};

var i = g();
i.next();

try {
  i.throw('a');
  i.throw('b');
} catch (e) {
  console.log('外部捕获', e);
}
// 内部捕获
// 外部捕获
```
在上面代码中，遍历器对象 `i` 连续抛出了两次错误，第一个错误被 Generator 函数体内的 `catch` 语句捕获，第二个错误由于 Generator 函数体内的 `catch` 语句已经执行过了，不会再捕获到这个错误了，所以这个错误被抛出了 Generator 函数体，被函数体外的 `catch` 语句捕获。

`throw` 方法可以接受一个参数，该参数会被 `catch` 语句接收，建议抛出 `Error` 实例的对象。

`throw` 方法被捕获以后，会附带执行下一条 `yield` 表达式。也就是说，会附带执行一次 `next` 方法。

```js
var gen = function* gen(){
  try {
    yield console.log('a')
  } catch (e) {
    // ...
  }
  yield console.log('b')
  yield console.log('c')
}

var g = gen()
g.next() // a
g.throw() // b
g.next() // c
```
上面代码中，`g.throw` 抛出的错误被捕获后，自动执行了一次 `next` 方法，所以输出了 `b`。

:::tip
只要 Generator 函数内部部署了 `try...catch` 代码块，那么遍历器的 `throw` 方法抛出的错误，不会影响下一次遍历。

一旦 Generator 执行过程中抛出错误，且没有被内部捕获，就不会再执行下去了。如果此后还调用 `next` 方法，将返回一个 `value` 属性等于 `undefined`、`done` 属性等于 `true` 的对象，即 JavaScript 引擎认为这个 Generator 已经运行结束了。
:::

## Generator.prototype.return() 

Generator 函数返回的遍历器对象，还有一个 `return` 方法，可以返回给定的值，并且终结遍历 Generator 函数。

```js
function* gen() {
  yield 1
  yield 2
  yield 3
}

var g = gen()
g.next()        // { value: 1, done: false }
g.return('foo') // { value: "foo", done: true }
g.next()        // { value: undefined, done: true }
```
上面代码中，遍历器对象 `g` 调用 `return` 方法后，返回值的 `value` 属性的值就是 `return` 方法的参数 `foo`。并且，Generator 函数的遍历也终止了，返回值的 `done` 属性为 `true`，之后再调用 `next` 方法，返回值的 `value` 属性总为 `undefined`，`done` 属性总为 `true`。

:::tip
如果调用 `return` 方法不传递参数时，返回值的 `value` 属性为 `undefined`。
:::

如果 Generator 函数内包含 `try...finally` 代码块，且正在执行 `try` 代码块，此时如果调用 `return` 方法，会立即执行 `finally` 代码块，执行完之后，整个函数才会结束。

```js
function* numbers () {
  yield 1;
  try {
    yield 2;
    yield 3;
  } finally {
    yield 4;
    yield 5;
  }
  yield 6;
}
var g = numbers();
g.next() // { value: 1, done: false }
g.next() // { value: 2, done: false }
g.return(7) // { value: 4, done: false }
g.next() // { value: 5, done: false }
g.next() // { value: 7, done: true }
```

## next()、throw()、return()的共同点

`next()、throw()、return()` 三个方法在本质上都是做的同一件事，就是让 Generator 函数恢复执行，并且使用不同的语句替换 `yield` 表达式。

`next` 方法将 `yield` 表达式替换成一个值。

```js
function* g(x, y) {
  let result = yield x + y
  return result 
}

const gen = g(1, 2)

gen.next() // {value: 3, done: false}

gen.next(1) // {value: 1, done: true}
// 相当于将 let result = yield x + y 替换成 let result = 1
```
上面代码中，`gen.next(1)` 方法相当于将 `yield` 表达式替换成了一个值 `1`，如果 `next` 方法没有携带参数，就相当于替换成了 `undefined`。

`throw` 方法将 `yield` 表达式替换成一个 `throw` 语句。

```js
gen.throw(new Error('出错了')); // Uncaught Error: 出错了
// 相当于将 let result = yield x + y 替换成 let result = throw(new Error('出错了'))
```

`return` 方法将 `yield` 表达式替换成一个 `return` 语句。

```js
gen.return(2); // {value: 2, done: true}
// 相当于将 let result = yield x + y 替换成 let result = return 2
```

## yield* 表达式

如果在 Generator 内部调用另一个 Generator 函数，需要在前者的函数内部手动完成遍历。

```js
function* foo() {
  yield 'a'
  yield 'b'
}

function* bar() {
  yield 'x'
  // 手动遍历 foo()
  for (let i of foo()) {
    console.log(i)
  }
  yield 'y'
}

for (let v of bar()){
  console.log(v)
}
// x
// a
// b
// y
```
这样的话，如果需要嵌套多个 Generator 函数，就会变得非常麻烦。于是，ES6 提供了 `yield&*` 表达式，用来在一个 Generator 函数内部执行另一个 Generator 函数。

```js
function* bar() {
  yield 'x'
  yield* foo()
  yield 'y'
}

// 等同于
function* bar() {
  yield 'x'
  yield 'a'
  yield 'b'
  yield 'y'
}

// 等同于
funcion* bar() {
  yield 'x'
  for (let i of foo()) {
    yield i
  }
  yield 'y'
}
```
需要注意的是，使用的表达式是 **`yield*`** ，而不是 `yield`。

:::tip
任何数据结构只要有 `Iterator` 接口，就可以被 `yield*` 遍历。
:::

```js
let read = (function* () {
  yield 'hello'
  yield* 'hello'
})();

read.next().value // "hello"
read.next().value // "h"
```

如果被代理的 Generator 函数有 `return` 语句，那么就可以向代理它的 Generator 函数返回数据。

```js
function* foo() {
  yield 2
  yield 3
  return "foo"
}

function* bar() {
  yield 1
  var v = yield* foo()
  console.log("v: " + v)
  yield 4
}

var it = bar()

it.next()
// {value: 1, done: false}
it.next()
// {value: 2, done: false}
it.next()
// {value: 3, done: false}
it.next()
// "v: foo"
// {value: 4, done: false}
it.next()
// {value: undefined, done: true}
```
上面代码在第四次调用 `next` 方法的时候，屏幕上会有输出，这是因为函数 `foo` 的 `return` 语句，向函数 `bar` 提供了返回值。

## 应用场景

异步操作的同步化表达、控制流管理、部署 Iterator 接口、作为数据结构