import type { BuildStep } from '../lib/types'

export const buildProcess = {
  introduction: 'No managers in between. You talk directly to the person who builds your product.',
  steps: [
    { number: '01', title: 'Message', description: 'Tell me which process takes too much time. A short Telegram message is enough to start.' },
    { number: '02', title: 'Call', description: 'A short call to understand your workflow, your users and what is worth automating first.' },
    { number: '03', title: 'Proposal', description: 'A clear scope, timeline and price, agreed before any work starts.' },
    { number: '04', title: 'Build', description: 'You get access to a working version early and see it change as we go. Your feedback goes straight into it.' },
    { number: '05', title: 'Launch', description: 'Deployment, testing on real scenarios, and fixes for whatever comes up after launch.' },
  ] satisfies readonly BuildStep[],
}
