import { useTranslation } from 'react-i18next'

export default function Footer() {
  const { t } = useTranslation()
  const year = new Date().getFullYear()

  return (
    <footer className="py-4 border-t border-border-light dark:border-border-dark text-center">
      <p className="text-sm text-text-muted-light dark:text-text-muted-dark">
        &copy; {year} Prime Motors. {t('footer.rights')}
      </p>
    </footer>
  )
}
