import React from 'react';
import AllProjects from '../components/projects/AllProjects';

export const ProjectsLayout: React.FC = () => {
  return (
    <div className="page-container">
      <AllProjects />
    </div>
  );
};

export default ProjectsLayout;
