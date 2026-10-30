import { test } from "node:test";
import assert from "node:assert/strict";
import { renderToString } from "react-dom/server";
import { createElement } from "react";
import { MemoryRouter } from "react-router-dom";
import { App } from "../src/App";
import {
  projects,
  publishedProjects,
  filterProjects,
} from "../src/data/projects";
import { embedUrl, instagramEmbedUrl } from "../src/lib/media";
import { validateProjects } from "./validate-content";
test("drafts do not appear in public routes or listings", () => {
  validateProjects();
  assert.ok(publishedProjects.every((p) => p.status === "published"));
  const html = renderToString(
    createElement(
      MemoryRouter,
      { initialEntries: ["/work/yepo-commercial-production"] },
      createElement(App),
    ),
  );
  assert.match(html, /NOT FOUND/);
  assert.doesNotMatch(
    renderToString(
      createElement(
        MemoryRouter,
        { initialEntries: ["/work"] },
        createElement(App),
      ),
    ),
    /YEPO — Commercial Video Production/,
  );
});
test("filter uses category IDs and supports an empty category", () => {
  assert.ok(filterProjects(projects, "commercial").length > 0);
  assert.ok(
    filterProjects(projects, "commercial").every(
      (project) => project.category === "commercial",
    ),
  );
  assert.equal(filterProjects(projects, "empty-category").length, 0);
  assert.equal(filterProjects(projects, "all").length, projects.length);
});
test("provider parser accepts supported links and rejects foreign iframe hosts", () => {
  assert.match(
    embedUrl("youtube", "https://youtu.be/abcdefghijk")!,
    /youtube-nocookie.com\/embed\/abcdefghijk/,
  );
  assert.match(
    embedUrl("youtube", "https://www.youtube.com/shorts/abcdefghijk")!,
    /embed\/abcdefghijk/,
  );
  assert.match(
    embedUrl("vimeo", "https://vimeo.com/123456789/abcdef1234")!,
    /h=abcdef1234/,
  );
  assert.equal(
    embedUrl("youtube", "https://evil.test/watch?v=abcdefghijk"),
    null,
  );
  assert.equal(embedUrl("vimeo", "javascript:alert(1)"), null);
});
test("published case renders role and media without eagerly creating iframes", async () => {
  const { MediaPlayer } = await import("../src/components/MediaPlayer");
  const fixture = {
    id: "test-only",
    slug: "test-only",
    title: "Test fixture — never published",
    category: "motion",
    status: "published" as const,
    role: ["Editing"],
    media: [
      {
        id: "video",
        type: "youtube" as const,
        url: "abcdefghijk",
        aspectRatio: "9/16" as const,
      },
    ],
  };
  publishedProjects.push(fixture);
  try {
    const html = renderToString(
      createElement(
        MemoryRouter,
        { initialEntries: ["/work/test-only"] },
        createElement(App),
      ),
    );
    assert.match(html, /My role/);
    assert.match(html, /Editing/);
    assert.match(html, /Test fixture/);
    assert.doesNotMatch(html, /<iframe/);
    assert.doesNotMatch(html, /<h2[^>]*>Tools/);
    const player = renderToString(
      createElement(MediaPlayer, { media: fixture.media[0], title: "Test" }),
    );
    assert.match(player, /9\/16/);
    assert.match(player, /Play Test/);
    assert.doesNotMatch(player, /<iframe/);
  } finally {
    publishedProjects.pop();
  }
});
test("deployment URLs retain GitHub Pages repository paths", async () => {
  const { absoluteSiteUrl, assetUrl, basePath } =
    await import("../src/lib/paths");
  assert.equal(
    absoluteSiteUrl(
      "/work/demo-form-in-motion",
      "https://creator.github.io/full-core",
    ),
    "https://creator.github.io/full-core/work/demo-form-in-motion",
  );
  assert.equal(
    absoluteSiteUrl(
      "/social-preview.png",
      "https://creator.github.io/full-core/",
    ),
    "https://creator.github.io/full-core/social-preview.png",
  );
  assert.equal(assetUrl("/media/cover.webp"), `${basePath}media/cover.webp`);
  assert.equal(
    assetUrl("https://example.com/image.webp"),
    "https://example.com/image.webp",
  );
});
test("discipline routes provide direct access with the right media types", async () => {
  const {
    projectsForDiscipline,
    projectDiscipline,
    filterVideos,
    videoFilters,
  } = await import("../src/data/disciplines");
  for (const path of [
    "/video",
    "/motion",
    "/3d-vfx",
    "/design",
    "/about",
    "/contact",
  ]) {
    const html = renderToString(
      createElement(
        MemoryRouter,
        { initialEntries: [path] },
        createElement(App),
      ),
    );
    assert.doesNotMatch(html, /NOT FOUND/);
    assert.equal((html.match(/<h1[ >]/g) ?? []).length, 1);
    assert.doesNotMatch(html, /<iframe/);
    assert.doesNotMatch(html, /<video/);
  }
  const html = renderToString(
    createElement(
      MemoryRouter,
      { initialEntries: ["/design"] },
      createElement(App),
    ),
  );
  assert.match(html, /image-open/);
  assert.doesNotMatch(html, /class="player"/);
  assert.ok(
    projectsForDiscipline("video").every(
      (p) => projectDiscipline(p) === "video",
    ),
  );
  const videoDrafts = projects.filter((p) => projectDiscipline(p) === "video");
  for (const filter of videoFilters.slice(1))
    assert.ok(filterVideos(videoDrafts, filter.id).length > 0);
});
test("home selection excludes samples and empty disciplines need an explicit publishing decision", async () => {
  const { selectedProjects } = await import("../src/data/projects");
  const { disciplineVisible } = await import("../src/data/disciplines");
  const { site } = await import("../src/data/site");
  assert.ok(selectedProjects.length <= 4);
  assert.ok(selectedProjects.every((p) => !p.demo));
  const before = site.demoMode;
  site.demoMode = false;
  try {
    assert.equal(disciplineVisible("unfilled-discipline"), false);
    site.publishEmptyDisciplines = true;
    assert.equal(disciplineVisible("unfilled-discipline"), true);
  } finally {
    site.demoMode = before;
    site.publishEmptyDisciplines = false;
  }
});
test("base path normalization handles the configure-pages output without a trailing slash", async () => {
  const { normalizeBase } = await import("../src/lib/paths");
  assert.equal(normalizeBase("/-"), "/-/");
  assert.equal(normalizeBase("/full-core/"), "/full-core/");
  assert.equal(normalizeBase(""), "/");
  assert.equal(normalizeBase("/"), "/");
});
test("Russian and Kazakh translations preserve Unicode and content fallback", async () => {
  const { translate } = await import("../src/i18n");
  const { messages } = await import("../src/i18n/messages");
  const { localizeProject, localizeMedia } =
    await import("../src/i18n/content");
  assert.equal(translate("Home", "ru"), "Главная");
  assert.equal(translate("Home", "kk"), "Басты бет");
  assert.equal(translate("Kazakhstan", "kk"), "Қазақстан");
  assert.equal(
    translate("Untranslated future title", "kk"),
    "Untranslated future title",
  );
  const unicode = "Әә Ғғ Ққ Ңң Өө Ұұ Үү Һһ Іі";
  assert.equal(
    new TextDecoder("utf-8", { fatal: true }).decode(
      new TextEncoder().encode(unicode),
    ),
    unicode,
  );
  for (const entry of Object.values(messages))
    for (const value of Object.values(entry)) {
      assert.ok(value.trim());
      assert.ok(!value.includes("\uFFFD"));
      assert.equal(value, value.normalize("NFC"));
    }
  const project = {
    ...projects[0],
    translations: { ru: { title: "Мой проект" }, kk: { title: "Менің жобам" } },
  };
  assert.equal(localizeProject(project, "ru").title, "Мой проект");
  assert.equal(localizeProject(project, "kk").title, "Менің жобам");
  assert.equal(localizeProject(project, "en").title, projects[0].title);
  assert.equal(
    localizeMedia(
      {
        id: "test",
        type: "image",
        url: "/media/test.webp",
        translations: { kk: { alt: "Үлгі сурет" } },
      },
      "kk",
    ).alt,
    "Үлгі сурет",
  );
});
test("direct contacts replace the channel link and music remains honest before tracks are supplied", async () => {
  const { site } = await import("../src/data/site");
  const { publishedTracks } = await import("../src/data/tracks");
  assert.equal(site.phone.number, "+77085887585");
  assert.deepEqual(
    site.socialLinks.map((link) => link.url),
    [
      "https://t.me/full_core",
      "https://www.instagram.com/fullxcore/",
      "https://www.youtube.com/@Full_Core",
      "https://www.tiktok.com/@full_core",
      "https://wa.me/77085887585",
    ],
  );
  assert.ok(site.tools.includes("FL Studio"));
  const contact = renderToString(
    createElement(
      MemoryRouter,
      { initialEntries: ["/contact"] },
      createElement(App),
    ),
  );
  assert.match(contact, /tel:\+77085887585/);
  assert.doesNotMatch(contact, /full_core_portfolio/);
  const music = renderToString(
    createElement(
      MemoryRouter,
      { initialEntries: ["/music"] },
      createElement(App),
    ),
  );
  assert.match(music, /Original music by FULL CORE/);
  assert.doesNotMatch(music, /They are not FULL CORE releases/);
  if (!publishedTracks.length) assert.doesNotMatch(music, /<audio/);
  assert.doesNotMatch(music, /NOT FOUND/);
});
test("audio collection renders a single lazy player and rejects invalid published tracks", async () => {
  const { MusicPlayer, trackText } =
    await import("../src/components/MusicPlayer");
  const { validateTracks } = await import("../src/data/tracks");
  const fixture = [
    {
      id: "test-a",
      title: "Test A",
      status: "published" as const,
      src: "/media/music/test-a.mp3",
      translations: { kk: { title: "Сынақ A" } },
    },
    {
      id: "test-b",
      title: "Test B",
      status: "published" as const,
      src: "/media/music/test-b.mp3",
    },
  ];
  validateTracks(fixture);
  const html = renderToString(createElement(MusicPlayer, { tracks: fixture }));
  assert.equal((html.match(/<audio\b/g) ?? []).length, 1);
  assert.match(html, /preload="none"/);
  assert.match(html, /Play track: Test A/);
  assert.doesNotMatch(html, /<audio[^>]*(src=|autoplay)/i);
  assert.equal(trackText(fixture[0], "kk").title, "Сынақ A");
  assert.throws(() => validateTracks([...fixture, fixture[0]]), /Duplicate/);
  assert.throws(
    () => validateTracks([{ ...fixture[0], src: "javascript:alert(1)" }]),
    /audio URL/,
  );
  assert.throws(
    () => validateTracks([{ ...fixture[0], artwork: "javascript:alert(1)" }]),
    /artwork/,
  );
});
test("home merges animation/VFX and puts Music after Design without dropping category routes", async () => {
  const { homeCategories, projectsForDiscipline } =
    await import("../src/data/disciplines");
  assert.deepEqual(
    homeCategories.map((d) => d.id),
    ["video", "motion-vfx", "design", "music"],
  );
  const combined = projectsForDiscipline("motion-vfx");
  assert.ok(combined.every((p) => ["motion", "3d-vfx"].includes(p.category)));
  assert.equal(
    combined.length,
    projectsForDiscipline("motion").length +
      projectsForDiscipline("3d-vfx").length,
  );
  for (const path of ["/motion-vfx", "/motion", "/3d-vfx"]) {
    const html = renderToString(
      createElement(
        MemoryRouter,
        { initialEntries: [path] },
        createElement(App),
      ),
    );
    assert.doesNotMatch(html, /NOT FOUND/);
  }
});
test("supplied music preserves collaborator credits, lazy playback and real assets", async () => {
  const { getPublishedTracks, tracks } = await import("../src/data/tracks");
  const { existsSync } = await import("node:fs");
  assert.equal(getPublishedTracks().length, 16);
  assert.deepEqual(getPublishedTracks([]), []);
  assert.ok(
    tracks.every((track) => !track.demo && track.artist && track.duration),
  );
  assert.equal(
    tracks.find((track) => track.id === "old-new-dance")?.artist,
    "Full Core, Yann",
  );
  assert.equal(
    tracks.find((track) => track.id === "whats-on-your-mind")?.title,
    "what$0nY0urM1nd",
  );
  for (const track of tracks) {
    assert.ok(existsSync(new URL(`../public${track.src}`, import.meta.url)));
    assert.ok(
      existsSync(new URL(`../public${track.artwork}`, import.meta.url)),
    );
  }
  const html = renderToString(
    createElement(
      MemoryRouter,
      { initialEntries: ["/music"] },
      createElement(App),
    ),
  );
  assert.equal((html.match(/<audio\b/g) ?? []).length, 1);
  assert.doesNotMatch(html, /<audio[^>]*(src=|autoplay)/i);
  assert.equal((html.match(/class="track-row /g) ?? []).length, 16);
  assert.match(html, /Full Core, 2denimskin/);
  assert.match(html, /SeeЯЮ/);
  assert.doesNotMatch(
    html,
    /Sample audio|Playback demo|These procedural music samples|DESIGN PREVIEW/,
  );
});

test("confirmed motion work leads the combined page and the unavailable ad stays unpublished", async () => {
  const { projectsForDiscipline } = await import("../src/data/disciplines");
  const { selectedProjects } = await import("../src/data/projects");
  assert.deepEqual(
    projectsForDiscipline("motion-vfx")
      .slice(0, 2)
      .map((p) => p.id),
    ["narrative-motion-edit", "lovv66-tour"],
  );
  assert.deepEqual(
    selectedProjects.map((project) => project.id),
    [
      "full-core-introduction",
      "narrative-motion-edit",
      "vash-product",
      "independent-youtube-film",
    ],
  );
  assert.ok(projectsForDiscipline("motion-vfx").length > 2);
  assert.ok(
    projectsForDiscipline("motion-vfx").every((project) => !project.demo),
  );
  const combined = renderToString(
    createElement(
      MemoryRouter,
      { initialEntries: ["/motion-vfx"] },
      createElement(App),
    ),
  );
  assert.doesNotMatch(combined, /Design preview|DESIGN PREVIEW/);
  assert.ok(!publishedProjects.some((p) => p.id === "instagram-expert-ad"));
  const html = renderToString(
    createElement(
      MemoryRouter,
      { initialEntries: ["/work/narrative-editing-2d-animation"] },
      createElement(App),
    ),
  );
  assert.match(html, /Video editing/);
  assert.match(html, /2D animation/);
  assert.match(html, /Illustration/);
  assert.match(html, /lovv66-concert-tour-visuals/);
  assert.doesNotMatch(
    html,
    /<iframe|<video|DESIGN PREVIEW|Sample media. Not FULL CORE portfolio credits/,
  );
});

test("3D formats separate playable cases from illustration galleries", async () => {
  const { filterVisualProjects, projectsForDiscipline, isIllustrationProject } =
    await import("../src/data/disciplines");
  const all = projectsForDiscipline("3d-vfx");
  const videos = filterVisualProjects(all, "video");
  const images = filterVisualProjects(all, "illustration");
  assert.ok(videos.length && images.length);
  assert.equal(videos.length + images.length, all.length);
  assert.ok(videos.every((project) => !isIllustrationProject(project)));
  assert.ok(images.every(isIllustrationProject));
  assert.equal(
    instagramEmbedUrl("https://www.instagram.com/reel/Ddrq_lMufJh/"),
    "https://www.instagram.com/p/Ddrq_lMufJh/embed/",
  );
  assert.equal(instagramEmbedUrl("https://evil.test/p/Ddrq_lMufJh/"), null);
});
test("archive import contains only real published work and valid local media", async () => {
  const { existsSync, statSync } = await import("node:fs");
  assert.equal(publishedProjects.length, 47);
  assert.ok(publishedProjects.every((project) => !project.demo));
  for (const project of publishedProjects) {
    for (const media of project.media) {
      for (const path of [media.url, media.thumbnail])
        if (path?.startsWith("/")) {
          const file = new URL(`../public${path}`, import.meta.url);
          assert.ok(existsSync(file), path);
          assert.ok(statSync(file).size < 100 * 1024 * 1024, path);
        }
    }
  }
  const html = renderToString(
    createElement(
      MemoryRouter,
      { initialEntries: ["/work"] },
      createElement(App),
    ),
  );
  assert.doesNotMatch(
    html,
    /Sample \/ Preview|Not a FULL CORE|DESIGN PREVIEW|Sample imagery/,
  );
});
