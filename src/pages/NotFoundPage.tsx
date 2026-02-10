import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useTheme } from '../hooks/useTheme'

export default function NotFoundPage() {
  const { isDark, toggleTheme } = useTheme()
  const { t } = useTranslation()

  return (
    <div className="grain-overlay min-h-screen flex flex-col bg-surface-light dark:bg-surface-dark text-text-light dark:text-text-dark transition-colors duration-300">
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />

      <main className="flex-1 flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-8xl sm:text-9xl font-bold text-primary">{t('notFound.title')}</h1>
          <p className="mt-4 text-lg sm:text-xl text-text-muted-light dark:text-text-muted-dark">
            {t('notFound.message')}
          </p>
          <Link
            to="/"
            className="btn-shimmer mt-8 inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary-dark transition-colors no-underline"
          >
            {t('notFound.backHome')}
          </Link>
        </motion.div>
      </main>

      <Footer />
    </div>
  )
}
