import { Container } from '../components/Container'
import { navigation, site } from '../data/site'

export function Header() {
  return (
    <header className="site-header">
      <Container className="header-layout">
        <a href="#top" aria-label={`${site.brand} home`} className="wordmark">
          <svg className="brand-mark" width="30" height="32" viewBox="0 0 30 32" fill="none" aria-hidden="true">
            <defs>
              <linearGradient id="vykuy-mark" x1="0" y1="0" x2="30" y2="32" gradientUnits="userSpaceOnUse">
                <stop stopColor="var(--accent-cyan)" />
                <stop offset=".35" stopColor="var(--accent-blue)" />
                <stop offset=".7" stopColor="var(--accent-indigo)" />
                <stop offset="1" stopColor="var(--accent-violet)" />
              </linearGradient>
            </defs>
            <path d="M0 2H7L15 22L23 2H30L18 30H12L0 2Z" fill="url(#vykuy-mark)" />
          </svg>
          <span>{site.brand}</span>
        </a>
        <nav aria-label="Main navigation" className="header-nav">
          <ul className="header-nav-list">
            {navigation.map(({ label, id }) => (
              <li key={id}><a href={`#${id}`} className="nav-link header-nav-link">{label}</a></li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  )
}
