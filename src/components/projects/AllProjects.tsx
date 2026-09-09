import React from 'react';
import { Link } from 'react-router-dom';
import { HiArrowLeft } from 'react-icons/hi';
import SectionTitle from '../sectionTitle/SectionTitle';
import ProjectCard from './ProjectCard';
import { allProjects } from '../../data/projects';
import './Projects.css';

export const AllProjects: React.FC = () => {
  return (
    <div className="all-projects-container">
      <div className="back-link-wrapper">
        <Link to="/" className="back-link">
          <HiArrowLeft /> Back to Home
        </Link>
      </div>

      <SectionTitle>All Projects &amp; Open Source Work</SectionTitle>

      <div className="projects-grid">
        {allProjects.map((project, idx) => (
          <ProjectCard
            key={idx}
            banner={project.banner}
            name={project.name}
            desc={project.desc}
            tech={project.tech}
            github={project.github}
            live={project.live}
            isUnderDevelopment={project.isUnderDevelopment}
            stats={project.stats}
          />
        ))}
      </div>
    </div>
  );
};

export default AllProjects;
