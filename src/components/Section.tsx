import type { ReactNode } from 'react'
import type { SectionContent } from '../lib/types'
import { Container } from './Container'

export function Section({ content, children }: { content: SectionContent; children: ReactNode }) {
  return (
    <section id={content.id} aria-labelledby={`${content.id}-title`} className="border-t border-border py-16 sm:py-24">
      <Container>
        <p className="eyebrow mb-4">{content.label}</p>
        <h2 id={`${content.id}-title`} className="section-title">{content.title}</h2>
        {content.description && <p className="mt-4 max-w-xl text-text-secondary">{content.description}</p>}
        <div className="mt-8 sm:mt-10">{children}</div>
      </Container>
    </section>
  )
}
