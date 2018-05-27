import React, { Component } from "react";
 
class TodoItems extends Component {
	
	constructor(props) {
    super(props);
 
    this.createTasks = this.createTasks.bind(this);
  }
 
  delete(key) {
    this.props.delete(key);
  }
	
	
	
  createTasks(item) {
    return <li onClick={() => this.delete(item.key)} className="list-group-item" id="kolor" key={item.key}>
	<div className="row justify-content-center" >
	<div className="col-2" id="obok">{item.priorytet}</div>
	<div className="col-10" id="obok1">{item.text}</div>
	</div>
	</li>
  }
 
  render() {
    var todoEntries = this.props.entries;
    var listItems = todoEntries.map(this.createTasks);
 
    return (
      <ul className="list-group col-10" id="lista">
          {listItems}
      </ul>
    );
  }
};
 
export default TodoItems;