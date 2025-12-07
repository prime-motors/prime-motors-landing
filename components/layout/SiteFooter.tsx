import type { TFunction } from '@/lib/i18n';
import {
  ADDRESS_LINE,
  EMAIL,
  PHONE_DISPLAY,
  PHONE_TEL,
  WORKING_HOURS,
} from '@/lib/constants';

type Props = {
  t: TFunction;
};

export function SiteFooter({ t }: Props) {
  const news = t('footer.newsItems') as unknown as {
    title: string;
    date: string;
  }[];

  return (
    <footer className="mt-16 border-t border-zinc-800 bg-gradient-to-b from-black to-zinc-950">
      <div className="mx-auto max-w-6xl px-4 py-10 md:py-14">
        <div className="grid gap-10 md:grid-cols-4 md:gap-8">
          {/* About */}
          <div className="space-y-3 md:col-span-1">
            <h3 className="text-sm font-semibold">{t('footer.aboutTitle')}</h3>
            <p className="text-xs text-zinc-400">{t('footer.aboutText')}</p>
          </div>

          {/* Services quick list */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold">
              {t('footer.servicesTitle')}
            </h3>
            <ul className="space-y-1 text-xs text-zinc-400">
              <li>• Deservire tehnică și reparații</li>
              <li>• Sisteme hibride și electrice</li>
              <li>• Diagnosticare computerizată</li>
              <li>• Sistem de frânare</li>
              <li>• Electricitate auto</li>
              <li>• Tren de rulare</li>
            </ul>
          </div>

          {/* News */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold">{t('footer.newsTitle')}</h3>
            <ul className="space-y-2 text-xs text-zinc-400">
              {Array.isArray(news) &&
                news.map((item, idx) => (
                  <li key={idx}>
                    <p className="font-medium text-zinc-300">{item.title}</p>
                    <p className="text-[11px] text-zinc-500">{item.date}</p>
                  </li>
                ))}
            </ul>
          </div>

          {/* Schedule + contacts */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold">
              {t('footer.scheduleTitle')}
            </h3>
            <div className="space-y-1 text-xs text-zinc-400">
              <p>
                <span className="text-zinc-300">
                  {t('footer.monFriLabel')}:
                </span>{' '}
                {WORKING_HOURS.monFri}
              </p>
              <p>
                <span className="text-zinc-300">{t('footer.satLabel')}:</span>{' '}
                {WORKING_HOURS.sat}
              </p>
              <p>
                <span className="text-zinc-300">{t('footer.sunLabel')}:</span>{' '}
                {WORKING_HOURS.sun}
              </p>
            </div>

            <div className="mt-3 space-y-1 text-xs text-zinc-400">
              <p>
                <span className="text-zinc-300">Tel:</span>{' '}
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="text-zinc-200 hover:text-white"
                >
                  {PHONE_DISPLAY}
                </a>
              </p>
              <p>
                <span className="text-zinc-300">Email:</span>{' '}
                <a
                  href={`mailto:${EMAIL}`}
                  className="text-zinc-200 hover:text-white"
                >
                  {EMAIL}
                </a>
              </p>
              <p>
                <span className="text-zinc-300">Adresă:</span>{' '}
                <span>{ADDRESS_LINE}</span>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-zinc-800 pt-4 text-center text-[11px] text-zinc-500">
          {t('footer.rights')}
        </div>
      </div>
    </footer>
  );
}
