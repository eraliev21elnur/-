import { localizeProject } from "../i18n/content";
import { useLocale } from "../i18n";
import {
  projectDiscipline,
  disciplines,
  projectsForDiscipline,
  motionVfx,
} from "../data/disciplines";
import { ArrowLeft } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { publishedProjects, categoryLabel } from "../data/projects";
import { MediaPlayer } from "../components/MediaPlayer";
import { ArrowLink } from "../components/UI";
import { safeUrl } from "../lib/media";
export function NotFound() {
  const { t } = useLocale();
  return (
    <section className="wrap page-top not-found">
      <span className="eyebrow">{t("404 / Outside the frame")}</span>
      <h1>{t("NOT FOUND.")}</h1>
      <p className="page-lead">
        {t("This page isn\u2019t available. Find your way back to the work.")}
      </p>
      <ArrowLink to="/work">{t("Back to work")}</ArrowLink>
    </section>
  );
}
export function ProjectDetail() {
  const { t, language } = useLocale();
  const { slug } = useParams();
  const sourceProject = publishedProjects.find((p) => p.slug === slug);
  const project = sourceProject
    ? localizeProject(sourceProject, language)
    : undefined;
  if (!project) return <NotFound />;
  const discipline = projectDiscipline(project);
  const group = ["motion", "3d-vfx"].includes(discipline)
    ? "motion-vfx"
    : discipline;
  const siblings = projectsForDiscipline(group);
  const section =
    group === "motion-vfx"
      ? motionVfx
      : disciplines.find((d) => d.id === group);
  const backTo = section ? `/${group}` : "/work";
  const next =
    siblings.length > 1
      ? siblings[
          (siblings.findIndex((p) => p.id === project.id) + 1) % siblings.length
        ]
      : undefined;
  return (
    <article className="wrap page-top project-detail">
      <Link className="back-link" to={backTo}>
        <ArrowLeft size={16} />
        {t("Back to")} {t(section?.nav ?? "All")}
      </Link>
      <div className="project-kicker eyebrow">
        {t(categoryLabel(project.category))}
        {project.year && ` / ${project.year}`}
        {project.client && ` / ${project.client}`}
      </div>
      <h1>{t(project.title)}</h1>
      {project.demo && (
        <div className="project-demo-note">
          {t(
            "Sample case \u2014 temporary media for design preview. Not a FULL CORE project.",
          )}
        </div>
      )}
      {project.subtitle && <p className="page-lead">{t(project.subtitle)}</p>}
      {project.description && !project.demo && (
        <p className="project-description">{t(project.description)}</p>
      )}
      {project.media[0] && (
        <MediaPlayer
          key={project.media[0].id}
          media={project.media[0]}
          title={t(project.title)}
        />
      )}
      {(project.role?.length || project.tools?.length || project.process) && (
        <div className="project-overview">
          {project.role?.length ? (
            <section>
              <h2 className="eyebrow">{t("My role")}</h2>
              <ul>
                {project.role.map((r) => (
                  <li key={r}>{t(r)}</li>
                ))}
              </ul>
            </section>
          ) : null}
          {project.tools?.length ? (
            <section>
              <h2 className="eyebrow">{t("Tools")}</h2>
              <ul>
                {project.tools.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </section>
          ) : null}
          {project.process && (
            <section>
              <h2 className="eyebrow">{t("Process")}</h2>
              <p>{t(project.process)}</p>
            </section>
          )}
        </div>
      )}
      {project.media.length > 1 && (
        <section className="additional-media">
          <h2 className="eyebrow">{t("A closer look")}</h2>
          <div className="media-grid">
            {project.media.slice(1).map((m) => (
              <MediaPlayer key={m.id} media={m} title={t(project.title)} />
            ))}
          </div>
        </section>
      )}
      {project.credits && (
        <p className="small-copy">
          {t("Credits:")}
          {t(project.credits)}
        </p>
      )}
      {project.externalLinks?.map((l) => (
        <a
          className="arrow-link external-project"
          key={l.url}
          href={safeUrl(l.url)}
          target="_blank"
          rel="noreferrer"
        >
          {t(l.label)} ↗
        </a>
      ))}
      <div className="next-project">
        {next ? (
          <>
            <span className="eyebrow">{t("Next project")}</span>
            <ArrowLink to={`/work/${next.slug}`}>{t(next.title)}</ArrowLink>
          </>
        ) : (
          <ArrowLink to={backTo}>
            {t("Back to")} {t(section?.nav ?? "All")}
          </ArrowLink>
        )}
      </div>
    </article>
  );
}
