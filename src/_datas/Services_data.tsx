import { 
  Globe, 
  Layout,
  Server,
  ShieldCheck,
  Gauge,
} from 'lucide-react';

export type Service = {
  id: string;
  name: string;
  detail: string;
  icon: React.ElementType;
};

//export로 내보냄
export const services: Service[] = [
  {
    id: 'web-development',
    name: 'Web Development',
    detail: 'Custom websites and web applications.',
    icon: Globe,
  },
  {
    id: 'frontend-development',
    name: "WordPress Development",
    detail: 'React & Next.js based UI development.',
    icon: Layout,
  },
  {
    id: 'backend-and-api-integration',
    name: 'Backend & API Integration',
    detail: 'APIs, authentication, and data handling.',
    icon: Server,
  },
  {
    id: 'web-security',
    name: 'Web Security',
    detail: 'Security-aware implementation.',
    icon: ShieldCheck,
  },
  {
    id: 'performance-and-maintainability',
    name: 'Performance & Maintainability',
    detail: 'Clean and maintainable code.',
    icon: Gauge,
  },
];