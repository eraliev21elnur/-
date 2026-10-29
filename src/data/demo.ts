import type { Media, Project } from "./projects";
// Temporary visual preview only. These are NOT FULL CORE portfolio credits.
// Disable all sample cases and the sample hero with site.demoMode = false.
export const demoShowreel: Media = {
  id: "demo-reel",
  type: "localVideo",
  url: "/media/demo/motion.mp4",
  thumbnail: "/media/demo/motion.webp",
  aspectRatio: "16/9",
  caption: "Sample motion loop — interface preview, not a FULL CORE showreel.",
};
const notice =
  "Demonstration only. Temporary sample media used to preview the portfolio layout. This is not a FULL CORE project or client commission.";
const stockCredits =
  "Sample photography from Unsplash, used under the Unsplash License. Not photographed by FULL CORE. Source and license links below.";
export const demoProjects: Project[] = [
  {
    id: "demo-motion",
    slug: "demo-form-in-motion",
    title: "Form in motion",
    category: "motion",
    status: "published",
    demo: true,
    featured: true,
    featuredOrder: 1,
    subtitle: "A study in shape, rhythm and cold light.",
    description: notice,
    coverImage: "/media/demo/motion.webp",
    coverAlt:
      "Silver abstract rings against a dark background — sample artwork",
    coverAspectRatio: "16/9",
    media: [
      demoShowreel,
      {
        id: "vertical",
        type: "localVideo",
        url: "/media/demo/vertical.mp4",
        thumbnail: "/media/demo/vertical.webp",
        aspectRatio: "9/16",
        caption: "Vertical sample motion loop.",
      },
    ],
    credits:
      "Procedural SVG artwork and animation created for this website preview. Not presented as portfolio work.",
  },
  {
    id: "demo-commercial",
    slug: "demo-objects-and-light",
    title: "Objects & light",
    category: "design",
    status: "published",
    demo: true,
    featured: true,
    featuredOrder: 2,
    subtitle: "Product imagery / sample gallery",
    description: notice,
    coverImage: "/media/demo/laptop.webp",
    coverAlt: "Sample photograph of an open laptop",
    coverAspectRatio: "4/3",
    media: [
      {
        id: "product",
        type: "image",
        url: "/media/demo/laptop.webp",
        aspectRatio: "4/3",
        alt: "An open laptop on a desk, sample Unsplash photograph",
        caption: "Sample product photograph — Unsplash.",
      },
      {
        id: "scene",
        type: "image",
        url: "/media/demo/interior.webp",
        aspectRatio: "4/3",
        alt: "Office interior, sample Unsplash photograph",
        caption: "Sample environment photograph — Unsplash.",
      },
    ],
    credits: stockCredits,
    externalLinks: [
      {
        label: "Photo source: laptop",
        url: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
      },
      { label: "Unsplash License", url: "https://unsplash.com/license" },
    ],
  },
  {
    id: "demo-film",
    slug: "demo-sintel-film",
    title: "Sintel — playback study",
    category: "film",
    videoType: "personal-films",
    status: "published",
    demo: true,
    featured: true,
    featuredOrder: 4,
    subtitle: "Film player / sample footage",
    description: notice,
    coverImage: "/media/demo/sintel.webp",
    coverAlt: "Frame from the Sintel trailer by Blender Foundation",
    coverAspectRatio: "16/9",
    media: [
      {
        id: "film",
        type: "localVideo",
        url: "/media/demo/sintel-excerpt.mp4",
        thumbnail: "/media/demo/sintel.webp",
        aspectRatio: "16/9",
        caption:
          "12-second excerpt from the Sintel trailer. © Blender Foundation, CC BY 3.0.",
      },
    ],
    credits:
      "Sintel © 2010 Blender Foundation / durian.blender.org. CC BY 3.0. Trailer excerpt trimmed and re-encoded for playback demonstration. No production, editing or authorship credit is claimed by FULL CORE.",
    externalLinks: [
      {
        label: "Sintel / Blender Foundation",
        url: "https://durian.blender.org/",
      },
      {
        label: "Source trailer (W3C)",
        url: "https://media.w3.org/2010/05/sintel/trailer.mp4",
      },
      {
        label: "CC BY 3.0 License",
        url: "https://creativecommons.org/licenses/by/3.0/",
      },
    ],
  },
  {
    id: "demo-design",
    slug: "demo-architectural-lines",
    title: "Architectural lines",
    category: "design",
    status: "published",
    demo: true,
    featured: true,
    featuredOrder: 5,
    subtitle: "Editorial imagery / sample gallery",
    description: notice,
    coverImage: "/media/demo/architecture.webp",
    coverAlt:
      "Low-angle architectural photograph of glass towers — sample imagery",
    coverAspectRatio: "4/3",
    media: [
      {
        id: "architecture",
        type: "image",
        url: "/media/demo/architecture.webp",
        aspectRatio: "4/3",
        alt: "Glass skyscrapers seen from below, sample Unsplash photograph",
        caption: "Sample architecture photograph — Unsplash.",
      },
      {
        id: "interior",
        type: "image",
        url: "/media/demo/interior.webp",
        aspectRatio: "16/9",
        alt: "Office interior in natural light, sample Unsplash photograph",
      },
    ],
    credits: stockCredits,
    externalLinks: [
      { label: "Unsplash License", url: "https://unsplash.com/license" },
    ],
  },
  {
    id: "demo-vertical",
    videoType: "reels-ads",
    slug: "demo-vertical-form",
    title: "Vertical form",
    category: "commercial",
    status: "published",
    demo: true,
    featured: true,
    featuredOrder: 3,
    description: notice,
    coverImage: "/media/demo/vertical.webp",
    coverAlt:
      "Silver abstract form and sample typography in a vertical composition",
    coverAspectRatio: "9/16",
    media: [
      {
        id: "vertical",
        type: "localVideo",
        url: "/media/demo/vertical.mp4",
        thumbnail: "/media/demo/vertical.webp",
        aspectRatio: "9/16",
        caption: "9:16 sample animation, created for layout testing.",
      },
    ],
    credits:
      "Procedural demonstration asset created for this website preview. Not a FULL CORE portfolio credit.",
  },
];
