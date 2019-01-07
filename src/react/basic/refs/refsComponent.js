import React, { Component } from 'react'
import Child from './child'

export default class refsComponent extends Component {
  constructor(props){
    super(props)
    this.state=({
      hasTrue:true
    })
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(props){
    console.log(props)
    
    //通过ref使用子节点的方法
    this.refs.child.fun() 

    if(this.state.hasTrue){
      this.setState({hasTrue:false})
    }else{
      this.setState({hasTrue:true})
    }
    console.log(this.state.hasTrue)
  }
  render() {
    return (
      <div>
        <div ref='p' onClick={this.handleClick}>
          <Child ref='child' />
        </div>
      </div>
    )
  }
}
