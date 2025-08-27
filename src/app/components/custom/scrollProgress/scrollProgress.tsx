'use client';

import { cn } from '@/lib/utils';
import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { useCallback, useEffect, useState } from 'react';

export type ScrollProgressProps = {
  id?: string;
  showPercentage?: boolean;
  showScrollToTop?: boolean;
  className?: string;
};

export const ScrollProgress = ({
  id,
  showPercentage = false,
  showScrollToTop = true,
  className,
}: ScrollProgressProps) => {
  const { scrollYProgress } = useScroll();
  const [isVisible, setIsVisible] = useState(false);
  const componentName = 'ScrollProgress';
  const rootId = id ?? componentName;

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const percentage = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const percentageValue = useMotionValue(0);

  useEffect(() => {
    const unsubscribe = percentage.on('change', (latest) => {
      percentageValue.set(Math.round(latest));
      setIsVisible(latest > 0.1); // Show scroll-to-top after 10% scroll
    });

    return () => unsubscribe();
  }, [percentage, percentageValue]);

  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  return (
    <>
      {/* Progress Bar - positioned at bottom */}
      <motion.div
        id={rootId}
        className={cn(
          'fixed bottom-0 left-0 right-0 h-1 bg-primary origin-left z-50',
          className
        )}
        style={{ scaleX }}
        data-component="ScrollProgress"
      />

      {/* Percentage Indicator */}
      {showPercentage && (
        <motion.div
          className="fixed top-4 right-4 z-50 flex items-center gap-2 bg-background/80 backdrop-blur-sm border rounded-full px-3 py-2 text-sm font-medium text-foreground shadow-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: isVisible ? 1 : 0,
            scale: isVisible ? 1 : 0.8,
          }}
          transition={{ duration: 0.2 }}
        >
          <div className="relative h-4 w-4">
            <svg className="h-4 w-4 -rotate-90" viewBox="0 0 20 20" fill="none">
              <circle
                cx="10"
                cy="10"
                r="8"
                stroke="currentColor"
                strokeWidth="2"
                className="text-muted-foreground"
                fill="none"
              />
              <motion.circle
                cx="10"
                cy="10"
                r="8"
                stroke="currentColor"
                strokeWidth="2"
                className="text-primary"
                fill="none"
                strokeLinecap="round"
                style={{
                  pathLength: scrollYProgress,
                }}
                pathLength="0"
                strokeDasharray="0 1"
              />
            </svg>
          </div>
          <motion.span className="min-w-[2ch] text-right">
            {Math.round(percentage.get())}%
          </motion.span>
        </motion.div>
      )}

      {/* Scroll to Top Button */}
      {showScrollToTop && (
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 flex items-center justify-center h-12 w-12 bg-primary text-primary-foreground rounded-full shadow-lg hover:bg-primary/90 transition-colors"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: isVisible ? 1 : 0,
            scale: isVisible ? 1 : 0.8,
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.2 }}
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-5 w-5" />
        </motion.button>
      )}
    </>
  );
};
