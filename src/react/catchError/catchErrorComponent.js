import React, { Component } from 'react';
//使用 getDerivedStateFromError 进行state变换
//使用 componentDidCatch 进行 日志上报等其他处理
//
//只能对子孙组件生效，对组件本身无效。
//
class ErrorWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        console.log(error);
        console.log(info);
    }


    render() {
        if (this.state.hasError) {
            return <div style={{color: 'red'}}>Something error, 请大家注意</div>
        }
        return this.props.children;
    }
}

class Child extends Component {
    render() {
        return <div>{ this.props.aaa.bbb }</div>
    }
}

class CatchError extends Component {
    state = {
        aaa: {bbb: 1}
    }
    render() {
       return (
        <ErrorWrapper>
            <div>
                <Child aaa={this.state.aaa}/>
                <button onClick={ this.changeA }>点击触发异常</button>
            </div>
        </ErrorWrapper>);
    }
    changeA = () => {
        this.setState({
            aaa: null
        })
    }
}

export default CatchError;