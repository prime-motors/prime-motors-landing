'use client';

import { useState } from 'react';

type Lang = 'en' | 'ro' | 'ru';

const messages: Record<Lang, { subtitle: string }> = {
  en: {
    subtitle: 'Our website is currently in development.',
  },
  ro: {
    subtitle: 'Site-ul nostru este în curs de dezvolare',
  },
  ru: {
    subtitle: 'Наш сайт в процессе обновления.',
  },
};

export default function Home() {
  const [lang] = useState<Lang>(() => {
    if (typeof window === 'undefined') return 'en';

    const browserLang = window.navigator.language.toLowerCase();

    if (browserLang.startsWith('ro')) return 'ro';
    if (browserLang.startsWith('ru')) return 'ru';
    return 'en';
  });

  const t = messages[lang];

  return (
    <main className="min-h-screen w-full bg-black text-white flex items-center justify-center px-6">
      <div className="w-full max-w-3xl space-y-10 animate-fade-in">
        {/* Top label */}
        <header className="flex flex-col items-center space-y-1 text-[11px] sm:text-xs tracking-[0.18em] uppercase text-zinc-500">
          <div className="font-medium">Prime Motors SRL</div>
          <div className="text-zinc-600">Autoservice · Chișinău, Moldova</div>
        </header>

        {/* Center content */}
        <section className="text-center space-y-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
            Coming Soon
          </h1>

          <p className="text-sm sm:text-base text-zinc-400">{t.subtitle}</p>
        </section>

        {/* Contacts */}
        <footer className="text-center text-xs sm:text-sm text-zinc-500 space-y-2">
          <p>
            <span className="text-zinc-400">Phone</span>{' '}
            <a
              href="tel:+37360004260"
              className="text-zinc-300 hover:text-white"
            >
              +373 60004260
            </a>
          </p>

          <p>
            <span className="text-zinc-400">Email</span>{' '}
            <a
              href="mailto:contact@primemotors.md"
              className="text-zinc-300 hover:text-white"
            >
              contact@primemotors.md
            </a>
          </p>

          <p>
            <span className="text-zinc-400">Address</span>{' '}
            <a
              href="https://maps.app.goo.gl/6qYC9jaJzjPpNnup7"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-300 hover:text-white"
            >
              str. Uzinelor 104, Chișinău
            </a>
          </p>
        </footer>
      </div>
    </main>
  );
}
