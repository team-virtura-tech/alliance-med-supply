'use client';

import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';
import type { KeyboardEvent, ReactNode } from 'react';

export type KeyableCardProps = {
  href: string;
  children: ReactNode;
  className?: string;
  id?: string;
};

export const KeyableCard = ({
  href,
  children,
  className,
  id,
}: KeyableCardProps) => {
  const router = useRouter();

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      router.push(href);
    }
  };

  const handleClick = () => router.push(href);

  return (
    <div
      id={id}
      data-component="KeyableCard"
      role="link"
      tabIndex={0}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      className={cn(
        'cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-xl',
        className
      )}
    >
      {children}
    </div>
  );
};
