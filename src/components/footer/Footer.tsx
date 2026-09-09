import React from 'react';
import { FaHeart } from 'react-icons/fa';
import './Footer.css';

export const Footer: React.FC = () => {
  return (
    <footer className="footer-wrapper">
      <div className="footer-container">
        <div className="footer-quote-box">
          <p className="footer-quote">
            &ldquo;Stay curious, build resilient systems, and keep exploring.&rdquo;
          </p>
        </div>

        <div className="footer-bottom-row">
          <div className="footer-attribution">
            <span>Designed &amp; Made with</span>
            <FaHeart className="footer-heart-icon" />
            <span>by Purnendu</span>
          </div>

          <div className="footer-copyright">
            &copy; {new Date().getFullYear()} Purnendu. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
