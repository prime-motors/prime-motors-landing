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
              <circle cx="50" cy="50" r="45" fill="currentColor" opacity="0.1" />
              <path d="M50 5 L56 20 L72 8 L68 25 L85 22 L75 37 L92 40 L78 50 L92 60 L75 63 L85 78 L68 75 L72 92 L56 80 L50 95 L44 80 L28 92 L32 75 L15 78 L25 63 L8 60 L22 50 L8 40 L25 37 L15 22 L32 25 L28 8 L44 20 Z" fill="currentColor" opacity="0.15" />
              <circle cx="50" cy="50" r="28" fill="currentColor" opacity="0.2" />
              <text x="50" y="57" textAnchor="middle" fontSize="24" fontWeight="bold" fill="currentColor" fontFamily="system-ui, sans-serif">PM</text>
            </svg>
            Prime Motors
          </div>

          <p className="text-sm text-text-muted-light dark:text-text-muted-dark text-center">
            {t('footer.tagline')}
          </p>

          <p className="text-sm text-text-muted-light dark:text-text-muted-dark">
            &copy; {year} Prime Motors. {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  )
}
