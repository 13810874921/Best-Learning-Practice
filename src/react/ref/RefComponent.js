import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class Form extends Component {
    render() {
        return (
            <form>
                { this.props.children }
            </form>
        )
    }
}

class RefComponent extends Component {

    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
        this.formRef = React.createRef();
    }

    showRefs(e) {
        e.preventDefault();
        //如果ref对应的是原生标签，则返回原生标签本身
        console.log(this.inputRef.current.value);

        //如果ref对应的是组件，则返回组件实例
        console.log(this.formRef.current);

        //可以通过ReactDOM.findDOMNode获取实际的DOM元素
        console.log(ReactDOM.findDOMNode(this.formRef.current))
    }

    render() {
        return (
            <Form ref={ this.formRef }>
                <input ref={ this.inputRef } id="inputTest"/>
                <button onClick={this.showRefs.bind(this)}>提交</button>
            </Form>
        )
    }



}


export default RefComponent;