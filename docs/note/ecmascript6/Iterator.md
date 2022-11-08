# Iterator 和 for...of循环

## Iterator（遍历器）的概念

JavaScript 原有表示“集合”的数据结构，主要是数组（Array）和对象（Object），ES6添加了 `Map` 和 `Set`。

Iterator 是一种接口，为各种不同的数据结构提供统一的访问机制。**任何数据结构只要部署Iterator接口，就可以完成遍历操作。**

## Iterator 的作用

- 为各种数据结构，提供统一的、简便的访问接口
- 使得数据接口的成员能够按照某种次序排列
- ES6 创造了一种新的遍历命令 `for...of` 循环，Iterator 接口主要供 `for...of` 消费。

## Iterator 的遍历过程

（1）创建一个指针对象，指向当前数据结构的起始位置。（遍历器对象的本质就是一个指针对象。）

（2）第一次调用指针对象的 `next` 方法，可以将指针指向数据结构的第一个成员。

（3）第二次调用指针对象的 `next` 方法，指针就指向数据结构的第二个成员。

（4）不断调用指针对象的 `next` 方法，直到它指向数据结构的结束位置。

## 默认 Iterator 接口

Iterator接口的目的，就是为所有数据结构，提供一种统一的访问机制，即 `for...of` 循环。使用 `for...of` 循环遍历某种数据结构时，该循环会自动去寻找 Iterator 接口。

ES6规定，默认的 Iterator 接口部署在数据结构的 `Symbol.iterator` 属性，或者说，一个数据接口只要具有 `Symbol.iterator` 属性，就可以认为是可遍历的。

`Symbol.iterator` 属性本身是一个函数，就是当前数据结构默认的遍历器生成函数。执行这个函数，就会返回一个遍历器。

```javascript
const obj = {
    [Symbol.iterator] : function () {
        return {
            next: function () {
                return {
                    value: 1, done: true
                }
            }
        }
    }
}
```
上面代码中，obj 是可遍历的，因为具有 Symbol.iterator 属性。执行这个属性，会返回一个遍历器对象。该对象的根本特征就是具有 `next` 方法。每次调用 `next` 方法，都会返回一个代表当前成员的信息对象，具有 `value` 和 `done` 两个属性。

原生具备 Iterator 接口的数据结构可以直接用 `for...of` 循环遍历。**例如，Array、Map、Set、String、TypedArray、函数的 arguments 对象和 NodeList对象。**

```javascript
let arr = ['a', 'b', 'c'];
let iter = arr[Symbol.iterator]();

iter.next() // { value: 'a', done: false }
iter.next() // { value: 'b', done: false }
iter.next() // { value: 'c', done: false }
iter.next() // { value: undefined, done: true }
```
上面代码中，变量 `arr` 是一个数组，原生就具有遍历器接口，部署在 `arr` 的 `Symbol.iterator` 属性上面。所以，调用这个属性，就得到遍历器对象。

```javascript
let iterator = {
    a: 'a',
    b: 'b',
    c: 'c',
    length: 3,
    [Symbol.iterator]: Aarray.prototype[Symbol.iterator] 
};
for(let item of iterator) {
    console.log(item); // undefined, undefined, undefined
}

let iter = {
    0: 'a',
    1: 'b',
    2: 'c',
    length: 3,
    [Symbol.iterator]: Aarray.prototype[Symbol.iterator] 
};
for(let item of iter) {
    console.log(item);  // 'a', 'b', 'c'
}
```
普通对象部署数组的 `Symbol.iterator` 方法没有效果，类似数组的对象部署才能够进行遍历。

## 调用 Iterator 接口的场合

（1）解构赋值

对数组和 Set 结构进行解构赋值时，会默认调用 `Symbol.iterator` 方法。

```javascript
let set = new Set().add('a').add('b').add('c');

let [x,y] = set; // x='a'; y='b'

let [first, ...rest] = set; // first='a'; rest=['b','c'];
```

(2) 扩展运算符

扩展运算符（...）也会调用默认的 Iterator 接口。

```javascript
// 例一
var str = 'hello';
[...str] //  ['h','e','l','l','o']

// 例二
let arr = ['b', 'c'];
['a', ...arr, 'd']  // ['a', 'b', 'c', 'd']
```

（3）yield*

`yield*` 后面跟的是一个可遍历的结构，它会调用该结构的遍历器接口。

```javascript
// 例一
let generator = function* () {
  yield 1;
  yield* [2,3,4];
  yield 5;
};

var iterator = generator();

iterator.next() // { value: 1, done: false }
iterator.next() // { value: 2, done: false }
iterator.next() // { value: 3, done: false }
iterator.next() // { value: 4, done: false }
iterator.next() // { value: 5, done: false }
iterator.next() // { value: undefined, done: true }
```

## for...of 循环

`for...of` 循环可以使用的范围包括数组、`Set` 和 `Map` 结构、某些类似数组的对象（比如 `arguments` 对象、`DOM NodeList` 对象）、`Generator` 对象，以及字符串。

JavaScript 原有的 `for...in` 循环，只能获得对象的键名，不能直接获取键值。ES6 提供 `for...of` 循环，允许遍历获得键值。

```javascript
var arr = ['a', 'b', 'c', 'd'];

for (let a in arr) {
  console.log(a); // 0 1 2 3
}

for (let a of arr) {
  console.log(a); // a b c d
}
```
上面代码表明，`for...in` 循环读取键名，`for...of` 循环读取键值.

`for...of` 循环调用遍历器接口，数组的遍历器接口只返回具有数字索引的属性。这一点跟 `for...in` 循环也不一样。

```javascript
let arr = [3, 5, 7];
arr.foo = 'hello';

for (let i in arr) {
  console.log(i); // "0", "1", "2", "foo"
}

for (let i of arr) {
  console.log(i); //  "3", "5", "7"
}
```
上面代码中，`for...of` 循环不会返回数组 `arr` 的 `foo` 属性。
