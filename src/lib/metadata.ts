import { translate, type Language } from "../i18n";
import { publishedTracks } from "../data/tracks";
import { musicTrackPath, isMusicPath } from "./music";
import { publishedProjects } from "../data/projects";
import { site } from "../data/site";
import { localizeProject } from "../i18n/content";
export function metadata(path: string, language: Language = "en") {
  path = path.replace(/\/+$/, "") || "/";
  const track = publishedTracks.find(
    (track) => path === musicTrackPath(track.id),
  );
  const sourceProject = publishedProjects.find(
    (p) => path === `/work/${p.slug}`,
  );
  const project = sourceProject
    ? localizeProject(sourceProject, language)
    : undefined;
  const titles: Record<string, string> = {
    "/": site.title,
    "/work": "All Projects — Archive",
    "/video": "Video Production",
    "/motion": "Motion Design",
    "/motion-vfx": "Motion & 3D / VFX",
    "/3d-vfx": "3D / VFX",
    "/design": "Graphic Design",
    "/about": "About",
    "/music": "Music",
    "/contact": "Contact",
  };
  return {
    title: `${translate(track?.title ?? project?.title ?? titles[path] ?? "Page not found", language)} — ${site.brand}`,
    description: translate(
      (track
        ? translate("Listen to {title} by {artist}.", language)
            .replace("{title}", track.title)
            .replace("{artist}", track.artist ?? site.brand)
        : isMusicPath(path)
          ? "Original music by FULL CORE. From the first idea to the final master."
          : project?.description) ??
        "Independent creator based in {location}. Film, motion design, 3D / VFX, graphic design and music production.",
      language,
    ).replace("{location}", translate(site.location, language)),
  };
}
