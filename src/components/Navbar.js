import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <a href="#home">Home</a>
      <a href="#about">About Me</a>
      <a href="#skills">Skills</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
      <a href="/ACHAL_ENG21CS0009.pdf" target="_blank" rel="noopener noreferrer">Download Resume</a>
    </nav>
  );
}

export default Navbar;
