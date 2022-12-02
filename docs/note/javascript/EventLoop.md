# JavaScript运行机制 Event Loop

**参考文章：**

阮一峰老师日志：[JavaScript 运行机制详解：再谈Event Loop](https://www.ruanyifeng.com/blog/2014/10/event-loop.html)

Philip Roberts的演讲：[到底什么是Event Loop呢？ | 欧洲 JSConf 2014](https://www.youtube.com/watch?v=8aGhZQkoFbQ)

[浏览器与Node的事件循环(Event Loop)有何区别?](https://blog.csdn.net/z591102/article/details/111588572)

## 为什么 JavaScript 是单线程？
 
JavaScript 是一门单线程的语言，单线程运行意味着只有一个调用栈，同一时刻只能做一件事。单线程就是这个意思，程序的代码只能一段一段地执行。

那为什么 JavaScript 不能有多个线程呢？

JavaScript 作为浏览器的脚本语言，主要用途是实现用户与浏览器的交互，以及操作 DOM。这决定了它只能是单线程的，否则就会带来很复杂的同步问题。比如，假设 JavaScript 同时有两个线程，一个线程在某个 DOM 节点上添加内容，另一个线程删除了这个节点，这时浏览器应该以哪个线程为准？

所以为了避免复杂性，从一诞生，JavaScript 就是单线程，这已经成了这门语言的核心特征，将来也不会改变。

## 同步任务和异步任务

单线程就意味着所有任务都需要排队执行，只有前一个任务结束后，才会执行后一个任务。如果前一个任务执行时间过长，后一个任务就不得不一直等待。

很多时候，排队时间过长并不是因为计算量过大导致 CPU 忙不过来，而是因为 IO 设备很慢，例如 Ajax操作请求网络数据，不等不等待结果，再往下执行。

JavaScript 语言的设计者意识到，此时主线可以完全不管 IO 设备，将处于等待相关操作中的任务挂起（例如计时，网络请求等），先运行排在后面的任务。等到 IO 设备返回结果后，再把挂起的任务继续执行下去。

于是，所有任务分为两种，**同步任务（synchronous）和异步任务（asynchronous**）。

同步任务：没有被引擎挂起，在主线程上排队执行的任务，只有前一个任务执行完，才能执行后一个任务。

异步任务：被引擎放在一边，不进入主线程，而进入任务队列的任务，只有引擎认为某个异步任务可以执行了（比如计时结束、请求得到响应），该任务（**采用回调函数的形式**）才会进入主线程执行。

::: tip 

异步任务不具有“堵塞”效应，即在主线程的代码块中，排在异步任务后面的代码不需要等待异步任务的结果就可以立即运行。

:::

具体来说，异步执行的运行机制如下：

::: info

（1）所有同步任务都在主线程上进行，形成一个执行栈（execution context stack）。

（2）主线程之外，还存在一个任务队列（task queue）。只要异步任务有了运行结果（计时结束、请求得到响应），就能在任务队列中放置一个事件。

（3）一旦主线程执行栈中的所有同步任务执行完毕，就会从任务队列中读取已经可以执行的异步任务进入执行栈，开始执行其回调函数。

（4）主线程不断的重复上面的三步。

:::

**只要主线程空了，就会去读取任务队列，这就是 JavaScript 的运行机制。这个过程会不断的重复。**

## 回调函数（callback）

回调函数就是被主线程挂起来的代码。异步函数必须指定回调函数，当主线程开始执行异步函数就是在执行对应的回调函数。

## 任务队列（Task queue）

任务队列是一个先进先出的数据结构，排在前面的事件优先被主线程读取。主线程的读取过程基本是自动的，只要执行栈一清空，任务队列上第一位的事件就会自动进入主线程的执行栈执行。

## 事件循环（Event Loop）

JavaScript 运行时同一时刻只能做一件事情，它不能在发送 Ajax 请求的同时去运行其他代码，它也不能在设置定时器的时候运行其他代码。

我们之所以可以并发执行任务，是因为浏览器不仅提供了运行时环境，还提供了 WebsAPIs。它们可以对应的创建一些线程，你不能直接访问，只能通过某种方式调用，同时浏览器对这种调用进行响应。

**事件循环做的事情其实很简单，就是查看栈和任务队列，如果栈为空，那么就把任务队列的队头的任务压入栈中，之后这个任务得到执行。**

事件循环必须等到栈清空，才会将队列中的任务压入栈中。

<img src="/assets/images/note/javascript/eventLoop/eventLoop1.png" data-fancybox="gallery" />

上图中，主线程运行的时候，产生了堆（heap）和栈（stack），栈中的代码调用各种外部API，它们在任务队列中加入了各种事件（click、load和done）。只要栈中的代码执行完毕，主线程就会从任务队列中读取，依次执行那些事件对应的回调函数。

这个循环是不断的，所以整个这种运行机制又称为 **Event Loop（事件循环）**。

## 浏览器内核

浏览器内核通常也被称为渲染引擎。浏览器内核是多线程，在内核控制下各线程相互配合以保持同步，一个浏览器内核通常由以下线程组成。

GUI渲染线程、JS引擎线程、定时触发器线程、事件触发线程和异步HTTP请求线程。

### GUI渲染线程

主要负责页面的渲染，解析 HTML、CSS，构建DOM树，布局和绘制等。

当页面需要重绘或者由于某种操作引发回流时，执行该线程。

该线程与 JS 引擎线程互斥，当执行 JS 引擎线程时，GUI 渲染线程被挂起。

### JS引擎线程

主要负责执行 JS 代码。负责执行准备好待执行的事件，例如定时计时结束或异步请求成功后的事件依次进入任务列表，等待 JS 引擎线程。

该线程与 GUI 渲染线程互斥，如果 JS 执行时间过长，会导致页面渲染的阻塞。

### 定时触发器线程

负责执行定时器函数的线程，例如：`setTimeout、setInterval`。

主线程依次执行代码，遇到定时器函数，会将定时器交给该线程处理。当计时结束后，事件触发线程会将计数完毕后的事件加入任务队列，等待 JS 引擎线程执行。

### 事件触发线程

主要负责将准备好的事件交给 JS 引擎线程执行。

### 异步HTTP请求线程

负责执行异步请求函数的线程，例如：`Promise、axios、ajax等`。

主线程依次执行代码，遇到异步请求，会将函数交给该线程处理。当监听到状态码更新，如果有回调函数，事件触发线程会将回调函数加入任务队列，等待 JS 引擎线程执行。

## 宏任务（MacroTask）和微任务（MicroTask）

JavaScript 把异步任务分为宏任务和微任务。

宏任务是由宿主（浏览器、Node）发起，微任务是由 JS 引擎发起的任务。

宏任务（宿主环境）
 - script（整体代码）
 - setTimeout/setInterval 定时器
 - I/O
 - UI rendering
 - setImmediate （node环境）

微任务（js 引擎）
 - process.nextTick (node环境)
 - Promise.then() .catch() .finally()
 - Async/Awiat
 - Object.observe
 - MutationObserver

**执行过程**

1. 一开始执行栈为空，微任务队列为空，宏任务队列有且只有一个 script 脚本（整体代码）。
2. 全局上下文（script标签）被推入执行栈，开始执行同步代码。在执行的过程中，会判断执行的代码是同步任务还是异步任务，同时会通过调用一些接口，生成新的宏任务和微任务，分别推入对应的任务队列中。
3. 当一个宏任务执行完毕，会查看是否有微任务队列。如果有，先执行微任务队列中的所有任务。
4. 如果没有，表面当前宏任务执行完毕，开始检查渲染，GUI 线程接管渲染。
5. 渲染完毕后，JS 线程继续接管，会读取宏任务队列中排在最前的任务，执行宏任务的过程中，遇到微任务，会依次加入微任务队列。等到栈空后，再次读取微任务队列的任务执行，依此类推。

## Node 环境中 Event Loop 

### Node.js 运行机制

`Node.js` 采用 `V8` 作为 js 的解析引擎，I/O 处理方面使用了 `libuv`，`libuv` 是一个基于事件驱动的异步 IO 库。

<img src="/assets/images/note/javascript/eventLoop/nodeEventLoop.jpeg" data-fancybox="gallery" />

Node.js 的运行机制如下：

- V8 引擎解析 JavaScript 脚本。
- 解析后的代码，调用 Node API。
- libuv 库负责 Node API 的执行。它将不同的任务分配给不同的线程，形成一个 Event Loop，以异步的方式将执行的结果返回给 V8 引擎。
- V8 引擎再将结果返回给用户。

### libuv引擎中事件循环的 6 个阶段

其中 libuv 引擎的事件循环分为 6 个阶段，它们按照顺序反复运行。每当进入某一阶段的时候，就会在对应的回调队列里调用函数去执行。当队列为空或者执行的回调函数数量达到系统设定的阈值，就会进入下一阶段。

<img src="/assets/images/note/javascript/eventLoop/nodeEventLoop2.png" data-fancybox="gallery" />

- **timers 阶段**：这个阶段执行 timer（setTimeout、setInterval） 的回调
- **I/O callbacks 阶段**：处理一些上一轮循环中少数未执行的 I/O 回调
- **idle，prepare 阶段**：仅 node 内部使用
- **poll 阶段**：检索新的 I/O 事件，执行与 I/O 相关的回调，适当的条件下 node 将阻塞在这里
- **check 阶段**： 执行setImmediate（）的回调
- **close callbacks 阶段**：执行 socket 的 close 事件回调

### setTimeout 和 setImmediate

二者非常相似，区别在于调用的时机不同。

- setImmedaite 设计在 `poll` 阶段完成时执行，即在 `check` 阶段。
- setTimeout 设计在 `poll` 阶段在空闲时，且在设定时间到达后执行，但它在 `timer` 阶段执行。

```js
setTimeout(function timeout () {
  console.log('timeout');
},0);

setImmediate(function immediate () {
  console.log('immediate');
});
```
上面代码中，`setTimeout` 可能执行在前，也可能执行在后，因为受到进程性能的约束。

但是如果把这两个函数放入一个 I/O 循环内调用，`setImmediate` 总是被优先调用。

```js
const fs = require('fs');

fs.readFile(__filename, () => {
  setTimeout(() => {
    console.log('timeout');
  }, 0);
  setImmediate(() => {
    console.log('immediate');
  });
});
// immediate
// timeout
```
上面代码中，`setImmediate` 永远先执行。因为两个代码写在 I/O 回调中，I/O 回调是在 `poll` 阶段执行，当回调执行完毕后队列为空，发现存在 `setImmediate` 回调，所以就直接跳转到 `check` 阶段去执行回调了。

### process.nextTick()

这个函数其实是独立于 Event Loop 之外的，它有一个自己的队列，当每个阶段完成后，如果存在 nextTick 队列，就会清空队列中的所有回调函数，并且优于其他微任务执行。

```js
setTimeout(() => {
 console.log('timer1')
 Promise.resolve().then(function() {
   console.log('promise1')
 })
}, 0)
process.nextTick(() => {
 console.log('nextTick')
 process.nextTick(() => {
   console.log('nextTick')
   process.nextTick(() => {
     console.log('nextTick')
     process.nextTick(() => {
       console.log('nextTick')
     })
   })
 })
})
// nextTick=>nextTick=>nextTick=>nextTick=>timer1=>promise1
```

## Node 与浏览器环境下 Event Loop 的差异

浏览器环境下，微任务的任务队列是在每个宏任务执行完后之后执行。

<img src="/assets/images/note/javascript/eventLoop/eventLoop2.png" data-fancybox="gallery" />

而在 Node.js 中，微任务会在事件循环的各个阶段之间执行，也就是一个阶段执行完毕，就会去执行微任务队列的任务。

<img src="/assets/images/note/javascript/eventLoop/nodeEventLoop3.png" data-fancybox="gallery" />







