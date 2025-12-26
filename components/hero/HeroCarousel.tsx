import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import type { Lang, TFunction } from '@/lib/i18n';
import {
  COMPANY_NAME,
  COMPANY_LOCATION_LINE,
  COMPANY_PHONE_DISPLAY,
  PHONE_TEL,
} from '@/lib/constants';

import styles from './HeroCarousel.module.css';

type HeroCarouselProps = {
  lang: Lang;
  t: TFunction;
};

type Slide = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  cta: string;
};

const AUTO_INTERVAL_MS = 6000;
const EASE = [0.2, 0.8, 0.2, 1] as const;

export function HeroCarousel({ lang, t }: HeroCarouselProps) {
  const reduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);

  const slides: Slide[] = useMemo(
    () => [
      {
        id: 'main',
        eyebrow: t('hero.eyebrow'),
        title: t('hero.titleMain'),
        description: t('hero.descriptionMain'),
        cta: t('hero.cta'),
      },
      {
        id: 'electronics',
        eyebrow: t('hero.eyebrow'),
        title: t('hero.titleElectronics'),
        description: t('hero.descriptionElectronics'),
        cta: t('hero.cta'),
      },
      {
        id: 'transmission',
        eyebrow: t('hero.eyebrow'),
        title: t('hero.titleTransmission'),
        description: t('hero.descriptionTransmission'),
        cta: t('hero.cta'),
      },
    ],
    [t],
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, AUTO_INTERVAL_MS);

    return () => clearInterval(timer);
  }, [lang, slides.length]);

  const slide = slides[index];

  // Only used for slide changes (not initial mount)
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.02 },
    },
  };

  const item: Variants = {
    hidden: reduceMotion ? { opacity: 0 } : { opacity: 0, y: 8 },
    show: reduceMotion
      ? { opacity: 1 }
      : { opacity: 1, y: 0, transition: { duration: 0.35, ease: EASE } },
  };

  return (
    <section
      id="home"
      className={[
        'scroll-mt-55 md:scroll-mt-24 border-b border-zinc-900 bg-black px-4 py-16 sm:py-20 md:py-24',
        styles.heroBase,
        styles.heroGrain,
        styles.heroVignette,
      ].join(' ')}
    >
      <div className="relative z-10">
        <div
          className="
            mx-auto
            flex
            max-w-6xl
            flex-col
            gap-10
            md:flex-row
            md:items-stretch
            min-h-[400px]
            sm:min-h-[460px]
            md:min-h-[520px]
          "
        >
          {/* LEFT */}
          <div
            className="
              flex
              flex-1
              flex-col
              justify-between
              max-w-xl
              min-h-[420px]
              sm:min-h-[460px]
              md:min-h-0
            "
          >
            {/* ✅ Initial entrance like header (CSS, instant & lint-safe) */}
            <div className={styles.heroIn}>
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={slide.id}
                  variants={container}
                  initial="hidden"
                  animate="show"
                  exit={
                    reduceMotion
                      ? { opacity: 0 }
                      : { opacity: 0, y: -6, transition: { duration: 0.2 } }
                  }
                  className="space-y-6"
                >
                  {/* Eyebrow */}
                  <motion.div
                    variants={item}
                    className="flex items-center space-x-3"
                  >
                    <span className="h-px w-8 bg-zinc-700" />
                    <span className="text-[11px] uppercase tracking-[0.24em] text-zinc-500">
                      {slide.eyebrow}
                    </span>
                  </motion.div>

                  {/* Title */}
                  <motion.h1
                    variants={item}
                    className="text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl"
                  >
                    {slide.title}
                  </motion.h1>

                  {/* Description */}
                  <motion.p
                    variants={item}
                    className="max-w-lg text-sm text-zinc-400 sm:text-base"
                  >
                    {slide.description}
                  </motion.p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* CTA + company info (optional staged entrance) */}
            <div className={styles.ctaIn}>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                <motion.a
                  href={`tel:${PHONE_TEL}`}
                  whileHover={reduceMotion ? undefined : { y: -1, scale: 1.01 }}
                  whileTap={reduceMotion ? undefined : { scale: 0.99 }}
                  transition={{ duration: 0.2 }}
                  className="inline-flex items-center justify-center rounded-full bg-white px-6 py-2.5 text-sm font-medium text-black shadow-sm hover:bg-zinc-200"
                >
                  {slide.cta}
                </motion.a>

                <a
                  href={`tel:${PHONE_TEL}`}
                  className="block space-y-0.5 text-xs text-zinc-400 hover:text-zinc-200 transition"
                >
                  <div className="font-medium text-zinc-200">
                    {COMPANY_NAME}
                  </div>
                  <div>{COMPANY_LOCATION_LINE}</div>
                  <div>Tel: {COMPANY_PHONE_DISPLAY}</div>
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT: dots + progress */}
          <div className="flex flex-1 items-center justify-center md:justify-end">
            <div className="flex items-center space-x-2">
              {slides.map((s, i) => {
                const active = i === index;

                return (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setIndex(i)}
                    aria-label={`Go to slide ${i + 1}`}
                    className={`relative h-2 rounded-full transition-all ${
                      active ? 'w-10 bg-zinc-800' : 'w-6 bg-zinc-900'
                    }`}
                  >
                    <span
                      className={`absolute inset-0 rounded-full ${
                        active ? 'bg-zinc-700' : 'bg-zinc-800'
                      }`}
                    />

                    {active && !reduceMotion && (
                      <motion.span
                        key={`progress-${slide.id}`}
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{
                          duration: AUTO_INTERVAL_MS / 1000,
                          ease: 'linear',
                        }}
                        style={{ transformOrigin: 'left' }}
                        className="absolute inset-0 rounded-full bg-zinc-100"
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
