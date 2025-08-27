import { cn } from '@/lib/utils';
import { HeroFigure } from './HeroFigure';
import { HeroSocials } from './HeroSocials';
import { HeroText } from './HeroText';

export type LandingHeroProps = { id?: string; className?: string };

export function LandingHero({ id, className }: LandingHeroProps) {
  const componentName = 'LandingHero';
  const rootId = id ?? componentName;

  return (
    <section
      id={rootId}
      data-component={componentName}
      className={cn(
        'relative w-full min-h-screen bg-white',
        'px-4 md:px-10 py-12 md:py-16',
        className
      )}
    >
      {/* Grid: Desktop => [left text | center image | right links]; Mobile => stacked */}
      <div
        className={cn(
          'grid min-h-[calc(100vh- theme(space.12)- theme(space.16))]',
          'grid-cols-1 items-center gap-10',
          'md:grid-cols-[1fr_auto_1fr]'
        )}
      >
        {/* Text (Left on md+, Top on mobile) */}
        <div className="order-1 md:order-none md:col-start-1">
          <HeroText
            titleLines={[
              'Reliable Medical Equipment,',
              'Rental & Supply Solutions,',
              'Anytime You Need Them',
            ]}
            cta={{ label: 'Explore', href: '#' }}
          />
        </div>

        {/* Image (Center) */}
        <div className="order-2 md:order-none md:col-start-2 justify-self-center">
          <HeroFigure
            src="/images/landing-hero.jpg"
            alt="Medical equipment - Alliance Medical Supply & Rental"
            priority
          />
        </div>

        {/* Links (Right on md+, Bottom on mobile) */}
        <div className="order-3 md:order-none md:col-start-3 md:justify-self-end">
          <HeroSocials
            socials={[
              { label: 'Facebook', href: '#' },
              { label: 'Twitter', href: '#' },
              { label: 'YouTube', href: '#' },
              { label: 'Instagram', href: '#' },
              { label: 'Pinterest', href: '#' },
            ]}
          />
        </div>
      </div>
    </section>
  );
}
