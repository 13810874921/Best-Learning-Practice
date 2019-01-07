// let a = 0;

// setInterval(() => a++; 1000);

// module.exports = a;

// export default a;
import React, { Component } from 'react'
import a_import from './module.js';
let a_require = require('./common.js');
// console.log(a_import);
// console.log(a_require);



export default class Entry extends Component {
    render() {
        return (
            <div>
                <p>a_import: {a_import.a}</p>
                <p>a_require: {a_require.a}</p>
                <button onClick={() => {this.setState({});console.log(a_import)}}>trigger</button>
            </div>
        )
    }

}