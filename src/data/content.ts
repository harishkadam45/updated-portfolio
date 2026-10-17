import type { IconName } from '@/components/Icon.astro';

export interface Project {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  live?: string;
  featured?: boolean;
  year: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  location?: string;
  points: string[];
}

export interface SkillGroup {
  title: string;
  skills: string[];
  icon: IconName;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  detail?: string;
}

export const projects: Project[] = [
  {
    title: 'India Multiparking',
    description:
      'Website for a Pune-based multi-level car parking company that designs, installs and maintains stack, puzzle, rotary and tower parking systems across India - with product showcases and a multi-step enquiry form with WhatsApp fallback.',
    tags: ['Astro', 'SEO', 'Responsive'],
    live: 'https://www.indiamultiparking.com/',
    featured: true,
    year: '2026',
  },
  {
    title: 'Fix It Home Computer Repair',
    description:
      'Website for a Brisbane on-site computer repair service covering virus removal, PC/Mac/laptop repair, data recovery and network setup - with clear pricing and quick call-to-action buttons.',
    tags: ['Web Development', 'SEO', 'Responsive'],
    live: 'https://www.fixmyhomecomputer.com.au/',
    featured: true,
    year: '2026',
  },
  {
    title: 'Arnav Engineers Website',
    description:
      'Official website for Arnav Engineers, a tool room company in Chikhali (Pune) manufacturing precision machined components, welding fixtures, inspection fixtures, and prototype parts. Fully static with Astro + Tailwind and SEO-optimized.',
    tags: ['Astro', 'Tailwind CSS', 'SEO'],
    github: 'https://github.com/harishkadam45/arnav-engineers-web',
    live: 'https://arnav-engineers-web.vercel.app',
    featured: true,
    year: '2026',
  },
  {
    title: 'Musafir Café Website',
    description:
      'A polished, fully responsive cafÃ© website built with React + Vite - featuring an appetizing menu showcase and a clean, modern layout that loads fast on any device.',
    tags: ['React', 'Vite', 'JavaScript'],
    github: 'https://github.com/harishkadam45/musafir-cafe-website',
    live: 'https://musafir-cafe-website.vercel.app',
    year: '2026',
  },
  {
    title: 'Personal Portfolio',
    description:
      'A modern, SEO-optimized portfolio built with Astro, featuring a custom design system, dark blue/violet theme, and full Lighthouse-friendly performance across all devices.',
    tags: ['Astro', 'TypeScript', 'CSS'],
    github: 'https://github.com/harishkadam45/updated-portfolio',
    live: 'https://updated-portfolio-three-iota.vercel.app',
    featured: true,
    year: '2026',
  },
];

export const experience: ExperienceItem[] = [
  {
    role: 'Freelance Web Developer',
    company: 'Self-employed',
    period: '2025 - Present',
    location: 'Pune, India',
    points: [
      'Design, build, and deploy complete, SEO-optimized business websites end-to-end - from discovery and wireframes through to launch and ongoing maintenance.',
      'Own the full project lifecycle with clients (e.g. Arnav Engineers, Fix It Home Computer Repair), choosing the right stack for each build.',
      'Deliver fast, accessible, responsive sites and ship across GitHub + Vercel while keeping every page optimized for search and Core Web Vitals.',
    ],
  },
  {
    role: 'Frontend Developer Intern',
    company: 'Borgward Technology Pvt Ltd',
    period: '2024 - 2025',
    location: 'Pune, India',
    points: [
      'Built and maintained responsive UI components and pages from mockups, ensuring pixel-perfect, cross-browser layouts.',
      'Collaborated with designers and backend engineers to ship accessible, maintainable features.',
      'Wrote clean code, participated in code reviews and agile ceremonies, and improved page performance.',
    ],
  },
];

export const skills: SkillGroup[] = [
  {
    title: 'Frontend',
    icon: 'code',
    skills: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'Astro'],
  },
  {
    title: 'Backend & Tools',
    icon: 'server',
    skills: ['Node.js', 'Express', 'MongoDB', 'REST APIs', 'Git', 'GitHub', 'Python', 'Vite'],
  },
  {
    title: 'Other',
    icon: 'design',
    skills: ['Responsive Design', 'Accessibility (a11y)', 'SEO', 'Performance', 'Figma', 'UI/UX'],
  },
];

export const education: EducationItem[] = [
  {
    degree: 'M.Sc. Computer Science (MCS)',
    institution: 'Pune University',
    period: '2022 - 2024',
    detail: 'Master of Computer Science',
  },
  {
    degree: 'B.Sc. Computer Science (BCS)',
    institution: 'Pune University',
    period: '2019 - 2022',
    detail: 'Bachelor of Computer Science',
  },
];

