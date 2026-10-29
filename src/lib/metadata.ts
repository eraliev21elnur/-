import { publishedProjects } from "../data/projects";
import { site } from "../data/site";
export function metadata(path: string) {
  path = path.replace(/\/+$/, "") || "/";
  const project = publishedProjects.find((p) => path === `/work/${p.slug}`);
  const titles: Record<string, string> = {
    "/": site.title,
    "/work": "All Projects — Archive",
    "/video": "Video Production",
    "/motion": "Motion Design",
    "/3d-vfx": "3D / VFX",
    "/design": "Graphic Design",
    "/about": "About",
    "/contact": "Contact",
  };
  return {
    title: `${project?.title ?? titles[path] ?? "Page not found"} — ${site.brand}`,
    description:
      project?.description ??
      `Independent visual creator based in ${site.location}. Filmmaking, video editing, motion design and commercial content production.`,
  };
}
