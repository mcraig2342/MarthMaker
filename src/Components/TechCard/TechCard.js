import React from 'react';
import './TechCard.css';

const playMovie = (event) => {
  event.target.play();
  console.log('on');
}

const TechCard =({ techName, gif, id }) => {

  return (
    <div className='card' id={id}>
      <h1>{techName}</h1>
      <video onMouseOver={playMovie} className="video-frame" id="video-skinnycorrupthake" alt="GIF"  playsInline="">
      <source className='tech-gif' src={gif} type="video/mp4"/>
      </video>
    </div>
  )
}

export default TechCard;
