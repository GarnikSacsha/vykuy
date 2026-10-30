import { useEffect } from 'react'
import { Header } from './sections/Header'
import { Hero } from './sections/Hero'
import { About, Contact } from './sections/ContentSections'
import { MoreProjects } from './sections/MoreProjects'
import { HowIBuild } from './sections/HowIBuild'
import { Services } from './sections/Services'
import { FeaturedWork } from './sections/FeaturedWork'
import { Footer } from './sections/Footer'
import { startPageMotion } from './lib/motion'
import './styles/topology.css'

export function App() {
  useEffect(() => startPageMotion(), [])
  return <div id="top">
    <a href="#main" className="skip-link">Skip to content</a>
    <Header />
    <main id="main" tabIndex={-1}>
      <Hero />
      <FeaturedWork />
      <MoreProjects />
      <Services />
      <HowIBuild />
      <About />
      <Contact />
    </main>
    <Footer />
  </div>
}
