import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

const MAPS_URL = 'https://www.google.com/maps/search/?api=1&query=str.+Uzinelor+104,+Chișinău,+Moldova'
const MAPS_EMBED = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d34133.68483598991!2d28.87762473205037!3d46.99751343106169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c97b0039ece0f5%3A0x6024d44ee7e32b46!2sPrime%20Motors!5e0!3m2!1sen!2s!4v1770674522272!5m2!1sen!2s'

export default function Location() {
  const { t } = useTranslation()

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <h2 className="text-2xl sm:text-3xl font-bold text-text-light dark:text-text-dark mb-6">
        {t('location.title')}
      </h2>

      <div className="rounded-2xl overflow-hidden border border-border-light dark:border-border-dark mb-4">
        <iframe
          src={MAPS_EMBED}
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Prime Motors Location"
          className="w-full dark:invert dark:hue-rotate-180"
        />
      </div>

      <div className="flex items-start gap-3 mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mt-0.5 shrink-0">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
        <span className="text-text-muted-light dark:text-text-muted-dark">
          {t('location.address')}
        </span>
      </div>

      <a
        href={MAPS_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium
                   bg-surface-card-light dark:bg-surface-card-dark text-text-light dark:text-text-dark
                   hover:bg-border-light dark:hover:bg-asphalt transition-colors no-underline"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
          <polyline points="15 3 21 3 21 9" />
          <line x1="10" y1="14" x2="21" y2="3" />
        </svg>
        {t('location.openInMaps')}
      </a>
    </motion.div>
  )
}
