import { userImages } from './images';

export interface ProjectData {
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

export const featuredProjects: ProjectData[] = [
  {
    name: 'sdcHouse',
    banner: userImages.projects.project1,
    desc: 'Real-time multiplayer virtual space platform with synchronized avatar movement, global chat, and WebRTC peer-to-peer audio/video with <10ms local sync latency.',
    tech: ['Next.js', 'Socket.IO', 'Node.js', 'Express', 'WebRTC', 'Tailwind CSS'],
    github: 'https://github.com/Purnendu5804/sdcHouse',
    live: 'https://sdc-house.vercel.app',
    stats: 'Multiplayer Space',
  },
  {
    name: 'RCE Engine',
    banner: userImages.projects.project2,
    desc: 'Judge0-style sandboxed remote code execution engine running untrusted user code inside Docker containers with 128MB memory cap, 64-process fork-bomb protection, and asynchronous BullMQ/Redis worker pipelines.',
    tech: ['TypeScript', 'Express', 'BullMQ', 'Redis', 'Docker', 'Prisma', 'PostgreSQL'],
    github: 'https://github.com/Purnendu5804',
    isUnderDevelopment: true,
    stats: 'Sandboxed Engine',
  },
  {
    name: 'riyal_auction',
    banner: userImages.projects.project3,
    desc: 'Real-time, server-authoritative football-team auction platform. Team captains bid live using virtual currency while spectators stream the auction without sign-up.',
    tech: ['Next.js', 'TypeScript', 'Bun', 'Prisma', 'PostgreSQL'],
    github: 'https://github.com/Purnendu5804/riyal_auction',
    live: 'https://riyal-auction.vercel.app',
    stats: 'Live Bidding',
  },
];

export const additionalProjects: ProjectData[] = [
  {
    name: 'eSim Linux Packaging Pipeline',
    banner: userImages.projects.project4,
    desc: 'Modernized Linux packaging pipeline for the eSim application across AppImage and Flatpak. Resolved Qt platform plugin failures across X11 and Wayland protocols and automated zero-network offline builds.',
    tech: ['Linux', 'AppImage', 'Flatpak', 'Python', 'PyQt5', 'Bash'],
    github: 'https://github.com/Purnendu5804',
    live: 'https://fossee.in',
    stats: 'FOSSEE, IIT Bombay',
  },
];

export const allProjects: ProjectData[] = [...featuredProjects, ...additionalProjects];
