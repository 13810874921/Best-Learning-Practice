import React, { Component } from 'react'


// test()
//使用new Promise() 必须return出来
const anyFunction= (x)=> {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(x)
            resolve(x)
        },3000)
    })
}
const test = async() => {
    await anyFunction('Good Boy!')
    console.log('this is a async function;等待上面方法执行完成后会出现这个。')
}
export default class AsyncComponent extends Component {
    componentDidMount(){
        test()
    }
    render() {
        return (
        <div>
            <p>异步操作一定是 async/await 成对出现的。</p>
            <p>async执行顺序：await fn（）有返回之后，再执行后续操作。</p>
        </div>
        )
  }
}
