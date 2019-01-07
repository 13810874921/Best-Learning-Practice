import React, { Component } from 'react'

export default class FetchComponent extends Component {
  render() {
    return (
      <div>
        <h2>相同点</h2>
        <p>请求数据</p>
        <h2>比较fetch与axios区别</h2>
        <h3>Fetch</h3>
        <ol>
            <li>由于Fetch API是基于Promise设计，旧浏览器不支持Promise，需要使用pollyfill es6-promise</li>
            <li>缺点：只对网络请求报错，对400，500都当做成功的请求，需要封装去处理</li>
            <li>接口参考：<a href='https://www.w3cschool.cn/fetch_api/fetch_api-x4lu2k4d.html'>https://www.w3cschool.cn/fetch_api/fetch_api-x4lu2k4d.html</a></li>
            <li></li>
        </ol>
        <h3>Axios</h3>
        <ol>
            <li>axios 是一个基于Promise 用于浏览器和 nodejs 的 HTTP 客户端</li>
            <li>从浏览器中创建 XMLHttpRequest</li>
            <li>axios不支持jsonp，但可以引用jsonp模块</li>
            <li>支持Promise API</li>
            <li><b>提供了一些并发请求的接口</b></li>
            <li>拦截请求和响应</li>
            <li>转换请求和响应数据</li>
            <li>取消请求</li>
            <li>自动转换JSON数据</li>
            <li>客户端支持防止CSRF/XSRF</li>
        </ol>
        <p></p>
        <h3><b>跨域问题</b></h3>
        <p>if(服务端需要配置cors)</p>
        <p>&emsp;{`{return  服务端需要配置cors}`}</p>
        <p>else{`{`}</p>
        <p>&emsp;fetch安装fetch-jsonp</p>
        <p>&emsp;axios安装http-proxy-middleware</p>  
        <p>{`}`}</p>
      </div>
    )
  }
}
