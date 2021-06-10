import { React } from 'react';
import TechCard from '../TechCard/TechCard.js'
import './TechArea.css'


const TechArea = ({ techs }) => {
  const techCards = techs.map(tech => {
    if(tech.gifs.length) {
    return (
      < TechCard
      techName={tech.tech}
      gif={`https://thumbs.gfycat.com/${tech.gifs[0].url}-mobile.mp4`}
      id={tech.id}
      key={tech.id}
      />
    )
  }
  })
  return (
    <div className='tech-area'>
    { techCards }
    </div>
  )
}

export default TechArea;
