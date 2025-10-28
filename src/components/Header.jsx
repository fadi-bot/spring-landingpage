import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from '../supabaseClient';
import toast from 'react-hot-toast';
import './Header.css'; // This is the file we will update next
import logoImage from '../assets/logo.jpg';

function Header({ session }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    toast.success('Successfully logged out!');
    setIsMenuOpen(false);
    navigate('/'); // Redirect to homepage after logout
  };

  return (
    <header className="main-header">
      <nav className="navbar">
        <Link to="/" className="logo" onClick={() => setIsMenuOpen(false)}>
          <img src={logoImage} alt="Company Logo" />
        </Link>

        {/* Updated this button to include the 'is-active' class for animation */}
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
            <Link to="/#contact" onClick={() => setIsMenuOpen(false)}>Contact Us</Link>
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