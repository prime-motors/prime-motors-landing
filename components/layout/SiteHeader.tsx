import Image from 'next/image';
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
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        {/* Brand */}
        <a href="#home" className="group flex items-center">
          {/* PM badge */}
          <div className="flex h-11 w-11 items-center justify-center rounded-full border border-zinc-800 bg-zinc-900/60 text-sm font-semibold tracking-wide text-white">
            PM
          </div>

          <div className="relative h-11 w-20 overflow-hidden">
            <Image
              src="/prime-motors-logo-white-transparent.png"
              alt="Prime Motors logo"
              fill
              priority
              className="object-contain scale-[2]"
            />
          </div>
        </a>

        {/* Navigation */}
        <nav className="hidden items-center space-x-6 text-xs md:flex">
          <a href="#home" className="text-zinc-400 transition hover:text-white">
            {t('nav.home')}
          </a>
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

        {/* Actions */}
        <div className="flex items-center space-x-3">
          <LanguageToggle lang={lang} onChange={onLangChange} />
        </div>
      </div>
    </header>
  );
}
