# 原型

**参考文章：**

冴羽老师的[JavaScript深入之从原型到原型链](https://github.com/mqyqingfeng/Blog/issues/2)

## 什么是原型

每一个 JavaScrpit 对象（null除外）在创建的时候就会与之关联的另一个对象，这个对象就是原型，每一个对象都会从原型上继承属性。

## prototype

每一个函数都有一个 `prototype` 属性。

```javascript
function Person() {
}
Person.prototype.name = 'zhy'

var person = new Person()
console.log(person.name) // zhy
```
函数 prototype 属性都会指向一个对象，这个对象就是调用该构建函数而创建的实例对象的原型，即 person 的原型。

构造函数与实例原型之间的关系为：

<img src="/assets/images/note/javascript/prototype/prototype1.png" alt="prototype" data-fancybox="gallery" />

上图表明构造函数与实例原型之间的关系，那么要表示实例与实例原型之间的关系就需要用到 `__proto__` 属性。

:::tip
`prototype` 是函数才会有的属性， 而 `__proto__` 是几乎所有对象都有的属性。
:::

## `__proto__`

每一个 JavaScrpit 对象（null除外）都具有一个属性，`__proto__`，这个属性会指向该对象的原型。

```javascript
function Person() {
}
var person = new Person()
console.log(person.__proto__ === Person.prototype) // true
```
那么实例与实例原型之间的关系为 `person.__proto__ == Person.prototype`。即如下图：

<img src="/assets/images/note/javascript/prototype/prototype2.png" alt="__proto__" data-fancybox="gallery" />

## constructor

每个原型都有一个 `constructor` 属性指向其关联的构造函数。

用上面的例子则表明：

```javascript
function Person() {
}
var person = new Person()
console.log(Person === Person.prototype.constructor) // true
```
那么构造函数与实例原型之间关系为 `Person === Person.prototype.constructor`。即如下图：

<img src="/assets/images/note/javascript/prototype/prototype3.png" alt="构造函数与实例原型之间的关系" data-fancybox="gallery" />

## 实例与原型的关系

当读取实例的属性时，如果没有找到，js解释器就会从实例对象的原型上去找，如果原型上也没有找到，就会去原型的原型上去查找，直到返回 null 为止，null 没有原型。

```javascript
function Person() {
}
Person.prototype.name = 'whm'

var person = new Person()

person.name = 'zhy'
console.log(person.name) // zhy

delete person.name
console.log(person.name) // whm
```
在上面代码中，我们给实例对象添加了 name 属性，当我们去读取 `person.name` 时候，在实例对象上能够直接找到，于是就打印了 `zhy`。

当我们将添加的 name 属性删除后，再去读取 `person.name` 时，js解释器在实例对象上无法找到，就会从实例对象的原型上，即在 `person.__proto__` 上，也就是在 `Person.prototype` 上找，从而打印了 `whm`。

## 原型的原型

原型也是一个对象，可以通过最原始的方法创建它。

```javascript
var obj = new Object()
obj.name = 'zhy'
```
原型对象就是通过 Object 构造函数生成的，其实例的 `__proto__` 指向构造函数的 `prototype`。

<img src="/assets/images/note/javascript/prototype/prototype4.png" alt="原型的原型" data-fancybox="gallery" />

## 原型链

Object.prototype 的原型为 null。所以在查找属性的时候，查找到 Object.prototype 上就可以停止查找了。

<img src="/assets/images/note/javascript/prototype/prototype5.png" alt="原型链" data-fancybox="gallery" />

图中由相互关联的原型组成的链状结构就是原型链，也就是蓝色的线。


## 拓展1: new 过程

new 的过程发生了什么？

1. 创建了一个对象。
2. 将对象的 `__proto__` 指向了构造函数的 `prototype`。
3. 执行构造函数的内部方法，并改变构造函数内部的 this 指向到新对象中。
4. 返回该构造函数的结果。

根据以上几点，实现一个 new 的操作，从而真正理解 new 原生的实现。

```javascript
function newFn(Fn, ...arg) {
    // 创建一个对象
    const obj = {}
    // 将对象的 __proto__ 指向构造函数的 prototype
    obj.__proto__ = Fn.prototype
    // 改变 this 指向
    const result = Fn.call(obj, ...arg)
    // 返回结果
    return typeof result === 'object' ? result : obj
}
```














