import type { SectionContent, SectionId } from '../lib/types'

export const site = {
  brand: 'VYKUY',
  name: 'Denys',
  role: 'AI & Automation Engineer',
  headline: ['I build AI-powered', 'products & automation.'],
  description: 'From idea and architecture to working web apps, AI integrations, testing and deployment.',
  technologies: ['Python', 'FastAPI', 'React', 'PostgreSQL', 'LLMs', 'Automation'],
  primaryCta: 'View Projects',
  secondaryCta: 'Contact Me',
}

export const navigation: readonly { label: string; id: SectionId }[] = [
  { label: 'Work', id: 'work' },
  { label: 'Process', id: 'how-i-build' },
  { label: 'About', id: 'about' },
  { label: 'Contact', id: 'contact' },
]

export const sections = {
  work: { id: 'work', label: '01 / Selected work', title: 'Featured Work', description: 'Working products, shown in motion.' },
  more: { id: 'more-projects', label: '02 / Further exploration', title: 'More Projects' },
  process: { id: 'how-i-build', label: '03 / Approach', title: 'How I Build' },
  stack: { id: 'stack', label: '04 / Tools & capabilities', title: 'Stack / Capabilities' },
  about: { id: 'about', label: '05 / About', title: 'Building useful systems, not just demos.' },
  contact: { id: 'contact', label: '06 / Contact', title: 'Have a product idea or an automation problem?', description: 'Let’s talk about what you’re trying to build, automate, or improve.' },
} satisfies Record<string, SectionContent>

export const aboutContent = {
  paragraphs: [
    'I’m Denys, an AI & Automation Engineer focused on turning ideas into working products.',
    'I build end-to-end: architecture, backend APIs, frontend interfaces, AI integrations, testing, and deployment.',
    'Most of my work sits at the intersection of automation, product engineering, and applied AI.',
  ],
  metadata: ['Chernivtsi, Ukraine', 'Remote', 'Open to engineering / automation opportunities'],
}
