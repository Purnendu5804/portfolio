import React, { useState } from 'react';
import SectionTitle from '../sectionTitle/SectionTitle';
import { socialLinks } from '../../data/socialLinks';
import { HiCheck } from 'react-icons/hi';
import './ContactMe.css';

export const ContactMe: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleLinkClick = (name: string) => {
    if (name === 'Email') {
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
    }
  };

  return (
    <section className="contact-me-section" id="contact">
      <SectionTitle>Connect &amp; Socials</SectionTitle>

      <div className="contact-card">
        <p className="contact-intro">
          I’m always open to discussing distributed systems, cloud architecture, open-source projects, or new engineering opportunities. Feel free to reach out across any platform below!
        </p>

        <div className="contact-links-grid">
          {socialLinks.map((link, idx) => {
            const isCopied = link.name === 'Email' && copiedEmail;
            return (
              <a
                key={idx}
                href={link.url}
                onClick={() => handleLinkClick(link.name)}
                target={link.url.startsWith('mailto:') || link.url.startsWith('/') ? '_self' : '_blank'}
                rel="noopener noreferrer"
                className="contact-link-pill"
                style={{ '--brand-color': link.color } as React.CSSProperties}
              >
                <span className="contact-icon">
                  {isCopied ? <HiCheck style={{ color: 'var(--status-active)' }} /> : link.icon}
                </span>
                <span className="contact-platform">
                  {isCopied ? 'Email Copied!' : link.name}
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
