<!--
 * @Description: JavaScript 字符串常用方法
 * @Date: 2022-08-19 15:09:24
-->

# JavaScript 字符串常用方法

## charAt()

返回指定索引位置处的字符。类似于数组用中括号获取相应下标位置的数据。

```javascript
var str = 'abcdefg'

console.log(str.charAt(2)) // 输出 'c'
console.log(str[2]) // 输出 'c'
```

## concat()

类似数组的`concat()`，用来返回一个合并拼接两个或两个以上字符串。原字符串不变。

```javascript
const str1 = 'abcdefg'
const str2 = '1234567'
const str3 = str1.concat(str2)

console.log(str3) // 输出 'abcdefg1234567'
```

## indexOf(), lastIndexOf()

`indexOf()`返回一个字符在字符串中首次出现的位置,`lastIndexOf()`返回一个字符在字符串中最后一次出现的位置。

```javascript
const str = 'abcdcefcg'

console.log(str.indexOf('c')) // 输出 '2'
console.log(str.lastIndexOf('c')) // 输出 '7'
```

## slice()

提取字符串的片断，并把提取的字符串作为新的字符串返回出来。原字符串不变。

```javascript
const str = 'abcdefg'

console.log(str.slice()) // 不传递参数默认复制整个字符串
// 输出 'abcdefg'
console.log(str.slice(1)) // 传递一个，则为提取的起点，然后到字符串结尾
// 输出 'bcdefg'
console.log(str.slice(2, str.length - 1)) // 传递两个，为提取的起始点和结束点
// 输出'cdef'
```

## split()

使用指定的分隔符将一个字符串拆分为多个子字符串数组并返回，原字符串不变。

```javascript
const str = 'A*B*C*D*E*F*G'
console.log(str.split('*')) // 输出 ["A", "B", "C", "D", "E", "F", "G"]
```

## substr(), substring()

- 这两个方法的功能都是截取一个字符串的片段，并返回截取的字符串。
- `substr()` 和 `substring()` 这两个方法不同的地方就在于参数二，`substr()` 的参数二是截取返回出来的这个字符串指定的长度，`substring()` 的参数二是截取返回这个字符串的结束点，并且不包含这个结束点。而它们的参数一，都是一样的功能，截取的起始位置。
- 注意事项：`substr()` 的参数二如果为 0 或者负数，则返回一个空字符串，如果未填入，则会截取到字符串的结尾去。`substring()` 的参数一和参数二为 NAN 或者负数，那么它将被替换为 0。

```javascript
const str = 'ABCDEFGHIJKLMN'
console.log(str.substr(2)) // 输出 'CDEFGHIJKLMN'
console.log(str.substring(2)) // 输出 'CDEFGHIJKLMN'

console.log(str.substr(2, 9)) // 输出 'CDEFGHIJK'
console.log(str.substring(2, 9)) // 输出 'CDEFGHI'
```

## match()

`match()`方法可在字符串内检索指定的值，或找到一个或多个正则表达式的匹配，并返回一个包含该搜索结果的数组。

```javascript
const str = '2020年，2021年，2022年'
const reg = /\d+/g // 这里是定义匹配规则，匹配字符串里的1到多个数字
console.log(str.match(reg)) // 输出符合匹配规则的内容，以数组形式返回 ['2020', '2021', '2022']
console.log(str.match('20')) // 不使用正则 ["20", index: 0, input: "2020年，2021年，2022年"]
```

注意事项:如果 `match()` 方法没有找到匹配，将返回 `null`。如果找到匹配，则 `match()` 方法会把匹配到以数组形式返回，如果正则规则未设置全局修饰符 `g`，则 `match()` 方法返回的数组有两个特性：`input` 和 `index`。`input` 属性包含整个被搜索的字符串。`index` 属性包含了在整个被搜索字符串中匹配的子字符串的位置。

## replace()

`replace()`接收两个参数，参数一是需要替换掉的字符或者一个正则的匹配规则，参数二，需要替换进去的字符，仔实际的原理当中，参数二，你可以换成一个回调函数。

```javascript
const str = '2021年结束了，2022年开始了，2023年就也不远了'
const rex = /\d+/g // 这里是定义匹配规则，匹配字符串里的1到多个数字
const str1 = str.replace(rex, '****')
console.log(str1) // 输出："****年结束了，****年开始了,****年也不远了"
const str2 = str.replace(rex, function (item) {
  const arr = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖']
  let newStr = ''
  item.split('').map(function (i) {
    newStr += arr[i]
  })
  return newStr
})
console.log(str2) // 输出：贰零贰壹年结束了，贰零贰贰年开始了,贰零贰叁年也不远了
```

## search()

在目标字符串中搜索与正则规则相匹配的字符，搜索到，则返回第一个匹配项在目标字符串当中的位置，没有搜索到则返回 -1。

```javascript
const str = '2021年结束了，2022年开始了，2023年就也不远了'
const reg = /\d+/i // 这里是定义匹配规则,匹配字符串里的1到多个数字
console.log(str.search(reg)) // 输出 0  这里搜索到的第一项是从位置0开始的
```

## toLowerCase(), toUpperCase()

`toLowerCase()`把字母转换成小写，`toUpperCase()`则是把字母转换成大写。

```javascript
const str1 = 'abcdefg'
const str2 = 'ABCDEFG'
console.log(str2.toLowerCase()) // 输出：'abcdefg'
console.log(str1.toUpperCase()) // 输出：'ABCDEFG'
```

## includes(), startsWith(), endsWith()

`includes()、startsWith()、endsWith()`，es6 的新增方法，`includes()`用来检测目标字符串对象是否包含某个字符，返回一个布尔值，`startsWith()`用来检测当前字符是否是目标字符串的起始部分，`endwith()`是用来检测是否是目标字符串的结尾部分。

```javascript
const str = 'Excuse me, how do I get to park road?'
console.log(str.includes('how')) // 输出：true
console.log(str.startsWith('Excuse')) // 输出：true
console.log(str.endsWith('?')) // 输出：true
```

## repeat()

返回一个新的字符串对象，新字符串等于重复了指定次数的原始字符串。接收一个参数，就是指定重复的次数。原字符串不变。

```javascript
const str = 'http'
const str2 = str.repeat(3)
console.log(str) // 输出：'http'
console.log(str2) // 输出：'httphttphttp'
```
