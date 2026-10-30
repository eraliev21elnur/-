export type Track = {
  id: string;
  demo?: boolean;
  title: string;
  artist?: string; // Preserve performers and collaborators exactly as credited
  duration?: number; // Duration in seconds, read from the supplied audio
  status: "draft" | "published";
  src: string; // /media/music/your-track.mp3 or a direct HTTPS audio URL
  artwork?: string; // Square cover: /media/music/your-cover.webp (shown in the list and bottom player)
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
// Titles, performers, years and durations come from the owner's supplied MP3 tags.
// The neutral SVG sleeves are replaceable interface placeholders, not release artwork.
export const tracks: Track[] = [
  {
    id: "where-are-u",
    title: "Where are U?",
    artist: "Full Core",
    status: "published",
    src: "/media/music/tracks/where-are-u.mp3",
    artwork: "/media/music/tracks/where-are-u.svg",
    duration: 124.682,
    year: 2023,
  },
  {
    id: "john-galliano",
    title: "John Galliano",
    artist: "Full Core",
    status: "published",
    src: "/media/music/tracks/john-galliano.mp3",
    artwork: "/media/music/tracks/john-galliano.svg",
    duration: 164.256,
  },
  {
    id: "in-your-life",
    title: "In your life",
    artist: "Full Core",
    status: "published",
    src: "/media/music/tracks/in-your-life.mp3",
    artwork: "/media/music/tracks/in-your-life.svg",
    duration: 232.385,
  },
  {
    id: "need-you",
    title: "Need you",
    artist: "Full Core",
    status: "published",
    src: "/media/music/tracks/need-you.mp3",
    artwork: "/media/music/tracks/need-you.svg",
    duration: 84.288,
  },
  {
    id: "old-new-dance",
    title: "OLD NEW DANCE",
    artist: "Full Core, Yann",
    status: "published",
    src: "/media/music/tracks/old-new-dance.mp3",
    artwork: "/media/music/tracks/old-new-dance.svg",
    duration: 112.584,
  },
  {
    id: "overliner",
    title: "Overliner",
    artist: "Full Core",
    status: "published",
    src: "/media/music/tracks/overliner.mp3",
    artwork: "/media/music/tracks/overliner.svg",
    duration: 110.136,
  },
  {
    id: "seeyau",
    title: "SeeЯЮ",
    artist: "Full Core",
    status: "published",
    src: "/media/music/tracks/seeyau.mp3",
    artwork: "/media/music/tracks/seeyau.svg",
    duration: 182.073,
  },
  {
    id: "stoy",
    title: "STOY",
    artist: "Full Core",
    status: "published",
    src: "/media/music/tracks/stoy.mp3",
    artwork: "/media/music/tracks/stoy.svg",
    duration: 128.424,
  },
  {
    id: "vrali",
    title: "Vrali",
    artist: "Full Core",
    status: "published",
    src: "/media/music/tracks/vrali.mp3",
    artwork: "/media/music/tracks/vrali.svg",
    duration: 165.198,
  },
  {
    id: "bowling",
    title: "Боулинг",
    artist: "Full Core",
    status: "published",
    src: "/media/music/tracks/bowling.mp3",
    artwork: "/media/music/tracks/bowling.svg",
    duration: 131.709,
  },
  {
    id: "troops-interlude",
    title: "Troops Interlude",
    artist: "Full Core, 2denimskin",
    status: "published",
    src: "/media/music/tracks/troops-interlude.mp3",
    artwork: "/media/music/tracks/troops-interlude.svg",
    duration: 189.048,
  },
  {
    id: "est-chto-skazat",
    title: "Есть что сказать",
    artist: "Full Core",
    status: "published",
    src: "/media/music/tracks/est-chto-skazat.mp3",
    artwork: "/media/music/tracks/est-chto-skazat.svg",
    duration: 185.496,
  },
  {
    id: "novyy-goat",
    title: "Новый GOAT",
    artist: "Full Core, 2denimskin",
    status: "published",
    src: "/media/music/tracks/novyy-goat.mp3",
    artwork: "/media/music/tracks/novyy-goat.svg",
    duration: 125.388,
  },
  {
    id: "newlightchild-pepel-nahudi",
    title: "шайни - newlightchild - pepel nahudi",
    artist: "Full Core",
    status: "published",
    src: "/media/music/tracks/newlightchild-pepel-nahudi.mp3",
    artwork: "/media/music/tracks/newlightchild-pepel-nahudi.svg",
    duration: 108.852,
  },
  {
    id: "whats-on-your-mind",
    title: "what$0nY0urM1nd",
    artist: "2denimskin, Full Core, picasso",
    status: "published",
    src: "/media/music/tracks/whats-on-your-mind.mp3",
    artwork: "/media/music/tracks/whats-on-your-mind.svg",
    duration: 152.137,
    year: 2025,
  },
  {
    id: "payda",
    title: "PayDa",
    artist: "Full Core",
    status: "published",
    src: "/media/music/tracks/payda.mp3",
    artwork: "/media/music/tracks/payda.svg",
    duration: 178.338,
    year: 2024,
  },
];
export function getPublishedTracks(items: Track[] = tracks): Track[] {
  return items.filter((track) => track.status === "published");
}
export const publishedTracks = getPublishedTracks();

export function validateTracks(items: Track[] = tracks) {
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
    if (track.artwork && !/^(\/(?!\/)|https:\/\/)/.test(track.artwork))
      throw new Error(
        `Track artwork requires a local or HTTPS URL: ${track.id}`,
      );
  }
}
