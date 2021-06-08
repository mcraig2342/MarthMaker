import './App.css';
import React, { Component } from 'react';
import { fetchAllTech } from '../../Utils/api-calls';

class App extends Component {

  constructor() {
  super()
    this.state = {
      tech: [],
    }
}

  componentDidMount = () => {
    fetchAllTech()
    .then(techData => {
      console.log(techData)
    })
  }

  render () {
    return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
  }
}


export default App;
