import { useTranslation } from 'react-i18next'

export default function Footer() {
  const { t } = useTranslation()
  const year = new Date().getFullYear()

  return (
    <footer className="py-8 bg-surface-card-light dark:bg-surface-card-dark/50 border-t border-border-light dark:border-border-dark">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-primary font-bold">
            <img src="/logo.png" alt="Prime Motors" width={24} height={24} />
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
