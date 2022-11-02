# Promise对象

## 概述

Promise 是异步编程的一种解决方案。

从语法上来说，Promise是一个对象，从它可以获取异步操作的消息。

Promise 对象有以下特点：

- 对象的状态不受外界影响。Promise 对象代表一个异步操作，有三种状态，分别是： `pending`、`fulfilled` 和 `rejected`。并且只有异步操作的结果可以决定当前是哪一种状态，任何其他操作都无法改变这个状态。

- 一旦状态改变，就不会再变，任何时候都可以得到这个结果。

## 基本用法

ES6规定，Promise 是一个构造函数，用来生成 Promise 实例。

```javascript
const promise = new Promise(function (resolve, reject) {
    // to do ...
    if (success) {
        resolve(res)
    } else {    
        reject(error)
    }
})
```
在异步操作成功的时候，Promise 将调用 `resolve` 方法，并将异步操作的结果作为参数传递出去。同理，异步操作失败的时候，将调用 `reject` 方法，并将异步操作报出的错误作为参数传递出去。

Promise 实例生成之后，可以用 `then` 方法分别指定 `resolved` 状态和 `rejected` 状态的回调函数。

```javascript
promise.then(function(value) {
    // successd
}, function(error) {
    // failure  
})
```

Promise 新建后会立即执行。

```javascript
let promise = new Promise(function(resolve, reject) {
    console.log('Promise')
    resolve()
})

promise.then(function() {
    console.log('resloved')
}) 

console.log('Hi!')


// Promise
// Hi!
// resolved
```

## Promise.prototype.then

Promise 实例具有 `then` 方法，说明 `then` 方法是定义在原型对象 `Promise.prototype` 上的。它的作用是为 Promise 实例添加状态改变时的回调函数。

采用链式的 `then`，可以指定一组按照次序调用的回调函数。这时，前一个回调函数有可能返回的还是一个 Promise 对象，那么后一个回调函数就会等待该 Promise 对象的状态发生改变，才会被调用。

```javascript
getJSON("/post/1.json").then(function (post) {
  return getJSON(post.commentURL);
}).then(function (comments) {
  console.log("resolved: ", comments);
}, function (err){
  console.log("rejected: ", err);
});
```
上面代码中，第一个 `then` 方法指定的回调函数，返回的是另一个 Promise 对象。这时，第二个 `then` 方法指定的回调函数，就会等待这个新的 Promise 对象状态发生变化。如果变为 `resolved`，就调用第一个回调函数，如果状态变为 `rejected`，就调用第二个回调函数。

## Promise.prototype.catch

`Promise.prototype.catch()` 方法是 `.then(null, rejection)` 或 `.then(undefined, rejection)` 的别名，用于指定发生错误时的回调函数。

```javascript
getJSON('/posts.json').then(function(posts) {
  // ...
}).catch(function(error) {
  // 处理 getJSON 和 前一个回调函数运行时发生的错误
  console.log('发生错误！', error);
});
```
上面代码中, `getJSON` 返回一个 Promise 对象，如果该对象状态变为 `resolved`，则会调用 `then()` 方法指定的回调函数；如果异步操作抛出错误，状态就会变为 `rejected`，就会调用 `catch()` 方法指定的回调函数，处理这个错误。另外，`then()` 方法指定的回调函数，如果运行中抛出错误，也会被 `catch()` 方法捕获。

## Promise.prototype

`finally()` 方法用于指定不管 Promise 对象最后状态如何，都会执行的操作。该方法是 ES2018 引入标准的。

```javascript
promise
    .then(result => {···})
    .catch(error => {···})
    .finally(() => {···});
```
上面代码中，不管 promise 最后的状态，在执行完 `then` 或 `catch` 指定的回调函数以后，都会执行 `finally` 方法指定的回调函数。

## Promise.all()

`Promise.all()` 方法用于将多个 Promise 实例，包装成一个新的 Promise 实例。

```javascript
const p = Promise.all([p1, p2, p3]);
```
p 的状态由 p1、p2、p3 决定，分成两种情况。

（1）只有 p1、p2、p3 的状态都变成 `fulfilled`，p 的状态才会变成 `fulfilled`，此时 p1、p2、p3 的返回值组成一个数组，传递给 p 的回调函数。

（2）只要 p1、p2、p3 之中有一个被 `rejected`，p 的状态就变成 `rejected`，此时第一个被 `reject` 的实例的返回值，会传递给 p 的回调函数。
