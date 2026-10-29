import type { Project, Media } from "../data/projects";
import type { Language } from "./index";
export function localizeProject(project: Project, language: Language): Project {
  return language === "en"
    ? project
    : { ...project, ...project.translations?.[language] };
}
export function localizeMedia(media: Media, language: Language): Media {
  return language === "en"
    ? media
    : { ...media, ...media.translations?.[language] };
}
