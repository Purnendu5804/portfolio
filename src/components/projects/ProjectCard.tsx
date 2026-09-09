import React, { useState, useEffect } from 'react';
import { FaGithub } from 'react-icons/fa';
import { HiOutlineExternalLink } from 'react-icons/hi';
import { LuConstruction } from 'react-icons/lu';
import './Projects.css';

export interface ProjectCardProps {
  banner: string;
  name: string;
  desc: string;
  tech: string[];
  github: string;
  live?: string;
  demoWarning?: boolean;
  isUnderDevelopment?: boolean;
  isPrivate?: boolean;
  stats?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  banner,
  name,
  desc,
  tech,
  github,
  live,
  isUnderDevelopment,
  isPrivate,
  stats,
}) => {
  const [imgSrc, setImgSrc] = useState(banner);

  useEffect(() => {
    setImgSrc(banner);
  }, [banner]);

  return (
    <div className="project-card">
      <div className="project-banner-box">
        <img
          src={imgSrc}
          alt={name}
          className="project-banner-img"
          onError={() => {
            if (imgSrc.endsWith('.svg')) {
              setImgSrc(imgSrc.replace('.svg', '.png'));
            } else if (imgSrc.endsWith('.png')) {
              setImgSrc(imgSrc.replace('.png', '.svg'));
            }
          }}
        />
        {stats && <span className="project-badge-stats">{stats}</span>}
        {isUnderDevelopment && (
          <span className="project-badge-dev">
            <LuConstruction /> Under Development
          </span>
        )}
      </div>

      <div className="project-content">
        <div className="project-header-row">
          <h3 className="project-title">{name}</h3>
          <div className="project-links-row">
            {!isPrivate && github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="project-action-link"
                title="GitHub Repository"
              >
                <FaGithub />
              </a>
            )}
            {live && (
              <a
                href={live}
                target="_blank"
                rel="noopener noreferrer"
                className="project-action-link"
                title="Live Demo"
              >
                <HiOutlineExternalLink />
              </a>
            )}
          </div>
        </div>

        <p className="project-desc">{desc}</p>

        <div className="project-tech-pills">
          {tech.map((item, idx) => (
            <span key={idx} className="tech-pill">
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
