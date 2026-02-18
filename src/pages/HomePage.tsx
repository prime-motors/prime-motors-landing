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
    <div className="bg-surface-light dark:bg-surface-dark text-text-light dark:text-text-dark min-h-screen transition-colors duration-300">
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
      <Hero />

      <div className="divider-primary" />

      <Services />

      <div className="divider-primary" />

      {/* Hours & Location */}
      <ParallaxBackground
        imageSrc={`${import.meta.env.BASE_URL}images/hours-bg.webp`}
        overlayClassName="bg-surface-card-light/80 dark:bg-surface-dark/80"
        parallaxSpeed={0.15}
        effect="none"
      >
        <section id="hours" className="py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
              <Hours />
              <Location />
            </div>
          </div>
        </section>
      </ParallaxBackground>

      <div className="divider-primary" />

      <Contact />

      <div className="divider-primary" />

      <Footer />
      <FloatingCallButton />
    </div>
  )
}
