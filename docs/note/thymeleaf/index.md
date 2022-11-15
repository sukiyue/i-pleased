# 前言

此模块为在学习Thymeleaf过程中整理的一些知识点。

官方文档：[Thymeleaf](https://www.thymeleaf.org/doc/tutorials/3.0/usingthymeleaf.html)

## 什么是 Thymeleaf

::: tip
Thymeleaf 是一个现代服务器端 Java 模板引擎，适用于web和独立环境，能够处理 HTML、XML、JavaScript、CSS 甚至纯文本。

其主要目标是提供一种优雅且可维护的创建模板的方式，以自然模板的概念为基础，将其逻辑注入模板文件，其方式不会影响模板被用作设计原型。它改善了设计沟通，并在设计和开发团队之间架起了桥梁。
:::

Thymeleaf 是新一代 Java 模板引擎，与 Velocity、FreeMarker 等传统 Java 模板引擎不同，Thymeleaf 支持 HTML 原型，其文件后缀为“.html”，因此它可以直接被浏览器打开，此时浏览器会忽略未定义的 Thymeleaf 标签属性，展示 thymeleaf 模板的静态页面效果；当通过 Web 应用程序访问时，Thymeleaf 会动态地替换掉静态内容，使页面动态显示。