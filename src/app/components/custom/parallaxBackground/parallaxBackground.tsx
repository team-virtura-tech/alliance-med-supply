'use client';

import { cn } from '@/lib/utils';
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'framer-motion';

export type ParallaxBackgroundProps = {
  id?: string;
  className?: string;
  children?: React.ReactNode;
};

export const ParallaxBackground = ({
  id,
  className,
  children,
}: ParallaxBackgroundProps) => {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const componentName = 'ParallaxBackground';
  const rootId = id ?? componentName;

  // Create subtle floating elements that move with scroll
  const y1 = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [0, -100]);
  const y3 = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [0, -300]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.4, 0.2, 0.1]);

  return (
    <div
      id={rootId}
      className={cn('relative', className)}
      data-component="ParallaxBackground"
    >
      {/* Floating background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          style={{ y: y1, opacity }}
          className="absolute top-20 left-[10%] w-32 h-32 bg-primary/5 rounded-full blur-xl"
        />
        <motion.div
          style={{ y: y2, opacity }}
          className="absolute top-60 right-[15%] w-24 h-24 bg-primary/10 rounded-full blur-lg"
        />
        <motion.div
          style={{ y: y3, opacity }}
          className="absolute top-96 left-[20%] w-40 h-40 bg-primary/3 rounded-full blur-2xl"
        />
        <motion.div
          style={{ y: y1, opacity }}
          className="absolute bottom-40 right-[25%] w-28 h-28 bg-primary/8 rounded-full blur-xl"
        />
        <motion.div
          style={{ y: y2, opacity }}
          className="absolute bottom-20 left-[30%] w-36 h-36 bg-primary/4 rounded-full blur-2xl"
        />
      </div>
      {children}
    </div>
  );
};
