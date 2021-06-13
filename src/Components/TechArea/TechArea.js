import { React } from 'react';
import TechCard from '../TechCard/TechCard.js';
import './TechArea.css';
let inLearningList;


const TechArea = ({ learningList, removeFromList, addToList, techs, playMovie }) => {

  const displayTech = () => {
    const learningId = learningList.map(tech => tech.id)
    return techs.map(tech => {
        if(learningId.includes(tech.id)) {
           inLearningList = true;
        } else {
           inLearningList = false;
        }
        return (
          < TechCard
      techName={tech.tech}
      gif={`https://thumbs.gfycat.com/${tech.gifs[0].url}-mobile.mp4`}
      id={tech.id}
      key={tech.id}
      playMovie={playMovie}
      addToList={addToList}
      removeFromList={removeFromList}
      inLearningList={inLearningList}
      />
        )
    })
  }
  return (
    <div className='tech-area'>
    { displayTech() }
    </div>
  )
}

export default TechArea;
