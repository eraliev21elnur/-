const deploymentUrl =
  import.meta.env?.VITE_SITE_URL ??
  (typeof process !== "undefined" ? process.env.VITE_SITE_URL : undefined);
// All personal information lives here. Leave unknown values empty.
export const site = {
  brand: "FULL CORE",
  name: "Eraliev Elnur",
  aboutTagline: "From the first idea to the final frame.",
  publishEmptyDisciplines: false, // Empty pages are preview-only unless deliberately enabled.
  demoMode: false, // Legacy flag: all temporary sample projects/media have been removed.
  homeCovers: {
    video: "/media/portfolio/obshaga-530.webp",
    "motion-vfx": "/media/portfolio/vash-product.webp",
    design: "/media/portfolio/gta-vi-scene.webp",
    music: "/media/portfolio/where-are-u-artwork.webp",
  } as Record<string, string>,
  title: "Film, Motion & Music Production",
  tagline: "Visuals & sound.",
  subtitle:
    "Filmmaking · Motion Design · 3D / VFX · Graphic Design · Music Production",
  location: "Kazakhstan",
  email: "",
  url: deploymentUrl || "", // e.g. https://your-domain.com — needed for canonical URLs and sitemap
  available: true,
  availability: "Available for opportunities",
  // Age reflects the biography supplied in October 2026; review it when updating the bio.
  birthDate: "2005-10-21",
  about:
    "I’m Eraliev Elnur, an independent visual creator from Kazakhstan and the person behind FULL CORE. I work across video production, editing, motion design, 3D/VFX and graphic design.",
  experience:
    "For YEPO, I create product visuals and commercial content, handling everything from studio lighting and filming to editing and post-production. My experience also includes editing for YouTube creators and Instagram professionals, alongside 3D animation work for rapper LOVV66.",
  creativeBackground:
    "My interest in visual effects started in childhood. What began with watching and exploring videos on YouTube grew into creating my own — and helping other creators bring their ideas to the screen.",
  musicAbout:
    "Music is another part of my creative practice. I write and produce my own tracks, taking them from the initial idea through to mixing and mastering.",
  approach:
    "From setting the light to shaping the final cut. I work across the production process to build clear, considered visuals — with an eye for composition, rhythm and detail.",
  phone: { number: "+77085887585", display: "+7 708 588 75 85" },
  socialLinks: [
    { label: "Telegram", value: "@full_core", url: "https://t.me/full_core" },
    {
      label: "Instagram",
      value: "@fullxcore",
      url: "https://www.instagram.com/fullxcore/",
    },
    {
      label: "YouTube",
      value: "@Full_Core",
      url: "https://www.youtube.com/@Full_Core",
    },
    {
      label: "TikTok",
      value: "@full_core",
      url: "https://www.tiktok.com/@full_core",
    },
    // WhatsApp opens reliably by phone; the supplied handle is displayed as contact information.
    {
      label: "WhatsApp",
      value: "@eraliev_elnur",
      url: "https://wa.me/77085887585",
    },
  ],
  tools: [
    "After Effects",
    "Premiere Pro",
    "DaVinci Resolve",
    "Photoshop",
    "Blender",
    "Cinema 4D",
    "Marvelous Designer",
    "Photocraft",
    "CapCut",
    "FL Studio",
  ],
  disciplines: [
    "Film & video production",
    "Video editing",
    "Motion graphics",
    "Commercial content",
    "3D & visual effects",
    "Graphic design",
    "Music production",
  ],
  portrait: "/media/portrait.webp",
  cv: "", // /media/full-core-cv.pdf
  showreel: undefined as import("./projects").Media | undefined,
};
