import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    }
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}))
  }

  render() {
    const filteredMonsters = this.state.monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(this.state.searchField);
    })
    return (
      <div className="App">
        <input className="search-box" type='search' placeholder="search monsters" onChange={(event) => {
          const searchField = event.target.value.toLowerCase()
          this.setState({searchField})
        }}/>
       {filteredMonsters.map((monster, i) => {
        return <h1 key={i}>{monster.name}</h1>
       })}
      </div>
    );
  }
}

export default App;
