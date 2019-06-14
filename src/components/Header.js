import React, { Component } from 'react'

export default class Header extends Component {
    desc = 'This is my paragraph';
    myid = 'test';
    render() {
        return (
            <div>
        <header>
        <h1 id={this.myid}>Grocery List</h1>
        <span className='stats'>Total items: 0</span>
        </header>
            </div>
        )
    }
}
