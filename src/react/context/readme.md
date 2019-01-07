## 组件间通信的几种方案

#### 1、context
[基本用法](https://juejin.im/post/5ac598916fb9a028ca53333c)
从顶层将数据变化通知到各个层级，数据变化的触发器依赖顶层，如果需要子组件修改context, 需要将触发函数通过props或者context传递给子组件
强依赖顶层props修改可能导致整个组件树全部刷新的性能问题, 解决方案：
[https://zhuanlan.zhihu.com/p/50336226](https://zhuanlan.zhihu.com/p/50336226)

相比全局事件，context的好处在于
1、有状态
2、trigger集中在父级/顶层，数据变化的影响面被约束在provider内部，更可控。
3、代码追踪更显性一些。
4、灵活性差一些，理解起来也比较费事

#### 2、mobx/redux进行状态管理
大家都知道

#### 3、通过父组件/根组件的方法进行代理转发（不推荐）
其实跟context差不多，只不过需要经过props层层传递

#### 4、全局事件 （不推荐）
这个方案的问题在于状态和影响面的不确定性，当代码膨胀以后，当我抛出事件的时候，根本没办法知道会产生什么样的副作用，而且事件的命名也存在冲突的可能性

```js
//组件A中抛出事件和数据
event.trigger('eventName', {name: "test"});


//组件B中接收事件和数据并作出相应处理
event.on('eventName', (data) => console.log(data.name))

````

#### 5、挂window，dom元素等原始方案。（不推荐）