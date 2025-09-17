'use client';

import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards';
import { useFeaturedProducts } from '@/hooks/useCategories';
import { isFeatureEnabled } from '@/lib/config';
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

  // Feature flag check
  const showInfiniteCards = isFeatureEnabled('enableInfiniteMovingCards');

  // Get featured products (first product from each category)
  const { data: featuredProducts } = useFeaturedProducts();

  // Animation timing to sync with H1 completion
  const h1AnimationDuration = 0.8;
  const h1AnimationDelay = 0.2;
  const totalH1AnimationTime = h1AnimationDuration + h1AnimationDelay;

  // Transform featured products into the format expected by InfiniteMovingCards
  const medicalSupplyItems =
    featuredProducts?.map((item) => ({
      image: item.product.image,
      alt: `${item.product.name} - ${item.category.name}`,
    })) || [];

  return (
    <section
      id={rootId}
      data-component={componentName}
      className={cn('w-full min-h-screen', className)}
    >
      <HeroBackground>
        <div className="w-full py-12">
          {/* Hero Content - Full Width */}
          <div className="w-full px-4 mb-16">
            <HeroContent />
          </div>

          {/* Infinite Moving Cards - Medical Supply Products */}
          {showInfiniteCards && (
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
          )}
        </div>
      </HeroBackground>
    </section>
  );
};
