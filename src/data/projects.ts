import type { Project } from '../lib/types'

// Only emit URLs for files that exist. Missing assets produce an honest placeholder,
// not a broken request. Vite fingerprints added media in the production build.
const assets = import.meta.glob<string>('../assets/projects/**/*.{webm,mp4,webp,vtt}', {
  eager: true,
  query: '?url',
  import: 'default',
})

function asset(path: string): string | undefined {
  return assets[`../assets/projects/${path}`]
}

export const projects: readonly Project[] = [
  {
    id: 'pitstop',
    slug: 'pitstop',
    status: 'project',
    title: 'Pitstop',
    type: 'Product / MVP',
    description: 'Online booking and service management platform for auto repair shops. Customers choose a service and available time slot, book an appointment, and track its status. Shop owners manage schedules, confirm or reschedule bookings, track arrivals and completed jobs, and record payments.',
    proofPoints: [
      'Online booking with available time slots',
      'Service and schedule management',
      'Booking confirmation and rescheduling',
      'Visit and job status tracking',
      'Payment tracking',
      'Shared backend architecture with separate product configuration and isolated studio data',
    ],
    tags: ['React', 'TypeScript', 'FastAPI', 'Supabase', 'PostgreSQL', 'OpenAI', 'PWA', 'Docker', 'Railway'],
    // Detailed confirmed stack; only the concise tags above are displayed.
    stack: {
      frontend: ['React', 'TypeScript', 'Vite', 'Astryx components', 'PWA support'],
      backend: ['Python', 'FastAPI', 'Pydantic'],
      databaseAuthStorage: ['Supabase', 'PostgreSQL', 'Supabase Auth', 'Supabase Storage'],
      ai: ['OpenAI API', 'Structured AI responses validated with Pydantic'],
      delivery: ['Docker', 'Railway'],
      tooling: ['pnpm', 'Private GitHub repository'],
      architecture: 'Pitstop and Detailing share one backend with separate product configuration and isolated studio data.',
    },
    demoUrl: undefined, // No public demo URL provided.
    githubUrl: undefined, // Private repository; no public link provided.
    impact: {
      label: 'Estimated time saved',
      metric: '~5–10 min / booking',
      description: 'Reduces repetitive booking coordination between customers and the service desk.',
      supportingCopy: 'At 10 bookings per day, this can remove roughly 50–100 minutes of routine scheduling and coordination from the daily workload.',
      disclaimer: 'Workflow-based estimate, not measured production results.',
    },
    media: {
      webm: asset('pitstop/demo.webm'),
      mp4: asset('pitstop/demo.mp4'),
      poster: asset('pitstop/poster.webp'),
      captionsSrc: asset('pitstop/captions.vtt'),
      aspectRatio: '16 / 9',
    },
  },
  {
    id: 'horeca-training',
    slug: 'horeca-training',
    status: 'project',
    title: 'HORECA Training Platform',
    type: 'Product / MVP',
    description: 'Training platform for HORECA teams with menu learning, exams, progress tracking, and location-based access.',
    proofPoints: [
      'Role-based access',
      'Multi-location architecture',
      'Menu and training modules',
      'Exams and progress tracking',
      'Responsive / PWA-oriented product flow',
    ],
    tags: ['React', 'TypeScript', 'FastAPI', 'PostgreSQL', 'PWA'],
    impact: {
      label: 'Estimated manager time saved',
      metric: '~1–2 hours / new employee',
      description: 'Turns repetitive staff onboarding and menu training into a structured self-service process.',
      takeaway: 'Scales onboarding without scaling manager time.',
      supportingCopy: 'Training materials, tests and progress tracking remain available without requiring managers to repeat the same onboarding manually for every employee.',
      disclaimer: 'Workflow-based operational estimate, not verified customer results.',
    },
    media: {
      webm: asset('horeca-training/demo.webm'),
      mp4: asset('horeca-training/demo.mp4'),
      poster: asset('horeca-training/poster.webp'),
      captionsSrc: asset('horeca-training/captions.vtt'),
      aspectRatio: '16 / 9',
    },
  },
  {
    id: 'access-flow',
    slug: 'access-flow',
    status: 'project',
    title: 'Access Flow',
    type: 'Deployed Automation Product',
    description: 'Telegram access automation that verifies payments, grants private-channel access, monitors subscription status, and removes expired users automatically.',
    proofPoints: [
      'Payment verification flow',
      'Automatic private-channel access',
      'Subscription monitoring',
      'Automatic removal / access control',
      'Deployed working end-to-end flow',
    ],
    tags: ['Python', 'Telegram', 'Automation', 'PostgreSQL', 'Integrations'],
    impact: {
      label: 'Potential admin time saved',
      metric: '~3–5 min / subscriber',
      description: 'Removes manual payment verification, access delivery and subscription cleanup from the admin workflow.',
      supportingCopy: 'At 100 subscription actions per month, this can automate roughly 5–8 hours of repetitive admin work.',
      disclaimer: 'Workflow-based estimate, not measured production analytics.',
    },
    media: {
      webm: asset('access-flow/demo.webm'),
      mp4: asset('access-flow/demo.mp4'),
      poster: asset('access-flow/poster.webp'),
      captionsSrc: asset('access-flow/captions.vtt'),
      aspectRatio: '9 / 16',
    },
  },
]
