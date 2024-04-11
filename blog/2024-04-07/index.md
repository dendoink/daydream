---
title: JS漫谈03-从 Promise 到 Filter 实现异步编程
description: 03-从 Promise 到 Filter 实现异步编程
open: true
authors: [dendoink]
---

![从 Promise 到 Filter 实现异步编程](./_statics/banner.png)

## 前言

在学习前端的时候，我总是能听到很多高级词汇，比如今天会聊到的 *函数式编程(Functional Programming)* & *高阶函数 (Higher-order function)* 。
但是当你真正的理解什么是 *函数式编程* & *高阶函数* 的时候，也许会发现，你几乎每天都会用到它，只是你不知道那就是高阶函数 / 函数式编程。

<!--truncate-->

## JavaScript 中的函数

在 `javascript` 中，函数是一种值，举个例子：

```javascript
const double = function (x) {
  return x * 2
}
```

我们把一个函数作为值，赋给了变量 `double` ,这在我们的代码中很常见对吗？

你是不是经常会听到或者看到这样一句话：*“在 JavaScript 中函数是一等公民”*

粗看很不好理解，但是它的意思很简单：函数和 字符串/`number` 没有什么不一样，它可以声明为变量，也可以*作为参数传入到其他函数中。*

## 什么是高阶函数？

什么是高阶函数？其实上一段我们已经说过了，我们可以把函数A作为参数传入到另一个函数B中，那么接收函数作为参数的函数B，就是 *高阶函数* ,这只是方便大家理解，高阶函数的定义是：

*"一个函数的参数是另一个函数，或者一个函数的返回值是另一个函数"*

## 高阶函数的例子

### filter

说到 `filter()` 你肯定不陌生，他接收一个回调函数作为它的参数，所以它是一个典型的高阶函数，举个例子：

我们有这么一个数组，要筛选出对应 `category` 为 `html&css` 的书籍。

```javascript
const books = [
  {name:'gitbook',category:'git'},
  {name:'reactbook',category:'react'},
  {name:'vuebook',category:'vue'},
  {name:'cssbook',category:'html&css'},
  {name:'htmlbook',category:'html&css'},
  ]
```

传统的写法是这样:
```javascript
let html_css_books = []
for (let i = 0; i < books.length; i++) {
  if(books[i].category === 'html&css'){
    html_css_books.push(books[i])
  }
}
console.log(html_css_books)
```

我相信几乎没有人会选择上面的方式，大部分人都会用 filter

```javascript
const html_css_books = books.filter(function(item){return item.category === 'html&css'})
```

当然我们还可以用箭头函数来缩减一些代码：

```javascript
const html_css_books = books.filter(item => item.category === 'html&css')
```

我知道这是一个大家都明白的例子，从这里你能看到几个高阶函数的好处？

- 更短的代码
- 更少的错误
- 更多的复用

第三点你可能不同意，因为你可能会说，我们没有复用任何代码啊？但如果我们把传入的filter的回调函数抽离出来呢？因为真正决定要过滤哪些数据的是这个部分。

```javascript
const is_html_css_books = item => item.category === 'html&css'
const is_git_books = item => item.category === 'git'
const is_not_git_books = item => item.category !== 'git'

const html_css_books = books.filter(is_html_css_books)
const git_books = books.filter(is_git_books)
const not_git_books = books.filter(is_not_git_books)
```

清晰又简洁不是吗？

### filter & map & find & reduce

这些都是我们常见的高阶函数，但是它们的用法各不相同

<table>
  <tr>
    <th>函数</th>
    <th>返回值</th>
  </tr>
  <tr>
    <td>filter</td>
    <td>大数组 => 小数组</td>
  </tr>
  <tr>
    <td>map</td>
    <td>数组 => 长度相等的数组</td>
  </tr>
  <tr>
    <td>find</td>
    <td>数组 => 单个元素</td>
  </tr>
  <tr>
    <td>reduce</td>
    <td>数组 => 大数组/小数组/单个元素/长度相等的数组/字符串/Number/其他值</td>
  </tr>
</table>

`reduce` 有很多玩法，甚至它可以取代我们刚刚说的三种高阶函数，以后我们会聊聊 `reduce` 的内容。接下来我们看看，高阶函数有可能会遇到的问题，又如何去解决。


## 问题 & 解决

### 问题
我们一起来看这样一个场景

比如我们需要计算 a, b 两个值的和的两倍再加3，我们可能会定义两个函数

```javascript
function double(a, b) {
    return (a + b) * 2
  }

function add3(a) {
  return a + 3
}
```

那么我们会这样调用：

```javascript
add3(double(1,3))
```

但是如果我们需要多加几次3呢？

```javascript
add3(add3(add3(add3(add3(double(1,3))))))
```

是的，虽然计算没有错误，但是我们的可读性大大降低了，那面对这样的情况如何处理呢？

### 解决：链式优化

解决嵌套的第一种方法，就是拆解嵌套，链式调用，就像一条链子一样，一环套一环，将上次的结果，作为下次的参数。

```javascript
const chainObj = {
  double(a,b) {
    this.temp = (a + b) * 2;
    return this;
  },
  add3() {
    this.temp += 3;
    return this;
  },
  getValue() {
    const value = this.temp;
    // 记得这里要初始化temp值
    this.temp = undefined;
    return value;
  }
};
```

所以我们上面的嵌套现在可以这样写:

```javascript
chainObj.double().add3().add3().add3().add3().getValue()
```

## Promise

上节的这段代码

```javascript
chainObj.double().add3().add3().add3().add3().getValue()
```
对比 Promise 的代码
```javascript
promise.then(fn).then(fn)...
```

是不是很像呢？是的没错，我们平时写的 `promise` 其实都是在处理我们的 *高阶函数* 的执行顺序。

那么 `Promise` 又是如何实现这样的链式调用的呢？期待以后和大家分享~
