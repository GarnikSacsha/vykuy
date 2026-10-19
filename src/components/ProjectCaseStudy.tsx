import type { Project } from '../lib/types'
import { ProjectVideo } from './ProjectVideo'
import { TopologyMark } from './TopologyMark'

export function ProjectCaseStudy({ project, index }: { project: Project; index: number }) {
  if (project.status !== 'project') {
    return <article id={project.slug} className="project-study" aria-labelledby={project.id + '-title'}>
      <div className="project-study-copy">
        <h3 id={project.id + '-title'} className="project-title">{project.title}</h3>
        <p className="project-summary">Project details and media to be added.</p>
      </div>
    </article>
  }

  const summary = project.description.split('. ')[0].replace(/\.$/, '') + '.'

  return (
    <article id={project.slug} className={`project-study project-study--${index + 1}`} aria-labelledby={project.id + '-title'}>
      <div className="project-study-copy">
        <p className="project-type"><span className="project-index-mark"><TopologyMark />{String(index + 1).padStart(2, '0')}</span>{project.type}</p>
        <h3 id={project.id + '-title'} className="project-title">{project.title}</h3>
        <p className="project-summary">{summary}</p>
      </div>
      <div className="project-study-media">
        <ProjectVideo key={`${project.media.webm}-${project.media.mp4}-${project.media.poster}`} title={project.title} {...project.media} />
      </div>
      <div className="project-engineering">
        <p className="eyebrow">Engineering highlights</p>
        <ul className="project-proof" aria-label={project.title + ' engineering highlights'}>
          {project.proofPoints.slice(0, 3).map(point => <li key={point}>{point}</li>)}
        </ul>
        <p className="project-technologies">{project.tags.join(' / ')}</p>
        <details className="project-details">
          <summary>Explore case study <span className="sr-only">: {project.title}</span><span aria-hidden="true">↗</span></summary>
          <div className="details-content">
            <p>{project.description}</p>
            {project.proofPoints.length > 3 && <ul>{project.proofPoints.slice(3).map(point => <li key={point}>{point}</li>)}</ul>}
            {project.impact && <>
              <p>{project.impact.description}</p>
              {project.impact.takeaway && <p>{project.impact.takeaway}</p>}
              {project.impact.supportingCopy && <p>{project.impact.supportingCopy}</p>}
            </>}
            {project.demoUrl && <a className="text-link" href={project.demoUrl} target="_blank" rel="noopener noreferrer">View demo ↗</a>}
            {project.githubUrl && <a className="text-link" href={project.githubUrl} target="_blank" rel="noopener noreferrer">GitHub ↗</a>}
          </div>
        </details>
      </div>
      {project.impact && <aside className="project-impact">
        <p className="eyebrow">{project.impact.label}</p>
        <p className="project-impact-metric">{project.impact.metric}</p>
        <p className="project-impact-disclaimer">{project.impact.disclaimer}</p>
      </aside>}
    </article>
  )
}
