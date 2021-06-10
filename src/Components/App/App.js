import './App.css';
import React, { Component } from 'react';
import { fetchAllTech } from '../../Utils/api-calls';
import TechArea from '../TechArea/TechArea.js'

class App extends Component {

  constructor() {
  super()
    this.state = {
      techs: [],
      error: '',
    }
}

  componentDidMount = () => {
    fetchAllTech()
    .then(techData => {
      this.setState({ techs: techData })
    })
    .catch(error => this.setState({ error: 'Tech not found!'}))
  }

  render () {
    return (
    <main className="App">
      <TechArea techs={this.state.techs}/>
    </main>
  )
  }
}


export default App;
