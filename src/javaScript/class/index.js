import React, { Component } from 'react'

class Example{
    constructor(a){
        this.a = a
    }
}
//class的实例化，必须使用new
let e = new Example(3);
// console.log(e)
class Example1{
    a='我是谁';
    static b='class 本身的属性';//静态属性暂时支持
    static sum = (c,d)=>{//静态方法 可直接引用,不需要实例化
        console.log('进入静态方法')
        return c+d
    }
    sum=(e,f)=>{ //原型方法需new出来后使用
        console.log('进入原型方法')
        return e+f
    }
    constructor(){
        this.sum=(g,h)=>{ //实例方法
            console.log('进入实例方法')
            return g+h
        }
    }
}
const exam1 = new Example1()
// console.log('构造函数',exam1,Example1.prototype)
// console.log(new Example1().sum(5,6))//原型方法
// console.log(Example1.prototype.constructor.b === Example1.b)
// console.log(Example1.sum(11,2))//静态方法


// 闭包，构造函数，class


export default class ClassComponent extends Component {
    render() {
        return (
        <div>
            <p>构造函数与class的区别</p>
            <p>class相当于构造函数的语法糖</p>
            <p>class本质是function。</p>
            <p style={{borderBottom:"1px solid"}}></p>
            {/* <p>普通函数：只实现了代码封装，如同面向对象里面的单例类，不需要实例化，不会存在多个副本。</p> */}
            <p>构造函数：实现了封装和继承，每次实例化都会形成一个新的对象。</p>
            <p>综上所诉：只需要操作一个对象时用闭包，例如工具类；需要对多个对象进行操作时用构造函数，例如功能性插件。</p>
            <p>常见用法：闭包实现命名空间，构造函数实现具体功能。</p>
            {/* {this.a} */}
            <br />
            {exam1.sum(44,55)}
        </div>
        )
  }
}
const test=(target)=>{
    target.isYes = true
}
@test
class ab{}
// console.log('decorator，用来修饰类的行为',ab.prototype);

// class b{
//     @write
//     sum(a,b){
//         return a+b
//     }
// }
// const write=(target,name,descriptor)=>{
//     descriptor.writable = false
//     return descriptor
// }
// console.log(b)

class Example2 {
    @write
    sum(a, b) {
        return a + b;
    }
}
function write(target, name, descriptor) {
    // descriptor.sum = false;
    return descriptor; // 必须返回
}
// console.log(new Example2().sum(6,6))

function add (a,b){
    return a+b
}
function sub (a,b){
    return a-b
}
let a1 = add.apply(sub,[5,2]) // sub调用add的方法 ,后面跟着array
let a2 = sub.apply(add,[5,3])
let a3 = add.call(sub,7,1)//sub调用add的方法，后面跟多个参数...args
// console.log('a1',a1)
// console.log('a2',a2)
// console.log('a3',a3)
