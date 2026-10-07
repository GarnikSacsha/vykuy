import { Container } from '../components/Container'
import { site } from '../data/site'
import { socialLinks } from '../data/contact'
import '../styles/closing-sections.css'

export function Footer() {
  return <footer className="site-footer"><Container className="footer-layout">
    <div className="footer-identity">
      <a href="#top" aria-label={`${site.brand} — back to top`} className="footer-brand">{site.brand}</a>
      <p>© {new Date().getFullYear()} {site.name}</p>
    </div>
    {socialLinks.length > 0 && <ul className="footer-socials">
      {socialLinks.map(link => <li key={link.channel}><a href={link.href} className="nav-link" target="_blank" rel="noopener noreferrer" aria-label={`${link.label} (opens in a new tab)`}>{link.label}<span aria-hidden="true">↗</span></a></li>)}
    </ul>}
  </Container></footer>
}
