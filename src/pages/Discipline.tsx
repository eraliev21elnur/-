import { localizeProject } from "../i18n/content";
import { useLocale } from "../i18n";
import { useState, useSyncExternalStore } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import {
  disciplines,
  motionVfx,
  disciplineVisible,
  filterVideos,
  projectsForDiscipline,
  videoFilters,
  threeDFilters,
  motionVfxFilters,
  filterVisualProjects,
  isIllustrationProject,
  type DisciplineId,
} from "../data/disciplines";
import type { Project } from "../data/projects";
import { EmptyWork, ProjectCard } from "../components/UI";
import { MediaPlayer } from "../components/MediaPlayer";
import { NotFound } from "./ProjectDetail";
const subscribeHydration = () => () => {};
function ProjectSummary({ project: sourceProject }: { project: Project }) {
  const { t, language } = useLocale();
  const project = localizeProject(sourceProject, language);
  const imageCount = project.media.filter(
    (media) => media.type === "image",
  ).length;
  return (
    <div className="inline-project-info">
      <div>
        {project.demo && (
          <span className="eyebrow sample-label">{t("Sample / Preview")}</span>
        )}
        <h2>{t(project.title)}</h2>
        {!project.demo && project.description && (
          <p>{t(project.description)}</p>
        )}
        {project.demo && (
          <p>
            {t("Temporary media for layout preview. Not a FULL CORE project.")}
          </p>
        )}
        <Link className="arrow-link" to={`/work/${project.slug}`}>
          {project.demo
            ? t("View sample & credits")
            : isIllustrationProject(project) && imageCount > 1
              ? t("View gallery ({count})").replace(
                  "{count}",
                  String(imageCount),
                )
              : t("View project")}
          <ArrowUpRight size={16} />
        </Link>
      </div>
      {project.role?.length || project.tools?.length ? (
        <dl>
          {project.role?.length ? (
            <div>
              <dt>{t("My role")}</dt>
              <dd>{project.role.map((role) => t(role)).join(" / ")}</dd>
            </div>
          ) : null}
          {project.tools?.length ? (
            <div>
              <dt>{t("Tools")}</dt>
              <dd>{project.tools.join(" / ")}</dd>
            </div>
          ) : null}
        </dl>
      ) : null}
    </div>
  );
}
export function Discipline({ id }: { id: DisciplineId | "motion-vfx" }) {
  const { t } = useLocale();
  const section =
    id === "motion-vfx" ? motionVfx : disciplines.find((d) => d.id === id)!;
  const projects = projectsForDiscipline(id);
  const [params, setParams] = useSearchParams();
  const hydrated = useSyncExternalStore(
    subscribeHydration,
    () => true,
    () => false,
  );
  const [limit, setLimit] = useState(12);
  const filter =
    hydrated && videoFilters.some((f) => f.id === params.get("type"))
      ? params.get("type")!
      : "all";
  const visualFilters =
    id === "3d-vfx"
      ? threeDFilters
      : id === "motion-vfx"
        ? motionVfxFilters
        : null;
  const format =
    hydrated &&
    visualFilters?.some((option) => option.id === params.get("format"))
      ? params.get("format")!
      : "all";
  const items =
    id === "video"
      ? filterVideos(projects, filter)
      : visualFilters
        ? filterVisualProjects(projects, format)
        : projects;
  if (!disciplineVisible(id)) return <NotFound />;
  return (
    <div className={`discipline-page discipline-${id} wrap`}>
      <div className="breadcrumb">
        <Link to="/">{t("Home")}</Link>
        <span>/</span>
        <span>{t(section.nav)}</span>
      </div>
      <header className="discipline-heading">
        <div>
          <span className="eyebrow">{t(section.short)}</span>
          <h1>
            {t(section.title)}
            <span>.</span>
          </h1>
        </div>
        <p>{t(section.description)}</p>
      </header>
      {id === "video" && (
        <div
          className="filters"
          role="group"
          aria-label={t("Filter video projects")}
        >
          {videoFilters.map((f) => (
            <button
              key={f.id}
              aria-pressed={filter === f.id}
              onClick={() => {
                setParams(
                  f.id === "all"
                    ? {}
                    : {
                        type: f.id,
                      },
                  {
                    replace: true,
                  },
                );
                setLimit(12);
              }}
            >
              {t(f.label)}
              <span>{filterVideos(projects, f.id).length}</span>
            </button>
          ))}
        </div>
      )}
      {visualFilters && (
        <div className="filters" role="group" aria-label={t("Filter 3D work")}>
          {visualFilters.map((option) => (
            <button
              key={option.id}
              aria-pressed={format === option.id}
              onClick={() => {
                setParams(option.id === "all" ? {} : { format: option.id }, {
                  replace: true,
                });
                setLimit(12);
              }}
            >
              {t(option.label)}
              <span>{filterVisualProjects(projects, option.id).length}</span>
            </button>
          ))}
        </div>
      )}
      <div className="sr-only" aria-live="polite">
        {t("Projects")}: {items.length}
      </div>
      {!items.length ? (
        <EmptyWork
          filtered={
            (id === "video" && filter !== "all") ||
            (visualFilters !== null && format !== "all")
          }
          discipline={section.nav.toLowerCase()}
        />
      ) : id === "video" ? (
        <div className="video-grid">
          {items.slice(0, limit).map((p, i) => (
            <ProjectCard project={p} index={i} key={p.id} />
          ))}
        </div>
      ) : id === "design" ? (
        <div className="design-projects">
          {items.slice(0, limit).map((p) => (
            <section className="design-project" key={p.id}>
              <ProjectSummary project={p} />
              <div className="design-gallery">
                {p.media
                  .filter((m) => m.type === "image")
                  .slice(0, 4)
                  .map((m) => (
                    <MediaPlayer key={m.id} media={m} title={t(p.title)} />
                  ))}
              </div>
            </section>
          ))}
        </div>
      ) : (
        <div className="screening-list">
          {items.slice(0, limit).map((p) => {
            const media =
              id === "motion" ||
              (id === "motion-vfx" && p.category === "motion")
                ? p.media.find((m) => m.type !== "image")
                : p.media[0];
            return (
              <section className="screening-project" key={p.id}>
                {isIllustrationProject(p) ? (
                  <div className="design-gallery">
                    {p.media.slice(0, 4).map((image) => (
                      <MediaPlayer
                        key={image.id}
                        media={image}
                        title={t(p.title)}
                      />
                    ))}
                  </div>
                ) : (
                  media && <MediaPlayer media={media} title={t(p.title)} />
                )}
                <ProjectSummary project={p} />
              </section>
            );
          })}
        </div>
      )}
      {items.length > limit && (
        <button className="load-more" onClick={() => setLimit(limit + 12)}>
          {t("Load more projects")}
        </button>
      )}
      <div className="discipline-end">
        <span className="eyebrow">{t("Explore another discipline")}</span>
        <nav aria-label={t("Other disciplines")}>
          {disciplines
            .filter((d) => d.id !== id && disciplineVisible(d.id))
            .map((d) => (
              <Link to={`/${d.id}`} key={d.id}>
                {t(d.nav)}
                <ArrowUpRight size={16} />
              </Link>
            ))}
        </nav>
      </div>
    </div>
  );
}
