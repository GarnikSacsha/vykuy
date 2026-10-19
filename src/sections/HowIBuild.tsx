import { Section } from '../components/Section'
import { buildProcess } from '../data/buildProcess'
import { sections } from '../data/site'
import '../styles/secondary-sections.css'

export function HowIBuild() {
  return <Section content={sections.process}>
    <p className="build-introduction">{buildProcess.introduction}</p>
    <ol className="build-process" role="list">
      {buildProcess.steps.map((step, index) => <li key={step.number} className="build-step">
        <svg className="process-connector" viewBox="0 0 240 24" preserveAspectRatio="none" fill="none" aria-hidden="true"><path d="M0 2H85L105 20L125 2H240" /></svg>
        <span className="build-step-number" aria-hidden="true">{step.number}</span>
        <div>
          <h3 className="build-step-title">{['Understand', 'Architect', 'Build', 'Validate', 'Deploy'][index]}</h3>
          <p className="build-step-description">{step.description}</p>
        </div>
      </li>)}
    </ol>
  </Section>
}
