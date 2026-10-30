import type { SectionContent, SectionId } from '../lib/types'

export const site = {
  brand: 'VYKUY',
  name: 'Denys',
  role: 'AI & Automation Engineer',
  headline: ['I build booking systems', 'and Telegram automations', 'for service businesses'],
  description: 'Python, React and AI integrations, from the first call to a deployed product. You talk to the person who writes the code.',
  primaryCta: 'Write to me on Telegram',
  secondaryCta: 'See the work',
  indexLabel: 'Recent work',
}

export const navigation: readonly { label: string; id: SectionId }[] = [
  { label: 'Work', id: 'work' },
  { label: 'Services', id: 'services' },
  { label: 'About', id: 'about' },
  { label: 'Contact', id: 'contact' },
]

export const sections = {
  work: { id: 'work', label: '01 / Selected work', title: 'Featured Work', description: 'Real product recordings. Press play on any of them.' },
  more: { id: 'more-projects', label: '02 / More work', title: 'More Projects' },
  services: { id: 'services', label: '03 / Services', title: 'What I can build for you', description: 'The kinds of work I do most often. Each one links to a project on this page.' },
  process: { id: 'how-i-build', label: '04 / Working together', title: 'How we work together' },
  stack: { id: 'stack', label: '05 / Tools', title: 'Stack / Capabilities' },
  about: { id: 'about', label: '05 / About', title: 'Hi, I’m Denys.' },
  contact: { id: 'contact', label: '06 / Contact', title: 'Tell me what you still do by hand.', description: 'A few lines on Telegram about your business are enough. I’ll reply with what can be automated and roughly what it would take.' },
} satisfies Record<string, SectionContent>

export const aboutContent = {
  paragraphs: [
    'Before I wrote software for a living, I spent more than three years inside an EdTech company. I worked on LMS operations, CRM integrations, student feedback and the daily processes that kept it all running.',
    'That is where I learned the habit I still work by: first understand how the business actually runs, then pick the smallest technology that fixes the slow part.',
    'Today I build booking systems, Telegram bots and internal tools on my own, from architecture to deployment. I use AI tools to move faster, and I review and test everything that ships.',
  ],
  metadata: ['Chernivtsi, Ukraine', 'Working remotely', 'Available for new projects'],
  tools: ['Python', 'FastAPI', 'React', 'TypeScript', 'PostgreSQL', 'Supabase', 'OpenAI / Gemini', 'Telegram (aiogram)', 'Google Sheets', 'Docker', 'Railway', 'Cloudflare'],
}
