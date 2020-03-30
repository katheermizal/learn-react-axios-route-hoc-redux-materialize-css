import React, {Component} from 'react';
import Ninjas from './Ninjas'; 
import AddNinja from './AddNinja';

class App extends Component {
  state = {
    ninjas : [
      {name: 'Katheer', age: 29, belt: 'Black', id: 1 },
      {name: 'John', age: 30, belt: 'White', id: 2  },
      {name: 'Ray', age: 19, belt: 'Blue', id: 3  },
      {name: 'Sam', age: 20, belt: 'Red', id: 4  }
    ]
  }
  
  addNinja = (ninja) => {
   // console.log(ninja);
   ninja.id = Math.random();
   let ninjas = [...this.state.ninjas, ninja]
   this.setState({
     ninjas: ninjas 
   })
  }

  deleteNinja = (id) => {
   let ninjas = this.state.ninjas.filter(ninja => {
     return ninja.id !== id
   })

   this.setState({
     ninjas: ninjas
   });
  } 

  render(){
    return (
      <div className="App">
        <h1>My First react App</h1>
        <p>Welcome</p>
        <Ninjas deleteNinja= { this.deleteNinja } ninjas={ this.state.ninjas } />

        <AddNinja addNinja={ this.addNinja }/>
      </div>
    )
  } 
}

export default App; 
