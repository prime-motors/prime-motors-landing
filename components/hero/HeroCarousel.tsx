'use client';

import { useEffect, useState } from 'react';
import type { TFunction } from '@/lib/i18n';
import {
  COMPANY_NAME,
  COMPANY_TAGLINE,
  PHONE_DISPLAY,
  PHONE_TEL,
} from '@/lib/constants';

type Props = {
  t: TFunction;
};

type Slide = {
  id: number;
  imageClass: string;
};

const SLIDES: Slide[] = [
  { id: 0, imageClass: 'bg-[url("/hero1.jpg")]' },
  { id: 1, imageClass: 'bg-[url("/hero2.jpg")]' },
  { id: 2, imageClass: 'bg-[url("/hero3.jpg")]' },
];

export function HeroCarousel({ t }: Props) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setIndex((prev) => (prev + 1) % SLIDES.length),
      6000,
    );
    return () => clearInterval(interval);
  }, []);

  const active = SLIDES[index];

  return (
    <section
      id="home"
      className="relative flex min-h-[70vh] items-center justify-center overflow-hidden border-b border-zinc-800 bg-black md:min-h-[80vh]"
    >
      {/* Background */}
      <div
        className={`pointer-events-none absolute inset-0 bg-cover bg-center opacity-40 ${active.imageClass}`}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black via-black/70 to-black" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col px-4 py-16 md:flex-row md:items-center md:py-24">
        <div className="w-full space-y-6 md:w-3/5">
          <div className="inline-flex items-center space-x-3 text-[11px] uppercase tracking-[0.18em] text-zinc-500">
            <span className="h-[1px] w-8 bg-zinc-600" />
            <span>{t('hero.badge')}</span>
          </div>

          <h1 className="text-3xl font-semibold leading-tight md:text-5xl">
            {t('hero.title')}
          </h1>

          <p className="max-w-xl text-sm text-zinc-300 md:text-base">
            {t('hero.subtitle')}
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href={`tel:${PHONE_TEL}`}
              className="rounded-full bg-zinc-100 px-6 py-2 text-sm font-medium text-black transition hover:bg-white"
            >
              {t('hero.cta')}
            </a>
            <div className="text-xs text-zinc-400">
              <div className="font-medium text-zinc-200">{COMPANY_NAME}</div>
              <div>{COMPANY_TAGLINE}</div>
              <div>
                Tel:{' '}
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="text-zinc-100 hover:text-white"
                >
                  {PHONE_DISPLAY}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Simple slide dots */}
        <div className="mt-10 flex w-full justify-center md:mt-0 md:w-2/5 md:justify-end">
          <div className="flex items-center space-x-2">
            {SLIDES.map((s) => (
              <button
                key={s.id}
                type="button"
                onClick={() => setIndex(s.id)}
                className={`h-1.5 w-6 rounded-full transition ${
                  s.id === index
                    ? 'bg-zinc-100'
                    : 'bg-zinc-700 hover:bg-zinc-500'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
