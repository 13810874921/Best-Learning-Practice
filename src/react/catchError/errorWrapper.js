import React, { Component } from 'react';
// import Child from './child.js';

//使用 getDerivedStateFromError 进行state变换
//使用 componentDidCatch 进行 日志上报等其他处理
//
//只能对子组件生效，对组件本身无效。
//
//
//

class CatchError extends Component {

    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidMount () {

    }

    componentDidCatch(error, info) {
        console.log(error);
        console.log(info);
    }


    render() {
        if (this.state.hasError) {
            return <div>Something error</div>
        }
        return this.props.children;
    }
}

export default CatchError;