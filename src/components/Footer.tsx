import { useTranslation } from 'react-i18next'

export default function Footer() {
  const { t } = useTranslation()
  const year = new Date().getFullYear()

  return (
    <footer className="py-8 bg-surface-card-light dark:bg-surface-card-dark/50 border-t border-border-light dark:border-border-dark">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-primary font-bold">
            <svg width="24" height="24" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              {/* Tire */}
              <circle cx="50" cy="50" r="45" fill="currentColor" opacity="0.08" />
              <circle cx="50" cy="50" r="42" fill="currentColor" opacity="0.06" />
              {/* Rim face */}
              <circle cx="50" cy="50" r="36" fill="currentColor" opacity="0.2" />
              {/* Spoke windows */}
              <g fill="currentColor" opacity="0.05">
                <path d="M54 18 Q66 21 73 31 L61 39 Q57 32 54 27 Z" />
                <path d="M75 35 Q79 47 76 57 L65 52 Q67 44 64 38 Z" />
                <path d="M73 61 Q68 72 58 77 L55 66 Q60 62 63 56 Z" />
                <path d="M40 77 Q30 72 25 61 L35 56 Q37 62 42 66 Z" />
                <path d="M23 55 Q20 44 25 34 L36 39 Q33 45 34 52 Z" />
                <path d="M30 29 Q38 21 49 18 L49 28 Q43 30 38 35 Z" />
              </g>
              {/* Hub */}
              <circle cx="50" cy="50" r="12" fill="currentColor" opacity="0.25" />
              <circle cx="50" cy="50" r="8" fill="currentColor" opacity="0.15" />
              <circle cx="50" cy="50" r="3" fill="currentColor" opacity="0.08" />
            </svg>
            Prime Motors
          </div>

          <p className="text-sm text-text-muted-light dark:text-text-muted-dark text-center">{t('footer.tagline')}</p>

          <p className="text-sm text-text-muted-light dark:text-text-muted-dark">
            &copy; {year} Prime Motors. {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  )
}
