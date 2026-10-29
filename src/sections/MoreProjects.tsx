import { useEffect } from 'react'
import { Section } from '../components/Section'
import { moreProjects } from '../data/moreProjects'
import { sections } from '../data/site'
import '../styles/secondary-sections.css'

// Links such as #family-life-os (from Services) open the matching index item.
function openFromHash() {
  const id = decodeURIComponent(window.location.hash.slice(1))
  if (!id) return
  const target = document.getElementById(id)
  if (target instanceof HTMLDetailsElement) target.open = true
}

export function MoreProjects() {
  useEffect(() => {
    openFromHash()
    window.addEventListener('hashchange', openFromHash)
    return () => window.removeEventListener('hashchange', openFromHash)
  }, [])

  return <Section content={sections.more}>
    <div className="project-index">
      {moreProjects.map((project, index) => <details className="index-item" id={project.id} key={project.id}>
        <summary>
          <span className="index-number">{String(index + 4).padStart(2, '0')}</span>
          <span className="index-name">{project.title}<span className="index-description">{project.description}</span></span>
          <span className="index-type">{project.type}</span>
          <span className="index-arrow" aria-hidden="true">+</span>
        </summary>
        <div className="index-content">
          <p className="eyebrow">Technologies</p>
          <p>{project.tags.join(' / ')}</p>
          {project.capabilities && <ul>{project.capabilities.map(item => <li key={item}>{item}</li>)}</ul>}
          {project.poster && <img src={project.poster.src} alt={project.poster.alt} loading="lazy" />}
          {project.demoUrl && <a className="text-link" href={project.demoUrl} target="_blank" rel="noopener noreferrer">Open live demo ↗</a>}
          {project.githubUrl && <a className="text-link" href={project.githubUrl} target="_blank" rel="noopener noreferrer">GitHub ↗</a>}
        </div>
      </details>)}
    </div>
  </Section>
}
