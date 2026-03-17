import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

const MAPS_URL = 'https://maps.app.goo.gl/NfZ7xRngK2STrsMr7'
const MAPS_EMBED =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2721.0549498012206!2d28.90932400000001!3d46.99989399999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c97b0039ece0f5%3A0x6024d44ee7e32b46!2sPrime%20Motors!5e0!3m2!1sen!2s!4v1773765696258!5m2!1sen!2s'

export default function Location() {
  const { t } = useTranslation()

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <h2 className="text-text-light dark:text-text-dark mb-6 text-2xl font-bold sm:text-3xl">{t('location.title')}</h2>

      <div className="border-border-light dark:border-border-dark mb-4 overflow-hidden rounded-2xl border">
        <iframe
          src={MAPS_EMBED}
          width="100%"
          height="320"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Prime Motors Location"
          className="w-full dark:hue-rotate-180 dark:invert"
        />
      </div>

      <div className="mb-4 flex items-start gap-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-primary mt-0.5 shrink-0"
        >
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
        <span className="text-text-muted-light dark:text-text-muted-dark">{t('location.address')}</span>
      </div>

      <a
        href={MAPS_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-surface-card-light dark:bg-surface-card-dark text-text-light dark:text-text-dark hover:bg-border-light dark:hover:bg-asphalt inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-medium no-underline transition-colors"
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
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
          <polyline points="15 3 21 3 21 9" />
          <line x1="10" y1="14" x2="21" y2="3" />
        </svg>
        {t('location.openInMaps')}
      </a>
    </motion.div>
  )
}
