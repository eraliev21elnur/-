import { translate, type Language } from "../i18n";
import { publishedProjects } from "../data/projects";
import { site } from "../data/site";
export function metadata(path: string, language: Language = "en") {
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
    "/music": "Music",
    "/contact": "Contact",
  };
  return {
    title: `${translate(project?.title ?? titles[path] ?? "Page not found", language)} — ${site.brand}`,
    description: translate(
      (path === "/music"
        ? "Original music by FULL CORE. From the first idea to the final master."
        : project?.description) ??
        "Independent visual creator based in {location}. Filmmaking, video editing, motion design and commercial content production.",
      language,
    ).replace("{location}", translate(site.location, language)),
  };
}
