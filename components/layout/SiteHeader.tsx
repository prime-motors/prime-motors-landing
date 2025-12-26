import { useEffect, useState } from 'react';
import Image from 'next/image';
import type { Lang, TFunction } from '@/lib/i18n';
import { LanguageToggle } from '@/components/ui/LanguageToggle';
import styles from './SiteHeader.module.css';

type Props = {
  lang: Lang;
  onLangChange: (lang: Lang) => void;
  t: TFunction;
};

export function SiteHeader({ lang, onLangChange, t }: Props) {
  const [open, setOpen] = useState(false);

  // Close menu when resizing to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const close = () => setOpen(false);

  return (
    <header
      className={`sticky top-0 z-30 border-b border-zinc-800/70 bg-black/80 backdrop-blur ${styles.header}`}
    >
      <div className="mx-auto max-w-6xl px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Brand */}
          <a href="#home" className={styles.brand} onClick={close}>
            <div
              className={`flex h-11 w-11 items-center justify-center rounded-full border border-zinc-800 bg-zinc-900/60 text-sm font-semibold tracking-wide text-white ${styles.pmBadge}`}
            >
              PM
            </div>

            <div className="relative h-11 w-20 overflow-hidden">
              <Image
                src="/prime-motors-logo-white-transparent.png"
                alt="Prime Motors logo"
                fill
                priority
                className={`object-contain scale-[2] ${styles.logo}`}
              />
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden items-center space-x-6 text-xs md:flex">
            <a
              href="#home"
              className={`text-zinc-400 transition hover:text-white ${styles.navLink}`}
            >
              {t('nav.home')}
            </a>
            <a
              href="#services"
              className={`text-zinc-400 transition hover:text-white ${styles.navLink}`}
            >
              {t('nav.services')}
            </a>
            <a
              href="#about"
              className={`text-zinc-400 transition hover:text-white ${styles.navLink}`}
            >
              {t('nav.about')}
            </a>
            <a
              href="#contact"
              className={`text-zinc-400 transition hover:text-white ${styles.navLink}`}
            >
              {t('nav.contact')}
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <LanguageToggle lang={lang} onChange={onLangChange} />

            {/* Mobile menu button */}
            <button
              type="button"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-zinc-800 bg-zinc-900/40 text-zinc-200 transition hover:bg-zinc-900/70 md:hidden"
            >
              {/* Simple icon */}
              <span className="relative block h-4 w-5">
                <span
                  className={`absolute left-0 top-0 h-[2px] w-5 bg-current transition ${
                    open ? 'translate-y-[7px] rotate-45' : ''
                  }`}
                />
                <span
                  className={`absolute left-0 top-[7px] h-[2px] w-5 bg-current transition ${
                    open ? 'opacity-0' : ''
                  }`}
                />
                <span
                  className={`absolute left-0 bottom-0 h-[2px] w-5 bg-current transition ${
                    open ? '-translate-y-[7px] -rotate-45' : ''
                  }`}
                />
              </span>
            </button>
          </div>
        </div>

        {/* Mobile panel */}
        {open && (
          <div className="mt-4 rounded-xl border border-zinc-800/70 bg-black/60 p-3 md:hidden">
            <div className="flex flex-col gap-2 text-sm">
              <a
                href="#home"
                onClick={close}
                className="rounded-md px-3 py-2 text-zinc-300 transition hover:bg-zinc-900/60 hover:text-white"
              >
                {t('nav.home')}
              </a>
              <a
                href="#services"
                onClick={close}
                className="rounded-md px-3 py-2 text-zinc-300 transition hover:bg-zinc-900/60 hover:text-white"
              >
                {t('nav.services')}
              </a>
              <a
                href="#about"
                onClick={close}
                className="rounded-md px-3 py-2 text-zinc-300 transition hover:bg-zinc-900/60 hover:text-white"
              >
                {t('nav.about')}
              </a>
              <a
                href="#contact"
                onClick={close}
                className="rounded-md px-3 py-2 text-zinc-300 transition hover:bg-zinc-900/60 hover:text-white"
              >
                {t('nav.contact')}
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
