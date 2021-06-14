import { React } from 'react';
import PropTypes from 'prop-types';
import './TechCard.css';


const TechCard =({ inputs, description, inLearningList, removeFromList, addToList, techName, gif, id, playMovie }) => {

if(!inLearningList) {
  return (
    <div data-cy='tech-card' className='card' id={id}>
      <h1 data-cy='tech-name' className='tech-name'>{techName}</h1>
      <video data-cy='gif' onMouseOver={playMovie} className="video-frame" id="video-skinnycorrupthake" alt="GIF"  playsInline="">
        <source className='tech-gif' src={gif} type="video/mp4"/>
      </video>
      <div data-cy='info' className='info-container'>
        <p data-cy='description' className='description'>{description}</p>
        <p className='inputs'>{inputs}</p>
      </div>
      <button data-cy='list-button' className='list-button' id={id} onClick={addToList}>Add to learning list</button>
    </div>
  )
} else {
  return (
    <div data-cy='tech-card' className='card' id={id}>
      <h1 data-cy='tech-name' className='tech-name'>{techName}</h1>
      <video data-cy='gif' onMouseOver={playMovie} className="video-frame" id="video-skinnycorrupthake" alt="GIF"  playsInline="">
        <source className='tech-gif' src={gif} type="video/mp4"/>
      </video>
      <div data-cy='info' className='info-container'>
        <p data-cy='description' className='description'>{description}</p>
        <p className='inputs'>{inputs}</p>
      </div>
      <button data-cy='list-button' className='list-button'id={id} onClick={removeFromList}>Remove from learning list</button>
    </div>
  )

  }
}

TechCard.propTypes = {
  inLearningList: PropTypes.bool.isRequired,
  removeFromList: PropTypes.func.isRequired,
  addToList: PropTypes.func.isRequired,
  playMovie: PropTypes.func.isRequired,
  techName: PropTypes.string.isRequired,
  gif: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  inputs: PropTypes.string,
};

export default TechCard;
