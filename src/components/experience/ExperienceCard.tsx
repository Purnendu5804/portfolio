import React, { ReactNode } from 'react';
import { HiChevronDown, HiOutlineExternalLink } from 'react-icons/hi';
import './Experience.css';

export interface ExperienceCardProps {
  logo?: ReactNode;
  logoUrl?: string;
  company: string;
  links?: { url: string; icon: ReactNode }[];
  status: 'present' | 'past' | 'future';
  role: string;
  dates: string;
  location?: string;
  description: string[];
  isExpanded?: boolean;
  onToggle?: () => void;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({
  logo,
  logoUrl,
  company,
  links = [],
  status,
  role,
  dates,
  location,
  description,
  isExpanded = true,
  onToggle,
}) => {
  return (
    <div className={`experience-card-item experience-status-${status}`}>
      {/* Timeline connector dot */}
      <div className="timeline-dot-wrapper">
        <span className={`timeline-dot dot-${status}`} />
      </div>

      <div className="experience-card-body">
        <div className="experience-card-header" onClick={onToggle}>
          <div className="experience-logo-box">
            {logoUrl ? (
              <img src={logoUrl} alt={company} className="experience-logo" />
            ) : logo ? (
              logo
            ) : (
              <span className="experience-logo-fallback">{company[0]}</span>
            )}
          </div>

          <div className="experience-info">
            <div className="experience-role-row">
              <h3 className="experience-role">{role}</h3>
              <span className={`experience-status-badge badge-${status}`}>
                {status}
              </span>
            </div>

            <div className="experience-company-row">
              <span className="experience-company">{company}</span>
              {links.map((link, idx) => (
                <a
                  key={idx}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="experience-company-link"
                  onClick={(e) => e.stopPropagation()}
                >
                  {link.icon || <HiOutlineExternalLink />}
                </a>
              ))}
              {location && (
                <span className="experience-location">• {location}</span>
              )}
            </div>

            <span className="experience-dates">{dates}</span>
          </div>

          {onToggle && (
            <button
              className={`experience-toggle-btn ${isExpanded ? 'toggle-open' : ''}`}
              type="button"
              aria-label="Toggle description"
            >
              <HiChevronDown />
            </button>
          )}
        </div>

        {isExpanded && description.length > 0 && (
          <ul className="experience-bullets">
            {description.map((bullet, idx) => (
              <li key={idx}>{bullet}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ExperienceCard;
