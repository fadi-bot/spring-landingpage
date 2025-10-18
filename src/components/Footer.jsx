import React from 'react';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="main-footer">
      <p>Copyright © {currentYear} - Spring Int Traders. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;