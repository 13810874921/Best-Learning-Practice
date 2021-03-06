import React, { Component } from 'react'

export default class EventLoopComponent extends Component {
  render() {
    return (
      <div>
        <a href='#/for'>循环</a>
        <p>由于JavaScript是单线程的语言，所以同一时间只能做一件事。</p>
        <p>单线程就意味着，所有任务需要排队，前一个任务结束，才会执行后一个任务。如果前一个任务耗时很长，后一个任务就不得不一直等着</p>
        <pre>
          {`
          var i=0,t=Date.now();
          const loop1 = ()=>{
            for (i;i<1000;i++){
              console.log(i)
            }
            console.log('end:::',Date.now()-t)
          }
          loop1()
          `}
        </pre>
        <p>如果排队时因为计算量大也就算了，但如果是网络请求就不合适了。</p>
        <p>于是，任务就分为了同步任务和异步任务</p>
        <h3>同步</h3>
        <p>如果在函数返回的时候，调用者就能够得到预期结果(即拿到了预期的返回值或者看到了预期的效果)，那么这个函数就是同步的</p>
        <h3>异步</h3>
        <p>如果在函数返回的时候，调用者还不能够得到预期结果，而是需要在将来通过一定的手段得到，那么这个函数就是异步的</p>
        
        <h3>人们把javascript调控同步和异步任务的机制称为事件循环，首先来看事件循环机制的可视化描述</h3>
        <p>详细步骤如下：</p>
        <ol>
          <li>所有同步任务都在主线程上执行，形成一个执行栈</li>
          <li>主线程之外，还存在一个"消息队列"。只要异步操作执行完成，就到消息队列中排队</li>
          <li>一旦执行栈中的所有同步任务执行完毕，系统就会按次序读取消息队列中的异步任务，于是被读取的异步任务结束等待状态，进入执行栈，开始执行</li>
          <li>主线程不断重复上面的第三步</li>
        </ol>
        <p>为什么叫事件循环,而不叫任务循环或消息循环?</p>
        <p>究其原因是消息队列中的每条消息实际上都对应着一个事件</p>
      </div>
    )
  }
}
