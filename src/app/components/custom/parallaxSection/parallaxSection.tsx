'use client';

import { cn } from '@/lib/utils';
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'framer-motion';
import { useRef } from 'react';

export type ParallaxSectionProps = {
  id?: string;
  children: React.ReactNode;
  speed?: number;
  direction?: 'up' | 'down';
  className?: string;
  offset?: [number, number];
};

export const ParallaxSection = ({
  id,
  children,
  speed = 0.5,
  direction = 'up',
  className,
  offset = [0, 1],
}: ParallaxSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const componentName = 'ParallaxSection';
  const rootId = id ?? componentName;
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const multiplier = direction === 'up' ? -1 : 1;
  const yRange = speed * 100 * multiplier;

  const y = useTransform(
    scrollYProgress,
    offset,
    reduce ? [0, 0] : [yRange, -yRange]
  );

  return (
    <motion.div
      id={rootId}
      ref={ref}
      style={{ y }}
      className={cn('relative', className)}
      data-component="ParallaxSection"
    >
      {children}
    </motion.div>
  );
};
