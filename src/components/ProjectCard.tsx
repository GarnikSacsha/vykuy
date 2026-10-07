import type { MoreProject } from '../lib/types'
import { Tag } from './Tag'

export function ProjectCard({ project }: { project: MoreProject }) {
  return (
    <article className="more-project-card" aria-labelledby={`more-${project.id}-title`}>
      {project.poster && <div className="more-project-poster">
        <img src={project.poster.src} alt={project.poster.alt} width="640" height="360" loading="lazy" decoding="async" onError={event => { event.currentTarget.style.visibility = 'hidden' }} />
      </div>}
      <p className="eyebrow more-project-type">{project.type}</p>
      <h3 id={`more-${project.id}-title`} className="more-project-title">{project.title}</h3>
      <p className="more-project-description">{project.description}</p>
      <ul className="more-project-tags" aria-label={`${project.title} technologies`}>
        {project.tags.map(tag => <li key={tag}><Tag>{tag}</Tag></li>)}
      </ul>
      {(project.demoUrl || project.githubUrl) && <div className="more-project-links">
        {project.demoUrl && <a href={project.demoUrl} className="nav-link" aria-label={`View ${project.title} demo`}>View Demo <span aria-hidden="true">↗</span></a>}
        {project.githubUrl && <a href={project.githubUrl} className="nav-link" aria-label={`View ${project.title} on GitHub`}>GitHub <span aria-hidden="true">↗</span></a>}
      </div>}
    </article>
  )
}
