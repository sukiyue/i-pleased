# JavaScript 数组常用方法

## Array 对象

Array 对象用于在单个变量中存储多个值：

```javascript
const cars = ['Tesla', 'Volvo', 'BMW']
```

## Array 属性

### constructor

**定义和用法**

在 JavaScript 中，constructor 属性返回对象的构造函数。

**实例**

```javascript
var fruits = ['Banana', 'Orange', 'Apple', 'Mango']
fruits.constructor
// 返回 function Array() { [native code] }
```

### length

**定义和用法**

设置或返回数组中元素的数量。

**语法**

```
// 设置数组中元素的数量
array.length = number;
```

**实例**

返回数组中元素的数量

```javascript
var fruits = ['Banana', 'Orange', 'Apple', 'Mango']
fruits.length
// 4
```

### prototype

**定义和用法**

- prototype 是可用于所有 JavaScript 对象的全局构造函数。
- prototype 引用全局 Array()对象。
- prototype 构造函数允许向数组添加新的属性和方法。
- 当构造新属性时，所有数组都将获得此属性及其值。当构造新方法时，所有数组都将获得此方法。

**实例**

创建一个新的数组方法，将数组值转换为大写：

```javascript
Array.prototype.myUpperCase = function () {
  for (i = 0; i < this.length; i++) {
    this[i] = this[i].toUpperCase()
  }
}
```

创建一个数组，然后调用这个方法：

```javascript
var fruits = ['Banana', 'Orange', 'Apple', 'Mango']
fruits.myUpperCase()
// BANANA,ORANGE,APPLE,MANGO
```

## Array 方法

### push()

**定义和用法**

push() 方法向数组末尾添加新项，并返回新的长度。

注释：push() 方法会改变数组的长度。如需在数据的头部添加新项，请使用 unshift() 方法。

**语法**

```
array.push(item1, item2, ..., itemX)
```

**参数**

item1, item2, ..., itemX：必需，要添加到数组中的项。

**实例**

向数组的末尾添加一个新的项：

```javascript
var fruits = ['Banana', 'Orange', 'Apple', 'Mango']
fruits.push('Kiwi')
// 数组fruits将变为["Banana", "Orange", "Apple", "Mango", "Kiwi"]

document.getElementById('demo').innerHTML = fruits.push('Lemon')
// innerHTML的值为5
```

### unshift()

**定义和用法**

unshift() 方法将新项添加到数组的开头，并返回新的长度。

注释：unshift() 方法会改变数组的长度。如需在数据的末尾添加新项，请使用 push() 方法。

**语法**

```
array.unshift(item1, item2, ..., itemX)
```

**参数**

item1, item2, ..., itemX：必需，要添加到数组中的项。

**实例**

向数组的开头添加一个新的项：

```javascript
var fruits = ['Banana', 'Orange', 'Apple', 'Mango']
fruits.unshift('Lemon', 'Pineapple')
// 数组fruits将变为["Lemon", "Pineapple", "Banana", "Orange", "Apple", "Mango"]

document.getElementById('demo').innerHTML = fruits.unshift('Lemon', 'Pineapple')
// innerHTML的值为6
```

### pop()

**定义和用法**

pop() 方法将移除数组中的最后一个元素，并返回该元素。

注释：pop() 方法会改变数组的长度。如需删除数组的第一个元素，请使用 shift() 方法。

**语法**

```
array.pop()
```

**实例**

```javascript
var fruits = ['Banana', 'Orange', 'Apple', 'Mango']
fruits.pop()
// fruits.pop()返回Mango，数组fruits将变为["Banana", "Orange", "Apple"]
```

### shift()

**定义和用法**

shift() 方法将移除数组中的第一个元素，并返回该元素。

注释：shift() 方法会改变数组的长度，shift() 方法会改变原始数组。如需删除数组的最后一个元素，请使用 pop() 方法。

**语法**

```
array.shift()
```

**实例**

```javascript
var fruits = ['Banana', 'Orange', 'Apple', 'Mango']
fruits.shift()
// fruits.shift()返回Banana，数组fruits将变为["Orange", "Apple", "Mango"]
```

