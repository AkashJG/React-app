import React from 'react';
import ListItems from './Listitem'
import './App.css';
import {library} from '@fortawesome/fontawesome-svg-core'
import {faTrash} from '@fortawesome/free-solid-svg-icons'

library.add(faTrash);

class App extends React.Component{

 
constructor(props){
  super(props);
  this.state={
    items:[],
    currentItem:{
      text:'',
      key:''
    }
  }
  this.handleInput=this.handleInput.bind(this);
  this.addItem=this.addItem.bind(this);
  this.deleteItems=this.deleteItems.bind(this)
  this.setUpdate=this.setUpdate.bind(this);
}



handleInput(e){
this.setState({
  currentItem:{
    text:e.target.value,
    key:Date.now()
  }
})
}


addItem(e){
e.preventDefault();
const newItem=this.state.currentItem;

if(newItem.text!==""){
  console.log(newItem)
  const newItems=[...this.state.items,newItem];
  this.setState({
    items:newItems,
    currentItem:{
      text:'',
      key:''
    }
  })

}
else
{
  alert('Please fill it.')
}
}

deleteItems(key){
  const filterdItems =this.state.items.filter(item => item.key!==key);
  this.setState({
    items:filterdItems
  })
}

setUpdate(text,key){
  const items=this.state.items;
  items.map(item =>{
    if(item.key===key){
      item.text=text
    }
    this.setState({
      items :items
    })
    return 0;
  })

}
render () {
return (
  <div className="App">
  <header>
    <form id="to-do-form" onSubmit={this.addItem}>
      <h2>Your Bucket List...</h2>
      <input type ="test" placeholder ="Enter Text" 
      value={this.state.currentItem.text}
        onChange={this.handleInput} />
      <button type ="submit">Submit</button>
    </form>
  </header>
  <ListItems 
  items={this.state.items} 
  deleteItems={this.deleteItems}
  setUpdate={this.setUpdate}
  >

  </ListItems>
  </div> 
)
}

}

export default App;
