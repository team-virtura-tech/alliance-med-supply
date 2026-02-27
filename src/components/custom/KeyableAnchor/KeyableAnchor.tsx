'use client';

import { cn } from '@/lib/utils';
import type { AnchorHTMLAttributes, KeyboardEvent } from 'react';

export type KeyableAnchorProps = AnchorHTMLAttributes<HTMLAnchorElement>;

/**
 * Drop-in <a> replacement that fires click on both Enter AND Space.
 * Native <a> tags only fire click on Enter; Space scrolls the page instead.
 * This component fixes that gap so keyboard-only users can activate any link
 * with either key, consistent with WCAG 2.1 SC 2.1.1.
 */
export const KeyableAnchor = ({
  onKeyDown,
  className,
  children,
  ...props
}: KeyableAnchorProps) => {
  const handleKeyDown = (e: KeyboardEvent<HTMLAnchorElement>) => {
    if (e.key === ' ') {
      e.preventDefault(); // stop page scroll
      e.currentTarget.click();
    }
    onKeyDown?.(e);
  };

  return (
    <a {...props} className={cn(className)} onKeyDown={handleKeyDown}>
      {children}
    </a>
  );
};
