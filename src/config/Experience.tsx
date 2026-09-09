export interface Technology {
  name: string;
  href: string;
  icon: React.ReactNode;
}

export interface Experience {
  company: string;
  position: string;
  location: string;
  image: string;
  description: string[];
  startDate: string;
  endDate: string;
  website: string;
  x?: string;
  linkedin?: string;
  github?: string;
  technologies: Technology[];
  isCurrent: boolean;
  isBlur?: boolean;
}

export const experiences: Experience[] = [
  {
    isCurrent: false,
    company: 'FOSSEE, IIT Bombay',
    position: 'Software Development Intern',
    location: 'Mumbai, India',
    image: '/assets/logo.png',
    description: [
      'Worked on Linux packaging for the eSim EDA tool.',
    ],
    startDate: 'May 2026',
    endDate: 'July 2026',
    technologies: [],
    website: 'https://fossee.in',
  },
  // TODO: Add more roles here as they become available.
  // Leave this space intentionally empty — do not invent additional entries.
];
