import { Section } from '../components/Section'
import { services } from '../data/services'
import { sections } from '../data/site'
import '../styles/secondary-sections.css'

export function Services() {
  return <Section content={sections.services}>
    <ol className="service-list" role="list">
      {services.map((service, index) => <li key={service.id} className="service-item">
        <span className="service-number" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
        <h3 className="service-title">{service.title}</h3>
        <p className="service-description">{service.description}</p>
        <p className="service-examples"><span className="eyebrow">See</span>
          {service.examples.map(example => <a key={example.href} href={example.href}>{example.label}</a>)}
        </p>
      </li>)}
    </ol>
  </Section>
}
