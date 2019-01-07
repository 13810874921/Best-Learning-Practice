import React, { Component } from 'react'
// console.log('-------------------------------')
// var a = 1;
// var obj = {
//     a:6,
//     fn:function(){
//         console.log(this.a)
//         return this.a
//     }
// }
// var fn1 = obj.fn;
// // obj.fn()
// fn1()
// var o=null;
// console.log(o)
// var obj={
//   new:'new',
//   old:'old'
// }
//   obj.new!==null||obj.new!==0 ? console.log( obj.new):console.log(obj.old)
var a = 3316;
var obj1 = {
    a:22,
    fn:function(){
        if(this === undefined){
            // return console.log('我在es6的海洋中翱翔')
        }
        // console.log(this.a)
    }
}
var fn1 = obj1.fn;
fn1()// 此时指向window.a     3316
obj1.fn()  //指向obj1.a      22
fn1.call(obj1)  // 此时指向obj1.a  22
fn1.apply(obj1)  // 此时指向obj1.a  22
fn1.bind(obj1)() // 此时指向obj1.a  22


var obj2 = {
  message: 'My Dog its name is: '
}
function getName(firstName, lastName) {
  // console.log(this.message + firstName + ' ' + lastName)
}

// console.log(getName.apply(obj2, ['Dot', 'Dolby'])==getName.call(obj2,'Dot','Dolby'))//true
// console.log('-------------------------------')


export default class BindCallApply extends Component {
  render() {
    return (
      <div>
        <p>call、apply、bind的作用是改变函数运行时this的指向</p>
        <h3>由于babel将ES6+ 转换成ES2015的时候将this定义为undefined了，所以this指向会是undefined而不是window &nbsp;
            <a href='https://www.jianshu.com/p/a182d4f75e88' target="_blank" style={{fontSize:"14px"}}>(查看原文)</a>
        </h3>
        <p>总结</p>
        <p>call可接收多个参数，</p>
        <pre>
        {`
        var obj1 = {
          message: 'My Dog its name is: '
        }
        function obj(firstName, lastName) {
          console.log(this.message + firstName + ' ' + lastName)
        }
        obj.call(obj1,"a","b") // My Dog its name is: a b
        `}
        </pre>
        <p>apply只接收两个参数，第二个参数是数组。</p>
        <pre>
        {`
        var obj1 = {
          message: 'My Dog its name is: '
        }
        function obj(firstName, lastName) {
          console.log(this.message + firstName + ' ' + lastName)
        }
        obj.apply(obj1,["a","b"]) // My Dog its name is: a b
        `}
        </pre>
        <p>bind类似于call,但函数不会立即运行</p>
        <pre>
        {`
        var obj1 = {
          message: 'My Dog its name is: '
        }
        function obj(firstName, lastName) {
          console.log(this.message + firstName + ' ' + lastName)
        }
        obj.bind(obj1)("a","b") // My Dog its name is: a b
        `}
        </pre>
      </div>
    )
  }
}
