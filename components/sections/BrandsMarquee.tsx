import Image from 'next/image';
import type { TFunction } from '@/lib/i18n';

type Brand = {
  name: string;
  src: string;
};

type Props = {
  t: TFunction;
};

const BRANDS: Brand[] = [
  { name: 'Audi', src: '/brands/audi.svg' },
  { name: 'BMW', src: '/brands/bmw.svg' },
  { name: 'Ford', src: '/brands/ford.svg' },
  { name: 'Honda', src: '/brands/honda.svg' },
  { name: 'Hyundai', src: '/brands/hyundai.svg' },
  { name: 'Kia', src: '/brands/kia.svg' },
  { name: 'Lexus', src: '/brands/lexus.svg' },
  { name: 'Mercedes-Benz', src: '/brands/mercedes.svg' },
  { name: 'Porsche', src: '/brands/porsche.svg' },
  { name: 'Tesla', src: '/brands/tesla.svg' },
  { name: 'Toyota', src: '/brands/toyota.svg' },
  { name: 'Volkswagen', src: '/brands/volkswagen.svg' },
];

export function BrandsMarquee({ t }: Props) {
  return (
    <section className="border-b border-zinc-900 bg-black">
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        {/* HEADER */}
        <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div className="space-y-1">
            <p className="text-[11px] uppercase tracking-[0.26em] text-zinc-500">
              {t('brands.eyebrow')}
            </p>
            <h3 className="text-lg font-semibold text-zinc-50 md:text-xl">
              {t('brands.title')}
            </h3>
          </div>

          <p className="max-w-xl text-sm text-zinc-400">
            {t('brands.subtitle')}
          </p>
        </div>

        {/* MARQUEE */}
        <div className="relative mt-8 overflow-hidden rounded-2xl border border-zinc-900 bg-zinc-950/60">
          {/* edge fades */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-black to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-black to-transparent" />

          <div className="py-6">
            <div className="marquee group">
              {/* FIRST GROUP */}
              <div className="marquee__group">
                {BRANDS.map((brand) => (
                  <div
                    key={brand.name}
                    className="relative h-10 w-20 shrink-0"
                    title={brand.name}
                  >
                    <Image
                      src={brand.src}
                      alt={brand.name}
                      fill
                      unoptimized
                      sizes="80px"
                      className="object-contain invert opacity-80 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
                    />
                  </div>
                ))}
              </div>

              {/* DUPLICATE GROUP */}
              <div className="marquee__group" aria-hidden="true">
                {BRANDS.map((brand) => (
                  <div
                    key={`${brand.name}-dup`}
                    className="relative h-10 w-20 shrink-0"
                    title={brand.name}
                  >
                    <Image
                      src={brand.src}
                      alt={brand.name}
                      fill
                      unoptimized
                      sizes="80px"
                      className="object-contain invert opacity-80 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <p className="mt-4 text-xs text-zinc-500">{t('brands.note')}</p>
      </div>

      {/* STYLES */}
      <style jsx>{`
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-100%);
          }
        }

        .marquee {
          display: flex;
          width: max-content;
          overflow: hidden;
        }

        .marquee__group {
          display: flex;
          align-items: center;
          gap: 24px;
          padding-right: 24px;
          animation: marquee 28s linear infinite;
          will-change: transform;
        }

        /* Pause on hover */
        .group:hover .marquee__group {
          animation-play-state: paused;
        }

        @media (prefers-reduced-motion: reduce) {
          .marquee__group {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
