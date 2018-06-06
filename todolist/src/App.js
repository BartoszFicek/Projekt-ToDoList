import React, { Component } from "react";
import logo from "./logo.svg";
import TodoList from "./TodoList";
import AppHeader from "./AppHeader";

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <AppHeader />
        <TodoList />
      </div>
    );
  }
}

export default App;
