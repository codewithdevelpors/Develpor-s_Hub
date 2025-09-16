import React from 'react';
import './Terms.css';

const Terms = () => {
  return (
    <div className="terms-container">
      <div className="terms-hero">
        <h1 className="terms-title">Terms of Service</h1>
        <p className="terms-subtitle">
          Please read these terms carefully before using Develpor's Hub services. By using our platform, you agree to these terms.
        </p>
        <div className="last-updated">
          Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </div>
      </div>

      <div className="terms-content">
        <section className="terms-section">
          <h2>1. Acceptance of Terms</h2>
          <div className="section-content">
            <p>
              By accessing and using Develpor's Hub ("we," "our," or "us"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
            <p>
              These Terms of Service ("Terms") govern your use of our website, products, and services. We reserve the right to update these terms at any time without prior notice.
            </p>
          </div>
        </section>

        <section className="terms-section">
          <h2>2. Description of Service</h2>
          <div className="section-content">
            <p>
              Develpor's Hub is a platform that provides:
            </p>
            <ul>
              <li>Premium web templates and themes</li>
              <li>UI/UX design resources</li>
              <li>Code snippets and components</li>
              <li>Development tools and utilities</li>
              <li>Educational content and tutorials</li>
            </ul>
            <p>
              We strive to maintain the accuracy and availability of our services, but we do not guarantee uninterrupted access or error-free operation.
            </p>
          </div>
        </section>

        <section className="terms-section">
          <h2>3. User Accounts and Registration</h2>
          <div className="section-content">
            <h3>Account Creation</h3>
            <p>
              To access certain features, you may need to create an account. You agree to:
            </p>
            <ul>
              <li>Provide accurate and complete information</li>
              <li>Maintain the security of your account credentials</li>
              <li>Notify us immediately of any unauthorized use</li>
              <li>Accept responsibility for all activities under your account</li>
            </ul>

            <h3>Account Termination</h3>
            <p>
              We reserve the right to terminate or suspend accounts that violate these terms or engage in prohibited activities.
            </p>
          </div>
        </section>

        <section className="terms-section">
          <h2>4. Licensing and Usage Rights</h2>
          <div className="section-content">
            <h3>Template Licenses</h3>
            <p>
              When you purchase or download templates from Develpor's Hub, you receive:
            </p>
            <ul>
              <li><strong>Standard License:</strong> Use for personal and commercial projects</li>
              <li><strong>Extended License:</strong> Additional rights for resale and distribution</li>
              <li><strong>Developer License:</strong> Rights for client work and multiple projects</li>
            </ul>

            <h3>Permitted Uses</h3>
            <ul>
              <li>Modify templates to suit your needs</li>
              <li>Use in commercial and personal projects</li>
              <li>Create derivative works based on templates</li>
              <li>Use for client projects (with appropriate license)</li>
            </ul>

            <h3>Prohibited Uses</h3>
            <ul>
              <li>Reselling or redistributing original template files</li>
              <li>Claiming authorship of our designs</li>
              <li>Using templates for illegal or harmful purposes</li>
              <li>Sharing login credentials or downloaded files</li>
            </ul>
          </div>
        </section>

        <section className="terms-section">
          <h2>5. Payment and Refunds</h2>
          <div className="section-content">
            <h3>Payment Terms</h3>
            <p>
              All payments are processed securely through third-party payment processors. Prices are subject to change without notice.
            </p>

            <h3>Refund Policy</h3>
            <p>
              We offer refunds under the following conditions:
            </p>
            <ul>
              <li>Technical issues preventing download within 48 hours of purchase</li>
              <li>Significant discrepancies between product description and actual item</li>
              <li>Duplicate purchases made in error</li>
            </ul>
            <p>
              Refund requests must be submitted within 30 days of purchase. We do not offer refunds for change of mind or compatibility issues.
            </p>
          </div>
        </section>

        <section className="terms-section">
          <h2>6. Intellectual Property Rights</h2>
          <div className="section-content">
            <p>
              All content on Develpor's Hub, including templates, designs, code, text, and graphics, is protected by intellectual property laws.
            </p>
            <ul>
              <li>We retain ownership of all original designs and code</li>
              <li>Third-party assets are used under appropriate licenses</li>
              <li>Users receive usage rights, not ownership</li>
              <li>Unauthorized use may result in legal action</li>
            </ul>
          </div>
        </section>

        <section className="terms-section">
          <h2>7. User Conduct and Prohibited Activities</h2>
          <div className="section-content">
            <p>
              Users must not engage in the following activities:
            </p>
            <ul>
              <li>Violating any applicable laws or regulations</li>
              <li>Infringing on intellectual property rights</li>
              <li>Attempting to hack or compromise our systems</li>
              <li>Distributing malware or harmful code</li>
              <li>Spamming or sending unsolicited communications</li>
              <li>Impersonating others or providing false information</li>
              <li>Interfering with other users' experience</li>
            </ul>
          </div>
        </section>

        <section className="terms-section">
          <h2>8. Content and User Submissions</h2>
          <div className="section-content">
            <p>
              If you submit content to our platform (reviews, comments, feedback):
            </p>
            <ul>
              <li>You retain ownership of your original content</li>
              <li>You grant us a license to use, display, and distribute your content</li>
              <li>You represent that you have the right to submit the content</li>
              <li>We may remove content that violates our policies</li>
            </ul>
          </div>
        </section>

        <section className="terms-section">
          <h2>9. Privacy and Data Protection</h2>
          <div className="section-content">
            <p>
              Your privacy is important to us. Our Privacy Policy explains how we collect, use, and protect your information. By using our services, you consent to our data practices as described in the Privacy Policy.
            </p>
          </div>
        </section>

        <section className="terms-section">
          <h2>10. Disclaimers and Limitations of Liability</h2>
          <div className="section-content">
            <h3>Service Disclaimer</h3>
            <p>
              Our services are provided "as is" without warranties of any kind. We do not guarantee:
            </p>
            <ul>
              <li>Uninterrupted or error-free service</li>
              <li>Compatibility with all systems or browsers</li>
              <li>Accuracy of all information</li>
              <li>Security against all threats</li>
            </ul>

            <h3>Limitation of Liability</h3>
            <p>
              To the maximum extent permitted by law, Develpor's Hub shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our services.
            </p>
          </div>
        </section>

        <section className="terms-section">
          <h2>11. Indemnification</h2>
          <div className="section-content">
            <p>
              You agree to indemnify and hold harmless Develpor's Hub from any claims, damages, or expenses arising from your use of our services or violation of these terms.
            </p>
          </div>
        </section>

        <section className="terms-section">
          <h2>12. Termination</h2>
          <div className="section-content">
            <p>
              We may terminate or suspend your access to our services at any time for violations of these terms. Upon termination:
            </p>
            <ul>
              <li>Your right to use our services ceases immediately</li>
              <li>You may lose access to your account and downloads</li>
              <li>Previously granted licenses may remain valid</li>
              <li>Certain provisions of these terms survive termination</li>
            </ul>
          </div>
        </section>

        <section className="terms-section">
          <h2>13. Governing Law and Jurisdiction</h2>
          <div className="section-content">
            <p>
              These terms are governed by the laws of [Your Jurisdiction]. Any disputes arising from these terms or your use of our services shall be resolved in the courts of [Your Jurisdiction].
            </p>
          </div>
        </section>

        <section className="terms-section">
          <h2>14. Changes to Terms</h2>
          <div className="section-content">
            <p>
              We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting. Your continued use of our services after changes constitutes acceptance of the new terms.
            </p>
            <p>
              We encourage you to review these terms periodically to stay informed of any updates.
            </p>
          </div>
        </section>

        <section className="terms-section contact-section">
          <h2>15. Contact Information</h2>
          <div className="section-content">
            <p>
              If you have questions about these Terms of Service, please contact us:
            </p>
            <div className="contact-info">
              <div className="contact-item">
                <strong>Email:</strong> legal@develporshub.com
              </div>
              <div className="contact-item">
                <strong>Website:</strong> www.develporshub.com
              </div>
              <div className="contact-item">
                <strong>Support:</strong> support@develporshub.com
              </div>
              <div className="contact-item">
                <strong>Response Time:</strong> We aim to respond within 48 hours
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Terms;