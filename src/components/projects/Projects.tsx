import React from 'react';
import { Link } from 'react-router-dom';
import { HiArrowRight } from 'react-icons/hi';
import SectionTitle from '../sectionTitle/SectionTitle';
import ProjectCard from './ProjectCard';
import { featuredProjects } from '../../data/projects';
import './Projects.css';

export const Projects: React.FC = () => {
  return (
    <section className="projects-section">
      <SectionTitle>Featured Projects</SectionTitle>

      <div className="projects-grid">
        {featuredProjects.map((project, idx) => (
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

      <div className="projects-more-container">
        <Link to="/projects" className="projects-more-btn">
          <span>View All Projects</span>
          <HiArrowRight className="more-arrow-icon" />
        </Link>
      </div>
    </section>
  );
};

export default Projects;
