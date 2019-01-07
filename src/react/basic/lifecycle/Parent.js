import React, { Component } from 'react'

export default class Parent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 0
        };
    }

    render() {
        return (
            <div>
                <LifeCycle value={this.state.value}/>
                <button onClick={ this.confirm }>确认</button>
            </div>
        )
    }

    confirm = () => {
        this.setState({
            value: new Date().getTime()
        })
    }
}