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
        'relative isolate',
        // grid only for text + socials; the image capsule is centered absolutely
        'grid grid-cols-1 md:grid-cols-[1fr_auto] items-center',
        'px-4 md:px-10 py-14 md:py-28 bg-white',
        className
      )}
    >
      {/* CENTERED BACKDROP — Capsule with image (absolute) */}
      <div
        aria-hidden
        className={cn(
          'pointer-events-none absolute inset-0 flex justify-center',
          'md:justify-center'
        )}
      >
        <div
          className={cn(
            'relative overflow-hidden',
            'h-[460px] w-[320px] md:h-[640px] md:w-[480px]',
            'rounded-[150px] md:rounded-[210px]',
            'bg-gradient-to-b from-sky-50 via-sky-100 to-sky-200/90',
            'ring-1 ring-sky-100/80 shadow-[0_18px_50px_rgba(2,132,199,0.15)]'
          )}
        >
          <Image
            src="/images/landing-hero.jpg"
            alt="Medical equipment - Alliance Medical Supply & Rental"
            fill
            priority
            sizes="(max-width: 768px) 80vw, 40vw"
            className={cn(
              'object-contain object-center select-none',
              'drop-shadow-[0_14px_20px_rgba(0,0,0,0.25)]'
            )}
          />
        </div>
      </div>

      {/* LEFT — Headline & CTA (overlapping the centered capsule) */}
      <div className="relative z-10">
        <h1
          className={cn(
            'font-semibold text-slate-900 tracking-tight',
            'text-4xl leading-[1.05] md:text-[64px] md:leading-[1.05]',
            // Narrow line length and push toward center so it overlaps the capsule
            'max-w-[13ch] md:ml-[6vw]'
          )}
        >
          Reliable Medical Equipment,
          <br />
          Rental &amp; Supply Solutions,
          <br />
          Anytime You Need Them
        </h1>

        <button
          className={cn(
            'mt-7 inline-block rounded-md bg-[#0A2A5E] px-6 py-2 text-white text-sm font-medium',
            'shadow-sm transition-colors hover:bg-[#08204a] focus-visible:outline-none',
            'focus-visible:ring-2 focus-visible:ring-[#0A2A5E] focus-visible:ring-offset-2'
          )}
        >
          Explore
        </button>
      </div>

      {/* RIGHT — Vertical socials rail (centered on right) */}
      <div
        className={cn(
          'relative hidden md:block text-slate-400 text-sm select-none'
        )}
        aria-label="Social links"
      >
        <div className="pointer-events-none absolute right-6 top-1/2 -translate-y-1/2 flex flex-col gap-4 items-end">
          {SOCIALS.map((s) => (
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

      {/* MOBILE — Socials bar */}
      <div className="md:hidden flex justify-center gap-6 text-slate-400 text-sm mt-10">
        {SOCIALS.map((s) => (
          <a
            key={s.label}
            href={s.href}
            aria-label={`Visit our ${s.label} page`}
            className="transition-colors hover:text-[#0A2A5E]"
          >
            {s.label}
          </a>
        ))}
      </div>
    </section>
  );
};
