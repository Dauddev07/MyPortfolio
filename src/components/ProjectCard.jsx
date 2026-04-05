export function ProjectCard({ project, index }) {
  const i = index ?? 0;
  return (
    <article
      className="project-card card"
      style={{ "--stagger": i }}
    >
      <div className="project-card-top">
        <span className="project-index" aria-hidden="true">
          {String(i + 1).padStart(2, "0")}
        </span>
        <h3>{project.name}</h3>
      </div>
      <p className="project-desc">{project.description}</p>
      <ul className="project-tags">
        {project.tags.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
      <div className="project-links">
        {project.liveUrl ? (
          <a
            className="btn btn-small btn-primary"
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer noopener"
          >
            Live site
          </a>
        ) : null}
        {project.repoUrl ? (
          <a
            className="btn btn-small btn-ghost"
            href={project.repoUrl}
            target="_blank"
            rel="noreferrer noopener"
          >
            Source
          </a>
        ) : null}
      </div>
    </article>
  );
}
