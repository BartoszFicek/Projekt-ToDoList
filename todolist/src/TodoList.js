import React, { Component } from "react";
import TodoItems from "./TodoItems";
 
class TodoList extends Component {
  
  constructor(props) {
  super(props);
 
  this.state = {
    items: []
  };
 
  this.addItem = this.addItem.bind(this);
  this.deleteItem = this.deleteItem.bind(this);
}
  
    
  
  delete(key) {
    this.props.delete(key);
  }
  
  
  addItem(e){
	  if (this._inputElement.value !== "") {
    var newItem = {
      text: this._inputElement.value,
      key: Date.now()
    };
 
    this.setState((prevState) => {
      return { 
        items: prevState.items.concat(newItem) 
      };
    });
   
    this._inputElement.value = "";
  }
   
  console.log(this.state.items);
     
  e.preventDefault();
	  
  }
  
  deleteItem(key) {
  var filteredItems = this.state.items.filter(function (item) {
    return (item.key !== key);
  });
 
  this.setState({
    items: filteredItems
  });
}
  
  
  
  
  
  render() {
    return (
		<div className="col-12 row justify-content-center">
			<div className="col-12 row justify-content-center" id="lista">
        <div className="col-12 row justify-content-center ">
          <form className="col-12 row justify-content-center" onSubmit={this.addItem}>
            <input 	className="col-8 form-control" ref={(a) => this._inputElement = a}
						placeholder="ENTER TASK" id="miejsce"
						autocomplete="off">
            </input>
            <button className="btn btn-primary col-2" type="submit" id="przycisk"> ADD</button>
          </form>
        </div>
		<TodoItems entries={this.state.items}
		delete={this.deleteItem}/>
      </div>
	  </div>
    );
  }
}
 
export default TodoList;



