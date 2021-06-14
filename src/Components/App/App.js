import './App.css';
import React, { Component } from 'react';
import { fetchAllTech } from '../../Utils/api-calls';
import { filterTechData } from '../../Utils/cleaning-function';
import TechArea from '../TechArea/TechArea.js';
import TechCard from '../TechCard/TechCard.js';
import Header from '../Header/Header.js';
import HomePage from '../HomePage/HomePage.js';
import { Route, Switch } from 'react-router-dom';

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
    .catch(error => this.setState({ error: 'Tech not found!'})
    )
  }

  render () {
    return (
    <main className="App">
    <Switch>
    <Route exact path ='/'
          render={() => (
            <div>
              <Header/>
              <HomePage/>
           </div>
          )}
        />
    <Route path ='/tech_list'
          render={() => (
           this.state.error.length ?
           <div>
             <Header/>
             <h3 className='list-warning'>Sorry, we seem to have misplaced our skills,
                                          please check back later</h3>
           </div>
          : <div>
              <Header/>
              <h1 className='list-label'>Tech List</h1>
              <TechArea techs={this.state.techs}
                        renderItem={tech => (
                           <TechCard
                           techName={tech.tech}
                           gif={`https://thumbs.gfycat.com/${tech.gifs[0].url}-mobile.mp4`}
                           description={tech.description}
                           inputs={tech.inputs}
                           id={tech.id}
                           key={tech.id}
                           playMovie={this.playMovie}
                           addToList={this.addToLearningList}
                           removeFromList={this.removeFromLearningList}
                           inLearningList={this.checkLearningList(tech.id)}
                           />
         )}/>
            </div>
          )}
        />
    <Route path ='/learning_list'
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
              <TechArea techs={this.state.learningList}
                        renderItem={tech => (
                             <TechCard
                             techName={tech.tech}
                             gif={`https://thumbs.gfycat.com/${tech.gifs[0].url}-mobile.mp4`}
                             description={tech.description}
                             inputs={tech.inputs}
                             id={tech.id}
                             key={tech.id}
                             playMovie={this.playMovie}
                             addToList={this.addToLearningList}
                             removeFromList={this.removeFromLearningList}
                             inLearningList={this.checkLearningList(tech.id)}
                             />
              )}/>
            </div>
         )}
        />
        <Route path ='*'
              render={() => (
                <div>
                  <Header/>
                  <HomePage/>
               </div>
              )}
            />
    </Switch>
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

 checkLearningList = (techId) => {
    let learningId = this.state.learningList.map(tech => tech.id);
    return learningId.includes(techId)
}


}


export default App;
