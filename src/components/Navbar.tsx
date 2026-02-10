import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'framer-motion'
import ThemeToggle from './ThemeToggle'
import LanguageSwitcher from './LanguageSwitcher'

interface NavbarProps {
  isDark: boolean
  toggleTheme: () => void
}

export default function Navbar({ isDark, toggleTheme }: NavbarProps) {
  const { t } = useTranslation()
  const [mobileOpen, setMobileOpen] = useState(false)

  const navLinks = [
    { href: '/#services', label: t('nav.services') },
    { href: '/#hours', label: t('nav.hours') },
    { href: '/#contact', label: t('nav.contact') },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-surface-light/80 dark:bg-surface-elevated-dark/80 backdrop-blur-xl border-b border-border-light dark:border-border-dark">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 text-primary font-bold text-xl no-underline">
            <svg width="32" height="32" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              {/* Tire */}
              <circle cx="50" cy="50" r="45" fill="currentColor" opacity="0.08" />
              <circle cx="50" cy="50" r="42" fill="currentColor" opacity="0.06" />
              {/* Rim face */}
              <circle cx="50" cy="50" r="36" fill="currentColor" opacity="0.2" />
              {/* Spoke windows — cut out to show background */}
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
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-text-muted-light dark:text-text-muted-dark hover:text-primary dark:hover:text-primary-light transition-colors no-underline"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+37360004260"
              className="btn-shimmer hidden lg:inline-flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium
                         hover:bg-primary-dark transition-colors no-underline"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              {t('nav.callNow')}
            </a>
            <LanguageSwitcher />
            <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-2 md:hidden">
            <LanguageSwitcher />
            <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="w-10 h-10 flex items-center justify-center rounded-lg
                         text-text-muted-light dark:text-text-muted-dark hover:bg-surface-card-light dark:hover:bg-asphalt transition-colors cursor-pointer"
              aria-label="Toggle menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {mobileOpen ? (
                  <>
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </>
                ) : (
                  <>
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="18" x2="21" y2="18" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden bg-surface-light dark:bg-surface-elevated-dark border-t border-border-light dark:border-border-dark"
          >
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block text-base font-medium text-text-light dark:text-text-dark hover:text-primary dark:hover:text-primary-light transition-colors no-underline"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="tel:+37360004260"
                onClick={() => setMobileOpen(false)}
                className="btn-shimmer flex items-center justify-center gap-2 mt-2 px-4 py-3 bg-primary text-white rounded-lg font-medium
                           hover:bg-primary-dark transition-colors no-underline"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                {t('nav.callNow')}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
