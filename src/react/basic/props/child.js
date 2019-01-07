import React, { Component } from 'react'

export default class child extends Component {
   
  render() {
    return (
      <div>
        <p>I'm number: <span className='size child'>{ this.props.name }</span></p>
      </div>
    )
  }
}
