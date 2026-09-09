import React, { useState } from 'react';
import { FaTwitter, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { HiOutlineLocationMarker, HiOutlineQrcode, HiCheck } from 'react-icons/hi';
import { userImages } from '../../data/images';
import './HeroSection.css';

export const HeroSection: React.FC = () => {
  const [showQR, setShowQR] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleGetInTouch = () => {
    // 1. Copy email address to clipboard
    const email = 'purnendutiwari2004@gmail.com';
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(email).catch(() => {});
    } else {
      const textArea = document.createElement('textarea');
      textArea.value = email;
      document.body.appendChild(textArea);
      textArea.select();
      try {
        document.execCommand('copy');
      } catch {
        // ignore
      }
      document.body.removeChild(textArea);
    }
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 3000);

    // 2. Smoothly scroll to the Contact / Connect section
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-section">
      <div className="hero-card">
        {/* Top profile banner / photo row */}
        <div className="hero-top-row">
          <div className="hero-avatar-container">
            <img
              src={userImages.profile.avatar}
              alt="Purnendu"
              className="hero-avatar"
            />
            <button
              className="hero-qr-toggle"
              onClick={() => setShowQR(!showQR)}
              title="Toggle QR Code"
              type="button"
            >
              <HiOutlineQrcode />
            </button>
          </div>

          <div className="hero-meta">
            <div className="hero-status-pill">
              <span className="hero-status-dot" />
              <span>AWS Certified Solutions Architect</span>
            </div>

            <h1 className="hero-name">Purnendu</h1>
            <a
              href="https://x.com/purnendu_5804"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-handle"
            >
              @purnendu_5804
            </a>

            <div className="hero-location">
              <HiOutlineLocationMarker className="location-icon" />
              <span>Rewa, Madhya Pradesh, India</span>
            </div>
          </div>
        </div>

        {/* QR Code Overlay Modal/Drawer */}
        {showQR && (
          <div className="hero-qr-modal" onClick={() => setShowQR(false)}>
            <div className="hero-qr-card" onClick={(e) => e.stopPropagation()}>
              <img
                src={userImages.profile.qrCode}
                alt="QR Code"
                className="hero-qr-img"
              />
              <p>Scan to view GitHub Profile</p>
              <button
                className="hero-qr-close"
                onClick={() => setShowQR(false)}
                type="button"
              >
                Close
              </button>
            </div>
          </div>
        )}

        {/* Bio Highlights */}
        <ul className="hero-bio-list">
          <li>
            <strong>CS Student</strong> at <strong>Vellore Institute of Technology (VIT Bhopal)</strong> (CGPA: 8.99/10.0), specializing in Cloud Architecture &amp; DevOps.
          </li>
          <li>
            <strong>Software Development Intern</strong> at <strong>FOSSEE, IIT Bombay</strong>; modernized Linux packaging pipelines for AppImage and Flatpak.
          </li>
          <li>
            <strong>LeetCode Knight</strong> (Contest Rating: 1852, top 5%), President of Software Development Club, and classical music practitioner.
          </li>
        </ul>

        {/* Action Buttons & Social Links */}
        <div className="hero-actions-row">
          <a
            href="mailto:purnendutiwari2004@gmail.com"
            onClick={handleGetInTouch}
            className="hero-primary-btn"
          >
            {copiedEmail ? (
              <>
                <HiCheck className="hero-btn-icon" style={{ color: 'var(--status-active)' }} />
                <span>Email Copied!</span>
              </>
            ) : (
              <>
                <FaEnvelope className="hero-btn-icon" />
                <span>Get in Touch</span>
              </>
            )}
          </a>

          <div className="hero-socials">
            <a
              href="https://github.com/Purnendu5804"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-btn"
              title="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/purnendu-tiwari-506622202/"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-btn"
              title="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://x.com/purnendu_5804"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-btn"
              title="Twitter / X"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
