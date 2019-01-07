import React, { Component } from 'react'
//千分位加','
const fixed = (num)=>{
    if(typeof(num) === 'number'){
        const str = (num).toFixed(6) //在设置小数点后几位的同时转成字符串
        let parts = str.split('.')
        parts[0]=parts[0].replace(/\B(?=(\d{3})+(?!\d))/g,',')
        return parts.join('.')
    }else{
        return num
    }
}
export default class NumberComponent extends Component {
  render() {
    return (
      <div>
            {/* 千分位加, */}
            {fixed(20131233456.789)}
            {/* parseInt */}
            <p>parseInt</p>
            <p>{Number.parseInt(123.345)}</p>
            <p>parseFloat</p>
            <p>{Number.parseFloat(123.345)}</p>
            {/* Math */}
            <p>Math.abs()取绝对值</p>
            <p>{Math.abs(-10.23)}</p>
            {/* 最大/最小安全整数 */}
            <p>最大安全整数</p>
            <p>Number.MAX_SAFE_INTEGER</p>
            <p>{Number.MAX_SAFE_INTEGER}</p>
            <p>最小安全整数</p>
            <p>Number.MIN_SAFE_INTEGER</p>
            <p>{Number.MIN_SAFE_INTEGER}</p>
            {/* isFinite */}
            <p>是否是无穷：isFinite返回bealoon</p>
            <p>{JSON.stringify(Number.isFinite(3166))}</p>
      </div>
    )
  }
}
