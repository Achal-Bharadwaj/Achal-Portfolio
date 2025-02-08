import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>

      <div className={`navbar-links ${menuOpen ? 'active' : ''}`}>
        <a href="#home">Home</a>
        <a href="#about">About Me</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
        <a 
          href="https://drive.google.com/drive/folders/1_MHcrhfmHKEyFSv856Yv_CYJr3cSaUlf" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          Download Resume
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
