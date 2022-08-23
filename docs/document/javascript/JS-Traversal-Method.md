<!--
 * @Description: JavaScript 遍历常用方法
 * @Date: 2022-08-23 14:20:41
-->

# JavaScript 遍历常用方法

## for()

`for` 循环，经常用的数组遍历，也可以遍历字符串。

```javascript
const arr = [1, 2, 3]
const str = 'abc'
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i])
  console.log(str[i])
}
```

## while(), do while()

`while、do while` 主要的功能是，当满足 `while` 后边所跟的条件时，来执行相关业务。
这两个的区别是，`while` 会先判断是否满足条件，然后再去执行花括号里面的任务，而 `do while` 则是先执行一次花括号中的任务，再去执行 `while` 条件，判断下次还是否再去执行 `do` 里面的操作。也就是说 `do while` 至少会执行一次操作。

```javascript
while(条件){
     执行...
}

do{
    执行...
}
while(条件)
```

## forEach()

拷贝一份遍历原数组。

- `return` 无法终止循环。不过可以起到 `continue` 效果。
- 本身是不支持的 `continue` 与 `break` 语句的，我们可以通过 `some` 和 `every` 来实现。

```javascript
const arr = [5, 1, 3, 7, 4]
arr.forEach((item, index) => {
  if (item < 2) return
  console.log(`索引：${index}，数值：${item}`)
  arr[5] = 0
})
console.log(arr)
// 打印结果：
// 索引：0，数值：5
// 索引：2，数值：3
// 索引：3，数值：7
// 索引：4，数值：4
// [5, 1, 3, 7, 4, 0]
```

## for…in

- `for…in`是 ES5 标准， 此方法遍历数组效率低，主要是用来循环遍历对象的属性。
- 遍历数组的缺点：数组的下标`index`值是数字，`for…in`遍历的`index`值"0","1","2"等是字符串。
- `Object.defineProperty`，建立的属性，默认不可枚举。

```javascript
const foo = {
  name: 'bar',
  sex: 'male',
}
Object.defineProperty(foo, 'age', { value: 18 })
for (const key in foo) {
  console.log(`可枚举属性：${key}`)
}
console.log(`age属性：${foo.age}`)
// 打印结果：
// 可枚举属性：name
// 可枚举属性：sex
// age属性：18
```

## for…of

`for…of` 是 ES6 新增的方法，但是 `for…of` 不能去遍历普通的对象，`for…of` 的好处是可以使用 `break` 跳出循环。

- `for…of` 这个方法避开了 `for…in` 循环的所有缺陷
- 与`forEach()` 不同的是，它可以正确响应`break`、`continue` 和 `return` 语句
- `for…of` 循环不仅支持数组，还支持大多数类数组对象，例如 `DOM NodeList` 对象。
- `for…of` 循环也支持字符串遍历。

```javascript
// for of 循环直接得到的就是值
const arr = [1, 2, 3]
for (const value of arr) {
  console.log(value)
}
```

::: tip
说一下 for…in 和 for…of 区别？

- for…in 用于可枚举数据，如对象、数组、字符串
- for…of 用于可迭代数据，如数组、字符串、Map、Set

:::

## every / some

返回一个布尔值。当我们需要判定数组中的元素是否满足某些条件时，可以使用`every` / `some`。
这两个的区别是，`every` 会去判断判断数组中的每一项，而 `some` 则是当某一项满足条件时返回。

```javascript
// every
const foo = [5, 1, 3, 7, 4].every((item, index) => {
  console.log(`索引：${index}，数值：${item}`)
  return item > 2
})
console.log(foo)
// every 打印：
// 索引：0，数值：5
// 索引：1，数值：1
// false

// some
const foo = [5, 1, 3, 7, 4].some((item, index) => {
  console.log(`索引：${index}，数值：${item}`)
  return item > 2
})
console.log(foo)
// some 打印：
// 索引：0，数值：5
// true
```

## filter()

- `filter` 方法用于过滤数组成员，满足条件的成员组成一个新数组返回。
- 它的参数是一个函数，所有数组成员依次执行该函数，返回结果为 `true` 的成员组成一个新数组返回。
- 该方法不会改变原数组。

```javascript
const foo = [5, 1, 3, 7, 4].filter((item, index) => {
  console.log(`索引：${index}，数值：${item}`)
  return item > 2
})
console.log(foo)
// 打印结果：
// 索引：0，数值：5
// 索引：1，数值：1
// 索引：2，数值：3
// 索引：3，数值：7
// 索引：4，数值：4
// [5, 3, 7, 4]
```

## map()

- `map` 即是 “映射”的意思 ，原数组被“映射”成对应新数组。
- `map` 支持 `return`，相当与原数组克隆了一份，把克隆的每项改变了，也不影响原数组。

```javascript
const foo = [5, 1, 3, 7, 4].map((item, index) => {
  console.log(`索引：${index}，数值：${item}`)
  return item + 2
})
console.log(foo)
// 打印结果：
// 索引：0，数值：5
// 索引：1，数值：1
// 索引：2，数值：3
// 索引：3，数值：7
// 索引：4，数值：4
// [7, 3, 5, 9, 6]
```

## reduce() / reduceRight()

`reduce` 从左到右将数组元素做“叠加”处理，返回一个值。`reduceRight` 从右到左。

```javascript
const foo = [5, 1, 3, 7, 4].reduce((total, cur) => {
  console.log(`叠加：${total}，当前：${cur}`)
  return total + cur
})
console.log(foo)
// 打印结果：
// 叠加：5，当前：1
// 叠加：6，当前：3
// 叠加：9，当前：7
// 叠加：16，当前：4
// 20
```

## Object.keys 遍历对象的属性

`Object.keys` 方法的参数是一个对象，返回一个数组。该数组的成员都是该对象自身的（而不是继承的）所有属性名，且只返回可枚举的属性。

```javascript
const obj = {
  p1: 123,
  p2: 456,
}
Object.keys(obj) // ["p1", "p2"]
```

## Object.getOwnPropertyNames() 遍历对象的属性

`Object.getOwnPropertyNames` 方法与 `Object.keys` 类似，也是接受一个对象作为参数，返回一个数组，包含了该对象自身的所有属性名。但它能返回不可枚举的属性。

```javascript
const arr = ['Hello', 'World']
Object.keys(arr) // ["0", "1"]
Object.getOwnPropertyNames(arr) // ["0", "1", "length"]
```

## 以上遍历方法的区别

::: tip

1.  map()，forEach()，filter() 循环的共同之处：

    - forEach，map，filter 循环中途是无法停止的，总是会将所有成员遍历完。

    - 他们都可以接受第二个参数，用来绑定回调函数内部的 this 变量，将回调函数内部的 this 对象，指向第二个参数，间接操作这个参数（一般是数组）。

2.  map()、filter() 循环和 forEach() 循环的不同：

    forEach 循环没有返回值，map，filter 循环有返回值。

3.  map()和 filter()都会跳过空位，for 和 while 不会

4.  some()和 every():

    some()只要有一个是 true，便返回 true；而 every()只要有一个是 false，便返回 false.

5.  reduce()，reduceRight()：

    reduce 是从左到右处理（从第一个成员到最后一个成员），reduceRight 则是从右到左（从最后一个成员到第一个成员）。

6.  Object 对象的两个遍历 Object.keys 与 Object.getOwnPropertyNames：

    他们都是遍历对象的属性，也是接受一个对象作为参数，返回一个数组，包含了该对象自身的所有属性名。

    但 Object.keys 不能返回不可枚举的属性；Object.getOwnPropertyNames 能返回不可枚举的属性。

:::
