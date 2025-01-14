import React, { useState } from 'react';
import './Projects.css';

// Correct relative imports for images
import project1 from '../assets/images/project1.jpg';
import project2 from '../assets/images/project2.jpg';
import project3 from '../assets/images/project3.jpg';
import project4 from '../assets/images/project4.jpg';
import project5 from '../assets/images/project5.jpg';

const projects = [
  {
    title: 'Booking a table on Little-Lemon Restaurant',
    description: 'This project is a frontend web application focused on delivering a seamless and user-friendly UI/UX experience.',
    image: project1,
    link: 'https://github.com/Achal-Bharadwaj/Booking_table_on_Little-Lemon_Restaurant',
  },
  {
    title: 'Event Management Dashboard',
    description: 'It is a full-stack web application designed to manage events, attendees, and associated tasks effectively.',
    image: project2,
    link: 'https://github.com/Achal-Bharadwaj/Event-Management-Dashboard',
  },
  {
    title: 'Together Travel Tracker',
    description: 'Developed a full-stack web application for group travel logging and tracking using Express.js and PostgreSQL.',
    image: project3,
    link: 'https://github.com/Achal-Bharadwaj/Together-travel-tracker',
  },
  {
    title: 'Age and Gender Detection with OpenCV',
    description: 'This project uses Deep Neural Network (DNN) module to predict the gender and approximate age of individuals in an image.',
    image: project4,
    link: 'https://github.com/Achal-Bharadwaj/Age-and-Gender-Detection-with-OpenCV-and-Deep-Learning',
  },
  {
    title: 'Multilingual Wikipedia GUI',
    description: 'It allows users to search and read Wikipedia articles in multiple languages through an interactive interface.',
    image: project5,
    link: 'https://github.com/Achal-Bharadwaj/Multilingual-Wikipedia-GUI',
  },
];

function Projects() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === projects.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? projects.length - 1 : prevSlide - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="carousel">
        <div
          className="carousel-container"
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
          }}
        >
          {projects.map((project, index) => (
            <div className="carousel-slide" key={index}>
              <img
                src={project.image}
                alt={project.title}
              />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <button
                onClick={() => window.open(project.link, '_blank')}
              >
                Learn More
              </button>
            </div>
          ))}
        </div>

        <div className="carousel-arrows">
          <button
            className="carousel-arrow left"
            onClick={prevSlide}
          >
            &#8249;
          </button>
          <button
            className="carousel-arrow right"
            onClick={nextSlide}
          >
            &#8250;
          </button>
        </div>

        <div className="carousel-dots">
          {projects.map((_, index) => (
            <div
              key={index}
              className={`carousel-dot ${
                index === currentSlide ? 'active' : ''
              }`}
              onClick={() => goToSlide(index)}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
