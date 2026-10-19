import { Container } from '../components/Container'

export function Header() {
  return <header className="site-header">
    <Container className="header-layout">
      <a href="#top" aria-label="VYKUY home" className="wordmark">VYKUY<span aria-hidden="true">↗</span></a>
      <nav aria-label="Main navigation">
        <ul className="header-nav-list">
          <li><a className="header-nav-link" href="#work">Work</a></li>
          <li><a className="header-nav-link" href="#about">About</a></li>
          <li><a className="header-nav-link header-contact" href="#contact">Let’s Talk <span aria-hidden="true">↗</span></a></li>
        </ul>
      </nav>
    </Container>
  </header>
}
