import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <div className="footer-brand">
            <h3>Develpor's Hub</h3>
            <p>Your premier destination for high-quality web templates and development resources.</p>
          </div>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <div className="footer-links">
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/categories">Categories</Link>
            <a href="mailto:support@develporshub.com">Contact Support</a>
          </div>
        </div>

        <div className="footer-section">
          <h4>Resources</h4>
          <div className="footer-links">
            <a href="#documentation">Documentation</a>
            <a href="#tutorials">Tutorials</a>
            <a href="#faq">FAQ</a>
            <a href="#changelog">Changelog</a>
          </div>
        </div>

        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-links">
            <a href="https://github.com/develporshub" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <span className="social-icon">📱</span> GitHub
            </a>
            <a href="https://linkedin.com/company/develporshub" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <span className="social-icon">💼</span> LinkedIn
            </a>
            <a href="https://twitter.com/develporshub" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <span className="social-icon">🐦</span> Twitter
            </a>
            <a href="https://discord.gg/develporshub" target="_blank" rel="noopener noreferrer" aria-label="Discord">
              <span className="social-icon">💬</span> Discord
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p>&copy; {new Date().getFullYear()} Develpor's Hub. All rights reserved.</p>
          <div className="legal-links">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
            <a href="mailto:legal@develporshub.com">Legal</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;