export interface Testimonial {
  quote: string;
  author: string;
  position: string;
}

export interface ProjectMetrics {
  [key: string]: string;
}

// Main project interface
export interface ClientProject {
  id: string;
  title: string;
  short_desc: string;
  long_desc: string;
  url: string;
  type: string;
  category: string;
  status: string;
  year: string;
  client: string;
  stack: string[];
  features: string[];
  highlights: string[];
  metrics: ProjectMetrics;
  testimonials: Testimonial[];
  isFeatured: boolean;
  image: string;
  gallery: string[];
  challenges: string[];
  solutions: string[];
  results: string[];
}

// For grid card display (simplified version)
export interface ProjectCard {
  id: string;
  title: string;
  short_desc: string;
  type: string;
  category: string;
  status: string;
  year: string;
  client: string;
  stack: string[]; // Limited to first 4 items
  image: string;
  url: string;
  isFeatured: boolean;
}

// For detailed project page with related projects
export interface ProjectDetail extends ClientProject {
  relatedProjects: ClientProject[];
}

// Type definitions for common project types and categories
export type ProjectType =
  | "hospitality"
  | "developer-tools"
  | "aviation"
  | "consulting"
  | "travel"
  | "corporate"
  | "engineering"
  | "transportation";

export type ProjectCategory =
  | "SaaS Platform"
  | "SaaS Starter Kit"
  | "Corporate Website"
  | "Website Template"
  | "Hotel Website"
  | "Booking Platform";

export type ProjectStatus =
  | "Live & Revenue Generating"
  | "Live"
  | "Live Template";

// Array type for the main client work data
export type ClientWork = ClientProject[];
