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
        <div className="project-story">
          <div>
            <p className="eyebrow">The problem</p>
            <p className="project-story-text">{project.problem}</p>
          </div>
          <div>
            <p className="eyebrow">What I built</p>
            <ul className="project-proof" aria-label={project.title + ': what I built'}>
              {project.proofPoints.slice(0, 3).map(point => <li key={point}>{point}</li>)}
            </ul>
          </div>
          <div>
            <p className="eyebrow">Result</p>
            <p className="project-story-text project-story-result">{project.result}</p>
          </div>
        </div>
        <p className="project-technologies">{project.tags.join(' / ')}</p>
        {(project.demoUrl || project.githubUrl) && <div className="project-links">
          {project.demoUrl && <a className="text-link" href={project.demoUrl} target="_blank" rel="noopener noreferrer">Open live demo <span aria-hidden="true">↗</span></a>}
          {project.githubUrl && <a className="text-link" href={project.githubUrl} target="_blank" rel="noopener noreferrer">GitHub <span aria-hidden="true">↗</span></a>}
        </div>}
        <details className="project-details">
          <summary>More details <span className="sr-only">: {project.title}</span><span className="details-toggle" aria-hidden="true">+</span></summary>
          <div className="details-content">
            <p>{project.description}</p>
            {project.proofPoints.length > 3 && <ul>{project.proofPoints.slice(3).map(point => <li key={point}>{point}</li>)}</ul>}
            {project.impact?.supportingCopy && <p>{project.impact.supportingCopy}</p>}
          </div>
        </details>
      </div>
      {project.impact && <aside className="project-impact">
        <p className="eyebrow">{project.impact.label}*</p>
        <p className="project-impact-metric">{project.impact.metric}</p>
        <p className="project-impact-disclaimer">{project.impact.takeaway ?? project.impact.description}</p>
      </aside>}
    </article>
  )
}
