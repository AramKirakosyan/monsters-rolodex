import React, {Component} from 'react';
import {CardList} from './compnents/card-list/card-list.component';
import {SearchBox} from './compnents/search-box/search-box.component';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      pageTitle: 'Monsters rolodex',
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => {return response.json()})
    .then((monster) => {return this.setState({monsters: monster})})
  }

  handleChange = (e) => {
    return this.setState({searchField: e.target.value})
  }

  render(){
    const {monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter((monsters) => {
      return monsters.name.toLowerCase().trim().includes(searchField.toLocaleLowerCase().trim())
    })
    return (
      <div className="App">
        <h1 className="title">{this.state.pageTitle}</h1>
        <SearchBox 
          placeholder="Search monster"
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters}/>
      </div>
    );
  }
}

export default App;
