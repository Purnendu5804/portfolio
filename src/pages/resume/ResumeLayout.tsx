import React from 'react';
import { Link } from 'react-router-dom';
import { HiArrowLeft, HiOutlineDownload, HiOutlineExternalLink } from 'react-icons/hi';
import SectionTitle from '../../components/sectionTitle/SectionTitle';
import './ResumeLayout.css';

export const ResumeLayout: React.FC = () => {
  return (
    <div className="page-container resume-page">
      <div className="back-link-wrapper">
        <Link to="/" className="back-link">
          <HiArrowLeft /> Back to Home
        </Link>
      </div>

      <div className="resume-header-row">
        <SectionTitle>Curriculum Vitae / Resume</SectionTitle>
        <div className="resume-actions">
          <a
            href="/resume/resume.pdf"
            download="Purnendu_Tiwari_Resume.pdf"
            className="resume-btn"
          >
            <HiOutlineDownload /> Download PDF
          </a>
          <a
            href="https://drive.google.com/file/d/1ormIiMVpWGAMOZ3FZVj_XrKPkEmPlPQj/preview"
            target="_blank"
            rel="noopener noreferrer"
            className="resume-btn resume-btn-outline"
          >
            <HiOutlineExternalLink /> Google Drive View
          </a>
        </div>
      </div>

      <div className="resume-viewer-card">
        <iframe
          src="/resume/resume.pdf"
          title="Purnendu Tiwari Resume"
          className="resume-iframe"
        />
      </div>
    </div>
  );
};

export default ResumeLayout;
