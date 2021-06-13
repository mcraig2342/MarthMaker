import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {

  return(
    <nav>
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
