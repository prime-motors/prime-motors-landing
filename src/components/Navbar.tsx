import { useState, useRef, useEffect } from 'react'
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
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!mobileOpen) return

    const close = () => setMobileOpen(false)

    const handleClickOutside = (e: MouseEvent | TouchEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        close()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('touchstart', handleClickOutside)
    window.addEventListener('scroll', close)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('touchstart', handleClickOutside)
      window.removeEventListener('scroll', close)
    }
  }, [mobileOpen])

  const navLinks = [
    { href: '/#services', label: t('nav.services') },
    { href: '/#hours', label: t('nav.hours') },
    { href: '/#contact', label: t('nav.contact') },
  ]

  return (
    <nav
      ref={navRef}
      className="bg-surface-light/80 dark:bg-surface-elevated-dark/80 border-border-light dark:border-border-dark fixed top-0 right-0 left-0 z-50 border-b backdrop-blur-xl"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a href="/" className="group text-primary flex items-center gap-2 text-xl font-bold no-underline select-none">
            <img
              src={`${import.meta.env.BASE_URL}images/logo.png`}
              alt="Prime Motors Logo"
              className="h-12 w-auto transition-transform duration-200 ease-out group-hover:scale-105"
            />
            <span className="transition-opacity duration-200 group-hover:opacity-80">Prime Motors</span>
          </a>
          {/* Desktop nav */}
          <div className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-text-muted-light dark:text-text-muted-dark hover:text-primary dark:hover:text-primary-light text-sm font-medium no-underline transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+37360004260"
              className="btn-shimmer bg-primary hover:bg-primary-dark hidden items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-white no-underline transition-colors lg:inline-flex"
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
              className="text-text-muted-light dark:text-text-muted-dark hover:bg-surface-card-light dark:hover:bg-asphalt flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg transition-colors"
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
            className="bg-surface-light dark:bg-surface-elevated-dark border-border-light dark:border-border-dark overflow-hidden border-t md:hidden"
          >
            <div className="space-y-3 px-4 py-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-text-light dark:text-text-dark hover:text-primary dark:hover:text-primary-light block text-base font-medium no-underline transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="tel:+37360004260"
                onClick={() => setMobileOpen(false)}
                className="btn-shimmer bg-primary hover:bg-primary-dark mt-2 flex items-center justify-center gap-2 rounded-lg px-4 py-3 font-medium text-white no-underline transition-colors"
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
