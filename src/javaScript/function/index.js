import React, { Component } from 'react'
//初始化参数值
const fn=(a,b=2)=>{
    return a+b
}
// console.log('函数参数的扩展',fn(3,6))
//不定参数
const fn1 = (...values)=>{
    return values
}
// console.log('不定参数：',fn1(1,2,3,5)) //[{0:1},{1:2},{2:3},{3:5},length:4]
//箭头函数
//如果有多行执行语句，则需要加{}，否则可忽略
const arrow = (a,b) =>{
    return a+b
}
//如果返回的是对象的话，代码块需要加()
const obj = (id,name) =>({id:id,name:name})
// console.log(obj(3,'baibai'))
//箭头函数里没有this
var fn3 =()=>{
    // console.log('this',this)
    // console.log('arguments',arguments)//没有arguments
}
fn3(6666);


const o1 = {
   o1f : function() {
      // console.log(this);
   }
}


const o2 = {
   o2f : () => {
      // console.log(this);
   }
}


const o3 = {};
o3.o31f = o1.o1f;
o3.o32f = o2.o2f;
o3.o31f();
o3.o32f();

//箭头函数不可作为构造函数

//没有 this、super、arguments 和 new.target 绑定。
const func1 = {
  text:'function1',
  func11:function(){
    // console.log('普通函数的this：',this)
  }
}
const func2 = {
  text:'function2',
  func22:()=>{
    // console.log('箭头函数的this,正常情况指向的是window,但这里打包后指向的是',this)
  }
}
// func1.text='changed'
// func1.func11()
// func2.text='showed'
// func2.func22()
let func3={}
func3.func33 = func1.func11; 
func3.func44 = func2.func22;
func3.func33(); 
func3.func44(); 
export default class FunctionComponent extends Component {
  render() {
    return (
      <div>
        {/* 普通函数和箭头函数 */}
        {fn1(1,2,3,4)}<br/>
        {/* {console.log('我是window',this)} */}
      </div>
    )
  }
}






