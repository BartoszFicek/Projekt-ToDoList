import React, { Component } from 'react';
import './App.css';
import List from './List';
import './style.css'
import AppHeader from './AppHeader';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      p: '',
	  term: '',
      items: []
    };
  }

  onChange = (event) => {
	 this.setState({ term: event.target.value});
  }

	onChanged = (event) => {
	 this.setState({ p: event.target.value});
  }
  
  
  onSubmit = (event) => {
    event.preventDefault();
    this.setState({
		p:'',
	 term: '',
      items: [...this.state.items, [this.state.p, this.state.term]]
    });
  }
  

  render() {
    return (
      <div className="container-fluid">
		<AppHeader/>
        <form className="App row justify-content-center" onSubmit={this.onSubmit}>
          
		
		  <input class="col-6" placeholder="1-10" autocomplete="off" id="priorytet" value={this.state.p} onChange={this.onChanged} />
		  
		  <input class="col-6" placeholder="Treść nowego zadania" autocomplete="off" id="miejsce" value={this.state.term} onChange={this.onChange} />
         

		 <button onClick={this.onSubmit} type="button" className="btn btn-primary col-2"  data-toggle="collapse"  id="przycisk" >DODAJ DO LISTY</button>
        </form>
		
		
		
        <List items={this.state.items} />
      </div>
    );
  }
}