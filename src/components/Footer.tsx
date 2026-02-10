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
              {/* Tire sidewall depth */}
              <ellipse cx="46" cy="52" rx="44" ry="44" fill="currentColor" opacity="0.06" />
              {/* Tire face */}
              <ellipse cx="50" cy="50" rx="44" ry="44" fill="currentColor" opacity="0.08" />
              {/* Rim */}
              <ellipse cx="50" cy="50" rx="36" ry="36" fill="currentColor" opacity="0.18" />
              <ellipse cx="50" cy="50" rx="34" ry="34" fill="currentColor" opacity="0.22" />
              {/* 5 spoke windows */}
              <g fill="currentColor" opacity="0.04">
                <path d="M44 20 Q38 24 34 30 L42 38 Q44 34 48 30 Z" />
                <path d="M66 26 Q72 34 74 42 L64 44 Q63 38 59 33 Z" />
                <path d="M76 56 Q74 66 68 72 L60 64 Q64 60 65 54 Z" />
                <path d="M56 80 Q48 82 40 78 L44 68 Q48 70 54 70 Z" />
                <path d="M24 66 Q20 58 20 48 L30 46 Q30 54 32 60 Z" />
              </g>
              {/* Hub */}
              <circle cx="50" cy="50" r="12" fill="currentColor" opacity="0.25" />
              <circle cx="50" cy="50" r="10" fill="currentColor" opacity="0.18" />
              <circle cx="50" cy="50" r="8" fill="currentColor" opacity="0.22" />
              {/* Lug nuts */}
              <g fill="currentColor" opacity="0.06">
                <circle cx="50" cy="42" r="2" />
                <circle cx="57.6" cy="46.9" r="2" />
                <circle cx="54.7" cy="55" r="2" />
                <circle cx="45.3" cy="55" r="2" />
                <circle cx="42.4" cy="46.9" r="2" />
              </g>
              <circle cx="50" cy="50" r="3" fill="currentColor" opacity="0.06" />
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
