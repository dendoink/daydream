---
title: 直接把 `log` 作为回调函数
open: true
---

:::tip 问题
有没有试过直接把 `log` 作为回调函数？
:::

### 1. 直接在回调中使用 `console.log` 

假如有这么一个函数，我们会对服务器返回的数据进行加工，并且传递给回调函数：

``` javascript
function getName(callback) {
    // 假设这个对象是从服务器请求回来的数据
    const wingman = {
        name: 'wingman',
        url: 'www.wingman.com'
    }
    // 我们会使用一个回调来处理他的返回结果
    callback(wingman)
}
```

当我需要确定传递的参数时。一般会里面添加一个 `console.log` 来检查：

``` javascript
function getName(callback) {
    // 假设这个对象是从服务器请求回来的数据
    const wingman = {
        name: 'wingman',
        url: 'www.wingman.com'
    }
    // 我们会使用一个回调来处理他的返回结果
    callback(wingman)
}

getName(v => console.log(v))
```

![](./_static/log_result01.png)

但是你可以直接传入 `console.log` 来接受所有的参数：

``` javascript
getName(console.log)
```

![](./_static/log_result_02.png)

上面的效果看起来。好像没什么不一样？当你有多个参数传入时，结果就变得不一样了！

``` javascript
function getName(callback) {
    // 假设这个对象是从服务器请求回来的数据
    const wingman = {
        name: 'wingman',
        url: 'www.wingman.com'
    }
    const wingman_FE = {
        name: 'FE_wingman',
        url: 'www.wingman.com'
    }
    // 我们会使用一个回调来处理他的返回结果
    callback(wingman, wingman_FE)
}

getName(v => console.log(v))
getName(console.log)
```

![](./_static/log_result_03.png)

### 2. 使用实时表达式

`DevTools` 在 `Console` 面板中引入了一个非常漂亮的附加功能，这是一个名为 `Live expression` 的工具

只需按下 "眼睛" 符号，你就可以在那里定义任何 `JavaScript` 表达式。 它会不断更新，表达的结果将永远存在 :-)：

![](./_static/live-expression.gif)
