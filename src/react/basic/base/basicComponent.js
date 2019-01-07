import React, { Component } from 'react';

class Hello extends Component {
    // 最基础的静态组件，注意className的写法与普通html不同
    render() {
        return (
            <h3 className="hello">
                Hello World!!!
            </h3>
        );
    }
}

class Something extends Component {
    // 可以通过外部传入属性
    render() {
        const {something} = this.props;
        return (
            <p className="world">
                There are many {something} in the World
            </p>
        );
    }
}

class BigThing extends Component {
    // 声明props的默认值
    static defaultProps = {
        content: '大象'
    }

    // 注意style的写法, 所有原来的中横线都改为驼峰命名，如font-size => fontSize
    // 注意事件的写法, 所有原来的onxxx都改为驼峰命名，如onclick => onClick
    render() {
        return (
            <span style={{color: 'red', fontSize: '16px'}} onClick={this.onClick}>
                { this.props.content }
            </span>
        );
    }

    onClick = () => {
        const {onClick, content} = this.props;
        onClick && onClick(content);
    }
}

class Basic extends Component {
    //给组件传值可以是任意东西，比如字符、数字、组件、函数等等都可以，只要子组件有相应的处理逻辑即可
    render() {
        return (
            <React.Fragment>
                <Hello />
                <Something something="pigs"/>
                <Something something={<BigThing />}/>
                <Something something={<BigThing content="鲸鱼"/>}/>
                <Something something={<BigThing content="点击我" onClick={content => alert(content)}/>} />
            </React.Fragment>
        );
    }
}


export default Basic;
