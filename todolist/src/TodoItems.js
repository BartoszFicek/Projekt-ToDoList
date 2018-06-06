import React, { Component } from "react";
import TodoItem from "./ToDoItem";
import "./TodoItems.css";

class TodoItems extends Component {
  delete = key => {
    this.props.delete(key);
  };

  render() {
    let todoEntries = this.props.entries;

    return (
      <ul className="list-group col-10 TodoItems-lista">
        {todoEntries.map(item => (
          <TodoItem {...item} id={item.key} onDelete={this.delete} />
        ))}
      </ul>
    );
  }
}

export default TodoItems;
