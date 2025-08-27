import { cn } from '@/lib/utils';
import Image from 'next/image';
import type { CSSProperties } from 'react';

export type HeroBackdropProps = {
  id?: string;
  className?: string;
  /** next/image src */
  src: string;
  alt: string;
  priority?: boolean;
  sizes?: string;
  /** Gradient tokens (Tailwind classes) */
  gradientFrom?: string; // e.g., 'from-sky-50'
  gradientVia?: string; // e.g., 'via-sky-100'
  gradientTo?: string; // e.g., 'to-sky-200/90'
};

/**
 * Full-bleed visual layer that centers a tall "capsule" with an image inside.
 * Renders behind content; pair with <HeroOverlay />.
 */
export const HeroBackdrop = ({
  id,
  className,
  src,
  alt,
  priority,
  sizes = '(max-width: 768px) 80vw, 40vw',
  gradientFrom = 'from-sky-50',
  gradientVia = 'via-sky-100',
  gradientTo = 'to-sky-200/90',
}: HeroBackdropProps) => {
  const componentName = 'HeroBackdrop';
  const rootId = id ?? componentName;

  // Viewport-tied capsule sizing (keeps center at 50vw consistently)
  const vars = {
    ['--capsule-h' as string]: 'clamp(420px, 62vh, 680px)',
    ['--capsule-w' as string]: 'calc(var(--capsule-h) * 0.72)',
  } as CSSProperties;

  return (
    <div
      id={rootId}
      data-component={componentName}
      aria-hidden
      style={vars}
      className={cn(
        // absolute full-bleed, centered container
        'absolute inset-0 z-0 pointer-events-none flex items-center justify-center',
        className
      )}
    >
      <div
        className={cn(
          'relative overflow-hidden',
          'h-[var(--capsule-h)] w-[var(--capsule-w)]',
          'rounded-[200px]',
          'bg-gradient-to-b',
          gradientFrom,
          gradientVia,
          gradientTo,
          'ring-1 ring-sky-100/80 shadow-[0_18px_50px_rgba(2,132,199,0.15)]'
        )}
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className="select-none object-contain object-center drop-shadow-[0_14px_20px_rgba(0,0,0,0.25)]"
        />
      </div>
    </div>
  );
};
