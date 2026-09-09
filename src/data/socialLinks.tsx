import { ReactNode } from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { HiDocumentDownload } from 'react-icons/hi';

export interface SocialLink {
  name: string;
  url: string;
  icon: ReactNode;
  color: string;
}

export const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/Purnendu5804',
    icon: <FaGithub />,
    color: '#ffffff',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/purnendu-tiwari-506622202/',
    icon: <FaLinkedin />,
    color: '#0077b5',
  },
  {
    name: 'Twitter',
    url: 'https://x.com/purnendu_5804',
    icon: <FaTwitter />,
    color: '#1da1f2',
  },
  {
    name: 'Email',
    url: 'mailto:purnendutiwari2004@gmail.com',
    icon: <FaEnvelope />,
    color: '#ea4335',
  },
  {
    name: 'Resume',
    url: '/resume',
    icon: <HiDocumentDownload />,
    color: '#f59e0b',
  },
];
