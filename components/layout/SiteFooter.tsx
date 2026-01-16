import type { TFunction, Lang } from '@/lib/i18n';
import {
  EMAIL,
  COMPANY_PHONE_DISPLAY,
  PHONE_TEL,
  WORKING_HOURS,
} from '@/lib/constants';
import { translations } from '@/lib/i18n';
import { RIGHTS_YEARS } from '@/lib/constants';

type Props = {
  lang: Lang;
  t: TFunction;
};

export function SiteFooter({ lang, t }: Props) {
  const news = t('footer.newsItems') as unknown as {
    title: string;
    date: string;
  }[];
  const servicesList = translations[lang].footer.servicesList;

  return (
    <footer className="bg-[color:var(--surface-3)]">
      {/* soft internal fade */}
      <div className="bg-gradient-to-b from-white/3 to-transparent">
        <div className="mx-auto max-w-6xl px-4 py-10 md:py-14">
          <div className="grid gap-10 md:grid-cols-4 md:gap-8">
            {/* About */}
            <div className="space-y-3 md:col-span-1">
              <h3 className="text-sm font-semibold text-[color:var(--foreground)]">
                {t('footer.aboutTitle')}
              </h3>
              <p className="text-xs text-[color:var(--muted)]">
                {t('footer.aboutText')}
              </p>
            </div>

            {/* Services */}
            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-[color:var(--foreground)]">
                {t('footer.servicesTitle')}
              </h3>
              <ul className="space-y-1 text-xs text-[color:var(--muted)]">
                {servicesList.map((item, idx) => (
                  <li key={idx}>• {item}</li>
                ))}
              </ul>
            </div>

            {/* News */}
            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-[color:var(--foreground)]">
                {t('footer.newsTitle')}
              </h3>
              <ul className="space-y-2 text-xs text-[color:var(--muted)]">
                {Array.isArray(news) &&
                  news.map((item, idx) => (
                    <li key={idx}>
                      <p className="font-medium text-[color:var(--foreground)]/90">
                        {item.title}
                      </p>
                      <p className="text-[11px] text-[color:var(--muted)]/80">
                        {item.date}
                      </p>
                    </li>
                  ))}
              </ul>
            </div>

            {/* Working hours + contacts */}
            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-[color:var(--foreground)]">
                {t('footer.scheduleTitle')}
              </h3>

              <div className="space-y-1 text-xs text-[color:var(--muted)]">
                <p>
                  <span className="text-[color:var(--foreground)]/85">
                    {t('footer.monFriLabel')}:
                  </span>{' '}
                  {WORKING_HOURS.monFri}
                </p>
                <p>
                  <span className="text-[color:var(--foreground)]/85">
                    {t('footer.satLabel')}:
                  </span>{' '}
                  {WORKING_HOURS.sat}
                </p>
                <p>
                  <span className="text-[color:var(--foreground)]/85">
                    {t('footer.sunLabel')}:
                  </span>{' '}
                  {t('footer.sunClosed')}
                </p>
              </div>

              <div className="mt-3 space-y-1 text-xs text-[color:var(--muted)]">
                <p>
                  <span className="text-[color:var(--foreground)]/85">
                    {t('footer.phoneLabel')}:
                  </span>{' '}
                  <a
                    href={`tel:${PHONE_TEL}`}
                    className="text-[color:var(--foreground)]/90 hover:text-[color:var(--foreground)] underline-offset-4 hover:underline transition"
                  >
                    {COMPANY_PHONE_DISPLAY}
                  </a>
                </p>

                <p>
                  <span className="text-[color:var(--foreground)]/85">
                    {t('footer.emailLabel')}:
                  </span>{' '}
                  <a
                    href={`mailto:${EMAIL}`}
                    className="text-[color:var(--foreground)]/90 hover:text-[color:var(--foreground)] underline-offset-4 hover:underline transition"
                  >
                    {EMAIL}
                  </a>
                </p>

                <p>
                  <span className="text-[color:var(--foreground)]/85">
                    {t('footer.addressLabel')}:
                  </span>{' '}
                  {t('common.addressLine')}
                </p>
              </div>
            </div>
          </div>

          {/* divider — matches the old version */}
          <div className="mt-10 h-px w-full bg-[color:var(--border)]" />

          {/* copyright */}
          <div className="mt-6 text-center text-[11px] text-[color:var(--muted)]/80">
            © {RIGHTS_YEARS}, Prime Motors. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
