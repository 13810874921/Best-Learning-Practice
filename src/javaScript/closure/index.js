import React, { Component } from 'react'

//简单闭包
const mes = 'Hello World';
function a(x){
  var x = '!'
  return mes+x
}
function foo(){
  var x = 3;
  function bar(y){
    // console.log('action:',x+(++y))
    return x+(++y)
  }
  bar(2)
}
foo(11)//
//复杂闭包
const isNum = 3;
function b (num1,num2){
  function c (){
    return num1+num2+isNum
  }
  return c()
}
// a()
;(function(){
  console.log(new Date())
  var n=9;
  function sum(){
    function sub(m){
      return n-m
    }
    console.log('sub5',sub(5))
  }
  sum()
  console.log(new Date())
})()
export default class ClosureComponent extends Component {
  render() {
    return (
      <div>
        {/* 简单闭包 */}
        <p>闭包：只实现代码的封装</p>
        <p>相当于一个工具类</p>
        {a()}<br />
        {b(3,7)}
      </div>
    )
  }
}
