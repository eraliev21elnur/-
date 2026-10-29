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
import { embedUrl } from "../src/lib/media";
import { validateProjects } from "./validate-content";
test("drafts do not appear in public routes or listings", () => {
  validateProjects();
  assert.ok(publishedProjects.every((p) => p.status === "published"));
  const html = renderToString(
    createElement(
      MemoryRouter,
      { initialEntries: ["/work/premium-chair-studio"] },
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
    /Premium Chair Studio Campaign/,
  );
});
test("filter uses category IDs and supports an empty category", () => {
  assert.equal(filterProjects(projects, "commercial").length, 3);
  assert.equal(filterProjects(projects, "3d-vfx").length, 0);
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
    assert.equal(disciplineVisible("3d-vfx"), false);
    site.publishEmptyDisciplines = true;
    assert.equal(disciplineVisible("3d-vfx"), true);
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
