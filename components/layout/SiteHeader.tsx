'use client';

import { COMPANY_NAME, COMPANY_TAGLINE } from '@/lib/constants';
import type { Lang, TFunction } from '@/lib/i18n';
import { LanguageToggle } from '@/components/ui/LanguageToggle';

type Props = {
  lang: Lang;
  onLangChange: (lang: Lang) => void;
  t: TFunction;
};

export function SiteHeader({ lang, onLangChange, t }: Props) {
  return (
    <header className="sticky top-0 z-30 border-b border-zinc-800/70 bg-black/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:py-4">
        <a href="#home" className="group flex items-center space-x-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-zinc-900 text-xs font-semibold">
            PM
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold tracking-wide">
              {COMPANY_NAME}
            </span>
            <span className="text-[11px] text-zinc-500">{COMPANY_TAGLINE}</span>
          </div>
        </a>

        <nav className="hidden items-center space-x-6 text-xs md:flex">
          <a
            href="#services"
            className="text-zinc-400 transition hover:text-white"
          >
            {t('nav.services')}
          </a>
          <a
            href="#about"
            className="text-zinc-400 transition hover:text-white"
          >
            {t('nav.about')}
          </a>
          <a
            href="#contact"
            className="text-zinc-400 transition hover:text-white"
          >
            {t('nav.contact')}
          </a>
        </nav>

        <div className="flex items-center space-x-3">
          <LanguageToggle lang={lang} onChange={onLangChange} />
        </div>
      </div>
    </header>
  );
}
