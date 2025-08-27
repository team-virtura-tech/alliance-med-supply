'use client';

import { cn } from '@/lib/utils';
import { circOut, motion, useReducedMotion } from 'framer-motion';
import { ReactNode } from 'react';

export type HeroLandingCardsProps = {
  id?: string;
  items: Array<{
    icon?: ReactNode;
    title: string;
    body: string;
  }>;
  className?: string;
};

export const HeroLandingCards = ({
  id,
  items,
  className,
}: HeroLandingCardsProps) => {
  const shouldReduceMotion = useReducedMotion();
  const componentName = 'HeroLandingCards';
  const rootId = id ?? componentName;

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.06,
        delayChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: circOut,
      },
    },
  };

  return (
    <div
      id={rootId}
      data-component={componentName}
      className={cn(
        'relative z-10 px-2 md:px-6 lg:px-8 pb-8 md:pb-12',
        className
      )}
    >
      <motion.ul
        initial={shouldReduceMotion ? false : 'hidden'}
        animate={shouldReduceMotion ? {} : 'visible'}
        variants={shouldReduceMotion ? {} : containerVariants}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {items.map((item, index) => (
          <motion.li
            key={`${item.title}-${index}`}
            variants={shouldReduceMotion ? {} : cardVariants}
            className="group"
          >
            <article
              className={cn(
                'h-full flex flex-col items-center justify-center text-center',
                'p-2 md:p-4 rounded-2xl',
                'transition-all duration-200',
                'min-h-[80px] md:min-h-[100px]',
                'bg-white/10 text-white border border-white/30 backdrop-blur-sm hover:bg-white/20 focus-visible:ring-white/50'
              )}
            >
              {/* Icon */}
              {item.icon && (
                <div className="flex items-center justify-center w-14 h-14 mb-6 rounded-2xl bg-white/10 text-white text-3xl">
                  {item.icon}
                </div>
              )}

              {/* Content */}
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-white leading-tight">
                  {item.title}
                </h3>
                <p className="text-base text-white/90 leading-relaxed">
                  {item.body}
                </p>
              </div>
            </article>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};
