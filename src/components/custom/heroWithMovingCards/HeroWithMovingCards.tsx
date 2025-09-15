import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards';
import { cn } from '@/lib/utils';
import { HeroContent } from './HeroContent';

export type HeroWithMovingCardsProps = {
  id?: string;
  className?: string;
};

export const HeroWithMovingCards = ({
  id,
  className,
}: HeroWithMovingCardsProps) => {
  const componentName = 'HeroWithMovingCards';
  const rootId = id ?? componentName;

  // Medical supply testimonials/features for the moving cards
  const medicalSupplyItems = [
    {
      quote:
        'Premium quality surgical instruments with precision engineering for critical procedures. Trusted by medical professionals worldwide.',
      name: 'Surgical Instruments',
      title: 'Professional Grade Equipment',
    },
    {
      quote:
        'Advanced diagnostic equipment ensuring accurate results and reliable performance in clinical environments.',
      name: 'Diagnostic Tools',
      title: 'Precision Healthcare Technology',
    },
    {
      quote:
        'Complete patient care solutions including mobility aids, monitoring devices, and comfort accessories.',
      name: 'Patient Care Supplies',
      title: 'Comprehensive Health Solutions',
    },
    {
      quote:
        'State-of-the-art hospital furniture designed for durability, functionality, and patient comfort.',
      name: 'Medical Furniture',
      title: 'Healthcare Infrastructure',
    },
    {
      quote:
        'Essential safety equipment and protective gear meeting the highest industry standards and certifications.',
      name: 'Safety Equipment',
      title: 'Protection & Compliance',
    },
    {
      quote:
        'Advanced rehabilitation equipment supporting patient recovery and physical therapy programs.',
      name: 'Rehabilitation Gear',
      title: 'Recovery & Wellness',
    },
  ];

  return (
    <section
      id={rootId}
      data-component={componentName}
      className={cn(
        'w-full min-h-screen bg-gradient-to-br from-slate-50 to-gray-100',
        className
      )}
    >
      <div className="container mx-auto px-4 py-12">
        {/* Hero Content - Full Width */}
        <div className="mb-16">
          <HeroContent />
        </div>

        {/* Infinite Moving Cards - Medical Supply Features */}
        <div className="w-full">
          <InfiniteMovingCards
            items={medicalSupplyItems}
            direction="left"
            speed="slow"
            pauseOnHover={true}
            className="mb-8"
          />
        </div>
      </div>
    </section>
  );
};
