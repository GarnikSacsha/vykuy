import { Container } from '../components/Container'
import { contactLinks } from '../data/contact'
import { SystemTopology } from '../components/SystemTopology'

export function Hero() {
  const github = contactLinks.find(link => link.channel === 'github')

  return <section aria-labelledby="hero-title" className="hero">
    <Container className="hero-content">
      <p className="eyebrow hero-role">Denys Yefimenko <span>/</span> AI & Automation Engineer</p>
      <h1 id="hero-title" className="hero-title">
        <span>Building systems</span><span> that actually work<span className="hero-period">.</span></span>
      </h1>
      <div className="hero-system-layout">
        <SystemTopology />
        <div className="hero-support">
          <p className="hero-principle">Complex systems.<br /> Intentionally connected.</p>
          <p className="hero-description">Python backend, AI integrations, automation, and full-stack products — from architecture to deployment.</p>
          {github && <a href={github.href} className="text-link hero-github" target="_blank" rel="noopener noreferrer" aria-label="GitHub (opens in a new tab)">
            GitHub <span aria-hidden="true">↗</span>
          </a>}
        </div>
      </div>
      <div className="hero-footnote">
        <span>Independent engineering / Chernivtsi, Ukraine</span>
        <a href="#work">Scroll to explore <span aria-hidden="true">↓</span></a>
      </div>
    </Container>
  </section>
}
