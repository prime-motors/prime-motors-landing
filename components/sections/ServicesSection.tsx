import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import type { Lang, TFunction } from '@/lib/i18n';
import { translations } from '@/lib/i18n';
import styles from './ServicesSection.module.css';

type Props = {
  lang: Lang;
  t: TFunction;
};

function ServiceIcon({ kind }: { kind: string }) {
  // simple inline SVG icons (no assets)
  const common = {
    width: 18,
    height: 18,
    viewBox: '0 0 24 24',
    fill: 'none' as const,
  };

  switch (kind) {
    case 'diagnostics':
      return (
        <svg {...common}>
          <path
            d="M4 19V5"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <path
            d="M4 15l4-4 4 3 8-8"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20 6v5h-5"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case 'electric':
      return (
        <svg {...common}>
          <path
            d="M13 2L4 14h7l-1 8 10-14h-7l0-6z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
        </svg>
      );
    case 'brakes':
      return (
        <svg {...common}>
          <path
            d="M12 20a8 8 0 1 0-8-8"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <path
            d="M12 4a8 8 0 0 1 8 8"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <path
            d="M12 12l3-3"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <path
            d="M12 12l-3 3"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      );
    case 'suspension':
      return (
        <svg {...common}>
          <path
            d="M7 4v16"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <path
            d="M17 4v16"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <path
            d="M7 8h10M7 16h10"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      );
    default: // maintenance
      return (
        <svg {...common}>
          <path
            d="M14.7 6.3a5 5 0 0 0-6.4 6.4L4 17v3h3l4.3-4.3a5 5 0 0 0 6.4-6.4l-3 3-2.4-.6-.6-2.4 3-3z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
        </svg>
      );
  }
}

function iconKindFromId(id: string) {
  const s = id.toLowerCase();
  if (s.includes('diagn')) return 'diagnostics';
  if (s.includes('hybrid') || s.includes('electric')) return 'electric';
  if (s.includes('brake')) return 'brakes';
  if (s.includes('susp') || s.includes('drive')) return 'suspension';
  return 'maintenance';
}

export function ServicesSection({ lang, t }: Props) {
  const items = useMemo(
    () => translations[lang]?.services?.items ?? translations.ro.services.items,
    [lang],
  );

  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section
      id="services"
      className={`${styles.section} scroll-mt-55 py-16 md:scroll-mt-24 md:py-20`}
    >
      <div className={`mx-auto max-w-6xl px-4 ${styles.inner}`}>
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            {t('services.title')}
          </h2>
          <p
            className={`mx-auto mt-2 max-w-2xl text-sm leading-relaxed md:text-base ${styles.kicker}`}
          >
            {t('services.subtitle')}
          </p>
        </div>

        <div className={styles.grid}>
          {items.map((service, idx) => {
            const isOpen = openId === service.id;
            const kind = iconKindFromId(service.id);

            return (
              <motion.article
                key={service.id}
                className={styles.item}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 0.35,
                  delay: idx * 0.03,
                  ease: 'easeOut',
                }}
                onMouseMove={(e) => {
                  const el = e.currentTarget;
                  const r = el.getBoundingClientRect();
                  const x = ((e.clientX - r.left) / r.width) * 100;
                  const y = ((e.clientY - r.top) / r.height) * 100;
                  el.style.setProperty('--mx', `${x}%`);
                  el.style.setProperty('--my', `${y}%`);
                }}
              >
                <div className={styles.spotlight} />

                <div className={styles.headerRow}>
                  <span className={styles.icon} aria-hidden="true">
                    <ServiceIcon kind={kind} />
                  </span>

                  <div>
                    <h3 className={styles.title}>{service.title}</h3>
                    <p className={styles.short}>{service.short}</p>

                    <button
                      type="button"
                      className={styles.toggle}
                      onClick={() => setOpenId(isOpen ? null : service.id)}
                      aria-expanded={isOpen}
                      aria-controls={`service-${service.id}`}
                    >
                      <span>
                        {isOpen
                          ? t('services.readLess')
                          : t('services.readMore')}
                      </span>

                      <motion.span
                        className={styles.arrow}
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.22, ease: 'easeOut' }}
                        aria-hidden="true"
                      >
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 20 20"
                          fill="none"
                        >
                          <path
                            d="M5.5 7.5L10 12L14.5 7.5"
                            stroke="currentColor"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </motion.span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          id={`service-${service.id}`}
                          className={styles.detailsWrap}
                          initial={{
                            height: 0,
                            opacity: 0,
                            filter: 'blur(2px)',
                          }}
                          animate={{
                            height: 'auto',
                            opacity: 1,
                            filter: 'blur(0px)',
                          }}
                          exit={{ height: 0, opacity: 0, filter: 'blur(2px)' }}
                          transition={{ duration: 0.28, ease: 'easeOut' }}
                        >
                          <div className={styles.details}>
                            {service.long.split('\n\n').map((para, pIdx) => (
                              <p key={pIdx}>{para}</p>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
