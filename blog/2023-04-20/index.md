---
title: Node.js 20 正式发布，一文看懂
description: Node.js 在 20.0.0 版本中加入了超多新特性
open: true
authors: [dendoink]
---

:::tip 请注意
此文并不是完全直译所有内容，在保留声明内容结构基本完整的情况下，主观的增加/删减了部分内容，如果想阅读官方声明，请点击[这里](https://nodejs.org/en/blog/announcements/v20-release-announce)
:::

<!--truncate-->

## 新特性介绍

`Node.js 20` 的主要更新

1. 权限模型 `Permission Model`
2. 自定义 `ESM loader` hooks 接近稳定
3. 将 `V8` 引擎更新到 11.3
4. 稳定的 `Test Runner`
5. 性能优化
6. 单个可执行应用程序(实验阶段)
7. 为 `ARM64` 架构的 `Windows` 操作系统提供官方支持
8. `WebAssembly` 系统接口进展

## 权限模型 Permission Model

关键词：提高程序的安全性

`Node.js` 权限模型是一种实验性机制，用于在执行期间限制对特定资源的访问, 是怎么做到的呢？

所有可用权限都由 `--experimental-permission` 这个标志来记录，当使用 `--experimental-permission` 启动 Node.js 时，将使用以下的标志来控制对应的权限:

* `--allow-fs-read`+`--allow-fs-write`: 限制对文件系统的访问(读写文件系统), 开发者可以更精细地控制 Node.js 进程可以访问文件系统的哪些部分:

```bash
# 可以读写所有的文件
node --experimental-permission --allow-fs-read=* --allow-fs-write=* index.js
# 可以读写 /tmp/ 目录下的文件
node --experimental-permission --allow-fs-write=/tmp/ --allow-fs-read=/home/index.js index.js
# 也可以用通配符
node --experimental-permission --allow-fs-read=/home/test* index.js
```

启用权限模型后， `process` 对象的 `permission` 属性可用于检查是否在运行时授予了某个权限:

```JavaScript
process.permission.has('fs.write'); // true
process.permission.has('fs.write', '/home/nodejs/protected-folder'); // true
```

* `--allow-child-process` : 限制对 child_process 的访问(生成进程)
* `--allow-worker`: 限制对worker_threads 的访问
* `--no-addons`: 限制对本机插件的访问

想看更多细节可以点击[这里](https://nodejs.org/api/permissions.html#process-based-permissions)直达官方文档
这个特性主要来自于这个 [PR](https://github.com/nodejs/node/pull/44004)

## 自定义 ESM loader hooks 接近稳定

通过加载程序 ( `--experimental-loader=./foo.mjs` ) 提供的自定义 ES 模块生命周期 `hooks` ，可以让被加载的程序在与主线程隔离的专有线程中运行, 为其提供了一个独立的域 `scope` ，确保加载程序和应用程序代码之间没有交叉污染。

为了与浏览器的行为一致， `import.meta.resolve()` 现在以同步的方式返回, 需要注意的是**在需要的情况下， 用户 `loader` 中的 `resolve` hook仍然可以保持异步的方式返回**当然了，你也可以定义为同步函数, 但即使加载了异步的 `resolve` hook， `import.meta.resolve()` 仍会以同步方式返回。

关于这部分更新可以参见这个 [PR](https://github.com/nodejs/node/pull/44710)

## 将 V8 JavaScript 引擎更新到 11.3

V8 11.3 版本包括 5 个新功能：

* `String` 的原型里增加了 `isWellFormed` 和 `toWellFormed` 方法来处理格式正确的 `UTF-16` 字符串。点[这里](https://chromestatus.com/feature/5200195346759680)看详细信息
* 在 `Array`和`TypedArray`的原型之上增加额外的方法，通过返回数组的新备份和更改来启用数组的更改。 点[这里](https://chromestatus.com/feature/5068609911521280)看详细信息
* 可调整大小的 ArrayBuffer 和可增长的 SharedArrayBuffer 点[这里](https://chromestatus.com/feature/4668361878274048)看详细信息
* 将字符串的集合操作、字符串文字、嵌套类和 `unicode` 属性添加到 `RegExp`。点[这里](https://chromestatus.com/feature/5144156542861312)看详细信息
* WebAssembly 尾调用。点[这里](https://chromestatus.com/feature/5423405012615168)看详细信息

## 稳定的 `Test Runner`

`Test Runner` 在 `Node.js 19` 中是实验性的，现在已经稳定了。稳定的 `Test Runner` 包括用于编写和运行测试的构建块，包括：

* `describe`,                                                       `it`/`test` 和 hooks 来构造测试文件
* mocking
* watch mode
* `node --test` 用于并行运行多个测试文件

但是目前 `reporters` 和 `code coverage` 还不稳定。

例子：

```JavaScript
import {
    test,
    mock
} from 'node:test';
import assert from 'node:assert';
import fs from 'node:fs';

mock.method(fs, 'readFile', async () => "Hello World");
test('synchronous passing test', async (t) => {
    // This test passes because it does not throw an exception.
    assert.strictEqual(await fs.readFile('a.txt'), "Hello World");
});
```

## 性能优化

`Node.js 20` 对运行时的基本部分进行了许多改进，包括 `URL` , `fetch()` 和 `EventTarget` 。

初始化 `EventTarget` 的成本被缩减了一半，从而可以更快地访问使用它的所有子系统。此外，已利用 V8 快速 API 调用来提高 API 的性能，例如 `URL.canParse()` 和计时器。

`Node.js 20` 中 `Ada` 的版本更新到了 2.0，这是一种用 C++ 编写的快速且符合规范的 URL 解析器。

## 单个可执行应用程序(实验阶段)

单一可执行应用程序允许在不安装 `Node.js` 的情况下分发 `Node.js` 应用程序系统。这是一种将 `Nodejs` 的项目编译成二进制文件以供分发的方法。

在 `Node.js 20` 中，构建单个可执行应用程序( `SEA: Single Executable Applications` )现在需要从 JSON 配置中注入由 `Node.js` 准备的 blob，而不是注入原始 JS 文件。

例子：

把 `blob` 写入到 `sea-prep.blob` 文件中只需要这样在 `JSON` 文件中定义:

```json
// sea-config.json
{
  "main": "hello.js",
  "output": "sea-prep.blob"
}
```

然后执行:

```bash
node --experimental-sea-config sea-config.json
```

然后就可以将此 `blob` 注入到二进制文件中执行。

详情参见这个 [PR](https://github.com/nodejs/node/pull/47125)

## 为 ARM64 架构的 Windows 操作系统提供官方支持

`Node.js v20.0.0` 包含适用于 `ARM64`  `Windows` 的二进制文件，允许在平台上本地执行.

## WebAssembly 系统接口进展

该项目继续致力于在 `Node.js` 中实现 `WASI` 。现在它是实验性的，但不再需要命令行选项来启用 `WASI。`
