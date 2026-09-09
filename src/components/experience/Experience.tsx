import React, { useState } from 'react';
import SectionTitle from '../sectionTitle/SectionTitle';
import ExperienceCard from './ExperienceCard';
import Calendar from '../calendar/Calendar';
import { HiOutlineExternalLink } from 'react-icons/hi';
import './Experience.css';

export const Experience: React.FC = () => {
  const [expandedIdx, setExpandedIdx] = useState<number | null>(0);

  const toggleExpand = (idx: number) => {
    setExpandedIdx(expandedIdx === idx ? null : idx);
  };

  const experienceEntries = [
    {
      company: 'FOSSEE, IIT Bombay',
      role: 'Software Development Intern',
      dates: 'May 2026 - July 2026',
      location: 'Mumbai, India (Remote)',
      status: 'past' as const,
      logoUrl: '/images/misc/fossee.svg',
      links: [
        {
          url: 'https://fossee.in',
          icon: <HiOutlineExternalLink />,
        },
      ],
      description: [
        'Collaborated with a mentor and a 3-member team to modernize the Linux packaging pipeline for the eSim application across AppImage and Flatpak formats.',
        'Fixed recurring PyQt5 dependency crashes by bundling a self-contained Python runtime into the AppImage, eliminating the need for users to manually install matching host-side dependencies.',
        'Resolved Qt platform plugin failures across 2 display server protocols (X11 and Wayland) by building automatic detection logic, verified across 4 major Linux distributions (Ubuntu, Kubuntu, Fedora, Linux Mint).',
        'Rebuilt the Flatpak offline install pipeline by fixing broken package sources and pre-validating dependency wheels ahead of build time, enabling fully offline, zero-network installs.',
      ],
    },
  ];

  return (
    <section className="experience-section">
      <SectionTitle>Work Experience &amp; Activity</SectionTitle>

      <div className="experience-timeline-container">
        {experienceEntries.map((exp, idx) => (
          <ExperienceCard
            key={idx}
            company={exp.company}
            role={exp.role}
            dates={exp.dates}
            location={exp.location}
            status={exp.status}
            logoUrl={exp.logoUrl}
            links={exp.links}
            description={exp.description}
            isExpanded={expandedIdx === idx}
            onToggle={() => toggleExpand(idx)}
          />
        ))}
      </div>

      <div className="experience-calendar-wrapper">
        <Calendar />
      </div>
    </section>
  );
};

export default Experience;
