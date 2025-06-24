// src/components/Navbar.js
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/logo.png';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && menuOpen) {
        setMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [menuOpen]);

  const toggleMenu = () => setMenuOpen(prev => !prev);
  const handleLinkClick = () => setMenuOpen(false);

  const navItems = ['Home','About','Products','Gallery','Contact','Media'];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <NavLink to="/" className="navbar-logo" onClick={handleLinkClick}>
          <img src={logo} alt="Wide Range Fresh Produce Ltd" />
        </NavLink>
        <div
          className="hamburger"
          onClick={toggleMenu}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={`navbar-menu${menuOpen ? ' open' : ''}`}>
          {navItems.map(item => (
            <li key={item} className="nav-item">
              <NavLink
                to={ item === 'Home' ? '/' : `/${item.toLowerCase()}` }
                className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
                onClick={handleLinkClick}
              >
                {item}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
