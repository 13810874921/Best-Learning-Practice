//Suspense, lazy 都是从16.6开始支持
import React, { Component, Suspense, lazy } from 'react'
//lazy只能接React组件，不能接其他东西
const AsyncComponent = lazy(() => import('./AsyncComponent'));



export default class codeSpliteComponent extends Component {
  
  componentDidMount(){
    // 可以在用到的时候再加载，这种可以用于任意资源的按需加载
    import('./add').then(obj => {
        console.log(obj.add(22, 5))
    })
  }
  render() {
    return (
      <div>
          <p>AsyncComponent如果不包裹在Suspense组件中就会报错</p>
          <Suspense fallback={<div>Loading...</div>}>
              <AsyncComponent />
          </Suspense>
      </div>

    )
  }
}
