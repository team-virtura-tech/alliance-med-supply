import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';

export type HeroContentProps = {
  id?: string;
  className?: string;
};

export const HeroContent = ({ id, className }: HeroContentProps) => {
  const componentName = 'HeroContent';
  const rootId = id ?? componentName;

  return (
    <section
      id={rootId}
      data-component={componentName}
      className={cn(
        'flex flex-col items-center text-center px-4 py-12 md:py-16 lg:py-20',
        className
      )}
    >
      {/* Trust Badge */}
      <Badge
        variant="secondary"
        className="mb-6 px-4 py-2 text-sm font-medium bg-gray-100 text-gray-700 rounded-full"
      >
        <Shield className="mr-2 h-4 w-4" />
        Trusted by 20,000+ Happy Learners
      </Badge>

      {/* Main Headline */}
      <motion.h1
        className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl max-w-4xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: [0.25, 0.25, 0, 1],
          delay: 0.2,
        }}
      >
        Quality Medical Equipments for
        <br />
        Bay Area Healthcare
      </motion.h1>

      {/* Description */}
      <div className="mt-6 max-w-2xl">
        <TextGenerateEffect
          words="Providing premium medical equipment and supplies for healthcare professionals across the Bay Area. Trusted quality, reliable service, and innovative solutions for better patient care."
          className="text-lg text-gray-600 md:text-xl font-normal"
          duration={0.8}
          filter={false}
        />
      </div>

      {/* CTA Buttons */}
      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:gap-6">
        <Button
          size="lg"
          className="px-8 py-3 text-base font-semibold bg-black text-white hover:bg-gray-800 rounded-full"
        >
          Start Learning
        </Button>
        <Button
          variant="outline"
          size="lg"
          className="px-8 py-3 text-base font-semibold border-2 border-gray-300 text-gray-700 hover:bg-gray-50 rounded-full"
        >
          Explore Courses
        </Button>
      </div>
    </section>
  );
};
