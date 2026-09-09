import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import HeroSection from '../../components/heroSection/HeroSection';
import SkillSection from '../../components/skillSection/SkillSection';
import Experience from '../../components/experience/Experience';
import Projects from '../../components/projects/Projects';
import LearningSection from '../../components/learning/LearningSection';
import ContactMe from '../../components/contactMe/ContactMe';

export const Home: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const elem = document.querySelector(location.hash);
      if (elem) {
        setTimeout(() => {
          elem.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

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
