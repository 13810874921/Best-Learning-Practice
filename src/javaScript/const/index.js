import React, { Component } from 'react'


// let
//代码块内有效,且不能重复声明
{
    let a=0;//局部变量，可以再赋值
    var b=11;//全局变量
    const c=3;//局部常量，不可再赋值
    // console.log(a)
  }
  // console.log(a)
// console.log(a) // a is not defined
//var作用于全局
for (var i = 0; i < 10; i++) {
      // console.log(i);//十个10
  }
//let 每次都是一个新变量
for (let j = 0; j < 10; j++) {
      // console.log(j);//0123456789
  }
//const
//const声明只读变量，声明之后不允许改变。意味着，一但声明必须初始化，否则会报错。
const name = 'Andy';
export default class ConstComponent extends Component {
  render() {
    return (
      <div>
        {name}
      </div>
    )
  }
}
