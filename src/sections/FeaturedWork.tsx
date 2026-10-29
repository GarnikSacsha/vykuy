import { ProjectCaseStudy } from '../components/ProjectCaseStudy'
import { Section } from '../components/Section'
import { projects } from '../data/projects'
import { sections } from '../data/site'
import '../styles/projects.css'

export function FeaturedWork() {
  return <Section content={sections.work}>
    <div className="featured-projects">{projects.map((project, index) => <ProjectCaseStudy key={project.id} project={project} index={index} />)}</div>
    <p className="impact-footnote">* Time savings are estimates based on each workflow, not measured production analytics.</p>
  </Section>
}
