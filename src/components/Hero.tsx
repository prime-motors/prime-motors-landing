import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { useLayoutEffect } from 'react'
import ParallaxBackground from './ParallaxBackground'

const basePath = import.meta.env.BASE_URL

function setHeroHeightVar() {
  const vv = window.visualViewport
  const h = vv?.height ?? window.innerHeight
  document.documentElement.style.setProperty('--heroH', `${Math.round(h)}px`)
}

function useLockHeroHeight() {
  useLayoutEffect(() => {
    setHeroHeightVar()
    setTimeout(setHeroHeightVar, 120)
    setTimeout(setHeroHeightVar, 300)

    const vv = window.visualViewport
    let lastW = vv?.width ?? window.innerWidth
    let raf1 = 0
    let raf2 = 0

    const run = () => {
      cancelAnimationFrame(raf1)
      cancelAnimationFrame(raf2)

      raf1 = requestAnimationFrame(() => {
        raf2 = requestAnimationFrame(() => {
          setHeroHeightVar()
          setTimeout(setHeroHeightVar, 120)
          setTimeout(setHeroHeightVar, 300)
        })
      })
    }

    const onResize = () => {
      const w = vv?.width ?? window.innerWidth
      if (Math.abs(w - lastW) > 10) {
        lastW = w
        run()
      }
    }

    vv?.addEventListener('resize', onResize)
    window.addEventListener('orientationchange', run)
    window.addEventListener('pageshow', run)

    return () => {
      vv?.removeEventListener('resize', onResize)
      window.removeEventListener('orientationchange', run)
      window.removeEventListener('pageshow', run)
      cancelAnimationFrame(raf1)
      cancelAnimationFrame(raf2)
    }
  }, [])
}

export default function Hero() {
  const { t } = useTranslation()

  useLockHeroHeight()

  return (
    <ParallaxBackground
      imageSrc={`${basePath}images/hero-bg.webp`}
      parallaxSpeed={0.3}
      effect="kenBurns"
      className="h-[var(--heroH)]"
      scrollOffset={['start start', 'end start']}
      overlayClassName="bg-gradient-to-b from-[rgba(14,14,14,0.85)] via-[rgba(14,14,14,0.50)] to-[rgba(14,14,14,0.70)]
                        dark:from-[rgba(14,14,14,0.85)] dark:via-[rgba(14,14,14,0.50)] dark:to-[rgba(14,14,14,0.70)]
                        light:from-[rgba(245,245,245,0.88)] light:via-[rgba(245,245,245,0.55)] light:to-[rgba(245,245,245,0.75)]"
    >
      <div className="flex h-full items-center justify-center pt-16 landscape:pt-12">
        <div className="relative mx-auto w-full max-w-6xl px-4 py-20 text-center sm:px-6 landscape:py-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary-light border-primary/20 mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium backdrop-blur-sm landscape:mb-3 landscape:gap-1 landscape:px-2 landscape:py-1 landscape:text-[10px]"
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
            <h1 className="mb-6 text-5xl font-extrabold tracking-tight text-white drop-shadow-lg sm:text-6xl md:text-7xl landscape:text-3xl landscape:sm:text-4xl dark:text-white">
              {t('hero.title')}
            </h1>

            {/* Subtitle */}
            <p className="dark:text-text-dark/80 mx-auto mb-10 max-w-2xl text-xl text-white/80 sm:text-2xl landscape:mb-5 landscape:text-sm">
              {t('hero.subtitle')}
            </p>

            {/* CTA */}
            <motion.a
              href="tel:+37360004260"
              className="btn-shimmer bg-primary shadow-primary/25 hover:bg-primary-dark hover:shadow-primary/30 inline-flex items-center gap-3 rounded-xl px-8 py-4 text-lg font-semibold text-white no-underline shadow-lg transition-all duration-300 hover:shadow-xl landscape:gap-2 landscape:px-5 landscape:py-2 landscape:text-sm"
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
            <p className="dark:text-text-muted-dark mt-4 text-sm text-white/60 landscape:mt-2 landscape:text-xs">
              +373 60 004 260
            </p>
          </motion.div>
        </div>
      </div>
    </ParallaxBackground>
  )
}
