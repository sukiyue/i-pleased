# Proxy

## 概述

`Proxy` 是ES6中新增的一个特性，可以在目标对象之前架设一层“拦截”，当外界访问这个对象时，都必须通过这层拦截。因此提供了一种机制，可以对外界的访问进行过滤和改写。

ES6原生提供 `Proxy` 构造函数，用来生成 `Proxy` 实例。

```javascript
var proxy =  new Proxy(target, handler)
```
其中，`new Proxy()` 表示生成一个 `proxy` 实例，`target` 参数表示所要拦截的目标对象，`handler` 参数也是一个对象，用来定制拦截行为。

```javascript
var proxy = new Proxy({}, {
    get: function (target, propKey) {
        return 25
    }
})

proxy.title // 25
proxy.name // 25
```
上面代码中，配置对象有一个 `get` 方法用来拦截目标对象属性的访问请求。`get` 方法的两个参数分别时目标对象和要访问的属性。因此访问任何属性，都会触发拦截，从而返回25。

`Proxy` 实例也可以作为其他对象的原型对象。

```javascript
var proxy = new Proxy({}, {
    get: function (target, propKey) {
        return 25
    }
})

let obj = Object.create(proxy)
obj.time // 25
```
上面代码中，`proxy` 对象是 `obj` 对象的原型，`obj` 对象本身没有 `time` 属性，所以根据原型链会在 `proxy` 上读取该属性，从而触发拦截。

## Proxy常用的实例方法

### get()

`get` 方法用于拦截某个属性的读取操作，可以接受三个参数，依次分别为目标对象、属性名和 `proxy` 实例本身（操作行为所针对的对象），最后一个参数可选。

```javascript
var person = {
  name: "张三"
};

var proxy = new Proxy(person, {
  get: function(target, propKey) {
    if (propKey in target) {
      return target[propKey];
    } else {
      throw new ReferenceError("Prop name \"" + propKey + "\" does not exist.");
    }
  }
});

proxy.name // "张三"
proxy.age // 抛出一个错误
```
上面代码中，如果访问目标对象不存在的属性，会抛出一个错误，如果没有拦截函数，访问不存在属性，则会返回 `undefined`。

`get` 方法可以继承

```javascript
let proto = new Proxy({}, {
    get: function(target, propKey, recevier) {
        console.log('Get' + propKey)
        return target[propKey]
    }
})

let obj = Object.create(proto)
obj.foo // Get foo
```
上面代码中，拦截操作定义在 `Prototype` 对象上，所以如果读取 `obj` 对象继承的属性时，拦截会生效。

`get` 方法第三个参数的例子
```javascript
let proxy = new Proxy({}, {
    get: function(target, propKey, recevier) {
        return recevier
    }
})

proxy.getRecevier === proxy // true
```
上面代码中，`proxy` 对象的 `getRecevier` 属性是由 `proxy` 对象提供的，所以 `recevier` 指向 `proxy` 对象。

如果一个属性不可配置（configurable）且不可写（writable），则 `proxy` 不能修改该属性，否则通过 `proxy` 对象访问该属性会报错。

```javascript
const target = Object.defineProperties({}, {
  foo: {
    value: 123,
    writable: false,
    configurable: false
  },
});

const handler = {
  get(target, propKey) {
    return 'abc';
  }
};

const proxy = new Proxy(target, handler);

proxy.foo
// TypeError: Invariant check failed
```

### set()

`set` 方法用来拦截某个属性的赋值操作，可以接受四个参数，依次为目标对象、属性名、属性值和 `Proxy` 实例本身，其中最后一个参数可选。

假定 `Person` 对象有一个 `age` 属性，该属性应该是一个不大于 200 的整数，那么可以使用 `Proxy` 保证 `age` 的属性值符合要求。

```javascript
let validator = {
  set: function(obj, prop, value) {
    if (prop === 'age') {
      if (!Number.isInteger(value)) {
        throw new TypeError('The age is not an integer');
      }
      if (value > 200) {
        throw new RangeError('The age seems invalid');
      }
    }

    // 对于满足条件的 age 属性以及其他属性，直接保存
    obj[prop] = value;
    return true;
  }
};

let person = new Proxy({}, validator);

person.age = 100;

person.age // 100
person.age = 'young' // 报错
person.age = 300 // 报错
```
上面代码中，由于设置了存值函数 `set`，任何不符合要求的 `age` 属性赋值，都会抛出一个错误，这是数据验证的一种实现方法。
利用 `set` 方法，还可以数据绑定，即每当对象发生变化时，会自动更新 DOM。

有时，我们会在对象上面设置内部属性，属性名的第一个字符使用下划线开头，表示这些属性不应该被外部使用。结合get和set方法，就可以做到防止这些内部属性被外部读写。

```javascript
const handler = {
  get (target, key) {
    invariant(key, 'get');
    return target[key];
  },
  set (target, key, value) {
    invariant(key, 'set');
    target[key] = value;
    return true;
  }
};

function invariant (key, action) {
  if (key[0] === '_') {
    throw new Error(`Invalid attempt to ${action} private "${key}" property`);
  }
}

const target = {};
const proxy = new Proxy(target, handler);
proxy._prop
// Error: Invalid attempt to get private "_prop" property
proxy._prop = 'c'
// Error: Invalid attempt to set private "_prop" property
```
上面代码中，只要读写的属性名的第一个字符是下划线，一律抛错，从而达到禁止读写内部属性的目的。

### apply()

`apply` 方法拦截函数的调用、`call` 和 `apply` 操作。

`apply` 方法可以接受三个参数，分别是目标对象、目标对象的上下文对象（this）和目标对象的参数数组。

```javascript
var target = function () { return 'I am the target'; };
var handler = {
  apply: function () {
    return 'I am the proxy';
  }
};

var p = new Proxy(target, handler);

p()
// "I am the proxy"
```
上面代码中，变量 `p` 是 `Proxy` 的实例，当它作为函数调用时（`p()`），就会被 `apply` 方法拦截，返回一个字符串。

### has()

`has()` 方法用来拦截 `HasProperty` 操作，即判断对象是否具有某个属性时，这个方法会生效。典型的操作就是 `in` 运算符。

`has()` 方法可以接受两个参数，分别是目标对象、需查询的属性名。

```javascript
var handler = {
  has (target, key) {
    if (key[0] === '_') {
      return false;
    }
    return key in target;
  }
};
var target = { _prop: 'foo', prop: 'foo' };
var proxy = new Proxy(target, handler);
'_prop' in proxy // false
```
如果原对象的属性名的第一个字符是下划线，`proxy.has()` 就会返回 `false`，从而不会被 `in` 运算符发现。

