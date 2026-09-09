// Animated marquee skills — brand-color logos via Devicon CDN.
// Every entry below appears in the resume Technical Skills section.
export interface MarqueeSkill {
  name: string;
  iconUrl: string;
  // Set for monochrome-black logos so they stay visible in dark mode.
  invertOnDark?: boolean;
}

const devicon = (path: string) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${path}`;

export const marqueeSkills: MarqueeSkill[] = [
  {
    name: 'TypeScript',
    iconUrl: devicon('typescript/typescript-original.svg'),
  },
  {
    name: 'JavaScript',
    iconUrl: devicon('javascript/javascript-original.svg'),
  },
  { name: 'Java', iconUrl: devicon('java/java-original.svg') },
  { name: 'Docker', iconUrl: devicon('docker/docker-original.svg') },
  {
    name: 'AWS',
    iconUrl: devicon(
      'amazonwebservices/amazonwebservices-original-wordmark.svg',
    ),
  },
  {
    name: 'PostgreSQL',
    iconUrl: devicon('postgresql/postgresql-original.svg'),
  },
  { name: 'MongoDB', iconUrl: devicon('mongodb/mongodb-original.svg') },
  { name: 'MySQL', iconUrl: devicon('mysql/mysql-original.svg') },
  { name: 'Redis', iconUrl: devicon('redis/redis-original.svg') },
  {
    name: 'Express',
    iconUrl: devicon('express/express-original.svg'),
    invertOnDark: true,
  },
  {
    name: 'Next.js',
    iconUrl: devicon('nextjs/nextjs-original.svg'),
    invertOnDark: true,
  },
];

export const about = {
  name: 'Purnendu',
  description: `CS student learning DevOps & Cloud infrastructure, building toward AI-integrated systems.`,
  personal: `Outside tech, I enjoy playing guitar / music.`,
};
