import React from "react";
import ReactDOM from "react-dom";
import TodoList from "./TodoList";
import AppHeader from "./AppHeader";
import "./style.css";
  
var destination = document.querySelector("#root");
  
ReactDOM.render(
    <div className="container-fluid">
		<AppHeader/>
        <TodoList/>
    </div>,
    destination 
);
