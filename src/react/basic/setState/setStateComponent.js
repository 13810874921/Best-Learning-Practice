import React, { Component } from 'react'

export default class setStateComponent extends Component {
  constructor(props){
      super(props);
      this.state={
          data: new Date()
      }
  }
  componentDidMount(){
      this.timer = setInterval(() => this.tick(), 1000)
  }

  tick(){
      this.setState({
          data:new Date()
      })
  }

  render() {
    return (
      <div>
        {this.state.data.toLocaleTimeString()}
      </div>
    )
  }
}
