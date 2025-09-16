import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-hero">
        <h1 className="about-title">About Develpor's Hub</h1>
        <p className="about-subtitle">
          Your premier destination for high-quality web templates and development resources
        </p>
      </div>

      <div className="about-content">
        <section className="about-section">
          <div className="section-content">
            <h2>Our Mission</h2>
            <p>
              At Develpor's Hub, we bridge the gap between creative vision and technical execution. 
              Our mission is to provide developers, designers, and businesses with premium, 
              ready-to-use web templates that save time, reduce costs, and deliver exceptional 
              user experiences. We believe that great design should be accessible to everyone, 
              regardless of budget or technical expertise.
            </p>
          </div>
        </section>

        <section className="about-section">
          <div className="section-content">
            <h2>What We Offer</h2>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">🎨</div>
                <h3>Premium Templates</h3>
                <p>Carefully crafted, responsive templates for various industries and use cases.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">⚡</div>
                <h3>Fast & Optimized</h3>
                <p>All our templates are optimized for performance and loading speed.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">📱</div>
                <h3>Mobile First</h3>
                <p>Every template is designed with mobile-first approach for perfect responsiveness.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🔧</div>
                <h3>Easy Customization</h3>
                <p>Clean, well-documented code that's easy to customize and extend.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🎯</div>
                <h3>Modern Design</h3>
                <p>Contemporary designs following the latest UI/UX trends and best practices.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">💎</div>
                <h3>Premium Quality</h3>
                <p>Each template undergoes rigorous quality checks before being published.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="about-section">
          <div className="section-content">
            <h2>Our Story</h2>
            <p>
              Develpor's Hub was founded in 2023 by a team of experienced web developers and 
              UI/UX designers who recognized a critical gap in the market. While working on 
              various client projects, we consistently encountered the same challenge: the need 
              for high-quality, modern templates that could serve as solid foundations for 
              custom development work.
            </p>
            <p>
              What started as an internal collection of reusable components and templates 
              quickly evolved into a comprehensive platform serving developers worldwide. 
              Today, Develpor's Hub hosts over 500+ premium templates across 15+ categories, 
              serving more than 10,000+ satisfied customers globally.
            </p>
            <p>
              Our team combines decades of experience in web development, digital marketing, 
              e-commerce, and user experience design to create templates that don't just 
              look great—they perform exceptionally well in real-world applications.
            </p>
          </div>
        </section>

        <section className="about-section">
          <div className="section-content">
            <h2>Why Choose Us?</h2>
            <div className="benefits-list">
              <div className="benefit-item">
                <span className="benefit-icon">✅</span>
                <div>
                  <h4>Quality Assurance</h4>
                  <p>Every template is tested across multiple browsers and devices</p>
                </div>
              </div>
              <div className="benefit-item">
                <span className="benefit-icon">✅</span>
                <div>
                  <h4>Regular Updates</h4>
                  <p>We continuously update our templates with new features and improvements</p>
                </div>
              </div>
              <div className="benefit-item">
                <span className="benefit-icon">✅</span>
                <div>
                  <h4>Community Support</h4>
                  <p>Join our growing community of developers and get help when you need it</p>
                </div>
              </div>
              <div className="benefit-item">
                <span className="benefit-icon">✅</span>
                <div>
                  <h4>Affordable Pricing</h4>
                  <p>Premium quality templates at prices that won't break the bank</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="about-section">
          <div className="section-content">
            <h2>Our Team</h2>
            <p>
              Behind Develpor's Hub is a diverse team of creative professionals:
            </p>
            <div className="team-grid">
              <div className="team-member">
                <h4>Development Team</h4>
                <p>Full-stack developers specializing in React, Vue, Angular, and modern web technologies</p>
              </div>
              <div className="team-member">
                <h4>Design Team</h4>
                <p>UI/UX designers focused on creating intuitive, conversion-optimized user experiences</p>
              </div>
              <div className="team-member">
                <h4>Quality Assurance</h4>
                <p>Testing specialists ensuring cross-browser compatibility and performance optimization</p>
              </div>
              <div className="team-member">
                <h4>Customer Success</h4>
                <p>Dedicated support team providing technical assistance and customization guidance</p>
              </div>
            </div>
          </div>
        </section>

        <section className="about-section">
          <div className="section-content">
            <h2>Our Commitment</h2>
            <div className="commitment-list">
              <div className="commitment-item">
                <span className="commitment-icon">🎯</span>
                <div>
                  <h4>Quality First</h4>
                  <p>Every template undergoes rigorous testing and code review before publication</p>
                </div>
              </div>
              <div className="commitment-item">
                <span className="commitment-icon">🚀</span>
                <div>
                  <h4>Performance Optimized</h4>
                  <p>All templates are built with performance in mind, achieving 90+ PageSpeed scores</p>
                </div>
              </div>
              <div className="commitment-item">
                <span className="commitment-icon">🔄</span>
                <div>
                  <h4>Regular Updates</h4>
                  <p>We continuously update our templates to support the latest web standards</p>
                </div>
              </div>
              <div className="commitment-item">
                <span className="commitment-icon">💬</span>
                <div>
                  <h4>Customer Support</h4>
                  <p>Comprehensive documentation and responsive customer support for all users</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="about-section cta-section">
          <div className="section-content">
            <h2>Join Thousands of Satisfied Customers</h2>
            <p>
              From startups to Fortune 500 companies, developers worldwide trust Develpor's Hub 
              for their template needs. Start your next project with confidence.
            </p>
            <div className="stats-row">
              <div className="stat-box">
                <span className="stat-number">500+</span>
                <span className="stat-label">Premium Templates</span>
              </div>
              <div className="stat-box">
                <span className="stat-number">10,000+</span>
                <span className="stat-label">Happy Customers</span>
              </div>
              <div className="stat-box">
                <span className="stat-number">15+</span>
                <span className="stat-label">Categories</span>
              </div>
            </div>
            <div className="cta-buttons">
              <a href="/" className="cta-button primary">Browse Templates</a>
              <a href="/categories" className="cta-button secondary">View Categories</a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;