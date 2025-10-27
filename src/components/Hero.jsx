import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Where Experience Meets Innovation</h1>
        <p>Your strategic partner in industrial procurement, turning supply into a competitive advantage.</p>
        <Link to="/products" className="btn-primary">
          Browse Our Offerings
        </Link>
      </div>
    </section>
  );
}

export default Hero;