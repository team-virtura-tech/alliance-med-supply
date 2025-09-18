'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import Image from 'next/image';

export type HeroImagesProps = {
  id?: string;
  className?: string;
  totalH1AnimationTime: number;
};

export const HeroImages = ({
  id,
  className,
  totalH1AnimationTime,
}: HeroImagesProps) => {
  const componentName = 'HeroImages';
  const rootId = id ?? componentName;

  return (
    <div
      id={rootId}
      data-component={componentName}
      className={cn('absolute inset-0 pointer-events-none', className)}
    >
      {/* Bottom-Left Wheels Image */}
      <motion.div
        className="absolute bottom-8 left-8 w-80 h-80 md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] xl:w-[600px] xl:h-[600px] 2xl:w-[700px] 2xl:h-[700px] pointer-events-none"
        initial={{ opacity: 0, x: -50, y: 50 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{
          duration: 0.8,
          ease: [0.25, 0.25, 0, 1],
          delay: totalH1AnimationTime + 0.8,
        }}
      >
        <Image
          src="/images/wheels.png"
          alt="Medical wheelchair wheels"
          fill
          className="object-contain"
          sizes="(max-width: 768px) 320px, (max-width: 1024px) 400px, (max-width: 1280px) 500px, (max-width: 1536px) 600px, 700px"
          priority
        />
      </motion.div>

      {/* Bottom-Right Walker Image */}
      <motion.div
        className="absolute bottom-8 right-8 w-80 h-80 md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] xl:w-[600px] xl:h-[600px] 2xl:w-[700px] 2xl:h-[700px] pointer-events-none"
        initial={{ opacity: 0, x: 50, y: 50 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{
          duration: 0.8,
          ease: [0.25, 0.25, 0, 1],
          delay: totalH1AnimationTime + 0.6,
        }}
      >
        <Image
          src="/images/walker.png"
          alt="Medical walker equipment"
          fill
          className="object-contain"
          sizes="(max-width: 768px) 320px, (max-width: 1024px) 400px, (max-width: 1280px) 500px, (max-width: 1536px) 600px, 700px"
          priority
        />
      </motion.div>
    </div>
  );
};
