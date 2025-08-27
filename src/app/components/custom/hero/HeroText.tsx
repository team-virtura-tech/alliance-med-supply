import { cn } from '@/lib/utils';
import Link from 'next/link';

export type HeroTextProps = {
  className?: string;
  titleLines: string[];
  cta?: { label: string; href?: string; onClick?: () => void };
};

export function HeroText({ className, titleLines, cta }: HeroTextProps) {
  return (
    <div className={cn('text-left', className)}>
      <h1
        className={cn(
          'font-semibold text-slate-900 tracking-tight',
          'text-4xl leading-[1.05] md:text-[56px] md:leading-[1.05]',
          'max-w-[20ch]'
        )}
      >
        {titleLines.map((l, i) => (
          <span key={i} className="block">
            {l}
          </span>
        ))}
      </h1>

      {cta &&
        (cta.href ? (
          <Link
            href={cta.href}
            className={cn(
              'mt-7 inline-block rounded-md bg-[#0A2A5E] px-6 py-2 text-sm font-medium text-white',
              'shadow-sm transition-colors hover:bg-[#08204a] focus-visible:outline-none',
              'focus-visible:ring-2 focus-visible:ring-[#0A2A5E] focus-visible:ring-offset-2'
            )}
          >
            {cta.label}
          </Link>
        ) : (
          <button
            onClick={cta.onClick}
            className={cn(
              'mt-7 inline-block rounded-md bg-[#0A2A5E] px-6 py-2 text-sm font-medium text-white',
              'shadow-sm transition-colors hover:bg-[#08204a] focus-visible:outline-none',
              'focus-visible:ring-2 focus-visible:ring-[#0A2A5E] focus-visible:ring-offset-2'
            )}
          >
            {cta.label}
          </button>
        ))}
    </div>
  );
}
