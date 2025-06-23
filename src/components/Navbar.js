import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/logo.png'; // adjust if your logo file is named differently

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container container">
        <NavLink to="/" className="navbar-logo">
          {/* If you have a text logo instead, you can replace <img> with a <span> */}
          <img src={logo} alt="Wide Range Fresh Produce Ltd" className="logo-img" />
        </NavLink>
        <ul className="navbar-menu">
          {['Home','About','Products','Gallery','Contact'].map((item) => (
            <li key={item} className="nav-item">
              <NavLink
                to={ item === 'Home' ? '/' : `/${item.toLowerCase()}` }
                className={({ isActive }) =>
                  isActive ? 'nav-link active' : 'nav-link'
                }
              >
                {item}
              </NavLink>
            </li>
          ))}
        </ul>
        {/* For mobile: you can add a hamburger toggle here later */}
      </div>
    </nav>
  );
}
