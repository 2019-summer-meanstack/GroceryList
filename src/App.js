import React from 'react';
import Grocery from "./components/Grocery"
import Header from "./components/Header"
import AddItem from "./components/AddItem"

class App extends React.Component {

  state={
    id:4,
    
    grocerylist : [
      {
        id:1,
        name: 'Apple',
        
      },
      {
        id:2,
        name: 'Orange',
        
      },
      {id:3,
        name: 'Milk',
        
      },
      {
        id:4,
        name: 'Pop',
        
      }
    ]
  };

  deleteItem = id=>{
    console.log(id);
    this.setState (prevState => ({
      grocerylist:this.state.grocerylist.filter(g=>g.id!==id)
    }));
  };

  addItem = name=>{

    console.log(name);

    this.setState(prevState=>{
      return({
      id:prevState.id + 1,
      grocerylist:[...prevState.grocerylist,{id:this.state.id,name}]
      })
     
    });
  }

  UpdateItem = (id,name) =>{
    // const findGrocery = this.state.grocerylist.find(g=>g.id===id);
   
    this.setState(prevState=>{return(
      {
        grocerylist:prevState.grocerylist.map( i=>
          i.id===id?({id,name}):i

        )
      }
    )})
    


  }

  render()
  {
    return (
    <div>
      <Header />

      { this.state.grocerylist.map( g => <Grocery 
      name={g.name} key={g.id} id={g.id} onDelete={this.deleteItem} onUpdate={this.UpdateItem}/>)}
      <AddItem addItem={this.addItem}/>
    </div>
  );
}
}

export default App;
