import type { TFunction } from '@/lib/i18n';

type Props = { t: TFunction };

export function AboutSection({ t }: Props) {
  return (
    <section
      id="about"
      className="
        scroll-mt-55 md:scroll-mt-24
        bg-[color:var(--surface-2)]
        py-16 md:py-20
        border-b border-[color:var(--border)]
      "
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-10 md:grid-cols-[1.2fr,1fr] md:items-center">
          {/* Text */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold md:text-3xl text-[color:var(--foreground)]">
              {t('about.title')}
            </h2>

            <p className="text-sm md:text-base text-[color:var(--muted)]">
              {t('about.text')}
            </p>
          </div>

          {/* Feature box */}
          <div
            className="
              space-y-3
              rounded-2xl
              border border-[color:var(--border)]
              bg-[color:var(--surface)]
              p-5
              text-xs
              text-[color:var(--muted)]
            "
          >
            <p>✓ {t('about.bullet1')}</p>
            <p>✓ {t('about.bullet2')}</p>
            <p>✓ {t('about.bullet3')}</p>
            <p>✓ {t('about.bullet4')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
