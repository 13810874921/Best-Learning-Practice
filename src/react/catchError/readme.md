### 什么情况下会出现error
```html
<div>{ this.props.aaa.bbb }</div>

```
假设aaa为undefined的情况下，就会出现报错。


### 最佳实践是什么

##### react提供的catch方法有哪些特点？

特点1：只能捕获**子组件**的异常，而不能捕获自身出现的异常。

特点2：只能捕获**渲染方法，和生命周期方法**中出现的异常。而事件方法中的异常、异步代码中的异常（例如setTimeoout、一些网络请求方法）、服务端渲染时出现的异常以及componentDidCatch方法中出现的异常是无法被捕获的。如果需要捕获这些异常，只能使用JavaScript的try/catch语法。

特点3：下层组件的catch方法优先级更高，如果Level1 和 Level2中都进行了componentDidCatch操作，如果Level3出错的话，只会触发Level2的componentDidCatch。如果Level2没有catch,则会触发Level3的catch.
```html
    <Level1>
        <Level2>
            <Level3 />
        </Level2>
    </Level1>

```

##### 16版本之前提供了 unstable_handleError 方法
已废弃

##### 16中提供了 componentDidCatch 方法
在16.6之后，不建议用componentDidCatch处理UI，仅用于日志上报，打印输出等

##### 16.6中新提供了 getDerivedStateFromError 方法
在捕获到错误的瞬间，React会在这次渲染周期中将这个组件渲染为null，这就有可能导致他的父组件设置他上面的ref获得null而导致一些问题，所以现在提供了这个方法。

##### 规范用法
在某一个业务的根组件中使用,

```js
class CatchError extends Component {

    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
        //用于state改变, 处理UI
    }

    componentDidCatch(error, info) {
        //这里用于错误的输出和上报
        console.log(error);
        console.log(info);
    }


    render() {
        //每一个业务对应的错误视图
        if (this.state.hasError) {
            return 具体的错误UI
        }
        return this.props.children;
    }
}


class DoSomething extends Component {

    render() {
        <CatchError>
            <Child>
                <GrandChild/>
            </Child>
        </CatchError>
    }
}

```