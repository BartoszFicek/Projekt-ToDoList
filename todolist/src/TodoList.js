import React, { Component } from "react";
import TodoItems from "./TodoItems";
import "./TodoList.css";

class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      input_value: "",
      prior_value: 1
    };
  }

  delete(key) {
    this.props.delete(key);
  }

  addItem = e => {
    if (this.state.input_value !== "") {
      if (this.state.prior_value !== undefined) {
        let newItem = {
          text: this.state.input_value,
          priorytet: this.state.prior_value,
          key: Date.now()
        };

        this.setState(prevState => {
          return {
            items: prevState.items.concat(newItem),
            input_value: "",
            prior_value: 1
          };
        });
      } else {
        alert("Wybierz priorytet dla zadania !");
      }
    } else {
      alert("Uzupełnij treść zadania !");
    }

    e.preventDefault();
  };

  deleteItem = key => {
    this.setState(prevState => {
      return {
        items: prevState.items.filter(item => item.key !== key)
      };
    });
  };

  handleNameChange(e) {
    let new_name = e.target.value;
    this.setState(() => {
      return { input_value: new_name };
    });
  }
  handlePriorityChange(e) {
    let new_prior = e.target.value;
    this.setState(() => {
      return { prior_value: new_prior };
    });
  }

  render() {
    return (
      <div className="col-12 row justify-content-center">
        <div className="col-12 row justify-content-center TodoList-lista">
          <div className="col-12 row justify-content-center ">
            <form
              className="col-12 row justify-content-center"
              onSubmit={this.addItem}
            >
              <select
                class="form-control col-3 TodoList-priorytet"
                id="exampleFormControlSelect1"
                value={this.state.prior_value}
                onChange={this.handlePriorityChange.bind(this)}
              >
                <option> 1 </option>
                <option> 2 </option>
                <option> 3 </option>
                <option> 4 </option>
                <option> 5 </option>
                <option> 6 </option>
                <option> 7 </option>
                <option> 8 </option>
                <option> 9 </option>
                <option> 10 </option>
              </select>
              <input
                className="col-8 form-control TodoList-miejsce"
                value={this.state.input_value}
                onChange={this.handleNameChange.bind(this)}
                placeholder="ENTER TASK"
                autocomplete="off"
              />
              <button
                className="btn btn-primary col-2 TodoList-przycisk"
                type="submit"
              >
                {" "}
                ADD{" "}
              </button>
            </form>
          </div>
          <TodoItems entries={this.state.items} delete={this.deleteItem} />
        </div>
      </div>
    );
  }
}

export default TodoList;
