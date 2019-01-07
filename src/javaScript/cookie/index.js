import React, { Component } from 'react'
// //设置cookie
// const setCookie =(cname,cvalue,cexdays)=>{
//     let day = new Date();
//     day.setTime(day.getTime()+(cexdays*24*60*60*1000))
//     let expires = "expires="+day
//     document.cookie=cname+'='+cvalue+";"+expires;
// }

// //获取cookie
// const getCookie = (cname)=>{
//     let name = cname + '=';
//     let ca = document.cookie.split(';');
//     for(let i=0;i<ca.length;i++){
//         let c = ca[i].trim();
//         if(c.indexOf(name)===0){
//             return c.substring(name.length,c.length)
//         }
//     }
//     return '';
// }
// //检查cookie
// const checkCookie = () => {
//     let name = getCookie('uname');
//     if(name !== ''){
//         console.log('欢迎回来'+name)
//     }else{
//         name=prompt("请输入你的名字:","")
//         if(name!==null&&name!==""){
//             setCookie('uname',name,30)
//         }
//     }
// }
// checkCookie()
export default class CookieComponent extends Component {
  render() {
    return (
      <div>
        <ol>
            <h2>Cookie</h2>
            <li style={{fontSize:"18px",fontWeight:"bold"}}>作用</li>
            <p>Cookie是由HTTP服务器设置的，保存在浏览器中，但HTTP协议是一种无状态协议，在数据交换完毕后，服务器端和客户端的链接就会关闭，每次交换数据都需要建立新的链接.</p>
            <p style={{color:"red",fontWeight:800}}>就像我们去超市买东西，没有积分卡的情况下，我们买完东西之后，超市没有我们的任何消费信息，但我们办了积分卡之后，超市就有了我们的消费信息。</p>
            <p style={{color:"red",fontWeight:800}}>cookie就像是积分卡，可以保存积分，商品就是我们的信息，超市的系统就像服务器后台，http协议就是交易的过程。</p>
            <li style={{fontSize:"18px",fontWeight:"bold"}}>机制区别</li>
            <p>session机制采用的是在服务器端保持状态的方案，而cookie机制则是在客户端保持状态的方案，cookie又叫会话跟踪机制。</p>
            <li style={{fontSize:"18px",fontWeight:"bold"}}>分类</li>
            <ol type='a'>
                <li><h3>会话cookie</h3></li>
                <p>会话cookie是指在不设定它的生命周期expires时的状态，浏览器的开启到关闭就是一次会话，当关闭浏览器时，会话cookie就会跟随浏览器而销毁。</p>
                <p>当关闭一个页面时，不影响会话cookie的销毁。</p>
                <p style={{color:"blue"}}>会话cookie就像我们没有办理积分卡时，单一的买卖过程，离开之后，信息则销毁。</p>
                <li><h3>持久cookie</h3></li>
                <p>持久cookie则是设定了它的生命周期expires，此时，cookie像商品一样，有个保质期，关闭浏览器之后，它不会销毁，直到设定的过期时间。</p>
                <p>对于持久cookie，可以在同一个浏览器中传递数据，比如，你在打开一个淘宝页面登陆后，你在点开一个商品页面，依然是登录状态，即便你关闭了浏览器，再次开启浏览器，依然会是登录状态。</p>
                <p>这就是因为cookie自动将数据传送到服务器端，在反馈回来的结果。</p>
                <p style={{color:"blue"}}>持久cookie就像是我们办理了一张积分卡，即便离开，信息一直保留，直到时间到期，信息销毁。</p>
               
            </ol>
            <li style={{fontSize:"18px",fontWeight:"bold"}}>常见属性</li>
            <p>document.cookie="key=value;expires=失效时间;path=路径;domain=域名;secure;(secure表安全级别）</p>
            <pre>
            {`
            //设置cookie
            const setCookie =(cname,cvalue,cexdays)=>{
                let day = new Date();
                day.setTime(day.getTime()+(cexdays*24*60*60*1000))
                let expires = "expires="+day
                document.cookie=cname+'='+cvalue+";"+expires;
            }
            `}
            </pre>
            <pre>
            {`
            //获取cookie
            const getCookie = (cname)=>{
                let name = cname + '=';
                let ca = document.cookie.split(';');
                for(let i=0;i<ca.length;i++){
                    let c = ca[i].trim();
                    if(c.indexOf(name)===0){
                        return c.substring(name.length,c.length)
                    }
                }
                return '';
            }
            `}
            </pre>
            <pre>
            {`
            //检查cookie
            const checkCookie = () => {
                let name = getCookie('uname');
                if(name !== ''){
                    console.log('欢迎回来'+name)
                }else{
                    name=prompt("请输入你的名字:","")
                    if(name!==null&&name!==""){
                        setCookie('uname',name,30)
                    }
                }
            }
            `}
            </pre>
            <pre>
            {`
            //调用
            checkCookie()
            `}
            </pre>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
        </ol>
      </div>
    )
  }
}
