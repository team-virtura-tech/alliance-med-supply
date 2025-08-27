import { cn } from '@/lib/utils';
import Image from 'next/image';

export type LandingHeroProps = {
  className?: string;
  id?: string;
};

const SOCIALS = [
  { label: 'Facebook', href: '#' },
  { label: 'Twitter', href: '#' },
  { label: 'YouTube', href: '#' },
  { label: 'Instagram', href: '#' },
  { label: 'Pinterest', href: '#' },
];

export const LandingHero = ({ className, id }: LandingHeroProps) => {
  const componentName = 'LandingHero';
  const rootId = id ?? componentName;
  return (
    <section
      id={rootId}
      data-component={componentName}
      className={cn(
        'relative flex flex-col-reverse items-center justify-between gap-8 py-10 md:flex-row md:gap-0 md:py-20',
        className
      )}
    >
      {/* Left: Headline and CTA */}
      <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left px-4 md:px-0">
        <h1 className="text-3xl font-bold leading-tight md:text-5xl md:leading-tight">
          Molding Clay
          <br />
          Into Elegant,
          <br />
          Timeless Art
        </h1>
        <button className="mt-6 rounded bg-primary px-6 py-2 text-base font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
          Explore
        </button>
      </div>

      {/* Center: Vase image with decorative background */}
      <div className="relative flex-1 flex justify-center items-center min-w-[220px] md:min-w-[340px]">
        <div className="relative h-56 w-40 md:h-96 md:w-72 rounded-[40%] bg-gradient-to-b from-[#e6eaf6] to-[#f8fafc] flex items-center justify-center shadow-lg">
          <Image
            src="/vase.png"
            alt="Blue vase with flower"
            width={240}
            height={384}
            className="object-contain z-10"
            priority
            sizes="(max-width: 768px) 60vw, 30vw"
          />
          {/* Decorative flower overlay (optional, can be improved with SVG/absolute if needed) */}
        </div>
      </div>

      {/* Right: Social links */}
      <ul className="hidden md:flex flex-col gap-2 text-muted-foreground text-sm min-w-[100px] items-end pr-4 select-none">
        {SOCIALS.map((s) => (
          <li key={s.label}>
            <a
              href={s.href}
              tabIndex={-1}
              aria-label={s.label}
              className="hover:underline cursor-default"
            >
              {s.label}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};
