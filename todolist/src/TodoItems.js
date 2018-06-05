import React, { Component } from "react";
import "./TodoItems.css"
import TodoItem from "./ToDoItem"

class TodoItems extends Component {

    constructor(props) {
        super(props);
    }

    delete(key) {
        this.props.delete(key);
    }

    render() {
        let todoEntries = this.props.entries;

        return ( <ul className = "list-group col-10 lista" > 
            { todoEntries.map((item) => <TodoItem {...item} dkey={item.key} onDelete={this.delete.bind(this)} />) }
            
            </ul>
        );
    }
};

export default TodoItems;