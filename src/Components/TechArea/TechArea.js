import { React } from 'react';
import PropTypes from 'prop-types';
import './TechArea.css';


const TechArea = ({ techs, renderItem}) => {

  return (
    <div className='tech-area'>
     <div>{techs.map(tech => renderItem(tech))}</div>
    </div>
  )
}

TechArea.propTypes = {
  techs: PropTypes.array.isRequired,
  renderItem: PropTypes.func.isRequired
};

export default TechArea;
