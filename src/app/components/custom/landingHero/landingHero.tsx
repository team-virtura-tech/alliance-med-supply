import { cn } from '@/lib/utils';
import { HeroBackdrop } from './HeroBackdrop';
import { HeroOverlay } from './HeroOverlay';

export type LandingHeroProps = {
  id?: string;
  className?: string;
};

export const LandingHero = ({ id, className }: LandingHeroProps) => {
  const componentName = 'LandingHero';
  const rootId = id ?? componentName;

  return (
    <section
      id={rootId}
      data-component={componentName}
      className={cn(
        'relative min-h-screen w-full overflow-hidden bg-white',
        className
      )}
    >
      {/* Layer 1 — centered visual capsule */}
      <HeroBackdrop
        src="/images/landing-hero.jpg"
        alt="Medical equipment - Alliance Medical Supply & Rental"
        priority
      />

      {/* Layer 2 — foreground content with overlap + socials */}
      <HeroOverlay
        titleLines={[
          'Reliable Medical Equipment,',
          'Rental & Supply Solutions,',
          'Anytime You Need Them',
        ]}
        cta={{ label: 'Explore', href: '#' }}
        socials={[
          { label: 'Facebook', href: '#' },
          { label: 'Twitter', href: '#' },
          { label: 'YouTube', href: '#' },
          { label: 'Instagram', href: '#' },
          { label: 'Pinterest', href: '#' },
        ]}
        overlapVW={6}
        maxLineWidthCH={13}
      />
    </section>
  );
};
