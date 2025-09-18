'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import Image from 'next/image';

export type MobileHeroImageProps = {
  id?: string;
  className?: string;
  totalH1AnimationTime: number;
};

export const MobileHeroImage = ({
  id,
  className,
  totalH1AnimationTime,
}: MobileHeroImageProps) => {
  const componentName = 'MobileHeroImage';
  const rootId = id ?? componentName;

  return (
    <div
      id={rootId}
      data-component={componentName}
      className={cn(
        'w-full flex justify-center items-center pointer-events-none',
        className
      )}
    >
      {/* Mobile Walker Image - Centered */}
      <motion.div
        className="relative w-64 h-64 sm:w-72 sm:h-72 pointer-events-none"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: [0.25, 0.25, 0, 1],
          delay: totalH1AnimationTime + 0.6,
        }}
      >
        <Image
          src="/images/mobile-walker.png"
          alt="Medical walker equipment for mobile"
          fill
          className="object-contain"
          sizes="(max-width: 640px) 256px, 288px"
          priority
        />
      </motion.div>
    </div>
  );
};
