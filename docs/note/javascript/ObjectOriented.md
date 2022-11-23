# 面向对象的程序设计

## 对象的属性类型

有两种属性类型：数据属性和访问器属性。

### 数据属性

数据属性包含 4 个行为特性：

- [[Configurable]]：表示是否可以删除属性，是否可以修改属性特性，是否可以修改写为访问器属性。直接定义对象属性时默认值为 `true`。

- [[Enumerable]]：表示是否可以通过 `for...in` 循环返回属性。直接定义对象属性时默认值为 `true`。

- [[Writable]]：表示是否可以修改属性的值。直接定义对象属性时默认值为 `true`。

- [[Value]]：表示属性的值。默认值为 `undefined`。

:::tip

可以通过 `Object.defineProperty()` 方法修改默认属性的特性。

调用方法时，如果不指定特性的值，`configurable、enumerbale、writable` 特性将均默认为 false。同时也可以多次调用修改同一个属性的特性，但是把 `configurable` 特性设置为 false 之后就会有限制，后续更改为 ture 会抛出错误。

:::

### 访问器属性

- [[Configurable]]：表示是否可以删除属性，是否可以修改属性特性，是否可以修改为数据属性。直接定义对象属性时默认值为 `true`。

- [[Enumerable]]：表示是否可以通过 `for...in` 循环返回属性。直接定义对象属性时默认值为 `true`。

- [[Get]]：在读取属性时调用的函数。默认值为 `undefined`。

- [[Set]]：在写入属性时调用的函数。默认值为 `undefined`。

:::tip

访问器属性不能直接定义，必须使用 `Object.defineProperty()` 方法来定义。

:::

## Object.defineProperty()

`Object.defineProperty()` 方法可以直接定义一个对象的新属性，也可以修改默认属性的特性，并返回这个对象。

**语法**

```javascript
Object.defineProperty(obj, prop, descriptor)
```
方法接收三个参数：
- obj：需要定义属性的对象
- prop：需要被定义或修改的属性名
- descriptor：需要被定义或修改的属性的描述符，包含 configurable、enumerbale、writable 和 value 四个特性。

**用法**

定义对象属性，我们可以直接定义对象属性或者用 `Object.defineProperty()` 方法定义。

```javascript
// 定义一个空对象 user
var user = {}

// 直接定义属性 name
user.name = 'ws' 

console.log(user) // {name: 'ws'}

user.name = 'wss' 

console.log(user) // {name: 'wss'}
```
当直接定义属性时，属性的 `configurable、enumerable、writable` 特性均默认为 true，此时直接修改属性 name 的值是可以成功的。

```javascript
// 定义一个空对象 user
var user = {}

// 用Object.defineProperty() 定义属性 name
Object.defineProperty(user, 'name', {
    value: 'ws'
})

console.log(user) // {name: 'ws'}

user.name = 'wss' 

console.log(user) // {name: 'ws'}

delete user.name // 执行失败
```
当用 Object.defineProperty() 定义属性时，如果没有特别指定，属性的 `configurable、enumerable、writable` 特性均默认为 `false`，此时属性的值不允许修改，则并不会修改成功。同时 `delete user.name` 也会执行失败。

```javascript
Object.defineProperty(user, 'name', {
    configurable: true,
    value: 'ws'
})

user.name = 'wss' 

console.log(user) // {name: 'wss'}

delete user.name // 执行成功
```
如果在定义时设置了 configurable 特性为 true时，此时直接修改 name 属性值是可行的。同时 `delete user.name` 也可以执行成功。

但当 configurable 为 `false` 时，再次调用 Object.defineProperty() 方法修改特性 configurable 为 `true` 时，就会报错。

::: tip

同理，直接定义对象属性时 enumerable 特性也默认为 true，但用 Object.defineProperty() 定义属性时，如果没有特别指定 enumerable 特性默认为 false，此时 for...in 或者用 Object.keys() 遍历属性都不会遍历此时定义的属性名，唯有 enumerable 特性为 true 时，才会遍历。

:::
