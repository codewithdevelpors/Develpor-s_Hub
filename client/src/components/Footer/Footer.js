import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="developer-info">
          <h3>Developer</h3>
          <p><strong>Develpor</strong></p>
          <p>Full Stack Developer specializing in React, Node.js, and modern web technologies.</p>
        </div>
        <div className="social-media">
          <h3>Follow Us</h3>
          <div className="social-links">
            <a href="https://github.com/develpor" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://linkedin.com/in/develpor" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://twitter.com/develpor" target="_blank" rel="noopener noreferrer">Twitter</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2023 Develpor's Hub. All rights reserved.</p>
          <div className="footer-links">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
            <a href="#contact">Contact Us</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;