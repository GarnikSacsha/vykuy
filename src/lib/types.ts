export type SectionId = 'work' | 'more-projects' | 'how-i-build' | 'stack' | 'about' | 'contact'

export interface SectionContent {
  id: SectionId
  label: string
  title: string
  description?: string
}

export interface ProjectMedia {
  webm?: string
  mp4?: string
  poster?: string
  captionsSrc?: string
  aspectRatio?: '16 / 10' | '16 / 9' | '9 / 16'
}

interface ProjectBase {
  id: string
  slug: string
  title: string
}

export interface ProjectImpact {
  label: string
  metric: string
  description: string
  takeaway?: string
  supportingCopy?: string
  disclaimer?: string
}

export interface FeaturedProject extends ProjectBase {
  status: 'project'
  type: string
  description: string
  proofPoints: readonly string[]
  tags: readonly string[]
  stack?: {
    frontend: readonly string[]
    backend: readonly string[]
    databaseAuthStorage: readonly string[]
    ai: readonly string[]
    delivery: readonly string[]
    tooling: readonly string[]
    architecture: string
  }
  demoUrl?: `https://${string}`
  githubUrl?: `https://${string}`
  media: ProjectMedia
  impact?: ProjectImpact
}

export type Project = FeaturedProject | (ProjectBase & { status: 'todo' })

export interface ContactLink {
  label: string
  href: `https://${string}` | `mailto:${string}`
}

export type ContactChannel = 'email' | 'telegram' | 'linkedin' | 'github'

export interface SocialLink extends ContactLink {
  channel: ContactChannel
}

export interface MoreProject {
  id: string
  title: string
  type: string
  description: string
  capabilities?: readonly string[]
  tags: readonly string[]
  demoUrl?: `https://${string}`
  githubUrl?: `https://${string}`
  poster?: { src: string; alt: string }
}

export interface BuildStep {
  number: string
  title: string
  description: string
}

export interface CapabilityGroup {
  id: string
  title: string
  technologies: readonly string[]
}
