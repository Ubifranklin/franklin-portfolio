export default function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <img src={project.image} alt={`${project.title} screenshot`} />

      <div className="project-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>

        <ul className="tech-list">
          {project.tech.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <div className="project-links">
          <a href={project.live} target="_blank" rel="noreferrer">
            Live Demo
          </a>
          <a href={project.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </article>
  );
}

