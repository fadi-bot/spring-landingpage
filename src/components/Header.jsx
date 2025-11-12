import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logoImage from '../assets/logo.jpg';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="main-header">
      <nav className="navbar">
        <Link to="/" className="logo" onClick={() => setIsMenuOpen(false)}>
          <img src={logoImage} alt="Company Logo" />
        </Link>

        <button
          className={isMenuOpen ? "hamburger-menu is-active" : "hamburger-menu"}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </button>

        <div className={isMenuOpen ? "nav-links mobile-menu-open" : "nav-links"}>
          <div className="nav-center">
            <Link to="/#about" onClick={() => setIsMenuOpen(false)}>About Us</Link>
            <Link to="/products" onClick={() => setIsMenuOpen(false)}>Products</Link>
            {/* UPDATED: Link points to footer ID */}
            <Link to="/#footer-contact" onClick={() => setIsMenuOpen(false)}>Contact Us</Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;