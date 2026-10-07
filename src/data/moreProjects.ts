import type { MoreProject } from '../lib/types'

// Compact secondary work. Links and posters are optional; add only approved URLs/assets.
// Capabilities are retained as content data, not rendered as long card lists.
export const moreProjects: readonly MoreProject[] = [
  {
    id: 'family-life-os',
    title: 'Family Life OS',
    type: 'Personal Product',
    description: 'Telegram-based personal assistant for shared routines, reminders, summaries, expenses, and everyday family organization.',
    capabilities: ['Telegram interface', 'Reminders and scheduled actions', 'Summaries', 'Expense tracking', 'AI-assisted interactions', 'Persistent data'],
    tags: ['Python', 'FastAPI', 'aiogram', 'PostgreSQL', 'OpenAI / Gemini', 'Automation'],
  },
  {
    id: 'dental-booking',
    title: 'Dental Booking Platform',
    type: 'MVP / Product Prototype',
    description: 'Online booking system for a dental clinic with service selection, doctor scheduling, available time slots, and protection against double-booking.',
    capabilities: ['Service selection', 'Doctor selection', 'Available appointment slots', 'Concurrency-safe booking', 'Automated testing', 'Patient booking flow'],
    tags: ['React', 'TypeScript', 'FastAPI', 'PostgreSQL', 'Testing'],
  },
  {
    id: 'dota-ai-coach',
    title: 'Dota 2 AI Coach',
    type: 'Experimental AI Product',
    description: 'Real-time AI coaching assistant that processes live Dota 2 game state and provides contextual voice recommendations.',
    capabilities: ['Dota 2 GSI ingestion', 'Event processing', 'Contextual LLM coaching', 'TTS voice output', 'Visual-context experiments'],
    tags: ['Python', 'GSI', 'LLM', 'TTS', 'Computer Vision'],
  },
  {
    id: 'vacation-rental-booking',
    title: 'Vacation Rental Booking Demo',
    type: 'Product Demo',
    description: 'Responsive booking experience for vacation rentals with property selection, booking flow, generated booking codes, and printable confirmation vouchers.',
    tags: ['React', 'TypeScript', 'Vite', 'Booking Flow'],
  },
]
