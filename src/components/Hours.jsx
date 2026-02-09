import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

const schedule = [
  { day: 'monday', hours: '09:00 – 18:00', open: 9, close: 18 },
  { day: 'tuesday', hours: '09:00 – 18:00', open: 9, close: 18 },
  { day: 'wednesday', hours: '09:00 – 18:00', open: 9, close: 18 },
  { day: 'thursday', hours: '09:00 – 18:00', open: 9, close: 18 },
  { day: 'friday', hours: '09:00 – 18:00', open: 9, close: 18 },
  { day: 'saturday', hours: '09:00 – 13:00', open: 9, close: 13 },
  { day: 'sunday', hours: null, open: null, close: null },
]

function isCurrentlyOpen() {
  const now = new Date()
  const formatter = new Intl.DateTimeFormat('en-US', {
    timeZone: 'Europe/Chisinau',
    hour: 'numeric',
    minute: 'numeric',
    weekday: 'short',
    hour12: false,
  })
  const parts = formatter.formatToParts(now)
  const weekday = parts.find(p => p.type === 'weekday').value
  const hour = parseInt(parts.find(p => p.type === 'hour').value, 10)
  const minute = parseInt(parts.find(p => p.type === 'minute').value, 10)

  const dayMap = { Mon: 0, Tue: 1, Wed: 2, Thu: 3, Fri: 4, Sat: 5, Sun: 6 }
  const entry = schedule[dayMap[weekday]]

  if (!entry.hours) return false
  const currentMinutes = hour * 60 + minute
  return currentMinutes >= entry.open * 60 && currentMinutes < entry.close * 60
}

export default function Hours() {
  const { t } = useTranslation()

  const today = new Date().getDay()
  const todayIndex = today === 0 ? 6 : today - 1
  const open = isCurrentlyOpen()

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl sm:text-3xl font-bold text-text-light dark:text-text-dark mb-3">
        {t('hours.title')}
      </h2>

      <div className={`inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full text-xs font-semibold
        ${open
          ? 'bg-green-500/10 text-green-600 dark:text-green-400'
          : 'bg-red-500/10 text-red-500 dark:text-red-400'
        }`}
      >
        <span className={`w-2 h-2 rounded-full ${open ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`} />
        {open ? t('hours.openNow') : t('hours.closedNow')}
      </div>

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
                <span className="ml-2 inline-block w-2 h-2 rounded-full bg-primary" />
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
