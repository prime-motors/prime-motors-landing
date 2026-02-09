import { useState, useRef, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'framer-motion'

const languages = [
  { code: 'en', label: 'EN', flag: '\u{1F1FA}\u{1F1F8}' },
  { code: 'ro', label: 'RO', flag: '\u{1F1F2}\u{1F1E9}' },
  { code: 'ru', label: 'RU', flag: '\u{1F1F7}\u{1F1FA}' },
]

export default function LanguageSwitcher() {
  const { i18n } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)
  const ref = useRef(null)

  const currentLang = languages.find((l) => l.code === i18n.language) || languages[0]

  useEffect(() => {
    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const switchLanguage = (code) => {
    i18n.changeLanguage(code)
    setIsOpen(false)
  }

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium
                   bg-surface-card-light dark:bg-surface-card-dark text-text-light dark:text-text-dark
                   hover:bg-border-light dark:hover:bg-asphalt transition-colors cursor-pointer"
      >
        <span className="text-base leading-none">{currentLang.flag}</span>
        {currentLang.label}
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`transition-transform ${isOpen ? 'rotate-180' : ''}`}>
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 mt-2 w-32 bg-surface-light dark:bg-surface-elevated-dark rounded-lg shadow-lg
                       border border-border-light dark:border-border-dark overflow-hidden z-50"
          >
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => switchLanguage(lang.code)}
                className={`w-full px-4 py-2 text-left text-sm transition-colors cursor-pointer flex items-center gap-2
                  ${i18n.language === lang.code
                    ? 'bg-primary/10 text-primary font-medium'
                    : 'text-text-light dark:text-text-dark hover:bg-surface-card-light dark:hover:bg-asphalt'
                  }`}
              >
                <span className="text-base leading-none">{lang.flag}</span>
                {lang.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
