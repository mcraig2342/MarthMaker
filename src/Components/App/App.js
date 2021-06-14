import './App.css';
import React, { Component } from 'react';
import { fetchAllTech } from '../../Utils/api-calls';
import { filterTechData } from '../../Utils/cleaning-function';
import TechArea from '../TechArea/TechArea.js';
import Header from '../Header/Header.js';
import HomePage from '../HomePage/HomePage.js';
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
      const allTechData = filterTechData(techData);
      this.setState({ techs: allTechData })
    })
    .catch(error => this.setState({ error: 'Tech not found!'}))
  }

  render () {
    return (
    <main className="App">
    <Route exact path ='/'
          render={() => (
            <div>
              <Header/>
              <HomePage/>
           </div>
          )}
        />
    <Route exact path ='/tech_list'
          render={() => (
            <div>
              <Header/>
              <h1 className='list-label'>Tech List</h1>
              <TechArea learningList={this.state.learningList}
                        removeFromList={this.removeFromLearningList}
                        addToList={this.addToLearningList}
                        techs={this.state.techs}
                        playMovie={this.playMovie}/>
            </div>
          )}
        />
    <Route exact path ='/learning_list'
          render={() => (
           !this.state.learningList.length ?
              <div>
                <Header/>
                <h3 className='list-warning'>No tech in learning list,
                                             add some from the tech page!</h3>
              </div>
             :
            <div>
              <Header/>
              <h1 className='list-label'>Learning List</h1>
              <TechArea learningList={this.state.learningList}
                        removeFromList={this.removeFromLearningList}
                        techs={this.state.learningList}
                        playMovie={this.playMovie}/>
            </div>
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

removeFromLearningList = (event) => {
   const filteredList = this.state.learningList.filter(tech => tech.id !== event.target.id);
   this.setState({ learningList: filteredList });
 }

}


export default App;
