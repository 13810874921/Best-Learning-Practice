import React, { Component } from 'react'

export default class child extends Component {
    constructor(props){
        super(props);
        this.state=({
            count:0
        })
        this.fun = this.fun.bind(this)
    }
    fun(){
      console.log('from child fun function!!')
    }
  render() {
    return (
      <div>
        <button >I'm Child Component!!! click me.</button>
      </div>
    )
  }
}
