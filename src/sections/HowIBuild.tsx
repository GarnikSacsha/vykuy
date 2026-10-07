import { Section } from '../components/Section'
import { buildProcess } from '../data/buildProcess'
import { sections } from '../data/site'
import '../styles/secondary-sections.css'

export function HowIBuild() {
  return <Section content={sections.process}>
    <p className="build-introduction">{buildProcess.introduction}</p>
    <ol className="build-process" role="list">
      {buildProcess.steps.map(step => <li key={step.number} className="build-step">
        <span className="build-step-number" aria-hidden="true">{step.number}</span>
        <div>
          <h3 className="build-step-title">{step.title}</h3>
          <p className="build-step-description">{step.description}</p>
        </div>
      </li>)}
    </ol>
  </Section>
}
