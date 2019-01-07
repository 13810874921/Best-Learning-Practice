import React, { Component } from 'react'
function reversed(a,b){
  b=b-a;//2
  a=a+b;//4
  // b=a-b//2
  return [a,b]
}
// console.log(reversed(2,4))
function fn(n){
  if(n==0)return 0;
  return n+fn(n-1);
}
// console.log(fn(100))
export default class CommonJSComponent extends Component {
  render() {
    return (
      <div>
            <h3>commonJS 与 es module的区别</h3>
            <p>require()用来引入外部模块；exports对象用于导出当前模块的方法或变量，唯一的导出口；module对象就代表模块本身。</p>
            <p>{`CommonJS定义的模块分为:{模块引用(require)} {模块定义(exports)} {模块标识(module)}`}</p>


            <h3>es module</h3>
            <p>循环加载时，ES6模块是动态引用。只要两个模块之间存在某个引用，代码就能够执行。</p>
      </div>
    )
  }
}
