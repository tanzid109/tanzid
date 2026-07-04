export interface Project {
  id: string;
  name: string;
  image: string;
  tagline: string;
  description: string;
  techStack: string[];
  liveUrl: string;
  githubUrl?: string;
  features: string[];
}

export interface Skill {
  name: string;
  level: number; // 0 - 100
  category: "Frontend" | "Backend" | "Tools";
  iconName: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  duration: string;
  description: string[];
  skills: string[];
}
