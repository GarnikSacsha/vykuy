import { ProjectCard } from '../components/ProjectCard'
import { Section } from '../components/Section'
import { moreProjects } from '../data/moreProjects'
import { sections } from '../data/site'
import '../styles/secondary-sections.css'

export function MoreProjects() {
  return <Section content={sections.more}>
    <div className="more-projects-grid">{moreProjects.map(project => <ProjectCard key={project.id} project={project} />)}</div>
  </Section>
}
