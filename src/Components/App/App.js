import './App.css';
import React, { Component } from 'react';
import { fetchAllTech } from '../../Utils/api-calls';
import TechArea from '../TechArea/TechArea.js';
import { Route, Link } from 'react-router-dom';

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
    <Link to="/learning_list">
      <h1>Learning List</h1>
    </Link>
    <Route exact path ='/'
          render={() => (
            <TechArea learningList={this.state.learningList}
                      removeFromList={this.removeFromLearningList}
                      addToList={this.addToLearningList}
                      techs={this.state.techs}
                      playMovie={this.playMovie}/>
          )}
        />
    <Route exact path ='/learning_list'
          render={() => (
            <TechArea learningList={this.state.learningList}
                      removeFromList={this.removeFromLearningList}
                      techs={this.state.learningList}
                      playMovie={this.playMovie}/>
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
     if (!learningList.includes(techToAdd)) {
      this.setState({learningList: [...learningList, techToAdd]})
  }
}

}


export default App;
