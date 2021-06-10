import './App.css';
import React, { Component } from 'react';
import { fetchAllTech } from '../../Utils/api-calls';
import TechArea from '../TechArea/TechArea.js'

class App extends Component {

  constructor() {
  super()
    this.state = {
      tech: [],
      error: '',
    }
}

  componentDidMount = () => {
    fetchAllTech()
    .then(techData => {
      this.setState({ tech: techData })
    })
    .catch(error => this.setState({ error: 'Tech not found!'}))
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
