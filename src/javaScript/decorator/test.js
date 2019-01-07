import React, { Component } from 'react'
const modify= function (target,name,descriptor){
    target.name = '张三'
    return target
}
const test = () =>{
  return (target, name, descriptor)=>{
    console.log(target,name,descriptor)
  }
}
const fn= ()=>{
  console.log('进来了')
}
export default class testDemoComponent extends Component {
  @modify
  name = '王麻子'
  @test()
  componentDidMount(){

  }
  render() {
    return (
      <div>
        {this.name}
      </div>
    )
  }
}
