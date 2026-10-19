import { Section } from '../components/Section'
import { moreProjects } from '../data/moreProjects'
import { sections } from '../data/site'
import '../styles/secondary-sections.css'

export function MoreProjects() {
  return <Section content={sections.more}>
    <div className="project-index">
      {moreProjects.map((project, index) => <details className="index-item" key={project.id}>
        <summary>
          <span className="index-number">0{index + 4}</span>
          <span className="index-name">{project.title}<span className="index-description">{project.description}</span></span>
          <span className="index-type">{project.type}</span>
          <span className="index-arrow" aria-hidden="true">↗</span>
        </summary>
        <div className="index-content">
          <p className="eyebrow">Technologies</p>
          <p>{project.tags.join(' / ')}</p>
          {project.capabilities && <ul>{project.capabilities.map(item => <li key={item}>{item}</li>)}</ul>}
          {project.poster && <img src={project.poster.src} alt={project.poster.alt} loading="lazy" />}
          {project.demoUrl && <a className="text-link" href={project.demoUrl} target="_blank" rel="noopener noreferrer">View demo ↗</a>}
          {project.githubUrl && <a className="text-link" href={project.githubUrl} target="_blank" rel="noopener noreferrer">GitHub ↗</a>}
        </div>
      </details>)}
    </div>
  </Section>
}
