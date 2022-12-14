# JavaScript 垃圾（内存）回收机制

JavaScript 具有自动垃圾回收机制，执行环境会负责管理代码执行过程中使用的内存。在编写 JavaScript 程序时，开发人员不需要再关心内存使用问题，所需内存的分配以及无用内存的回收完全实现了自动管理。

这种机制的原理：**找出那些不再使用的变量，然后释放其占有的内存。**

因此，垃圾回收机制会按照固定的时间间隔（或代码执行中预定的收集时间），周期性的执行这一操作。垃圾回收机制通常有两个策略。

## 标记清除

JavaScript 中最常用的办法是 **标记清除法（mark and sweep）**。当变量进入环境时（例如，在函数中声明一个变量），就将这个变量标记为“进入环境”，当变量离开环境时，就将这个变量标记为“离开环境”。

垃圾收集器会在运行的时候给存储在内存中的所有变量都加上标记，然后去除环境中的变量以及被环境中的变量引用的变量（闭包）的标记，在这些完成之后，剩下带有标记的就是需要删除的变量。最后，垃圾收集器完成内存清除工作，销毁那些带有标记的值并回收它们所占用的内存空间。

## 引用计数

**引用计数法（reference counting）** 的含义就是跟踪记录每个值被引用的次数。当声明一个变量并将一个引用类型的值赋给该变量时，则这个值的引用次数就是 1，如果同一个值又被赋值给另一个变量，则该值的引用次数加 1。相反，如果包含这个值引用的变量的值变成了另外一个，则该值的引用次数减 1。

当这个值的因此次数为 0 时，说明无法再访问这个值了，因此就可以将其所占用的内存空间回收回来。这样，当垃圾收集器下次运行的时候，它会释放那些引用次数为 0 的值所占用的内存空间。

::: tip

在 IE 中虽然 JavaScript 对象通过标记清除的方式进行垃圾回收，但 BOM 与 DOM 对象却是通过引用计数回收垃圾的，也就是说只要涉及 BOM 及 DOM 就会出现循环引用问题。

但 IE9 把 BOM 和 DOM 对象都转换成了真正的 JavaScript 对象，这样，就避免了两种垃圾收集算法并存导致的问题，也消除了常见的内存泄漏现象。

:::

**解除变量的引用不仅有助于消除循环引用现象，而且对垃圾收集也有好处。为了确保有效地回收内存，应该及时解除不再使用的全局对象、全局对象属性以及循环引用变量的引用。**
