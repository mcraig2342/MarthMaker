import React from 'react';
import './Header.css';
import logo from '../../Utils/logo.png'
import { Link } from 'react-router-dom';

const Header = () => {

  return(
    <nav>
      <img className='logo' src={logo} alt='Marth maker logo'/>
      <Link to="/learning_list">
        <p>My Learning List</p>
      </Link>
      <Link to="/tech_list">
        <p>Tech</p>
      </Link>
    </nav>

  )
}

export default Header;
