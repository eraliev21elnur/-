import type { Track } from "./tracks";
// Explicitly requested listening samples. Procedural loops, not FULL CORE releases.
export const demoTracks: Track[] = [
  {
    id: "demo-ambient",
    title: "Demo 01 — Ambient",
    status: "published",
    demo: true,
    src: "/media/music/demo/ambient.mp3",
    description: "A soft ambient loop for testing playback and seeking.",
    translations: {
      ru: {
        title: "Демо 01 — Эмбиент",
        description: "Мягкий эмбиент для проверки воспроизведения и перемотки.",
      },
      kk: {
        title: "Демо 01 — Эмбиент",
        description:
          "Ойнату мен айналдыруды тексеруге арналған жұмсақ эмбиент.",
      },
    },
  },
  {
    id: "demo-pulse",
    title: "Demo 02 — Pulse",
    status: "published",
    demo: true,
    src: "/media/music/demo/pulse.mp3",
    description: "An electronic beat for testing track switching and volume.",
    translations: {
      ru: {
        title: "Демо 02 — Пульс",
        description: "Электронный ритм для проверки смены треков и громкости.",
      },
      kk: {
        title: "Демо 02 — Пульс",
        description:
          "Трек ауыстыру мен дыбыс деңгейін тексеруге арналған электронды ырғақ.",
      },
    },
  },
  {
    id: "demo-glass",
    title: "Demo 03 — Glass",
    status: "published",
    demo: true,
    src: "/media/music/demo/glass.mp3",
    description: "A bright synth loop for testing the playlist controls.",
    translations: {
      ru: {
        title: "Демо 03 — Стекло",
        description:
          "Синтезаторный фрагмент для проверки управления плейлистом.",
      },
      kk: {
        title: "Демо 03 — Шыны",
        description:
          "Плейлист басқаруын тексеруге арналған синтезаторлық үзінді.",
      },
    },
  },
];
