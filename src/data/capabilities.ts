import type { CapabilityGroup } from '../lib/types'

export const capabilities: readonly CapabilityGroup[] = [
  { id: 'backend', title: 'Backend', technologies: ['Python', 'FastAPI', 'AsyncIO', 'REST APIs', 'Pydantic'] },
  { id: 'frontend', title: 'Frontend', technologies: ['React', 'TypeScript', 'Vite', 'PWA'] },
  { id: 'data', title: 'Data', technologies: ['PostgreSQL', 'Supabase', 'SQL'] },
  { id: 'ai-llm', title: 'AI / LLM', technologies: ['OpenAI', 'Gemini', 'LLM integrations', 'Structured outputs', 'RAG', 'Agent workflows'] },
  { id: 'automation', title: 'Automation / Integrations', technologies: ['Telegram bots', 'aiogram', 'Google Sheets integrations', 'External APIs', 'Workflow automation'] },
  { id: 'delivery', title: 'Delivery / Tooling', technologies: ['Docker', 'Railway', 'Cloudflare', 'Git', 'GitHub', 'pnpm'] },
]
