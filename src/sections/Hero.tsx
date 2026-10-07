import { Button } from '../components/Button'
import { Container } from '../components/Container'
import { site } from '../data/site'

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="hero">
      <Container className="hero-content">
        <p className="eyebrow hero-role">{site.role}</p>
        <h1 id="hero-title" className="hero-title">
          {site.headline.map((line, index) => <span className="hero-title-line" key={line}>{index > 0 && ' '}{line}</span>)}
        </h1>
        <p className="hero-description">{site.description}</p>
        <div className="hero-actions">
          <Button href="#work">{site.primaryCta}<svg width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M4 10H16M11 5L16 10L11 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></Button>
          <Button href="#contact" variant="secondary">{site.secondaryCta}</Button>
        </div>
        <p className="hero-technologies">{site.technologies.map((technology, index) => <span key={technology} className="hero-technology">{technology}{index < site.technologies.length - 1 && <span className="technology-separator" aria-hidden="true"> · </span>}</span>)}</p>
      </Container>
    </section>
  )
}
