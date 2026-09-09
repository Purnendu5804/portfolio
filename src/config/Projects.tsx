import BullMQ from '@/components/technologies/BullMQ';
import Docker from '@/components/technologies/Docker';
import ExpressJs from '@/components/technologies/ExpressJs';
import Prisma from '@/components/technologies/Prisma';
import Redis from '@/components/technologies/Redis';
import TypeScript from '@/components/technologies/TypeScript';
import { Project } from '@/types/project';

export const projects: Project[] = [
  {
    title: 'RCE Engine',
    description:
      'A Judge0-style sandboxed remote code execution engine.',
    image: '/assets/logo.png',
    link: '#',
    technologies: [
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'Express', icon: <ExpressJs key="expressjs" /> },
      { name: 'BullMQ', icon: <BullMQ key="bullmq" /> },
      { name: 'Redis', icon: <Redis key="redis" /> },
      { name: 'dockerode', icon: <Docker key="dockerode" /> },
      { name: 'Prisma', icon: <Prisma key="prisma" /> },
    ],
    // TODO: Add GitHub / live URL once available.
    live: '#',
    details: true,
    projectDetailsPageSlug: '/projects/rce-engine',
    isWorking: false, // Actively building — DevOps layer in progress
  },
  // --- Placeholder slots ---
  // TODO: Fill in once details are provided. Do not invent descriptions.
  {
    title: 'Capstone Project — Coming Soon',
    description:
      'TODO: Add description once details are provided. Placeholder slot only.',
    image: '/assets/logo.png',
    link: '#',
    technologies: [],
    live: '#',
    details: false,
    projectDetailsPageSlug: '#',
    isWorking: false,
  },
  {
    title: 'Hackathon Project — Coming Soon',
    description:
      'TODO: Add description once details are provided. Placeholder slot only.',
    image: '/assets/logo.png',
    link: '#',
    technologies: [],
    live: '#',
    details: false,
    projectDetailsPageSlug: '#',
    isWorking: false,
  },
  {
    title: 'DSA Battle Platform — Coming Soon',
    description:
      'TODO: Add description once details are provided. Placeholder slot only.',
    image: '/assets/logo.png',
    link: '#',
    technologies: [],
    live: '#',
    details: false,
    projectDetailsPageSlug: '#',
    isWorking: false,
  },
];
