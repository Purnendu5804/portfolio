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
  // Plain-text tech names (from resume) shown when no icon exists.
  techStack?: string[];
  isCurrent: boolean;
  isBlur?: boolean;
}

// Content below is taken from the attached resume — do not invent more.
export const experiences: Experience[] = [
  {
    isCurrent: false,
    company: 'FOSSEE, IIT Bombay',
    position: 'Software Development Intern',
    location: 'Mumbai, India (Remote)',
    // Neutral placeholder — use the FOSSEE/IIT Bombay logo if available.
    image: '/company/fossee-placeholder.svg',
    description: [
      'Collaborated with a mentor and a 3-member team to modernize the Linux packaging pipeline for the eSim application across AppImage and Flatpak formats.',
      'Fixed recurring PyQt5 dependency crashes by bundling a self-contained Python runtime into the AppImage, eliminating the need for users to manually install matching host-side dependencies.',
      'Resolved Qt platform plugin failures across 2 display server protocols (X11 and Wayland) by building automatic detection logic, verified across 4 major Linux distributions (Ubuntu, Kubuntu, Fedora, Linux Mint).',
      'Rebuilt the Flatpak offline install pipeline by fixing broken package sources and pre-validating dependency wheels ahead of build time, enabling fully offline, zero-network installs.',
    ],
    startDate: 'May 2026',
    endDate: 'July 2026',
    technologies: [],
    techStack: ['Linux', 'AppImage', 'Flatpak', 'Python', 'PyQt5'],
    website: 'https://fossee.in',
  },
  // TODO: Add more roles here as they become available.
  // Leave this space intentionally empty — do not invent additional entries.
];
