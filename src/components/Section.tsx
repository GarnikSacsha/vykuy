import type { ReactNode } from 'react'
import type { SectionContent } from '../lib/types'
import { Container } from './Container'
import { TopologyMark } from './TopologyMark'

export function Section({ content, children }: { content: SectionContent; children: ReactNode }) {
  return (
    <section id={content.id} aria-labelledby={`${content.id}-title`} className="content-section">
      <Container>
        <header className="section-heading">
          <p className="eyebrow section-label"><TopologyMark />{content.label}</p>
          <h2 id={`${content.id}-title`} className="section-title">{content.title}</h2>
          {content.description && <p className="mt-4 max-w-xl text-text-secondary">{content.description}</p>}
        </header>
        <div className="section-body">{children}</div>
      </Container>
    </section>
  )
}
