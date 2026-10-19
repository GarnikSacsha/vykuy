import { useEffect } from 'react'
import { Header } from './sections/Header'
import { Hero } from './sections/Hero'
import { About, Contact } from './sections/ContentSections'
import { MoreProjects } from './sections/MoreProjects'
import { HowIBuild } from './sections/HowIBuild'
import { Stack } from './sections/Stack'
import { FeaturedWork } from './sections/FeaturedWork'
import { Footer } from './sections/Footer'
import './styles/topology.css'

export function App() {
  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (!('IntersectionObserver' in window)) return
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return
        if (!preference.matches) entry.target.classList.add('reveal-in')
        observer.unobserve(entry.target)
      })
    }, { threshold: 0.12 })
    const targets = document.querySelectorAll('.project-study-copy, .build-process')
    targets.forEach(target => observer.observe(target))
    return () => { observer.disconnect(); targets.forEach(target => target.classList.remove('reveal-in')) }
  }, [])
  return <div id="top">
    <a href="#main" className="skip-link">Skip to content</a>
    <Header />
    <main id="main" tabIndex={-1}>
      <Hero />
      <FeaturedWork />
      <MoreProjects />
      <HowIBuild />
      <Stack />
      <About />
      <Contact />
    </main>
    <Footer />
  </div>
}
