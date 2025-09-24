'use client';

import { useReducedMotion } from 'framer-motion';
import { useCallback, useEffect, useState } from 'react';

export interface ParallaxOptions {
  /**
   * The speed multiplier for the parallax effect.
   * 1 = normal scroll speed, 0.5 = half speed, 2 = double speed
   */
  speed?: number;
  /**
   * Whether to enable the parallax effect only when the element is in view
   */
  enableOnInView?: boolean;
  /**
   * Custom offset for the parallax calculation
   */
  offset?: number;
}

export interface ParallaxResult {
  /**
   * The calculated transform value for CSS
   */
  transform: string;
  /**
   * Raw scroll progress value (0-1) when element is in view
   */
  progress: number;
  /**
   * Whether the element is currently in the viewport
   */
  isInView: boolean;
}

/**
 * Custom hook for creating smooth parallax scroll effects
 *
 * @param options - Configuration options for the parallax effect
 * @returns ParallaxResult containing transform values and state
 */
export const useParallax = (options: ParallaxOptions = {}): ParallaxResult => {
  const { speed = 0.5, enableOnInView = true, offset = 0 } = options;

  const [scrollY, setScrollY] = useState(0);
  const [elementTop, setElementTop] = useState(0);
  const [elementHeight, setElementHeight] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const [elementRef, setElementRef] = useState<HTMLElement | null>(null);

  const reduceMotion = useReducedMotion();

  // Update scroll position with throttling for performance
  const updateScrollY = useCallback(() => {
    setScrollY(window.scrollY);
  }, []);

  // Update element position and dimensions
  const updateElementDimensions = useCallback(() => {
    if (elementRef) {
      const rect = elementRef.getBoundingClientRect();
      const scrollTop = window.scrollY;
      setElementTop(rect.top + scrollTop);
      setElementHeight(rect.height);
    }
  }, [elementRef]);

  // Check if element is in viewport
  const checkInView = useCallback(() => {
    if (!elementRef) return;

    const rect = elementRef.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // Element is in view if any part is visible (with some buffer)
    const buffer = windowHeight * 0.2; // 20% buffer
    const inView = rect.bottom >= -buffer && rect.top <= windowHeight + buffer;

    setIsInView(inView);
  }, [elementRef]);

  // Set up scroll listener with performance optimization
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          updateScrollY();
          checkInView();
          ticking = false;
        });
        ticking = true;
      }
    };

    // Initial setup
    updateScrollY();
    checkInView();

    // Add scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [updateScrollY, checkInView]);

  // Update element dimensions on resize
  useEffect(() => {
    const handleResize = () => {
      updateElementDimensions();
      checkInView();
    };

    handleResize(); // Initial call

    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, [updateElementDimensions, checkInView]);

  // Calculate parallax values
  const getParallaxValues = useCallback((): ParallaxResult => {
    if (reduceMotion) {
      return {
        transform: 'none',
        progress: 0,
        isInView: false,
      };
    }

    if (!elementRef || (enableOnInView && !isInView)) {
      return {
        transform: 'translateY(0px)',
        progress: 0,
        isInView,
      };
    }

    // Calculate scroll progress relative to element
    const windowHeight = window.innerHeight;
    const elementCenter = elementTop + elementHeight / 2;
    const scrollCenter = scrollY + windowHeight / 2;

    // Progress from -1 (element below viewport) to 1 (element above viewport)
    const rawProgress =
      (scrollCenter - elementCenter) / (windowHeight + elementHeight);
    const clampedProgress = Math.max(-1, Math.min(1, rawProgress));

    // Calculate parallax offset
    const parallaxOffset = clampedProgress * speed * 100 + offset;

    return {
      transform: `translateY(${parallaxOffset}px)`,
      progress: clampedProgress,
      isInView,
    };
  }, [
    reduceMotion,
    elementRef,
    enableOnInView,
    isInView,
    elementTop,
    elementHeight,
    scrollY,
    speed,
    offset,
  ]);

  // Ref callback to capture the element
  const ref = useCallback((node: HTMLElement | null) => {
    setElementRef(node);
  }, []);

  const parallaxValues = getParallaxValues();

  // Return both the ref and the parallax values
  return {
    ...parallaxValues,
    // Add the ref as a property for easy access
    ref,
  } as ParallaxResult & { ref: (node: HTMLElement | null) => void };
};

/**
 * Hook specifically for simple Y-axis parallax transforms
 * @param speed - Parallax speed multiplier (0.5 = half speed, 2 = double speed)
 * @returns Object with ref and transform style
 */
export const useSimpleParallax = (speed: number = 0.5) => {
  const { transform, ref } = useParallax({ speed }) as ParallaxResult & {
    ref: (node: HTMLElement | null) => void;
  };

  return {
    ref,
    style: { transform },
  };
};
