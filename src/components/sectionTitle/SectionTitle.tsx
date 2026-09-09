import React, { ReactNode } from 'react';
import './SectionTitle.css';

interface SectionTitleProps {
  children: ReactNode;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ children }) => {
  return (
    <div className="section-title-container">
      <div className="section-title-box">
        <span className="corner corner-top-left" />
        <span className="corner corner-top-right" />
        <span className="corner corner-bottom-left" />
        <span className="corner corner-bottom-right" />
        <h2 className="section-title-text">{children}</h2>
      </div>
      <div className="section-title-line" />
    </div>
  );
};

export default SectionTitle;
