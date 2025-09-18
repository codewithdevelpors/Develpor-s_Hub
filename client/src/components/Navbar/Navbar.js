import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useTheme } from '../../contexts/ThemeContext';
import './Navbar.css';

const Navbar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      onSearch(searchQuery.trim());
      // Navigate to home page with search results
      if (location.pathname !== '/') {
        navigate('/');
      }
    }
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActiveLink = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo/Brand */}
        <Link to="/" className="navbar-brand" onClick={closeMenu}>
          <img src="/favicon.ico" alt="Develpor's Hub" className="favicon" />
          <span className="brand-text">Develpor's Hub</span>
        </Link>

        {/* Mobile Menu Toggle */}
        <button 
          className={`navbar-toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Navigation Links */}
        <div className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link 
                to="/" 
                className={`nav-link ${isActiveLink('/')}`}
                onClick={closeMenu}
              >
                <i className="icon-home"></i>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/about"
                className={`nav-link ${isActiveLink('/about')}`}
                onClick={closeMenu}
              >
                <i className="icon-info"></i>
                About Us
              </Link>
            </li>
            <li className="nav-item dropdown">
              <button className="nav-link dropdown-toggle" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                <i className="icon-grid"></i>
                Categories
              </button>
              <ul className={`dropdown-menu ${isDropdownOpen ? 'open' : ''}`}>
                <li>
                  <Link to="/?category=python" onClick={() => { closeMenu(); setIsDropdownOpen(false); }}>
                    Python
                  </Link>
                </li>
                <li>
                  <Link to="/?category=html&css" onClick={() => { closeMenu(); setIsDropdownOpen(false); }}>
                    HTML & CSS
                  </Link>
                </li>
              </ul>
            </li>
          </ul>

          {/* Search Bar */}
          <form className="navbar-search" onSubmit={handleSearchSubmit}>
            <div className="search-input-group">
              <input
                type="text"
                className="search-input"
                placeholder="Search templates..."
                value={searchQuery}
                onChange={handleSearchChange}
              />
              <button type="submit" className="search-button" aria-label="Search">
                <i className="icon-search"></i>
              </button>
            </div>
          </form>

          {/* Dark Mode Toggle */}
          <button 
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
            title={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
          >
            <i className={`icon-${isDarkMode ? 'sun' : 'moon'}`}></i>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;