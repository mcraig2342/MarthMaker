import { React } from 'react';
import TechCard from '../TechCard/TechCard.js'
import './TechArea.css'


const TechArea = ({
  techs
}) => {
  const techCards = techs.map(tech => {
    return ( <
      TechCard / >
    )
  })

  return (
    <div className='tech-area'>
    { techCards }
    </div>
  )
}

export default TechArea;
