---
title: Inside fiber in depth
description: overview of the new reconciliation algorithm in react
open: true
authors: [max_koretskyi]
---

![Inside Fiber: in-depth overview of the new reconciliation algorithm in React](https://wingman-1300536089.file.myqcloud.com/react_north/C00/fiber01.png)

## 声明

* [原文](https://indepth.dev/inside-fiber-in-depth-overview-of-the-new-reconciliation-algorithm-in-react/)

作 React学习指北中，幸得此文，受益匪浅。

虽已有中译版，然细读之，察屡有误，故与作者通后更译，此新译之文，与诸君享。

## 正文

深入研究 React 称为 Fiber 的新架构，了解新 reconciliation 算法的两个主要阶段。

我们将详细介绍 React如何更新 state，props 和处理 children。

React 是一个用于构建用户交互界面的 JavaScript 库，其核心 [机制](https://indepth.dev/what-every-front-end-developer-should-know-about-change-detection-in-angular-and-react/) 就是跟踪组件的状态变化，并将更新的状态映射到到新的界面。

这就是我们在 React 中熟知的 `协调` 。我们调用 `setState` ，而框架会检查 `state` 或 `props` 是否更新，以及是否在 UI 界面重新渲染组件。

React 文档提供了对该机制的[高级概述](https://reactjs.org/docs/reconciliation.html) ：

“React元素，生命周期方法和 `render` 方法的作用以及对组件的children所应用的 `diffing` 算法。从 ` `render` ` 方法返回的不可变 React 元素树，通常称为*虚拟DOM*。

在早期，这个术语有助于帮助人们理解 React，但也引起了混乱，并且在React文档中不再使用。”

在本文中，我将坚持将其称为: React元素树。

除了 React 元素树之外，该框架还有一个内部实例树（组件，DOM节点等）用于保持状态。

从版本16开始，React 推出了该内部实例树的新实现，以及对其进行管理的算法，代号为 **Fiber**。要了解 **Fiber** 架构带来的优势，请查看 [React 为何以及如何在 Fiber 中使用链表](https://indepth.dev/the-how-and-why-on-reacts-usage-of-linked-list-in-fiber-to-walk-the-components-tree/)。

这是该系列的第一篇文章，目的是为了让你了解 React 的内部体系结构。

在本文中，我会提供与算法有关的重要概念和数据结构的深入概述。 当我们拥有足够的背景知识之后，将开始探索用于遍历和处理 **fiber** 树的算法和主要函数。 

该系列的下一篇文章将演示React如何使用该算法执行初始渲染和处理 state 和 props 的更新。 

从那里开始，我们将继续讨论 scheduler 的细节， child reconciliation 过程以及构建 effects list 机制的细节。

在这里我会提供一些非常 “高级” 的知识给你，我鼓励你阅读它，以了解Concurrent（并发） React 内部运作背后的魔法。 

如果有开始为 React 做贡献的打算，那么这一系列文章也会为你提供很好的指导。

我是一个 [逆向工程死忠粉](https://indepth.dev/level-up-your-reverse-engineering-skills/)，因此在最新版本中将有很多链接到源 16.6.0。

肯定要花很多心思，所以如果你没有立刻领会某些内容，不要感到压力。 付出都是值得的。 

> 请注意，你不需要了解任何使用 React 的内容。 本文是关于 React 的内部工作。

## Setting the background

我将在整个系列中使用这个简单的应用程序：有一个按钮，点击可以增加屏幕上呈现的数字：

![img](https://wingman-1300536089.file.myqcloud.com/react_north/C00/fiber02.gif)

代码实现：

``` javascript
class ClickCounter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState((state) => {
            return {
                count: state.count + 1
            };
        });
    }

    render() {
        return [ <
            button key = "1"
            onClick = {
                this.handleClick
            } > Update counter < /button>, <
            span key = "2" > {
                this.state.count
            } < /span>
        ]
    }
}
```

可以在[这里](https://stackblitz.com/edit/react-t4rdmh)把玩这段代码，如你所见，这是一个简单组件，从 `render()` 方法中返回两个子元素 `button` 和 `span` 。

当你单击按钮时，组件的状态将被内部的 handler 更新，顺带的，这会导致 `span` 元素的文本更新。

React 在 **协调（reconciliation）** 期间执行各种活动。

例如，下面是 React 在简单组件的首次渲染中，以及 state 更新之后，执行的高级操作：

* 更新 `ClickCounter` 组件中 `state` 的 `count` 属性。
* 检索并比较 `ClickCounter` 的子组件和 `props` 。
* 更新 `span` 的 `props` 。

**协调（reconciliation）** 期间也进行了其他活动，包括调用[生命周期方法](https://reactjs.org/docs/react-component.html#updating)或更新 [refs](https://reactjs.org/docs/refs-and-the-dom.html)。**这些活动在 Fiber 架构中被统称为 work。** `work` 的 `type` 通常取决于 React 元素的类型。

例如，对一个类组件而言，React 需要创建一个实例，而函数组件则无需执行此操作。

React 的有许多类型的 elements，例如类组件和函数组件， `host` 组件（DOM节点）等。

React 元素的类型由传入到 `createElement` 的第一个参数决定，通常在 `render` 方法中使用此函数来创建元素。

在我们开始探索活动细节和主要的 `fiber` 算法之前，让我们先熟悉 React 内部使用的数据结构。

## 从 React 元素到 Fiber 节点

React 中的每个组件都有一个 `UI` 表示，我们可以称之为从 `render` 方法返回的一个视图或模板。

这是 `ClickCounter` 组件的模板：

``` jsx
<button key="1" onClick={this.onClick}>Update counter</button>
<span key="2">{this.state.count}</span>
```

### React 元素

模板通过JSX编译器后，将得到一堆React元素。下面是真正从 React 组件的 render 方法返回的结果（并不是 HTML）。

由于我们不需要使用JSX，因此可以将 `ClickCounter` 组件的 `render` 方法重写：

``` javascript
class ClickCounter {
    ...
    render() {
        return [
            React.createElement(
                'button', {
                    key: '1',
                    onClick: this.onClick
                },
                'Update counter'
            ),
            React.createElement(
                'span', {
                    key: '2'
                },
                this.state.count
            )
        ]
    }
}
```

`render` 方法调用的 `React.createElement` 会产生两个数据结构。

像这样：

``` javascript
[{
        $$typeof: Symbol(react.element),
        type: 'button',
        key: "1",
        props: {
            children: 'Update counter',
            onClick: () => {
                ...
            }
        }
    },
    {
        $$typeof: Symbol(react.element),
        type: 'span',
        key: "2",
        props: {
            children: 0
        }
    }
]
```

可以看到 React 将属性 `$$typeof` 添加到这些对象中，作为 React 元素的唯一标识。

而且有 `type` 、 `key` 、和 `props` 这些属性对 React 元素进行描述。

它们的值来源于传递给 `react.createElement` 函数的参数。

请关注 React 是如何将文本内容表示为 `span` 和 `button` 的子节点的。

以及如何把 click 的 handler 描述为 button 里 `props` 的一部分。

React 元素还有其他的很多字段，比如 `ref` ，但是超出本文范围不作展开。

`ClickCounter ` 对应的 React 元素不存在任何 `props` 或 `key` ：

``` javascript
{
    $$typeof: Symbol(react.element),
    key: null,
    props: {},
    ref: null,
    type: ClickCounter
}
```

### Fiber nodes

在**协调（reconciliation）** 过程中，从 `render` 方法返回的每个 React element 的数据将被合并到 `Fiber` 节点树中，每个 React element 都有一个对应的 `Fiber` 节点。

与 React 元素不同， `Fiber` 并不是每次渲染都会重新创建，它们是用来保存组件 state 和 `DOM` 的可变数据结构。

之前聊到过，框架执行的活动，取决于 React 元素的类型。

在我们的示例中，对于类组件 `ClickCounter` 而言，它调用生命周期方法和 `render` 方法。

而对于 `span` host 组件（dom节点），执行 DOM 更新。

因此，每个 React 元素都被转换成 [相应类型](https://github.com/facebook/react/blob/769b1f270e1251d9dbdce0fcbd9e92e502d059b8/packages/shared/ReactWorkTags.js)的 `Fiber` 节点，描述需要完成的工作。

[译者注：这里的类型是 WorkTag 每个类型是一个固定的数字，例如函数式组件对应的是 0 而类组件对应的是 1]

**你可以将 `Fiber` 想象成一种数据结构，用来表示一些要做的工作，或者换句话说，一个工作单元。 `Fiber` 的架构还提供了一种方便的方式来跟踪、调度、暂停和中止工作。**

当 React 元素第一次转换为 fiber 节点时，React在 `createFiberFromTypeAndProps` 函数中使用元素的数据来创建一个 `Fiber` 。

在后续更新中，React 复用了fiber节点，这意味着它只会根据数据发生改变的部分来更新对应的 fiber 节点中的属性。

如果从 `render` 方法不再返回相应的 React 元素，React 可能还需要根据 `key` 属性来移动或删除层级结构中的 fiber 节点。

> 深入 [ChildReconciler](https://github.com/facebook/react/blob/95a313ec0b957f71798a69d8e83408f40e76765b/packages/react-reconciler/src/ReactChildFiber.js#L239) 函数，了解所有活动的列表以及 React 为现有 fiber 节点执行的相应函数。 

因为 React 为每个 React 元素创建一个 fiber 节点，并且我们已经有一个这些元素组成的树，所以我们将会得到一个fiber 节点树。这样的情况下，我们简单的示例看起来就像这样：

![img](https://wingman-1300536089.file.myqcloud.com/react_north/C00/fiber03.png)

所有 `fiber` 节点使用这些属性： `child` 、 `sibling` 和 `return` 通过链接列表的形式连接在一起。

如果你想知道更多关于为什么要这样的更多信息，可以阅读这篇文章 [The how and why on React’s usage of linked list in Fiber](https://medium.com/dailyjs/the-how-and-why-on-reacts-usage-of-linked-list-in-fiber-67f1014d0eb7) (如果你还没读过的话)

### Current 树和 workInProgress 树

在第一次渲染之后，React 最终得到了一棵反映渲染出 UI 的应用程序 state 的 fiber 树。

这棵树通常被称为 `current` 树。当 React 开始处理更新时，它会构建一棵所谓的 `workInProgress` 树，反映将来要刷新到屏幕的 state。

所有的 work 都是在 `workInProgress` 树的 fibler 上进行的。当 React 遍历 `current` 树时，它为每个现有的光纤节点创建一个替代节点。

这些节点构成了 `workInProgress` 树。 它们用 render 方法返回的 React 元素的数据创建。 

一旦处理完所有 update 并完成所有相关 work，React 将一棵准备好的备用树刷新到屏幕。

一旦在屏幕上渲染 `workInProgress` 树，它就成为了 `current` 树。

**React 的核心原则之一 consistency （一致性）。** 

React总是一次性更新 `DOM` （它不会显示部分结果）。 `workInProgress` 树作为用户看不到的 “草稿”，以便 React 可以在处理所有组件之后，再将它们的更新刷新到屏幕上。

在源代码中，你会看到许多函数从 `current` 树和 `workInProgress` 树中获取 `fiber` 节点。下面是一个这样的函数的示例：

``` javascript
function updateHostComponent(current, workInProgress, renderExpirationTime) {
    ...
}
```

每个 fiber 节点都在 **alternate** 字段中保留了在另一棵树上其对应节点的引用。 `current` 树中的一个节点指向 `workInProgress` 树中的节点，反之亦然。

### Side-effects 副作用

我们可以将 React 中的组件视为使用 state 和 props 来计算 UI如何呈现的函数。

除此之外的所有活动，例如，改变DOM 或调用生命周期方法，都应被视为 Side-effects ，或者简单地视为一种 effect。 

在 [文档](https://reactjs.org/docs/hooks-overview.html#️-effect-hook)里也有提及。

> 你之前可能已经在 React 组件中执行过获取数据、订阅或者 **手动修改 DOM**。我们统一把这些操作称为 “Side-effects”，或者简称为 “effect”。（因为它们会影响其他组件，并且在渲染期间无法完成。） ”

你可以看到大多数 state 和 props 的更新将如何导致 side-effects 。 

而且，由于执行 effect 是一种 work，fiber 节点是一种跟踪更新效果的便捷机制。

每个fiber 节点都可以包含与其相关的 effect，在 `effectTag` 字段中。

因此，Fiber中的 effect 基本上定义了实例在处理更新后需要完成的 [work](https://github.com/facebook/react/blob/b87aabdfe1b7461e7331abb3601d9e6bb27544bc/packages/shared/ReactSideEffectTags.js)：

* 对于 host 组件（dom元素），包括添加、更新或删除元素。
* 对于类组件，React 可能需要更新 `refs` 并调用 `componentDidMount` 和 `componentDiddUpdate` 生命周期方法。
* 还有其他 effect 对应于其他类型的 fiber。

###  Effects 链表

React 执行 update 非常快，它采用了一些有趣的技术来达到这种性能水平：

**建立具有 effect 的 fiber 节点的线性链表以实现快速迭代是其中之一**。

迭代线性链表比树快得多，不需要花时间在没有 side-effects 的节点上。

该链表的目的是，标记具有 DOM 更新或与其他 effect 关联的的节点。

它是 `finishedWork` 树的子集，并且使用 `nextEffect` 属性而不是 `current` 树和 `workInProgress` 树中的 `child` 属性进行链接。

[Dan Abramov](https://medium.com/u/a3a8af6addc1?source=post_page---------------------------) 提出了一个 effect 链表的类比，把它想象成一棵圣诞树，"圣诞灯"把所有有效的节点绑在一起。

为了将其可视化，让我们想象下面的 `fiber` 节点树：

其中，高亮的节点有一些 work 要做，例如，我们的更新导致 `c2` 插入到 DOM 中。

`d2` 和 `c1` 更改属性， `B2 ` 触发生命周期方法。

effect 链表将它们链接在一起，以便 React 可以稍后跳过其他节点：

![img](https://wingman-1300536089.file.myqcloud.com/react_north/C00/fiber04.png))

可以看到，具有 effect 的节点是如何链接在一起的。

当遍历节点时，React 使用 `firstEffect` 指针来确定列表的起始位置。所以上面的图表可以表示为这样的线性链表：

![img](https://wingman-1300536089.file.myqcloud.com/react_north/C00/fiber05.png))

### Fiber 树的根节点

每个 React 应用程序都有一个或多个充当容器 DOM 元素。在我们的例子中它是 ID 为 `container` 的 `div` 。

``` javascript
const domContainer = document.querySelector('#container');
ReactDOM.render(React.createElement(ClickCounter), domContainer);
```

React为每个容器创建一个 [fiber root ](https://github.com/facebook/react/blob/0dc0ddc1ef5f90fe48b58f1a1ba753757961fc74/packages/react-reconciler/src/ReactFiberRoot.js#L31) 对象。你可以使用 DOM 元素的引用来访问它：

``` javascript
const fiberRoot = query('#container')._reactRootContainer._internalRoot
```

这个 fiber root 是 React 保存对 fiber 树的引用的地方。存储在 fiber root 的 `currrent` 属性中：

``` javascript
const hostRootFiberNode = fiberRoot.current
```

Fiber 树以 [特殊类型](https://github.com/facebook/react/blob/cbbc2b6c4d0d8519145560bd8183ecde55168b12/packages/shared/ReactWorkTags.js#L34) 的 fiber 节点 `HostRoot` 开始。 

它是在内部创建的，并充当最顶层组件的父级。 

`HostRoot` fiber 节点通过 `stateNode` 属性链接到 `FiberRoot` ：

``` javascript
fiberRoot.current.stateNode === fiberRoot; // true
```

你可以通过 fiber root 访问最顶层的 `HostRoot` fiber 节点来探索 fiber tree。 

或者，你可以从组件实例中获取单个 fiber 节点，像这样：

``` javascript
compInstance._reactInternalFiber
```

### Fiber 节点结构

来看看为 `ClickCounter` 组件创建的 fiber 节点的结构：

``` javascript
{
    stateNode: new ClickCounter,
    type: ClickCounter,
    alternate: null,
    key: null,
    updateQueue: null,
    memoizedState: {
        count: 0
    },
    pendingProps: {},
    memoizedProps: {},
    tag: 1,
    effectTag: 0,
    nextEffect: null
}
```

以及 `span` DOM 元素：

``` javascript
{
    stateNode: new HTMLSpanElement,
    type: "span",
    alternate: null,
    key: "2",
    updateQueue: null,
    memoizedState: null,
    pendingProps: {
        children: 0
    },
    memoizedProps: {
        children: 0
    },
    tag: 5,
    effectTag: 0,
    nextEffect: null
}
```

fiber 节点上有很多字段。在前面已经描述过字段 `alternate` 、 `effectTag` 和 `nextEfect` 的用途。现在看看其他的字段的用途。

### stateNode

保存对类组件实例，DOM 节点或与 fiber 节点关联的其他 React 元素类型的引用。 一般来说，此属性用于保存与 fiber 关联的 local state。

### type

定义与此 fiber 关联的函数或类。 对于类组件，它指向构造函数，对于 DOM 元素，它指定 HTML 标记。 

我把这个字段理解为 fiber 节点与哪些元素相关。

### tag

定义 [fiber类型](https://github.com/facebook/react/blob/769b1f270e1251d9dbdce0fcbd9e92e502d059b8/packages/shared/ReactWorkTags.js)，在 reconciliation 算法中使用它来确定需要完成的工作。

就像前面提到的，work 取决于 React 元素的类型。 [createFiberFromTypeAndProps函数 ](https://github.com/facebook/react/blob/769b1f270e1251d9dbdce0fcbd9e92e502d059b8/packages/react-reconciler/src/ReactFiber.js#L414)将 React 元素映射到相应的 fiber 节点类型。

在我们的应用中， `ClickCounter` 组件的 tag 属性是 1 ，它表示 `类组件` ；

而 `span` 元素的 tag 属性是 5 表示 `HostComponent(宿主组件)` 。

### updateQueue

state 更新，回调以及 DOM 更新的队列。

### memoizedState

用于创建输出的 fiber 的状态。 处理更新时，它反映了当前渲染在屏幕上的内容的 state。

### memoizedProps

在上一次渲染期间用于创建输出的 fiber 的 props 。

### pendingProps

在 React element 的新数据中更新并且需要应用于子组件或 DOM 元素的 props。(子组件或者 DOM 中将要改变的 props)

### key

唯一标识符，当具有一组 children 的时候，用来帮助 React 找出哪些项已更改，已添加或已从列表中删除。 与[这里](https://reactjs.org/docs/lists-and-keys.html#keys)所说的React的 “列表和key” 功能有关

你可以在[这里](https://github.com/facebook/react/blob/6e4f7c788603dac7fccd227a4852c110b072fe16/packages/react-reconciler/src/ReactFiber.js#L78)找到 fiber节点的完整结构。 在上面的说明中，省略了很多字段。 

尤其是跳过了构成树结构的 `child` 指针， `sibling` 指针和 `return` 指针。

[这些结构我在 [上一篇文章 ](https://indepth.dev/the-how-and-why-on-reacts-usage-of-linked-list-in-fiber-to-walk-the-components-tree/)中有所描述。 ]

以及专门针对 `Scheduler` 的 `expirationTime` ， `childExpirationTime` 和 `mode` 等字段类别。

## 通用算法

React 执行工作分为两个主要阶段：**render** 和 **commit**。

在 `render` 阶段，React 通过 `setState` 或 `React.render` 有计划的将更新应用于组件，并找出需要在 UI 中更新的内容。

如果是初始渲染，React 会为 `render` 方法返回的每个元素创建一个新的 fiber 节点。在后续更新中，现有 React 元素的 fiber 节点将被复用和更新。

**该阶段的执行的结果是带有 effect 的 fiber 节点树。**effect 描述了在下一个 `commit` 阶段需要完成的工作。

当前阶段，React 会绘制一棵标记有 effect 的 fiber 树，并将其应用于实例。它遍历 effect 链表并执行 DOM 更新和用户可见的其他更改。

**理解 `render` 阶段的工作可以异步执行，对我们而言非常重要**。React 可以根据可用时间来处理一个或多个 fiber 节点，然后中断并且暂存已完成的工作，转去处理某些事件，接着它再从它停止的地方继续执行。

但有时候，它可能需要丢弃完成的工作然后重新从头开始。

由于在此阶段执行的工作不会导致任何用户可见的更改（例如DOM更新），所以才可以实现这些暂停。

(译者注：因为 React 的一致性，所以不可能给用户呈现渲染到一半的组件，这样意味着这个阶段执行的所有 work 都是用户不可见的。)

**与之相反的是，后续的 `commit` 阶段始终是同步的**。这是因为在此阶段执行的工作会导致用户可见的更改，例如 DOM 更新。这就是为什么 React 需要一次性完成这些操作。

调用生命周期方法是 React 的工作之一。一些方法是在 `render` 阶段调用的，而另一些方法则是在 `commit` 阶段调用。

这是在第一个 `render` 阶段工作时，调用的生命周期列表：

* [UNSAFE_]componentWillMount (deprecated)
* [UNSAFE_]componentWillReceiveProps (deprecated)
* getDerivedStateFromProps
* shouldComponentUpdate
* [UNSAFE_]componentWillUpdate (deprecated)
* render

如你所见，在16.3版本中，在 `render` 阶段执行的一些遗留的生命周期方法被标记为 `UNSAFE` 。

（译者注：这里的 “unsafe” 不是指安全性，而是表示使用这些生命周期的代码在 React 的未来版本中更有可能出现 bug，尤其是在启用异步渲染之后。参考[官方文档](https://zh-hans.reactjs.org/blog/2018/03/27/update-on-async-rendering.html)）

现在在文档中它们被称为遗留 (legacy lifecycles) 生命周期。将在以后的 16.x 发行版中弃用，而没有 `UNSAFE` 前缀的对应版本将在 17.0版本中移除。 

你可以在[这里](https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html)详细的了解这些更改，以及建议的迁移路径。

你是否对此感到好奇？

好吧，我们刚刚了解到，由于 `render` 阶段不会产生诸如 DOM 更新之类的 effect，因此 React 可以异步处理组件的异步更新（甚至可能在多个线程中进行）。

但是，标有 `UNSAFE` 的生命周期经常被误解和巧妙地滥用。开发人员倾向于将带有 effect 的代码放在这些方法中，这可能会导致新的异步渲染方法出现问题。

Although only their counterparts without the `UNSAFE` prefix will be removed, they are still likely to cause issues in the upcoming Concurrent Mode (which you can opt out of).

(译者注：这一段并不是忘记翻译，我对作者描述的内容还有疑问，已经在沟通中，后续会同步到 frontendwingman 的章节中)

接下来罗列的生命周期方法是在第二个 `commit` 阶段执行的：

* getSnapshotBeforeUpdate
* componentDidMount
* componentDidUpdate
* componentWillUnmount

因为这些方法都在同步的 `commit` 阶段执行，他们可能会包含 side-effects ，并且操作DOM。

好的，现在我们拥有了背景之后，让我们继续深入研究，用于遍历树和执行 work 的通用算法 。

### Render 阶段

协调算法始终使 [renderRoot](https://github.com/facebook/react/blob/95a313ec0b957f71798a69d8e83408f40e76765b/packages/react-reconciler/src/ReactFiberScheduler.js#L1132) 函数从最顶层的 `HostRoot` fiber 节点开始。 但是，React 会退出（跳过）已经处理的 fiber 节点，直到找到工作未完成的节点。

例如，如果你在组件树的深处调用 `setState` ，React将从顶部开始，但会快速跳过父级，直到它到达调用了 `setState` 方法的组件。

### WorkLoop 的主要步骤

所有的 fiber 节点都会在 [work loop](https://github.com/facebook/react/blob/f765f022534958bcf49120bf23bc1aa665e8f651/packages/react-reconciler/src/ReactFiberScheduler.js#L1136). 中进行处理。如下是该循环的同步部分的实现：

``` javascript
function workLoop(isYieldy) {
    if (!isYieldy) {
        while (nextUnitOfWork !== null) {
            nextUnitOfWork = performUnitOfWork(nextUnitOfWork);
        }
    } else {
        ...
    }
}
```

在上面的代码中， `nextUnitOfWork` 持有对 `workInProgress` 树中 fiber 节点的引用。

该节点需要完成一些工作。 当 React 遍历 Fibers 树时，它通过此变量来判断是否还有其他未完成的 fiber 节点。

处理完当前光纤后，该变量将包含对树中下一个光纤节点的引用或为“ null”。 在这种情况下，React退出工作循环并准备提交更改。

处理过当前 fiber 后，变量将持有树中下一个 fiber 节点的引用或 `null` 。在为 `null` 的情况下，React 退出工作循环并准备好提交更改。

**有四个主要函数用于遍历树并初始化或完成工作：**

* [performUnitOfWork](https://github.com/facebook/react/blob/95a313ec0b957f71798a69d8e83408f40e76765b/packages/react-reconciler/src/ReactFiberScheduler.js#L1056)
* [beginWork](https://github.com/facebook/react/blob/cbbc2b6c4d0d8519145560bd8183ecde55168b12/packages/react-reconciler/src/ReactFiberBeginWork.js#L1489)
* [completeUnitOfWork](https://github.com/facebook/react/blob/95a313ec0b957f71798a69d8e83408f40e76765b/packages/react-reconciler/src/ReactFiberScheduler.js#L879)
* [completeWork](https://github.com/facebook/react/blob/cbbc2b6c4d0d8519145560bd8183ecde55168b12/packages/react-reconciler/src/ReactFiberCompleteWork.js#L532)

为了演示他们的使用方法，请看以下遍历 fiber 树的动画。我演示中使用了这些函数的简化实现。

每个函数都需要对一个 fiber 节点进行处理，当 React 顺着树往下遍历时，当前活动的 fiber 节点发生了变化。

图中可以清楚地看到，算法是如何从一个分支转到另一个分支。

在回溯到父节点之前，它首先完成子节点的 work，。

![tmp2](https://wingman-1300536089.file.myqcloud.com/react_north/C00/fiber06.gif)

> 注意，垂直方向连线表示同级（sibling 兄弟节点），而弯曲的连接表示子级，例如 `b1` 没有孩子，而 `b2` 有一个孩子 `c1` 。
>
> (译者注，图中的树结构，按照正常的从顶到根的顺序排列的话，应该是从左往右看)

[这里 ](https://vimeo.com/302222454)是视频的链接，你可以暂停播放并检查当前节点和函数状态。

从概念上讲，你可以将 “开始 (begin)” 视为 “进入 (stepping into)” 组件，而将“完成 (complete)” 视为 “离开 (stepping out)” 组件。

当我解释这些功能时，你也可以在 [这里](https://stackblitz.com/edit/js-ntqfil?file=index.js) 体验示例和实现。

我们从 `performUnitOfWork` 和 `beginWork` 开始：

``` javascript
function performUnitOfWork(workInProgress) {
    let next = beginWork(workInProgress);
    if (next === null) {
        next = completeUnitOfWork(workInProgress);
    }
    return next;
}

function beginWork(workInProgress) {
    console.log('work performed for ' + workInProgress.name);
    return workInProgress.child;
}
```

`performUnitOfWork` 函数从 `workInProgress` 树接收一个 fiber 节点，并通过调用 `beginWork` 开始工作，此函数将启动 fiber 需要执行的所有活动。

出于演示的目的，我们只打印出 fiber 节点的名称表示 work 已经完成。

**函数 `beginWork` 总是返回指向在循环中处理的下一个 child 的指针，或返回 `null` **

如果下一个 child存在，它将被赋值给 `workLoop` 函数中的变量 `nextUnitOfWork` 。

然而，如果不存在，React 就知道自己到达了分支的末尾，因此它可以完成当前节点。

**一旦节点完成，它将需要为同层的其他节点( siblings )执行工作，并在完成后回溯到父节点。**这些都在 `completeUnitOfWork` 函数中完成：

``` javascript
function completeUnitOfWork(workInProgress) {
    while (true) {
        let returnFiber = workInProgress.return;
        let siblingFiber = workInProgress.sibling;

        nextUnitOfWork = completeWork(workInProgress);

        if (siblingFiber !== null) {
            // If there is a sibling, return it
            // to perform work for this sibling
            return siblingFiber;
        } else if (returnFiber !== null) {
            // If there's no more work in this returnFiber,
            // continue the loop to complete the parent.
            workInProgress = returnFiber;
            continue;
        } else {
            // We've reached the root.
            return null;
        }
    }
}

function completeWork(workInProgress) {
    console.log('work completed for ' + workInProgress.name);
    return null;
}
```

从实现中可以看出， `performUnitOfWork` 和 `completeUnitOfWork` 主要用于迭代目的，而主要活动则在 `beginWork` 和 `completeWork` 函数中进行。

该函数的核心是一个很大的 `while` 循环。

当一个 `workInProgress` 节点没有子节点时，React进入这个函数。完成当前 fiber 节点的工作后，它会检查是否存在同级。

如果找到，React 退出函数并返回指向同级的指针。返回的指针将被赋值给 `nextUnitOfWork` 变量，React将从同级节点开始为分支执行工作。

需要重点理解的是，React 目前仅完成了之前的同级节点 ( siblings ) 的工作。尚未完成父节点的工作。 

**只有子节点的所有分支都完成后，它才能完成父节点和回溯的工作。**

实现中还可以看到， `performUnitOfWork` 和 `completeUnitOfWork` 两者的主要目的都是迭代，而活动主要发生在 `beginWork ` 和 `completeWork` 函数中。

在本系列的后续的文章中，我们将了解React进入 `beginWork` 和 `completeWork` 函数后， `ClickCounter` 组件和 `span` 节点会发生什么。

## Commit 阶段

这一阶段从函数 [completeRoot](https://github.com/facebook/react/blob/95a313ec0b957f71798a69d8e83408f40e76765b/packages/react-reconciler/src/ReactFiberScheduler.js#L2306) 开始。这也是 React 更新 DOM 并调用预更新 (pre-mutation) / 更新生命周期方法的地方。

当 React 进入这一阶段时，它有 2 棵树和 effect 链表。 第一棵树表现当前在屏幕上呈现的状态。 

然后在 `render` 阶段构建另一棵备用树。

它在源代码中称为 `finishedWork ` 或 `workInProgress` ，表示将要映射到屏幕上的状态。

此备用树会用类似的方法通过 `child` 和 `sibling` 指针链接到 current 树。

然后，有一个 effect 链表（它是 `finishedWork` 树的节点子集），通过 `nextEffect` 指针进行链接。

需要记住的是，effect 链表是 `render` 阶段运行的**结果**。

render 的最终目的就是确定那些需要插入、更新或删除的节点，以及哪些组件需要调用其生命周期方法。

这正是 effect 链表要告诉我们的，**而且它就是在 commit 阶段迭代的节点集。**

> 为了调试，可以通过 fiber root 的 `current` 属性访问 `current` 树。 可以通过current 树中的 `HostFiber` 节点的 `alternate` 属性来访问 `finishedWork` 树。

在 `commit` 阶段运行的主要函数是[commitRoot](https://github.com/facebook/react/blob/95a313ec0b957f71798a69d8e83408f40e76765b/packages/react-reconciler/src/ReactFiberScheduler.js#L523)。基本上，它执行以下操作：

* 在标记 `Snapshot` effect 的节点调用 `getSnapshotBeforeUpdate ` 生命周期。
* 在标记 `Deletion` effect 的节点调用 `componentWillUnmount` 生命周期。
* 执行 `DOM` 的所有插入、更新、删除操作。
* 将 `finishedWork` 树设置为 `current` 。
* 在标记 `Placement` effect 的节点调用 `componentDidMount ` 生命周期。
* 在标记 `Update` effect 的节点调用 `componentDidUpdate ` 生命周期。

在调用预更新 (pre-mutation) 方法 `getSnapshotBeforeUpdate` 之后，React 提交了树中的所有 side-effect。

分两步走：

第一步，执行所有 DOM（宿主）的插入、更新、删除和 ref 卸载。

然后 React 将 `finishedWork` 树赋值给 `FiberRoot` 。

将 `workInProgress ` 树标记为 `current` 树。

这些在 commit 阶段的第一波之后完成。

所以在 ` componentWillUnmount` 期间前一棵树仍然是 current 树。

但这些都发生在第二步之前，所以在 `componentDidMount/Update` 期间 finished work 是 `current` 。

第二步，React 调用所有其他生命周期方法和 ref 回调。这些方法作为一个单独的过程，使整个树中的所有插入，更新和删除操作均被执行。

这是运行上述步骤的函数的要点：

``` javascript
function commitRoot(root, finishedWork) {
    commitBeforeMutationLifecycles()
    commitAllHostEffects();
    root.current = finishedWork;
    commitAllLifeCycles();
}
```

这些子函数中的每一个都实现了一个循环，该循环遍历 effect 链表 并检查 effect 类型。 当发现与函数目的有关的 effect 时，就会执行。

### 预更新生命周期方法 Pre-mutation lifecycle methods

例如，下面是在 effect 树上迭代并检查节点是否具有 Snapshot effect 的代码：

``` javascript
function commitBeforeMutationLifecycles() {
    while (nextEffect !== null) {
        const effectTag = nextEffect.effectTag;
        if (effectTag & Snapshot) {
            const current = nextEffect.alternate;
            commitBeforeMutationLifeCycles(current, nextEffect);
        }
        nextEffect = nextEffect.nextEffect;
    }
}
```

对于类组件，这个 effect 意味着调用 `getSnapshotBeforeUpdate` 生命周期方法。

### DOM 更新

[commitAllHostEffects](https://github.com/facebook/react/blob/95a313ec0b957f71798a69d8e83408f40e76765b/packages/react-reconciler/src/ReactFiberScheduler.js#L376) 是 React 执行 DOM 更新的函数。该函数基本上定义了节点需要完成的操作类型，并执行这些操作：

``` javascript
function commitAllHostEffects() {
    switch (primaryEffectTag) {
        case Placement: {
            commitPlacement(nextEffect);
            ...
        }
        case PlacementAndUpdate: {
            commitPlacement(nextEffect);
            commitWork(current, nextEffect);
            ...
        }
        case Update: {
            commitWork(current, nextEffect);
            ...
        }
        case Deletion: {
            commitDeletion(nextEffect);
            ...
        }
    }
}
```

有意思的是，React 调用 `componentWillUnmount` 方法作为 `commitDeletion` 函数删除过程中的一部分。

### 更新后的生命周期方法 Post-mutation lifecycle methods

[commitAllLifecycles](https://github.com/facebook/react/blob/95a313ec0b957f71798a69d8e83408f40e76765b/packages/react-reconciler/src/ReactFiberScheduler.js#L465) 是 React 调用余下所有生命周期方法 `componentDidUpdate` 和 `componentDidMount` 的函数。

---

终于完成了。 让我知道你对本文的看法或在评论中提出问题。 **查看该系列的下一篇文章 [React中 state 和 props 更新的深入说明]（https://indepth.dev/in-depth-explanation-of-state-and-props-update-in-react/)。**

我还有更多文章，为调度程序，children 协调过程以及 effect 链表 的构建方式提供了深入的解释。 还计划做个视频，展示如何以本文为基础调试应用程序。
