import { useState } from 'react';
import type { Lang, TFunction } from '@/lib/i18n';
import { translations } from '@/lib/i18n';

type Props = {
  lang: Lang;
  t: TFunction;
};

export function ServicesSection({ lang, t }: Props) {
  // Use services list for the current language, fallback to RO
  const items =
    translations[lang]?.services?.items ?? translations.ro.services.items;

  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section
      id="services"
      className="border-b border-zinc-800 bg-black py-16 md:py-20"
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-8 space-y-2 text-center">
          <h2 className="text-2xl font-semibold md:text-3xl">
            {t('services.title')}
          </h2>
          <p className="text-sm text-zinc-400 md:text-base">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((service) => {
            const isOpen = openId === service.id;
            return (
              <article
                key={service.id}
                className="flex flex-col rounded-2xl border border-zinc-800 bg-zinc-950/70 p-5 text-sm"
              >
                <h3 className="mb-2 text-base font-semibold text-zinc-50">
                  {service.title}
                </h3>
                <p className="text-xs text-zinc-400">{service.short}</p>

                {isOpen && (
                  <div className="mt-3 max-h-64 overflow-y-auto rounded-md bg-zinc-950/90 p-3 text-xs text-zinc-300">
                    {service.long.split('\n\n').map((para, idx) => (
                      <p key={idx} className="mb-2 last:mb-0">
                        {para}
                      </p>
                    ))}
                  </div>
                )}

                <button
                  type="button"
                  onClick={() => setOpenId(isOpen ? null : service.id)}
                  className="mt-4 self-start text-[11px] font-medium text-zinc-200 underline-offset-4 hover:underline"
                >
                  {isOpen ? t('services.readLess') : t('services.readMore')}
                </button>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
