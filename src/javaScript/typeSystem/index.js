import React, { Component } from 'react'
const data={
  a:1,
  b:2,
  c:3
}
function a(res){
  // console.log('data',{...data})
  // let {a,b,c}=data;
  // debugger;
  res.a = m.get('x0')
  // console.log(res) //{a: "x", b: 2, c: 3}
  return res
}
let m = new Map([['z0','z'],['x0','x'],['c0','c']])
a(data)

// console.log(m)
// console.log('m',m.get('z0'))


const b = {
  one:2,
  fn:function(num){
    // console.log(arguments)
    return num*this.one
  }
}
// console.log('bbbbbbbb',...a)
let obj1=new Object;
let obj2=new Object();
let obj3={};
// console.log('两个new出来的obj做比较：',obj1===obj2||obj1===obj3)//false

export default class typeSysComponent extends Component {
  render() {
    return (
      <div>
        <img style={{width:'100%',minWidth:400}} src={require("../../images/a.jpg")} />
        <p />
        <ol>
            <li>空值(2种)：undefined表示原始类型的空值，null表示对象类型的空值</li>
            <li>包装对象(3种)：　字符串string、数字number、布尔值boolean虽然属于原始类型。但是，由于其包装对象的性质，可以调用属性和方法</li>
            <li>构造器对象(9种)：对象Object、函数Function、日期Date、数组Array、错误Error、正则RegExp、字符串String、数字number、布尔值boolean</li>
            <li>单体内置对象(4种)：Math、JSON、全局对象和arguments这四种。它们不需声明或者使用构造器构造，直接在相应场景使用即可</li>
        </ol>
        <ol>
          <h3>按照引用划分</h3>
          <li>可以直接new的：对象Object、函数Function、日期Date、数组Array、错误Error、正则RegExp</li>
          <li>不需要new的：字符串string、数字number、布尔值boolean可以调用属性和方法。</li>
          <li>直接使用的：Math、JSON、全局对象和arguments这四种</li>
          
          <li>空值(2种)：undefined表示原始类型的空值，null表示对象类型的空值</li>
        </ol>
        <ol>
          <h3>应用</h3>
          <li>构造器对象详情参照左侧Menu——JavaScript专题</li>
          <li>Math</li>
          <dd>Math.random() 是0~1的随机数</dd>
          <dd>Math.round(num)小数点后第一位四舍五入：{Math.round(Math.random()*10)}</dd>
          <dd>Math.ceil(num)向上取整：{Math.ceil(11.11)}</dd>
          <dd>Math.floor(num)向下取整：{Math.floor(11.11)}</dd>
          <dd>Math.PI:{Math.PI}</dd>
          <dd>Math.abs(num)绝对值：{Math.abs(-100.123)}</dd>
          <li>JSON</li>
          <dd>JSON.stringify()对象转JSON字符串：{JSON.stringify({a:66})}</dd>
          <dd>JSON.parse()字符串转对象：{JSON.stringify(JSON.parse('{"a":"6"}'))}</dd>
          {/* <li>{console.log(arguments)}</li> */}
          {/* <li>{b.fn(3)}</li> */}
        </ol>
      </div>
    )
  }
}
