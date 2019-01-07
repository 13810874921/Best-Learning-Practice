import React, { Component } from 'react'
import Child from "./child";


export default class propsComponent extends Component {
    
  render() {
    return (
      <div>
        <Child name='a'/>
        <Child name='b'/>
        <Child name='c'/>
      </div>
    )
  }
}
