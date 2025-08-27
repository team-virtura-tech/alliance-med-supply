'use client';

import { cn } from '@/lib/utils';
import { motion, useReducedMotion } from 'framer-motion';
import Image from 'next/image';

export type HeroLandingFigureProps = {
  id?: string;
  src: string;
  alt: string;
  priority?: boolean;
  sizes?: string;
  roundedRadiusToken?: string;
  gradientScrim?: string;
  className?: string;
};

export const HeroLandingFigure = ({
  id,
  src,
  alt,
  priority = true,
  sizes = '100vw',
  roundedRadiusToken = 'rounded-3xl',
  gradientScrim = 'bg-gradient-to-t from-black/60 via-black/20 to-black/30',
  className,
}: HeroLandingFigureProps) => {
  const shouldReduceMotion = useReducedMotion();
  const componentName = 'HeroLandingFigure';
  const rootId = id ?? componentName;

  return (
    <motion.div
      id={rootId}
      data-component={componentName}
      initial={shouldReduceMotion ? false : { scale: 0.92, opacity: 0 }}
      animate={shouldReduceMotion ? {} : { scale: 1, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={cn(
        'absolute inset-0 overflow-hidden w-full h-full',
        roundedRadiusToken,
        className
      )}
    >
      {/* Background Image */}
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className="object-cover max-w-full max-h-full blur-sm"
        quality={90}
      />

      {/* Gradient Scrim for Text Readability */}
      <div className={cn('absolute inset-0', gradientScrim)} />
    </motion.div>
  );
};
