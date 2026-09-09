import React from 'react';
import SectionTitle from '../sectionTitle/SectionTitle';
import { socialLinks } from '../../data/socialLinks';
import './ContactMe.css';

export const ContactMe: React.FC = () => {
  return (
    <section className="contact-me-section">
      <SectionTitle>Connect &amp; Socials</SectionTitle>

      <div className="contact-card">
        <p className="contact-intro">
          I’m always open to discussing distributed systems, cloud architecture, open-source projects, or new engineering opportunities. Feel free to reach out across any platform below!
        </p>

        <div className="contact-links-grid">
          {socialLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.url}
              target={link.url.startsWith('mailto:') || link.url.startsWith('/') ? '_self' : '_blank'}
              rel="noopener noreferrer"
              className="contact-link-pill"
              style={{ '--brand-color': link.color } as React.CSSProperties}
            >
              <span className="contact-icon">{link.icon}</span>
              <span className="contact-platform">{link.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
