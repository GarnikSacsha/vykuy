import { Header } from './sections/Header'
import { Hero } from './sections/Hero'
import { About, Contact } from './sections/ContentSections'
import { MoreProjects } from './sections/MoreProjects'
import { HowIBuild } from './sections/HowIBuild'
import { Stack } from './sections/Stack'
import { FeaturedWork } from './sections/FeaturedWork'
import { Footer } from './sections/Footer'

export function App() {
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
