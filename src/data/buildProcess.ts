import type { BuildStep } from '../lib/types'

export const buildProcess = {
  introduction: 'I use AI-assisted development to iterate faster while keeping architecture, implementation decisions, debugging, testing, and final product quality under control.',
  steps: [
    { number: '01', title: 'Understand the problem', description: 'Clarify the workflow, users, constraints, and what should actually be automated.' },
    { number: '02', title: 'Design the architecture', description: 'Define data flow, backend boundaries, integrations, storage, roles, and failure cases.' },
    { number: '03', title: 'Build with AI-assisted workflow', description: 'Use AI-assisted tools to speed up implementation, research, refactoring, and repetitive development tasks.' },
    { number: '04', title: 'Test and validate', description: 'Test critical flows, edge cases, integrations, and responsive behavior.' },
    { number: '05', title: 'Deploy and iterate', description: 'Deploy, observe, fix, and continue iterating.' },
  ] satisfies readonly BuildStep[],
}
