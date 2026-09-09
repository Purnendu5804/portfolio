/*
 * CUSTOMIZATION EXAMPLE
 *
 * Want to customize this portfolio for yourself? Here's how easy it is:
 *
 * 1. Update your personal info:
 *    name: "Your Name"
 *    title: "Your Professional Title"
 *    avatar: "/path/to/your/image.jpg"
 *
 * 2. Add your skills:
 *    skills: [
 *      { name: "Python", href: "https://python.org", component: "Python" }, // Note: You'd need to create Python component
 *      { name: "React", href: "https://react.dev", component: "ReactIcon" },
 *      { name: "Node.js", href: "https://nodejs.org", component: "NodeJs" },
 *    ]
 *
 * 3. Write your description using the template:
 *    template: "I'm a **passionate developer** who loves building apps with {skills:0} and {skills:1}. I specialize in **web development** and enjoy working with {skills:2}."
 *
 * 4. Update your social links:
 *    Just change the href values to your own social media profiles
 *
 * That's it! Your portfolio will automatically update with your information.
 */
import Github from '@/components/svgs/Github';
import LinkedIn from '@/components/svgs/LinkedIn';
import Mail from '@/components/svgs/Mail';
import X from '@/components/svgs/X';
import AWS from '@/components/technologies/AWS';
import ExpressJs from '@/components/technologies/ExpressJs';
import Prisma from '@/components/technologies/Prisma';
// Technology Components
import TypeScript from '@/components/technologies/TypeScript';

// Component mapping for skills
export const skillComponents = {
  TypeScript: TypeScript,
  ExpressJs: ExpressJs,
  Prisma: Prisma,
  AWS: AWS,
};

export const heroConfig = {
  // Personal Information
  name: 'Purnendu',
  title:
    'CS student learning DevOps & Cloud infrastructure, building toward AI-integrated systems.',
  avatar: '/assets/logo.png',

  // Skills Configuration
  skills: [
    {
      name: 'TypeScript',
      href: 'https://www.typescriptlang.org/',
      component: 'TypeScript',
    },
    {
      name: 'Express',
      href: 'https://expressjs.com/',
      component: 'ExpressJs',
    },
    {
      name: 'Prisma',
      href: 'https://www.prisma.io/',
      component: 'Prisma',
    },
    {
      name: 'AWS',
      href: 'https://aws.amazon.com/',
      component: 'AWS',
    },
  ],

  // Description Configuration
  description: {
    template:
      'I work with {skills:0}, {skills:1}, {skills:2} and {skills:3}, currently focused on learning <b>DevOps</b> & <b>Cloud infrastructure</b>.',
  },

  // Buttons Configuration
  buttons: [
    {
      variant: 'outline',
      text: 'Resume / CV',
      href: '/resume',
      icon: 'CV',
    },
    {
      variant: 'default',
      text: 'Get in touch',
      href: '/contact',
      icon: 'Chat',
    },
  ],
};

// Social Links Configuration
export const socialLinks = [
  {
    name: 'X',
    href: 'https://x.com/ramxcodes',
    icon: <X />,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/ramxcodes/',
    icon: <LinkedIn />,
  },
  {
    name: 'Github',
    href: 'https://github.com/ramxcodes',
    icon: <Github />,
  },
  {
    name: 'Email',
    href: 'mailto:ramxcodes@gmail.com',
    icon: <Mail />,
  },
];
