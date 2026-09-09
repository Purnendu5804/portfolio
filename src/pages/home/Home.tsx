import React from 'react';
import HeroSection from '../../components/heroSection/HeroSection';
import SkillSection from '../../components/skillSection/SkillSection';
import Experience from '../../components/experience/Experience';
import Projects from '../../components/projects/Projects';
import LearningSection from '../../components/learning/LearningSection';
import ContactMe from '../../components/contactMe/ContactMe';

export const Home: React.FC = () => {
  return (
    <div className="page-container">
      <HeroSection />
      <SkillSection />
      <Experience />
      <Projects />
      <LearningSection />
      <ContactMe />
    </div>
  );
};

export default Home;
