import { Button } from '../components/Button'
import { Section } from '../components/Section'
import { contactLinks } from '../data/contact'
import { aboutContent, sections, site } from '../data/site'
import '../styles/closing-sections.css'

export function About() {
  return <div className="about-section"><Section content={sections.about}>
    <div className="about-copy">{aboutContent.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</div>
    <ul className="about-metadata">{aboutContent.metadata.map(item => <li key={item}>{item}</li>)}</ul>
  </Section></div>
}

export function Contact() {
  const primary = contactLinks.find(link => link.channel !== 'github')
  return <div className="contact-section"><Section content={sections.contact}>
    {contactLinks.length > 0 && <div className="contact-actions">
      {contactLinks.map(link => {
        const external = link.href.startsWith('https:')
        return <Button key={link.channel} href={link.href} variant={link === primary ? 'primary' : 'secondary'}
          target={external ? '_blank' : undefined} rel={external ? 'noopener noreferrer' : undefined}
          aria-label={`${link === primary ? `${site.secondaryCta} via ` : ''}${link.label}${external ? ' (opens in a new tab)' : ''}`}>
          {link === primary ? site.secondaryCta : link.label}<span aria-hidden="true">↗</span>
        </Button>
      })}
    </div>}
  </Section></div>
}
