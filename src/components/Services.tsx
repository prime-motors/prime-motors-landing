import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import type { ServiceType } from '../types'
import ParallaxBackground from './ParallaxBackground'

const basePath = import.meta.env.BASE_URL

const serviceIcons: Record<ServiceType, React.ReactNode> = {
  general: (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  ),
  hybrid: (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  ),
  diagnostics: (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
    </svg>
  ),
  brakes: (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  ),
  electrical: (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 20V10" />
      <path d="M12 20V4" />
      <path d="M6 20v-6" />
    </svg>
  ),
  suspension: (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  ),
}

const services: ServiceType[] = ['general', 'hybrid', 'diagnostics', 'brakes', 'electrical', 'suspension']

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

export default function Services() {
  const { t } = useTranslation()

  return (
    <ParallaxBackground
      imageSrc={`${basePath}images/services-texture.webp`}
      parallaxSpeed={0.15}
      effect="drift"
      className=""
      overlayClassName="bg-surface-light/92 dark:bg-surface-dark/92"
    >
      <section id="services" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-text-light dark:text-text-dark mb-4">
              {t('services.title')}
            </h2>
            <p className="text-lg text-text-muted-light dark:text-text-muted-dark max-w-2xl mx-auto">
              {t('services.subtitle')}
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {services.map((service) => (
              <motion.div
                key={service}
                variants={cardVariants}
                className="group p-6 rounded-2xl bg-surface-card-light dark:bg-surface-card-dark border border-border-light dark:border-border-dark
                           hover:border-primary/30 dark:hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5
                           transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary-light
                                flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white
                                transition-all duration-300">
                  {serviceIcons[service]}
                </div>
                <h3 className="text-lg font-semibold text-text-light dark:text-text-dark mb-2">
                  {t(`services.${service}.title`)}
                </h3>
                <p className="text-text-muted-light dark:text-text-muted-dark text-sm leading-relaxed">
                  {t(`services.${service}.description`)}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </ParallaxBackground>
  )
}
