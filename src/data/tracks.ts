import { site } from "./site";
import { demoTracks } from "./demoTracks";
export type Track = {
  id: string;
  demo?: boolean;
  title: string;
  status: "draft" | "published";
  src: string; // /media/music/your-track.mp3 or a direct HTTPS audio URL
  artwork?: string;
  year?: number;
  description?: string;
  credits?: string;
  translations?: Partial<
    Record<
      "ru" | "kk",
      { title?: string; description?: string; credits?: string }
    >
  >;
  externalLinks?: { label: string; url: string }[];
};
// Add confirmed original tracks here. No sample songs are presented as FULL CORE music.
export const tracks: Track[] = [];
export function getPublishedTracks(
  items: Track[] = tracks,
  includeDemos = site.demoMode,
): Track[] {
  return [
    ...items.filter((track) => track.status === "published"),
    ...(includeDemos ? demoTracks : []),
  ];
}
export const publishedTracks = getPublishedTracks();

export function validateTracks(
  items: Track[] = [...tracks, ...(site.demoMode ? demoTracks : [])],
) {
  const ids = new Set<string>();
  for (const track of items) {
    if (!track.id || ids.has(track.id))
      throw new Error(`Duplicate or missing track ID: ${track.id}`);
    ids.add(track.id);
    if (track.status !== "published") continue;
    if (!track.title.trim() || !/^(\/(?!\/)|https:\/\/)/.test(track.src))
      throw new Error(
        `Published track requires a title and local or HTTPS audio URL: ${track.id}`,
      );
  }
}
