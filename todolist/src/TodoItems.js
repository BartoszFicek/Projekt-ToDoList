import React, { Component } from "react";
import "./TodoItems.css"

class TodoItems extends Component {

    constructor(props) {
        super(props);

        this.createTasks = this.createTasks.bind(this);
    }

    delete(key) {
        this.props.delete(key);
    }

    createTasks(item) {
        return <li onClick = {() => this.delete(item.key)} className = "list-group-item kolor"

        key = { item.key } >
            <div className = "row justify-content-center">
            <div className = "col-2 obok"> { item.priorytet } </div> 
            <div className = "col-10 obok1"> { item.text } </div> 
            </div> 
        </li>
    }

    render() {
        let todoEntries = this.props.entries;
        let listItems = todoEntries.map(this.createTasks);

        return ( <ul className = "list-group col-10 lista" > { listItems } </ul>
        );
    }
};

export default TodoItems;