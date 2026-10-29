import { Container } from '../components/Container'
import { contactLinks } from '../data/contact'
import { site } from '../data/site'
import { SystemTopology } from '../components/SystemTopology'

export function Hero() {
  const telegram = contactLinks.find(link => link.channel === 'telegram')
  const [first, second] = site.headline

  return <section aria-labelledby="hero-title" className="hero">
    <Container className="hero-content">
      <p className="eyebrow hero-role">Denys Yefimenko <span>/</span> {site.role}</p>
      <h1 id="hero-title" className="hero-title">
        <span>{first}</span><span> {second}<span className="hero-period">.</span></span>
      </h1>
      <div className="hero-system-layout">
        <SystemTopology />
        <div className="hero-support">
          <p className="hero-principle">{site.principle[0]}<br /> {site.principle[1]}</p>
          <p className="hero-description">{site.description}</p>
          <div className="hero-actions">
            {telegram && <a href={telegram.href} className="button button--primary hero-cta" target="_blank" rel="noopener noreferrer" aria-label={`${site.primaryCta} on Telegram (opens in a new tab)`}>
              {site.primaryCta} <span aria-hidden="true">↗</span>
            </a>}
            <a href="#work" className="text-link hero-secondary">{site.secondaryCta} <span aria-hidden="true">↓</span></a>
          </div>
        </div>
      </div>
      <div className="hero-footnote">
        <span>Independent engineer / Chernivtsi, Ukraine / Remote</span>
        <a href="#work">Scroll to explore <span aria-hidden="true">↓</span></a>
      </div>
    </Container>
  </section>
}
