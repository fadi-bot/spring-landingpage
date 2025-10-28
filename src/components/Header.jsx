import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from '../supabaseClient';
import toast from 'react-hot-toast'; // <-- Import toast
import './Header.css';
import logoImage from '../assets/logo.jpg';

function Header({ session }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    toast.success('Successfully logged out!'); // <-- Show success toast
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
            <a href="/#about" onClick={() => setIsMenuOpen(false)}>About Us</a>
            <Link to="/products" onClick={() => setIsMenuOpen(false)}>Products</Link>
            <a href="/#contact" onClick={() => setIsMenuOpen(false)}>Contact Us</a>
          </div>
          <div className="nav-right">
            {session ? (
              <button onClick={handleLogout} className="btn btn-signup">Logout</button>
            ) : (
              <>
                <Link to="/auth" className="btn btn-login" onClick={() => setIsMenuOpen(false)}>Login</Link>
                <Link to="/auth" className="btn btn-signup" onClick={() => setIsMenuOpen(false)}>Sign Up</Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;