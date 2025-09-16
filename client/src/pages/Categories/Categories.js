import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Categories.css';

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [];

  const handleCategoryFilter = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  const filteredCategories = selectedCategory === 'all' 
    ? categories 
    : categories.filter(cat => cat.id === selectedCategory);

  const totalTemplates = categories.reduce((sum, cat) => sum + cat.count, 0);

  return (
    <div className="categories-container">
      <div className="categories-hero">
        <h1 className="categories-title">Template Categories</h1>
        <p className="categories-subtitle">
          Discover our extensive collection of professionally designed templates 
          organized by industry and purpose
        </p>
        <div className="categories-stats">
          <div className="stat-item">
            <span className="stat-number">{categories.length}</span>
            <span className="stat-label">Categories</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">{totalTemplates}</span>
            <span className="stat-label">Templates</span>
          </div>
        </div>
      </div>

      <div className="categories-content">
        <div className="categories-filters">
          <button 
            className={`filter-btn ${selectedCategory === 'all' ? 'active' : ''}`}
            onClick={() => handleCategoryFilter('all')}
          >
            All Categories
          </button>
          {categories.map(category => (
            <button
              key={category.id}
              className={`filter-btn ${selectedCategory === category.id ? 'active' : ''}`}
              onClick={() => handleCategoryFilter(category.id)}
              style={{ '--category-color': category.color }}
            >
              {category.icon} {category.name}
            </button>
          ))}
        </div>

        <div className="categories-grid">
          {filteredCategories.map(category => (
            <div key={category.id} className="category-card">
              <div className="category-header">
                <div 
                  className="category-icon"
                  style={{ backgroundColor: `${category.color}20`, color: category.color }}
                >
                  {category.icon}
                </div>
                <div className="category-count">{category.count} templates</div>
              </div>
              
              <div className="category-content">
                <h3 className="category-name">{category.name}</h3>
                <p className="category-description">{category.description}</p>
              </div>

              <div className="category-actions">
                <Link 
                  to={`/?category=${category.id}`} 
                  className="category-btn primary"
                  style={{ backgroundColor: category.color }}
                >
                  Browse Templates
                </Link>
                <button className="category-btn secondary">
                  Preview
                </button>
              </div>

              <div className="category-overlay" style={{ backgroundColor: category.color }}></div>
            </div>
          ))}
        </div>

        <div className="categories-cta">
          <h2>Can't Find What You're Looking For?</h2>
          <p>
            We're constantly adding new templates and categories. 
            Let us know what you need and we'll prioritize it!
          </p>
          <div className="cta-actions">
            <button className="cta-btn primary">Request Template</button>
            <Link to="/" className="cta-btn secondary">Browse All Templates</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;