import React from 'react';
import { IconType } from 'react-icons';
import {
  FaJava,
  FaPython,
  FaReact,
  FaNodeJs,
  FaDocker,
  FaAws,
  FaLinux,
  FaGitAlt,
  FaGithub,
} from 'react-icons/fa';
import {
  SiTypescript,
  SiJavascript,
  SiNextdotjs,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiRedis,
  SiPrisma,
  SiPostman,
  SiNginx,
  SiCloudflare,
  SiVercel,
  SiFlatpak,
  SiWebrtc,
  SiSocketdotio,
  SiGnubash,
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
import SectionTitle from '../sectionTitle/SectionTitle';
import './SkillSection.css';

interface SkillItem {
  name: string;
  icon: IconType;
  color: string;
}

const technologies: SkillItem[] = [
  { name: 'TypeScript', icon: SiTypescript, color: '#3178c6' },
  { name: 'JavaScript', icon: SiJavascript, color: '#f7df1e' },
  { name: 'Java', icon: FaJava, color: '#ed8b00' },
  { name: 'Python', icon: FaPython, color: '#3776ab' },
  { name: 'React', icon: FaReact, color: '#61dafb' },
  { name: 'Next.js', icon: SiNextdotjs, color: '#ffffff' },
  { name: 'Node.js', icon: FaNodeJs, color: '#339933' },
  { name: 'Express', icon: SiExpress, color: '#ffffff' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169e1' },
  { name: 'MongoDB', icon: SiMongodb, color: '#47a248' },
  { name: 'MySQL', icon: SiMysql, color: '#4479a1' },
  { name: 'Redis', icon: SiRedis, color: '#dc382d' },
  { name: 'Docker', icon: FaDocker, color: '#2496ed' },
  { name: 'AWS', icon: FaAws, color: '#ff9900' },
  { name: 'Linux', icon: FaLinux, color: '#fcc624' },
];

const tools: SkillItem[] = [
  { name: 'Git', icon: FaGitAlt, color: '#f05032' },
  { name: 'GitHub', icon: FaGithub, color: '#ffffff' },
  { name: 'Docker Compose', icon: FaDocker, color: '#2496ed' },
  { name: 'Prisma', icon: SiPrisma, color: '#2d3748' },
  { name: 'Postman', icon: SiPostman, color: '#ff6c37' },
  { name: 'Nginx', icon: SiNginx, color: '#009639' },
  { name: 'Cloudflare', icon: SiCloudflare, color: '#f38020' },
  { name: 'Vercel', icon: SiVercel, color: '#ffffff' },
  { name: 'Flatpak', icon: SiFlatpak, color: '#4b8ee7' },
  { name: 'AppImage', icon: FaLinux, color: '#00b4d8' },
  { name: 'WebRTC', icon: SiWebrtc, color: '#ffffff' },
  { name: 'Socket.IO', icon: SiSocketdotio, color: '#ffffff' },
  { name: 'Bash', icon: SiGnubash, color: '#4eaa25' },
  { name: 'VS Code', icon: VscVscode, color: '#007acc' },
  { name: 'BullMQ', icon: SiRedis, color: '#ff4500' },
];

export const SkillSection: React.FC = () => {
  return (
    <section className="skill-section">
      <SectionTitle>Technical Skills &amp; Stack</SectionTitle>

      <div className="marquee-wrapper">
        {/* Row 1: Core Technologies */}
        <div className="marquee-row">
          <div className="marquee-track">
            {technologies.concat(technologies).map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={`tech-${idx}`} className="skill-pill">
                  <Icon className="skill-icon" style={{ color: item.color }} />
                  <span className="skill-name">{item.name}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Row 2: Tools & Infrastructure (Reverse) */}
        <div className="marquee-row marquee-reverse">
          <div className="marquee-track">
            {tools.concat(tools).map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={`tool-${idx}`} className="skill-pill">
                  <Icon className="skill-icon" style={{ color: item.color }} />
                  <span className="skill-name">{item.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillSection;
