import React from 'react';
import './Header.css';
import logo from '../../Utils/logo.png'
import { NavLink } from 'react-router-dom';

const Header = () => {

  return(
    <nav className='header'>
      <img className='logo' src={logo} alt='Marth maker logo'/>
      <div className='link-container'>
        <NavLink className='nav-link' to="/tech_list">
          <p data-cy='tech-link' >TECH</p>
        </NavLink>
        <NavLink className='nav-link' to="/learning_list">
          <p data-cy='learning-link'>LEARNING LIST</p>
        </NavLink>
      </div>
    </nav>

  )
}

export default Header;
