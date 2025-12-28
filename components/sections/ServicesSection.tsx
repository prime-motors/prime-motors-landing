import { useMemo, useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import type { Lang, TFunction } from '@/lib/i18n';
import { translations } from '@/lib/i18n';

import styles from './ServicesSection.module.css';

type Props = {
  lang: Lang;
  t: TFunction;
};

type ServiceId =
  | 'general'
  | 'hybridElectric'
  | 'diagnostics'
  | 'brakes'
  | 'electric'
  | 'suspension';

function bgForId(id: ServiceId): string {
  switch (id) {
    case 'general':
      return '/services/maintenance.jpg';
    case 'hybridElectric':
      return '/services/electric.jpg';
    case 'diagnostics':
      return '/services/diagnostics.jpg';
    case 'brakes':
      return '/services/brakes.jpg';
    case 'electric':
      return '/services/electrical.jpg';
    case 'suspension':
      return '/services/suspension.jpg';
  }
}

function Icon({ id }: { id: ServiceId }) {
  switch (id) {
    case 'general':
      // tool / wrench
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M14.7 6.3a5 5 0 0 0-6.9 6.9l-4.1 4.1a1.6 1.6 0 0 0 2.3 2.3l4.1-4.1a5 5 0 0 0 6.9-6.9l-2.2 2.2-2.4-2.4 2.3-2.1Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case 'hybridElectric':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M13 2 4 14h7l-1 8 10-14h-7l0-6Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case 'diagnostics':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M4 19V5M20 19V5M7 15l3-3 3 2 4-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case 'brakes':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M12 21a9 9 0 1 0-9-9"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <path
            d="M3 12h6l2 3 2-6 2 3h4"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case 'electric':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M8 7h8M7 11h10M6 15h12"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <path
            d="M12 22V18"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <path
            d="M9 3h6l1 4H8l1-4Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
        </svg>
      );
    case 'suspension':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M7 4v16M17 4v16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <path
            d="M7 8h10M7 16h10"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      );
  }
}

export function ServicesSection({ lang, t }: Props) {
  const reduceMotion = useReducedMotion();

  const items =
    translations[lang]?.services?.items ?? translations.en.services.items;

  const [openId, setOpenId] = useState<ServiceId | null>(null);

  const bgSources = useMemo(
    () => items.map((s) => bgForId(s.id as ServiceId)),
    [items],
  );

  return (
    <section
      id="services"
      className="scroll-mt-55 md:scroll-mt-24 border-b border-zinc-800 bg-black py-16 md:py-20"
    >
      {/* preload */}
      <div className="hidden" aria-hidden>
        {bgSources.map((src, idx) => (
          <Image key={`${src}-${idx}`} src={src} alt="" width={1} height={1} />
        ))}
      </div>

      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-10 space-y-2 text-center">
          <h2 className="text-2xl font-semibold md:text-3xl">
            {t('services.title')}
          </h2>
          <p className="text-sm text-zinc-400 md:text-base">
            {t('services.subtitle')}
          </p>
        </div>

        <div className={styles.grid}>
          {items.map((service) => {
            const id = service.id as ServiceId;
            const isOpen = openId === id;
            const bgSrc = bgForId(id);

            const toggle = () => setOpenId(isOpen ? null : id);

            return (
              <article
                key={id}
                className={styles.card}
                data-open={isOpen ? 'true' : 'false'}
                onClick={toggle}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') toggle();
                }}
                aria-expanded={isOpen}
              >
                {/* background */}
                <div className={styles.bg} aria-hidden>
                  <Image
                    src={bgSrc}
                    alt=""
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className={styles.bgImg}
                    priority={false}
                  />
                  <div className={styles.bgOverlay} />
                  <div className={styles.bgVignette} />
                </div>

                {/* content */}
                <div className={styles.content}>
                  <div className={styles.header}>
                    <span className={styles.iconPill} aria-hidden>
                      <Icon id={id} />
                    </span>
                    <h3 className={styles.title}>{service.title}</h3>
                  </div>

                  <p className={styles.short}>{service.short}</p>

                  {/* one full line gap below the short text */}
                  <div className={styles.afterShortGap} />

                  <button
                    type="button"
                    className={styles.toggle}
                    onClick={(e) => {
                      e.stopPropagation();
                      toggle();
                    }}
                    aria-controls={`service-${id}`}
                    aria-expanded={isOpen}
                  >
                    {/* fixed width label (no size jump between read more/less) */}
                    <span className={styles.toggleLabelWrap} aria-hidden="true">
                      <span className={styles.toggleLabelSizer}>
                        {t('services.readMore')}
                      </span>
                      <span className={styles.toggleLabelSizer}>
                        {t('services.readLess')}
                      </span>
                    </span>

                    <span className={styles.toggleLabelVisible}>
                      {isOpen ? t('services.readLess') : t('services.readMore')}
                    </span>

                    <motion.span
                      className={styles.arrow}
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={
                        reduceMotion
                          ? { duration: 0 }
                          : { duration: 0.22, ease: 'easeOut' }
                      }
                      aria-hidden="true"
                    >
                      {/* original chevron */}
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
                        id={`service-${id}`}
                        className={styles.detailsWrap}
                        initial={
                          reduceMotion
                            ? { opacity: 0 }
                            : { height: 0, opacity: 0 }
                        }
                        animate={
                          reduceMotion
                            ? { opacity: 1 }
                            : { height: 'auto', opacity: 1 }
                        }
                        exit={
                          reduceMotion
                            ? { opacity: 0 }
                            : { height: 0, opacity: 0 }
                        }
                        transition={{ duration: 0.28, ease: 'easeOut' }}
                      >
                        <div className={styles.details}>
                          {service.long.split('\n\n').map((para, idx) => (
                            <p key={idx}>{para}</p>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
