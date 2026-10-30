const deploymentUrl =
  import.meta.env?.VITE_SITE_URL ??
  (typeof process !== "undefined" ? process.env.VITE_SITE_URL : undefined);
// All personal information lives here. Leave unknown values empty.
export const site = {
  brand: "FULL CORE",
  publishEmptyDisciplines: false, // Empty pages are preview-only unless deliberately enabled.
  demoMode: false, // Legacy flag: all temporary sample projects/media have been removed.
  homeCovers: {
    video: "/media/portfolio/Ddrq_lMufJh.webp",
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
    "I'm a 21-year-old visual creator from Kazakhstan, born on 21 October 2005. My interest in making videos began in childhood, especially with VFX. Years of exploring videos on YouTube led me to start my own channel and create original content.",
  experience:
    "Over the past year, I've focused on product design, visual content and promotion for YEPO, an electronics and ergonomic chair retailer. Before that, I edited videos for YouTube creators, Instagram experts and other clients.",
  creativeBackground:
    "My experience also includes 3D animation and a collaboration with rapper LOVV66. I enjoy taking an idea through the full creative process, from the first concept to the finished piece.",
  musicAbout:
    "Music is another part of my creative practice. I develop my own ideas, compose and produce tracks, and handle the mixing and mastering myself.",
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
  portrait: "", // /media/portrait.webp
  cv: "", // /media/full-core-cv.pdf
  showreel: undefined as import("./projects").Media | undefined,
};
