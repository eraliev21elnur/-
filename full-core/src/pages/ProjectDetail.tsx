import { ArrowLeft } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { publishedProjects, categoryLabel } from "../data/projects";
import { MediaPlayer } from "../components/MediaPlayer";
import { ArrowLink } from "../components/UI";
import { safeUrl } from "../lib/media";
export function NotFound() {
  return (
    <section className="wrap page-top not-found">
      <span className="eyebrow">404 / Outside the frame</span>
      <h1>NOT FOUND.</h1>
      <p className="page-lead">
        This page isn’t available. Find your way back to the work.
      </p>
      <ArrowLink to="/work">Back to work</ArrowLink>
    </section>
  );
}
export function ProjectDetail() {
  const { slug } = useParams();
  const project = publishedProjects.find((p) => p.slug === slug);
  if (!project) return <NotFound />;
  const next =
    publishedProjects.length > 1
      ? publishedProjects[
          (publishedProjects.indexOf(project) + 1) % publishedProjects.length
        ]
      : undefined;
  return (
    <article className="wrap page-top project-detail">
      <Link className="back-link" to="/work">
        <ArrowLeft size={16} />
        Back to work
      </Link>
      <div className="project-kicker eyebrow">
        {categoryLabel(project.category)}
        {project.year && ` / ${project.year}`}
        {project.client && ` / ${project.client}`}
      </div>
      <h1>{project.title}</h1>
      {project.demo && (
        <div className="project-demo-note">
          Sample case — temporary media for design preview. Not a FULL CORE
          project.
        </div>
      )}
      {project.subtitle && <p className="page-lead">{project.subtitle}</p>}
      {project.description && (
        <p className="project-description">{project.description}</p>
      )}
      {project.media[0] && (
        <MediaPlayer
          key={project.media[0].id}
          media={project.media[0]}
          title={project.title}
        />
      )}
      {(project.role?.length || project.tools?.length || project.process) && (
        <div className="project-overview">
          {project.role?.length ? (
            <section>
              <h2 className="eyebrow">My role</h2>
              <ul>
                {project.role.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
            </section>
          ) : null}
          {project.tools?.length ? (
            <section>
              <h2 className="eyebrow">Tools</h2>
              <ul>
                {project.tools.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </section>
          ) : null}
          {project.process && (
            <section>
              <h2 className="eyebrow">Process</h2>
              <p>{project.process}</p>
            </section>
          )}
        </div>
      )}
      {project.media.length > 1 && (
        <section className="additional-media">
          <h2 className="eyebrow">A closer look</h2>
          <div className="media-grid">
            {project.media.slice(1).map((m) => (
              <MediaPlayer key={m.id} media={m} title={project.title} />
            ))}
          </div>
        </section>
      )}
      {project.credits && (
        <p className="small-copy">Credits: {project.credits}</p>
      )}
      {project.externalLinks?.map((l) => (
        <a
          className="arrow-link external-project"
          key={l.url}
          href={safeUrl(l.url)}
          target="_blank"
          rel="noreferrer"
        >
          {l.label} ↗
        </a>
      ))}
      <div className="next-project">
        {next ? (
          <>
            <span className="eyebrow">Next project</span>
            <ArrowLink to={`/work/${next.slug}`}>{next.title}</ArrowLink>
          </>
        ) : (
          <ArrowLink to="/work">Back to all work</ArrowLink>
        )}
      </div>
    </article>
  );
}
