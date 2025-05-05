import React from 'react';
import './Footer.css'; // Assuming you use external CSS for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* About Us */}
        <div className="footer-column">
          <h3>About Us</h3>
          <p>
            Smart Waste Management System for efficient collection, disposal, and community engagement.
            Serving cities to stay clean and green.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/schedule">Schedule Pickup</a></li>
            <li><a href="/waste-types">Waste Types</a></li>
            <li><a href="/centers">Collection Centers</a></li>
            <li><a href="/feedback">Feedback</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-column">
          <h3>Contact Us</h3>
          <p>📍 123 Green Lane, EcoCity, India</p>
          <p>📞 +91-98765-43210</p>
          <p>📧 support@smartwaste.in</p>
          <div className="social-icons">
            <a href="#" title="Facebook">🌐</a>
            <a href="#" title="Twitter">🐦</a>
            <a href="#" title="Instagram">📸</a>
            <a href="#" title="LinkedIn">💼</a>
          </div>
        </div>

        {/* Newsletter */}
        <div className="footer-column newsletter">
          <h3>Stay Updated</h3>
          <p>Subscribe for tips on waste reduction and eco news.</p>
          <form>
            <input type="email" placeholder="Your email" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © 2025 Waste Management System. All Rights Reserved. |
          <a href="/privacy"> Privacy Policy </a>|
          <a href="/terms"> Terms</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
