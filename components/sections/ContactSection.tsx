import type { TFunction } from '@/lib/i18n';
import {
  EMAIL,
  GOOGLE_MAPS_URL,
  COMPANY_PHONE_DISPLAY,
  PHONE_TEL,
} from '@/lib/constants';

type Props = { t: TFunction };

export function ContactSection({ t }: Props) {
  return (
    <section
      id="contact"
      className="
        scroll-mt-55 md:scroll-mt-24
        bg-[color:var(--surface-2)]
        py-16 md:py-20
      "
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-8 space-y-2 text-center md:mb-12">
          <h2 className="text-2xl font-semibold md:text-3xl text-[color:var(--foreground)]">
            {t('contact.title')}
          </h2>
          <p className="text-sm md:text-base text-[color:var(--muted)]">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Info card */}
          <div className="space-y-4 rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-6 text-sm">
            <h3 className="text-sm font-semibold text-[color:var(--foreground)]">
              {t('contact.phoneLabel')}
            </h3>
            <p>
              <a
                href={`tel:${PHONE_TEL}`}
                className="text-[color:var(--foreground)]/90 hover:text-[color:var(--foreground)] underline-offset-4 hover:underline transition"
              >
                {COMPANY_PHONE_DISPLAY}
              </a>
            </p>

            <h3 className="mt-4 text-sm font-semibold text-[color:var(--foreground)]">
              {t('contact.emailLabel')}
            </h3>
            <p>
              <a
                href={`mailto:${EMAIL}`}
                className="text-[color:var(--foreground)]/90 hover:text-[color:var(--foreground)] underline-offset-4 hover:underline transition"
              >
                {EMAIL}
              </a>
            </p>

            <h3 className="mt-4 text-sm font-semibold text-[color:var(--foreground)]">
              {t('contact.addressLabel')}
            </h3>
            <p className="text-[color:var(--muted)]">
              {t('common.addressLine')}
            </p>

            <div className="mt-5">
              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex items-center
                  rounded-full
                  border border-[color:var(--border)]
                  bg-white/5
                  px-4 py-2
                  text-xs font-medium
                  text-[color:var(--foreground)]/90
                  transition
                  hover:bg-white/10
                "
              >
                {t('contact.mapCta')}
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="relative h-64 w-full overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] md:h-auto">
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
    </section>
  );
}
