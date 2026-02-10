import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import ParallaxBackground from './ParallaxBackground'

const basePath = import.meta.env.BASE_URL

export default function Hero() {
  const { t } = useTranslation()

  return (
    <ParallaxBackground
      imageSrc={`${basePath}images/hero-bg.webp`}
      parallaxSpeed={0.3}
      effect="kenBurns"
      className="min-h-screen flex items-center justify-center"
      overlayClassName="bg-gradient-to-b from-[rgba(17,17,19,0.85)] via-[rgba(17,17,19,0.50)] to-[rgba(17,17,19,0.70)]
                        dark:from-[rgba(17,17,19,0.85)] dark:via-[rgba(17,17,19,0.50)] dark:to-[rgba(17,17,19,0.70)]
                        light:from-[rgba(245,243,240,0.88)] light:via-[rgba(245,243,240,0.55)] light:to-[rgba(245,243,240,0.75)]"
    >
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full
                       bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary-light text-sm font-medium
                       backdrop-blur-sm border border-primary/20"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
            {t('hero.description')}
          </motion.div>

          {/* Title */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white dark:text-white mb-6 drop-shadow-lg">
            {t('hero.title')}
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl text-white/80 dark:text-text-dark/80 max-w-2xl mx-auto mb-10">
            {t('hero.subtitle')}
          </p>

          {/* CTA */}
          <motion.a
            href="tel:+37360004260"
            className="btn-shimmer inline-flex items-center gap-3 px-8 py-4 bg-primary text-white rounded-xl text-lg font-semibold
                       shadow-lg shadow-primary/25 hover:bg-primary-dark hover:shadow-xl hover:shadow-primary/30
                       transition-all duration-300 no-underline"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            {t('hero.cta')}
          </motion.a>

          {/* Phone number display */}
          <p className="mt-4 text-white/60 dark:text-text-muted-dark text-sm">+373 60 004 260</p>
        </motion.div>
      </div>
    </ParallaxBackground>
  )
}
