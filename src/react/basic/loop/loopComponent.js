import React, { Component } from 'react'

export default class loopComponent extends Component {
    constructor(props){
        super(props);
        this.state={
            arr:['1','2','3']
        }
    }
    /* 循环使用map，注意循环中使用key属性，一般为每一条的唯一ID，注意尽量不要使用数组的index作为key */
    render() {
        // jsx里面不能用for循环，因为for循环不是表达式,如果使用for循环可以在JSX外部进行,注意外部也需要key属性
        const itemList = [];
        for (let i = 0; i < 3; i++) {
            itemList.push(<div key={i} style={{color: 'red'}}>{'第' + i + '次循环'}</div>)
        }

        return (
            <div>
                循环演示<br/>
                {this.state.arr.map(item => <p key={item}>我是数组循环：{item}</p>) }

                {itemList}
            </div>
        )
    }
}
