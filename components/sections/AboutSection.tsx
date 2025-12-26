import type { TFunction } from '@/lib/i18n';

type Props = { t: TFunction };

export function AboutSection({ t }: Props) {
  return (
    <section
      id="about"
      className="scroll-mt-55 md:scroll-mt-24 border-b border-zinc-800 bg-black py-16 md:py-20"
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-10 md:grid-cols-[1.2fr,1fr] md:items-center">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold md:text-3xl">
              {t('about.title')}
            </h2>
            <p className="text-sm text-zinc-300 md:text-base">
              {t('about.text')}
            </p>
          </div>

          <div className="space-y-4 rounded-2xl border border-zinc-800 bg-zinc-950/60 p-5 text-xs text-zinc-300">
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
