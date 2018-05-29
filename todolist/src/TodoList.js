import React, { Component } from "react";
import TodoItems from "./TodoItems";
import "./TodoList.css"

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


    addItem(e) {
        if (this._inputElement.value !== "") {
            let newItem = {
                text: this._inputElement.value,
                priorytet: this._inputPriorytet.value,
                key: Date.now()
            };

            this.setState((prevState) => {
                return {
                    items: prevState.items.concat(newItem)
                };
            });

            this._inputElement.value = "";
            this._inputPriorytet.value = 1;
        } else { alert("Zapomniałeś wpisać treść zadania !") }

        console.log(this.state.items);

        e.preventDefault();

    }

    deleteItem(key) {
        this.setState(prevState => {
            return {
                items: prevState.items.filter(item => item.key !== key)
            }
        });}





    render() {
        return ( <div className = "col-12 row justify-content-center">
                    <div className = "col-12 row justify-content-center lista">
                        <div className = "col-12 row justify-content-center ">
                            <form className = "col-12 row justify-content-center" onSubmit = { this.addItem } >
                                <select class = "form-control col-3 priorytet" id = "exampleFormControlSelect1" 
                                    ref = {(a) => this._inputPriorytet = a} >
                                    <option > 1 </option> 
                                    <option > 2 </option> 
                                    <option > 3 </option> 
                                    <option > 4 </option> 
                                    <option > 5 </option> 
                                    <option > 6 </option> 
                                    <option > 7 </option> 
                                    <option > 8 </option> 
                                    <option > 9 </option> 
                                    <option > 10 </option>   
                                </select> 
                                <input className = "col-8 form-control miejsce" ref = {(a) => this._inputElement = a}
                                    placeholder = "ENTER TASK" autocomplete = "off"/>
                                <button className = "btn btn-primary col-2 przycisk"type = "submit" > ADD </button> 
                            </form > 
                        </div> 
                    <TodoItems entries = { this.state.items } delete = { this.deleteItem }/> 
                    </div > 
                </div>
        );
    }
}

export default TodoList;