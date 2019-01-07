import React, { Component } from 'react';

//使用 getDerivedStateFromError 代替 componentDidCatch
//
//正式环境会catch, 开发环境不会

class GrandChild extends Component {
    render() {
        return <div>{ this.props.aaa }</div>
    }
}

export default GrandChild;