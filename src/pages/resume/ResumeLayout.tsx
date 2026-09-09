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
            target="_blank"
            rel="noopener noreferrer"
            className="resume-btn"
          >
            <HiOutlineExternalLink /> Open in Full Tab
          </a>
          <a
            href="/resume/resume.pdf"
            download="Purnendu_Resume.pdf"
            className="resume-btn resume-btn-outline"
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
        <object
          data="/resume/resume.pdf"
          type="application/pdf"
          className="resume-iframe"
        >
          <iframe
            src="/resume/resume.pdf"
            title="Purnendu Resume"
            className="resume-iframe"
          >
            <p className="resume-fallback-text">
              Your browser does not support inline PDF viewing.{' '}
              <a href="/resume/resume.pdf" target="_blank" rel="noopener noreferrer">
                Click here to view or download the PDF directly.
              </a>
            </p>
          </iframe>
        </object>
      </div>
    </div>
  );
};

export default ResumeLayout;
