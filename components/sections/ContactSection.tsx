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
            <div className="relative h-64 w-full overflow-hidden rounded-2xl border border-zinc-800 md:h-auto">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2721.42525280391!2d28.902128577017383!3d46.99262247114009!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c97b0039ece0f5%3A0x6024d44ee7e32b46!2sPrime%20Motors%20SRL!5e0!3m2!1sen!2s!4v1765138236049!5m2!1sen!2s"
                className="absolute inset-0 h-full w-full border-0"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
