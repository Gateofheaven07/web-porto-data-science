export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  shortDescription: string;
  category: "machine-learning" | "data-analysis" | "nlp" | "computer-vision" | "time-series";
  categoryLabel: string;
  image: string;
  technologies: string[];
  date: string;
  featured: boolean;
  
  // Detailed content
  problem: string;
  approach: string;
  methodologies: string[];
  results: {
    metric: string;
    value: string;
  }[];
  keyFindings: string[];
  tools: string[];
  dataset?: string;
  datasetSize?: string;
  modelPerformance?: {
    metric: string;
    value: number;
    unit: string;
  }[];
  
  // Links
  github?: string;
  notebook?: string;
  live?: string;
}

export interface FilterState {
  selectedCategory: string | null;
  searchQuery: string;
}
