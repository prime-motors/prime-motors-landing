import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Hours from '../components/Hours'
import Location from '../components/Location'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import FloatingCallButton from '../components/FloatingCallButton'
import ParallaxBackground from '../components/ParallaxBackground'
import { useTheme } from '../hooks/useTheme'

export default function HomePage() {
  const { isDark, toggleTheme } = useTheme()

  return (
    <div className="grain-overlay min-h-screen bg-surface-light dark:bg-surface-dark text-text-light dark:text-text-dark transition-colors duration-300">
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
      <Hero />

      <div className="divider-gold" />

      <Services />

      <div className="divider-gold" />

      {/* Hours & Location */}
      <ParallaxBackground
        imageSrc={`${import.meta.env.BASE_URL}images/hours-bg.webp`}
        overlayClassName="bg-surface-card-light/80 dark:bg-surface-dark/80"
        parallaxSpeed={0.15}
        effect="none"
      >
        <section id="hours" className="py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <Hours />
              <Location />
            </div>
          </div>
        </section>
      </ParallaxBackground>

      <div className="divider-gold" />

      <Contact />

      <div className="divider-gold" />

      <Footer />
      <FloatingCallButton />
    </div>
  )
}