### find()

**定义和用法**

find() 方法返回数组中第一个通过测试的元素的值（作为函数提供）。

find() 方法对数组中存在的每个元素执行一次函数：

- 如果找到函数返回 true 值的数组元素，则 find() 返回该数组元素的值（并且不检查剩余值）
- 否则返回 undefined

注意：find() 不对空数组执行该函数，且不会改变原数组。

**语法**

```
array.find(function(currentValue, index, arr), thisValue)
```

**参数**

function(currentValue, index, arr)：必需。为数组中的每个元素运行的函数。

currentValue：必需。当前元素的值。

index：可选。当前元素的数组索引。

arr：可选。当前元素所属的数组对象。

thisValue：可选。对象作为该执行回调时使用，传递给函数，用作 "this" 的值。如果省略了 thisValue ，"this" 的值为 "undefined"。

**实例**

获取数组中第一个值为 18 或者更大的元素的值：

```javascript
var ages = [3, 10, 18, 20]

function checkAdult(age) {
  return age >= 18
}

function myFunction() {
  document.getElementById('demo').innerHTML = ages.find(checkAdult)
}
// 返回18
```

### some()

**定义和用法**

some() 方法用于检测数组中的元素是否满足指定条件（通过函数提供）。

some() 方法会依次执行数组的每个元素：

- 如果有一个元素满足条件，则表达式返回 ture，剩余的元素不会再执行检测。
- 如果没有满足条件的元素，则返回 false。

注意：some() 不会检测空数组，不会改变原始数组。

**语法**

```
array.some(function(currentValue,index,arr),thisValue)
```

**参数**

function(currentValue, index, arr)：必需。为数组中的每个元素运行的函数。

currentValue：必需。当前元素的值。

index：可选。当前元素的数组索引。

arr：可选。当前元素所属的数组对象。

thisValue：可选。对象作为该执行回调时使用，传递给函数，用作 "this" 的值。如果省略了 thisValue ，"this" 的值为 "undefined"。

**实例**

检测数组中是否含有大于 18 的元素：

```javascript
var ages = [3, 10, 18, 20]

function checkAdult(age) {
  return age >= 18
}

function myFunction() {
  document.getElementById('demo').innerHTML = ages.some(checkAdult)
}
// 输出结果为true
```

### every()

**定义和用法**

every() 方法用于检测数组所有元素是否都满足指定条件（通过函数提供）。

every() 方法会依次检测数组的所有元素：

- 如果有一个元素不满足条件，则表达式返回 false，剩余的元素不会再执行检测。
- 如果所有元素都满足条件，则返回 true。

注意：every() 不会检测空数组，不会改变原始数组。

**语法**

```
array.every(function(currentValue,index,arr), thisValue)
```

**参数**

function(currentValue, index, arr)：必需。为数组中的每个元素运行的函数。

currentValue：必需。当前元素的值。

index：可选。当前元素的数组索引。

arr：可选。当前元素所属的数组对象。

thisValue：可选。对象作为该执行回调时使用，传递给函数，用作 "this" 的值。如果省略了 thisValue ，"this" 的值为 "undefined"。

**实例**

检测数组中的元素是否都大于等于 18：

```javascript
var ages = [32, 33, 16, 40]

function checkAdult(age) {
  return age >= 18
}

function myFunction() {
  document.getElementById('demo').innerHTML = ages.every(checkAdult)
}
// 输出结果为false
```

### map()

**定义和用法**

map() 方法返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值。

map() 方法按照原始数组元素顺序依次处理元素。

注意：map() 不会检测空数组，不会改变原始数组。

**语法**

```
array.map(function(currentValue,index,arr), thisValue)
```

**参数**

function(currentValue, index, arr)：必需。为数组中的每个元素运行的函数。

currentValue：必需。当前元素的值。

index：可选。当前元素的数组索引。

arr：可选。当前元素所属的数组对象。

thisValue：可选。对象作为该执行回调时使用，传递给函数，用作 "this" 的值。如果省略了 thisValue ，"this" 的值为 "undefined"。

**实例**

