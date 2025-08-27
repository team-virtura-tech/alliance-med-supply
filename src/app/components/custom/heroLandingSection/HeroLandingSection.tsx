'use client';

import { cn } from '@/lib/utils';
import { HeroLandingCards, HeroLandingCardsProps } from './HeroLandingCards';
import {
  HeroLandingContent,
  HeroLandingContentProps,
} from './HeroLandingContent';
import { HeroLandingFigure, HeroLandingFigureProps } from './HeroLandingFigure';

export type HeroLandingSectionProps = {
  id?: string;
  figure: Omit<HeroLandingFigureProps, 'id'>;
  content: Omit<HeroLandingContentProps, 'id'>;
  cards: Omit<HeroLandingCardsProps, 'id'>;
  className?: string;
};

export const HeroLandingSection = ({
  id,
  figure,
  content,
  cards,
  className,
}: HeroLandingSectionProps) => {
  const componentName = 'HeroLandingSection';
  const rootId = id ?? componentName;

  return (
    <section
      id={rootId}
      data-component={componentName}
      role="region"
      aria-labelledby={`${rootId}-headline`}
      className={cn('relative min-h-screen w-full p-4 pt-0', className)}
    >
      {/* Container with rounded corners */}
      <div className="relative h-full min-h-[calc(100vh-2rem)] md:min-h-[calc(100vh-3rem)] lg:min-h-[calc(100vh-4rem)] rounded-3xl overflow-hidden">
        {/* Background Image with Scrim */}
        <HeroLandingFigure id={`${rootId}-figure`} {...figure} />

        {/* Content Layout */}
        <div className="relative z-10 h-full flex flex-col">
          {/* Main Content Area - Centered */}
          <div className="flex-1 flex items-center justify-center">
            <HeroLandingContent id={`${rootId}-content`} {...content} />
          </div>

          {/* Cards - Bottom Third */}
          <div className="flex-shrink-0">
            <HeroLandingCards id={`${rootId}-cards`} {...cards} />
          </div>
        </div>
      </div>
    </section>
  );
};
