'use client';

import { cn } from '@/lib/utils';
import { circOut, motion, useReducedMotion } from 'framer-motion';
import Link from 'next/link';
import { ReactNode } from 'react';

export type HeroLandingContentProps = {
  id?: string;
  eyebrow?: string;
  title: string | ReactNode;
  subtitle?: string;
  ctas: Array<{
    label: string;
    href?: string;
    onClick?: () => void;
    variant?: 'primary' | 'secondary';
  }>;
  className?: string;
};

export const HeroLandingContent = ({
  id,
  eyebrow,
  title,
  subtitle,
  ctas,
  className,
}: HeroLandingContentProps) => {
  const shouldReduceMotion = useReducedMotion();
  const componentName = 'HeroLandingContent';
  const rootId = id ?? componentName;

  // Use built-in circOut easing function for Framer Motion
  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.12,
        ease: circOut,
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.18,
        ease: circOut,
      },
    },
  };

  return (
    <div
      id={rootId}
      data-component={componentName}
      className={cn(
        'relative z-10 flex flex-col items-center justify-center text-center',
        'px-4 py-8 md:px-8 lg:px-12',
        'min-h-[60vh] md:min-h-[70vh]',
        className
      )}
    >
      <motion.div
        initial={shouldReduceMotion ? false : 'hidden'}
        animate={shouldReduceMotion ? {} : 'visible'}
        variants={shouldReduceMotion ? {} : contentVariants}
        className="max-w-4xl mx-auto"
      >
        {/* Eyebrow */}
        {eyebrow && (
          <p className="text-sm md:text-base font-medium text-white/90 tracking-wide uppercase mb-4">
            {eyebrow}
          </p>
        )}

        {/* Main Headline */}
        <h1
          id={`${rootId}-headline`}
          className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
        >
          {title}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}
      </motion.div>

      {/* CTA Buttons */}
      <motion.div
        initial={shouldReduceMotion ? false : 'hidden'}
        animate={shouldReduceMotion ? {} : 'visible'}
        variants={shouldReduceMotion ? {} : buttonVariants}
        className="flex flex-col sm:flex-row gap-4 justify-center"
      >
        {ctas.map((cta, index) => {
          const isPrimary = cta.variant !== 'secondary';
          const buttonClasses = cn(
            'px-8 py-4 rounded-full text-base font-semibold transition-all duration-200',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
            'disabled:opacity-50 disabled:cursor-not-allowed',
            isPrimary
              ? 'bg-[#0A2A5E] text-white hover:bg-[#083554] focus-visible:ring-[#0A2A5E] shadow-lg hover:shadow-xl'
              : 'bg-white/10 text-white border border-white/30 backdrop-blur-sm hover:bg-white/20 focus-visible:ring-white/50'
          );

          if (cta.href) {
            return (
              <Link
                key={`${cta.label}-${index}`}
                href={cta.href}
                className={buttonClasses}
              >
                {cta.label}
              </Link>
            );
          }

          return (
            <button
              key={`${cta.label}-${index}`}
              onClick={cta.onClick}
              className={buttonClasses}
            >
              {cta.label}
            </button>
          );
        })}
      </motion.div>
    </div>
  );
};
