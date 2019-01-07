import React, { Component } from 'react';
import GrandChild from './grandChild.js';

//使用 getDerivedStateFromError 代替 componentDidCatch
//
//正式环境会catch, 开发环境不会

class CatchChildError extends Component {
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
            return <div>Child Something error</div>
        }
        // If these kids act up, we'll know!
        return (
            <div>
                { this.props.aaa }
                <GrandChild />
            </div>
            
        )
    }
}

export default CatchChildError;