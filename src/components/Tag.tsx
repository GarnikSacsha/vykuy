import type { ReactNode } from 'react'

export function Tag({ children }: { children: ReactNode }) {
  return <span className="inline-flex rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium text-text-secondary">{children}</span>
}
