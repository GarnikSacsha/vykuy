import { Container } from '../components/Container'
import { TopologyMark } from '../components/TopologyMark'
import { contactLinks } from '../data/contact'
import { projects } from '../data/projects'
import { site } from '../data/site'
import '../styles/hero.css'

// Short client-facing labels for the hero index; full copy lives in the case studies.
const indexNotes: Record<string, string> = {
  saloed: 'Website and online booking for a massage therapist',
  pitstop: 'Online booking for auto repair shops',
  'horeca-training': 'Staff training for restaurants and cafés',
  'access-flow': 'Paid access to private Telegram channels',
}

export function Hero() {
  const telegram = contactLinks.find(link => link.channel === 'telegram')
  const lastLine = site.headline.length - 1

  return <section aria-labelledby="hero-title" className="hero">
    <Container className="hero-content">
      <p className="eyebrow hero-role"><TopologyMark />Denys Yefimenko <span>/</span> {site.role}</p>
      <div className="hero-grid">
        <div className="hero-main">
          <h1 id="hero-title" className="hero-title">
            {site.headline.map((line, index) => <span className="hero-line" key={line}><span className="hero-line-inner">{line}{index === lastLine && <span className="hero-period">.</span>}</span></span>)}
          </h1>
          <p className="hero-description">{site.description}</p>
          <div className="hero-actions">
            {telegram && <a href={telegram.href} className="button button--primary" target="_blank" rel="noopener noreferrer" aria-label={`${site.primaryCta} (opens in a new tab)`}>
              {site.primaryCta} <span aria-hidden="true">↗</span>
            </a>}
            <a href="#work" className="text-link">{site.secondaryCta} <span aria-hidden="true">↓</span></a>
          </div>
        </div>
        <nav className="hero-index" aria-label={site.indexLabel}>
          <p className="eyebrow">{site.indexLabel}</p>
          <ol role="list">
            {projects.map((project, index) => <li key={project.id}>
              <a href={`#${project.slug}`} className="hero-index-link">
                <span className="hero-index-number">{String(index + 1).padStart(2, '0')}</span>
                <span className="hero-index-name">{project.title}</span>
                <span className="hero-index-note">{indexNotes[project.id]}</span>
                <span className="hero-index-arrow" aria-hidden="true">↓</span>
              </a>
            </li>)}
          </ol>
        </nav>
      </div>
      <div className="hero-footnote">
        <span>Chernivtsi, Ukraine / Working remotely</span>
        <a href="#work">Scroll to explore <span aria-hidden="true">↓</span></a>
      </div>
    </Container>
  </section>
}
