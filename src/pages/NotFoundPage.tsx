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
    <div className="grain-overlay bg-surface-light dark:bg-surface-dark text-text-light dark:text-text-dark flex min-h-screen flex-col transition-colors duration-300">
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />

      <main className="flex flex-1 items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-primary text-8xl font-bold sm:text-9xl">{t('notFound.title')}</h1>
          <p className="text-text-muted-light dark:text-text-muted-dark mt-4 text-lg sm:text-xl">
            {t('notFound.message')}
          </p>
          <Link
            to="/"
            className="btn-shimmer bg-primary hover:bg-primary-dark mt-8 inline-flex items-center gap-2 rounded-lg px-6 py-3 font-medium text-white no-underline transition-colors"
          >
            {t('notFound.backHome')}
          </Link>
        </motion.div>
      </main>

      <Footer />
    </div>
  )
}
