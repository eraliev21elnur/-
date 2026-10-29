import { publishedProjects, type Project } from "./projects";
import { site } from "./site";
export type DisciplineId = "video" | "motion" | "3d-vfx" | "design";
export const disciplines: {
  id: DisciplineId;
  nav: string;
  title: string;
  description: string;
  short: string;
}[] = [
  {
    id: "video",
    nav: "Video",
    title: "Video production",
    description:
      "Commercial films, studio production, product reviews, Reels and independent projects.",
    short: "Filming / Editing / Production",
  },
  {
    id: "motion",
    nav: "Motion",
    title: "Motion design",
    description: "2D motion graphics, animation and visual storytelling.",
    short: "Animation / Rhythm / Typography",
  },
  {
    id: "3d-vfx",
    nav: "3D / VFX",
    title: "3D / VFX",
    description: "3D projects, CGI and compositing.",
    short: "CGI / Form / Compositing",
  },
  {
    id: "design",
    nav: "Design",
    title: "Graphic design",
    description: "Advertising visuals, product design and commercial graphics.",
    short: "Images / Layout / Communication",
  },
];
export const videoFilters = [
  { id: "all", label: "All videos" },
  { id: "studio-commercials", label: "Studio commercials" },
  { id: "product-reviews", label: "Product reviews" },
  { id: "reels-ads", label: "Reels & ads" },
  { id: "personal-films", label: "Personal films" },
] as const;
export type VideoType = Exclude<(typeof videoFilters)[number]["id"], "all">;
export function projectDiscipline(project: Project): string {
  return ["commercial", "film", "video"].includes(project.category)
    ? "video"
    : project.category;
}
export const projectsForDiscipline = (id: string) =>
  publishedProjects.filter((p) =>
    id === "motion-vfx"
      ? ["motion", "3d-vfx"].includes(projectDiscipline(p))
      : projectDiscipline(p) === id,
  );
export const videoType = (p: Project): VideoType =>
  p.videoType ??
  (p.category === "film" ? "personal-films" : "studio-commercials");
export function filterVideos(items: Project[], filter: string) {
  return filter === "all"
    ? items
    : items.filter((p) => videoType(p) === filter);
}
export const disciplineVisible = (id: string) =>
  site.demoMode ||
  site.publishEmptyDisciplines ||
  projectsForDiscipline(id).length > 0;
export const navigation = [
  { label: "Home", to: "/" },
  ...disciplines
    .filter((d) => disciplineVisible(d.id))
    .map((d) => ({ label: d.nav, to: `/${d.id}` })),
  { label: "Music", to: "/music" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

// Home groups related disciplines without changing the existing category/case URLs.
export const motionVfx = {
  id: "motion-vfx" as const,
  nav: "Motion & 3D / VFX",
  title: "Motion & 3D / VFX",
  description: "2D animation, 3D, CGI and compositing in one place.",
  short: "Motion / CGI / Compositing",
};
export const homeCategories = [
  disciplines[0],
  motionVfx,
  disciplines[3],
  {
    id: "music",
    nav: "Music",
    title: "Music",
    description: "Original tracks, composition, mixing and mastering.",
    short: "Sound / Production / Mastering",
  },
];
