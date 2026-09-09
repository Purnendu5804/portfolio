export interface UsesItem {
  label: string;
  name: string;
  link?: string;
}

export interface UsesCategory {
  category: string;
  items: UsesItem[];
}

export const usesData: UsesCategory[] = [
  {
    category: 'Software & Tools',
    items: [
      { label: 'Editor', name: 'Visual Studio Code', link: 'https://code.visualstudio.com/' },
      { label: 'Theme & Font', name: 'JetBrains Mono + Dark Modern', link: 'https://www.jetbrains.com/lp/mono/' },
      { label: 'Terminal', name: 'Zsh / Bash with Linux CLI tools' },
      { label: 'Containerization', name: 'Docker & Docker Compose', link: 'https://www.docker.com/' },
      { label: 'Cloud Infrastructure', name: 'AWS (EC2, S3, IAM, CloudFront, VPC)', link: 'https://aws.amazon.com/' },
      { label: 'Databases', name: 'PostgreSQL, Redis, MongoDB, MySQL' },
      { label: 'API Testing', name: 'Postman', link: 'https://www.postman.com/' },
      { label: 'Version Control', name: 'Git & GitHub', link: 'https://github.com/' },
      { label: 'Browser', name: 'Brave / Chrome' },
    ],
  },
  {
    category: 'Hardware & Workstation',
    items: [
      { label: 'Laptop', name: 'Apple Silicon MacBook / Linux Dual Boot' },
      { label: 'Audio', name: 'High Fidelity Studio Monitor Headphones' },
      { label: 'Input', name: 'Mechanical Keyboard' },
      { label: 'Acoustics', name: 'Acoustic Guitar' },
    ],
  },
];
