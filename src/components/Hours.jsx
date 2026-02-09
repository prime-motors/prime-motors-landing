import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

const schedule = [
  { day: 'monday', hours: '09:00 – 18:00' },
  { day: 'tuesday', hours: '09:00 – 18:00' },
  { day: 'wednesday', hours: '09:00 – 18:00' },
  { day: 'thursday', hours: '09:00 – 18:00' },
  { day: 'friday', hours: '09:00 – 18:00' },
  { day: 'saturday', hours: '09:00 – 13:00' },
  { day: 'sunday', hours: null },
]

export default function Hours() {
  const { t } = useTranslation()

  const today = new Date().getDay()
  // JS: 0=Sun, 1=Mon, ... 6=Sat → map to our array index (0=Mon)
  const todayIndex = today === 0 ? 6 : today - 1

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl sm:text-3xl font-bold text-text-light dark:text-text-dark mb-6">
        {t('hours.title')}
      </h2>

      <div className="bg-surface-card-light dark:bg-surface-card-dark rounded-2xl border border-border-light dark:border-border-dark overflow-hidden">
        {schedule.map((item, i) => (
          <div
            key={item.day}
            className={`flex items-center justify-between px-5 py-3 text-sm
              ${i !== schedule.length - 1 ? 'border-b border-border-light dark:border-border-dark' : ''}
              ${i === todayIndex ? 'bg-primary/5 dark:bg-primary/10' : ''}
            `}
          >
            <span className={`font-medium ${i === todayIndex ? 'text-primary dark:text-primary-light' : 'text-text-light dark:text-text-dark'}`}>
              {t(`hours.${item.day}`)}
              {i === todayIndex && (
                <span className="ml-2 inline-block w-2 h-2 rounded-full bg-primary animate-pulse" />
              )}
            </span>
            <span className={`${item.hours ? 'text-text-muted-light dark:text-text-muted-dark' : 'text-red-500 dark:text-red-400 font-medium'}`}>
              {item.hours || t('hours.closed')}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  )
}
