import { Section } from '../components/Section'
import { capabilities } from '../data/capabilities'
import { sections } from '../data/site'
import '../styles/secondary-sections.css'

export function Stack() {
  return <Section content={sections.stack}>
    <div className="capability-grid">
      {capabilities.map(group => <div className="capability-group" key={group.id}>
        <h3 className="capability-title">{group.title}</h3>
        <ul className="capability-technologies" aria-label={group.title}>
          {group.technologies.map(technology => <li key={technology}>{technology}</li>)}
        </ul>
      </div>)}
    </div>
  </Section>
}