返回一个数组，数组中的元素为原始数组的平方根：

```javascript
var numbers = [4, 9, 16, 25]

function myFunction() {
  x = document.getElementById('demo')
  x.innerHTML = numbers.map(Math.sqrt)
}
// 输出结果为2，3，4，5
```

### reduce()

**定义和用法**

reduce() 接收一个函数作为累加器，数组中的每个数（从左到右）开始缩减，最终计算为一个值。

reduce() 可以作为一个高阶函数，用于函数的 compose。

注意：reduce() 对于空数组是不会执行回调函数的。

**语法**

```
array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
```

**参数**

function(total, currentValue, currentIndex, arr)：必需。为数组中的每个元素运行的函数。

total：必需。_初始值_, 或者计算结束后的返回值。

currentValue：必需。当前元素的值。

currentIndex：可选。当前元素的数组索引。

arr：可选。当前元素所属的数组对象。

initialValue：可选。传递给函数的初始值。

**实例**

计算数组元素相加后的总和：

```javascript
var numbers = [65, 44, 12, 4]

function getSum(total, num) {
  return total + num
}
function myFunction(item) {
  document.getElementById('demo').innerHTML = numbers.reduce(getSum)
}
// 输出结果为125
```

### splice()

**定义和用法**

splice() 用于添加或删除数组中的元素。

注意：splice() 方法会改变原始数组。

**返回值**

如果仅删除一个元素，则返回一个元素的数组。如果未删除任何元素，则返回空数组。

**语法**

```
array.splice(index,howmany,item1,.....,itemX)
```

index：必需。规定从何处添加/删除元素。该参数是开始插入和（或）删除的数组元素的下标，必须是数字。

howmany：可选。规定应该删除多少元素。必须是数字，但可以是 "0"。如果未规定此参数，则删除从 index 开始到原数组结尾的所有元素。

item1,.....,itemX：可选。要添加到数组的新元素。

**实例**

数组中添加新元素：

```javascript
var fruits = ['Banana', 'Orange', 'Apple', 'Mango']
fruits.splice(2, 0, 'Lemon', 'Kiwi')
// 输出结果为Banana,Orange,Lemon,Kiwi,Apple,Mango
```

### concat()

**定义和用法**

concat() 方法用于连接两个或多个数组。该方法不会改变现有的数组，而仅仅会返回被连接数组的一个副本。

**语法**

```
array1.concat(array2,array3,...,arrayX)
```

**参数**

array2,array3,...,arrayX：必需。该参数可以是具体的值，也可以是数组对象。可以是任意多个。

**返回值**

返回一个新的数组。该数组是通过把所有 arrayX 参数添加到 arrayObject 中生成的。如果要进行 concat() 操作的参数是数组，那么添加的是数组中的元素，而不是数组。

**实例**

合并三个数组的值：

```javascript
var hege = ['Cecilie', 'Lone']
var stale = ['Emil', 'Tobias', 'Linus']
var kai = ['Robin']
var children = hege.concat(stale, kai)
// 输出结果为Cecilie,Lone,Emil,Tobias,Linus,Robin
```

### filter()

**定义和用法**

filter() 方法创建一个新的数组，新数组中的元素是通过检查指定数组中符合条件的所有元素。

注意： filter() 不会对空数组进行检测。filter() 不会改变原始数组。

**语法**

```
array.filter(function(currentValue,index,arr), thisValue)
```

**参数**

function(currentValue, index, arr)：必需。为数组中的每个元素运行的函数。

currentValue：必需。当前元素的值。

index：可选。当前元素的数组索引。

arr：可选。当前元素所属的数组对象。

thisValue：可选。对象作为该执行回调时使用，传递给函数，用作 "this" 的值。如果省略了 thisValue ，"this" 的值为 "undefined"。

**实例**

返回数组 ages 中所有元素都大于 18 的元素:

```javascript
var ages = [32, 33, 16, 40]

function checkAdult(age) {
  return age >= 18
}

function myFunction() {
  document.getElementById('demo').innerHTML = ages.filter(checkAdult)
}
// 输出结果为32,33,40
```
