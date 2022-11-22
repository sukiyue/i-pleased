# 前言

此模块为个人在学习 JavaScript 过程中整理的一些知识点。

JavaScript 是一种基于原型、多范式、单线程的动态语言，并且支持面向对象、命令式和声明式风格。

## 数据类型

五种基本数据类型：Undefined、Null、Boolean、Number、String
一种复杂数据类型：Object

## typeof 操作符

由于 ECMAScript 是松散类型的，所以需要一种手段来检测给定变量的数据类型 -- typeof就是负责提供这方面信息的操作符。

使用 typeof 操作符可能返回下列某个字符串：

- "undefined" -- 如果这个值未定义；
- "boolean" -- 如果这个值是布尔值；
- "string" -- 如果这个值是字符串；
- "number" -- 如果这个值是数值；
- "object" -- 如果这个值是对象或者null；
- "function" -- 如果这个值是函数。