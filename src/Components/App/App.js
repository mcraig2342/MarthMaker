import './App.css';
import React, { Component } from 'react';
import { fetchAllTech } from '../../Utils/api-calls';
import TechArea from '../TechArea/TechArea.js'

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
    <main className="App">
      <TechArea />
    </main>
  )
  }
}


export default App;
