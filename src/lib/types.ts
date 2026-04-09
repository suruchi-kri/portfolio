export type ProjectCategory =
  | "branding"
  | "social-media-ads"
  | "packaging-design"
  | "web-ui-ux";

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  heroImage: string;
  behanceUrl: string;
  description: string;
  tags: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  avatar?: string;
}

export interface CategoryInfo {
  slug: ProjectCategory;
  label: string;
  description: string;
}
