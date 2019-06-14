import React, { Component } from 'react'

export default class Quantity extends Component {
    state={
        quantity:0
      };
      
      incrementQuantity=()=>{
        this.setState({
          quantity:this.state.quantity+1
        });
      };
    
     render()
     { return(
        <div className='counter'>
            <button className='counter-action decrement'> - </button>
            <span className='counter-score'>{this.state.quantity}</span>
            <button className='counter-action increment' onClick={this.incrementQuantity}> + </button>
          </div>
      )}
}
