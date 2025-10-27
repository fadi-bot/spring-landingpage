import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from '../supabaseClient';
import './Header.css';
import logoImage from '../assets/logo.jpg';

function Header({ session }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setIsMenuOpen(false);
    navigate('/'); // Redirect to homepage after logout
  };

  return (
    <header className="main-header">
      <nav className="navbar">
        <Link to="/" className="logo">
          <img src={logoImage} alt="Company Logo" />
        </Link>

        <button className="hamburger-menu" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </button>

        <div className={isMenuOpen ? "nav-links mobile-menu-open" : "nav-links"}>
          <div className="nav-center">
            <Link to="/#about" onClick={() => setIsMenuOpen(false)}>About Us</Link>
            <Link to="/products" onClick={() => setIsMenuOpen(false)}>Products</Link>
            <Link to="/#contact" onClick={() => setIsMenuOpen(false)}>Contact Us</Link>
          </div>
          <div className="nav-right">
            {session ? (
              <button onClick={handleLogout} className="btn btn-signup">Logout</button>
            ) : (
              <>
                <Link to="/login" className="btn btn-login" onClick={() => setIsMenuOpen(false)}>Login</Link>
                <Link to="/signup" className="btn btn-signup" onClick={() => setIsMenuOpen(false)}>Sign Up</Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;