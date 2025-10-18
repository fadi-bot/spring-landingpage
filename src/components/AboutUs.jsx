// File: src/components/AboutUs.jsx
import React from 'react';
import './AboutUs.css';
import aboutImage from '../assets/about-image.jpg'; // Step 1: Image ko import karein

function AboutUs() {
  return (
    <section id="about" className="about-us-section">
      <div className="about-us-container">
        <div className="about-text">
          <h2>About Our Company</h2>
          <h3>Your Premier Partner in Safety & General Supplies</h3>
          <p>
            We are dedicated to providing top-tier Personal Protective Equipment (PPE) and a wide range of general supply items. Our mission is to ensure the safety and well-being of your workforce and projects with reliable products and exceptional service.
          </p>
        </div>
        <div className="about-image">
          <img src={aboutImage} alt="Team working with safety equipment" /> {/* Step 2: Image ko use karein */}
        </div>
      </div>
    </section>
  );
}

export default AboutUs;