'use client';

import { useInView as useInViewFramer } from 'motion/react';
import { useRef } from 'react';

export type UseInViewOptions = {
  amount?: number;
  triggerOnce?: boolean;
};

export const useInView = (options: UseInViewOptions = {}) => {
  const ref = useRef(null);
  const isInView = useInViewFramer(ref, {
    amount: options.amount || 0.1,
    once: options.triggerOnce ?? true,
  });

  return { ref, isInView };
};
