/*
 * 注意：Proxy必须有浏览器或node原生支持，无法polyfilled
 *
 * Proxy 可以理解成，在目标对象之前架设一层“拦截”，外界对该对象的访问，都必须先通过这层拦截，因此提供了一种机制，可以对外界的访问进行过滤和改写。Proxy 这个词的原意是代理，用在这里表示由它来“代理”某些操作
 * https://juejin.im/user/58d8cd0644d9040069433edb/posts
 */
import React, { Component } from 'react'
/*
 * target: 原始对象
 * handler: 访问原始对象之前进行的操作函数
 */
const createProxy = (target, handler) => {
    return new Proxy(target, handler);
}



const handler = {
    get: function (target, key, receiver) {
        console.log(`getting ${key}!`);
        return Reflect.get(target, key, receiver);
    },
    set: function (target, key, value, receiver) {
        console.log(`setting ${key}!`);
        return Reflect.set(target, key, value, receiver);
    }
}



// let target = {
//     a:'xiaosan',
//     b:'18'
// }
// const proxy = new Proxy(target,handler)
// console.log('proxy----------',proxy.a)
// console.log('proxy----------',proxy.b=20)
// console.log('proxy----------',target)








export default class proxyComponent extends Component {
  render() {
    return (
      <div>
          <pre>
          {`
          /*
          * Proxy可以拦截13种属性，列表如下
          */
         var handlerAll =
         {
           // target.prop
           get: ...,
           // target.prop = value
           set: ...,
           // 'prop' in target
           has: ...,
           // delete target.prop
           deleteProperty: ...,
           // target(...args)
           apply: ...,
           // new target(...args)
           construct: ...,
           // Object.getOwnPropertyDescriptor(target, 'prop')
           getOwnPropertyDescriptor: ...,
           // Object.defineProperty(target, 'prop', descriptor)
           defineProperty: ...,
           // Object.getPrototypeOf(target), Reflect.getPrototypeOf(target),
           // target.__proto__, object.isPrototypeOf(target), object instanceof target
           getPrototypeOf: ...,
           // Object.setPrototypeOf(target), Reflect.setPrototypeOf(target)
           setPrototypeOf: ...,
           // for (let i in target) {}
           enumerate: ...,
           // Object.keys(target)
           ownKeys: ...,
           // Object.preventExtensions(target)
           preventExtensions: ...,
           // Object.isExtensible(target)
           isExtensible :...
         }
          `}</pre>
      </div>
    )
  }
}
