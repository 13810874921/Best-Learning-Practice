//注意，虽然没有用到React, 但是必须import进来，并命名为React.
//
import React from 'react';

const FunctionalTest = (props) => {
    return (
        <div>
            <h2>这是一个函数式组件</h2>
            <p>函数式组件中没有state, 没有this, 只能根据传入的参数进行静态展示，自身内部没有状态</p>
            <h2>{ props.title }</h2>
            <p>{ props.content }</p>
        </div>
    )
}

export default FunctionalTest;