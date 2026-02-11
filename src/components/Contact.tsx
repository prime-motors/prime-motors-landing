import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import ParallaxBackground from './ParallaxBackground'

const basePath = import.meta.env.BASE_URL

export default function Contact() {
  const { t } = useTranslation()

  return (
    <ParallaxBackground
      imageSrc={`${basePath}images/contact-bg.webp`}
      parallaxSpeed={0.2}
      effect="pan"
      className=""
      overlayClassName="bg-gradient-to-br from-surface-light/90 to-surface-light/85 dark:from-[rgba(12,12,11,0.88)] dark:to-[rgba(26,25,24,0.82)]"
    >
      <section id="contact" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-text-light dark:text-text-dark mb-4">
              {t('contact.title')}
            </h2>
            <p className="text-lg text-text-muted-light dark:text-text-muted-dark">{t('contact.subtitle')}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-lg mx-auto"
          >
            <div className="space-y-4 mb-8">
              {/* Phone */}
              <a
                href="tel:+37360004260"
                className="flex items-center gap-4 p-4 rounded-xl bg-surface-card-light dark:bg-surface-card-dark
                           border border-border-light dark:border-border-dark
                           hover:border-primary/30 dark:hover:border-primary/30 transition-colors no-underline group"
              >
                <div
                  className="w-10 h-10 rounded-lg bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary-light
                                flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-medium text-text-muted-light dark:text-text-muted-dark uppercase tracking-wider">
                    {t('contact.phone')}
                  </div>
                  <div className="text-text-light dark:text-text-dark font-medium">+373 60 004 260</div>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:contact@primemotors.md"
                className="flex items-center gap-4 p-4 rounded-xl bg-surface-card-light dark:bg-surface-card-dark
                           border border-border-light dark:border-border-dark
                           hover:border-primary/30 dark:hover:border-primary/30 transition-colors no-underline group"
              >
                <div
                  className="w-10 h-10 rounded-lg bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary-light
                                flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-medium text-text-muted-light dark:text-text-muted-dark uppercase tracking-wider">
                    {t('contact.email')}
                  </div>
                  <div className="text-text-light dark:text-text-dark font-medium">contact@primemotors.md</div>
                </div>
              </a>

              {/* Address */}
              <div
                className="flex items-center gap-4 p-4 rounded-xl bg-surface-card-light dark:bg-surface-card-dark
                              border border-border-light dark:border-border-dark"
              >
                <div
                  className="w-10 h-10 rounded-lg bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary-light
                                flex items-center justify-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-medium text-text-muted-light dark:text-text-muted-dark uppercase tracking-wider">
                    {t('contact.address')}
                  </div>
                  <div className="text-text-light dark:text-text-dark font-medium">
                    str. Uzinelor 104, Chișinău, Moldova
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="text-xs font-medium text-text-muted-light dark:text-text-muted-dark uppercase tracking-wider">
                {t('contact.followUs')}
              </span>
              <a
                href="https://www.facebook.com/profile.php?id=61585698395150"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-lg bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary-light
                           flex items-center justify-center hover:bg-primary hover:text-white transition-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://www.tiktok.com/@prime.motors16?is_from_webapp=1&sender_device=pc"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="w-9 h-9 rounded-lg bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary-light
                           flex items-center justify-center hover:bg-primary hover:text-white transition-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V9.19a8.16 8.16 0 0 0 4.76 1.52v-3.4a4.85 4.85 0 0 1-1-.62z" />
                </svg>
              </a>
            </div>

            {/* CTA */}
            <motion.a
              href="tel:+37360004260"
              className="btn-shimmer flex items-center justify-center gap-3 w-full px-6 py-4 bg-primary text-white rounded-xl
                         text-lg font-semibold shadow-lg shadow-primary/25 hover:bg-primary-dark
                         hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 no-underline"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              {t('contact.cta')}
            </motion.a>
          </motion.div>
        </div>
      </section>
    </ParallaxBackground>
  )
}
