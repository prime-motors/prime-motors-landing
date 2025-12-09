import type { Lang } from '@/lib/i18n';

type Props = {
  lang: Lang;
  onChange: (lang: Lang) => void;
};

const labels: { code: Lang; label: string }[] = [
  { code: 'ro', label: 'RO' },
  { code: 'ru', label: 'RU' },
  { code: 'en', label: 'EN' },
];

export function LanguageToggle({ lang, onChange }: Props) {
  return (
    <div className="inline-flex items-center rounded-full bg-zinc-900/70 p-1 text-xs">
      {labels.map((item) => (
        <button
          key={item.code}
          type="button"
          onClick={() => onChange(item.code)}
          className={`px-2 py-1 rounded-full transition
          ${
            lang === item.code
              ? 'bg-zinc-100 text-black'
              : 'text-zinc-400 hover:text-white'
          }`}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}
