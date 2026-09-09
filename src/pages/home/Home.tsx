import React from 'react';
import HeroSection from '../../components/heroSection/HeroSection';
import SkillSection from '../../components/skillSection/SkillSection';
import Experience from '../../components/experience/Experience';
import Projects from '../../components/projects/Projects';
import UsesSection from '../../components/uses/UsesSection';
import ContactMe from '../../components/contactMe/ContactMe';

export const Home: React.FC = () => {
  return (
    <div className="page-container">
      <HeroSection />
      <SkillSection />
      <Experience />
      <Projects />
      <UsesSection />
      <ContactMe />
    </div>
  );
};

export default Home;
