import React, { Component } from 'react'
import Quantity from './Quantity'

export default class Grocery extends Component {
    state={
        update:false,
        updateItem:this.props.name
    }

    Update = ()=>{
        this.setState({
            
            update:!this.state.update
        });
        console.log(this.state.update);
    }

    onChange=e=>this.setState({[e.target.name]:e.target.value});
    
    render() {
        return (
            <div className='grocery'>
                <button className="remove-grocery" onClick={()=>this.props.onDelete(this.props.id)}>X</button>
                    
                    <button  className='update-grocery' onClick={this.Update}>Update
                    </button>
                {
                    this.state.update ?
                     <div>
                         <form onSubmit={ ()=>this.props.onUpdate(this.props.id,this.state.updateItem)}>
                            <input type="text" name="updateItem" value={this.state.updateItem} onChange={this.onChange}/>
                            <button type='submit' name='submit' value='Submit' className='update-grocery'>Submit</button>
                         </form>
                         </div>
                         :
                     <React.Fragment> 
                    <span className='grocery-name'>{this.props.name}</span></React.Fragment>
                }
            
           
              <Quantity/>
            </div>
          );
    }
}
