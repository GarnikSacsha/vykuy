import type { SectionContent, SectionId } from '../lib/types'

export const site = {
  brand: 'VYKUY',
  name: 'Denys',
  role: 'AI & Automation Engineer',
  headline: ['I automate the manual', 'work in your business'],
  principle: ['Online booking.', 'Telegram bots. AI workflows.'],
  description: 'Booking systems, payment and access automation, and AI integrations for service businesses — built end-to-end and deployed.',
  primaryCta: 'Discuss your project',
  secondaryCta: 'See the work',
}

export const navigation: readonly { label: string; id: SectionId }[] = [
  { label: 'Work', id: 'work' },
  { label: 'Services', id: 'services' },
  { label: 'About', id: 'about' },
  { label: 'Contact', id: 'contact' },
]

export const sections = {
  work: { id: 'work', label: '01 / Selected work', title: 'Featured Work', description: 'Working products, shown in motion.' },
  more: { id: 'more-projects', label: '02 / More work', title: 'More Projects' },
  services: { id: 'services', label: '03 / Services', title: 'What I can build for you', description: 'Three kinds of work I do most — each backed by projects you can see above.' },
  process: { id: 'how-i-build', label: '04 / Working together', title: 'How we work together' },
  stack: { id: 'stack', label: '05 / Tools', title: 'Stack / Capabilities' },
  about: { id: 'about', label: '06 / About', title: 'Engineer by practice. Builder by mindset.' },
  contact: { id: 'contact', label: '07 / Contact', title: 'Have a process that eats your time?', description: 'Tell me what you still do by hand — I’ll tell you what can be automated and what it would take. Telegram is the fastest way to reach me.' },
} satisfies Record<string, SectionContent>

export const aboutContent = {
  paragraphs: [
    'I’m Denys, an AI & Automation Engineer from Chernivtsi, Ukraine. I build booking systems, Telegram bots and automations for small and growing businesses.',
    'You work with one person end-to-end: understanding your workflow, architecture, backend, interface, AI integrations and deployment.',
    'I use AI-assisted development to move faster, while architecture, testing and final quality stay under my control.',
  ],
  metadata: ['Chernivtsi, Ukraine', 'Working remotely', 'Available for new projects'],
}
