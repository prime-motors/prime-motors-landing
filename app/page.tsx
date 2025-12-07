'use client';

import { useI18n } from '@/lib/i18n';
import { SiteHeader } from '@/components/layout/SiteHeader';
import { SiteFooter } from '@/components/layout/SiteFooter';
/* import { HeroCarousel } from '@/components/hero/HeroCarousel'; */
/* import { ServicesSection } from '@/components/sections/ServicesSection'; */
/* import { AboutSection } from '@/components/sections/AboutSection'; */
/* import { ContactSection } from '@/components/sections/ContactSection'; */

export default function HomePage() {
  const { lang, setLang, t } = useI18n();

  return (
    <main className="min-h-screen bg-black text-white">
      <SiteHeader lang={lang} onLangChange={setLang} t={t} />
      {/* <HeroCarousel t={t} /> */}
      {/* <ServicesSection t={t} /> */}
      {/* <AboutSection t={t} /> */}
      {/* <ContactSection t={t} /> */}
      <SiteFooter t={t} />
    </main>
  );
}
