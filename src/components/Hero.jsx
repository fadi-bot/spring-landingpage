// File: src/components/Hero.jsx
import React from 'react';
import './Hero.css'; // Is file ko hum agle step mein banayenge

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>High-Quality PPE & General Supplies Delivered</h1>
        <p>Your trusted source for safety equipment and essential items. Fast, reliable, and professional.</p>
        <button className="btn-primary">Browse Products</button>
      </div>
    </section>
  );
}

export default Hero;