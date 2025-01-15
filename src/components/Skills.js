import React from 'react';
import './Skills.css';

function Skills() {
  const skills = [
    {
      category: 'Languages',
      items: ['HTML', 'CSS', <strong>JavaScript (Frontend & Backend)</strong>, 'Python'],
    },
    {
      category: 'Frameworks & Libraries',
      items: [
        <strong>ReactJS</strong>,
        <strong>NodeJS</strong>,
        'ExpressJS',
        'jQuery',
        'Tailwind CSS',
        <strong>Bootstrap (UI/UX)</strong>,
        'TensorFlow',
        'NumPy',
        'OpenCV',
        'Tkinter',
      ],
    },
    {
      category: 'Databases & APIs',
      items: [
        'SQL (PostgreSQL, MySQL)',
        'NoSQL (MongoDB)',
        'RESTful APIs',
        'OAuth',
      ],
    },
    {
      category: 'Tools & Software',
      items: ['Git', 'GitHub', 'Figma (UI/UX)', 'VS Code', 'Atom'],
    },
    {
      category: 'Soft Skills',
      items: [
        'Growth mindset',
        'Emotional intelligence',
        'Focus mastery',
        'Communication skills',
        'Cultural awareness',
      ],
    },
  ];

  return (
    <section id="skills" className="skills">
      <h2>Technical & Soft Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skills-column">
            <h3>{skill.category}</h3>
            <ul>
              {skill.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="certifications">
        <a href="https://drive.google.com/drive/folders/1_MHcrhfmHKEyFSv856Yv_CYJr3cSaUlf" className="certifications-link">
          Click here to view the certifications
        </a>
      </div>
    </section>
  );
}

export default Skills;
