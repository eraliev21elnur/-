import { useState, useSyncExternalStore } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import {
  disciplines,
  disciplineVisible,
  filterVideos,
  projectsForDiscipline,
  videoFilters,
  type DisciplineId,
} from "../data/disciplines";
import type { Project } from "../data/projects";
import { site } from "../data/site";
import { EmptyWork, ProjectCard } from "../components/UI";
import { MediaPlayer } from "../components/MediaPlayer";
import { NotFound } from "./ProjectDetail";
const subscribeHydration = () => () => {};
function ProjectSummary({ project }: { project: Project }) {
  return (
    <div className="inline-project-info">
      <div>
        {project.demo && (
          <span className="eyebrow sample-label">Sample / Preview</span>
        )}
        <h2>{project.title}</h2>
        {!project.demo && project.description && <p>{project.description}</p>}
        {project.demo && (
          <p>Temporary media for layout preview. Not a FULL CORE project.</p>
        )}
        <Link className="arrow-link" to={`/work/${project.slug}`}>
          {project.demo ? "View sample & credits" : "View project"}
          <ArrowUpRight size={16} />
        </Link>
      </div>
      {project.role?.length || project.tools?.length ? (
        <dl>
          {project.role?.length ? (
            <div>
              <dt>My role</dt>
              <dd>{project.role.join(" / ")}</dd>
            </div>
          ) : null}
          {project.tools?.length ? (
            <div>
              <dt>Tools</dt>
              <dd>{project.tools.join(" / ")}</dd>
            </div>
          ) : null}
        </dl>
      ) : null}
    </div>
  );
}
export function Discipline({ id }: { id: DisciplineId }) {
  const section = disciplines.find((d) => d.id === id)!;
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
  const items = id === "video" ? filterVideos(projects, filter) : projects;
  if (!disciplineVisible(id)) return <NotFound />;
  return (
    <div className={`discipline-page discipline-${id} wrap`}>
      <div className="breadcrumb">
        <Link to="/">Home</Link>
        <span>/</span>
        <span>{section.nav}</span>
      </div>
      <header className="discipline-heading">
        <div>
          <span className="eyebrow">{section.short}</span>
          <h1>
            {section.title}
            <span>.</span>
          </h1>
        </div>
        <p>{section.description}</p>
      </header>
      {site.demoMode && projects.some((p) => p.demo) && (
        <p className="preview-note">
          Design preview — the following samples demonstrate the layout, not
          personal work.
        </p>
      )}
      {id === "video" && (
        <div
          className="filters"
          role="group"
          aria-label="Filter video projects"
        >
          {videoFilters.map((f) => (
            <button
              key={f.id}
              aria-pressed={filter === f.id}
              onClick={() => {
                setParams(f.id === "all" ? {} : { type: f.id }, {
                  replace: true,
                });
                setLimit(12);
              }}
            >
              {f.label}
              <span>{filterVideos(projects, f.id).length}</span>
            </button>
          ))}
        </div>
      )}
      <div className="sr-only" aria-live="polite">
        {items.length} projects
      </div>
      {!items.length ? (
        <EmptyWork
          filtered={id === "video" && filter !== "all"}
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
                    <MediaPlayer key={m.id} media={m} title={p.title} />
                  ))}
              </div>
            </section>
          ))}
        </div>
      ) : (
        <div className="screening-list">
          {items.slice(0, limit).map((p) => {
            const media =
              id === "motion"
                ? p.media.find((m) => m.type !== "image")
                : p.media[0];
            return (
              <section className="screening-project" key={p.id}>
                {media && <MediaPlayer media={media} title={p.title} />}
                <ProjectSummary project={p} />
              </section>
            );
          })}
        </div>
      )}
      {items.length > limit && (
        <button className="load-more" onClick={() => setLimit(limit + 12)}>
          Load more projects
        </button>
      )}
      <div className="discipline-end">
        <span className="eyebrow">Explore another discipline</span>
        <nav aria-label="Other disciplines">
          {disciplines
            .filter((d) => d.id !== id && disciplineVisible(d.id))
            .map((d) => (
              <Link to={`/${d.id}`} key={d.id}>
                {d.nav}
                <ArrowUpRight size={16} />
              </Link>
            ))}
        </nav>
      </div>
    </div>
  );
}
