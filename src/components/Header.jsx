
import React, { useState } from 'react'; 
import './Header.css';
import logoImage from '../assets/logo.jpg';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="main-header">
      <nav className="navbar">
        <a href="#" className="logo">
          <img src={logoImage} alt="Company Logo" />
        </a>

        <button className="hamburger-menu" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </button>

        <div className={isMenuOpen ? "nav-links mobile-menu-open" : "nav-links"}>
          <div className="nav-center">
            <a href="#about" onClick={() => setIsMenuOpen(false)}>About Us</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact Us</a>
          </div>
          <div className="nav-right">
            <button className="btn btn-login">Login</button>
            <button className="btn btn-signup">Sign Up</button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;