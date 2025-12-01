import React from 'react';
import './Team.css';

function Team() {
  return (
    // Uses bg-dark for the navy background
    <section id="team" className="team-section bg-dark" data-aos="fade-up">
      <div className="team-container">
        {/* The section-title class will add the cyan underline */}
        <h2 className="section-title text-center">Why Choose Us</h2>
        <h3 className="accent-text">Expertise That Drives Results</h3>
        <p>
          At Spring Int Traders Pvt. Ltd., our team is the driving force behind everything we do. With decades of combined experience across procurement, supply chain, logistics, and industrial operations, we bring unmatched expertise to every project.
        </p>
        <p>
          We are a group of diverse, dedicated professionals, united by a shared commitment to excellence, innovation, and long-term client success. Our leadership is built on transparency, our operations run on precision, and our culture thrives on trust.
        </p>
        <div className="team-tags">
          <span className="team-tag">Efficient</span>
          <span className="team-tag">Reliable</span>
          <span className="team-tag">Results-Oriented</span>
        </div>
      </div>
    </section>
  );
}

export default Team;