export type AspectRatio = `${number}/${number}`;
export type Media = {
  id: string;
  type: "youtube" | "vimeo" | "instagram" | "localVideo" | "image";
  url: string; // YouTube/Vimeo URL or ID; local files start with /media/
  sourceUrl?: string; // Original publication retained as provenance; playback uses url.
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
        type: "localVideo",
        sourceUrl: "https://www.instagram.com/p/Ddrq_lMufJh/",
        url: "/media/portfolio/instagram-Ddrq_lMufJh.mp4",
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
    featuredOrder: 3,
  },
  {
    id: "narrative-motion-edit",
    slug: "narrative-editing-2d-animation",
    title: "Crypto Heist — Editing & 2D Animation",
    category: "motion",
    status: "published",
    featured: true,
    featuredOrder: 1,
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
    featured: false,
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
    featuredOrder: 4,
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
    featuredOrder: 2,
  },
  {
    id: "chair-01",
    slug: "premium-chair-studio",
    title: "YEPO LS-1000 — Studio Commercial",
    category: "commercial",
    status: "published",
    description:
      "A studio commercial for the YEPO LS-1000 ergonomic chair, produced on a white paper cyclorama with controlled lighting and clean composition.",
    coverImage: "/media/portfolio/Dcl2VgRsbX_.webp",
    coverAspectRatio: "9/16",
    coverAlt: "YEPO LS-1000 — Studio Commercial",
    media: [
      {
        id: "Dcl2VgRsbX_",
        type: "localVideo",
        sourceUrl: "https://www.instagram.com/p/Dcl2VgRsbX_/",
        url: "/media/portfolio/instagram-Dcl2VgRsbX_.mp4",
        thumbnail: "/media/portfolio/Dcl2VgRsbX_.webp",
        aspectRatio: "9/16",
        caption: "YEPO LS-1000",
      },
    ],
    translations: {
      ru: {
        title: "YEPO LS-1000 — Студийный ролик",
        description:
          "Студийный ролик эргономичного кресла YEPO LS-1000: белая бумажная циклорама, выверенный свет и чистая композиция.",
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
        title: "YEPO LS-1000 — Студиялық бейне",
        description:
          "YEPO LS-1000 эргономикалық креслосының студиялық бейнесі: ақ қағаз циклорама, дәл қойылған жарық және таза композиция.",
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
    featured: false,
    credits: "Voiceover and on-screen talent provided separately.",
  },
  {
    id: "yepo-ls-901-studio",
    slug: "yepo-ls-901-studio",
    title: "YEPO LS-901 — Studio Commercial",
    category: "commercial",
    status: "published",
    description:
      "A studio commercial for the YEPO LS-901 ergonomic chair, produced on a white paper cyclorama with controlled lighting and clean composition.",
    coverImage: "/media/portfolio/DcJJEresebU.webp",
    coverAspectRatio: "9/16",
    coverAlt: "YEPO LS-901 — Studio Commercial",
    media: [
      {
        id: "DcJJEresebU",
        type: "localVideo",
        sourceUrl: "https://www.instagram.com/p/DcJJEresebU/",
        url: "/media/portfolio/instagram-DcJJEresebU.mp4",
        thumbnail: "/media/portfolio/DcJJEresebU.webp",
        aspectRatio: "9/16",
        caption: "YEPO LS-901",
      },
    ],
    translations: {
      ru: {
        title: "YEPO LS-901 — Студийный ролик",
        description:
          "Студийный ролик эргономичного кресла YEPO LS-901: белая бумажная циклорама, выверенный свет и чистая композиция.",
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
        title: "YEPO LS-901 — Студиялық бейне",
        description:
          "YEPO LS-901 эргономикалық креслосының студиялық бейнесі: ақ қағаз циклорама, дәл қойылған жарық және таза композиция.",
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
    featured: false,
    credits: "Voiceover and on-screen talent provided separately.",
  },
  {
    id: "yepo-ls-919-studio",
    slug: "yepo-ls-919-studio",
    title: "YEPO LS-919 — Studio Commercial",
    category: "commercial",
    status: "published",
    description:
      "A studio commercial for the YEPO LS-919 ergonomic chair, produced on a white paper cyclorama with controlled lighting and clean composition.",
    coverImage: "/media/portfolio/Db-6ST6sVZK.webp",
    coverAspectRatio: "9/16",
    coverAlt: "YEPO LS-919 — Studio Commercial",
    media: [
      {
        id: "Db-6ST6sVZK",
        type: "localVideo",
        sourceUrl: "https://www.instagram.com/p/Db-6ST6sVZK/",
        url: "/media/portfolio/instagram-Db-6ST6sVZK.mp4",
        thumbnail: "/media/portfolio/Db-6ST6sVZK.webp",
        aspectRatio: "9/16",
        caption: "YEPO LS-919",
      },
    ],
    translations: {
      ru: {
        title: "YEPO LS-919 — Студийный ролик",
        description:
          "Студийный ролик эргономичного кресла YEPO LS-919: белая бумажная циклорама, выверенный свет и чистая композиция.",
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
        title: "YEPO LS-919 — Студиялық бейне",
        description:
          "YEPO LS-919 эргономикалық креслосының студиялық бейнесі: ақ қағаз циклорама, дәл қойылған жарық және таза композиция.",
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
    featured: false,
    credits: "Voiceover and on-screen talent provided separately.",
  },
  {
    id: "yepo-ls-999-studio",
    slug: "yepo-ls-999-studio",
    title: "YEPO LS-999 — Studio Commercial",
    category: "commercial",
    status: "published",
    description:
      "A studio commercial for the YEPO LS-999 ergonomic chair, produced on a white paper cyclorama with controlled lighting and clean composition.",
    coverImage: "/media/portfolio/Dci7X5Ls9XW.webp",
    coverAspectRatio: "9/16",
    coverAlt: "YEPO LS-999 — Studio Commercial",
    media: [
      {
        id: "Dci7X5Ls9XW",
        type: "localVideo",
        sourceUrl: "https://www.instagram.com/p/Dci7X5Ls9XW/",
        url: "/media/portfolio/instagram-Dci7X5Ls9XW.mp4",
        thumbnail: "/media/portfolio/Dci7X5Ls9XW.webp",
        aspectRatio: "9/16",
        caption: "YEPO LS-999",
      },
    ],
    translations: {
      ru: {
        title: "YEPO LS-999 — Студийный ролик",
        description:
          "Студийный ролик эргономичного кресла YEPO LS-999: белая бумажная циклорама, выверенный свет и чистая композиция.",
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
        title: "YEPO LS-999 — Студиялық бейне",
        description:
          "YEPO LS-999 эргономикалық креслосының студиялық бейнесі: ақ қағаз циклорама, дәл қойылған жарық және таза композиция.",
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
    featured: false,
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
    featured: false,
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
    featured: false,
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
    featured: false,
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
    featured: false,
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
    featured: false,
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
        role: ["3D-визуализация", "Симуляция ткани", "Постобработка"],
      },
      kk: {
        title: "Vetements × Alpha Industries — Цифрлық сән",
        description:
          "Blender, Marvelous Designer-дегі мата симуляциясы және Photoshop өңдеуі біріктірілген цифрлық сән визуалы.",
        role: ["3D-визуализация", "Мата симуляциясы", "Суретті өңдеу"],
      },
    },
    role: ["3D visualization", "Cloth simulation", "Image finishing"],
    tools: ["Blender", "Marvelous Designer", "Photoshop"],
    featured: false,
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
    featured: false,
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
    featured: false,
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
        role: ["3D-визуализация", "Графический дизайн"],
      },
      kk: {
        title: "Where are U? — Трек мұқабасы",
        description:
          "Where are U? трегімнің мұқабасы және аниме стиліндегі алғашқы 3D-визуализациям. Blender мен Photoshop-та жасалған.",
        role: ["3D-визуализация", "Графикалық дизайн"],
      },
    },
    role: ["3D visualization", "Graphic design"],
    tools: ["Blender", "Photoshop"],
    featured: false,
  },
  {
    id: "design-01",
    slug: "graphic-design-product-visuals",
    title: "YEPO Primebook 15 — Product Infographics",
    category: "design",
    status: "published",
    description:
      "Product listing visuals and infographics for YEPO Primebook 15, developed with Photoshop and Photocraft.",
    coverImage: "/media/portfolio/kaspi/b13862f30254cac8.webp",
    coverAspectRatio: "800/517",
    coverAlt: "YEPO Primebook 15 — Product Infographics",
    media: [
      {
        id: "product-00-image-01",
        type: "image",
        url: "/media/portfolio/kaspi/b13862f30254cac8.webp",
        aspectRatio: "800/517",
        caption: "YEPO Primebook 15 / 01",
        alt: "YEPO Primebook 15 product visual 01",
        translations: {
          ru: {
            alt: "YEPO Primebook 15 — визуал товара 01",
          },
          kk: {
            alt: "YEPO Primebook 15 — өнім визуалы 01",
          },
        },
      },
      {
        id: "product-00-image-02",
        type: "image",
        url: "/media/portfolio/kaspi/d03951e7dcfafe9d.webp",
        aspectRatio: "800/419",
        caption: "YEPO Primebook 15 / 02",
        alt: "YEPO Primebook 15 product visual 02",
        translations: {
          ru: {
            alt: "YEPO Primebook 15 — визуал товара 02",
          },
          kk: {
            alt: "YEPO Primebook 15 — өнім визуалы 02",
          },
        },
      },
      {
        id: "product-00-image-03",
        type: "image",
        url: "/media/portfolio/kaspi/ab4db372d6570e9a.webp",
        aspectRatio: "379/360",
        caption: "YEPO Primebook 15 / 03",
        alt: "YEPO Primebook 15 product visual 03",
        translations: {
          ru: {
            alt: "YEPO Primebook 15 — визуал товара 03",
          },
          kk: {
            alt: "YEPO Primebook 15 — өнім визуалы 03",
          },
        },
      },
      {
        id: "product-00-image-04",
        type: "image",
        url: "/media/portfolio/kaspi/29ae9c49e11475ce.webp",
        aspectRatio: "1/1",
        caption: "YEPO Primebook 15 / 04",
        alt: "YEPO Primebook 15 product visual 04",
        translations: {
          ru: {
            alt: "YEPO Primebook 15 — визуал товара 04",
          },
          kk: {
            alt: "YEPO Primebook 15 — өнім визуалы 04",
          },
        },
      },
      {
        id: "product-00-image-05",
        type: "image",
        url: "/media/portfolio/kaspi/f68bf4c81fca6ba6.webp",
        aspectRatio: "83/72",
        caption: "YEPO Primebook 15 / 05",
        alt: "YEPO Primebook 15 product visual 05",
        translations: {
          ru: {
            alt: "YEPO Primebook 15 — визуал товара 05",
          },
          kk: {
            alt: "YEPO Primebook 15 — өнім визуалы 05",
          },
        },
      },
      {
        id: "product-00-image-06",
        type: "image",
        url: "/media/portfolio/kaspi/ffa5d5b7da589f80.webp",
        aspectRatio: "10/9",
        caption: "YEPO Primebook 15 / 06",
        alt: "YEPO Primebook 15 product visual 06",
        translations: {
          ru: {
            alt: "YEPO Primebook 15 — визуал товара 06",
          },
          kk: {
            alt: "YEPO Primebook 15 — өнім визуалы 06",
          },
        },
      },
      {
        id: "product-00-image-07",
        type: "image",
        url: "/media/portfolio/kaspi/d0e67f460a88f02c.webp",
        aspectRatio: "1169/1080",
        caption: "YEPO Primebook 15 / 07",
        alt: "YEPO Primebook 15 product visual 07",
        translations: {
          ru: {
            alt: "YEPO Primebook 15 — визуал товара 07",
          },
          kk: {
            alt: "YEPO Primebook 15 — өнім визуалы 07",
          },
        },
      },
      {
        id: "product-00-image-08",
        type: "image",
        url: "/media/portfolio/kaspi/66cbac6cd22a6ffb.webp",
        aspectRatio: "1/1",
        caption: "YEPO Primebook 15 / 08",
        alt: "YEPO Primebook 15 product visual 08",
        translations: {
          ru: {
            alt: "YEPO Primebook 15 — визуал товара 08",
          },
          kk: {
            alt: "YEPO Primebook 15 — өнім визуалы 08",
          },
        },
      },
      {
        id: "product-00-image-09",
        type: "image",
        url: "/media/portfolio/kaspi/7f27f4ef2f7ec302.webp",
        aspectRatio: "39/38",
        caption: "YEPO Primebook 15 / 09",
        alt: "YEPO Primebook 15 product visual 09",
        translations: {
          ru: {
            alt: "YEPO Primebook 15 — визуал товара 09",
          },
          kk: {
            alt: "YEPO Primebook 15 — өнім визуалы 09",
          },
        },
      },
      {
        id: "product-00-image-10",
        type: "image",
        url: "/media/portfolio/kaspi/f6ed3c48f721d377.webp",
        aspectRatio: "55/54",
        caption: "YEPO Primebook 15 / 10",
        alt: "YEPO Primebook 15 product visual 10",
        translations: {
          ru: {
            alt: "YEPO Primebook 15 — визуал товара 10",
          },
          kk: {
            alt: "YEPO Primebook 15 — өнім визуалы 10",
          },
        },
      },
      {
        id: "product-00-image-11",
        type: "image",
        url: "/media/portfolio/kaspi/272015ba140703a3.webp",
        aspectRatio: "800/489",
        caption: "YEPO Primebook 15 / 11",
        alt: "YEPO Primebook 15 product visual 11",
        translations: {
          ru: {
            alt: "YEPO Primebook 15 — визуал товара 11",
          },
          kk: {
            alt: "YEPO Primebook 15 — өнім визуалы 11",
          },
        },
      },
      {
        id: "product-00-image-12",
        type: "image",
        url: "/media/portfolio/kaspi/4b81a3a7dcea3060.webp",
        aspectRatio: "379/269",
        caption: "YEPO Primebook 15 / 12",
        alt: "YEPO Primebook 15 product visual 12",
        translations: {
          ru: {
            alt: "YEPO Primebook 15 — визуал товара 12",
          },
          kk: {
            alt: "YEPO Primebook 15 — өнім визуалы 12",
          },
        },
      },
      {
        id: "product-00-image-13",
        type: "image",
        url: "/media/portfolio/kaspi/5971421f8d858edf.webp",
        aspectRatio: "800/193",
        caption: "YEPO Primebook 15 / 13",
        alt: "YEPO Primebook 15 product visual 13",
        translations: {
          ru: {
            alt: "YEPO Primebook 15 — визуал товара 13",
          },
          kk: {
            alt: "YEPO Primebook 15 — өнім визуалы 13",
          },
        },
      },
      {
        id: "product-00-image-14",
        type: "image",
        url: "/media/portfolio/kaspi/7d0e828ac667cc89.webp",
        aspectRatio: "180/187",
        caption: "YEPO Primebook 15 / 14",
        alt: "YEPO Primebook 15 product visual 14",
        translations: {
          ru: {
            alt: "YEPO Primebook 15 — визуал товара 14",
          },
          kk: {
            alt: "YEPO Primebook 15 — өнім визуалы 14",
          },
        },
      },
      {
        id: "product-00-image-15",
        type: "image",
        url: "/media/portfolio/kaspi/17c19c6e13d8a4bf.webp",
        aspectRatio: "270/311",
        caption: "YEPO Primebook 15 / 15",
        alt: "YEPO Primebook 15 product visual 15",
        translations: {
          ru: {
            alt: "YEPO Primebook 15 — визуал товара 15",
          },
          kk: {
            alt: "YEPO Primebook 15 — өнім визуалы 15",
          },
        },
      },
    ],
    translations: {
      ru: {
        title: "YEPO Primebook 15 — Инфографика товара",
        description:
          "Визуалы и инфографика карточки товара YEPO Primebook 15, созданные в Photoshop и Photocraft.",
        role: ["Идея", "Графический дизайн"],
      },
      kk: {
        title: "YEPO Primebook 15 — Өнім инфографикасы",
        description:
          "Photoshop пен Photocraft-та жасалған YEPO Primebook 15 өнім карточкасының визуалдары мен инфографикасы.",
        role: ["Идея", "Графикалық дизайн"],
      },
    },
    role: ["Concept", "Graphic design"],
    tools: ["Photoshop", "Photocraft"],
    client: "YEPO",
    externalLinks: [
      {
        label: "View on Kaspi",
        url: "https://kaspi.kz/shop/p/yepo-primebook-15-15-6-intel-core-i5-1030g7-16-gb-ssd-512-gb-iris-plus-win-11-pro-primebook-15-seryi-164706498/",
      },
    ],
    featured: false,
  },
  {
    id: "yepo-a95-infographics",
    slug: "yepo-a95-infographics",
    title: "YEPO A95 — Product Infographics",
    category: "design",
    status: "published",
    description:
      "Product listing visuals and infographics for YEPO A95, developed with Photoshop and Photocraft.",
    coverImage: "/media/portfolio/kaspi/54a415288b35a3c3.webp",
    coverAspectRatio: "800/483",
    coverAlt: "YEPO A95 — Product Infographics",
    media: [
      {
        id: "product-01-image-01",
        type: "image",
        url: "/media/portfolio/kaspi/54a415288b35a3c3.webp",
        aspectRatio: "800/483",
        caption: "YEPO A95 / 01",
        alt: "YEPO A95 product visual 01",
        translations: {
          ru: {
            alt: "YEPO A95 — визуал товара 01",
          },
          kk: {
            alt: "YEPO A95 — өнім визуалы 01",
          },
        },
      },
      {
        id: "product-01-image-02",
        type: "image",
        url: "/media/portfolio/kaspi/31b1323661022bc5.webp",
        aspectRatio: "1447/1080",
        caption: "YEPO A95 / 02",
        alt: "YEPO A95 product visual 02",
        translations: {
          ru: {
            alt: "YEPO A95 — визуал товара 02",
          },
          kk: {
            alt: "YEPO A95 — өнім визуалы 02",
          },
        },
      },
      {
        id: "product-01-image-03",
        type: "image",
        url: "/media/portfolio/kaspi/1fe4cfb4d9f2438d.webp",
        aspectRatio: "133/120",
        caption: "YEPO A95 / 03",
        alt: "YEPO A95 product visual 03",
        translations: {
          ru: {
            alt: "YEPO A95 — визуал товара 03",
          },
          kk: {
            alt: "YEPO A95 — өнім визуалы 03",
          },
        },
      },
      {
        id: "product-01-image-04",
        type: "image",
        url: "/media/portfolio/kaspi/0f732352f6339e18.webp",
        aspectRatio: "1433/1080",
        caption: "YEPO A95 / 04",
        alt: "YEPO A95 product visual 04",
        translations: {
          ru: {
            alt: "YEPO A95 — визуал товара 04",
          },
          kk: {
            alt: "YEPO A95 — өнім визуалы 04",
          },
        },
      },
      {
        id: "product-01-image-05",
        type: "image",
        url: "/media/portfolio/kaspi/6880042c044cb822.webp",
        aspectRatio: "541/540",
        caption: "YEPO A95 / 05",
        alt: "YEPO A95 product visual 05",
        translations: {
          ru: {
            alt: "YEPO A95 — визуал товара 05",
          },
          kk: {
            alt: "YEPO A95 — өнім визуалы 05",
          },
        },
      },
      {
        id: "product-01-image-06",
        type: "image",
        url: "/media/portfolio/kaspi/c0210210dbebba2a.webp",
        aspectRatio: "1/1",
        caption: "YEPO A95 / 06",
        alt: "YEPO A95 product visual 06",
        translations: {
          ru: {
            alt: "YEPO A95 — визуал товара 06",
          },
          kk: {
            alt: "YEPO A95 — өнім визуалы 06",
          },
        },
      },
      {
        id: "product-01-image-07",
        type: "image",
        url: "/media/portfolio/kaspi/5277cce35ad2537b.webp",
        aspectRatio: "1/1",
        caption: "YEPO A95 / 07",
        alt: "YEPO A95 product visual 07",
        translations: {
          ru: {
            alt: "YEPO A95 — визуал товара 07",
          },
          kk: {
            alt: "YEPO A95 — өнім визуалы 07",
          },
        },
      },
      {
        id: "product-01-image-08",
        type: "image",
        url: "/media/portfolio/kaspi/ff946666ff636369.webp",
        aspectRatio: "1/1",
        caption: "YEPO A95 / 08",
        alt: "YEPO A95 product visual 08",
        translations: {
          ru: {
            alt: "YEPO A95 — визуал товара 08",
          },
          kk: {
            alt: "YEPO A95 — өнім визуалы 08",
          },
        },
      },
      {
        id: "product-01-image-09",
        type: "image",
        url: "/media/portfolio/kaspi/c73254a9cb48e4a0.webp",
        aspectRatio: "617/540",
        caption: "YEPO A95 / 09",
        alt: "YEPO A95 product visual 09",
        translations: {
          ru: {
            alt: "YEPO A95 — визуал товара 09",
          },
          kk: {
            alt: "YEPO A95 — өнім визуалы 09",
          },
        },
      },
      {
        id: "product-01-image-10",
        type: "image",
        url: "/media/portfolio/kaspi/fd8914d86e4f4c24.webp",
        aspectRatio: "540/551",
        caption: "YEPO A95 / 10",
        alt: "YEPO A95 product visual 10",
        translations: {
          ru: {
            alt: "YEPO A95 — визуал товара 10",
          },
          kk: {
            alt: "YEPO A95 — өнім визуалы 10",
          },
        },
      },
      {
        id: "product-01-image-11",
        type: "image",
        url: "/media/portfolio/kaspi/d4cd881d412c8ea7.webp",
        aspectRatio: "1511/1080",
        caption: "YEPO A95 / 11",
        alt: "YEPO A95 product visual 11",
        translations: {
          ru: {
            alt: "YEPO A95 — визуал товара 11",
          },
          kk: {
            alt: "YEPO A95 — өнім визуалы 11",
          },
        },
      },
      {
        id: "product-01-image-12",
        type: "image",
        url: "/media/portfolio/kaspi/af55e1c8e06001d2.webp",
        aspectRatio: "149/108",
        caption: "YEPO A95 / 12",
        alt: "YEPO A95 product visual 12",
        translations: {
          ru: {
            alt: "YEPO A95 — визуал товара 12",
          },
          kk: {
            alt: "YEPO A95 — өнім визуалы 12",
          },
        },
      },
      {
        id: "product-01-image-13",
        type: "image",
        url: "/media/portfolio/kaspi/6db670f2d8610670.webp",
        aspectRatio: "263/180",
        caption: "YEPO A95 / 13",
        alt: "YEPO A95 product visual 13",
        translations: {
          ru: {
            alt: "YEPO A95 — визуал товара 13",
          },
          kk: {
            alt: "YEPO A95 — өнім визуалы 13",
          },
        },
      },
      {
        id: "product-01-image-14",
        type: "image",
        url: "/media/portfolio/kaspi/34a65ae3fc1b2098.webp",
        aspectRatio: "800/219",
        caption: "YEPO A95 / 14",
        alt: "YEPO A95 product visual 14",
        translations: {
          ru: {
            alt: "YEPO A95 — визуал товара 14",
          },
          kk: {
            alt: "YEPO A95 — өнім визуалы 14",
          },
        },
      },
      {
        id: "product-01-image-15",
        type: "image",
        url: "/media/portfolio/kaspi/df709f374aa570db.webp",
        aspectRatio: "800/173",
        caption: "YEPO A95 / 15",
        alt: "YEPO A95 product visual 15",
        translations: {
          ru: {
            alt: "YEPO A95 — визуал товара 15",
          },
          kk: {
            alt: "YEPO A95 — өнім визуалы 15",
          },
        },
      },
    ],
    translations: {
      ru: {
        title: "YEPO A95 — Инфографика товара",
        description:
          "Визуалы и инфографика карточки товара YEPO A95, созданные в Photoshop и Photocraft.",
        role: ["Идея", "Графический дизайн"],
      },
      kk: {
        title: "YEPO A95 — Өнім инфографикасы",
        description:
          "Photoshop пен Photocraft-та жасалған YEPO A95 өнім карточкасының визуалдары мен инфографикасы.",
        role: ["Идея", "Графикалық дизайн"],
      },
    },
    role: ["Concept", "Graphic design"],
    tools: ["Photoshop", "Photocraft"],
    client: "YEPO",
    externalLinks: [
      {
        label: "View on Kaspi",
        url: "https://kaspi.kz/shop/p/yepo-a95-15-6-16-gb-ssd-512-gb-win-11-a95-112611919/",
      },
    ],
    featured: false,
  },
  {
    id: "yepo-wm13-infographics",
    slug: "yepo-wm13-infographics",
    title: "YEPO WM13 — Product Infographics",
    category: "design",
    status: "published",
    description:
      "Product listing visuals and infographics for YEPO WM13, developed with Photoshop and Photocraft.",
    coverImage: "/media/portfolio/kaspi/0a697899d0bade27.webp",
    coverAspectRatio: "1/1",
    coverAlt: "YEPO WM13 — Product Infographics",
    media: [
      {
        id: "product-02-image-01",
        type: "image",
        url: "/media/portfolio/kaspi/0a697899d0bade27.webp",
        aspectRatio: "1/1",
        caption: "YEPO WM13 / 01",
        alt: "YEPO WM13 product visual 01",
        translations: {
          ru: {
            alt: "YEPO WM13 — визуал товара 01",
          },
          kk: {
            alt: "YEPO WM13 — өнім визуалы 01",
          },
        },
      },
      {
        id: "product-02-image-02",
        type: "image",
        url: "/media/portfolio/kaspi/45a4bb28b863fd58.webp",
        aspectRatio: "1/1",
        caption: "YEPO WM13 / 02",
        alt: "YEPO WM13 product visual 02",
        translations: {
          ru: {
            alt: "YEPO WM13 — визуал товара 02",
          },
          kk: {
            alt: "YEPO WM13 — өнім визуалы 02",
          },
        },
      },
      {
        id: "product-02-image-03",
        type: "image",
        url: "/media/portfolio/kaspi/b4679f00e01c90fd.webp",
        aspectRatio: "283/270",
        caption: "YEPO WM13 / 03",
        alt: "YEPO WM13 product visual 03",
        translations: {
          ru: {
            alt: "YEPO WM13 — визуал товара 03",
          },
          kk: {
            alt: "YEPO WM13 — өнім визуалы 03",
          },
        },
      },
      {
        id: "product-02-image-04",
        type: "image",
        url: "/media/portfolio/kaspi/a7c4d46782b4d613.webp",
        aspectRatio: "1/1",
        caption: "YEPO WM13 / 04",
        alt: "YEPO WM13 product visual 04",
        translations: {
          ru: {
            alt: "YEPO WM13 — визуал товара 04",
          },
          kk: {
            alt: "YEPO WM13 — өнім визуалы 04",
          },
        },
      },
      {
        id: "product-02-image-05",
        type: "image",
        url: "/media/portfolio/kaspi/2436e57dfecbf5cb.webp",
        aspectRatio: "1/1",
        caption: "YEPO WM13 / 05",
        alt: "YEPO WM13 product visual 05",
        translations: {
          ru: {
            alt: "YEPO WM13 — визуал товара 05",
          },
          kk: {
            alt: "YEPO WM13 — өнім визуалы 05",
          },
        },
      },
      {
        id: "product-02-image-06",
        type: "image",
        url: "/media/portfolio/kaspi/707720b117673efb.webp",
        aspectRatio: "73/72",
        caption: "YEPO WM13 / 06",
        alt: "YEPO WM13 product visual 06",
        translations: {
          ru: {
            alt: "YEPO WM13 — визуал товара 06",
          },
          kk: {
            alt: "YEPO WM13 — өнім визуалы 06",
          },
        },
      },
      {
        id: "product-02-image-07",
        type: "image",
        url: "/media/portfolio/kaspi/d991843096bf6f7c.webp",
        aspectRatio: "37/36",
        caption: "YEPO WM13 / 07",
        alt: "YEPO WM13 product visual 07",
        translations: {
          ru: {
            alt: "YEPO WM13 — визуал товара 07",
          },
          kk: {
            alt: "YEPO WM13 — өнім визуалы 07",
          },
        },
      },
    ],
    translations: {
      ru: {
        title: "YEPO WM13 — Инфографика товара",
        description:
          "Визуалы и инфографика карточки товара YEPO WM13, созданные в Photoshop и Photocraft.",
        role: ["Идея", "Графический дизайн"],
      },
      kk: {
        title: "YEPO WM13 — Өнім инфографикасы",
        description:
          "Photoshop пен Photocraft-та жасалған YEPO WM13 өнім карточкасының визуалдары мен инфографикасы.",
        role: ["Идея", "Графикалық дизайн"],
      },
    },
    role: ["Concept", "Graphic design"],
    tools: ["Photoshop", "Photocraft"],
    client: "YEPO",
    externalLinks: [
      {
        label: "View on Kaspi",
        url: "https://kaspi.kz/shop/p/mikrofon-yepo-wm13-chernyi-172911858/?c=591010000&m=18349113&ms=true",
      },
    ],
    featured: false,
  },
  {
    id: "yepo-ls-919-grey-infographics",
    slug: "yepo-ls-919-grey-infographics",
    title: "YEPO LS-919 / Grey — Product Infographics",
    category: "design",
    status: "published",
    description:
      "Product listing visuals and infographics for YEPO LS-919 / Grey, developed with Photoshop and Photocraft.",
    coverImage: "/media/portfolio/kaspi/6e3f7596f866d5bb.webp",
    coverAspectRatio: "1/1",
    coverAlt: "YEPO LS-919 / Grey — Product Infographics",
    media: [
      {
        id: "product-03-image-01",
        type: "image",
        url: "/media/portfolio/kaspi/6e3f7596f866d5bb.webp",
        aspectRatio: "1/1",
        caption: "YEPO LS-919 / Grey / 01",
        alt: "YEPO LS-919 / Grey product visual 01",
        translations: {
          ru: {
            alt: "YEPO LS-919 / Серый — визуал товара 01",
          },
          kk: {
            alt: "YEPO LS-919 / Сұр — өнім визуалы 01",
          },
        },
      },
      {
        id: "product-03-image-02",
        type: "image",
        url: "/media/portfolio/kaspi/f02a30666b1786fc.webp",
        aspectRatio: "1/1",
        caption: "YEPO LS-919 / Grey / 02",
        alt: "YEPO LS-919 / Grey product visual 02",
        translations: {
          ru: {
            alt: "YEPO LS-919 / Серый — визуал товара 02",
          },
          kk: {
            alt: "YEPO LS-919 / Сұр — өнім визуалы 02",
          },
        },
      },
      {
        id: "product-03-image-03",
        type: "image",
        url: "/media/portfolio/kaspi/cddbdf46348e4777.webp",
        aspectRatio: "1/1",
        caption: "YEPO LS-919 / Grey / 03",
        alt: "YEPO LS-919 / Grey product visual 03",
        translations: {
          ru: {
            alt: "YEPO LS-919 / Серый — визуал товара 03",
          },
          kk: {
            alt: "YEPO LS-919 / Сұр — өнім визуалы 03",
          },
        },
      },
      {
        id: "product-03-image-04",
        type: "image",
        url: "/media/portfolio/kaspi/d20f4e2d3e0c1921.webp",
        aspectRatio: "1/1",
        caption: "YEPO LS-919 / Grey / 04",
        alt: "YEPO LS-919 / Grey product visual 04",
        translations: {
          ru: {
            alt: "YEPO LS-919 / Серый — визуал товара 04",
          },
          kk: {
            alt: "YEPO LS-919 / Сұр — өнім визуалы 04",
          },
        },
      },
      {
        id: "product-03-image-05",
        type: "image",
        url: "/media/portfolio/kaspi/5e084c8096acc6f2.webp",
        aspectRatio: "60/61",
        caption: "YEPO LS-919 / Grey / 05",
        alt: "YEPO LS-919 / Grey product visual 05",
        translations: {
          ru: {
            alt: "YEPO LS-919 / Серый — визуал товара 05",
          },
          kk: {
            alt: "YEPO LS-919 / Сұр — өнім визуалы 05",
          },
        },
      },
      {
        id: "product-03-image-06",
        type: "image",
        url: "/media/portfolio/kaspi/386248ce9cb80b94.webp",
        aspectRatio: "1/1",
        caption: "YEPO LS-919 / Grey / 06",
        alt: "YEPO LS-919 / Grey product visual 06",
        translations: {
          ru: {
            alt: "YEPO LS-919 / Серый — визуал товара 06",
          },
          kk: {
            alt: "YEPO LS-919 / Сұр — өнім визуалы 06",
          },
        },
      },
      {
        id: "product-03-image-07",
        type: "image",
        url: "/media/portfolio/kaspi/92cd9ce5fa18061f.webp",
        aspectRatio: "1/1",
        caption: "YEPO LS-919 / Grey / 07",
        alt: "YEPO LS-919 / Grey product visual 07",
        translations: {
          ru: {
            alt: "YEPO LS-919 / Серый — визуал товара 07",
          },
          kk: {
            alt: "YEPO LS-919 / Сұр — өнім визуалы 07",
          },
        },
      },
      {
        id: "product-03-image-08",
        type: "image",
        url: "/media/portfolio/kaspi/99d3e51e63668d2b.webp",
        aspectRatio: "1/1",
        caption: "YEPO LS-919 / Grey / 08",
        alt: "YEPO LS-919 / Grey product visual 08",
        translations: {
          ru: {
            alt: "YEPO LS-919 / Серый — визуал товара 08",
          },
          kk: {
            alt: "YEPO LS-919 / Сұр — өнім визуалы 08",
          },
        },
      },
      {
        id: "product-03-image-09",
        type: "image",
        url: "/media/portfolio/kaspi/d066a59bd69cc87f.webp",
        aspectRatio: "1/1",
        caption: "YEPO LS-919 / Grey / 09",
        alt: "YEPO LS-919 / Grey product visual 09",
        translations: {
          ru: {
            alt: "YEPO LS-919 / Серый — визуал товара 09",
          },
          kk: {
            alt: "YEPO LS-919 / Сұр — өнім визуалы 09",
          },
        },
      },
      {
        id: "product-03-image-10",
        type: "image",
        url: "/media/portfolio/kaspi/133c8483427c0c17.webp",
        aspectRatio: "540/551",
        caption: "YEPO LS-919 / Grey / 10",
        alt: "YEPO LS-919 / Grey product visual 10",
        translations: {
          ru: {
            alt: "YEPO LS-919 / Серый — визуал товара 10",
          },
          kk: {
            alt: "YEPO LS-919 / Сұр — өнім визуалы 10",
          },
        },
      },
      {
        id: "product-03-image-11",
        type: "image",
        url: "/media/portfolio/kaspi/2d7e0d95f295364e.webp",
        aspectRatio: "54/55",
        caption: "YEPO LS-919 / Grey / 11",
        alt: "YEPO LS-919 / Grey product visual 11",
        translations: {
          ru: {
            alt: "YEPO LS-919 / Серый — визуал товара 11",
          },
          kk: {
            alt: "YEPO LS-919 / Сұр — өнім визуалы 11",
          },
        },
      },
      {
        id: "product-03-image-12",
        type: "image",
        url: "/media/portfolio/kaspi/1ba5581848ef8ca6.webp",
        aspectRatio: "2/3",
        caption: "YEPO LS-919 / Grey / 12",
        alt: "YEPO LS-919 / Grey product visual 12",
        translations: {
          ru: {
            alt: "YEPO LS-919 / Серый — визуал товара 12",
          },
          kk: {
            alt: "YEPO LS-919 / Сұр — өнім визуалы 12",
          },
        },
      },
      {
        id: "product-03-image-13",
        type: "image",
        url: "/media/portfolio/kaspi/8e541b1cb13048f2.webp",
        aspectRatio: "2/3",
        caption: "YEPO LS-919 / Grey / 13",
        alt: "YEPO LS-919 / Grey product visual 13",
        translations: {
          ru: {
            alt: "YEPO LS-919 / Серый — визуал товара 13",
          },
          kk: {
            alt: "YEPO LS-919 / Сұр — өнім визуалы 13",
          },
        },
      },
      {
        id: "product-03-image-14",
        type: "image",
        url: "/media/portfolio/kaspi/24a9207233048736.webp",
        aspectRatio: "2/3",
        caption: "YEPO LS-919 / Grey / 14",
        alt: "YEPO LS-919 / Grey product visual 14",
        translations: {
          ru: {
            alt: "YEPO LS-919 / Серый — визуал товара 14",
          },
          kk: {
            alt: "YEPO LS-919 / Сұр — өнім визуалы 14",
          },
        },
      },
      {
        id: "product-03-image-15",
        type: "image",
        url: "/media/portfolio/kaspi/ca5f4de91992437e.webp",
        aspectRatio: "2/3",
        caption: "YEPO LS-919 / Grey / 15",
        alt: "YEPO LS-919 / Grey product visual 15",
        translations: {
          ru: {
            alt: "YEPO LS-919 / Серый — визуал товара 15",
          },
          kk: {
            alt: "YEPO LS-919 / Сұр — өнім визуалы 15",
          },
        },
      },
      {
        id: "product-03-image-16",
        type: "image",
        url: "/media/portfolio/kaspi/103996df957ca54f.webp",
        aspectRatio: "2/3",
        caption: "YEPO LS-919 / Grey / 16",
        alt: "YEPO LS-919 / Grey product visual 16",
        translations: {
          ru: {
            alt: "YEPO LS-919 / Серый — визуал товара 16",
          },
          kk: {
            alt: "YEPO LS-919 / Сұр — өнім визуалы 16",
          },
        },
      },
      {
        id: "product-03-image-17",
        type: "image",
        url: "/media/portfolio/kaspi/cd31a71d8a82b64c.webp",
        aspectRatio: "2/3",
        caption: "YEPO LS-919 / Grey / 17",
        alt: "YEPO LS-919 / Grey product visual 17",
        translations: {
          ru: {
            alt: "YEPO LS-919 / Серый — визуал товара 17",
          },
          kk: {
            alt: "YEPO LS-919 / Сұр — өнім визуалы 17",
          },
        },
      },
      {
        id: "product-03-image-18",
        type: "image",
        url: "/media/portfolio/kaspi/3a17d51c6000b487.webp",
        aspectRatio: "800/533",
        caption: "YEPO LS-919 / Grey / 18",
        alt: "YEPO LS-919 / Grey product visual 18",
        translations: {
          ru: {
            alt: "YEPO LS-919 / Серый — визуал товара 18",
          },
          kk: {
            alt: "YEPO LS-919 / Сұр — өнім визуалы 18",
          },
        },
      },
      {
        id: "product-03-image-19",
        type: "image",
        url: "/media/portfolio/kaspi/95226d024250363e.webp",
        aspectRatio: "36/55",
        caption: "YEPO LS-919 / Grey / 19",
        alt: "YEPO LS-919 / Grey product visual 19",
        translations: {
          ru: {
            alt: "YEPO LS-919 / Серый — визуал товара 19",
          },
          kk: {
            alt: "YEPO LS-919 / Сұр — өнім визуалы 19",
          },
        },
      },
      {
        id: "product-03-image-20",
        type: "image",
        url: "/media/portfolio/kaspi/9fdd1bf5c406b982.webp",
        aspectRatio: "2/3",
        caption: "YEPO LS-919 / Grey / 20",
        alt: "YEPO LS-919 / Grey product visual 20",
        translations: {
          ru: {
            alt: "YEPO LS-919 / Серый — визуал товара 20",
          },
          kk: {
            alt: "YEPO LS-919 / Сұр — өнім визуалы 20",
          },
        },
      },
      {
        id: "product-03-image-21",
        type: "image",
        url: "/media/portfolio/kaspi/4502a6f6b43a402f.webp",
        aspectRatio: "5/7",
        caption: "YEPO LS-919 / Grey / 21",
        alt: "YEPO LS-919 / Grey product visual 21",
        translations: {
          ru: {
            alt: "YEPO LS-919 / Серый — визуал товара 21",
          },
          kk: {
            alt: "YEPO LS-919 / Сұр — өнім визуалы 21",
          },
        },
      },
      {
        id: "product-03-image-22",
        type: "image",
        url: "/media/portfolio/kaspi/3458971ee2257f1d.webp",
        aspectRatio: "2/3",
        caption: "YEPO LS-919 / Grey / 22",
        alt: "YEPO LS-919 / Grey product visual 22",
        translations: {
          ru: {
            alt: "YEPO LS-919 / Серый — визуал товара 22",
          },
          kk: {
            alt: "YEPO LS-919 / Сұр — өнім визуалы 22",
          },
        },
      },
      {
        id: "product-03-image-23",
        type: "image",
        url: "/media/portfolio/kaspi/06cc62f44e56acf8.webp",
        aspectRatio: "1/1",
        caption: "YEPO LS-919 / Grey / 23",
        alt: "YEPO LS-919 / Grey product visual 23",
        translations: {
          ru: {
            alt: "YEPO LS-919 / Серый — визуал товара 23",
          },
          kk: {
            alt: "YEPO LS-919 / Сұр — өнім визуалы 23",
          },
        },
      },
      {
        id: "product-03-image-24",
        type: "image",
        url: "/media/portfolio/kaspi/f353e67e33453e20.webp",
        aspectRatio: "1/1",
        caption: "YEPO LS-919 / Grey / 24",
        alt: "YEPO LS-919 / Grey product visual 24",
        translations: {
          ru: {
            alt: "YEPO LS-919 / Серый — визуал товара 24",
          },
          kk: {
            alt: "YEPO LS-919 / Сұр — өнім визуалы 24",
          },
        },
      },
      {
        id: "product-03-image-25",
        type: "image",
        url: "/media/portfolio/kaspi/d85e4effa22365a7.webp",
        aspectRatio: "1/1",
        caption: "YEPO LS-919 / Grey / 25",
        alt: "YEPO LS-919 / Grey product visual 25",
        translations: {
          ru: {
            alt: "YEPO LS-919 / Серый — визуал товара 25",
          },
          kk: {
            alt: "YEPO LS-919 / Сұр — өнім визуалы 25",
          },
        },
      },
      {
        id: "product-03-image-26",
        type: "image",
        url: "/media/portfolio/kaspi/86bba9e261896051.webp",
        aspectRatio: "1/1",
        caption: "YEPO LS-919 / Grey / 26",
        alt: "YEPO LS-919 / Grey product visual 26",
        translations: {
          ru: {
            alt: "YEPO LS-919 / Серый — визуал товара 26",
          },
          kk: {
            alt: "YEPO LS-919 / Сұр — өнім визуалы 26",
          },
        },
      },
    ],
    translations: {
      ru: {
        title: "YEPO LS-919 / Серый — Инфографика товара",
        description:
          "Визуалы и инфографика карточки товара YEPO LS-919 / Серый, созданные в Photoshop и Photocraft.",
        role: ["Идея", "Графический дизайн"],
      },
      kk: {
        title: "YEPO LS-919 / Сұр — Өнім инфографикасы",
        description:
          "Photoshop пен Photocraft-та жасалған YEPO LS-919 / Сұр өнім карточкасының визуалдары мен инфографикасы.",
        role: ["Идея", "Графикалық дизайн"],
      },
    },
    role: ["Concept", "Graphic design"],
    tools: ["Photoshop", "Photocraft"],
    client: "YEPO",
    externalLinks: [
      {
        label: "View on Kaspi",
        url: "https://kaspi.kz/shop/p/komp-juternoe-kreslo-yepo-ls-919-seryi-136112165/?c=591010000&m=18349113&ms=true",
      },
    ],
    featured: false,
  },
  {
    id: "yepo-baby-travel-infographics",
    slug: "yepo-baby-travel-infographics",
    title: "YEPO Baby Travel — Product Infographics",
    category: "design",
    status: "published",
    description:
      "Product listing visuals and infographics for YEPO Baby Travel, developed with Photoshop and Photocraft.",
    coverImage: "/media/portfolio/kaspi/3f46ac6dae9b1d79.webp",
    coverAspectRatio: "1/1",
    coverAlt: "YEPO Baby Travel — Product Infographics",
    media: [
      {
        id: "product-04-image-01",
        type: "image",
        url: "/media/portfolio/kaspi/3f46ac6dae9b1d79.webp",
        aspectRatio: "1/1",
        caption: "YEPO Baby Travel / 01",
        alt: "YEPO Baby Travel product visual 01",
        translations: {
          ru: {
            alt: "YEPO Baby Travel — визуал товара 01",
          },
          kk: {
            alt: "YEPO Baby Travel — өнім визуалы 01",
          },
        },
      },
      {
        id: "product-04-image-02",
        type: "image",
        url: "/media/portfolio/kaspi/dcaecfe23708bfb6.webp",
        aspectRatio: "1/1",
        caption: "YEPO Baby Travel / 02",
        alt: "YEPO Baby Travel product visual 02",
        translations: {
          ru: {
            alt: "YEPO Baby Travel — визуал товара 02",
          },
          kk: {
            alt: "YEPO Baby Travel — өнім визуалы 02",
          },
        },
      },
      {
        id: "product-04-image-03",
        type: "image",
        url: "/media/portfolio/kaspi/13e7b113a53f6901.webp",
        aspectRatio: "1/1",
        caption: "YEPO Baby Travel / 03",
        alt: "YEPO Baby Travel product visual 03",
        translations: {
          ru: {
            alt: "YEPO Baby Travel — визуал товара 03",
          },
          kk: {
            alt: "YEPO Baby Travel — өнім визуалы 03",
          },
        },
      },
      {
        id: "product-04-image-04",
        type: "image",
        url: "/media/portfolio/kaspi/b5c98d6d7d2ce051.webp",
        aspectRatio: "1/1",
        caption: "YEPO Baby Travel / 04",
        alt: "YEPO Baby Travel product visual 04",
        translations: {
          ru: {
            alt: "YEPO Baby Travel — визуал товара 04",
          },
          kk: {
            alt: "YEPO Baby Travel — өнім визуалы 04",
          },
        },
      },
      {
        id: "product-04-image-05",
        type: "image",
        url: "/media/portfolio/kaspi/ed5b47089fdab2cd.webp",
        aspectRatio: "1/1",
        caption: "YEPO Baby Travel / 05",
        alt: "YEPO Baby Travel product visual 05",
        translations: {
          ru: {
            alt: "YEPO Baby Travel — визуал товара 05",
          },
          kk: {
            alt: "YEPO Baby Travel — өнім визуалы 05",
          },
        },
      },
      {
        id: "product-04-image-06",
        type: "image",
        url: "/media/portfolio/kaspi/7c694bf8c38b37c4.webp",
        aspectRatio: "135/137",
        caption: "YEPO Baby Travel / 06",
        alt: "YEPO Baby Travel product visual 06",
        translations: {
          ru: {
            alt: "YEPO Baby Travel — визуал товара 06",
          },
          kk: {
            alt: "YEPO Baby Travel — өнім визуалы 06",
          },
        },
      },
      {
        id: "product-04-image-07",
        type: "image",
        url: "/media/portfolio/kaspi/286dd82640a9b39c.webp",
        aspectRatio: "1/1",
        caption: "YEPO Baby Travel / 07",
        alt: "YEPO Baby Travel product visual 07",
        translations: {
          ru: {
            alt: "YEPO Baby Travel — визуал товара 07",
          },
          kk: {
            alt: "YEPO Baby Travel — өнім визуалы 07",
          },
        },
      },
      {
        id: "product-04-image-08",
        type: "image",
        url: "/media/portfolio/kaspi/57bb5a7d16a02581.webp",
        aspectRatio: "541/540",
        caption: "YEPO Baby Travel / 08",
        alt: "YEPO Baby Travel product visual 08",
        translations: {
          ru: {
            alt: "YEPO Baby Travel — визуал товара 08",
          },
          kk: {
            alt: "YEPO Baby Travel — өнім визуалы 08",
          },
        },
      },
      {
        id: "product-04-image-09",
        type: "image",
        url: "/media/portfolio/kaspi/875f6e970f97956a.webp",
        aspectRatio: "1/1",
        caption: "YEPO Baby Travel / 09",
        alt: "YEPO Baby Travel product visual 09",
        translations: {
          ru: {
            alt: "YEPO Baby Travel — визуал товара 09",
          },
          kk: {
            alt: "YEPO Baby Travel — өнім визуалы 09",
          },
        },
      },
      {
        id: "product-04-image-10",
        type: "image",
        url: "/media/portfolio/kaspi/695dc50eb47d48f3.webp",
        aspectRatio: "396/469",
        caption: "YEPO Baby Travel / 10",
        alt: "YEPO Baby Travel product visual 10",
        translations: {
          ru: {
            alt: "YEPO Baby Travel — визуал товара 10",
          },
          kk: {
            alt: "YEPO Baby Travel — өнім визуалы 10",
          },
        },
      },
      {
        id: "product-04-image-11",
        type: "image",
        url: "/media/portfolio/kaspi/7c9f4e8d1aeead58.webp",
        aspectRatio: "401/476",
        caption: "YEPO Baby Travel / 11",
        alt: "YEPO Baby Travel product visual 11",
        translations: {
          ru: {
            alt: "YEPO Baby Travel — визуал товара 11",
          },
          kk: {
            alt: "YEPO Baby Travel — өнім визуалы 11",
          },
        },
      },
      {
        id: "product-04-image-12",
        type: "image",
        url: "/media/portfolio/kaspi/c06dece25976013d.webp",
        aspectRatio: "387/481",
        caption: "YEPO Baby Travel / 12",
        alt: "YEPO Baby Travel product visual 12",
        translations: {
          ru: {
            alt: "YEPO Baby Travel — визуал товара 12",
          },
          kk: {
            alt: "YEPO Baby Travel — өнім визуалы 12",
          },
        },
      },
      {
        id: "product-04-image-13",
        type: "image",
        url: "/media/portfolio/kaspi/106bf681a96e87bd.webp",
        aspectRatio: "221/478",
        caption: "YEPO Baby Travel / 13",
        alt: "YEPO Baby Travel product visual 13",
        translations: {
          ru: {
            alt: "YEPO Baby Travel — визуал товара 13",
          },
          kk: {
            alt: "YEPO Baby Travel — өнім визуалы 13",
          },
        },
      },
      {
        id: "product-04-image-14",
        type: "image",
        url: "/media/portfolio/kaspi/d819dd4e5342841e.webp",
        aspectRatio: "47/93",
        caption: "YEPO Baby Travel / 14",
        alt: "YEPO Baby Travel product visual 14",
        translations: {
          ru: {
            alt: "YEPO Baby Travel — визуал товара 14",
          },
          kk: {
            alt: "YEPO Baby Travel — өнім визуалы 14",
          },
        },
      },
      {
        id: "product-04-image-15",
        type: "image",
        url: "/media/portfolio/kaspi/b50a3ea790be4637.webp",
        aspectRatio: "737/910",
        caption: "YEPO Baby Travel / 15",
        alt: "YEPO Baby Travel product visual 15",
        translations: {
          ru: {
            alt: "YEPO Baby Travel — визуал товара 15",
          },
          kk: {
            alt: "YEPO Baby Travel — өнім визуалы 15",
          },
        },
      },
      {
        id: "product-04-image-16",
        type: "image",
        url: "/media/portfolio/kaspi/7151cc17c72544c6.webp",
        aspectRatio: "1129/1080",
        caption: "YEPO Baby Travel / 16",
        alt: "YEPO Baby Travel product visual 16",
        translations: {
          ru: {
            alt: "YEPO Baby Travel — визуал товара 16",
          },
          kk: {
            alt: "YEPO Baby Travel — өнім визуалы 16",
          },
        },
      },
      {
        id: "product-04-image-17",
        type: "image",
        url: "/media/portfolio/kaspi/846f416847dfbb25.webp",
        aspectRatio: "1/1",
        caption: "YEPO Baby Travel / 17",
        alt: "YEPO Baby Travel product visual 17",
        translations: {
          ru: {
            alt: "YEPO Baby Travel — визуал товара 17",
          },
          kk: {
            alt: "YEPO Baby Travel — өнім визуалы 17",
          },
        },
      },
      {
        id: "product-04-image-18",
        type: "image",
        url: "/media/portfolio/kaspi/d40129f32c246456.webp",
        aspectRatio: "619/1036",
        caption: "YEPO Baby Travel / 18",
        alt: "YEPO Baby Travel product visual 18",
        translations: {
          ru: {
            alt: "YEPO Baby Travel — визуал товара 18",
          },
          kk: {
            alt: "YEPO Baby Travel — өнім визуалы 18",
          },
        },
      },
      {
        id: "product-04-image-19",
        type: "image",
        url: "/media/portfolio/kaspi/a425802b27899819.webp",
        aspectRatio: "1/1",
        caption: "YEPO Baby Travel / 19",
        alt: "YEPO Baby Travel product visual 19",
        translations: {
          ru: {
            alt: "YEPO Baby Travel — визуал товара 19",
          },
          kk: {
            alt: "YEPO Baby Travel — өнім визуалы 19",
          },
        },
      },
      {
        id: "product-04-image-20",
        type: "image",
        url: "/media/portfolio/kaspi/b4fe7436eca75f81.webp",
        aspectRatio: "1/1",
        caption: "YEPO Baby Travel / 20",
        alt: "YEPO Baby Travel product visual 20",
        translations: {
          ru: {
            alt: "YEPO Baby Travel — визуал товара 20",
          },
          kk: {
            alt: "YEPO Baby Travel — өнім визуалы 20",
          },
        },
      },
      {
        id: "product-04-image-21",
        type: "image",
        url: "/media/portfolio/kaspi/e4b4026f1aa85ae2.webp",
        aspectRatio: "600/481",
        caption: "YEPO Baby Travel / 21",
        alt: "YEPO Baby Travel product visual 21",
        translations: {
          ru: {
            alt: "YEPO Baby Travel — визуал товара 21",
          },
          kk: {
            alt: "YEPO Baby Travel — өнім визуалы 21",
          },
        },
      },
    ],
    translations: {
      ru: {
        title: "YEPO Baby Travel — Инфографика товара",
        description:
          "Визуалы и инфографика карточки товара YEPO Baby Travel, созданные в Photoshop и Photocraft.",
        role: ["Идея", "Графический дизайн"],
      },
      kk: {
        title: "YEPO Baby Travel — Өнім инфографикасы",
        description:
          "Photoshop пен Photocraft-та жасалған YEPO Baby Travel өнім карточкасының визуалдары мен инфографикасы.",
        role: ["Идея", "Графикалық дизайн"],
      },
    },
    role: ["Concept", "Graphic design"],
    tools: ["Photoshop", "Photocraft"],
    client: "YEPO",
    externalLinks: [
      {
        label: "View on Kaspi",
        url: "https://kaspi.kz/shop/p/koljaska-progulochnaja-yepo-baby-travel-seryi-168998940/?c=591010000&m=18349113&ms=true",
      },
    ],
    featured: false,
  },
  {
    id: "yepo-ls-919-black-infographics",
    slug: "yepo-ls-919-black-infographics",
    title: "YEPO LS-919 / Black — Product Infographics",
    category: "design",
    status: "published",
    description:
      "Product listing visuals and infographics for YEPO LS-919 / Black, developed with Photoshop and Photocraft.",
    coverImage: "/media/portfolio/kaspi/83fee4a72165267f.webp",
    coverAspectRatio: "1/1",
    coverAlt: "YEPO LS-919 / Black — Product Infographics",
    media: [
      {
        id: "product-05-image-01",
        type: "image",
        url: "/media/portfolio/kaspi/83fee4a72165267f.webp",
        aspectRatio: "1/1",
        caption: "YEPO LS-919 / Black / 01",
        alt: "YEPO LS-919 / Black product visual 01",
        translations: {
          ru: {
            alt: "YEPO LS-919 / Чёрный — визуал товара 01",
          },
          kk: {
            alt: "YEPO LS-919 / Қара — өнім визуалы 01",
          },
        },
      },
      {
        id: "product-05-image-02",
        type: "image",
        url: "/media/portfolio/kaspi/d21f888c3076d2e9.webp",
        aspectRatio: "1/1",
        caption: "YEPO LS-919 / Black / 02",
        alt: "YEPO LS-919 / Black product visual 02",
        translations: {
          ru: {
            alt: "YEPO LS-919 / Чёрный — визуал товара 02",
          },
          kk: {
            alt: "YEPO LS-919 / Қара — өнім визуалы 02",
          },
        },
      },
      {
        id: "product-05-image-03",
        type: "image",
        url: "/media/portfolio/kaspi/90d295ab5d47bec8.webp",
        aspectRatio: "1/1",
        caption: "YEPO LS-919 / Black / 03",
        alt: "YEPO LS-919 / Black product visual 03",
        translations: {
          ru: {
            alt: "YEPO LS-919 / Чёрный — визуал товара 03",
          },
          kk: {
            alt: "YEPO LS-919 / Қара — өнім визуалы 03",
          },
        },
      },
      {
        id: "product-05-image-04",
        type: "image",
        url: "/media/portfolio/kaspi/11449c19ac78b461.webp",
        aspectRatio: "1/1",
        caption: "YEPO LS-919 / Black / 04",
        alt: "YEPO LS-919 / Black product visual 04",
        translations: {
          ru: {
            alt: "YEPO LS-919 / Чёрный — визуал товара 04",
          },
          kk: {
            alt: "YEPO LS-919 / Қара — өнім визуалы 04",
          },
        },
      },
      {
        id: "product-05-image-05",
        type: "image",
        url: "/media/portfolio/kaspi/844e6de9eda4d30f.webp",
        aspectRatio: "60/61",
        caption: "YEPO LS-919 / Black / 05",
        alt: "YEPO LS-919 / Black product visual 05",
        translations: {
          ru: {
            alt: "YEPO LS-919 / Чёрный — визуал товара 05",
          },
          kk: {
            alt: "YEPO LS-919 / Қара — өнім визуалы 05",
          },
        },
      },
      {
        id: "product-05-image-06",
        type: "image",
        url: "/media/portfolio/kaspi/b7479b48114fc201.webp",
        aspectRatio: "1/1",
        caption: "YEPO LS-919 / Black / 06",
        alt: "YEPO LS-919 / Black product visual 06",
        translations: {
          ru: {
            alt: "YEPO LS-919 / Чёрный — визуал товара 06",
          },
          kk: {
            alt: "YEPO LS-919 / Қара — өнім визуалы 06",
          },
        },
      },
      {
        id: "product-05-image-07",
        type: "image",
        url: "/media/portfolio/kaspi/7fe25d951b25e58a.webp",
        aspectRatio: "1/1",
        caption: "YEPO LS-919 / Black / 07",
        alt: "YEPO LS-919 / Black product visual 07",
        translations: {
          ru: {
            alt: "YEPO LS-919 / Чёрный — визуал товара 07",
          },
          kk: {
            alt: "YEPO LS-919 / Қара — өнім визуалы 07",
          },
        },
      },
      {
        id: "product-05-image-08",
        type: "image",
        url: "/media/portfolio/kaspi/8ec2bb94ced26c10.webp",
        aspectRatio: "1/1",
        caption: "YEPO LS-919 / Black / 08",
        alt: "YEPO LS-919 / Black product visual 08",
        translations: {
          ru: {
            alt: "YEPO LS-919 / Чёрный — визуал товара 08",
          },
          kk: {
            alt: "YEPO LS-919 / Қара — өнім визуалы 08",
          },
        },
      },
      {
        id: "product-05-image-09",
        type: "image",
        url: "/media/portfolio/kaspi/3b3967ddd312e376.webp",
        aspectRatio: "1/1",
        caption: "YEPO LS-919 / Black / 09",
        alt: "YEPO LS-919 / Black product visual 09",
        translations: {
          ru: {
            alt: "YEPO LS-919 / Чёрный — визуал товара 09",
          },
          kk: {
            alt: "YEPO LS-919 / Қара — өнім визуалы 09",
          },
        },
      },
      {
        id: "product-05-image-10",
        type: "image",
        url: "/media/portfolio/kaspi/92352bd182d2e178.webp",
        aspectRatio: "54/55",
        caption: "YEPO LS-919 / Black / 10",
        alt: "YEPO LS-919 / Black product visual 10",
        translations: {
          ru: {
            alt: "YEPO LS-919 / Чёрный — визуал товара 10",
          },
          kk: {
            alt: "YEPO LS-919 / Қара — өнім визуалы 10",
          },
        },
      },
      {
        id: "product-05-image-11",
        type: "image",
        url: "/media/portfolio/kaspi/fa339b88267ae716.webp",
        aspectRatio: "54/55",
        caption: "YEPO LS-919 / Black / 11",
        alt: "YEPO LS-919 / Black product visual 11",
        translations: {
          ru: {
            alt: "YEPO LS-919 / Чёрный — визуал товара 11",
          },
          kk: {
            alt: "YEPO LS-919 / Қара — өнім визуалы 11",
          },
        },
      },
      {
        id: "product-05-image-12",
        type: "image",
        url: "/media/portfolio/kaspi/42546578064f8881.webp",
        aspectRatio: "1/1",
        caption: "YEPO LS-919 / Black / 12",
        alt: "YEPO LS-919 / Black product visual 12",
        translations: {
          ru: {
            alt: "YEPO LS-919 / Чёрный — визуал товара 12",
          },
          kk: {
            alt: "YEPO LS-919 / Қара — өнім визуалы 12",
          },
        },
      },
      {
        id: "product-05-image-13",
        type: "image",
        url: "/media/portfolio/kaspi/c38560fd9e45a16d.webp",
        aspectRatio: "1/1",
        caption: "YEPO LS-919 / Black / 13",
        alt: "YEPO LS-919 / Black product visual 13",
        translations: {
          ru: {
            alt: "YEPO LS-919 / Чёрный — визуал товара 13",
          },
          kk: {
            alt: "YEPO LS-919 / Қара — өнім визуалы 13",
          },
        },
      },
      {
        id: "product-05-image-14",
        type: "image",
        url: "/media/portfolio/kaspi/d1952d47acacd021.webp",
        aspectRatio: "2/3",
        caption: "YEPO LS-919 / Black / 14",
        alt: "YEPO LS-919 / Black product visual 14",
        translations: {
          ru: {
            alt: "YEPO LS-919 / Чёрный — визуал товара 14",
          },
          kk: {
            alt: "YEPO LS-919 / Қара — өнім визуалы 14",
          },
        },
      },
      {
        id: "product-05-image-15",
        type: "image",
        url: "/media/portfolio/kaspi/17136f40fdcb43db.webp",
        aspectRatio: "2/3",
        caption: "YEPO LS-919 / Black / 15",
        alt: "YEPO LS-919 / Black product visual 15",
        translations: {
          ru: {
            alt: "YEPO LS-919 / Чёрный — визуал товара 15",
          },
          kk: {
            alt: "YEPO LS-919 / Қара — өнім визуалы 15",
          },
        },
      },
      {
        id: "product-05-image-16",
        type: "image",
        url: "/media/portfolio/kaspi/6981b00458c6c141.webp",
        aspectRatio: "2/3",
        caption: "YEPO LS-919 / Black / 16",
        alt: "YEPO LS-919 / Black product visual 16",
        translations: {
          ru: {
            alt: "YEPO LS-919 / Чёрный — визуал товара 16",
          },
          kk: {
            alt: "YEPO LS-919 / Қара — өнім визуалы 16",
          },
        },
      },
      {
        id: "product-05-image-17",
        type: "image",
        url: "/media/portfolio/kaspi/d47144d34f1f508d.webp",
        aspectRatio: "2/3",
        caption: "YEPO LS-919 / Black / 17",
        alt: "YEPO LS-919 / Black product visual 17",
        translations: {
          ru: {
            alt: "YEPO LS-919 / Чёрный — визуал товара 17",
          },
          kk: {
            alt: "YEPO LS-919 / Қара — өнім визуалы 17",
          },
        },
      },
      {
        id: "product-05-image-18",
        type: "image",
        url: "/media/portfolio/kaspi/6cc43ff3d471cec4.webp",
        aspectRatio: "2/3",
        caption: "YEPO LS-919 / Black / 18",
        alt: "YEPO LS-919 / Black product visual 18",
        translations: {
          ru: {
            alt: "YEPO LS-919 / Чёрный — визуал товара 18",
          },
          kk: {
            alt: "YEPO LS-919 / Қара — өнім визуалы 18",
          },
        },
      },
      {
        id: "product-05-image-19",
        type: "image",
        url: "/media/portfolio/kaspi/b86dbe1e47c10745.webp",
        aspectRatio: "2/3",
        caption: "YEPO LS-919 / Black / 19",
        alt: "YEPO LS-919 / Black product visual 19",
        translations: {
          ru: {
            alt: "YEPO LS-919 / Чёрный — визуал товара 19",
          },
          kk: {
            alt: "YEPO LS-919 / Қара — өнім визуалы 19",
          },
        },
      },
      {
        id: "product-05-image-20",
        type: "image",
        url: "/media/portfolio/kaspi/578235141ee893d7.webp",
        aspectRatio: "2/3",
        caption: "YEPO LS-919 / Black / 20",
        alt: "YEPO LS-919 / Black product visual 20",
        translations: {
          ru: {
            alt: "YEPO LS-919 / Чёрный — визуал товара 20",
          },
          kk: {
            alt: "YEPO LS-919 / Қара — өнім визуалы 20",
          },
        },
      },
      {
        id: "product-05-image-21",
        type: "image",
        url: "/media/portfolio/kaspi/93284944a13bc12b.webp",
        aspectRatio: "2/3",
        caption: "YEPO LS-919 / Black / 21",
        alt: "YEPO LS-919 / Black product visual 21",
        translations: {
          ru: {
            alt: "YEPO LS-919 / Чёрный — визуал товара 21",
          },
          kk: {
            alt: "YEPO LS-919 / Қара — өнім визуалы 21",
          },
        },
      },
      {
        id: "product-05-image-22",
        type: "image",
        url: "/media/portfolio/kaspi/95dc5c525fc82f9d.webp",
        aspectRatio: "2/3",
        caption: "YEPO LS-919 / Black / 22",
        alt: "YEPO LS-919 / Black product visual 22",
        translations: {
          ru: {
            alt: "YEPO LS-919 / Чёрный — визуал товара 22",
          },
          kk: {
            alt: "YEPO LS-919 / Қара — өнім визуалы 22",
          },
        },
      },
      {
        id: "product-05-image-23",
        type: "image",
        url: "/media/portfolio/kaspi/c13258424cd5d5b2.webp",
        aspectRatio: "1/1",
        caption: "YEPO LS-919 / Black / 23",
        alt: "YEPO LS-919 / Black product visual 23",
        translations: {
          ru: {
            alt: "YEPO LS-919 / Чёрный — визуал товара 23",
          },
          kk: {
            alt: "YEPO LS-919 / Қара — өнім визуалы 23",
          },
        },
      },
      {
        id: "product-05-image-24",
        type: "image",
        url: "/media/portfolio/kaspi/80d5eb3e77d63c87.webp",
        aspectRatio: "1/1",
        caption: "YEPO LS-919 / Black / 24",
        alt: "YEPO LS-919 / Black product visual 24",
        translations: {
          ru: {
            alt: "YEPO LS-919 / Чёрный — визуал товара 24",
          },
          kk: {
            alt: "YEPO LS-919 / Қара — өнім визуалы 24",
          },
        },
      },
    ],
    translations: {
      ru: {
        title: "YEPO LS-919 / Чёрный — Инфографика товара",
        description:
          "Визуалы и инфографика карточки товара YEPO LS-919 / Чёрный, созданные в Photoshop и Photocraft.",
        role: ["Идея", "Графический дизайн"],
      },
      kk: {
        title: "YEPO LS-919 / Қара — Өнім инфографикасы",
        description:
          "Photoshop пен Photocraft-та жасалған YEPO LS-919 / Қара өнім карточкасының визуалдары мен инфографикасы.",
        role: ["Идея", "Графикалық дизайн"],
      },
    },
    role: ["Concept", "Graphic design"],
    tools: ["Photoshop", "Photocraft"],
    client: "YEPO",
    externalLinks: [
      {
        label: "View on Kaspi",
        url: "https://kaspi.kz/shop/p/komp-juternoe-kreslo-yepo-ls-919-chernyi-133313460/?c=591010000&m=18349113&ms=true",
      },
    ],
    featured: false,
  },
  {
    id: "yepo-ls-401-infographics",
    slug: "yepo-ls-401-infographics",
    title: "YEPO LS-401 — Product Infographics",
    category: "design",
    status: "published",
    description:
      "Product listing visuals and infographics for YEPO LS-401, developed with Photoshop and Photocraft.",
    coverImage: "/media/portfolio/kaspi/e1f1bef9c2496bc3.webp",
    coverAspectRatio: "1/1",
    coverAlt: "YEPO LS-401 — Product Infographics",
    media: [
      {
        id: "product-06-image-01",
        type: "image",
        url: "/media/portfolio/kaspi/e1f1bef9c2496bc3.webp",
        aspectRatio: "1/1",
        caption: "YEPO LS-401 / 01",
        alt: "YEPO LS-401 product visual 01",
        translations: {
          ru: {
            alt: "YEPO LS-401 — визуал товара 01",
          },
          kk: {
            alt: "YEPO LS-401 — өнім визуалы 01",
          },
        },
      },
      {
        id: "product-06-image-02",
        type: "image",
        url: "/media/portfolio/kaspi/714bdf70e11e8f83.webp",
        aspectRatio: "553/540",
        caption: "YEPO LS-401 / 02",
        alt: "YEPO LS-401 product visual 02",
        translations: {
          ru: {
            alt: "YEPO LS-401 — визуал товара 02",
          },
          kk: {
            alt: "YEPO LS-401 — өнім визуалы 02",
          },
        },
      },
      {
        id: "product-06-image-03",
        type: "image",
        url: "/media/portfolio/kaspi/053b4bdaa2a9924a.webp",
        aspectRatio: "1097/1080",
        caption: "YEPO LS-401 / 03",
        alt: "YEPO LS-401 product visual 03",
        translations: {
          ru: {
            alt: "YEPO LS-401 — визуал товара 03",
          },
          kk: {
            alt: "YEPO LS-401 — өнім визуалы 03",
          },
        },
      },
      {
        id: "product-06-image-04",
        type: "image",
        url: "/media/portfolio/kaspi/c237d5fb3cf32968.webp",
        aspectRatio: "135/139",
        caption: "YEPO LS-401 / 04",
        alt: "YEPO LS-401 product visual 04",
        translations: {
          ru: {
            alt: "YEPO LS-401 — визуал товара 04",
          },
          kk: {
            alt: "YEPO LS-401 — өнім визуалы 04",
          },
        },
      },
      {
        id: "product-06-image-05",
        type: "image",
        url: "/media/portfolio/kaspi/7d0c8607d7c9a842.webp",
        aspectRatio: "3/4",
        caption: "YEPO LS-401 / 05",
        alt: "YEPO LS-401 product visual 05",
        translations: {
          ru: {
            alt: "YEPO LS-401 — визуал товара 05",
          },
          kk: {
            alt: "YEPO LS-401 — өнім визуалы 05",
          },
        },
      },
      {
        id: "product-06-image-06",
        type: "image",
        url: "/media/portfolio/kaspi/43813b435001439a.webp",
        aspectRatio: "3/4",
        caption: "YEPO LS-401 / 06",
        alt: "YEPO LS-401 product visual 06",
        translations: {
          ru: {
            alt: "YEPO LS-401 — визуал товара 06",
          },
          kk: {
            alt: "YEPO LS-401 — өнім визуалы 06",
          },
        },
      },
      {
        id: "product-06-image-07",
        type: "image",
        url: "/media/portfolio/kaspi/dfdef8d1d6de7ef1.webp",
        aspectRatio: "3/4",
        caption: "YEPO LS-401 / 07",
        alt: "YEPO LS-401 product visual 07",
        translations: {
          ru: {
            alt: "YEPO LS-401 — визуал товара 07",
          },
          kk: {
            alt: "YEPO LS-401 — өнім визуалы 07",
          },
        },
      },
      {
        id: "product-06-image-08",
        type: "image",
        url: "/media/portfolio/kaspi/61efd755edb24981.webp",
        aspectRatio: "224/299",
        caption: "YEPO LS-401 / 08",
        alt: "YEPO LS-401 product visual 08",
        translations: {
          ru: {
            alt: "YEPO LS-401 — визуал товара 08",
          },
          kk: {
            alt: "YEPO LS-401 — өнім визуалы 08",
          },
        },
      },
      {
        id: "product-06-image-09",
        type: "image",
        url: "/media/portfolio/kaspi/2c340bdf8665d6af.webp",
        aspectRatio: "3/4",
        caption: "YEPO LS-401 / 09",
        alt: "YEPO LS-401 product visual 09",
        translations: {
          ru: {
            alt: "YEPO LS-401 — визуал товара 09",
          },
          kk: {
            alt: "YEPO LS-401 — өнім визуалы 09",
          },
        },
      },
      {
        id: "product-06-image-10",
        type: "image",
        url: "/media/portfolio/kaspi/7a2b4867d4421395.webp",
        aspectRatio: "224/299",
        caption: "YEPO LS-401 / 10",
        alt: "YEPO LS-401 product visual 10",
        translations: {
          ru: {
            alt: "YEPO LS-401 — визуал товара 10",
          },
          kk: {
            alt: "YEPO LS-401 — өнім визуалы 10",
          },
        },
      },
      {
        id: "product-06-image-11",
        type: "image",
        url: "/media/portfolio/kaspi/57746967767a8f35.webp",
        aspectRatio: "391/421",
        caption: "YEPO LS-401 / 11",
        alt: "YEPO LS-401 product visual 11",
        translations: {
          ru: {
            alt: "YEPO LS-401 — визуал товара 11",
          },
          kk: {
            alt: "YEPO LS-401 — өнім визуалы 11",
          },
        },
      },
      {
        id: "product-06-image-12",
        type: "image",
        url: "/media/portfolio/kaspi/b1c407af30e8ed56.webp",
        aspectRatio: "224/299",
        caption: "YEPO LS-401 / 12",
        alt: "YEPO LS-401 product visual 12",
        translations: {
          ru: {
            alt: "YEPO LS-401 — визуал товара 12",
          },
          kk: {
            alt: "YEPO LS-401 — өнім визуалы 12",
          },
        },
      },
    ],
    translations: {
      ru: {
        title: "YEPO LS-401 — Инфографика товара",
        description:
          "Визуалы и инфографика карточки товара YEPO LS-401, созданные в Photoshop и Photocraft.",
        role: ["Идея", "Графический дизайн"],
      },
      kk: {
        title: "YEPO LS-401 — Өнім инфографикасы",
        description:
          "Photoshop пен Photocraft-та жасалған YEPO LS-401 өнім карточкасының визуалдары мен инфографикасы.",
        role: ["Идея", "Графикалық дизайн"],
      },
    },
    role: ["Concept", "Graphic design"],
    tools: ["Photoshop", "Photocraft"],
    client: "YEPO",
    externalLinks: [
      {
        label: "View on Kaspi",
        url: "https://kaspi.kz/shop/p/ofisnoe-kreslo-yepo-ls-401-chernyi-167629490/?c=591010000&m=18349113&ms=true",
      },
    ],
    featured: false,
  },
  {
    id: "yepo-ls-901-grey-infographics",
    slug: "yepo-ls-901-grey-infographics",
    title: "YEPO LS-901 / Grey — Product Infographics",
    category: "design",
    status: "published",
    description:
      "Product listing visuals and infographics for YEPO LS-901 / Grey, developed with Photoshop and Photocraft.",
    coverImage: "/media/portfolio/kaspi/f3314b1f6ea1d6c9.webp",
    coverAspectRatio: "1/1",
    coverAlt: "YEPO LS-901 / Grey — Product Infographics",
    media: [
      {
        id: "product-07-image-01",
        type: "image",
        url: "/media/portfolio/kaspi/f3314b1f6ea1d6c9.webp",
        aspectRatio: "1/1",
        caption: "YEPO LS-901 / Grey / 01",
        alt: "YEPO LS-901 / Grey product visual 01",
        translations: {
          ru: {
            alt: "YEPO LS-901 / Серый — визуал товара 01",
          },
          kk: {
            alt: "YEPO LS-901 / Сұр — өнім визуалы 01",
          },
        },
      },
      {
        id: "product-07-image-02",
        type: "image",
        url: "/media/portfolio/kaspi/4c3362d10f8ca17d.webp",
        aspectRatio: "1/1",
        caption: "YEPO LS-901 / Grey / 02",
        alt: "YEPO LS-901 / Grey product visual 02",
        translations: {
          ru: {
            alt: "YEPO LS-901 / Серый — визуал товара 02",
          },
          kk: {
            alt: "YEPO LS-901 / Сұр — өнім визуалы 02",
          },
        },
      },
      {
        id: "product-07-image-03",
        type: "image",
        url: "/media/portfolio/kaspi/62688ca653bf02d2.webp",
        aspectRatio: "540/553",
        caption: "YEPO LS-901 / Grey / 03",
        alt: "YEPO LS-901 / Grey product visual 03",
        translations: {
          ru: {
            alt: "YEPO LS-901 / Серый — визуал товара 03",
          },
          kk: {
            alt: "YEPO LS-901 / Сұр — өнім визуалы 03",
          },
        },
      },
      {
        id: "product-07-image-04",
        type: "image",
        url: "/media/portfolio/kaspi/1b6dc221419b0184.webp",
        aspectRatio: "90/91",
        caption: "YEPO LS-901 / Grey / 04",
        alt: "YEPO LS-901 / Grey product visual 04",
        translations: {
          ru: {
            alt: "YEPO LS-901 / Серый — визуал товара 04",
          },
          kk: {
            alt: "YEPO LS-901 / Сұр — өнім визуалы 04",
          },
        },
      },
      {
        id: "product-07-image-05",
        type: "image",
        url: "/media/portfolio/kaspi/d7fa3fccd10ec68f.webp",
        aspectRatio: "1/1",
        caption: "YEPO LS-901 / Grey / 05",
        alt: "YEPO LS-901 / Grey product visual 05",
        translations: {
          ru: {
            alt: "YEPO LS-901 / Серый — визуал товара 05",
          },
          kk: {
            alt: "YEPO LS-901 / Сұр — өнім визуалы 05",
          },
        },
      },
      {
        id: "product-07-image-06",
        type: "image",
        url: "/media/portfolio/kaspi/1abe2d47fca21b80.webp",
        aspectRatio: "1/1",
        caption: "YEPO LS-901 / Grey / 06",
        alt: "YEPO LS-901 / Grey product visual 06",
        translations: {
          ru: {
            alt: "YEPO LS-901 / Серый — визуал товара 06",
          },
          kk: {
            alt: "YEPO LS-901 / Сұр — өнім визуалы 06",
          },
        },
      },
      {
        id: "product-07-image-07",
        type: "image",
        url: "/media/portfolio/kaspi/13ea6d0d4504a811.webp",
        aspectRatio: "1/1",
        caption: "YEPO LS-901 / Grey / 07",
        alt: "YEPO LS-901 / Grey product visual 07",
        translations: {
          ru: {
            alt: "YEPO LS-901 / Серый — визуал товара 07",
          },
          kk: {
            alt: "YEPO LS-901 / Сұр — өнім визуалы 07",
          },
        },
      },
      {
        id: "product-07-image-08",
        type: "image",
        url: "/media/portfolio/kaspi/ed2910d56f9b9b9c.webp",
        aspectRatio: "1/1",
        caption: "YEPO LS-901 / Grey / 08",
        alt: "YEPO LS-901 / Grey product visual 08",
        translations: {
          ru: {
            alt: "YEPO LS-901 / Серый — визуал товара 08",
          },
          kk: {
            alt: "YEPO LS-901 / Сұр — өнім визуалы 08",
          },
        },
      },
      {
        id: "product-07-image-09",
        type: "image",
        url: "/media/portfolio/kaspi/9afd79d9a347ebb8.webp",
        aspectRatio: "540/761",
        caption: "YEPO LS-901 / Grey / 09",
        alt: "YEPO LS-901 / Grey product visual 09",
        translations: {
          ru: {
            alt: "YEPO LS-901 / Серый — визуал товара 09",
          },
          kk: {
            alt: "YEPO LS-901 / Сұр — өнім визуалы 09",
          },
        },
      },
      {
        id: "product-07-image-10",
        type: "image",
        url: "/media/portfolio/kaspi/7543fbc8b1edee09.webp",
        aspectRatio: "540/721",
        caption: "YEPO LS-901 / Grey / 10",
        alt: "YEPO LS-901 / Grey product visual 10",
        translations: {
          ru: {
            alt: "YEPO LS-901 / Серый — визуал товара 10",
          },
          kk: {
            alt: "YEPO LS-901 / Сұр — өнім визуалы 10",
          },
        },
      },
      {
        id: "product-07-image-11",
        type: "image",
        url: "/media/portfolio/kaspi/0df2e27daa0ffe40.webp",
        aspectRatio: "540/721",
        caption: "YEPO LS-901 / Grey / 11",
        alt: "YEPO LS-901 / Grey product visual 11",
        translations: {
          ru: {
            alt: "YEPO LS-901 / Серый — визуал товара 11",
          },
          kk: {
            alt: "YEPO LS-901 / Сұр — өнім визуалы 11",
          },
        },
      },
      {
        id: "product-07-image-12",
        type: "image",
        url: "/media/portfolio/kaspi/3f7b521f24ef7e62.webp",
        aspectRatio: "540/721",
        caption: "YEPO LS-901 / Grey / 12",
        alt: "YEPO LS-901 / Grey product visual 12",
        translations: {
          ru: {
            alt: "YEPO LS-901 / Серый — визуал товара 12",
          },
          kk: {
            alt: "YEPO LS-901 / Сұр — өнім визуалы 12",
          },
        },
      },
    ],
    translations: {
      ru: {
        title: "YEPO LS-901 / Серый — Инфографика товара",
        description:
          "Визуалы и инфографика карточки товара YEPO LS-901 / Серый, созданные в Photoshop и Photocraft.",
        role: ["Идея", "Графический дизайн"],
      },
      kk: {
        title: "YEPO LS-901 / Сұр — Өнім инфографикасы",
        description:
          "Photoshop пен Photocraft-та жасалған YEPO LS-901 / Сұр өнім карточкасының визуалдары мен инфографикасы.",
        role: ["Идея", "Графикалық дизайн"],
      },
    },
    role: ["Concept", "Graphic design"],
    tools: ["Photoshop", "Photocraft"],
    client: "YEPO",
    externalLinks: [
      {
        label: "View on Kaspi",
        url: "https://kaspi.kz/shop/p/ofisnoe-kreslo-yepo-ls-901-seryi-167370785/?c=591010000&m=18349113&ms=true",
      },
    ],
    featured: false,
  },
  {
    id: "yepo-pulse-2-infographics",
    slug: "yepo-pulse-2-infographics",
    title: "YEPO Pulse 2 — Product Infographics",
    category: "design",
    status: "published",
    description:
      "Product listing visuals and infographics for YEPO Pulse 2, developed with Photoshop and Photocraft.",
    coverImage: "/media/portfolio/kaspi/7edfdb9a395f5576.webp",
    coverAspectRatio: "1/1",
    coverAlt: "YEPO Pulse 2 — Product Infographics",
    media: [
      {
        id: "product-08-image-01",
        type: "image",
        url: "/media/portfolio/kaspi/7edfdb9a395f5576.webp",
        aspectRatio: "1/1",
        caption: "YEPO Pulse 2 / 01",
        alt: "YEPO Pulse 2 product visual 01",
        translations: {
          ru: {
            alt: "YEPO Pulse 2 — визуал товара 01",
          },
          kk: {
            alt: "YEPO Pulse 2 — өнім визуалы 01",
          },
        },
      },
      {
        id: "product-08-image-02",
        type: "image",
        url: "/media/portfolio/kaspi/95275b859a3f9e25.webp",
        aspectRatio: "3/4",
        caption: "YEPO Pulse 2 / 02",
        alt: "YEPO Pulse 2 product visual 02",
        translations: {
          ru: {
            alt: "YEPO Pulse 2 — визуал товара 02",
          },
          kk: {
            alt: "YEPO Pulse 2 — өнім визуалы 02",
          },
        },
      },
      {
        id: "product-08-image-03",
        type: "image",
        url: "/media/portfolio/kaspi/7dc38fb0ce15d720.webp",
        aspectRatio: "150/193",
        caption: "YEPO Pulse 2 / 03",
        alt: "YEPO Pulse 2 product visual 03",
        translations: {
          ru: {
            alt: "YEPO Pulse 2 — визуал товара 03",
          },
          kk: {
            alt: "YEPO Pulse 2 — өнім визуалы 03",
          },
        },
      },
      {
        id: "product-08-image-04",
        type: "image",
        url: "/media/portfolio/kaspi/cc1f12f89a5c0be6.webp",
        aspectRatio: "3/4",
        caption: "YEPO Pulse 2 / 04",
        alt: "YEPO Pulse 2 product visual 04",
        translations: {
          ru: {
            alt: "YEPO Pulse 2 — визуал товара 04",
          },
          kk: {
            alt: "YEPO Pulse 2 — өнім визуалы 04",
          },
        },
      },
      {
        id: "product-08-image-05",
        type: "image",
        url: "/media/portfolio/kaspi/325c05c80e2fdc9a.webp",
        aspectRatio: "3/4",
        caption: "YEPO Pulse 2 / 05",
        alt: "YEPO Pulse 2 product visual 05",
        translations: {
          ru: {
            alt: "YEPO Pulse 2 — визуал товара 05",
          },
          kk: {
            alt: "YEPO Pulse 2 — өнім визуалы 05",
          },
        },
      },
      {
        id: "product-08-image-06",
        type: "image",
        url: "/media/portfolio/kaspi/89480e77a634de39.webp",
        aspectRatio: "3/4",
        caption: "YEPO Pulse 2 / 06",
        alt: "YEPO Pulse 2 product visual 06",
        translations: {
          ru: {
            alt: "YEPO Pulse 2 — визуал товара 06",
          },
          kk: {
            alt: "YEPO Pulse 2 — өнім визуалы 06",
          },
        },
      },
      {
        id: "product-08-image-07",
        type: "image",
        url: "/media/portfolio/kaspi/ef3aeecbcf389243.webp",
        aspectRatio: "3/4",
        caption: "YEPO Pulse 2 / 07",
        alt: "YEPO Pulse 2 product visual 07",
        translations: {
          ru: {
            alt: "YEPO Pulse 2 — визуал товара 07",
          },
          kk: {
            alt: "YEPO Pulse 2 — өнім визуалы 07",
          },
        },
      },
      {
        id: "product-08-image-08",
        type: "image",
        url: "/media/portfolio/kaspi/2a9a56ca8e44e1a2.webp",
        aspectRatio: "225/289",
        caption: "YEPO Pulse 2 / 08",
        alt: "YEPO Pulse 2 product visual 08",
        translations: {
          ru: {
            alt: "YEPO Pulse 2 — визуал товара 08",
          },
          kk: {
            alt: "YEPO Pulse 2 — өнім визуалы 08",
          },
        },
      },
      {
        id: "product-08-image-09",
        type: "image",
        url: "/media/portfolio/kaspi/fc501fab96b48a2c.webp",
        aspectRatio: "293/382",
        caption: "YEPO Pulse 2 / 09",
        alt: "YEPO Pulse 2 product visual 09",
        translations: {
          ru: {
            alt: "YEPO Pulse 2 — визуал товара 09",
          },
          kk: {
            alt: "YEPO Pulse 2 — өнім визуалы 09",
          },
        },
      },
      {
        id: "product-08-image-10",
        type: "image",
        url: "/media/portfolio/kaspi/74238e3c8d56758d.webp",
        aspectRatio: "3/4",
        caption: "YEPO Pulse 2 / 10",
        alt: "YEPO Pulse 2 product visual 10",
        translations: {
          ru: {
            alt: "YEPO Pulse 2 — визуал товара 10",
          },
          kk: {
            alt: "YEPO Pulse 2 — өнім визуалы 10",
          },
        },
      },
      {
        id: "product-08-image-11",
        type: "image",
        url: "/media/portfolio/kaspi/c8b11540f949d61e.webp",
        aspectRatio: "3/4",
        caption: "YEPO Pulse 2 / 11",
        alt: "YEPO Pulse 2 product visual 11",
        translations: {
          ru: {
            alt: "YEPO Pulse 2 — визуал товара 11",
          },
          kk: {
            alt: "YEPO Pulse 2 — өнім визуалы 11",
          },
        },
      },
      {
        id: "product-08-image-12",
        type: "image",
        url: "/media/portfolio/kaspi/0b7c4239ddd7cf96.webp",
        aspectRatio: "9/16",
        caption: "YEPO Pulse 2 / 12",
        alt: "YEPO Pulse 2 product visual 12",
        translations: {
          ru: {
            alt: "YEPO Pulse 2 — визуал товара 12",
          },
          kk: {
            alt: "YEPO Pulse 2 — өнім визуалы 12",
          },
        },
      },
      {
        id: "product-08-image-13",
        type: "image",
        url: "/media/portfolio/kaspi/96d6674a8827dec3.webp",
        aspectRatio: "9/16",
        caption: "YEPO Pulse 2 / 13",
        alt: "YEPO Pulse 2 product visual 13",
        translations: {
          ru: {
            alt: "YEPO Pulse 2 — визуал товара 13",
          },
          kk: {
            alt: "YEPO Pulse 2 — өнім визуалы 13",
          },
        },
      },
      {
        id: "product-08-image-14",
        type: "image",
        url: "/media/portfolio/kaspi/835830b2e5bccc6c.webp",
        aspectRatio: "9/16",
        caption: "YEPO Pulse 2 / 14",
        alt: "YEPO Pulse 2 product visual 14",
        translations: {
          ru: {
            alt: "YEPO Pulse 2 — визуал товара 14",
          },
          kk: {
            alt: "YEPO Pulse 2 — өнім визуалы 14",
          },
        },
      },
      {
        id: "product-08-image-15",
        type: "image",
        url: "/media/portfolio/kaspi/1e995fb7b7849c5c.webp",
        aspectRatio: "9/16",
        caption: "YEPO Pulse 2 / 15",
        alt: "YEPO Pulse 2 product visual 15",
        translations: {
          ru: {
            alt: "YEPO Pulse 2 — визуал товара 15",
          },
          kk: {
            alt: "YEPO Pulse 2 — өнім визуалы 15",
          },
        },
      },
      {
        id: "product-08-image-16",
        type: "image",
        url: "/media/portfolio/kaspi/db8db24100b4ae19.webp",
        aspectRatio: "9/16",
        caption: "YEPO Pulse 2 / 16",
        alt: "YEPO Pulse 2 product visual 16",
        translations: {
          ru: {
            alt: "YEPO Pulse 2 — визуал товара 16",
          },
          kk: {
            alt: "YEPO Pulse 2 — өнім визуалы 16",
          },
        },
      },
      {
        id: "product-08-image-17",
        type: "image",
        url: "/media/portfolio/kaspi/48b807c826aec7a1.webp",
        aspectRatio: "9/16",
        caption: "YEPO Pulse 2 / 17",
        alt: "YEPO Pulse 2 product visual 17",
        translations: {
          ru: {
            alt: "YEPO Pulse 2 — визуал товара 17",
          },
          kk: {
            alt: "YEPO Pulse 2 — өнім визуалы 17",
          },
        },
      },
      {
        id: "product-08-image-18",
        type: "image",
        url: "/media/portfolio/kaspi/ed438261622436da.webp",
        aspectRatio: "572/393",
        caption: "YEPO Pulse 2 / 18",
        alt: "YEPO Pulse 2 product visual 18",
        translations: {
          ru: {
            alt: "YEPO Pulse 2 — визуал товара 18",
          },
          kk: {
            alt: "YEPO Pulse 2 — өнім визуалы 18",
          },
        },
      },
      {
        id: "product-08-image-19",
        type: "image",
        url: "/media/portfolio/kaspi/5a73a57674c1e09f.webp",
        aspectRatio: "21/40",
        caption: "YEPO Pulse 2 / 19",
        alt: "YEPO Pulse 2 product visual 19",
        translations: {
          ru: {
            alt: "YEPO Pulse 2 — визуал товара 19",
          },
          kk: {
            alt: "YEPO Pulse 2 — өнім визуалы 19",
          },
        },
      },
      {
        id: "product-08-image-20",
        type: "image",
        url: "/media/portfolio/kaspi/b158587708cca62e.webp",
        aspectRatio: "400/193",
        caption: "YEPO Pulse 2 / 20",
        alt: "YEPO Pulse 2 product visual 20",
        translations: {
          ru: {
            alt: "YEPO Pulse 2 — визуал товара 20",
          },
          kk: {
            alt: "YEPO Pulse 2 — өнім визуалы 20",
          },
        },
      },
      {
        id: "product-08-image-21",
        type: "image",
        url: "/media/portfolio/kaspi/127148a370defabb.webp",
        aspectRatio: "400/211",
        caption: "YEPO Pulse 2 / 21",
        alt: "YEPO Pulse 2 product visual 21",
        translations: {
          ru: {
            alt: "YEPO Pulse 2 — визуал товара 21",
          },
          kk: {
            alt: "YEPO Pulse 2 — өнім визуалы 21",
          },
        },
      },
      {
        id: "product-08-image-22",
        type: "image",
        url: "/media/portfolio/kaspi/e1dcbd776309a716.webp",
        aspectRatio: "135/191",
        caption: "YEPO Pulse 2 / 22",
        alt: "YEPO Pulse 2 product visual 22",
        translations: {
          ru: {
            alt: "YEPO Pulse 2 — визуал товара 22",
          },
          kk: {
            alt: "YEPO Pulse 2 — өнім визуалы 22",
          },
        },
      },
    ],
    translations: {
      ru: {
        title: "YEPO Pulse 2 — Инфографика товара",
        description:
          "Визуалы и инфографика карточки товара YEPO Pulse 2, созданные в Photoshop и Photocraft.",
        role: ["Идея", "Графический дизайн"],
      },
      kk: {
        title: "YEPO Pulse 2 — Өнім инфографикасы",
        description:
          "Photoshop пен Photocraft-та жасалған YEPO Pulse 2 өнім карточкасының визуалдары мен инфографикасы.",
        role: ["Идея", "Графикалық дизайн"],
      },
    },
    role: ["Concept", "Graphic design"],
    tools: ["Photoshop", "Photocraft"],
    client: "YEPO",
    externalLinks: [
      {
        label: "View on Kaspi",
        url: "https://kaspi.kz/shop/p/portativnaja-kolonka-yepo-pulse-2-chernyi-143104336/?c=591010000&m=18349113&ms=true",
      },
    ],
    featured: false,
  },
  {
    id: "yepo-ls-901-black-infographics",
    slug: "yepo-ls-901-black-infographics",
    title: "YEPO LS-901 / Black — Product Infographics",
    category: "design",
    status: "published",
    description:
      "Product listing visuals and infographics for YEPO LS-901 / Black, developed with Photoshop and Photocraft.",
    coverImage: "/media/portfolio/kaspi/3a87e78fd5377d59.webp",
    coverAspectRatio: "1/1",
    coverAlt: "YEPO LS-901 / Black — Product Infographics",
    media: [
      {
        id: "product-09-image-01",
        type: "image",
        url: "/media/portfolio/kaspi/3a87e78fd5377d59.webp",
        aspectRatio: "1/1",
        caption: "YEPO LS-901 / Black / 01",
        alt: "YEPO LS-901 / Black product visual 01",
        translations: {
          ru: {
            alt: "YEPO LS-901 / Чёрный — визуал товара 01",
          },
          kk: {
            alt: "YEPO LS-901 / Қара — өнім визуалы 01",
          },
        },
      },
      {
        id: "product-09-image-02",
        type: "image",
        url: "/media/portfolio/kaspi/b1fc1be41cffc5b6.webp",
        aspectRatio: "1/1",
        caption: "YEPO LS-901 / Black / 02",
        alt: "YEPO LS-901 / Black product visual 02",
        translations: {
          ru: {
            alt: "YEPO LS-901 / Чёрный — визуал товара 02",
          },
          kk: {
            alt: "YEPO LS-901 / Қара — өнім визуалы 02",
          },
        },
      },
      {
        id: "product-09-image-03",
        type: "image",
        url: "/media/portfolio/kaspi/933f9d27171ea99a.webp",
        aspectRatio: "540/553",
        caption: "YEPO LS-901 / Black / 03",
        alt: "YEPO LS-901 / Black product visual 03",
        translations: {
          ru: {
            alt: "YEPO LS-901 / Чёрный — визуал товара 03",
          },
          kk: {
            alt: "YEPO LS-901 / Қара — өнім визуалы 03",
          },
        },
      },
      {
        id: "product-09-image-04",
        type: "image",
        url: "/media/portfolio/kaspi/758a934a7842123b.webp",
        aspectRatio: "135/137",
        caption: "YEPO LS-901 / Black / 04",
        alt: "YEPO LS-901 / Black product visual 04",
        translations: {
          ru: {
            alt: "YEPO LS-901 / Чёрный — визуал товара 04",
          },
          kk: {
            alt: "YEPO LS-901 / Қара — өнім визуалы 04",
          },
        },
      },
      {
        id: "product-09-image-05",
        type: "image",
        url: "/media/portfolio/kaspi/4f3d42ec504749b5.webp",
        aspectRatio: "1/1",
        caption: "YEPO LS-901 / Black / 05",
        alt: "YEPO LS-901 / Black product visual 05",
        translations: {
          ru: {
            alt: "YEPO LS-901 / Чёрный — визуал товара 05",
          },
          kk: {
            alt: "YEPO LS-901 / Қара — өнім визуалы 05",
          },
        },
      },
      {
        id: "product-09-image-06",
        type: "image",
        url: "/media/portfolio/kaspi/315b2f5087e14c31.webp",
        aspectRatio: "1/1",
        caption: "YEPO LS-901 / Black / 06",
        alt: "YEPO LS-901 / Black product visual 06",
        translations: {
          ru: {
            alt: "YEPO LS-901 / Чёрный — визуал товара 06",
          },
          kk: {
            alt: "YEPO LS-901 / Қара — өнім визуалы 06",
          },
        },
      },
      {
        id: "product-09-image-07",
        type: "image",
        url: "/media/portfolio/kaspi/21fbd30619fdacf0.webp",
        aspectRatio: "1/1",
        caption: "YEPO LS-901 / Black / 07",
        alt: "YEPO LS-901 / Black product visual 07",
        translations: {
          ru: {
            alt: "YEPO LS-901 / Чёрный — визуал товара 07",
          },
          kk: {
            alt: "YEPO LS-901 / Қара — өнім визуалы 07",
          },
        },
      },
      {
        id: "product-09-image-08",
        type: "image",
        url: "/media/portfolio/kaspi/8c1338879fb66316.webp",
        aspectRatio: "1/1",
        caption: "YEPO LS-901 / Black / 08",
        alt: "YEPO LS-901 / Black product visual 08",
        translations: {
          ru: {
            alt: "YEPO LS-901 / Чёрный — визуал товара 08",
          },
          kk: {
            alt: "YEPO LS-901 / Қара — өнім визуалы 08",
          },
        },
      },
      {
        id: "product-09-image-09",
        type: "image",
        url: "/media/portfolio/kaspi/51e5cc367099d70a.webp",
        aspectRatio: "540/721",
        caption: "YEPO LS-901 / Black / 09",
        alt: "YEPO LS-901 / Black product visual 09",
        translations: {
          ru: {
            alt: "YEPO LS-901 / Чёрный — визуал товара 09",
          },
          kk: {
            alt: "YEPO LS-901 / Қара — өнім визуалы 09",
          },
        },
      },
      {
        id: "product-09-image-10",
        type: "image",
        url: "/media/portfolio/kaspi/e15e43a9039b8c5c.webp",
        aspectRatio: "540/721",
        caption: "YEPO LS-901 / Black / 10",
        alt: "YEPO LS-901 / Black product visual 10",
        translations: {
          ru: {
            alt: "YEPO LS-901 / Чёрный — визуал товара 10",
          },
          kk: {
            alt: "YEPO LS-901 / Қара — өнім визуалы 10",
          },
        },
      },
      {
        id: "product-09-image-11",
        type: "image",
        url: "/media/portfolio/kaspi/c27989c749d3bd2f.webp",
        aspectRatio: "224/299",
        caption: "YEPO LS-901 / Black / 11",
        alt: "YEPO LS-901 / Black product visual 11",
        translations: {
          ru: {
            alt: "YEPO LS-901 / Чёрный — визуал товара 11",
          },
          kk: {
            alt: "YEPO LS-901 / Қара — өнім визуалы 11",
          },
        },
      },
      {
        id: "product-09-image-12",
        type: "image",
        url: "/media/portfolio/kaspi/749e90e30d5c9366.webp",
        aspectRatio: "540/721",
        caption: "YEPO LS-901 / Black / 12",
        alt: "YEPO LS-901 / Black product visual 12",
        translations: {
          ru: {
            alt: "YEPO LS-901 / Чёрный — визуал товара 12",
          },
          kk: {
            alt: "YEPO LS-901 / Қара — өнім визуалы 12",
          },
        },
      },
    ],
    translations: {
      ru: {
        title: "YEPO LS-901 / Чёрный — Инфографика товара",
        description:
          "Визуалы и инфографика карточки товара YEPO LS-901 / Чёрный, созданные в Photoshop и Photocraft.",
        role: ["Идея", "Графический дизайн"],
      },
      kk: {
        title: "YEPO LS-901 / Қара — Өнім инфографикасы",
        description:
          "Photoshop пен Photocraft-та жасалған YEPO LS-901 / Қара өнім карточкасының визуалдары мен инфографикасы.",
        role: ["Идея", "Графикалық дизайн"],
      },
    },
    role: ["Concept", "Graphic design"],
    tools: ["Photoshop", "Photocraft"],
    client: "YEPO",
    externalLinks: [
      {
        label: "View on Kaspi",
        url: "https://kaspi.kz/shop/p/ofisnoe-kreslo-yepo-ls-901-chernyi-167370781/?c=591010000&m=18349113&ms=true",
      },
    ],
    featured: false,
  },
  {
    id: "yepo-primebook-17-infographics",
    slug: "yepo-primebook-17-infographics",
    title: "YEPO Primebook 17 — Product Infographics",
    category: "design",
    status: "published",
    description:
      "Product listing visuals and infographics for YEPO Primebook 17, developed with Photoshop and Photocraft.",
    coverImage: "/media/portfolio/kaspi/36ee03f536e7897c.webp",
    coverAspectRatio: "1273/1080",
    coverAlt: "YEPO Primebook 17 — Product Infographics",
    media: [
      {
        id: "product-10-image-01",
        type: "image",
        url: "/media/portfolio/kaspi/36ee03f536e7897c.webp",
        aspectRatio: "1273/1080",
        caption: "YEPO Primebook 17 / 01",
        alt: "YEPO Primebook 17 product visual 01",
        translations: {
          ru: {
            alt: "YEPO Primebook 17 — визуал товара 01",
          },
          kk: {
            alt: "YEPO Primebook 17 — өнім визуалы 01",
          },
        },
      },
      {
        id: "product-10-image-02",
        type: "image",
        url: "/media/portfolio/kaspi/47c599ee8da604b3.webp",
        aspectRatio: "287/270",
        caption: "YEPO Primebook 17 / 02",
        alt: "YEPO Primebook 17 product visual 02",
        translations: {
          ru: {
            alt: "YEPO Primebook 17 — визуал товара 02",
          },
          kk: {
            alt: "YEPO Primebook 17 — өнім визуалы 02",
          },
        },
      },
      {
        id: "product-10-image-03",
        type: "image",
        url: "/media/portfolio/kaspi/5c67b978fcdf7882.webp",
        aspectRatio: "28/27",
        caption: "YEPO Primebook 17 / 03",
        alt: "YEPO Primebook 17 product visual 03",
        translations: {
          ru: {
            alt: "YEPO Primebook 17 — визуал товара 03",
          },
          kk: {
            alt: "YEPO Primebook 17 — өнім визуалы 03",
          },
        },
      },
      {
        id: "product-10-image-04",
        type: "image",
        url: "/media/portfolio/kaspi/c774b9f1cd11fd28.webp",
        aspectRatio: "1117/1080",
        caption: "YEPO Primebook 17 / 04",
        alt: "YEPO Primebook 17 product visual 04",
        translations: {
          ru: {
            alt: "YEPO Primebook 17 — визуал товара 04",
          },
          kk: {
            alt: "YEPO Primebook 17 — өнім визуалы 04",
          },
        },
      },
      {
        id: "product-10-image-05",
        type: "image",
        url: "/media/portfolio/kaspi/607fa307d8fc8d79.webp",
        aspectRatio: "289/270",
        caption: "YEPO Primebook 17 / 05",
        alt: "YEPO Primebook 17 product visual 05",
        translations: {
          ru: {
            alt: "YEPO Primebook 17 — визуал товара 05",
          },
          kk: {
            alt: "YEPO Primebook 17 — өнім визуалы 05",
          },
        },
      },
      {
        id: "product-10-image-06",
        type: "image",
        url: "/media/portfolio/kaspi/e009d579a2b22ca6.webp",
        aspectRatio: "1/1",
        caption: "YEPO Primebook 17 / 06",
        alt: "YEPO Primebook 17 product visual 06",
        translations: {
          ru: {
            alt: "YEPO Primebook 17 — визуал товара 06",
          },
          kk: {
            alt: "YEPO Primebook 17 — өнім визуалы 06",
          },
        },
      },
      {
        id: "product-10-image-07",
        type: "image",
        url: "/media/portfolio/kaspi/ad0e5da55dd8c3f7.webp",
        aspectRatio: "1183/1080",
        caption: "YEPO Primebook 17 / 07",
        alt: "YEPO Primebook 17 product visual 07",
        translations: {
          ru: {
            alt: "YEPO Primebook 17 — визуал товара 07",
          },
          kk: {
            alt: "YEPO Primebook 17 — өнім визуалы 07",
          },
        },
      },
      {
        id: "product-10-image-08",
        type: "image",
        url: "/media/portfolio/kaspi/bf4802b10f7b2b42.webp",
        aspectRatio: "1223/1080",
        caption: "YEPO Primebook 17 / 08",
        alt: "YEPO Primebook 17 product visual 08",
        translations: {
          ru: {
            alt: "YEPO Primebook 17 — визуал товара 08",
          },
          kk: {
            alt: "YEPO Primebook 17 — өнім визуалы 08",
          },
        },
      },
      {
        id: "product-10-image-09",
        type: "image",
        url: "/media/portfolio/kaspi/cd5da4d8022af93e.webp",
        aspectRatio: "449/360",
        caption: "YEPO Primebook 17 / 09",
        alt: "YEPO Primebook 17 product visual 09",
        translations: {
          ru: {
            alt: "YEPO Primebook 17 — визуал товара 09",
          },
          kk: {
            alt: "YEPO Primebook 17 — өнім визуалы 09",
          },
        },
      },
      {
        id: "product-10-image-10",
        type: "image",
        url: "/media/portfolio/kaspi/ccc89b95a165acc3.webp",
        aspectRatio: "71/54",
        caption: "YEPO Primebook 17 / 10",
        alt: "YEPO Primebook 17 product visual 10",
        translations: {
          ru: {
            alt: "YEPO Primebook 17 — визуал товара 10",
          },
          kk: {
            alt: "YEPO Primebook 17 — өнім визуалы 10",
          },
        },
      },
    ],
    translations: {
      ru: {
        title: "YEPO Primebook 17 — Инфографика товара",
        description:
          "Визуалы и инфографика карточки товара YEPO Primebook 17, созданные в Photoshop и Photocraft.",
        role: ["Идея", "Графический дизайн"],
      },
      kk: {
        title: "YEPO Primebook 17 — Өнім инфографикасы",
        description:
          "Photoshop пен Photocraft-та жасалған YEPO Primebook 17 өнім карточкасының визуалдары мен инфографикасы.",
        role: ["Идея", "Графикалық дизайн"],
      },
    },
    role: ["Concept", "Graphic design"],
    tools: ["Photoshop", "Photocraft"],
    client: "YEPO",
    externalLinks: [
      {
        label: "View on Kaspi",
        url: "https://kaspi.kz/shop/p/yepo-primebook-17-15-6-intel-core-i7-5500u-8-gb-ssd-512-gb-hd-graphics-win-11-pro-primebook-17-seryi-182361242/?c=591010000&m=18349113&ms=true",
      },
    ],
    featured: false,
  },
  {
    id: "yepo-a77-infographics",
    slug: "yepo-a77-infographics",
    title: "YEPO A77 — Product Infographics",
    category: "design",
    status: "published",
    description:
      "Product listing visuals and infographics for YEPO A77, developed with Photoshop and Photocraft.",
    coverImage: "/media/portfolio/kaspi/633f08cc049e0229.webp",
    coverAspectRatio: "577/540",
    coverAlt: "YEPO A77 — Product Infographics",
    media: [
      {
        id: "product-11-image-01",
        type: "image",
        url: "/media/portfolio/kaspi/633f08cc049e0229.webp",
        aspectRatio: "577/540",
        caption: "YEPO A77 / 01",
        alt: "YEPO A77 product visual 01",
        translations: {
          ru: {
            alt: "YEPO A77 — визуал товара 01",
          },
          kk: {
            alt: "YEPO A77 — өнім визуалы 01",
          },
        },
      },
      {
        id: "product-11-image-02",
        type: "image",
        url: "/media/portfolio/kaspi/49d41ac4992b55b0.webp",
        aspectRatio: "540/593",
        caption: "YEPO A77 / 02",
        alt: "YEPO A77 product visual 02",
        translations: {
          ru: {
            alt: "YEPO A77 — визуал товара 02",
          },
          kk: {
            alt: "YEPO A77 — өнім визуалы 02",
          },
        },
      },
      {
        id: "product-11-image-03",
        type: "image",
        url: "/media/portfolio/kaspi/9128a869f3bc35fc.webp",
        aspectRatio: "287/270",
        caption: "YEPO A77 / 03",
        alt: "YEPO A77 product visual 03",
        translations: {
          ru: {
            alt: "YEPO A77 — визуал товара 03",
          },
          kk: {
            alt: "YEPO A77 — өнім визуалы 03",
          },
        },
      },
      {
        id: "product-11-image-04",
        type: "image",
        url: "/media/portfolio/kaspi/bd3ff17f57bd14df.webp",
        aspectRatio: "1157/1080",
        caption: "YEPO A77 / 04",
        alt: "YEPO A77 product visual 04",
        translations: {
          ru: {
            alt: "YEPO A77 — визуал товара 04",
          },
          kk: {
            alt: "YEPO A77 — өнім визуалы 04",
          },
        },
      },
      {
        id: "product-11-image-05",
        type: "image",
        url: "/media/portfolio/kaspi/19371a293a66e1f7.webp",
        aspectRatio: "221/216",
        caption: "YEPO A77 / 05",
        alt: "YEPO A77 product visual 05",
        translations: {
          ru: {
            alt: "YEPO A77 — визуал товара 05",
          },
          kk: {
            alt: "YEPO A77 — өнім визуалы 05",
          },
        },
      },
      {
        id: "product-11-image-06",
        type: "image",
        url: "/media/portfolio/kaspi/57882afaa618c604.webp",
        aspectRatio: "1139/1080",
        caption: "YEPO A77 / 06",
        alt: "YEPO A77 product visual 06",
        translations: {
          ru: {
            alt: "YEPO A77 — визуал товара 06",
          },
          kk: {
            alt: "YEPO A77 — өнім визуалы 06",
          },
        },
      },
      {
        id: "product-11-image-07",
        type: "image",
        url: "/media/portfolio/kaspi/cb506766e3546036.webp",
        aspectRatio: "1/1",
        caption: "YEPO A77 / 07",
        alt: "YEPO A77 product visual 07",
        translations: {
          ru: {
            alt: "YEPO A77 — визуал товара 07",
          },
          kk: {
            alt: "YEPO A77 — өнім визуалы 07",
          },
        },
      },
      {
        id: "product-11-image-08",
        type: "image",
        url: "/media/portfolio/kaspi/2edec5681448f124.webp",
        aspectRatio: "83/72",
        caption: "YEPO A77 / 08",
        alt: "YEPO A77 product visual 08",
        translations: {
          ru: {
            alt: "YEPO A77 — визуал товара 08",
          },
          kk: {
            alt: "YEPO A77 — өнім визуалы 08",
          },
        },
      },
      {
        id: "product-11-image-09",
        type: "image",
        url: "/media/portfolio/kaspi/502a090c995c93ca.webp",
        aspectRatio: "1487/1080",
        caption: "YEPO A77 / 09",
        alt: "YEPO A77 product visual 09",
        translations: {
          ru: {
            alt: "YEPO A77 — визуал товара 09",
          },
          kk: {
            alt: "YEPO A77 — өнім визуалы 09",
          },
        },
      },
      {
        id: "product-11-image-10",
        type: "image",
        url: "/media/portfolio/kaspi/89396bca5a29a378.webp",
        aspectRatio: "1507/1080",
        caption: "YEPO A77 / 10",
        alt: "YEPO A77 product visual 10",
        translations: {
          ru: {
            alt: "YEPO A77 — визуал товара 10",
          },
          kk: {
            alt: "YEPO A77 — өнім визуалы 10",
          },
        },
      },
      {
        id: "product-11-image-11",
        type: "image",
        url: "/media/portfolio/kaspi/aa2004d9d97fd3c3.webp",
        aspectRatio: "200/127",
        caption: "YEPO A77 / 11",
        alt: "YEPO A77 product visual 11",
        translations: {
          ru: {
            alt: "YEPO A77 — визуал товара 11",
          },
          kk: {
            alt: "YEPO A77 — өнім визуалы 11",
          },
        },
      },
      {
        id: "product-11-image-12",
        type: "image",
        url: "/media/portfolio/kaspi/2d96e701afeca163.webp",
        aspectRatio: "200/91",
        caption: "YEPO A77 / 12",
        alt: "YEPO A77 product visual 12",
        translations: {
          ru: {
            alt: "YEPO A77 — визуал товара 12",
          },
          kk: {
            alt: "YEPO A77 — өнім визуалы 12",
          },
        },
      },
    ],
    translations: {
      ru: {
        title: "YEPO A77 — Инфографика товара",
        description:
          "Визуалы и инфографика карточки товара YEPO A77, созданные в Photoshop и Photocraft.",
        role: ["Идея", "Графический дизайн"],
      },
      kk: {
        title: "YEPO A77 — Өнім инфографикасы",
        description:
          "Photoshop пен Photocraft-та жасалған YEPO A77 өнім карточкасының визуалдары мен инфографикасы.",
        role: ["Идея", "Графикалық дизайн"],
      },
    },
    role: ["Concept", "Graphic design"],
    tools: ["Photoshop", "Photocraft"],
    client: "YEPO",
    externalLinks: [
      {
        label: "View on Kaspi",
        url: "https://kaspi.kz/shop/p/yepo-a77-15-6-intel-core-i7-6500u-16-gb-ssd-512-gb-hd-graphics-win-11-pro-a77-seryi-182359355/?c=591010000&m=18349113&ms=true",
      },
    ],
    featured: false,
  },
  {
    id: "yepo-ls-999-infographics",
    slug: "yepo-ls-999-infographics",
    title: "YEPO LS-999 — Product Infographics",
    category: "design",
    status: "published",
    description:
      "Product listing visuals and infographics for YEPO LS-999, developed with Photoshop and Photocraft.",
    coverImage: "/media/portfolio/kaspi/ddaad48077d93e3c.webp",
    coverAspectRatio: "1/1",
    coverAlt: "YEPO LS-999 — Product Infographics",
    media: [
      {
        id: "product-12-image-01",
        type: "image",
        url: "/media/portfolio/kaspi/ddaad48077d93e3c.webp",
        aspectRatio: "1/1",
        caption: "YEPO LS-999 / 01",
        alt: "YEPO LS-999 product visual 01",
        translations: {
          ru: {
            alt: "YEPO LS-999 — визуал товара 01",
          },
          kk: {
            alt: "YEPO LS-999 — өнім визуалы 01",
          },
        },
      },
      {
        id: "product-12-image-02",
        type: "image",
        url: "/media/portfolio/kaspi/959065bef6235e0f.webp",
        aspectRatio: "559/540",
        caption: "YEPO LS-999 / 02",
        alt: "YEPO LS-999 product visual 02",
        translations: {
          ru: {
            alt: "YEPO LS-999 — визуал товара 02",
          },
          kk: {
            alt: "YEPO LS-999 — өнім визуалы 02",
          },
        },
      },
      {
        id: "product-12-image-03",
        type: "image",
        url: "/media/portfolio/kaspi/0481f708b7e46808.webp",
        aspectRatio: "1/1",
        caption: "YEPO LS-999 / 03",
        alt: "YEPO LS-999 product visual 03",
        translations: {
          ru: {
            alt: "YEPO LS-999 — визуал товара 03",
          },
          kk: {
            alt: "YEPO LS-999 — өнім визуалы 03",
          },
        },
      },
      {
        id: "product-12-image-04",
        type: "image",
        url: "/media/portfolio/kaspi/bed00f288ab4850d.webp",
        aspectRatio: "540/541",
        caption: "YEPO LS-999 / 04",
        alt: "YEPO LS-999 product visual 04",
        translations: {
          ru: {
            alt: "YEPO LS-999 — визуал товара 04",
          },
          kk: {
            alt: "YEPO LS-999 — өнім визуалы 04",
          },
        },
      },
      {
        id: "product-12-image-05",
        type: "image",
        url: "/media/portfolio/kaspi/97d3d7efa0ca1f36.webp",
        aspectRatio: "541/540",
        caption: "YEPO LS-999 / 05",
        alt: "YEPO LS-999 product visual 05",
        translations: {
          ru: {
            alt: "YEPO LS-999 — визуал товара 05",
          },
          kk: {
            alt: "YEPO LS-999 — өнім визуалы 05",
          },
        },
      },
      {
        id: "product-12-image-06",
        type: "image",
        url: "/media/portfolio/kaspi/cd95cb34da9fbac4.webp",
        aspectRatio: "1/1",
        caption: "YEPO LS-999 / 06",
        alt: "YEPO LS-999 product visual 06",
        translations: {
          ru: {
            alt: "YEPO LS-999 — визуал товара 06",
          },
          kk: {
            alt: "YEPO LS-999 — өнім визуалы 06",
          },
        },
      },
      {
        id: "product-12-image-07",
        type: "image",
        url: "/media/portfolio/kaspi/640e4c51d95866c9.webp",
        aspectRatio: "1/1",
        caption: "YEPO LS-999 / 07",
        alt: "YEPO LS-999 product visual 07",
        translations: {
          ru: {
            alt: "YEPO LS-999 — визуал товара 07",
          },
          kk: {
            alt: "YEPO LS-999 — өнім визуалы 07",
          },
        },
      },
      {
        id: "product-12-image-08",
        type: "image",
        url: "/media/portfolio/kaspi/e0e653a57b156b5d.webp",
        aspectRatio: "1/1",
        caption: "YEPO LS-999 / 08",
        alt: "YEPO LS-999 product visual 08",
        translations: {
          ru: {
            alt: "YEPO LS-999 — визуал товара 08",
          },
          kk: {
            alt: "YEPO LS-999 — өнім визуалы 08",
          },
        },
      },
      {
        id: "product-12-image-09",
        type: "image",
        url: "/media/portfolio/kaspi/9124a0616f474ee0.webp",
        aspectRatio: "1/1",
        caption: "YEPO LS-999 / 09",
        alt: "YEPO LS-999 product visual 09",
        translations: {
          ru: {
            alt: "YEPO LS-999 — визуал товара 09",
          },
          kk: {
            alt: "YEPO LS-999 — өнім визуалы 09",
          },
        },
      },
      {
        id: "product-12-image-10",
        type: "image",
        url: "/media/portfolio/kaspi/702b98c88cf98ae6.webp",
        aspectRatio: "1/1",
        caption: "YEPO LS-999 / 10",
        alt: "YEPO LS-999 product visual 10",
        translations: {
          ru: {
            alt: "YEPO LS-999 — визуал товара 10",
          },
          kk: {
            alt: "YEPO LS-999 — өнім визуалы 10",
          },
        },
      },
      {
        id: "product-12-image-11",
        type: "image",
        url: "/media/portfolio/kaspi/d7b37cd87c6ff0ef.webp",
        aspectRatio: "3/4",
        caption: "YEPO LS-999 / 11",
        alt: "YEPO LS-999 product visual 11",
        translations: {
          ru: {
            alt: "YEPO LS-999 — визуал товара 11",
          },
          kk: {
            alt: "YEPO LS-999 — өнім визуалы 11",
          },
        },
      },
      {
        id: "product-12-image-12",
        type: "image",
        url: "/media/portfolio/kaspi/b964e7b039f3338c.webp",
        aspectRatio: "3/4",
        caption: "YEPO LS-999 / 12",
        alt: "YEPO LS-999 product visual 12",
        translations: {
          ru: {
            alt: "YEPO LS-999 — визуал товара 12",
          },
          kk: {
            alt: "YEPO LS-999 — өнім визуалы 12",
          },
        },
      },
      {
        id: "product-12-image-13",
        type: "image",
        url: "/media/portfolio/kaspi/ccdf991e8bcefbe1.webp",
        aspectRatio: "3/4",
        caption: "YEPO LS-999 / 13",
        alt: "YEPO LS-999 product visual 13",
        translations: {
          ru: {
            alt: "YEPO LS-999 — визуал товара 13",
          },
          kk: {
            alt: "YEPO LS-999 — өнім визуалы 13",
          },
        },
      },
      {
        id: "product-12-image-14",
        type: "image",
        url: "/media/portfolio/kaspi/0a3d8c59a2d62f32.webp",
        aspectRatio: "3/4",
        caption: "YEPO LS-999 / 14",
        alt: "YEPO LS-999 product visual 14",
        translations: {
          ru: {
            alt: "YEPO LS-999 — визуал товара 14",
          },
          kk: {
            alt: "YEPO LS-999 — өнім визуалы 14",
          },
        },
      },
      {
        id: "product-12-image-15",
        type: "image",
        url: "/media/portfolio/kaspi/397e33269ae047a5.webp",
        aspectRatio: "3/4",
        caption: "YEPO LS-999 / 15",
        alt: "YEPO LS-999 product visual 15",
        translations: {
          ru: {
            alt: "YEPO LS-999 — визуал товара 15",
          },
          kk: {
            alt: "YEPO LS-999 — өнім визуалы 15",
          },
        },
      },
      {
        id: "product-12-image-16",
        type: "image",
        url: "/media/portfolio/kaspi/6609a75178f9e5de.webp",
        aspectRatio: "3/4",
        caption: "YEPO LS-999 / 16",
        alt: "YEPO LS-999 product visual 16",
        translations: {
          ru: {
            alt: "YEPO LS-999 — визуал товара 16",
          },
          kk: {
            alt: "YEPO LS-999 — өнім визуалы 16",
          },
        },
      },
      {
        id: "product-12-image-17",
        type: "image",
        url: "/media/portfolio/kaspi/300d3b8135868651.webp",
        aspectRatio: "3/4",
        caption: "YEPO LS-999 / 17",
        alt: "YEPO LS-999 product visual 17",
        translations: {
          ru: {
            alt: "YEPO LS-999 — визуал товара 17",
          },
          kk: {
            alt: "YEPO LS-999 — өнім визуалы 17",
          },
        },
      },
      {
        id: "product-12-image-18",
        type: "image",
        url: "/media/portfolio/kaspi/c987230635ece360.webp",
        aspectRatio: "3/4",
        caption: "YEPO LS-999 / 18",
        alt: "YEPO LS-999 product visual 18",
        translations: {
          ru: {
            alt: "YEPO LS-999 — визуал товара 18",
          },
          kk: {
            alt: "YEPO LS-999 — өнім визуалы 18",
          },
        },
      },
      {
        id: "product-12-image-19",
        type: "image",
        url: "/media/portfolio/kaspi/928dd5770088e56d.webp",
        aspectRatio: "3/4",
        caption: "YEPO LS-999 / 19",
        alt: "YEPO LS-999 product visual 19",
        translations: {
          ru: {
            alt: "YEPO LS-999 — визуал товара 19",
          },
          kk: {
            alt: "YEPO LS-999 — өнім визуалы 19",
          },
        },
      },
    ],
    translations: {
      ru: {
        title: "YEPO LS-999 — Инфографика товара",
        description:
          "Визуалы и инфографика карточки товара YEPO LS-999, созданные в Photoshop и Photocraft.",
        role: ["Идея", "Графический дизайн"],
      },
      kk: {
        title: "YEPO LS-999 — Өнім инфографикасы",
        description:
          "Photoshop пен Photocraft-та жасалған YEPO LS-999 өнім карточкасының визуалдары мен инфографикасы.",
        role: ["Идея", "Графикалық дизайн"],
      },
    },
    role: ["Concept", "Graphic design"],
    tools: ["Photoshop", "Photocraft"],
    client: "YEPO",
    externalLinks: [
      {
        label: "View on Kaspi",
        url: "https://kaspi.kz/shop/p/ofisnoe-kreslo-yepo-ls-999-seryi-168961304/?c=591010000&m=18349113&ms=true",
      },
    ],
    featured: false,
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
          "Короткий фильм для университетской кафедры KIPI, самостоятельно снятый на iPhone и смонтированный в DaVinci Resolve за сутки.",
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
    featured: false,
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
    featured: false,
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
    featured: false,
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
    featured: false,
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
    featured: false,
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
    featured: false,
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
    featured: false,
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
    featured: false,
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
    featured: false,
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
    featured: false,
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
        type: "localVideo",
        sourceUrl: "https://www.instagram.com/p/DewujzMspFf/",
        url: "/media/portfolio/instagram-DewujzMspFf.mp4",
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
    featured: false,
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
        type: "localVideo",
        sourceUrl: "https://www.instagram.com/p/DebQOtCMSEf/",
        url: "/media/portfolio/instagram-DebQOtCMSEf.mp4",
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
    featured: false,
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
        type: "localVideo",
        sourceUrl: "https://www.instagram.com/p/DeOZfDCMkx5/",
        url: "/media/portfolio/instagram-DeOZfDCMkx5.mp4",
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
    featured: false,
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
        type: "localVideo",
        sourceUrl: "https://www.instagram.com/p/DdtEUPHsSxz/",
        url: "/media/portfolio/instagram-DdtEUPHsSxz.mp4",
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
    featured: false,
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
    featured: false,
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
    featured: false,
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
    featured: false,
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
    featured: false,
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
    featured: false,
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
    featured: false,
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
    featured: false,
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
    featured: false,
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
    featured: false,
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
    featured: false,
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
    featured: false,
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
    featured: false,
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
    featured: false,
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
    featured: false,
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
    featured: false,
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
    featured: false,
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
    featured: false,
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
