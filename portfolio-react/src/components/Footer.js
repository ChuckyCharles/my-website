import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer>
      <div className="footer-content-wrap">
        <div className="brands">
          <div className="brand-logo-name">
            <div className="brand-logo">
              <h3>Charles Ochieng</h3>
            </div>
          </div>
          <div className="brands-paragraph-content">
            <p>Cloud Infrastructure Engineer & DevOps Engineer</p>
          </div>
        </div>
        <div className="footer-links">
          <div className="footer-links-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/#portfolio">Portfolio</a></li>
              <li><a href="/about">About</a></li>
        
            </ul>
          </div>
          <div className="footer-links-section">
            <h4>Contact</h4>
            <ul>
              <li><a href="mailto: ochiengc753@gmail.com">Email</a></li>
              <li><a href="tel: +254718166201">Phone</a></li>
              <li><a href="https://wa.me/254718166201" target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
            </ul>
          </div>
          <div className="footer-links-section">
            <h4>Social</h4>
            <ul>
              <li><a href="https://x.com/CharlesO21441" target="_blank" rel="noopener noreferrer">Twitter</a></li>
              <li><a href="https://www.linkedin.com/in/charles-ochieng-177ba3253" target="_blank" rel="noopener eehnoreferrer">LinkedIn</a></li>
              <li><a href="https://github.com/ChuckyCharles" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-contact-social">
          <span className="footer-contact-info">
            Contact us: <a href="mailto:ochiengcharles531@gmail.com">ochiengcharles531@gmail.com</a> | <a href="tel:+254718166201">+254718166201</a>
          </span>
          <span className="footer-social-links">
            <a href="https://www.linkedin.com/in/charles-ochieng-177ba3253" target="_blank" rel="noopener noreferrer" className="social-icon"><i className="fab fa-linkedin-in"></i></a>
            <a href="https://github.com/ChuckyCharles" target="_blank" rel="noopener noreferrer" className="social-icon"><i className="fab fa-github"></i></a>
            <a href="https://gitlab.com/cloudchuck/" target="_blank" rel="noopener noreferrer" className="social-icon"><i className="fab fa-gitlab"></i></a>
            <a href="https://x.com/CharlesO21441" target="_blank" rel="noopener noreferrer" className="social-icon"><i className="fab fa-x"></i></a>
            <a href="https://www.instagram.com/charlesochieng878/" target="_blank" rel="noopener noreferrer" className="social-icon"><i className="fab fa-instagram"></i></a>
            <a href="https://web.facebook.com/profile.php?id=61563616826503" target="_blank" rel="noopener noreferrer" className="social-icon"><i className="fab fa-facebook-f"></i></a>
          </span>
        </div>
        <p>&copy; {new Date().getFullYear()} Charles Ochieng. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer; 