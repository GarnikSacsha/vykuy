import type { Service } from '../lib/types'

// Each service links only to projects shown on this page, so every claim has visible proof.
export const services: readonly Service[] = [
  {
    id: 'booking',
    title: 'Online booking systems',
    description: 'A booking site or app for service businesses: available time slots, confirmations and rescheduling, plus an admin panel where the owner sees the whole schedule.',
    examples: [
      { label: 'Louie Massage', href: '#louiemassage' },
      { label: 'Pitstop', href: '#pitstop' },
      { label: 'Dental Booking', href: '#dental-booking' },
      { label: 'Vacation Rental', href: '#vacation-rental-booking' },
    ],
  },
  {
    id: 'telegram',
    title: 'Telegram bots & payment automation',
    description: 'Bots that take orders, calculate prices, verify payments, grant access to private channels and notify your team, so requests stop getting lost in chats.',
    examples: [
      { label: 'Access Flow', href: '#access-flow' },
      { label: 'Mama Prybrala', href: '#mama-prybrala' },
      { label: 'Family Life OS', href: '#family-life-os' },
    ],
  },
  {
    id: 'internal-tools',
    title: 'Internal tools & AI workflows',
    description: 'Training platforms, dashboards and AI integrations that replace scattered spreadsheets, repeated explanations and copy-paste between tools.',
    examples: [
      { label: 'HORECA Training', href: '#horeca-training' },
      { label: 'Family Life OS', href: '#family-life-os' },
    ],
  },
]
