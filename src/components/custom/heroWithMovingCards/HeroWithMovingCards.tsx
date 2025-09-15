import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { HeroBackground } from './HeroBackground';
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

  // Animation timing to sync with H1 completion
  const h1AnimationDuration = 0.8;
  const h1AnimationDelay = 0.2;
  const totalH1AnimationTime = h1AnimationDuration + h1AnimationDelay;

  // Medical supply products for the moving cards with images
  const medicalSupplyItems = [
    {
      name: 'Surgical Instruments',
      title: 'Professional Grade Equipment',
      image: '/images/knee-cpm-machine.png',
      alt: 'High-quality surgical instruments for medical procedures',
      quote:
        'Premium quality surgical instruments with precision engineering for critical procedures.',
    },
    {
      name: 'Diagnostic Tools',
      title: 'Precision Healthcare Technology',
      image: '/images/diagnostic-equipment.jpg',
      alt: 'Advanced diagnostic equipment for accurate medical analysis',
      quote:
        'Advanced diagnostic equipment ensuring accurate results and reliable performance.',
    },
    {
      name: 'Patient Care Supplies',
      title: 'Comprehensive Health Solutions',
      image: '/images/patient-care.jpg',
      alt: 'Complete patient care supplies and mobility aids',
      quote:
        'Complete patient care solutions including mobility aids and monitoring devices.',
    },
    {
      name: 'Medical Furniture',
      title: 'Healthcare Infrastructure',
      image: '/images/medical-furniture.jpg',
      alt: 'State-of-the-art hospital furniture and equipment',
      quote:
        'State-of-the-art hospital furniture designed for durability and patient comfort.',
    },
    {
      name: 'Safety Equipment',
      title: 'Protection & Compliance',
      image: '/images/safety-equipment.jpg',
      alt: 'Essential safety equipment and protective gear',
      quote:
        'Essential safety equipment and protective gear meeting industry standards.',
    },
    {
      name: 'Rehabilitation Gear',
      title: 'Recovery & Wellness',
      image: '/images/rehabilitation-equipment.jpg',
      alt: 'Advanced rehabilitation equipment for patient recovery',
      quote:
        'Advanced rehabilitation equipment supporting patient recovery programs.',
    },
  ];

  return (
    <section
      id={rootId}
      data-component={componentName}
      className={cn('w-full min-h-screen', className)}
    >
      <HeroBackground>
        <div className="w-full py-12">
          {/* Hero Content - Full Width */}
          <div className="container mx-auto px-4 mb-16">
            <HeroContent />
          </div>

          {/* Infinite Moving Cards - Medical Supply Products */}
          <motion.div
            className="w-full"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.25, 0.25, 0, 1],
              delay: totalH1AnimationTime + 0.7,
            }}
          >
            <InfiniteMovingCards
              items={medicalSupplyItems}
              direction="left"
              speed="slow"
              pauseOnHover={true}
              variant="image"
              className="mb-8"
            />
          </motion.div>
        </div>
      </HeroBackground>
    </section>
  );
};
