import { useEffect, useState } from 'react';
import type { Lang, TFunction } from '@/lib/i18n';
import {
  COMPANY_NAME,
  COMPANY_LOCATION_LINE,
  COMPANY_PHONE_DISPLAY,
} from '@/lib/constants';

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

const AUTO_INTERVAL_MS = 8000;

export function HeroCarousel({ lang, t }: HeroCarouselProps) {
  const [index, setIndex] = useState(0);

  const slides: Slide[] = [
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
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, AUTO_INTERVAL_MS);
    return () => clearInterval(timer);
  }, [lang, slides.length]);

  const slide = slides[index];

  return (
    <section
      id="home"
      className="border-b border-zinc-900 bg-black px-4 py-16 sm:py-20 md:py-24"
    >
      <div
        className="
          mx-auto
          max-w-6xl
          flex
          flex-col
          gap-10
          md:flex-row
          md:items-stretch 
          min-h-[400px]
          sm:min-h-[460px]
          md:min-h-[500px]
        "
      >
        {/* LEFT: TEXT */}
        <div className="max-w-xl space-y-6 self-start">
          {' '}
          {/* top-aligned */}
          {/* Eyebrow */}
          <div className="flex items-center space-x-3">
            <span className="h-px w-8 bg-zinc-700"></span>
            <span className="text-[11px] uppercase tracking-[0.24em] text-zinc-500">
              {slide.eyebrow}
            </span>
          </div>
          {/* Title */}
          <h1 className="text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
            {slide.title}
          </h1>
          {/* Description */}
          <p className="max-w-lg text-sm text-zinc-400 sm:text-base">
            {slide.description}
          </p>
          {/* CTA + COMPANY INFO */}
          <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-2.5 text-sm font-medium text-black shadow-sm transition hover:bg-zinc-200"
            >
              {slide.cta}
            </a>

            <div className="space-y-0.5 text-xs text-zinc-400">
              <div className="font-medium text-zinc-200">{COMPANY_NAME}</div>
              <div>{COMPANY_LOCATION_LINE}</div>
              <div>Tel: {COMPANY_PHONE_DISPLAY}</div>
            </div>
          </div>
        </div>

        {/* RIGHT: DOTS */}
        <div className="flex flex-1 items-center justify-center md:justify-end self-center">
          <div className="flex items-center space-x-2">
            {slides.map((s, i) => (
              <button
                key={s.id}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-1.5 rounded-full transition-all ${
                  i === index ? 'w-6 bg-zinc-100' : 'w-4 bg-zinc-700'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
