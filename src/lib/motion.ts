import { inView, stagger } from 'motion'
import { animate } from 'motion/mini'

// Restrained motion: short, ease-out, small distances, each element animates once.
const ease = [0.22, 1, 0.36, 1] as const

export function startPageMotion(): () => void {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return () => {}

  const cleanups: (() => void)[] = []

  // Hero: headline lines rise from their own mask, then the supporting content follows.
  animate('.hero-line-inner', { transform: ['translateY(105%)', 'translateY(0)'] }, { duration: 0.8, delay: stagger(0.08), ease })
  animate('.hero-role, .hero-description, .hero-actions', { opacity: [0, 1], transform: ['translateY(12px)', 'translateY(0)'] }, { duration: 0.6, delay: stagger(0.08, { startDelay: 0.3 }), ease })
  animate('.hero-index li', { opacity: [0, 1], transform: ['translateX(16px)', 'translateX(0)'] }, { duration: 0.5, delay: stagger(0.07, { startDelay: 0.45 }), ease })

  // Sections reveal when they enter the viewport.
  const groups = ['.section-heading', '.project-study-copy', '.project-study-media', '.service-item', '.build-step', '.index-item', '.about-copy', '.contact-actions']
  document.querySelectorAll<HTMLElement>(groups.join(',')).forEach(element => {
    element.style.opacity = '0'
    const stop = inView(element, () => {
      animate(element, { opacity: [0, 1], transform: ['translateY(18px)', 'translateY(0)'] }, { duration: 0.6, ease })
    }, { amount: 0.15 })
    cleanups.push(() => { stop(); element.style.opacity = '' })
  })

  return () => cleanups.forEach(cleanup => cleanup())
}
