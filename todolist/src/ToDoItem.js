import React, { Component } from "react";
import "./TodoItem.css";

const TodoItem = ({ priorytet, text, onDelete, id }) => {
  return (
    <li className="list-group-item TodoItem-menu-zadania" id="id">
      <div className="row justify-content-center">
        <input type="checkbox" className="col-1  TodoItem-przycisk-zrobione" />
        <div className="col-10">
          <div className="col-2 TodoItem-obok" id="isi">
            <span> {priorytet} </span>
          </div>
          <div className="col-10 TodoItem-obok1">
            {" "}
            <span>{text}</span>{" "}
          </div>
        </div>
        <button
          className=" btn btn-primary col-1 TodoItem-przycisk-usun"
          onClick={() => onDelete(id)}
        >
          ✘
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
