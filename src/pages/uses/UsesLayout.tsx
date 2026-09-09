import React from 'react';
import { Link } from 'react-router-dom';
import { HiArrowLeft, HiOutlineExternalLink } from 'react-icons/hi';
import SectionTitle from '../../components/sectionTitle/SectionTitle';
import { usesData } from '../../data/uses';
import './UsesLayout.css';

export const UsesLayout: React.FC = () => {
  return (
    <div className="page-container uses-page">
      <div className="back-link-wrapper">
        <Link to="/" className="back-link">
          <HiArrowLeft /> Back to Home
        </Link>
      </div>

      <SectionTitle>Workspace, Software &amp; Hardware</SectionTitle>

      <div className="uses-categories">
        {usesData.map((category, idx) => (
          <div key={idx} className="uses-category-card">
            <h3 className="uses-category-title">{category.category}</h3>
            <div className="uses-items-list">
              {category.items.map((item, itemIdx) => (
                <div key={itemIdx} className="uses-item-row">
                  <span className="uses-item-label">{item.label}</span>
                  <div className="uses-item-name-box">
                    {item.link ? (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="uses-item-link"
                      >
                        <span>{item.name}</span>
                        <HiOutlineExternalLink className="uses-link-icon" />
                      </a>
                    ) : (
                      <span className="uses-item-name">{item.name}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsesLayout;
