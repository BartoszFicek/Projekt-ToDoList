import React, { Component } from "react";
import TodoItems from "./TodoItems";
import "./TodoList.css";

const VISIBLE = true;
const INVISIBLE = false;

function filterItems(items, filter) {
  return items.filter(item => {
    if (filter == "ACTIVE" && item.done == false) return true;
    else if (filter == "NONE") return true;
    else if (filter == "COMPLETED" && item.done == true) return true;
    else return false;
  });
}

class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      filter: "NONE",
      input_value: "",
      prior_value: 1,
      done_value: INVISIBLE
    };
  }

  addItem = e => {
    if (this.state.input_value !== "") {
      if (this.state.prior_value !== undefined) {
        let newItem = {
          text: this.state.input_value,
          priorytet: this.state.prior_value,
          key: Date.now(),
          done: this.state.done_value
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

  delete(key) {
    this.props.delete(key);
  }

  donen(key) {
    this.props.donen(key);
  }

  doneItem = key => {
    this.setState(state => {
      var newItems = state.items.slice();
      let index = newItems.findIndex(item => item.key == key);
      newItems[index].done =
        newItems[index].done == VISIBLE ? INVISIBLE : VISIBLE;
      return { items: newItems };
    });
    // console.log(this.state.items);
  };

  deleteItem = key => {
    this.setState(prevState => {
      return {
        items: prevState.items.filter(item => item.key !== key)
      };
    });
    // console.log(this.state.items, this.state.kopia);
  };

  handleNameChange(e) {
    let new_name = e.target.value;
    this.setState(() => {
      return {
        input_value: new_name
      };
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
                className="form-control col-3 TodoList-priorytet"
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
                autoComplete="off"
              />
              <button
                className="btn btn-primary col-2 TodoList-przycisk"
                type="submit"
              >
                {" "}
                ADD{" "}
              </button>
            </form>

            <div className="col-12 row justify-content-center TodoList-wybor">
              <div className="form-check form-check-inline">
                <input
                  onClick={() =>
                    this.setState(() => {
                      // console.log("all", copy, all, completed, active);
                      return {
                        filter: "NONE"
                      };
                    })
                  }
                  className="form-check-input TodoList-wybrane"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio1"
                  value="option1"
                />
                <label className="form-check-label" htmlFor="inlineRadio1">
                  Wyświetl wszystkie zadania
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  onClick={() =>
                    this.setState(() => {
                      // console.log("active", copy, all, completed, active);
                      return {
                        filter: "ACTIVE"
                      };
                    })
                  }
                  className="form-check-input TodoList-wybrane"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio2"
                  value="option2"
                />
                <label className="form-check-label" htmlFor="inlineRadio2">
                  Wyświetl zadania aktywne
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  onClick={() =>
                    this.setState(() => {
                      // console.log("completed", copy, all, completed, active);
                      return {
                        filter: "COMPLETED"
                      };
                    })
                  }
                  className="form-check-input TodoList-wybrane"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio3"
                  value="option3"
                />
                <label className="form-check-label" htmlFor="inlineRadio3">
                  Wyświetl zadania wykonane
                </label>
              </div>
            </div>
          </div>
          <TodoItems
            entries={filterItems(this.state.items, this.state.filter)}
            delete={this.deleteItem}
            donen={this.doneItem.bind(this)}
          />
        </div>
      </div>
    );
  }
}

export default TodoList;
