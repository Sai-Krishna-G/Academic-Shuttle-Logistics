// NavBar.js

import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const NavBar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`navbar ${isMenuOpen ? 'open' : ''}`}>
      <div className="logo">Your Logo</div>
      <div className={`menu-icon ${isMenuOpen ? 'open' : ''}`} onClick={handleToggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <ul className={`nav-list ${isMenuOpen ? 'open' : ''}`}>
        <li>
          <NavLink to="/Home" exact activeClassName="active" onClick={handleToggleMenu}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/booking" activeClassName="active" onClick={handleToggleMenu}>
            Booking
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName="active" onClick={handleToggleMenu}>
            About Us
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
