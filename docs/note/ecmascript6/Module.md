# Module 的语法

## 概述

JavaScript之前一直没有模块(module)体系，无法将一个大程序拆分成互相依赖的小文件，再用简单的方法拼装起来。这对开发大型的、复杂的项目形成了巨大障碍。

::: tip
在ES6之前，社区制定了一些模块加载的方案，最主要的有用于服务器的 `CommonJS` 和用于浏览器的 `AMD`。ES6在语言标准的层面上，实现了模块功能，而且实现简单，完全可以取 `CommonJS` 和 `AMD` 规范，成为浏览器和服务器通用的模块解决方案。
:::

ES6模块的设计思想 **尽可能静态化**

使得编译时就能确定模块的依赖关系，以及输入和输出的变量。

`CommonJS` 和 `AMD` 都只能在运行时确定模块的依赖关系和输入输出的变量。例如，`CommonJS` 模块就是对象，输入时必须查找对象属性。

```javascript
// CommonJS模块
let { stat, exists, readfile } = require('fs')

// 等同于
let _fs = require('fs')
let stat = _fs.stat;
let exists = _fs.exists;
let readfile = _fs.readfile;
```

上面代码的实质就是整体加载了fs模块，生成了一个对象，然后从对象上读取了 3 个方法。

这种加载称为“运行时加载”。只有运行时才能得到这个对象，导致无法在编译时做“静态优化”。

ES6 模块，不是对象，通过 `export` 显式指定输出的代码，在通过 `import` 命令输入，同时自动采用严格模式。

```javascript
// ES6模块
import { stat, exists, readFile } from 'fs';
```

上面代码的实质是从`fs`模块加载 3 个方法，其他方法不加载。这种加载称为“编译时加载”或者静态加载，即 ES6 可以在编译时就完成模块加载，效率要比 `CommonJS` 模块的加载方式高。

模块功能主要由两个命令构成：`export` 和 `import`。`export` 命令用于规定模块的对外接口，`import` 命令用于输入其他模块提供的功能。

## export命令

一个模块就是一个独立的文件。该文件内部的所有变量，外部都无法获取。如果你希望外部能够读取内部的某个变量，就必须使用 `export` 关键字输出该变量。

使用 `export` 命令输出变量

```javascript
// 写法一
export var firstName = 'Michael';
export var lastName = 'Jackson';
export var year = 1958;

// 写法二
var firstName = 'Michael';
var lastName = 'Jackson';
var year = 1958;

export { firstName, lastName, year };
```

通常情况下，`export` 输出的变量就是本来的名字，但是可以使用 `as` 关键字重命名。

```javascript
function v2() { ... }

export {
  v2 as streamLatestVersion
};
```

`export` 命令可以出现在模块的任何位置，只要处于模块顶层就可以。如果处于块级作用域内，就会报错，`import` 命令也是如此。这是因为处于条件代码块之中，就没法做静态优化了，违背了 ES6 模块的设计初衷。

```javascript
function foo() {
  export default 'bar' // SyntaxError
}
foo()
```

## import命令

使用 `export` 命令定义模块接口之后，其他文件可以通过 `import` 命令加载这个模块。

```javascript
import { firstName, lastName, year } from './profile.js';

function setName(element) {
  element.textContent = firstName + ' ' + lastName;
}
```

使用 `as` 关键字，将输入的变量重命名。

```javascript
import { lastName as surname } from './profile.js';
```

`import` 命令输入的变量都是只读的，因为它的本质是输入接口。也就是说，不允许在加载模块的脚本里面，改写接口。

```javascript
import {a} from './xxx.js'

a = {}; // Syntax Error : 'a' is read-only;
```

但如果a是一个对象的话，改写a的属性是允许的。但是这样的写法很难查错，建议输入的变量，都当做完全只读，不要轻易改变它的属性。

```javascript
import {a} from './xxx.js'

a.foo = 'hello'; // 合法操作
```


`import`是静态执行，所以不能使用表达式和变量，这些只有在运行时才能得到结果的语法结构。

```javascript
// 报错
import { 'f' + 'oo' } from 'my_module';

// 报错
let module = 'my_module';
import { foo } from module;

// 报错
if (x === 1) {
  import { foo } from 'module1';
} else {
  import { foo } from 'module2';
}
```

## 模块的整体加载

整体加载，即用星号（*）指定一个对象，所有输出值都加载在这个对象上面。

```javascript
// circle.js

export function area(radius) {
  return Math.PI * radius * radius;
}

export function circumference(radius) {
  return 2 * Math.PI * radius;
}

// main.js

import * as circle from './circle';

console.log('圆面积：' + circle.area(4));
console.log('圆周长：' + circle.circumference(14));
```
上面代码通过 `*` 将 `circle.js` 中两个方法整体加载到 `main.js`中。

## export default 命令

用 `export default` 命令，为模块指定默认输出。用户不需要知道所要加载的变量名或函数名，能够快速上手。

```javascript
// export-default.js
export default function () {
  console.log('foo');
}
```
其他模块加载该模块时，`import` 命令可以为该匿名函数指定任意名字。

```javascript
// import-default.js
import customName from './export-default';
customName(); // 'foo'
```
上面代码的 `import` 命令，可以用任意名称指向 `export-default.js` 输出的方法，这时就不需要知道原模块输出的函数名。需要注意的是，这时 `import` 命令后面，不使用大括号。

本质上，`export default` 就是输出一个叫做 `default` 的变量或方法，然后系统允许你为它取任意名字。

```javascript
// modules.js
function add(x, y) {
  return x * y;
}
export {add as default};
// 等同于
// export default add;

// app.js
import { default as foo } from 'modules';
// 等同于
// import foo from 'modules';
```

正是因为 `export default` 命令其实只是输出一个叫做default的变量，所以它后面不能跟变量声明语句。

```javascript
// 正确
export var a = 1;

// 正确
var a = 1;
export default a;

// 错误
export default var a = 1;
```

## import()

`import` 命令会被JavaScript引擎静态分析，先于模块内的其他语句执行。

```javascript
// 报错
if (x === 2) {
  import MyModual from './myModual';
}
```
上面代码中，引擎处理 `import` 语句是在编译时，这时不会去分析或执行 `if` 语句，所以 `import` 语句放在if代码块之中毫无意义，因此会报句法错误，而不是执行时错误。也就是说，`import` 和 `export` 命令只能在模块的顶层，不能在代码块之中（比如，在 `if` 代码块或者函数之中）。

因此`import` 命令无法取代 `require` 的动态加载功能。（`require` 到底加载哪一个模块，只有运行时才知道）
这时需要`import()` 函数，支持动态加载模块。

**适用场合**

(1) 按需加载

`import()` 可以在需要的时候，再加载某个模块。

```javascript
button.addEventListener('click', event => {
  import('./dialogBox.js')
  .then(dialogBox => {
    dialogBox.open();
  })
  .catch(error => {
    /* Error handling */
  })
});
```
上面代码中，`import()` 方法放在 `click` 事件的监听函数之中，只有用户点击了按钮，才会加载这个模块。

(2) 条件加载

`import()` 可以放在 `if` 代码块，根据不同的情况，加载不同的模块。

```javascript
if (condition) {
  import('moduleA').then(...);
} else {
  import('moduleB').then(...);
}
```
上面代码中，如果满足条件，就加载模块 A，否则加载模块 B。

(3) 动态的模块路径

`import()` 允许模块路径动态生成。

```javascript
import(f())
.then(...);
```
上面代码中，根据函数 `f` 的返回结果，加载不同的模块。