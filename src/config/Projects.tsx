import BullMQ from '@/components/technologies/BullMQ';
import Bun from '@/components/technologies/Bun';
import Docker from '@/components/technologies/Docker';
import ExpressJs from '@/components/technologies/ExpressJs';
import NextJs from '@/components/technologies/NextJs';
import NodeJs from '@/components/technologies/NodeJs';
import PostgreSQL from '@/components/technologies/PostgreSQL';
import Prisma from '@/components/technologies/Prisma';
import Redis from '@/components/technologies/Redis';
import SocketIo from '@/components/technologies/SocketIo';
import TailwindCss from '@/components/technologies/TailwindCss';
import TypeScript from '@/components/technologies/TypeScript';
import WebRTC from '@/components/technologies/WebRTC';
import { Project } from '@/types/project';

export const projects: Project[] = [
  {
    title: 'RCE Engine',
    description: 'A Judge0-style sandboxed remote code execution engine.',
    // TODO: Replace with a real screenshot of the project once available.
    image: '/project/rce-engine-placeholder.svg',
    link: '#',
    technologies: [
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'Express', icon: <ExpressJs key="expressjs" /> },
      { name: 'BullMQ', icon: <BullMQ key="bullmq" /> },
      { name: 'Redis', icon: <Redis key="redis" /> },
      { name: 'dockerode', icon: <Docker key="dockerode" /> },
      { name: 'Prisma', icon: <Prisma key="prisma" /> },
      { name: 'PostgreSQL', icon: <PostgreSQL key="postgresql" /> },
    ],
    // TODO: Add GitHub / live URL once available.
    live: '#',
    details: true,
    projectDetailsPageSlug: '/projects/rce-engine',
    isWorking: false, // Actively building — DevOps layer in progress
  },
  {
    title: 'sdcHouse',
    description:
      'A real-time 2D virtual hangout space with synchronized avatar movement, global chat, and WebRTC peer-to-peer audio/video.',
    // TODO: Replace with a real screenshot of https://sdc-house.vercel.app once available.
    image: '/project/sdchouse-placeholder.svg',
    link: 'https://sdc-house.vercel.app',
    technologies: [
      { name: 'Next.js', icon: <NextJs key="nextjs" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
      { name: 'Socket.IO', icon: <SocketIo key="socketio" /> },
      { name: 'Node.js', icon: <NodeJs key="nodejs" /> },
      { name: 'Express', icon: <ExpressJs key="expressjs" /> },
      { name: 'WebRTC', icon: <WebRTC key="webrtc" /> },
    ],
    github: 'https://github.com/Purnendu5804/sdcHouse',
    live: 'https://sdc-house.vercel.app',
    details: true,
    projectDetailsPageSlug: '/projects/sdchouse',
    isWorking: true,
  },
  {
    title: 'riyal_auction',
    description:
      'A real-time, server-authoritative football-team auction platform. Captains bid live using virtual currency; spectators watch without signup.',
    // TODO: Replace with a real screenshot of https://riyal-auction.vercel.app once available.
    image: '/project/riyal-auction-placeholder.svg',
    link: 'https://riyal-auction.vercel.app',
    technologies: [
      { name: 'Next.js', icon: <NextJs key="nextjs" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'Bun', icon: <Bun key="bun" /> },
      { name: 'Prisma', icon: <Prisma key="prisma" /> },
    ],
    github: 'https://github.com/Purnendu5804/riyal_auction',
    live: 'https://riyal-auction.vercel.app',
    details: true,
    projectDetailsPageSlug: '/projects/riyal-auction',
    isWorking: true,
  },
];
