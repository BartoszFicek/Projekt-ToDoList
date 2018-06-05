import React, { Component } from "react";
import "./TodoItem.css";

const TodoItem = ({ priorytet, text, onDelete, dkey }) => {
    return (
      <li
        onClick={() => onDelete(dkey)}
        className="list-group-item TodoItem-kolor"
        key={dkey}
      >
        <div className="row justify-content-center">
          <div className="col-2 TodoItem-obok"> {priorytet} </div>
          <div className="col-10 TodoItem-obok1"> {text} </div>
        </div>
      </li>
    );
  };

  export default TodoItem