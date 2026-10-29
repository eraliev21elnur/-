const deploymentUrl =
  import.meta.env?.VITE_SITE_URL ??
  (typeof process !== "undefined" ? process.env.VITE_SITE_URL : undefined);
// All personal information lives here. Leave unknown values empty.
export const site = {
  brand: "FULL CORE",
  publishEmptyDisciplines: false, // Empty pages are preview-only unless deliberately enabled.
  demoMode: true, // Set false to hide ALL temporary sample cases and sample hero.
  title: "Film, Motion & Visual Production",
  tagline: "Visual production.",
  subtitle: "Filmmaking · Motion Design · 3D / VFX · Graphic Design",
  location: "Kazakhstan",
  email: "",
  url: deploymentUrl || "", // e.g. https://your-domain.com — needed for canonical URLs and sitemap
  available: true,
  availability: "Available for opportunities",
  about:
    "I am an independent visual creator from Kazakhstan, working across filmmaking, video editing, motion design and commercial content production. My work combines hands-on production, visual storytelling and post-production.",
  experience:
    "For YEPO, I create commercial video and product visuals. For ergonomic chair shoots on a white cyclorama, I independently organized the scene, set the lighting, filmed and edited the videos.",
  approach:
    "From setting the light to shaping the final cut. I work across the production process to build clear, considered visuals — with an eye for composition, rhythm and detail.",
  socialLinks: [
    { label: "Telegram portfolio", url: "https://t.me/full_core_portfolio" },
  ],
  tools: [
    "After Effects",
    "Premiere Pro",
    "DaVinci Resolve",
    "Photoshop",
    "Blender",
    "Cinema 4D",
    "CapCut",
  ],
  disciplines: [
    "Film & video production",
    "Video editing",
    "Motion graphics",
    "Commercial content",
    "3D & visual effects",
    "Graphic design",
  ],
  portrait: "", // /media/portrait.webp
  cv: "", // /media/full-core-cv.pdf
  showreel: undefined as import("./projects").Media | undefined,
};
