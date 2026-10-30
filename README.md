# FULL CORE

Персональное портфолио: видео, motion, 3D/VFX, графический дизайн и музыка. React + Vite + TypeScript; статическая сборка, без backend и платных сервисов. Интерфейс EN / RU / KZ.

Сайт: https://eraliev21elnur.github.io/-/

## Установка и запуск

Нужен Node.js 22 или новее.

```bash
npm ci
npm run dev
```

Откройте адрес, который напечатает Vite. Для проверки production:

```bash
npm run typecheck
npm run lint
npm test
npm run build
npm run preview
```

Готовые файлы находятся в `dist/`. Для GitHub Pages workflow задаёт SITE_BASE и VITE_SITE_URL. Локальная проверка той же подпапки:

```bash
SITE_BASE=/- VITE_SITE_URL=https://eraliev21elnur.github.io/- npm run build
SITE_BASE=/- npm run preview
```

## Где менять контент

- `src/data/site.ts` — тексты, контакты, инструменты, обложки четырёх плиток главной.
- `src/data/projects.ts` — 62 опубликованных визуальных кейса, роли, переводы, ссылки и порядок.
- `src/data/tracks.ts` — 16 треков и порядок плейлиста.
- `src/data/disciplines.ts` — категории и фильтры, включая 3D-видео/иллюстрации.
- `src/i18n/messages.ts` — переводы интерфейса.
- `public/media/portfolio/` — оптимизированные материалы из архива владельца.

YouTube/Vimeo/Instagram и локальное видео запускаются только по Play. Instagram сохраняет прямую ссылку на публикацию. Изображения открываются в просмотрщике. В Music плеер закреплён снизу; при уходе с раздела воспроизведение прекращается. Демоматериалы удалены.

Подробности: [CONTENT_GUIDE.md](CONTENT_GUIDE.md), [DEPLOYMENT.md](DEPLOYMENT.md), [AGENTS.md](AGENTS.md).

Метаданные основных маршрутов и кейсов генерируются при сборке. Переводы переключаются в браузере; отдельные языковые SEO-адреса не генерируются. Доступность внешних платформ зависит от их настроек и ограничений.

Каждая из 13 карточек Kaspi представлена полной галереей (207 изображений суммарно). Четыре студийных фильма — отдельные кейсы. Motion/3D и Design на ноутбуке показывают две работы в ряд.
