import React from 'react';
import { Link } from 'react-router-dom';
import { HiArrowRight, HiCheckCircle } from 'react-icons/hi';
import { LuTimer } from 'react-icons/lu';
import SectionTitle from '../sectionTitle/SectionTitle';
import { learningData } from '../../data/learning';
import './LearningSection.css';

export const LearningSection: React.FC = () => {
  return (
    <section className="learning-section">
      <SectionTitle>Learning Log</SectionTitle>

      <div className="learning-teaser-card">
        <p className="learning-intro-text">
          An honest, in-progress log of technologies and infrastructure concepts I am actively mastering. No vanity badges — just practical progress.
        </p>

        <div className="learning-groups">
          {learningData.map((stage, idx) => (
            <div key={idx} className="learning-stage-block">
              <div className="learning-stage-header">
                {stage.stage === 'Completed' ? (
                  <span className="stage-badge badge-completed">
                    <HiCheckCircle /> Completed / Certified
                  </span>
                ) : (
                  <span className="stage-badge badge-inprogress">
                    <LuTimer /> Currently Learning
                  </span>
                )}
              </div>

              <div className="learning-chips-grid">
                {stage.items.map((item, itemIdx) => (
                  <div key={itemIdx} className="learning-chip">
                    <span className="learning-chip-name">{item.name}</span>
                    <span className="learning-chip-category">{item.category}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="learning-action-row">
          <Link to="/learning" className="learning-more-btn">
            <span>View Detailed Learning Notes</span>
            <HiArrowRight className="learning-arrow-icon" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LearningSection;
