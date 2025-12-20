import { useEffect, useState } from 'react';
import type { Lang, TFunction } from '@/lib/i18n';
import {
  COMPANY_NAME,
  COMPANY_LOCATION_LINE,
  COMPANY_PHONE_DISPLAY,
  PHONE_TEL,
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

const AUTO_INTERVAL_MS = 6000;

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
        {/* LEFT: TEXT + CTA pinned to bottom */}
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
          {/* Top text block */}
          <div className="space-y-6">
            {/* Eyebrow */}
            <div className="flex items-center space-x-3">
              <span className="h-px w-8 bg-zinc-700" />
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
          </div>

          {/* Bottom CTA + company info */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href={`tel:${PHONE_TEL}`}
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-2.5 text-sm font-medium text-black shadow-sm transition hover:bg-zinc-200"
            >
              {slide.cta}
            </a>

            <a
              href={`tel:${PHONE_TEL}`}
              className="block space-y-0.5 text-xs text-zinc-400 hover:text-zinc-200 transition"
            >
              <div className="font-medium text-zinc-200">{COMPANY_NAME}</div>
              <div>{COMPANY_LOCATION_LINE}</div>
              <div>Tel: {COMPANY_PHONE_DISPLAY}</div>
            </a>
          </div>
        </div>

        {/* RIGHT: DOTS centered vertically */}
        <div className="flex flex-1 items-center justify-center md:justify-end">
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
