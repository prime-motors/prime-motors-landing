import { useTranslation } from 'react-i18next'

export default function Footer() {
  const { t } = useTranslation()
  const year = new Date().getFullYear()

  return (
    <footer className="border-border-light dark:border-border-dark border-t py-4 text-center">
      <p className="text-text-muted-light dark:text-text-muted-dark text-sm">
        &copy; {year} Prime Motors. {t('footer.rights')}
      </p>
    </footer>
  )
}
