import { site } from "./site";
import { demoProjects } from "./demo";
export type AspectRatio = "16/9" | "9/16" | "1/1" | "4/3";
export type Media = {
  id: string;
  type: "youtube" | "vimeo" | "localVideo" | "image";
  url: string; // YouTube/Vimeo URL or ID; local files start with /media/
  thumbnail?: string;
  aspectRatio?: AspectRatio;
  caption?: string;
  alt?: string;
};
export type Project = {
  id: string;
  demo?: boolean; // Temporary sample; never claim as portfolio work.
  slug: string;
  title: string;
  subtitle?: string;
  category: string;
  tags?: string[];
  year?: number;
  description?: string;
  role?: string[];
  tools?: string[];
  coverImage?: string;
  coverAlt?: string;
  coverAspectRatio?: AspectRatio;
  featured?: boolean;
  featuredOrder?: number;
  status: "draft" | "published";
  media: Media[];
  externalLinks?: { label: string; url: string }[];
  client?: string;
  process?: string;
  credits?: string;
};
// Add categories here. No component changes needed. Empty categories still work.
export const categories = [
  { id: "motion", label: "Motion" },
  { id: "commercial", label: "Commercial" },
  { id: "film", label: "Film" },
  { id: "3d-vfx", label: "3D / VFX" },
  { id: "design", label: "Design" },
];
// These are CONTENT PLANNING DRAFTS, not published projects.
// Replace working titles, add approved media and a cover, then set status: 'published'.
export const projects: Project[] = [
  {
    id: "motion-01",
    slug: "motion-selected",
    title: "Motion Graphics — Selected Work",
    category: "motion",
    status: "draft",
    featured: true,
    featuredOrder: 1,
    coverAspectRatio: "16/9",
    role: ["Motion design", "Animation", "Post-production"],
    media: [],
  },
  {
    id: "chair-01",
    slug: "premium-chair-studio",
    title: "Premium Chair Studio Campaign",
    category: "commercial",
    status: "draft",
    featured: true,
    featuredOrder: 2,
    coverAspectRatio: "9/16",
    description:
      "Studio commercial production focused on ergonomic chairs, clean composition and controlled lighting on a white cyclorama.",
    role: ["Scene setup", "Lighting", "Videography", "Editing"],
    process:
      "I independently organized the shooting scene, set the lighting, filmed the products and edited the videos.",
    client: "YEPO",
    media: [],
  },
  {
    id: "film-01",
    slug: "independent-youtube-film",
    title: "Independent YouTube Film",
    category: "film",
    status: "draft",
    featured: true,
    featuredOrder: 3,
    coverAspectRatio: "16/9",
    role: ["Scriptwriting", "Editing"],
    media: [],
  },
  {
    id: "yepo-01",
    slug: "yepo-commercial-production",
    title: "YEPO — Commercial Video Production",
    category: "commercial",
    status: "draft",
    featured: true,
    featuredOrder: 4,
    client: "YEPO",
    media: [],
  },
  {
    id: "social-01",
    slug: "short-form-commercial",
    title: "Short-form Commercial Content",
    category: "commercial",
    tags: ["Social", "Short-form"],
    status: "draft",
    coverAspectRatio: "9/16",
    media: [],
  },
  {
    id: "design-01",
    slug: "graphic-design-product-visuals",
    title: "Graphic Design & Product Visuals",
    category: "design",
    status: "draft",
    coverAspectRatio: "4/3",
    client: "YEPO",
    media: [],
  },
];
export const publishedProjects = [
  ...projects.filter((p) => p.status === "published"),
  ...(site.demoMode ? demoProjects : []),
];
export const selectedProjects = publishedProjects
  .filter((p) => p.featured)
  .sort((a, b) => (a.featuredOrder ?? 999) - (b.featuredOrder ?? 999));
export const categoryLabel = (id: string) =>
  categories.find((c) => c.id === id)?.label ?? id;
export const filterProjects = (items: Project[], category: string) =>
  category === "all" ? items : items.filter((p) => p.category === category);
