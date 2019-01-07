import React, { Component } from 'react'
// import axios from 'axios'
let first,second,third,fourth;
//基础写法
new Promise((resolve,reject)=>{
    resolve('成功');
    resolve('成功1');
    reject('失败')
}).then((val)=>{
    // console.log('接收第一个参数：',val)//成功
    return first=val
}).then((val)=>{
    // console.log('接收第二个参数：',val)//undefined
    return Promise.resolve('resolve')
}).then((val)=>{
    // console.log('接收第三个参数：',val) // resolve
    return  Promise.reject('error')
})
// .then((val)=>{
//     console.log('resolve:',val)//reject:error
// },err=>{
//     console.log('reject:'+err)
// })
//使用catch中止Promise
.catch((err)=>{
    // console.log('catch',err)
})
// console.log('我先执行，因为我是同步')
//-------------------------
//使用Promise封装axios
//export function getData(url){
//     return new Promise((resolve,reject)=>{
//         axios.get(url).then(res=>{
//             resolve(res)
//         }).catch(err=>{
//             reject(err)
//         })
//     })
// }
//export function postData(url,params){
//     return new Promise((resolve,reject)=>{
//         axios.post(url,params).then(res=>{
//             resolve(res)
//         }).catch(err=>{
//             reject(err)
//         })
//     })
// }
//使用封装后axios
// postData(url,params).then(function(data){console.log(data)}).catch(function(){})

export default class PromiseComponent extends Component {
  render() {
    return (
      <div>
        {first}
        {second}
        {third}
      </div>
    )
  }
}
