import { site } from "./site";
import { demoProjects } from "./demo";
export type AspectRatio = "16/9" | "9/16" | "1/1" | "4/3";
export type Media = {
  id: string;
  type: "youtube" | "vimeo" | "localVideo" | "image";
  url: string; // YouTube/Vimeo URL or ID; local files start with /media/
  thumbnail?: string;
  aspectRatio?: AspectRatio;
  translations?: Partial<
    Record<"ru" | "kk", { caption?: string; alt?: string }>
  >;
  caption?: string;
  alt?: string;
};
export type Project = {
  id: string;
  demo?: boolean; // Temporary sample; never claim as portfolio work.
  slug: string;
  title: string;
  translations?: Partial<
    Record<
      "ru" | "kk",
      Partial<
        Pick<
          Project,
          | "title"
          | "subtitle"
          | "description"
          | "role"
          | "process"
          | "credits"
          | "coverAlt"
        >
      >
    >
  >;
  subtitle?: string;
  category: string;
  tags?: string[];
  videoType?: import("./disciplines").VideoType;
  year?: number;
  description?: string;
  role?: string[];
  tools?: string[];
  coverImage?: string;
  coverAlt?: string;
  coverAspectRatio?: AspectRatio;
  featured?: boolean;
  featuredOrder?: number;
  status: "draft" | "published";
  media: Media[];
  externalLinks?: { label: string; url: string }[];
  client?: string;
  process?: string;
  credits?: string;
};
// Add categories here. No component changes needed. Empty categories still work.
export const categories = [
  { id: "motion", label: "Motion" },
  { id: "commercial", label: "Commercial" },
  { id: "film", label: "Film" },
  { id: "3d-vfx", label: "3D / VFX" },
  { id: "design", label: "Design" },
];
// Confirmed projects come first, followed by unpublished content-planning drafts.
// instagram-expert-ad awaits the accessible 02-2.mp4 file (upload exceeded 32 MiB).
export const projects: Project[] = [
  {
    id: "narrative-motion-edit",
    slug: "narrative-editing-2d-animation",
    title: "Narrative Editing & 2D Animation",
    category: "motion",
    status: "published",
    featured: true,
    featuredOrder: 1,
    coverImage: "/media/projects/storytelling-motion/cover.svg",
    coverAlt:
      "Title card for a video editing, 2D animation and illustration project",
    coverAspectRatio: "16/9",
    description:
      "A commissioned video edit with custom 2D animations and illustrations that clarify and support the narration.",
    role: ["Video editing", "2D animation", "Illustration"],
    process:
      "I edited the video and created animations and illustrations to explain key ideas and make the story easier to follow.",
    media: [
      {
        id: "main-film",
        type: "youtube",
        url: "https://www.youtube.com/watch?v=1IZ8-IW16t0",
        thumbnail: "/media/projects/storytelling-motion/cover.svg",
        aspectRatio: "16/9",
      },
    ],
    externalLinks: [
      {
        label: "Watch on YouTube",
        url: "https://www.youtube.com/watch?v=1IZ8-IW16t0",
      },
    ],
    translations: {
      ru: {
        title: "Монтаж с 2D-анимацией и иллюстрациями",
        description:
          "Заказной видеомонтаж с авторской 2D-анимацией и иллюстрациями, которые наглядно дополняют рассказ и помогают лучше понять его смысл.",
        role: ["Видеомонтаж", "2D-анимация", "Иллюстрация"],
        process:
          "Я смонтировал видео и создал анимацию и иллюстрации, чтобы объяснить ключевые идеи и сделать повествование понятнее.",
        coverAlt:
          "Титульная обложка проекта видеомонтажа, 2D-анимации и иллюстрации",
      },
      kk: {
        title: "2D-анимация және иллюстрациямен бейнемонтаж",
        description:
          "Әңгімені көрнекі толықтырып, мағынасын түсінуге көмектесетін авторлық 2D-анимация мен иллюстрациялар қосылған тапсырыстық бейнемонтаж.",
        role: ["Бейнемонтаж", "2D-анимация", "Иллюстрация"],
        process:
          "Негізгі ойларды түсіндіріп, әңгімені ұғынықты ету үшін бейнені монтаждап, анимация мен иллюстрациялар жасадым.",
        coverAlt:
          "Бейнемонтаж, 2D-анимация және иллюстрация жобасының титулдық мұқабасы",
      },
    },
  },
  {
    id: "lovv66-tour",
    slug: "lovv66-concert-tour-visuals",
    title: "LOVV66 — Concert Tour Visuals",
    subtitle: "3D visualization / Two-day deadline",
    category: "3d-vfx",
    status: "published",
    client: "LOVV66",
    coverImage: "/media/projects/lovv66-tour/cover.webp",
    coverAlt: "Frame from the LOVV66 concert tour 3D visualization",
    coverAspectRatio: "16/9",
    description:
      "3D visuals created for Russian artist LOVV66’s concert tour across Russia, delivered within a two-day deadline.",
    role: ["3D animation", "3D visualization"],
    process:
      "The project had a two-day deadline — a particularly tight turnaround for this type of 3D production.",
    media: [
      {
        id: "tour-visual",
        type: "localVideo",
        url: "/media/projects/lovv66-tour/visual.mp4",
        thumbnail: "/media/projects/lovv66-tour/cover.webp",
        aspectRatio: "16/9",
      },
    ],
    translations: {
      ru: {
        title: "LOVV66 — Визуализация для концертного тура",
        subtitle: "3D-визуализация / Дедлайн — два дня",
        description:
          "3D-визуализация для концертного тура российского артиста LOVV66 по России. Проект выполнен в сжатый срок — за два дня.",
        role: ["3D-анимация", "3D-визуализация"],
        process:
          "Дедлайн проекта — два дня: особенно сжатый срок для такого типа 3D-продакшена.",
        coverAlt: "Кадр 3D-визуализации для концертного тура LOVV66",
      },
      kk: {
        title: "LOVV66 — Концерттік тур визуалы",
        subtitle: "3D-визуализация / Екі күндік мерзім",
        description:
          "Ресейлік әртіс LOVV66-ның Ресейдегі концерттік турына жасалған 3D-визуализация. Жоба екі күндік қысқа мерзімде орындалды.",
        role: ["3D-анимация", "3D-визуализация"],
        process:
          "Жобаға екі күн берілді — мұндай 3D-продакшн үшін өте қысқа мерзім.",
        coverAlt: "LOVV66 концерттік турына арналған 3D-визуализация кадры",
      },
    },
  },
  {
    id: "instagram-expert-ad",
    slug: "instagram-ad-filming-editing",
    title: "Instagram Ad — Filming & Editing",
    category: "commercial",
    videoType: "reels-ads",
    status: "draft",
    description:
      "A targeted Instagram advertising video for experts, filmed and fully edited by FULL CORE.",
    role: ["Videography", "Video editing"],
    media: [],
    translations: {
      ru: {
        title: "Instagram-реклама — Съёмка и монтаж",
        description:
          "Ролик для таргетированной рекламы Instagram-экспертов: видеосъёмка и полный монтаж.",
        role: ["Видеосъёмка", "Видеомонтаж"],
      },
      kk: {
        title: "Instagram жарнамасы — Түсірілім және монтаж",
        description:
          "Instagram сарапшыларының таргеттелген жарнамасына арналған бейне: түсірілім және толық монтаж.",
        role: ["Бейнетүсірілім", "Бейнемонтаж"],
      },
    },
  },
  {
    id: "motion-01",
    slug: "motion-selected",
    title: "Motion Graphics — Selected Work",
    category: "motion",
    status: "draft",
    featured: true,
    featuredOrder: 1,
    coverAspectRatio: "16/9",
    role: ["Motion design", "Animation", "Post-production"],
    media: [],
  },
  {
    id: "chair-01",
    slug: "premium-chair-studio",
    videoType: "studio-commercials",
    title: "Premium Chair Studio Campaign",
    category: "commercial",
    status: "draft",
    featured: true,
    featuredOrder: 2,
    coverAspectRatio: "9/16",
    description:
      "Studio commercial production focused on ergonomic chairs, clean composition and controlled lighting on a white cyclorama.",
    role: ["Scene setup", "Lighting", "Videography", "Editing"],
    process:
      "I independently organized the shooting scene, set the lighting, filmed the products and edited the videos.",
    client: "YEPO",
    media: [],
  },
  {
    id: "film-01",
    slug: "independent-youtube-film",
    videoType: "personal-films",
    title: "Independent YouTube Film",
    category: "film",
    status: "draft",
    featured: true,
    featuredOrder: 3,
    coverAspectRatio: "16/9",
    role: ["Scriptwriting", "Editing"],
    media: [],
  },
  {
    id: "yepo-01",
    slug: "yepo-commercial-production",
    videoType: "product-reviews",
    title: "YEPO — Commercial Video Production",
    category: "commercial",
    status: "draft",
    featured: true,
    featuredOrder: 4,
    client: "YEPO",
    media: [],
  },
  {
    id: "social-01",
    slug: "short-form-commercial",
    videoType: "reels-ads",
    title: "Short-form Commercial Content",
    category: "commercial",
    tags: ["Social", "Short-form"],
    status: "draft",
    coverAspectRatio: "9/16",
    media: [],
  },
  {
    id: "design-01",
    slug: "graphic-design-product-visuals",
    title: "Graphic Design & Product Visuals",
    category: "design",
    status: "draft",
    coverAspectRatio: "4/3",
    client: "YEPO",
    media: [],
  },
];
export const publishedProjects = [
  ...projects.filter((p) => p.status === "published"),
  // Once a category has real work, its temporary sample cases retire automatically.
  ...(site.demoMode
    ? demoProjects.filter(
        (sample) =>
          !projects.some(
            (project) =>
              project.status === "published" &&
              project.category === sample.category,
          ),
      )
    : []),
];
export const selectedProjects = publishedProjects
  .filter((p) => p.featured && !p.demo)
  .sort((a, b) => (a.featuredOrder ?? 999) - (b.featuredOrder ?? 999))
  .slice(0, 4);
export const categoryLabel = (id: string) =>
  categories.find((c) => c.id === id)?.label ?? id;
export const filterProjects = (items: Project[], category: string) =>
  category === "all" ? items : items.filter((p) => p.category === category);
