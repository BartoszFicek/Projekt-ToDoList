import React, { Component } from "react";

const TodoItem = ({ priorytet, text, onDelete, dkey }) => {
    return (
      <li
        onClick={() => onDelete(dkey)}
        className="list-group-item kolor"
        key={dkey}
      >
        <div className="row justify-content-center">
          <div className="col-2 obok"> {priorytet} </div>
          <div className="col-10 obok1"> {text} </div>
        </div>
      </li>
    );
  };

  export default TodoItem