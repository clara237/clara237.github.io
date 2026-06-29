import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Services from './components/Services'
import BookingSection, { BookingProvider } from './components/Booking'
import Journey from './components/Journey'
import Footer from './components/Footer'
import { CursorGlow, ScrollProgress } from './components/Effects'

export default function App() {
  return (
    <BookingProvider>
      <div className="relative min-h-screen overflow-x-hidden">
        {/* halos chauds flottants (or · terracotta · améthyste) */}
        <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-48 -left-40 h-[40rem] w-[40rem] rounded-full bg-gold/20 blur-[120px] animate-floaty" />
          <div
            className="absolute top-1/4 -right-48 h-[36rem] w-[36rem] rounded-full bg-lilac/20 blur-[130px] animate-floaty"
            style={{ animationDelay: '-6s' }}
          />
          <div
            className="absolute bottom-0 left-1/4 h-[34rem] w-[34rem] rounded-full bg-peach/25 blur-[130px] animate-floaty"
            style={{ animationDelay: '-12s' }}
          />
        </div>

        <ScrollProgress />
        <CursorGlow />

        <Navbar />
        <main className="above-grain">
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Services />
          <Journey />
          <BookingSection />
        </main>
        <Footer />
      </div>
    </BookingProvider>
  )
}
