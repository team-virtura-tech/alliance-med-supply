import { cn } from '@/lib/utils';
import Image from 'next/image';
import type { CSSProperties } from 'react';

export type HeroFigureProps = {
  className?: string;
  src: string;
  alt: string;
  priority?: boolean;
  sizes?: string;
};

/** Centered capsule image in normal flow (no overlap). */
export function HeroFigure({
  className,
  src,
  alt,
  priority,
  sizes = '(max-width: 768px) 90vw, 38vw',
}: HeroFigureProps) {
  const vars: CSSProperties = {
    ['--cap-h' as string]: 'clamp(420px, 62vh, 680px)',
    ['--cap-w' as string]: 'calc(var(--cap-h) * 0.72)',
  };

  return (
    <div
      style={vars}
      className={cn(
        'relative h-[var(--cap-h)] w-[var(--cap-w)]',
        'overflow-hidden rounded-[200px]',
        'bg-gradient-to-b from-sky-50 via-sky-100 to-sky-200/90',
        'ring-1 ring-sky-100/80 shadow-[0_18px_50px_rgba(2,132,199,0.15)]',
        className
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
  );
}
