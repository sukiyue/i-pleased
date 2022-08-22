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

类似数组的 concat()，用来返回一个合并拼接两个或两个以上字符串。原字符串不变。

```javascript
const str1 = 'abcdefg'
const str2 = '1234567'
const str3 = str1.concat(str2)

console.log(str3) // 输出 'abcdefg1234567'
```

## indexOf()、lastIndexOf()

`indexOf`,返回一个字符在字符串中首次出现的位置,`lastIndexOf`返回一个字符在字符串中最后一次出现的位置。

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
