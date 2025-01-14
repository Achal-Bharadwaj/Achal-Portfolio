import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <h1>ACHAL S BHARADWAJ</h1>
      <h2>Student @ Dayananda Sagar University</h2>
      <div className="contact-info">
        <a href="mailto:achalbharadwaj018@gmail.com" target="_blank" rel="noopener noreferrer">
          <i className="fas fa-envelope"></i> Email
        </a>
        <a href="https://www.linkedin.com/in/achal-bharadwaj/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i> LinkedIn
        </a>
        <a href="https://github.com/Achal-Bharadwaj" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i> GitHub
        </a>
      </div>
    </header>
  );
}

export default Header;
