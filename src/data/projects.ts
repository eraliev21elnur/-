export type AspectRatio = `${number}/${number}`;
export type Media = {
  id: string;
  type: "youtube" | "vimeo" | "instagram" | "localVideo" | "image";
  url: string; // YouTube/Vimeo URL or ID; local files start with /media/
  thumbnail?: string;
  thumbnailFallback?: string;
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
  coverFallback?: string;
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
    id: "full-core-introduction",
    slug: "full-core-introduction",
    title: "FULL CORE — Introduction",
    category: "commercial",
    status: "published",
    description:
      "An introduction to my creative practice, written, filmed and edited by me.",
    coverImage: "/media/portfolio/Ddrq_lMufJh.webp",
    coverAspectRatio: "9/16",
    coverAlt: "FULL CORE — Introduction",
    media: [
      {
        id: "Ddrq_lMufJh",
        type: "instagram",
        url: "https://www.instagram.com/p/Ddrq_lMufJh/",
        thumbnail: "/media/portfolio/Ddrq_lMufJh.webp",
        aspectRatio: "9/16",
      },
    ],
    translations: {
      ru: {
        title: "FULL CORE — Знакомство",
        description:
          "Знакомство с моей творческой работой. Самостоятельно написал сценарий, снял и смонтировал ролик.",
        role: ["Сценарий", "Видеосъёмка", "Видеомонтаж"],
      },
      kk: {
        title: "FULL CORE — Танысу",
        description:
          "Шығармашылығыммен таныстыру. Сценарийін жазып, бейнені өзім түсіріп, монтаждадым.",
        role: ["Сценарий", "Бейнетүсірілім", "Бейнемонтаж"],
      },
    },
    role: ["Scriptwriting", "Videography", "Video editing"],
    tools: ["Sony ZV-E10", "DaVinci Resolve"],
    videoType: "reels-ads",
    featured: true,
    featuredOrder: 1,
  },
  {
    id: "narrative-motion-edit",
    slug: "narrative-editing-2d-animation",
    title: "Crypto Heist — Editing & 2D Animation",
    category: "motion",
    status: "published",
    featured: true,
    featuredOrder: 2,
    coverImage: "https://i.ytimg.com/vi/1IZ8-IW16t0/maxresdefault.jpg",
    coverAlt: "YouTube thumbnail for the Crypto Heist editing project",
    coverAspectRatio: "16/9",
    description:
      "A commissioned video edit with custom 2D animations and illustrations that clarify and support the narration.",
    role: ["Video editing", "2D animation", "Illustration"],
    process:
      "I edited the video and created animations and illustrations to explain key ideas and make the story easier to follow.",
    media: [
      {
        id: "1IZ8-IW16t0",
        type: "youtube",
        url: "https://www.youtube.com/watch?v=1IZ8-IW16t0",
        thumbnail: "https://i.ytimg.com/vi/1IZ8-IW16t0/maxresdefault.jpg",
        thumbnailFallback: "https://i.ytimg.com/vi/1IZ8-IW16t0/hqdefault.jpg",
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
        title: "Crypto Heist — Монтаж и 2D-анимация",
        description:
          "Заказной видеомонтаж с авторской 2D-анимацией и иллюстрациями, которые наглядно дополняют рассказ и помогают лучше понять его смысл.",
        role: ["Видеомонтаж", "2D-анимация", "Иллюстрация"],
        process:
          "Я смонтировал видео и создал анимацию и иллюстрации, чтобы объяснить ключевые идеи и сделать повествование понятнее.",
        coverAlt: "Обложка YouTube-видео Crypto Heist",
      },
      kk: {
        title: "Crypto Heist — Монтаж және 2D-анимация",
        description:
          "Әңгімені көрнекі толықтырып, мағынасын түсінуге көмектесетін авторлық 2D-анимация мен иллюстрациялар қосылған тапсырыстық бейнемонтаж.",
        role: ["Бейнемонтаж", "2D-анимация", "Иллюстрация"],
        process:
          "Негізгі ойларды түсіндіріп, әңгімені ұғынықты ету үшін бейнені монтаждап, анимация мен иллюстрациялар жасадым.",
        coverAlt: "Crypto Heist YouTube бейнесінің мұқабасы",
      },
    },
    coverFallback: "https://i.ytimg.com/vi/1IZ8-IW16t0/hqdefault.jpg",
    tools: ["CapCut"],
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
    tools: ["Blender", "After Effects"],
  },
  {
    id: "vash-product",
    slug: "vash-product",
    title: "Vash Product — Mixed Reality",
    category: "3d-vfx",
    status: "published",
    description:
      "A 3D/VFX study combining live action and computer graphics for a fictional brand.",
    coverImage: "/media/portfolio/vash-product.webp",
    coverAspectRatio: "67/119",
    coverAlt: "Vash Product — Mixed Reality",
    media: [
      {
        id: "vash-product",
        type: "localVideo",
        url: "/media/portfolio/vash-product.mp4",
        thumbnail: "/media/portfolio/vash-product.webp",
        aspectRatio: "67/119",
      },
    ],
    translations: {
      ru: {
        title: "Vash Product — 3D и реальная съёмка",
        description:
          "3D/VFX-проект, совмещающий реальную съёмку и компьютерную графику для вымышленного бренда.",
        role: ["3D-анимация", "Композитинг"],
      },
      kk: {
        title: "Vash Product — 3D және шынайы түсірілім",
        description:
          "Ойдан шығарылған брендке арналған шынайы түсірілім мен компьютерлік графиканы біріктіретін 3D/VFX жоба.",
        role: ["3D-анимация", "Композитинг"],
      },
    },
    role: ["3D animation", "Compositing"],
    tools: ["Blender", "After Effects"],
    featured: true,
    featuredOrder: 3,
  },
  {
    id: "independent-youtube-film",
    slug: "independent-youtube-film",
    title: "I Don’t Want to Be Normal",
    category: "film",
    status: "published",
    description:
      "An original film for my YouTube channel. I developed the idea, wrote the script, filmed and edited the complete video.",
    coverImage: "https://i.ytimg.com/vi/SU5vM3zZ9WA/maxresdefault.jpg",
    coverAspectRatio: "16/9",
    coverAlt: "I Don’t Want to Be Normal",
    media: [
      {
        id: "SU5vM3zZ9WA",
        type: "youtube",
        url: "https://www.youtube.com/watch?v=SU5vM3zZ9WA",
        thumbnail: "https://i.ytimg.com/vi/SU5vM3zZ9WA/maxresdefault.jpg",
        thumbnailFallback: "https://i.ytimg.com/vi/SU5vM3zZ9WA/hqdefault.jpg",
        aspectRatio: "16/9",
      },
    ],
    translations: {
      ru: {
        title: "Не хочу быть нормальным",
        description:
          "Авторское видео для моего YouTube-канала: самостоятельно придумал идею, написал сценарий, снял и полностью смонтировал.",
        role: ["Идея", "Сценарий", "Видеосъёмка", "Видеомонтаж"],
      },
      kk: {
        title: "Қалыпты болғым келмейді",
        description:
          "YouTube арнама арналған авторлық бейне. Идеясын ойлап, сценарийін жазып, толық түсіріп, монтаждадым.",
        role: ["Идея", "Сценарий", "Бейнетүсірілім", "Бейнемонтаж"],
      },
    },
    coverFallback: "https://i.ytimg.com/vi/SU5vM3zZ9WA/hqdefault.jpg",
    role: ["Concept", "Scriptwriting", "Videography", "Video editing"],
    videoType: "personal-films",
    featured: true,
    featuredOrder: 4,
  },
  {
    id: "chair-01",
    slug: "premium-chair-studio",
    title: "YEPO — White Cyclorama Campaign",
    category: "commercial",
    status: "published",
    description:
      "A studio campaign for premium ergonomic chairs, built around controlled lighting, clean composition and a white paper cyclorama.",
    coverImage: "/media/portfolio/Dcl2VgRsbX_.webp",
    coverAspectRatio: "9/16",
    coverAlt: "YEPO — White Cyclorama Campaign",
    media: [
      {
        id: "Dcl2VgRsbX_",
        type: "instagram",
        url: "https://www.instagram.com/p/Dcl2VgRsbX_/",
        thumbnail: "/media/portfolio/Dcl2VgRsbX_.webp",
        aspectRatio: "9/16",
        caption: "YEPO LS-1000",
      },
      {
        id: "DcJJEresebU",
        type: "instagram",
        url: "https://www.instagram.com/p/DcJJEresebU/",
        thumbnail: "/media/portfolio/DcJJEresebU.webp",
        aspectRatio: "9/16",
        caption: "YEPO LS-901",
      },
      {
        id: "Db-6ST6sVZK",
        type: "instagram",
        url: "https://www.instagram.com/p/Db-6ST6sVZK/",
        thumbnail: "/media/portfolio/Db-6ST6sVZK.webp",
        aspectRatio: "9/16",
        caption: "YEPO LS-919",
      },
      {
        id: "Dci7X5Ls9XW",
        type: "instagram",
        url: "https://www.instagram.com/p/Dci7X5Ls9XW/",
        thumbnail: "/media/portfolio/Dci7X5Ls9XW.webp",
        aspectRatio: "9/16",
        caption: "YEPO LS-999",
      },
    ],
    translations: {
      ru: {
        title: "YEPO — Кампания на белой циклораме",
        description:
          "Студийная кампания премиальных эргономичных кресел: контролируемый свет, чистая композиция и белая бумажная циклорама.",
        role: [
          "Идея",
          "Сценарий",
          "Свет",
          "Видеосъёмка",
          "Режиссура",
          "Видеомонтаж",
          "Цветокоррекция",
        ],
        credits: "Озвучка и работа актёра предоставлены другими участниками.",
      },
      kk: {
        title: "YEPO — Ақ циклорамадағы түсірілім",
        description:
          "Премиум эргономикалық креслоларға арналған студиялық науқан: дәл қойылған жарық, таза композиция және ақ қағаз циклорама.",
        role: [
          "Идея",
          "Сценарий",
          "Жарық қою",
          "Бейнетүсірілім",
          "Режиссура",
          "Бейнемонтаж",
          "Түс өңдеу",
        ],
        credits:
          "Дыбыстау мен кадрдағы актерлік жұмысты басқа қатысушылар орындады.",
      },
    },
    role: [
      "Concept",
      "Scriptwriting",
      "Lighting",
      "Videography",
      "Direction",
      "Video editing",
      "Color grading",
    ],
    tools: ["Sony ZV-E10", "DaVinci Resolve"],
    client: "YEPO",
    videoType: "studio-commercials",
    featured: true,
    featuredOrder: 5,
    credits: "Voiceover and on-screen talent provided separately.",
  },
  {
    id: "yandex-station-max",
    slug: "yandex-station-max",
    title: "Yandex Station Max — Test Assignment",
    category: "3d-vfx",
    status: "published",
    description:
      "An unofficial test assignment completed in three days. I modeled every object in Blender, animated the sequence and edited it in DaVinci Resolve.",
    coverImage: "/media/portfolio/yandex-station-max.webp",
    coverAspectRatio: "16/9",
    coverAlt: "Yandex Station Max — Test Assignment",
    media: [
      {
        id: "yandex-station-max",
        type: "localVideo",
        url: "/media/portfolio/yandex-station-max.mp4",
        thumbnail: "/media/portfolio/yandex-station-max.webp",
        aspectRatio: "16/9",
      },
    ],
    translations: {
      ru: {
        title: "Yandex Station Max — Тестовое задание",
        description:
          "Неофициальное тестовое задание за три дня. Все объекты смоделировал и анимировал в Blender, затем смонтировал видео в DaVinci Resolve.",
        role: ["3D-моделирование", "3D-анимация", "Видеомонтаж"],
      },
      kk: {
        title: "Yandex Station Max — Тест тапсырмасы",
        description:
          "Үш күнде орындалған бейресми тест тапсырмасы. Барлық нысанды Blender-де модельдеп, анимациялап, бейнені DaVinci Resolve-та монтаждадым.",
        role: ["3D-модельдеу", "3D-анимация", "Бейнемонтаж"],
      },
    },
    role: ["3D modeling", "3D animation", "Video editing"],
    tools: ["Blender", "DaVinci Resolve"],
  },
  {
    id: "gambling-motion",
    slug: "gambling-motion",
    title: "Gambling — Motion Graphics",
    category: "motion",
    status: "published",
    description:
      "Motion graphics for gambling content, animated from scratch in Adobe After Effects.",
    coverImage: "/media/portfolio/gambling-motion.webp",
    coverAspectRatio: "16/9",
    coverAlt: "Gambling — Motion Graphics",
    media: [
      {
        id: "gambling-motion",
        type: "localVideo",
        url: "/media/portfolio/gambling-motion.mp4",
        thumbnail: "/media/portfolio/gambling-motion.webp",
        aspectRatio: "16/9",
      },
    ],
    translations: {
      ru: {
        title: "Gambling — Моушн-графика",
        description:
          "Моушн-графика для сферы gambling, полностью анимированная с нуля в Adobe After Effects.",
        role: ["Анимация"],
      },
      kk: {
        title: "Gambling — Моушн-графика",
        description:
          "Gambling саласына арналған, Adobe After Effects-те басынан жасалған моушн-графика.",
        role: ["Анимация"],
      },
    },
    role: ["Animation"],
    tools: ["After Effects"],
  },
  {
    id: "make-love-not-war",
    slug: "make-love-not-war",
    title: "Make Love, Not War",
    category: "motion",
    status: "published",
    description:
      "My first 2D motion project: a looping animation created in May 2022 using After Effects.",
    coverImage: "/media/portfolio/make-love-not-war.webp",
    coverAspectRatio: "1/1",
    coverAlt: "Make Love, Not War",
    media: [
      {
        id: "make-love-not-war",
        type: "localVideo",
        url: "/media/portfolio/make-love-not-war.mp4",
        thumbnail: "/media/portfolio/make-love-not-war.webp",
        aspectRatio: "1/1",
      },
    ],
    translations: {
      ru: {
        title: "Make Love, Not War",
        description:
          "Мой первый 2D-моушн-проект: цикличная анимация, созданная в мае 2022 года в After Effects.",
        role: ["Анимация"],
      },
      kk: {
        title: "Make Love, Not War",
        description:
          "Алғашқы 2D моушн жобам: 2022 жылғы мамырда After Effects-те жасалған қайталанатын анимация.",
        role: ["Анимация"],
      },
    },
    role: ["Animation"],
    tools: ["After Effects"],
    year: 2022,
  },
  {
    id: "memecoins-edit",
    slug: "memecoins-edit",
    title: "Memecoins — Dynamic Editing",
    category: "motion",
    status: "published",
    description:
      "A fast-paced YouTube edit about crypto and memecoins, built around dynamic visuals in the desktop version of CapCut.",
    coverImage: "https://i.ytimg.com/vi/jZAG4In4EbI/maxresdefault.jpg",
    coverAspectRatio: "16/9",
    coverAlt: "Memecoins — Dynamic Editing",
    media: [
      {
        id: "jZAG4In4EbI",
        type: "youtube",
        url: "https://www.youtube.com/watch?v=jZAG4In4EbI",
        thumbnail: "https://i.ytimg.com/vi/jZAG4In4EbI/maxresdefault.jpg",
        thumbnailFallback: "https://i.ytimg.com/vi/jZAG4In4EbI/hqdefault.jpg",
        aspectRatio: "16/9",
      },
    ],
    translations: {
      ru: {
        title: "Memecoins — Динамичный монтаж",
        description:
          "Динамичный монтаж YouTube-видео о крипте и мемкоинах с визуализациями в настольной версии CapCut.",
        role: ["Видеомонтаж"],
      },
      kk: {
        title: "Memecoins — Динамикалық монтаж",
        description:
          "Крипто мен мемкоиндер туралы YouTube бейнесінің динамикалық монтажы. Визуалдары CapCut-тың компьютерлік нұсқасында жасалған.",
        role: ["Бейнемонтаж"],
      },
    },
    coverFallback: "https://i.ytimg.com/vi/jZAG4In4EbI/hqdefault.jpg",
    role: ["Video editing"],
    tools: ["CapCut"],
  },
  {
    id: "xrp-edit",
    slug: "xrp-edit",
    title: "XRP — Dynamic Editing",
    category: "motion",
    status: "published",
    description:
      "A complete YouTube edit with dynamic visuals, produced in the desktop version of CapCut for the same client as the memecoins project.",
    coverImage: "https://i.ytimg.com/vi/d1TssDehd5I/maxresdefault.jpg",
    coverAspectRatio: "16/9",
    coverAlt: "XRP — Dynamic Editing",
    media: [
      {
        id: "d1TssDehd5I",
        type: "youtube",
        url: "https://www.youtube.com/watch?v=d1TssDehd5I",
        thumbnail: "https://i.ytimg.com/vi/d1TssDehd5I/maxresdefault.jpg",
        thumbnailFallback: "https://i.ytimg.com/vi/d1TssDehd5I/hqdefault.jpg",
        aspectRatio: "16/9",
      },
    ],
    translations: {
      ru: {
        title: "XRP — Динамичный монтаж",
        description:
          "Полный монтаж YouTube-видео с динамичными визуализациями в настольном CapCut для того же заказчика, что и проект Memecoins.",
        role: ["Видеомонтаж"],
      },
      kk: {
        title: "XRP — Динамикалық монтаж",
        description:
          "Memecoins жобасындағы тапсырыс берушіге CapCut-тың компьютерлік нұсқасында динамикалық визуалдармен толық монтаждалған YouTube бейнесі.",
        role: ["Бейнемонтаж"],
      },
    },
    coverFallback: "https://i.ytimg.com/vi/d1TssDehd5I/hqdefault.jpg",
    role: ["Video editing"],
    tools: ["CapCut"],
  },
  {
    id: "digital-fashion",
    slug: "digital-fashion",
    title: "Vetements × Alpha Industries — Digital Fashion",
    category: "3d-vfx",
    status: "published",
    description:
      "A digital fashion image combining Blender, cloth simulation in Marvelous Designer and image finishing in Photoshop.",
    coverImage: "/media/portfolio/digital-fashion.webp",
    coverAspectRatio: "16/9",
    coverAlt: "Vetements × Alpha Industries — Digital Fashion",
    media: [
      {
        id: "digital-fashion",
        type: "image",
        url: "/media/portfolio/digital-fashion.webp",
        aspectRatio: "16/9",
        alt: "digital fashion",
        translations: {
          ru: {
            alt: "Vetements × Alpha Industries — Цифровая мода",
          },
          kk: {
            alt: "Vetements × Alpha Industries — Цифрлық сән",
          },
        },
      },
    ],
    translations: {
      ru: {
        title: "Vetements × Alpha Industries — Цифровая мода",
        description:
          "Цифровой fashion-визуал: Blender, симуляция ткани в Marvelous Designer и обработка в Photoshop.",
        role: ["3D-моделирование", "Симуляция ткани", "Постобработка"],
      },
      kk: {
        title: "Vetements × Alpha Industries — Цифрлық сән",
        description:
          "Blender, Marvelous Designer-дегі мата симуляциясы және Photoshop өңдеуі біріктірілген цифрлық сән визуалы.",
        role: ["3D-модельдеу", "Мата симуляциясы", "Суретті өңдеу"],
      },
    },
    role: ["3D modeling", "Cloth simulation", "Image finishing"],
    tools: ["Blender", "Marvelous Designer", "Photoshop"],
  },
  {
    id: "the-down-product-art",
    slug: "the-down-product-art",
    title: "The Down — 3D Product Studies",
    category: "3d-vfx",
    status: "published",
    description:
      "Three advertising-style 3D images for a fictional product. Modeling in Blender, scene work in Cinema 4D and finishing in Photoshop; approximately three hours per image.",
    coverImage: "/media/portfolio/product-study-01.webp",
    coverAspectRatio: "4/5",
    coverAlt: "The Down — 3D Product Studies",
    media: [
      {
        id: "product-study-01",
        type: "image",
        url: "/media/portfolio/product-study-01.webp",
        aspectRatio: "4/5",
        alt: "product study 01",
        translations: {
          ru: {
            alt: "The Down — 3D-визуалы продукта",
          },
          kk: {
            alt: "The Down — Өнімнің 3D визуалдары",
          },
        },
      },
      {
        id: "product-study-02",
        type: "image",
        url: "/media/portfolio/product-study-02.webp",
        aspectRatio: "4/5",
        alt: "product study 02",
        translations: {
          ru: {
            alt: "The Down — 3D-визуалы продукта",
          },
          kk: {
            alt: "The Down — Өнімнің 3D визуалдары",
          },
        },
      },
      {
        id: "product-study-03",
        type: "image",
        url: "/media/portfolio/product-study-03.webp",
        aspectRatio: "4/5",
        alt: "product study 03",
        translations: {
          ru: {
            alt: "The Down — 3D-визуалы продукта",
          },
          kk: {
            alt: "The Down — Өнімнің 3D визуалдары",
          },
        },
      },
    ],
    translations: {
      ru: {
        title: "The Down — 3D-визуалы продукта",
        description:
          "Три рекламных 3D-арта вымышленного продукта. Моделирование в Blender, сцены в Cinema 4D и доработка в Photoshop — около трёх часов на каждый арт.",
        role: ["3D-моделирование", "Создание сцены", "Постобработка"],
      },
      kk: {
        title: "The Down — Өнімнің 3D визуалдары",
        description:
          "Ойдан шығарылған өнімге арналған үш жарнамалық 3D арт. Blender-де модельдеу, Cinema 4D-де сахна құру және Photoshop-та өңдеу — әр суретке шамамен үш сағат.",
        role: ["3D-модельдеу", "Сахна құру", "Суретті өңдеу"],
      },
    },
    role: ["3D modeling", "Scene design", "Image finishing"],
    tools: ["Blender", "Cinema 4D", "Photoshop"],
    year: 2022,
  },
  {
    id: "gta-vi-environment",
    slug: "gta-vi-environment",
    title: "GTA VI — Environment Study",
    category: "design",
    status: "published",
    description:
      "A quick 3D environment study focused on capturing the atmosphere of GTA VI, created in Blender and finished in Photoshop.",
    coverImage: "/media/portfolio/gta-vi-scene.webp",
    coverAspectRatio: "16/9",
    coverAlt: "GTA VI — Environment Study",
    media: [
      {
        id: "gta-vi-scene",
        type: "image",
        url: "/media/portfolio/gta-vi-scene.webp",
        aspectRatio: "16/9",
        alt: "gta vi scene",
        translations: {
          ru: {
            alt: "GTA VI — Исследование окружения",
          },
          kk: {
            alt: "GTA VI — Орта этюді",
          },
        },
      },
    ],
    translations: {
      ru: {
        title: "GTA VI — Исследование окружения",
        description:
          "Быстрый 3D-этюд окружения с акцентом на атмосферу GTA VI. Создан в Blender и доработан в Photoshop.",
        role: ["Создание сцены", "Постобработка"],
      },
      kk: {
        title: "GTA VI — Орта этюді",
        description:
          "GTA VI атмосферасын жеткізуге бағытталған қысқа 3D орта этюді. Blender-де жасалып, Photoshop-та өңделген.",
        role: ["Сахна құру", "Суретті өңдеу"],
      },
    },
    role: ["Scene design", "Image finishing"],
    tools: ["Blender", "Photoshop"],
  },
  {
    id: "where-are-u-cover-art",
    slug: "where-are-u-cover-art",
    title: "Where are U? — Cover Art",
    category: "design",
    status: "published",
    description:
      "Cover art for my track Where are U? and my first anime-inspired 3D visualization, created in Blender and Photoshop.",
    coverImage: "/media/portfolio/where-are-u-artwork.webp",
    coverAspectRatio: "1/1",
    coverAlt: "Where are U? — Cover Art",
    media: [
      {
        id: "where-are-u-artwork",
        type: "image",
        url: "/media/portfolio/where-are-u-artwork.webp",
        aspectRatio: "1/1",
        alt: "where are u artwork",
        translations: {
          ru: {
            alt: "Where are U? — Обложка трека",
          },
          kk: {
            alt: "Where are U? — Трек мұқабасы",
          },
        },
      },
    ],
    translations: {
      ru: {
        title: "Where are U? — Обложка трека",
        description:
          "Обложка моего трека Where are U? и моя первая 3D-визуализация в стиле аниме, созданная в Blender и Photoshop.",
        role: ["3D-моделирование", "Графический дизайн"],
      },
      kk: {
        title: "Where are U? — Трек мұқабасы",
        description:
          "Where are U? трегімнің мұқабасы және аниме стиліндегі алғашқы 3D-визуализациям. Blender мен Photoshop-та жасалған.",
        role: ["3D-модельдеу", "Графикалық дизайн"],
      },
    },
    role: ["3D modeling", "Graphic design"],
    tools: ["Blender", "Photoshop"],
  },
  {
    id: "design-01",
    slug: "graphic-design-product-visuals",
    title: "YEPO — Product Visuals",
    category: "design",
    status: "published",
    description:
      "Product listing graphics for YEPO, developed from the initial visual concept using Photoshop and Photocraft.",
    coverImage: "/media/portfolio/yepo-product-00.webp",
    coverAspectRatio: "640/413",
    coverAlt: "YEPO — Product Visuals",
    media: [
      {
        id: "product-0",
        type: "image",
        url: "/media/portfolio/yepo-product-00.webp",
        alt: "YEPO Primebook 15 product listing visual",
        caption: "YEPO Primebook 15",
        aspectRatio: "640/413",
        translations: {
          ru: {
            alt: "YEPO — Визуалы товаров",
          },
          kk: {
            alt: "YEPO — Өнім визуалдары",
          },
        },
      },
      {
        id: "product-1",
        type: "image",
        url: "/media/portfolio/yepo-product-01.webp",
        alt: "YEPO A95 product listing visual",
        caption: "YEPO A95",
        aspectRatio: "640/387",
        translations: {
          ru: {
            alt: "YEPO — Визуалы товаров",
          },
          kk: {
            alt: "YEPO — Өнім визуалдары",
          },
        },
      },
      {
        id: "product-2",
        type: "image",
        url: "/media/portfolio/yepo-product-02.webp",
        alt: "YEPO WM13 product listing visual",
        caption: "YEPO WM13",
        aspectRatio: "1/1",
        translations: {
          ru: {
            alt: "YEPO — Визуалы товаров",
          },
          kk: {
            alt: "YEPO — Өнім визуалдары",
          },
        },
      },
      {
        id: "product-3",
        type: "image",
        url: "/media/portfolio/yepo-product-03.webp",
        alt: "YEPO LS-919 / Grey product listing visual",
        caption: "YEPO LS-919 / Grey",
        aspectRatio: "1/1",
        translations: {
          ru: {
            alt: "YEPO — Визуалы товаров",
          },
          kk: {
            alt: "YEPO — Өнім визуалдары",
          },
        },
      },
      {
        id: "product-4",
        type: "image",
        url: "/media/portfolio/yepo-product-04.webp",
        alt: "YEPO Baby Travel product listing visual",
        caption: "YEPO Baby Travel",
        aspectRatio: "1/1",
        translations: {
          ru: {
            alt: "YEPO — Визуалы товаров",
          },
          kk: {
            alt: "YEPO — Өнім визуалдары",
          },
        },
      },
      {
        id: "product-5",
        type: "image",
        url: "/media/portfolio/yepo-product-05.webp",
        alt: "YEPO LS-919 / Black product listing visual",
        caption: "YEPO LS-919 / Black",
        aspectRatio: "1/1",
        translations: {
          ru: {
            alt: "YEPO — Визуалы товаров",
          },
          kk: {
            alt: "YEPO — Өнім визуалдары",
          },
        },
      },
      {
        id: "product-6",
        type: "image",
        url: "/media/portfolio/yepo-product-06.webp",
        alt: "YEPO LS-401 product listing visual",
        caption: "YEPO LS-401",
        aspectRatio: "1/1",
        translations: {
          ru: {
            alt: "YEPO — Визуалы товаров",
          },
          kk: {
            alt: "YEPO — Өнім визуалдары",
          },
        },
      },
      {
        id: "product-7",
        type: "image",
        url: "/media/portfolio/yepo-product-07.webp",
        alt: "YEPO LS-901 / Grey product listing visual",
        caption: "YEPO LS-901 / Grey",
        aspectRatio: "1/1",
        translations: {
          ru: {
            alt: "YEPO — Визуалы товаров",
          },
          kk: {
            alt: "YEPO — Өнім визуалдары",
          },
        },
      },
      {
        id: "product-8",
        type: "image",
        url: "/media/portfolio/yepo-product-08.webp",
        alt: "YEPO Pulse 2 product listing visual",
        caption: "YEPO Pulse 2",
        aspectRatio: "1/1",
        translations: {
          ru: {
            alt: "YEPO — Визуалы товаров",
          },
          kk: {
            alt: "YEPO — Өнім визуалдары",
          },
        },
      },
      {
        id: "product-9",
        type: "image",
        url: "/media/portfolio/yepo-product-09.webp",
        alt: "YEPO LS-901 / Black product listing visual",
        caption: "YEPO LS-901 / Black",
        aspectRatio: "1/1",
        translations: {
          ru: {
            alt: "YEPO — Визуалы товаров",
          },
          kk: {
            alt: "YEPO — Өнім визуалдары",
          },
        },
      },
      {
        id: "product-10",
        type: "image",
        url: "/media/portfolio/yepo-product-10.webp",
        alt: "YEPO Primebook 17 product listing visual",
        caption: "YEPO Primebook 17",
        aspectRatio: "1273/1080",
        translations: {
          ru: {
            alt: "YEPO — Визуалы товаров",
          },
          kk: {
            alt: "YEPO — Өнім визуалдары",
          },
        },
      },
      {
        id: "product-11",
        type: "image",
        url: "/media/portfolio/yepo-product-11.webp",
        alt: "YEPO A77 product listing visual",
        caption: "YEPO A77",
        aspectRatio: "577/540",
        translations: {
          ru: {
            alt: "YEPO — Визуалы товаров",
          },
          kk: {
            alt: "YEPO — Өнім визуалдары",
          },
        },
      },
      {
        id: "product-12",
        type: "image",
        url: "/media/portfolio/yepo-product-12.webp",
        alt: "YEPO LS-999 product listing visual",
        caption: "YEPO LS-999",
        aspectRatio: "1/1",
        translations: {
          ru: {
            alt: "YEPO — Визуалы товаров",
          },
          kk: {
            alt: "YEPO — Өнім визуалдары",
          },
        },
      },
    ],
    translations: {
      ru: {
        title: "YEPO — Визуалы товаров",
        description:
          "Карточки товаров YEPO: самостоятельно разработанные идеи и визуалы, созданные в Photoshop и Photocraft.",
        role: ["Идея", "Графический дизайн"],
      },
      kk: {
        title: "YEPO — Өнім визуалдары",
        description:
          "YEPO өнім карточкалары: Photoshop пен Photocraft-та өзім ойлап, жасаған идеялар мен визуалдар.",
        role: ["Идея", "Графикалық дизайн"],
      },
    },
    role: ["Concept", "Graphic design"],
    tools: ["Photoshop", "Photocraft"],
    client: "YEPO",
    externalLinks: [
      {
        label: "YEPO Primebook 15",
        url: "https://kaspi.kz/shop/p/yepo-primebook-15-15-6-intel-core-i5-1030g7-16-gb-ssd-512-gb-iris-plus-win-11-pro-primebook-15-seryi-164706498/",
      },
      {
        label: "YEPO A95",
        url: "https://kaspi.kz/shop/p/yepo-a95-15-6-16-gb-ssd-512-gb-win-11-a95-112611919/",
      },
      {
        label: "YEPO WM13",
        url: "https://kaspi.kz/shop/p/mikrofon-yepo-wm13-chernyi-172911858/?c=591010000&m=18349113&ms=true",
      },
      {
        label: "YEPO LS-919 / Grey",
        url: "https://kaspi.kz/shop/p/komp-juternoe-kreslo-yepo-ls-919-seryi-136112165/?c=591010000&m=18349113&ms=true",
      },
      {
        label: "YEPO Baby Travel",
        url: "https://kaspi.kz/shop/p/koljaska-progulochnaja-yepo-baby-travel-seryi-168998940/?c=591010000&m=18349113&ms=true",
      },
      {
        label: "YEPO LS-919 / Black",
        url: "https://kaspi.kz/shop/p/komp-juternoe-kreslo-yepo-ls-919-chernyi-133313460/?c=591010000&m=18349113&ms=true",
      },
      {
        label: "YEPO LS-401",
        url: "https://kaspi.kz/shop/p/ofisnoe-kreslo-yepo-ls-401-chernyi-167629490/?c=591010000&m=18349113&ms=true",
      },
      {
        label: "YEPO LS-901 / Grey",
        url: "https://kaspi.kz/shop/p/ofisnoe-kreslo-yepo-ls-901-seryi-167370785/?c=591010000&m=18349113&ms=true",
      },
      {
        label: "YEPO Pulse 2",
        url: "https://kaspi.kz/shop/p/portativnaja-kolonka-yepo-pulse-2-chernyi-143104336/?c=591010000&m=18349113&ms=true",
      },
      {
        label: "YEPO LS-901 / Black",
        url: "https://kaspi.kz/shop/p/ofisnoe-kreslo-yepo-ls-901-chernyi-167370781/?c=591010000&m=18349113&ms=true",
      },
      {
        label: "YEPO Primebook 17",
        url: "https://kaspi.kz/shop/p/yepo-primebook-17-15-6-intel-core-i7-5500u-8-gb-ssd-512-gb-hd-graphics-win-11-pro-primebook-17-seryi-182361242/?c=591010000&m=18349113&ms=true",
      },
      {
        label: "YEPO A77",
        url: "https://kaspi.kz/shop/p/yepo-a77-15-6-intel-core-i7-6500u-16-gb-ssd-512-gb-hd-graphics-win-11-pro-a77-seryi-182359355/?c=591010000&m=18349113&ms=true",
      },
      {
        label: "YEPO LS-999",
        url: "https://kaspi.kz/shop/p/ofisnoe-kreslo-yepo-ls-999-seryi-168961304/?c=591010000&m=18349113&ms=true",
      },
    ],
  },
  {
    id: "university-short-film",
    slug: "university-short-film",
    title: "Avtomatchiki — University Film",
    category: "film",
    status: "published",
    description:
      "A short film for the university’s KIPI department, filmed on an iPhone and edited in DaVinci Resolve within one day.",
    coverImage: "/media/portfolio/university-short-film.webp",
    coverAspectRatio: "16/9",
    coverAlt: "Avtomatchiki — University Film",
    media: [
      {
        id: "university-short-film",
        type: "localVideo",
        url: "/media/portfolio/university-short-film.mp4",
        thumbnail: "/media/portfolio/university-short-film.webp",
        aspectRatio: "16/9",
      },
    ],
    translations: {
      ru: {
        title: "Автоматчики — Университетский фильм",
        description:
          "Короткий фильм для университетской кафедры КИПиА, самостоятельно снятый на iPhone и смонтированный в DaVinci Resolve за сутки.",
        role: ["Видеосъёмка", "Видеомонтаж"],
      },
      kk: {
        title: "Автоматчики — Университеттік фильм",
        description:
          "Университеттің KIPI кафедрасына бір тәулікте iPhone-ға түсіріп, DaVinci Resolve-та монтаждаған қысқа фильм.",
        role: ["Бейнетүсірілім", "Бейнемонтаж"],
      },
    },
    role: ["Videography", "Video editing"],
    tools: ["iPhone", "DaVinci Resolve"],
    videoType: "personal-films",
  },
  {
    id: "obshaga-530",
    slug: "obshaga-530",
    title: "Obshaga 530 — Room Study",
    category: "film",
    status: "published",
    description:
      "An early cinematic experiment with the iPhone 15 Pro camera and on-phone editing, made while living in a university dormitory.",
    coverImage: "/media/portfolio/obshaga-530.webp",
    coverAspectRatio: "40/17",
    coverAlt: "Obshaga 530 — Room Study",
    media: [
      {
        id: "obshaga-530",
        type: "localVideo",
        url: "/media/portfolio/obshaga-530.mp4",
        thumbnail: "/media/portfolio/obshaga-530.webp",
        aspectRatio: "40/17",
      },
    ],
    translations: {
      ru: {
        title: "Общага 530 — Этюд комнаты",
        description:
          "Первый кинематографичный эксперимент с камерой iPhone 15 Pro и монтажом на телефоне, снятый во время жизни в университетском общежитии.",
        role: ["Видеосъёмка", "Видеомонтаж"],
      },
      kk: {
        title: "Жатақхана 530 — Бөлме этюді",
        description:
          "Университет жатақханасында тұрған кезде iPhone 15 Pro камерасы мен телефондағы монтажды сынап жасаған алғашқы кинематографиялық тәжірибе.",
        role: ["Бейнетүсірілім", "Бейнемонтаж"],
      },
    },
    role: ["Videography", "Video editing"],
    tools: ["iPhone 15 Pro"],
    videoType: "personal-films",
  },
  {
    id: "yepo-a95",
    slug: "yepo-a95",
    title: "YEPO A95",
    category: "commercial",
    status: "published",
    description:
      "A product video produced through setup, lighting, filming, on-camera presentation and editing.",
    coverImage: "https://i.ytimg.com/vi/M7ozuZYy2C4/maxresdefault.jpg",
    coverAspectRatio: "16/9",
    coverAlt: "YEPO A95",
    media: [
      {
        id: "M7ozuZYy2C4",
        type: "youtube",
        url: "https://www.youtube.com/watch?v=M7ozuZYy2C4",
        thumbnail: "https://i.ytimg.com/vi/M7ozuZYy2C4/maxresdefault.jpg",
        thumbnailFallback: "https://i.ytimg.com/vi/M7ozuZYy2C4/hqdefault.jpg",
        aspectRatio: "16/9",
      },
    ],
    translations: {
      ru: {
        title: "YEPO A95",
        description:
          "Самостоятельная подготовка сцены, свет, съёмка, работа в кадре и монтаж продуктового видео.",
        role: [
          "Сценарий",
          "Свет",
          "Видеосъёмка",
          "Работа в кадре",
          "Видеомонтаж",
        ],
      },
      kk: {
        title: "YEPO A95",
        description:
          "Өнім бейнесін өзім дайындап, жарық қойып, түсіріп, кадрда таныстырып, монтаждадым.",
        role: [
          "Сценарий",
          "Жарық қою",
          "Бейнетүсірілім",
          "Кадрда таныстыру",
          "Бейнемонтаж",
        ],
      },
    },
    coverFallback: "https://i.ytimg.com/vi/M7ozuZYy2C4/hqdefault.jpg",
    role: [
      "Scriptwriting",
      "Lighting",
      "Videography",
      "On-screen presentation",
      "Video editing",
    ],
    tools: ["Sony ZV-E10", "DaVinci Resolve"],
    client: "YEPO",
    videoType: "product-reviews",
  },
  {
    id: "yepo-babytravel",
    slug: "yepo-babytravel",
    title: "YEPO Babytravel",
    category: "commercial",
    status: "published",
    description:
      "A product review edited from factory-supplied footage, with voiceover added in DaVinci Resolve.",
    coverImage: "https://i.ytimg.com/vi/TLE_2dnU0-o/maxresdefault.jpg",
    coverAspectRatio: "16/9",
    coverAlt: "YEPO Babytravel",
    media: [
      {
        id: "TLE_2dnU0-o",
        type: "youtube",
        url: "https://www.youtube.com/watch?v=TLE_2dnU0-o",
        thumbnail: "https://i.ytimg.com/vi/TLE_2dnU0-o/maxresdefault.jpg",
        thumbnailFallback: "https://i.ytimg.com/vi/TLE_2dnU0-o/hqdefault.jpg",
        aspectRatio: "16/9",
      },
    ],
    translations: {
      ru: {
        title: "YEPO Babytravel",
        description:
          "Обзор на основе видео, предоставленного заводом: монтаж и добавление озвучки в DaVinci Resolve.",
        role: ["Видеомонтаж", "Работа с озвучкой"],
      },
      kk: {
        title: "YEPO Babytravel",
        description:
          "Зауыт ұсынған бейнематериалдан DaVinci Resolve-та монтаждалып, дыбыстау қосылған өнім шолуы.",
        role: ["Бейнемонтаж", "Дыбыстауды қосу"],
      },
    },
    coverFallback: "https://i.ytimg.com/vi/TLE_2dnU0-o/hqdefault.jpg",
    role: ["Video editing", "Voiceover integration"],
    tools: ["DaVinci Resolve"],
    client: "YEPO",
    videoType: "product-reviews",
  },
  {
    id: "yepo-ls-1000-review",
    slug: "yepo-ls-1000-review",
    title: "YEPO LS-1000",
    category: "commercial",
    status: "published",
    description:
      "A product video produced through setup, lighting, filming, on-camera presentation and editing.",
    coverImage: "https://i.ytimg.com/vi/LbOZ2MkeqKE/maxresdefault.jpg",
    coverAspectRatio: "16/9",
    coverAlt: "YEPO LS-1000",
    media: [
      {
        id: "LbOZ2MkeqKE",
        type: "youtube",
        url: "https://www.youtube.com/watch?v=LbOZ2MkeqKE",
        thumbnail: "https://i.ytimg.com/vi/LbOZ2MkeqKE/maxresdefault.jpg",
        thumbnailFallback: "https://i.ytimg.com/vi/LbOZ2MkeqKE/hqdefault.jpg",
        aspectRatio: "16/9",
      },
    ],
    translations: {
      ru: {
        title: "YEPO LS-1000",
        description:
          "Самостоятельная подготовка сцены, свет, съёмка, работа в кадре и монтаж продуктового видео.",
        role: [
          "Сценарий",
          "Свет",
          "Видеосъёмка",
          "Работа в кадре",
          "Видеомонтаж",
        ],
      },
      kk: {
        title: "YEPO LS-1000",
        description:
          "Өнім бейнесін өзім дайындап, жарық қойып, түсіріп, кадрда таныстырып, монтаждадым.",
        role: [
          "Сценарий",
          "Жарық қою",
          "Бейнетүсірілім",
          "Кадрда таныстыру",
          "Бейнемонтаж",
        ],
      },
    },
    coverFallback: "https://i.ytimg.com/vi/LbOZ2MkeqKE/hqdefault.jpg",
    role: [
      "Scriptwriting",
      "Lighting",
      "Videography",
      "On-screen presentation",
      "Video editing",
    ],
    tools: ["Sony ZV-E10", "DaVinci Resolve"],
    client: "YEPO",
    videoType: "product-reviews",
  },
  {
    id: "yepo-ls-500",
    slug: "yepo-ls-500",
    title: "YEPO LS-500",
    category: "commercial",
    status: "published",
    description:
      "A product video produced through setup, lighting, filming, on-camera presentation and editing.",
    coverImage: "https://i.ytimg.com/vi/5pHkuutTrcw/maxresdefault.jpg",
    coverAspectRatio: "16/9",
    coverAlt: "YEPO LS-500",
    media: [
      {
        id: "5pHkuutTrcw",
        type: "youtube",
        url: "https://www.youtube.com/watch?v=5pHkuutTrcw",
        thumbnail: "https://i.ytimg.com/vi/5pHkuutTrcw/maxresdefault.jpg",
        thumbnailFallback: "https://i.ytimg.com/vi/5pHkuutTrcw/hqdefault.jpg",
        aspectRatio: "16/9",
      },
    ],
    translations: {
      ru: {
        title: "YEPO LS-500",
        description:
          "Самостоятельная подготовка сцены, свет, съёмка, работа в кадре и монтаж продуктового видео.",
        role: [
          "Сценарий",
          "Свет",
          "Видеосъёмка",
          "Работа в кадре",
          "Видеомонтаж",
        ],
      },
      kk: {
        title: "YEPO LS-500",
        description:
          "Өнім бейнесін өзім дайындап, жарық қойып, түсіріп, кадрда таныстырып, монтаждадым.",
        role: [
          "Сценарий",
          "Жарық қою",
          "Бейнетүсірілім",
          "Кадрда таныстыру",
          "Бейнемонтаж",
        ],
      },
    },
    coverFallback: "https://i.ytimg.com/vi/5pHkuutTrcw/hqdefault.jpg",
    role: [
      "Scriptwriting",
      "Lighting",
      "Videography",
      "On-screen presentation",
      "Video editing",
    ],
    tools: ["Sony ZV-E10", "DaVinci Resolve"],
    client: "YEPO",
    videoType: "product-reviews",
  },
  {
    id: "yepo-ls-901-instructions",
    slug: "yepo-ls-901-instructions",
    title: "YEPO LS-901 — Assembly Guide",
    category: "commercial",
    status: "published",
    description:
      "A product video produced through setup, lighting, filming, on-camera presentation and editing.",
    coverImage: "https://i.ytimg.com/vi/bo7YU5okpRY/maxresdefault.jpg",
    coverAspectRatio: "16/9",
    coverAlt: "YEPO LS-901 — Assembly Guide",
    media: [
      {
        id: "bo7YU5okpRY",
        type: "youtube",
        url: "https://www.youtube.com/watch?v=bo7YU5okpRY",
        thumbnail: "https://i.ytimg.com/vi/bo7YU5okpRY/maxresdefault.jpg",
        thumbnailFallback: "https://i.ytimg.com/vi/bo7YU5okpRY/hqdefault.jpg",
        aspectRatio: "16/9",
      },
    ],
    translations: {
      ru: {
        title: "YEPO LS-901 — Assembly Guide",
        description:
          "Самостоятельная подготовка сцены, свет, съёмка, работа в кадре и монтаж продуктового видео.",
        role: ["Свет", "Видеосъёмка", "Работа в кадре", "Видеомонтаж"],
      },
      kk: {
        title: "YEPO LS-901 — Assembly Guide",
        description:
          "Өнім бейнесін өзім дайындап, жарық қойып, түсіріп, кадрда таныстырып, монтаждадым.",
        role: [
          "Жарық қою",
          "Бейнетүсірілім",
          "Кадрда таныстыру",
          "Бейнемонтаж",
        ],
      },
    },
    coverFallback: "https://i.ytimg.com/vi/bo7YU5okpRY/hqdefault.jpg",
    role: [
      "Lighting",
      "Videography",
      "On-screen presentation",
      "Video editing",
    ],
    tools: ["Sony ZV-E10", "DaVinci Resolve"],
    client: "YEPO",
    videoType: "product-reviews",
  },
  {
    id: "yepo-ls-901-review",
    slug: "yepo-ls-901-review",
    title: "YEPO LS-901",
    category: "commercial",
    status: "published",
    description:
      "A product video produced through setup, lighting, filming, on-camera presentation and editing.",
    coverImage: "https://i.ytimg.com/vi/zkK_pywpr6I/maxresdefault.jpg",
    coverAspectRatio: "16/9",
    coverAlt: "YEPO LS-901",
    media: [
      {
        id: "zkK_pywpr6I",
        type: "youtube",
        url: "https://www.youtube.com/watch?v=zkK_pywpr6I",
        thumbnail: "https://i.ytimg.com/vi/zkK_pywpr6I/maxresdefault.jpg",
        thumbnailFallback: "https://i.ytimg.com/vi/zkK_pywpr6I/hqdefault.jpg",
        aspectRatio: "16/9",
      },
    ],
    translations: {
      ru: {
        title: "YEPO LS-901",
        description:
          "Самостоятельная подготовка сцены, свет, съёмка, работа в кадре и монтаж продуктового видео.",
        role: [
          "Сценарий",
          "Свет",
          "Видеосъёмка",
          "Работа в кадре",
          "Видеомонтаж",
        ],
      },
      kk: {
        title: "YEPO LS-901",
        description:
          "Өнім бейнесін өзім дайындап, жарық қойып, түсіріп, кадрда таныстырып, монтаждадым.",
        role: [
          "Сценарий",
          "Жарық қою",
          "Бейнетүсірілім",
          "Кадрда таныстыру",
          "Бейнемонтаж",
        ],
      },
    },
    coverFallback: "https://i.ytimg.com/vi/zkK_pywpr6I/hqdefault.jpg",
    role: [
      "Scriptwriting",
      "Lighting",
      "Videography",
      "On-screen presentation",
      "Video editing",
    ],
    tools: ["Sony ZV-E10", "DaVinci Resolve"],
    client: "YEPO",
    videoType: "product-reviews",
  },
  {
    id: "yepo-primebook-15",
    slug: "yepo-primebook-15",
    title: "YEPO Primebook 15",
    category: "commercial",
    status: "published",
    description:
      "A product video produced through setup, lighting, filming, on-camera presentation and editing.",
    coverImage: "https://i.ytimg.com/vi/0trx6p4Oa9k/maxresdefault.jpg",
    coverAspectRatio: "16/9",
    coverAlt: "YEPO Primebook 15",
    media: [
      {
        id: "0trx6p4Oa9k",
        type: "youtube",
        url: "https://www.youtube.com/watch?v=0trx6p4Oa9k",
        thumbnail: "https://i.ytimg.com/vi/0trx6p4Oa9k/maxresdefault.jpg",
        thumbnailFallback: "https://i.ytimg.com/vi/0trx6p4Oa9k/hqdefault.jpg",
        aspectRatio: "16/9",
      },
    ],
    translations: {
      ru: {
        title: "YEPO Primebook 15",
        description:
          "Самостоятельная подготовка сцены, свет, съёмка, работа в кадре и монтаж продуктового видео.",
        role: [
          "Сценарий",
          "Свет",
          "Видеосъёмка",
          "Работа в кадре",
          "Видеомонтаж",
        ],
      },
      kk: {
        title: "YEPO Primebook 15",
        description:
          "Өнім бейнесін өзім дайындап, жарық қойып, түсіріп, кадрда таныстырып, монтаждадым.",
        role: [
          "Сценарий",
          "Жарық қою",
          "Бейнетүсірілім",
          "Кадрда таныстыру",
          "Бейнемонтаж",
        ],
      },
    },
    coverFallback: "https://i.ytimg.com/vi/0trx6p4Oa9k/hqdefault.jpg",
    role: [
      "Scriptwriting",
      "Lighting",
      "Videography",
      "On-screen presentation",
      "Video editing",
    ],
    tools: ["iPhone 15 Pro", "DaVinci Resolve"],
    client: "YEPO",
    videoType: "product-reviews",
  },
  {
    id: "yepo-wm13",
    slug: "yepo-wm13",
    title: "YEPO WM13",
    category: "commercial",
    status: "published",
    description:
      "A product video produced through setup, lighting, filming, on-camera presentation and editing.",
    coverImage: "https://i.ytimg.com/vi/O38NgxXYcp0/maxresdefault.jpg",
    coverAspectRatio: "16/9",
    coverAlt: "YEPO WM13",
    media: [
      {
        id: "O38NgxXYcp0",
        type: "youtube",
        url: "https://www.youtube.com/watch?v=O38NgxXYcp0",
        thumbnail: "https://i.ytimg.com/vi/O38NgxXYcp0/maxresdefault.jpg",
        thumbnailFallback: "https://i.ytimg.com/vi/O38NgxXYcp0/hqdefault.jpg",
        aspectRatio: "16/9",
      },
    ],
    translations: {
      ru: {
        title: "YEPO WM13",
        description:
          "Самостоятельная подготовка сцены, свет, съёмка, работа в кадре и монтаж продуктового видео.",
        role: [
          "Сценарий",
          "Свет",
          "Видеосъёмка",
          "Работа в кадре",
          "Видеомонтаж",
        ],
      },
      kk: {
        title: "YEPO WM13",
        description:
          "Өнім бейнесін өзім дайындап, жарық қойып, түсіріп, кадрда таныстырып, монтаждадым.",
        role: [
          "Сценарий",
          "Жарық қою",
          "Бейнетүсірілім",
          "Кадрда таныстыру",
          "Бейнемонтаж",
        ],
      },
    },
    coverFallback: "https://i.ytimg.com/vi/O38NgxXYcp0/hqdefault.jpg",
    role: [
      "Scriptwriting",
      "Lighting",
      "Videography",
      "On-screen presentation",
      "Video editing",
    ],
    tools: ["Sony ZV-E10", "DaVinci Resolve"],
    client: "YEPO",
    videoType: "product-reviews",
  },
  {
    id: "yepo-creator-reel",
    slug: "yepo-creator-reel",
    title: "YEPO — Creator-led Reel",
    category: "commercial",
    status: "published",
    description:
      "A YEPO reel with my script, filming, on-camera performance and editing.",
    coverImage: "/media/portfolio/DewujzMspFf.webp",
    coverAspectRatio: "9/16",
    coverAlt: "YEPO — Creator-led Reel",
    media: [
      {
        id: "DewujzMspFf",
        type: "instagram",
        url: "https://www.instagram.com/p/DewujzMspFf/",
        thumbnail: "/media/portfolio/DewujzMspFf.webp",
        aspectRatio: "9/16",
      },
    ],
    translations: {
      ru: {
        title: "YEPO — Creator-led Reel",
        description:
          "Ролик YEPO: мой сценарий, съёмка, работа в кадре и монтаж.",
        role: ["Сценарий", "Видеосъёмка", "Работа в кадре", "Видеомонтаж"],
      },
      kk: {
        title: "YEPO — Creator-led Reel",
        description:
          "YEPO бейнесі: сценарий, түсірілім, кадрдағы жұмыс және монтаж — өзімнен.",
        role: ["Сценарий", "Бейнетүсірілім", "Кадрда таныстыру", "Бейнемонтаж"],
      },
    },
    role: [
      "Scriptwriting",
      "Videography",
      "On-screen presentation",
      "Video editing",
    ],
    tools: ["Sony ZV-E10", "DaVinci Resolve"],
    client: "YEPO",
    videoType: "reels-ads",
  },
  {
    id: "yepo-brand-collaborations",
    slug: "yepo-brand-collaborations",
    title: "YEPO — Brand Collaborations",
    category: "commercial",
    status: "published",
    description:
      "A reel about YEPO’s collaborations, featuring the company director. I wrote the script, filmed and edited it.",
    coverImage: "/media/portfolio/DebQOtCMSEf.webp",
    coverAspectRatio: "9/16",
    coverAlt: "YEPO — Brand Collaborations",
    media: [
      {
        id: "DebQOtCMSEf",
        type: "instagram",
        url: "https://www.instagram.com/p/DebQOtCMSEf/",
        thumbnail: "/media/portfolio/DebQOtCMSEf.webp",
        aspectRatio: "9/16",
      },
    ],
    translations: {
      ru: {
        title: "YEPO — Brand Collaborations",
        description:
          "Ролик о сотрудничествах YEPO с участием директора компании. Моя работа — сценарий, съёмка и монтаж.",
        role: ["Сценарий", "Видеосъёмка", "Видеомонтаж"],
      },
      kk: {
        title: "YEPO — Brand Collaborations",
        description:
          "Компания директоры қатысқан YEPO серіктестіктері туралы бейне. Сценарийін жазып, түсіріп, монтаждадым.",
        role: ["Сценарий", "Бейнетүсірілім", "Бейнемонтаж"],
      },
    },
    role: ["Scriptwriting", "Videography", "Video editing"],
    tools: ["Sony ZV-E10", "DaVinci Resolve"],
    client: "YEPO",
    videoType: "reels-ads",
  },
  {
    id: "yepo-bogachie",
    slug: "yepo-bogachie",
    title: "YEPO × BOGACHIE — Conversation",
    category: "commercial",
    status: "published",
    description:
      "A conversation with YEPO’s director and BOGACHIE’s co-founder, filmed with two cameras and edited with alternating angles.",
    coverImage: "/media/portfolio/DeOZfDCMkx5.webp",
    coverAspectRatio: "9/16",
    coverAlt: "YEPO × BOGACHIE — Conversation",
    media: [
      {
        id: "DeOZfDCMkx5",
        type: "instagram",
        url: "https://www.instagram.com/p/DeOZfDCMkx5/",
        thumbnail: "/media/portfolio/DeOZfDCMkx5.webp",
        aspectRatio: "9/16",
      },
    ],
    translations: {
      ru: {
        title: "YEPO × BOGACHIE — Conversation",
        description:
          "Разговор директора YEPO и сооснователя BOGACHIE. Съёмка на две камеры и монтаж с чередованием ракурсов.",
        role: ["Видеосъёмка", "Видеомонтаж"],
      },
      kk: {
        title: "YEPO × BOGACHIE — Conversation",
        description:
          "YEPO директоры мен BOGACHIE негізін қалаушылардың бірінің әңгімесі. Екі камерамен түсіріліп, ракурстар алмастырылып монтаждалған.",
        role: ["Бейнетүсірілім", "Бейнемонтаж"],
      },
    },
    role: ["Videography", "Video editing"],
    tools: ["Sony ZV-E10", "iPhone 15 Pro", "DaVinci Resolve"],
    client: "YEPO",
    videoType: "reels-ads",
  },
  {
    id: "yepo-stroller-reel",
    slug: "yepo-stroller-reel",
    title: "YEPO — Stroller Review",
    category: "commercial",
    status: "published",
    description:
      "A dynamic stroller review with my on-camera presentation, filming and editing.",
    coverImage: "/media/portfolio/DdtEUPHsSxz.webp",
    coverAspectRatio: "9/16",
    coverAlt: "YEPO — Stroller Review",
    media: [
      {
        id: "DdtEUPHsSxz",
        type: "instagram",
        url: "https://www.instagram.com/p/DdtEUPHsSxz/",
        thumbnail: "/media/portfolio/DdtEUPHsSxz.webp",
        aspectRatio: "9/16",
      },
    ],
    translations: {
      ru: {
        title: "YEPO — Stroller Review",
        description:
          "Динамичный обзор детской коляски: моя работа в кадре, съёмка и монтаж.",
        role: ["Работа в кадре", "Видеосъёмка", "Видеомонтаж"],
      },
      kk: {
        title: "YEPO — Stroller Review",
        description:
          "Балалар арбасының динамикалық шолуы: кадрда таныстыру, түсірілім және монтаж.",
        role: ["Кадрда таныстыру", "Бейнетүсірілім", "Бейнемонтаж"],
      },
    },
    role: ["On-screen presentation", "Videography", "Video editing"],
    tools: ["Sony ZV-E10", "DaVinci Resolve"],
    client: "YEPO",
    videoType: "reels-ads",
  },
  {
    id: "reel-008",
    slug: "reel-008",
    title: "Commercial Reel / 008",
    category: "commercial",
    status: "published",
    description: "Short-form commercial video.",
    coverImage: "/media/portfolio/reel-008.webp",
    coverAspectRatio: "9/16",
    coverAlt: "Commercial Reel / 008",
    media: [
      {
        id: "reel-008",
        type: "localVideo",
        url: "/media/portfolio/reel-008.mp4",
        thumbnail: "/media/portfolio/reel-008.webp",
        aspectRatio: "9/16",
      },
    ],
    translations: {
      ru: {
        title: "Коммерческий ролик / 008",
        description: "Короткое коммерческое видео.",
      },
      kk: {
        title: "Коммерциялық бейне / 008",
        description: "Қысқа коммерциялық бейне.",
      },
    },
    videoType: "reels-ads",
  },
  {
    id: "reel-01-2",
    slug: "reel-01-2",
    title: "Commercial Reel / 01-2",
    category: "commercial",
    status: "published",
    description: "Short-form commercial video.",
    coverImage: "/media/portfolio/reel-01-2.webp",
    coverAspectRatio: "9/16",
    coverAlt: "Commercial Reel / 01-2",
    media: [
      {
        id: "reel-01-2",
        type: "localVideo",
        url: "/media/portfolio/reel-01-2.mp4",
        thumbnail: "/media/portfolio/reel-01-2.webp",
        aspectRatio: "9/16",
      },
    ],
    translations: {
      ru: {
        title: "Коммерческий ролик / 01-2",
        description: "Короткое коммерческое видео.",
      },
      kk: {
        title: "Коммерциялық бейне / 01-2",
        description: "Қысқа коммерциялық бейне.",
      },
    },
    videoType: "reels-ads",
  },
  {
    id: "reel-askar-01",
    slug: "reel-askar-01",
    title: "Commercial Reel / Askar 01",
    category: "commercial",
    status: "published",
    description: "Short-form commercial video.",
    coverImage: "/media/portfolio/reel-askar-01.webp",
    coverAspectRatio: "9/16",
    coverAlt: "Commercial Reel / Askar 01",
    media: [
      {
        id: "reel-askar-01",
        type: "localVideo",
        url: "/media/portfolio/reel-askar-01.mp4",
        thumbnail: "/media/portfolio/reel-askar-01.webp",
        aspectRatio: "9/16",
      },
    ],
    translations: {
      ru: {
        title: "Коммерческий ролик / Askar 01",
        description: "Короткое коммерческое видео.",
      },
      kk: {
        title: "Коммерциялық бейне / Askar 01",
        description: "Қысқа коммерциялық бейне.",
      },
    },
    videoType: "reels-ads",
  },
  {
    id: "reel-askar-02",
    slug: "reel-askar-02",
    title: "Commercial Reel / Askar 02",
    category: "commercial",
    status: "published",
    description: "Short-form commercial video.",
    coverImage: "/media/portfolio/reel-askar-02.webp",
    coverAspectRatio: "9/16",
    coverAlt: "Commercial Reel / Askar 02",
    media: [
      {
        id: "reel-askar-02",
        type: "localVideo",
        url: "/media/portfolio/reel-askar-02.mp4",
        thumbnail: "/media/portfolio/reel-askar-02.webp",
        aspectRatio: "9/16",
      },
    ],
    translations: {
      ru: {
        title: "Коммерческий ролик / Askar 02",
        description: "Короткое коммерческое видео.",
      },
      kk: {
        title: "Коммерциялық бейне / Askar 02",
        description: "Қысқа коммерциялық бейне.",
      },
    },
    videoType: "reels-ads",
  },
  {
    id: "reel-askar-03",
    slug: "reel-askar-03",
    title: "Commercial Reel / Askar 03",
    category: "commercial",
    status: "published",
    description: "Short-form commercial video.",
    coverImage: "/media/portfolio/reel-askar-03.webp",
    coverAspectRatio: "9/16",
    coverAlt: "Commercial Reel / Askar 03",
    media: [
      {
        id: "reel-askar-03",
        type: "localVideo",
        url: "/media/portfolio/reel-askar-03.mp4",
        thumbnail: "/media/portfolio/reel-askar-03.webp",
        aspectRatio: "9/16",
      },
    ],
    translations: {
      ru: {
        title: "Коммерческий ролик / Askar 03",
        description: "Короткое коммерческое видео.",
      },
      kk: {
        title: "Коммерциялық бейне / Askar 03",
        description: "Қысқа коммерциялық бейне.",
      },
    },
    videoType: "reels-ads",
  },
  {
    id: "reel-1-f",
    slug: "reel-1-f",
    title: "Commercial Reel / 1-f",
    category: "commercial",
    status: "published",
    description: "Short-form commercial video.",
    coverImage: "/media/portfolio/reel-1-f.webp",
    coverAspectRatio: "9/16",
    coverAlt: "Commercial Reel / 1-f",
    media: [
      {
        id: "reel-1-f",
        type: "localVideo",
        url: "/media/portfolio/reel-1-f.mp4",
        thumbnail: "/media/portfolio/reel-1-f.webp",
        aspectRatio: "9/16",
      },
    ],
    translations: {
      ru: {
        title: "Коммерческий ролик / 1-f",
        description: "Короткое коммерческое видео.",
      },
      kk: {
        title: "Коммерциялық бейне / 1-f",
        description: "Қысқа коммерциялық бейне.",
      },
    },
    videoType: "reels-ads",
  },
  {
    id: "reel-1029",
    slug: "reel-1029",
    title: "Commercial Reel / 1029",
    category: "commercial",
    status: "published",
    description: "Short-form commercial video.",
    coverImage: "/media/portfolio/reel-1029.webp",
    coverAspectRatio: "9/16",
    coverAlt: "Commercial Reel / 1029",
    media: [
      {
        id: "reel-1029",
        type: "localVideo",
        url: "/media/portfolio/reel-1029.mp4",
        thumbnail: "/media/portfolio/reel-1029.webp",
        aspectRatio: "9/16",
      },
    ],
    translations: {
      ru: {
        title: "Коммерческий ролик / 1029",
        description: "Короткое коммерческое видео.",
      },
      kk: {
        title: "Коммерциялық бейне / 1029",
        description: "Қысқа коммерциялық бейне.",
      },
    },
    videoType: "reels-ads",
  },
  {
    id: "reel-12-1",
    slug: "reel-12-1",
    title: "Commercial Reel / 12-1",
    category: "commercial",
    status: "published",
    description: "Short-form commercial video.",
    coverImage: "/media/portfolio/reel-12-1.webp",
    coverAspectRatio: "9/16",
    coverAlt: "Commercial Reel / 12-1",
    media: [
      {
        id: "reel-12-1",
        type: "localVideo",
        url: "/media/portfolio/reel-12-1.mp4",
        thumbnail: "/media/portfolio/reel-12-1.webp",
        aspectRatio: "9/16",
      },
    ],
    translations: {
      ru: {
        title: "Коммерческий ролик / 12-1",
        description: "Короткое коммерческое видео.",
      },
      kk: {
        title: "Коммерциялық бейне / 12-1",
        description: "Қысқа коммерциялық бейне.",
      },
    },
    videoType: "reels-ads",
  },
  {
    id: "reel-2",
    slug: "reel-2",
    title: "Commercial Reel / 2",
    category: "commercial",
    status: "published",
    description: "Short-form commercial video.",
    coverImage: "/media/portfolio/reel-2.webp",
    coverAspectRatio: "9/16",
    coverAlt: "Commercial Reel / 2",
    media: [
      {
        id: "reel-2",
        type: "localVideo",
        url: "/media/portfolio/reel-2.mp4",
        thumbnail: "/media/portfolio/reel-2.webp",
        aspectRatio: "9/16",
      },
    ],
    translations: {
      ru: {
        title: "Коммерческий ролик / 2",
        description: "Короткое коммерческое видео.",
      },
      kk: {
        title: "Коммерциялық бейне / 2",
        description: "Қысқа коммерциялық бейне.",
      },
    },
    videoType: "reels-ads",
  },
  {
    id: "reel-3",
    slug: "reel-3",
    title: "Commercial Reel / 3",
    category: "commercial",
    status: "published",
    description: "Short-form commercial video.",
    coverImage: "/media/portfolio/reel-3.webp",
    coverAspectRatio: "9/16",
    coverAlt: "Commercial Reel / 3",
    media: [
      {
        id: "reel-3",
        type: "localVideo",
        url: "/media/portfolio/reel-3.mp4",
        thumbnail: "/media/portfolio/reel-3.webp",
        aspectRatio: "9/16",
      },
    ],
    translations: {
      ru: {
        title: "Коммерческий ролик / 3",
        description: "Короткое коммерческое видео.",
      },
      kk: {
        title: "Коммерциялық бейне / 3",
        description: "Қысқа коммерциялық бейне.",
      },
    },
    videoType: "reels-ads",
  },
  {
    id: "reel-4",
    slug: "reel-4",
    title: "Commercial Reel / 4",
    category: "commercial",
    status: "published",
    description: "Short-form commercial video.",
    coverImage: "/media/portfolio/reel-4.webp",
    coverAspectRatio: "9/16",
    coverAlt: "Commercial Reel / 4",
    media: [
      {
        id: "reel-4",
        type: "localVideo",
        url: "/media/portfolio/reel-4.mp4",
        thumbnail: "/media/portfolio/reel-4.webp",
        aspectRatio: "9/16",
      },
    ],
    translations: {
      ru: {
        title: "Коммерческий ролик / 4",
        description: "Короткое коммерческое видео.",
      },
      kk: {
        title: "Коммерциялық бейне / 4",
        description: "Қысқа коммерциялық бейне.",
      },
    },
    videoType: "reels-ads",
  },
  {
    id: "reel-5",
    slug: "reel-5",
    title: "Commercial Reel / 5",
    category: "commercial",
    status: "published",
    description: "Short-form commercial video.",
    coverImage: "/media/portfolio/reel-5.webp",
    coverAspectRatio: "9/16",
    coverAlt: "Commercial Reel / 5",
    media: [
      {
        id: "reel-5",
        type: "localVideo",
        url: "/media/portfolio/reel-5.mp4",
        thumbnail: "/media/portfolio/reel-5.webp",
        aspectRatio: "9/16",
      },
    ],
    translations: {
      ru: {
        title: "Коммерческий ролик / 5",
        description: "Короткое коммерческое видео.",
      },
      kk: {
        title: "Коммерциялық бейне / 5",
        description: "Қысқа коммерциялық бейне.",
      },
    },
    videoType: "reels-ads",
  },
  {
    id: "reel-6-2",
    slug: "reel-6-2",
    title: "Commercial Reel / 6-2",
    category: "commercial",
    status: "published",
    description: "Short-form commercial video.",
    coverImage: "/media/portfolio/reel-6-2.webp",
    coverAspectRatio: "9/16",
    coverAlt: "Commercial Reel / 6-2",
    media: [
      {
        id: "reel-6-2",
        type: "localVideo",
        url: "/media/portfolio/reel-6-2.mp4",
        thumbnail: "/media/portfolio/reel-6-2.webp",
        aspectRatio: "9/16",
      },
    ],
    translations: {
      ru: {
        title: "Коммерческий ролик / 6-2",
        description: "Короткое коммерческое видео.",
      },
      kk: {
        title: "Коммерциялық бейне / 6-2",
        description: "Қысқа коммерциялық бейне.",
      },
    },
    videoType: "reels-ads",
  },
  {
    id: "reel-9-1",
    slug: "reel-9-1",
    title: "Commercial Reel / 9-1",
    category: "commercial",
    status: "published",
    description: "Short-form commercial video.",
    coverImage: "/media/portfolio/reel-9-1.webp",
    coverAspectRatio: "9/16",
    coverAlt: "Commercial Reel / 9-1",
    media: [
      {
        id: "reel-9-1",
        type: "localVideo",
        url: "/media/portfolio/reel-9-1.mp4",
        thumbnail: "/media/portfolio/reel-9-1.webp",
        aspectRatio: "9/16",
      },
    ],
    translations: {
      ru: {
        title: "Коммерческий ролик / 9-1",
        description: "Короткое коммерческое видео.",
      },
      kk: {
        title: "Коммерциялық бейне / 9-1",
        description: "Қысқа коммерциялық бейне.",
      },
    },
    videoType: "reels-ads",
  },
  {
    id: "reel-img-2692",
    slug: "reel-img-2692",
    title: "Commercial Reel / IMG 2692",
    category: "commercial",
    status: "published",
    description: "Short-form commercial video.",
    coverImage: "/media/portfolio/reel-img-2692.webp",
    coverAspectRatio: "9/16",
    coverAlt: "Commercial Reel / IMG 2692",
    media: [
      {
        id: "reel-img-2692",
        type: "localVideo",
        url: "/media/portfolio/reel-img-2692.mp4",
        thumbnail: "/media/portfolio/reel-img-2692.webp",
        aspectRatio: "9/16",
      },
    ],
    translations: {
      ru: {
        title: "Коммерческий ролик / IMG 2692",
        description: "Короткое коммерческое видео.",
      },
      kk: {
        title: "Коммерциялық бейне / IMG 2692",
        description: "Қысқа коммерциялық бейне.",
      },
    },
    videoType: "reels-ads",
  },
  {
    id: "reel-adil",
    slug: "reel-adil",
    title: "Commercial Reel / Adil",
    category: "commercial",
    status: "published",
    description: "Short-form commercial video.",
    coverImage: "/media/portfolio/reel-adil.webp",
    coverAspectRatio: "9/16",
    coverAlt: "Commercial Reel / Adil",
    media: [
      {
        id: "reel-adil",
        type: "localVideo",
        url: "/media/portfolio/reel-adil.mp4",
        thumbnail: "/media/portfolio/reel-adil.webp",
        aspectRatio: "9/16",
      },
    ],
    translations: {
      ru: {
        title: "Коммерческий ролик / Adil",
        description: "Короткое коммерческое видео.",
      },
      kk: {
        title: "Коммерциялық бейне / Adil",
        description: "Қысқа коммерциялық бейне.",
      },
    },
    videoType: "reels-ads",
  },
  {
    id: "reel-archive-17",
    slug: "reel-archive-17",
    title: "Commercial Reel / Archive 17",
    category: "commercial",
    status: "published",
    description: "Short-form commercial video.",
    coverImage: "/media/portfolio/reel-archive-17.webp",
    coverAspectRatio: "29/53",
    coverAlt: "Commercial Reel / Archive 17",
    media: [
      {
        id: "reel-archive-17",
        type: "localVideo",
        url: "/media/portfolio/reel-archive-17.mp4",
        thumbnail: "/media/portfolio/reel-archive-17.webp",
        aspectRatio: "29/53",
      },
    ],
    translations: {
      ru: {
        title: "Коммерческий ролик / Archive 17",
        description: "Короткое коммерческое видео.",
      },
      kk: {
        title: "Коммерциялық бейне / Archive 17",
        description: "Қысқа коммерциялық бейне.",
      },
    },
    videoType: "reels-ads",
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
];
export const publishedProjects = projects.filter(
  (project) => project.status === "published",
);
export const selectedProjects = publishedProjects
  .filter((p) => p.featured && !p.demo)
  .sort((a, b) => (a.featuredOrder ?? 999) - (b.featuredOrder ?? 999))
  .slice(0, 4);
export const categoryLabel = (id: string) =>
  categories.find((c) => c.id === id)?.label ?? id;
export const filterProjects = (items: Project[], category: string) =>
  category === "all" ? items : items.filter((p) => p.category === category);
