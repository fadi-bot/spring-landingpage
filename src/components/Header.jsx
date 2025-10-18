// File: src/components/Header.jsx

import React from 'react';
import './Header.css'; // Is file ko hum agle step mein banayenge
import logoImage from '../assets/logo.jpg'; // Path to your logo

function Header() {
  return (
    <header className="main-header">
        <nav className="navbar">
            <div className="nav-left">
                <a href="#" className="logo"><img src={logoImage} alt="Logo" /></a>
            </div>
            <div className="nav-center">
                <a href="#about">About Us</a>
                <a href="#contact">Contact Us</a>
            </div>
            <div className="nav-right">
                <button className="btn btn-login">Login</button>
                <button className="btn btn-signup">Sign Up</button>
            </div>
        </nav>
    </header>
  );
}

export default Header;