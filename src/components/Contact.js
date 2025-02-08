import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2>Get in Touch</h2>

      <p class="conect-msg">If you have any questions or want to connect, feel free to reach out!</p>
      <div className="contact-container">
        
        {/* Contact Information */}
        <div className="contact-info">
          <h3>Contact Information</h3>
          <p>Email: <a href= "mailto:achalbharadwaj018@gmail.com"> achalbharadwaj018@gmail.com</a></p>
          
          <p>
            LinkedIn: <a href="https://www.linkedin.com/in/achal-bharadwaj/" target="_blank" rel="noopener noreferrer"> linkedin.com/in/achal-bharadwaj</a>
          </p>
          <p>
            GitHub: <a href="https://github.com/Achal-Bharadwaj" target="_blank" rel="noopener noreferrer"> github.com/Achal-Bharadwaj</a>
          </p>

          <p className="location">Location: Bengaluru, Karnataka, India</p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
