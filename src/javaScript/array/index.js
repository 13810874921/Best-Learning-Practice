import React, { Component } from 'react'
export default class index extends Component {
  render() {
    let arr = [];
    let list = [1,2,3]
    list.forEach((item,index)=>{
        arr.push(item+',')
        // arr.push(<p key={index}>{item}</p>)
    })
    //增加
    // {/* push,向末尾增加一个值 */}
    arr.push(<p key={16} style={{color:'#ddd'}}>16</p>,<p key={14} style={{color:'#ddd'}}>14</p>)
    // unshift,向数组前面增加值
    arr.unshift(<p key='unshift' style={{color:'red'}}>unshift</p>)
    //concat 
    let arr1 = arr.concat('list')
    let arr2 = [2,5,8]
    let arr3 = [1,4,7]
    let arr4 = [3,6,9]
    let arr5 = [0,1,2,3]
    let concat2345 = arr2.concat(arr3,arr4,arr5)
    let set = new Set(concat2345)//返回的是一个对象
    


    //减少
    //pop,删除数组最后一个值，并返回该值,()中无需传入参数
    const pop = arr.pop()
    //shift  删除数组第一个值，并返回该值,()中无需传入参数
    const shift = arr.shift()

    //forEach
    set.forEach(item=><p>{item}</p>)

    //join 
    let newArr = [1,2,3,4,5,1]
    let newArray = [0,3,5,2,1]



    return (
      <div>
        {/* <h1>数组对象</h1> */}
        {/* 原始数组 */}
        arr={arr}
        <p style={{borderBottom:"1px solid"}}></p>
        {/* pop */}
        pop={pop}
        <p style={{borderBottom:"1px solid"}}></p>
        {/* shift */}
        shift={shift}
        <p style={{borderBottom:"1px solid"}}></p>
        {/* concat连接数组内的值或多个数组 */}
        向arr数组内插入list，{arr1}
        向arr2数组内插入arr3,arr4,arr5={concat2345}
        <p style={{borderBottom:"1px solid"}}></p>
        <br/>
        {/* set */}
        concat2345 数组去重Set={set}
        <p style={{borderBottom:"1px solid"}}></p>
        <br/>
        {/* Array.from专成数组格式 */}
        取数组Array.from：{Array.from(set)}
        <p style={{borderBottom:"1px solid"}}></p>
        <br/>
        
        {/* join 需满足length>1,并在每两个值之间插入一个值 */}
        join:{newArr.join('|')}
        <p style={{borderBottom:"1px solid"}}></p>
        {/* indexof(value) 查找数组内值的索引 */}
        <p>indexOf:{newArr.indexOf('3')}</p>
        <p style={{borderBottom:"1px solid"}}></p>
        {/* inverse()倒序排列 */}
        <p>reverse:{newArr.reverse()}</p>
        <p style={{borderBottom:"1px solid"}}></p>
        {/* sort()数组排序 */}
        <p>sort:{newArray.sort()}</p>
        <p style={{borderBottom:"1px solid"}}></p>
      </div>
    )
  }
}
