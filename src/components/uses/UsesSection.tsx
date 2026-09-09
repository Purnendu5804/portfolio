import React from 'react';
import { Link } from 'react-router-dom';
import { HiArrowRight } from 'react-icons/hi';
import SectionTitle from '../sectionTitle/SectionTitle';
import './UsesSection.css';

export const UsesSection: React.FC = () => {
  return (
    <section className="uses-teaser-section">
      <SectionTitle>Gear &amp; Workspace</SectionTitle>

      <div className="uses-teaser-card">
        <p className="uses-teaser-desc">
          A curated setup of the hardware, developer tools, cloud infrastructure, and configuration I use daily to engineer scalable software and distributed systems.
        </p>

        <div className="uses-teaser-action">
          <Link to="/uses" className="uses-teaser-btn">
            <span>Explore Full Tech Stack &amp; Gear</span>
            <HiArrowRight className="uses-arrow-icon" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default UsesSection;
