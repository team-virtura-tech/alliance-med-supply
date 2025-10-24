'use client';

import { motion, type MotionProps } from 'framer-motion';
import { forwardRef, HTMLAttributes } from 'react';

// Light wrappers so the server page can use motion without importing framer-motion directly.
type DivProps = HTMLAttributes<HTMLDivElement> & MotionProps;

export const AnimatedSection = motion('section');
export const AnimatedCard = motion('article');

export const AnimatedInView = forwardRef<HTMLDivElement, DivProps>(
  function AnimatedInView({ children, ...props }, ref) {
    return (
      <motion.div ref={ref} {...props}>
        {children}
      </motion.div>
    );
  }
);
