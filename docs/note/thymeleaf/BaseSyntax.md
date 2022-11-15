# 基础语法

## 文本标签 th:text 和 th:utext

二者都用于文本内容的显示操作，进行文本替换，区别在于**前者不会解析html，而后者会解析html。**

```java
@requestMapping("/th")
public String th(Model model) {
    String msg = "<h1>Demo<h1>";
    model.addAttribute("msg", msg);
    return "/demo/th"
}
```

```html
<p th:text="text标签： + ${msg}"></p>
<!-- <p>text标签：<h1>Demo</h1></p>  -->

<p th:utext="text标签： + ${msg}"></p>
```
`th:text` 进行文本替换，`<h1>`标签不会被解析。`th:utext` 进行文本替换，`<h1>`标签会被解析。

## th:if

根据条件的布尔值判断是否需要展示此标签。

```html
<p th:if="${isShow}">展示</p>
```

## th:each

遍历，支持 Iterable、Map、数组等。

```html
<ul>
   <li th:each="tag:${user.getTags()}" 
       th:text="${tag}"></li>
</ul>
```

## th:switch

与 Java 的 switch case语句类似通常与 `th:case` 配合使用，根据不同的条件展示不同的内容。

```html
<div th:switch="${user.getSex()}">	
    <p th:case="'1'">男</p>
    <p th:case="'2'">女</p>	
    <p th:case="*">默认</p>
</div>
```
