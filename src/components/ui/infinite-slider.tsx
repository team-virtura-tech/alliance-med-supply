'use client';
import { cn } from '@/lib/utils';
import {
  animate,
  type AnimationPlaybackControls,
  motion,
  useMotionValue,
} from 'framer-motion';
import { Pause, Play } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import useMeasure from 'react-use-measure';

type InfiniteSliderProps = {
  children: React.ReactNode;
  gap?: number;
  duration?: number;
  durationOnHover?: number;
  direction?: 'horizontal' | 'vertical';
  reverse?: boolean;
  className?: string;
  /** Renders a keyboard-accessible pause/play button (WCAG 2.2.2) */
  showPauseButton?: boolean;
};

export function InfiniteSlider({
  children,
  gap = 16,
  duration = 25,
  durationOnHover,
  direction = 'horizontal',
  reverse = false,
  className,
  showPauseButton = false,
}: InfiniteSliderProps) {
  const [currentDuration, setCurrentDuration] = useState(duration);
  const [ref, { width, height }] = useMeasure();
  const translation = useMotionValue(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [key, setKey] = useState(0);
  const [paused, setPaused] = useState(false);
  const controlsRef = useRef<AnimationPlaybackControls | null>(null);

  useEffect(() => {
    if (paused) {
      controlsRef.current?.stop();
      return;
    }

    let controls;
    const size = direction === 'horizontal' ? width : height;
    const contentSize = size + gap;
    const from = reverse ? -contentSize / 2 : 0;
    const to = reverse ? 0 : -contentSize / 2;

    if (isTransitioning) {
      controls = animate(translation, [translation.get(), to], {
        ease: 'linear',
        duration:
          currentDuration * Math.abs((translation.get() - to) / contentSize),
        onComplete: () => {
          setIsTransitioning(false);
          setKey((prevKey) => prevKey + 1);
        },
      });
    } else {
      controls = animate(translation, [from, to], {
        ease: 'linear',
        duration: currentDuration,
        repeat: Infinity,
        repeatType: 'loop',
        repeatDelay: 0,
        onRepeat: () => {
          translation.set(from);
        },
      });
    }

    controlsRef.current = controls;
    return controls?.stop;
  }, [
    key,
    translation,
    currentDuration,
    width,
    height,
    gap,
    isTransitioning,
    direction,
    reverse,
    paused,
  ]);

  const slowDown = () => {
    setIsTransitioning(true);
    setCurrentDuration(durationOnHover!);
  };

  const speedUp = () => {
    setIsTransitioning(true);
    setCurrentDuration(duration);
  };

  const hoverProps = durationOnHover
    ? {
        onHoverStart: slowDown,
        onHoverEnd: speedUp,
      }
    : {};

  const touchProps = durationOnHover
    ? {
        onTouchStart: slowDown,
        onTouchEnd: speedUp,
      }
    : {};

  return (
    <div className="relative">
      {showPauseButton && (
        <button
          type="button"
          onClick={() => setPaused((p) => !p)}
          aria-label={paused ? 'Play slider' : 'Pause slider'}
          className="absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-background/80 p-1.5 shadow-sm ring-1 ring-border backdrop-blur-sm transition-opacity hover:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary opacity-60"
        >
          {paused ? (
            <Play className="h-3.5 w-3.5 text-foreground" aria-hidden="true" />
          ) : (
            <Pause className="h-3.5 w-3.5 text-foreground" aria-hidden="true" />
          )}
        </button>
      )}
      <div className={cn('overflow-hidden', className)}>
        <motion.div
          className="flex w-max"
          style={{
            ...(direction === 'horizontal'
              ? { x: translation }
              : { y: translation }),
            gap: `${gap}px`,
            flexDirection: direction === 'horizontal' ? 'row' : 'column',
          }}
          ref={ref}
          {...hoverProps}
          {...touchProps}
        >
          {children}
          {children}
        </motion.div>
      </div>
    </div>
  );
}
