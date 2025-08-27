'use client';

import { cn } from '@/lib/utils';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { useRef } from 'react';

export type ScrollAnimationProps = {
  id?: string;
  children: React.ReactNode;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade' | 'scale';
  delay?: number;
  duration?: number;
  distance?: number;
  once?: boolean;
  _threshold?: number;
};

export const ScrollAnimation = ({
  id,
  children,
  className,
  direction = 'up',
  delay = 0,
  duration = 0.6,
  distance = 50,
  once = true,
  _threshold = 0.1,
}: ScrollAnimationProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: '-100px' });
  const shouldReduceMotion = useReducedMotion();
  const componentName = 'ScrollAnimation';
  const rootId = id ?? componentName;

  // If user prefers reduced motion, don't animate
  if (shouldReduceMotion) {
    return (
      <div id={rootId} className={className} data-component="ScrollAnimation">
        {children}
      </div>
    );
  }

  // Define animation variants based on direction
  const getVariants = () => {
    const baseVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          duration,
          delay,
          ease: 'easeOut' as const,
        },
      },
    };

    switch (direction) {
      case 'up':
        return {
          hidden: { ...baseVariants.hidden, y: distance },
          visible: { ...baseVariants.visible, y: 0 },
        };
      case 'down':
        return {
          hidden: { ...baseVariants.hidden, y: -distance },
          visible: { ...baseVariants.visible, y: 0 },
        };
      case 'left':
        return {
          hidden: { ...baseVariants.hidden, x: distance },
          visible: { ...baseVariants.visible, x: 0 },
        };
      case 'right':
        return {
          hidden: { ...baseVariants.hidden, x: -distance },
          visible: { ...baseVariants.visible, x: 0 },
        };
      case 'scale':
        return {
          hidden: { ...baseVariants.hidden, scale: 0.8 },
          visible: { ...baseVariants.visible, scale: 1 },
        };
      case 'fade':
      default:
        return baseVariants;
    }
  };

  return (
    <motion.div
      id={rootId}
      ref={ref}
      className={cn(className)}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={getVariants()}
      data-component="ScrollAnimation"
    >
      {children}
    </motion.div>
  );
};
