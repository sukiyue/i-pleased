# npm & yarn & pnpm 包管理机制

## npm

`npm` 早期采用的是**嵌套的node_modules结构**，直接依赖平铺在 node_modules 下，子依赖嵌套在直接依赖的 node_modules 中。

此时的 npm 存在的问题：

  1. 完全按照目录结构下载依赖树，容易造成依赖地狱（Dependency Hell），并且最关键的是 windows 上支持的文件路径最长是 260 多个字符。

  2. 单个项目中，同一个版本的依赖包，有可能被下载多次；多个项目中，每次都需要重新下载所有依赖包，浪费了大量的磁盘空间。

`npm v2` 的目录结构

```sh
node_modules
    ├── moduleA
    │   └── node_modules
    │       └── moduleC
    └── moduleB
        └── node_modules
            └── moduleC
                └── node_modules
                    └── moduleD
```
为了避免过深的依赖树和包冗余，`npm v3` 将子依赖提升（hoist），采用**扁平的node_modules结构**。将所有的子依赖都提升了根目录的下面。

这在很大程度上**解决了依赖地狱的问题**，并且避免了很多包的重复下载，**减少了磁盘空间的浪费**。但同时也引发了新的问题。

**幽灵依赖 Phantom dependencies**
    
幽灵依赖指的是在 package.json 中没有引用的包，由于被引用的包依赖，从而被下载提升到了 node_modules 下，导致可以直接在项目中引用。

**下载依赖的不确定性 Non-Determinism**

下载依赖的不确定性指的是相同的 `package.json` 文件通过 `install` 命令安装可能会得到不同的 node_modules 目录结构。

例如依赖包 A 和 B 同时依赖 C 包的不同版本，而 C 包只能有一个版本被提升（hoist）到根目录下，那么提升哪个版本的 C 包是不确定的，这就取决于依赖包的安装顺序。

为此 `npm v5` 新增了 `package-lock.json` 文件，用来锁定依赖包的版本号，以及解决依赖包不同版本号时如何进行提升的问题。

**依赖分身 Doppelgangers**

假设继续再安装依赖 B@1.0 的 D 模块和依赖 @B2.0 的 E 模块，此时：

A 和 D 依赖 B@1.0

C 和 E 依赖 B@2.0

以下是提升 B@1.0 的 node_modules 结构：

```sh
node_modules
├── A@1.0.0
├── B@1.0.0
├── D@1.0.0
├── C@1.0.0
│   └── node_modules
│       └── B@2.0.0
└── E@1.0.0
    └── node_modules
        └── B@2.0.0
```
此时依赖 B@2.0.0 会被下载两次，并且无论提升 B@1.0.0 还是 B@2.0.0，都会有重复的包被下载，这种被重复下载的包就是依赖分身。

## yarn

2016年，`yarn` 的发布，解决了自 npm v3 以来依赖安装速度慢以及下载依赖的不准确性。

yarn 同样采用**扁平化的方式管理node_modules**，同时在缓存机制上提出了离线缓存下载的概念，它会将每个包缓存在磁盘上，在下次安装这个包时，可以实现离线下载；并且在安装依赖时采用了并行的方式，极大提升了依赖安装的速度。

yarn 在安装依赖的时候会根据 `package.json` 生成 `yarn.lock` 文件，用来确定依赖树之间的结构，以此来确保同一项目安装依赖能够得到相同的 node_modules 目录，从而保证了依赖安装的确定性。

在 `npm v5` 时，npm 也发布了 package.json 文件。

但是 yarn 依然跟 npm 采用的都是扁平的 node_modules 结构，依旧没有解决**幽灵依赖**和**依赖分身**的问题。

## pnpm

`pnpm - performance npm`，发布于  2017 年，定义为**一个快速的，高效的空间磁盘利用的包管理工具**。

**内容寻址存储 CAS**

与依赖提升和扁平的 node_modules 不同，pnpm 引入了另一种依赖管理策略：**内容寻址存储**。该策略会将所有的包都安装在系统的 `store` 中，并且依赖的不同版本只会在系统中安装一次。

::: tip
**Content-addressable store(CAS)**，是一种存储信息的方式，根据内容进行检索信息的存储方式。
:::

在引用项目 node_modules 的依赖时，会通过硬链接与符号链接在全局 store 中找到这个文件。为了实现此过程，node_modules 下会多出 .pnpm 目录，而且是非扁平化结构。

- 硬链接 Hard link：硬链接可以理解为源文件的副本，项目里安装的其实是副本，它使得用户可以通过路径引用查找到全局 store 中的源文件，而且这个副本根本不占任何空间。同时，pnpm 会在全局 store 里存储硬链接，不同的项目可以从全局 store 寻找到同一个依赖，大大地节省了磁盘空间。

- 符号链接 Symbolic link：也叫软连接，可以理解为快捷方式，pnpm 可以通过它找到对应磁盘目录下的依赖地址。

<img src="/assets/images/note/package-manage/pnpm.jpeg" alt="pnpm" data-fancybox="gallery" />

因此，pnpm 的出现，解决了前端包管理工具一直存在的 幽灵依赖、依赖分身、下载速度慢、占用磁盘空间 的问题。

**参考**

[深入浅出 npm & yarn & pnpm 包管理机制](https://zhuanlan.zhihu.com/p/526257537)
