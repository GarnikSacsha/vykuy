import type { ContactChannel, ContactLink, SocialLink } from '../lib/types'

// Central contact configuration. Email accepts a bare address; social entries
// accept full HTTPS URLs. Unset or invalid values never render as links.
export const contactDetails: Record<ContactChannel, string | undefined> = {
  email: 'endidyfreim@gmail.com',
  telegram: 'https://t.me/PackChoOi',
  linkedin: 'https://www.linkedin.com/in/denys-yefimenko',
  github: 'https://github.com/GarnikSacsha',
}

const labels: Record<ContactChannel, string> = {
  email: 'Email', telegram: 'Telegram', linkedin: 'LinkedIn', github: 'GitHub',
}

function contactHref(channel: ContactChannel, value: string | undefined): ContactLink['href'] | undefined {
  const trimmed = value?.trim()
  if (!trimmed) return undefined
  if (channel === 'email') {
    return /^[A-Z0-9.!#$%&'*+/=_`{|}~-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(trimmed)
      ? `mailto:${trimmed}` : undefined
  }
  try {
    const url = new URL(trimmed)
    if (url.protocol === 'https:' && !url.username && !url.password) return url.href as `https://${string}`
  } catch {
    // Incomplete configuration stays hidden instead of becoming a broken link.
  }
  return undefined
}

export const contactLinks: readonly SocialLink[] = (Object.keys(contactDetails) as ContactChannel[]).flatMap(channel => {
  const href = contactHref(channel, contactDetails[channel])
  return href ? [{ channel, label: labels[channel], href }] : []
})

export const socialLinks = contactLinks.filter(link => link.channel !== 'email')
