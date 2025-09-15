import { cn } from '@/lib/utils';

export type HeroBackgroundProps = {
  className?: string;
  children?: React.ReactNode;
};

export const HeroBackground = ({
  className,
  children,
}: HeroBackgroundProps) => {
  return (
    <div className={cn('relative w-full bg-white dark:bg-black', className)}>
      {/* Grid Background */}
      <div
        className={cn(
          'absolute inset-0',
          '[background-size:40px_40px]',
          '[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]',
          'dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]'
        )}
      />
      {/* Radial gradient overlay for faded effect */}
      <div className="pointer-events-none absolute inset-0 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

// Keep the demo component for reference
export function GridBackgroundDemo() {
  return (
    <HeroBackground className="flex h-[50rem] items-center justify-center">
      <p className="bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text py-8 text-4xl font-bold text-transparent sm:text-7xl">
        Backgrounds
      </p>
    </HeroBackground>
  );
}
