import React, { Component } from 'react'

export default class AddItem extends Component {
    state = {

        item:''
    }

    addItem = e =>{
        e.preventDefault();
        this.props.addItem(this.state.item);
    }

    onChange = e => this.setState({[e.target.name]:e.target.value});

    
    render() {
        return (
            <div>
                <form onSubmit={this.addItem}>
                    <input type='text' name='item' value={this.state.item} onChange={this.onChange}/>
                    <button type="submit"  > Add Item </button>
                </form>
            </div>
        )
    }
}
