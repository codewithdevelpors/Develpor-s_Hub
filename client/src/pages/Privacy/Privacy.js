import React from 'react';
import './Privacy.css';

const Privacy = () => {
  return (
    <div className="privacy-container">
      <div className="privacy-hero">
        <h1 className="privacy-title">Privacy Policy</h1>
        <p className="privacy-subtitle">
          Your privacy is important to us. This policy explains how Develpor's Hub collects, uses, and protects your information.
        </p>
        <div className="last-updated">
          Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </div>
      </div>

      <div className="privacy-content">
        <section className="privacy-section">
          <h2>Information We Collect</h2>
          <div className="section-content">
            <h3>Personal Information</h3>
            <p>
              When you use Develpor's Hub, we may collect the following personal information:
            </p>
            <ul>
              <li>Email address (when you subscribe to our newsletter or create an account)</li>
              <li>Name and contact information (when you contact us)</li>
              <li>Payment information (processed securely through third-party payment processors)</li>
              <li>Usage data and preferences to improve your experience</li>
            </ul>

            <h3>Automatically Collected Information</h3>
            <p>
              We automatically collect certain information when you visit our website:
            </p>
            <ul>
              <li>IP address and browser information</li>
              <li>Pages visited and time spent on our site</li>
              <li>Device information and operating system</li>
              <li>Referral source and search terms used</li>
            </ul>
          </div>
        </section>

        <section className="privacy-section">
          <h2>How We Use Your Information</h2>
          <div className="section-content">
            <p>We use the collected information for the following purposes:</p>
            <ul>
              <li><strong>Service Provision:</strong> To provide and maintain our template services</li>
              <li><strong>Communication:</strong> To respond to your inquiries and send important updates</li>
              <li><strong>Improvement:</strong> To analyze usage patterns and improve our website and services</li>
              <li><strong>Marketing:</strong> To send newsletters and promotional content (with your consent)</li>
              <li><strong>Security:</strong> To protect against fraud and ensure website security</li>
              <li><strong>Legal Compliance:</strong> To comply with applicable laws and regulations</li>
            </ul>
          </div>
        </section>

        <section className="privacy-section">
          <h2>Information Sharing and Disclosure</h2>
          <div className="section-content">
            <p>
              We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
            </p>
            <ul>
              <li><strong>Service Providers:</strong> With trusted third-party services that help us operate our website (hosting, analytics, payment processing)</li>
              <li><strong>Legal Requirements:</strong> When required by law or to protect our rights and safety</li>
              <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets</li>
              <li><strong>Consent:</strong> With your explicit consent for specific purposes</li>
            </ul>
          </div>
        </section>

        <section className="privacy-section">
          <h2>Data Security</h2>
          <div className="section-content">
            <p>
              We implement appropriate security measures to protect your personal information:
            </p>
            <ul>
              <li>SSL encryption for data transmission</li>
              <li>Secure servers and databases</li>
              <li>Regular security audits and updates</li>
              <li>Limited access to personal information by authorized personnel only</li>
              <li>Industry-standard security protocols</li>
            </ul>
            <p>
              However, no method of transmission over the internet is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
            </p>
          </div>
        </section>

        <section className="privacy-section">
          <h2>Cookies and Tracking Technologies</h2>
          <div className="section-content">
            <p>
              We use cookies and similar technologies to enhance your experience:
            </p>
            <ul>
              <li><strong>Essential Cookies:</strong> Required for basic website functionality</li>
              <li><strong>Analytics Cookies:</strong> To understand how visitors use our site</li>
              <li><strong>Preference Cookies:</strong> To remember your settings and preferences</li>
              <li><strong>Marketing Cookies:</strong> To deliver relevant advertisements (with consent)</li>
            </ul>
            <p>
              You can control cookie settings through your browser preferences. Disabling certain cookies may affect website functionality.
            </p>
          </div>
        </section>

        <section className="privacy-section">
          <h2>Your Rights and Choices</h2>
          <div className="section-content">
            <p>
              You have the following rights regarding your personal information:
            </p>
            <ul>
              <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
              <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information (subject to legal requirements)</li>
              <li><strong>Portability:</strong> Request transfer of your data to another service provider</li>
              <li><strong>Opt-out:</strong> Unsubscribe from marketing communications at any time</li>
              <li><strong>Objection:</strong> Object to certain types of data processing</li>
            </ul>
            <p>
              To exercise these rights, please contact us using the information provided below.
            </p>
          </div>
        </section>

        <section className="privacy-section">
          <h2>Third-Party Services</h2>
          <div className="section-content">
            <p>
              Our website may contain links to third-party websites and services. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies before providing any personal information.
            </p>
            <p>
              We may use third-party services such as:
            </p>
            <ul>
              <li>Google Analytics for website analytics</li>
              <li>Payment processors for secure transactions</li>
              <li>Email service providers for communications</li>
              <li>Content delivery networks for improved performance</li>
            </ul>
          </div>
        </section>

        <section className="privacy-section">
          <h2>Children's Privacy</h2>
          <div className="section-content">
            <p>
              Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If we become aware that we have collected personal information from a child under 13, we will take steps to delete such information.
            </p>
          </div>
        </section>

        <section className="privacy-section">
          <h2>International Data Transfers</h2>
          <div className="section-content">
            <p>
              Your information may be transferred to and processed in countries other than your own. We ensure that such transfers comply with applicable data protection laws and implement appropriate safeguards to protect your information.
            </p>
          </div>
        </section>

        <section className="privacy-section">
          <h2>Changes to This Privacy Policy</h2>
          <div className="section-content">
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by posting the updated policy on our website and updating the "Last updated" date.
            </p>
            <p>
              We encourage you to review this Privacy Policy periodically to stay informed about how we protect your information.
            </p>
          </div>
        </section>

        <section className="privacy-section contact-section">
          <h2>Contact Us</h2>
          <div className="section-content">
            <p>
              If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="contact-info">
              <div className="contact-item">
                <strong>Email:</strong> privacy@develporshub.com
              </div>
              <div className="contact-item">
                <strong>Website:</strong> www.develporshub.com
              </div>
              <div className="contact-item">
                <strong>Response Time:</strong> We aim to respond to all inquiries within 48 hours
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Privacy;