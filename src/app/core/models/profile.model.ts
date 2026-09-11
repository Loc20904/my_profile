export interface ProfileData {
  name: string;
  title: string;
  tagline: string;
  statusBadge: string;
  summary: string;
  aboutMe: string;
  contacts: {
    email: string;
    phone: string;
    github: string;
    linkedin: string;
    location: string;
  };
  metrics: MetricItem[];
  architectureNodes: ArchitectureNode[];
  mockEndpoints: MockEndpoint[];
  projects: ProjectCaseStudy[];
  skills: TechCategory[];
  timeline: TimelineItem[];
  certifications: CertificationItem[];
}

export interface MetricItem {
  value: string;
  label: string;
  detail: string;
  iconName: string;
}

export interface ArchitectureNode {
  id: string;
  layerName: string;
  title: string;
  tech: string;
  patterns: string[];
  responsibilities: string;
  performanceNote: string;
  status: 'online' | 'ready';
}

export interface MockEndpoint {
  method: 'GET' | 'POST' | 'PUT';
  path: string;
  description: string;
  latencyMs: number;
  statusCode: number;
  curlCommand: string;
  responsePayload: any;
}

export interface ProjectCaseStudy {
  id: string;
  title: string;
  category: string;
  role: string;
  period: string;
  tagline: string;
  overview: string;
  architectureHighlights: string[];
  metrics: { label: string; value: string }[];
  techStack: string[];
  githubUrl?: string;
  featured: boolean;
}

export interface TechCategory {
  category: string;
  description: string;
  items: { name: string; level: 'Proficient' | 'Advanced' | 'Core'; highlight?: boolean }[];
}

export interface TimelineItem {
  period: string;
  organization: string;
  role: string;
  location: string;
  type: 'experience' | 'education';
  achievements: string[];
  badges: string[];
}

export interface CertificationItem {
  name: string;
  issuer: string;
  year: string;
  skills: string[];
}
