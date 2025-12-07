import type { TFunction } from '@/lib/i18n';
import {
  ADDRESS_LINE,
  EMAIL,
  GOOGLE_MAPS_URL,
  PHONE_DISPLAY,
  PHONE_TEL,
} from '@/lib/constants';

type Props = { t: TFunction };

export function ContactSection({ t }: Props) {
  return (
    <section
      id="contact"
      className="border-b border-zinc-800 bg-black py-16 md:py-20"
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-8 space-y-2 text-center md:mb-12">
          <h2 className="text-2xl font-semibold md:text-3xl">
            {t('contact.title')}
          </h2>
          <p className="text-sm text-zinc-400 md:text-base">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-4 rounded-2xl border border-zinc-800 bg-zinc-950/60 p-6 text-sm">
            <h3 className="text-sm font-semibold text-zinc-100">
              {t('contact.phoneLabel')}
            </h3>
            <p>
              <a
                href={`tel:${PHONE_TEL}`}
                className="text-zinc-100 hover:text-white"
              >
                {PHONE_DISPLAY}
              </a>
            </p>

            <h3 className="mt-4 text-sm font-semibold text-zinc-100">
              {t('contact.emailLabel')}
            </h3>
            <p>
              <a
                href={`mailto:${EMAIL}`}
                className="text-zinc-100 hover:text-white"
              >
                {EMAIL}
              </a>
            </p>

            <h3 className="mt-4 text-sm font-semibold text-zinc-100">
              {t('contact.addressLabel')}
            </h3>
            <p className="text-zinc-300">{ADDRESS_LINE}</p>

            <div className="mt-5">
              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full border border-zinc-700 px-4 py-2 text-xs font-medium text-zinc-100 hover:border-zinc-500 hover:bg-zinc-900"
              >
                {t('contact.mapCta')}
              </a>
            </div>
          </div>

          <div className="flex items-stretch">
            <div className="relative h-64 w-full overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 md:h-auto">
              {/* simple placeholder map-like gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900" />
              <div className="relative z-10 flex h-full flex-col items-center justify-center space-y-2 text-center text-xs text-zinc-300">
                <span className="text-[11px] uppercase tracking-[0.18em] text-zinc-500">
                  Prime Motors SRL
                </span>
                <p>{ADDRESS_LINE}</p>
                <p>Chișinău, Moldova</p>
                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 rounded-full bg-zinc-100 px-4 py-1.5 text-[11px] font-medium text-black hover:bg-white"
                >
                  {t('contact.mapCta')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
