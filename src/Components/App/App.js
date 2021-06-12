import './App.css';
import React, { Component } from 'react';
import { fetchAllTech } from '../../Utils/api-calls';
import TechArea from '../TechArea/TechArea.js';
import { Route } from 'react-router-dom';

class App extends Component {

  constructor() {
  super()
    this.state = {
      techs: [],
      error: '',
      learningList: [],
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
    <Route exact path ='/'
          render={() => (
            <TechArea addToList={this.addToLearningList} techs={this.state.techs} playMovie={this.playMovie}/>
          )}
        />
    </main>
  )
  }

   playMovie = (event) => {
    event.target.play();
  }

  addToLearningList = (event) => {
   const learningList = this.state.learningList
   const techToAdd = this.state.techs.find( tech => tech.id === event.target.id)
    console.log(parseInt(event.target.id))
     if (!learningList.includes(techToAdd)) {
      this.setState({learningList: [...learningList, techToAdd]})
  }
}

}


export default App;
