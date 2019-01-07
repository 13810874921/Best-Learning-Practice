
####16.6之前版本提供 

- UNSAFE_componentWillMount() 

- UNSAFE_componentWillReceiveProps()

- UNSAFE_componentWillUpdate()


###  Mount

#### componentDidMount() 方法
挂载DOM Tree时立即调用。可在此接收ajax。
```js
    componentDidMount()
```
### componentWillUnMount()方法
componentWillUnmount()在卸载和销毁组件之前立即调用。
该状态不应该调用setState()。卸载组件实例后，将永远不会再次安装它。

``` js
   componentWillUnmount()
```

### Update

### shouldComponentUpdate() 方法 
只返回 true or false。

- shouldComponentUpdate()在收到新的属性或状态时，在渲染之前调用。默认为true。初始渲染或使用时不调用此方法forceUpdate()。

- shouldComponentUpdate() 为false 时， componentWillUpdate()，render()和componentDidUpdate()将不会被调用。


```js
shouldComponentUpdate(nextProps, nextState){
    if(this.state.count>3) return false
    return true
}

```

### componentDidUpdate() 方法
如果shouldComponentUpdate()返回false，则不会被调用。

```js
componentDidUpdate(prevProps, prevState, snapshot)
```

############ 

### static getDerivedStateFromProps()方法
    getDerivedStateFromProps 在调用render方法之前调用，无论是在初始安装还是后续更新。它应该返回一个更新状态的对象，或者返回null以不更新任何状态。
```js
    static getDerivedStateFromProps(props, state)
```

### getSnapshotBeforeUpdate() 方法
    getSnapshotBeforeUpdate()在最近呈现的输出被提交到例如DOM之前调用。它使您的组件可以在可能更改之前从DOM捕获一些信息（例如滚动位置）。此生命周期返回的任何值都将作为参数传递给componentDidUpdate()。

- 应用场景
它可能出现在需要以特殊方式处理滚动位置的聊天线程等UI中。

```js
    getSnapshotBeforeUpdate(prevProps, prevState)
```

### static getDerivedStateFromError(error) 方法
    在后代组件抛出错误后调用此生命周期。它接收作为参数抛出的错误，并应返回值以更新状态。
```js
    class CatchError extends Component {
        constructor(props) {
            super(props);
            this.state = { hasError: false };
        }

        static getDerivedStateFromError(error) {
            // Update state so the next render will show the fallback UI.
            return { hasError: true };
        }

        render() {
            if (this.state.hasError) {
            // You can render any custom fallback UI
            return <h1>Something went wrong.</h1>;
            }

            return this.props.children; 
        }
    }
```



