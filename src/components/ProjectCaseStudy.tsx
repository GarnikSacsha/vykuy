import type { Project } from '../lib/types'
import { Button } from './Button'
import { ProjectVideo } from './ProjectVideo'
import { ProjectImpact } from './ProjectImpact'
import { Tag } from './Tag'

export function ProjectCaseStudy({ project, index }: { project: Project; index: number }) {
  const todo = project.status === 'todo'

  return (
    <article id={project.slug} className={`project-study${index % 2 === 1 ? ' project-study--reverse' : ''}`} aria-labelledby={`${project.id}-title`}>
      <div className="project-study-media">
        {todo ? (
          <div className="project-todo-media"><span className="eyebrow">TODO / Media</span><p>Project media to be added.</p></div>
        ) : <ProjectVideo key={`${project.media.webm}-${project.media.mp4}-${project.media.poster}`} title={project.title} {...project.media} />}
      </div>
      <div className="project-study-copy">
        <p className="project-type"><span className="project-number">{String(index + 1).padStart(2, '0')}</span>{todo ? 'TODO / Editable placeholder' : project.type}</p>
        <h3 id={`${project.id}-title`} className="project-title">{project.title}</h3>
        {todo ? <p className="project-summary">TODO: Add project details and media.</p> : (
          <>
            <p className="project-summary">{project.description}</p>
            <ul className="project-proof" aria-label={`${project.title} capabilities`}>
              {project.proofPoints.map(point => <li key={point}>{point}</li>)}
            </ul>
            {project.impact && <ProjectImpact impact={project.impact} />}
            <ul className="project-tags" aria-label={`${project.title} technologies`}>
              {project.tags.map(technology => <li key={technology}><Tag>{technology}</Tag></li>)}
            </ul>
            {(project.demoUrl || project.githubUrl) && <div className="project-links">
              {project.demoUrl && <Button href={project.demoUrl} variant="secondary" aria-label={`View ${project.title} demo`}>View Demo <span aria-hidden="true">↗</span></Button>}
              {project.githubUrl && <Button href={project.githubUrl} variant="secondary" aria-label={`View ${project.title} on GitHub`}>GitHub <span aria-hidden="true">↗</span></Button>}
            </div>}
          </>
        )}
      </div>
    </article>
  )
}
