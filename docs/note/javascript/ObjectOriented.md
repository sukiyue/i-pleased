# 面向对象的程序设计

## 对象的属性类型

有两种属性类型：数据属性和访问器属性。

### 数据属性

数据属性包含 4 个行为特性：

- [[Configurable]]：默认值为 `false`，表示是否可以删除和修改属性，是否可以修改写为访问器属性。

- [[Enumerable]]：默认值为 `false`，表示是否可以通过 ` for...in` 循环返回属性。

- [[Writable]]：默认值为 `true`，表示是否可以修改属性的值。

- [[Value]]：默认值为 `undefined`，表示属性的值。

:::tip
可以通过 `Object.definedProperty()` 方法修改默认属性的特性。

调用方法时，如果不指定特性的值，`configurable、enumerbale、writable` 特性将均默认为 false。同时也可以多次调用修改同一个属性的特性，但是把 `configurable` 特性设置为 false 之后就会有限制，后续更改为 ture 会抛出错误。
:::
