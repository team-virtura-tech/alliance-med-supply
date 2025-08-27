import { cn } from '@/lib/utils';
import Link from 'next/link';
import type { CSSProperties } from 'react';

export type SocialLink = { label: string; href: string };

export type HeroOverlayProps = {
  id?: string;
  className?: string;
  /** Provide exact lines to control the 3-line stack */
  titleLines: string[];
  cta?: { label: string; href?: string; onClick?: () => void };
  socials?: SocialLink[];
  /** Overlap of the headline into the centered capsule (vw at md+) */
  overlapVW?: number; // default 6
  /** Controls the line length; keep ~13ch for the reference look */
  maxLineWidthCH?: number; // default 13
};

/**
 * Foreground content layer: left = stacked headline + CTA, right = vertical socials.
 * Designed to overlap the centered capsule from <HeroBackdrop />.
 */
export const HeroOverlay = ({
  id,
  className,
  titleLines,
  cta,
  socials = [],
  overlapVW = 6,
  maxLineWidthCH = 13,
}: HeroOverlayProps) => {
  const componentName = 'HeroOverlay';
  const rootId = id ?? componentName;

  const vars = {
    ['--overlap' as string]: `${overlapVW}vw`,
    ['--line-ch' as string]: `${maxLineWidthCH}ch`,
  } as CSSProperties;

  return (
    <section
      id={rootId}
      data-component={componentName}
      style={vars}
      className={cn(
        'relative z-10 mx-auto min-h-screen w-full',
        'px-4 md:px-10',
        // content grid (text + right rail placeholder)
        'grid grid-cols-1 md:grid-cols-[1fr_auto] items-center gap-10 md:gap-8',
        className
      )}
      aria-labelledby="hero-heading"
    >
      {/* Left: headline + CTA (overlaps the capsule) */}
      <div className="relative">
        <h1
          id="hero-heading"
          className={cn(
            'font-semibold tracking-tight text-slate-900',
            'text-4xl leading-[1.05] md:text-[64px] md:leading-[1.05]',
            'max-w-[var(--line-ch)] md:ml-[var(--overlap)]'
          )}
        >
          {titleLines.map((line, i) => (
            <span key={i} className="block">
              {line}
            </span>
          ))}
        </h1>

        {cta ? (
          cta.href ? (
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
          )
        ) : null}
      </div>

      {/* Right: socials rail (viewport-centered within container) */}
      <div
        className={cn(
          'relative hidden md:block text-sm text-slate-400 select-none'
        )}
        aria-label="Social links"
      >
        <div className="pointer-events-none absolute right-6 top-1/2 -translate-y-1/2 flex flex-col items-end gap-4">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              className="pointer-events-auto transition-colors hover:text-[#0A2A5E]"
              aria-label={`Visit our ${s.label} page`}
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>

      {/* Mobile socials bar */}
      {socials.length > 0 && (
        <div className="md:hidden col-span-full mt-8 flex justify-center gap-6 text-sm text-slate-400">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              className="transition-colors hover:text-[#0A2A5E]"
              aria-label={`Visit our ${s.label} page`}
            >
              {s.label}
            </a>
          ))}
        </div>
      )}
    </section>
  );
};
