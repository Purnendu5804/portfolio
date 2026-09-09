import React from 'react';
import { Link } from 'react-router-dom';
import { HiArrowLeft, HiCheckCircle } from 'react-icons/hi';
import { LuTimer } from 'react-icons/lu';
import SectionTitle from '../../components/sectionTitle/SectionTitle';
import { learningData } from '../../data/learning';
import './LearningLayout.css';

export const LearningLayout: React.FC = () => {
  return (
    <div className="page-container learning-page">
      <div className="back-link-wrapper">
        <Link to="/" className="back-link">
          <HiArrowLeft /> Back to Home
        </Link>
      </div>

      <SectionTitle>Learning Log &amp; Roadmap</SectionTitle>

      <div className="learning-page-intro">
        <p>
          I treat engineering learning as an iterative, open process. Below is my honest progress record — separating tools and architectures I have validated and built production-grade systems with from the distributed infrastructure technologies I am currently exploring.
        </p>
      </div>

      <div className="learning-stages-container">
        {learningData.map((stage, idx) => (
          <div key={idx} className="learning-stage-card">
            <div className="stage-card-header">
              <div className="stage-title-row">
                <span
                  className={`stage-badge ${
                    stage.stage === 'Completed'
                      ? 'badge-completed'
                      : 'badge-inprogress'
                  }`}
                >
                  {stage.stage === 'Completed' ? (
                    <HiCheckCircle />
                  ) : (
                    <LuTimer />
                  )}
                  {stage.stage}
                </span>
                <h3 className="stage-heading">{stage.stage === 'Completed' ? 'Validated & Certified' : 'Active Technical Deep Dives'}</h3>
              </div>
              <p className="stage-description">{stage.description}</p>
            </div>

            <div className="stage-items-list">
              {stage.items.map((item, itemIdx) => (
                <div key={itemIdx} className="stage-item-box">
                  <div className="stage-item-top">
                    <h4 className="stage-item-name">{item.name}</h4>
                    <span className="stage-item-category">{item.category}</span>
                  </div>
                  <p className="stage-item-notes">{item.notes}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LearningLayout;
