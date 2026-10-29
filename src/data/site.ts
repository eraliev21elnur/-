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
      value: "@fulxcore",
      url: "https://www.instagram.com/fulxcore/",
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
