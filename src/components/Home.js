import React from "react";
import "./Home.css";
import Header from "./Header";

const Home = () => {
  return (
    <div className="home-section">
      <Header />
      <div className="home-content">
        <h1>Hi, I'm ACHAL</h1>
        <p>
          Aspiring <strong>Junior Developer</strong> passionate about building scalable and user-friendly software solutions, 
          with a strong foundation in web development and growing expertise in <strong>full-stack</strong> and <strong>AI</strong> technologies.
        </p>
        <a href="https://github.com/Achal-Bharadwaj?tab=repositories" target="_blank" rel="noopener noreferrer">
          <button><strong>Check Out My Work</strong></button>
        </a>
      </div>
    </div>
  );
};

export default Home;
