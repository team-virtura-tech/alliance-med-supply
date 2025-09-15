import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Shield } from 'lucide-react';

export type HeroContentProps = {
  id?: string;
  className?: string;
};

export const HeroContent = ({ id, className }: HeroContentProps) => {
  const componentName = 'HeroContent';
  const rootId = id ?? componentName;

  return (
    <section
      id={rootId}
      data-component={componentName}
      className={cn(
        'flex flex-col items-center text-center px-4 py-12 md:py-16 lg:py-20',
        className
      )}
    >
      {/* Trust Badge */}
      <Badge
        variant="secondary"
        className="mb-6 px-4 py-2 text-sm font-medium bg-gray-100 text-gray-700 rounded-full"
      >
        <Shield className="mr-2 h-4 w-4" />
        Trusted by 20,000+ Happy Learners
      </Badge>

      {/* Main Headline */}
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl max-w-4xl">
        Building a Brighter Tomorrow
        <br />
        With Smarter Learning
      </h1>

      {/* Description */}
      <p className="mt-6 text-lg text-gray-600 max-w-2xl md:text-xl">
        Learn from trusted experts with interactive courses designed to fit your
        schedule, match your goals, and support your growth at every step.
      </p>

      {/* CTA Buttons */}
      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:gap-6">
        <Button
          size="lg"
          className="px-8 py-3 text-base font-semibold bg-black text-white hover:bg-gray-800 rounded-full"
        >
          Start Learning
        </Button>
        <Button
          variant="outline"
          size="lg"
          className="px-8 py-3 text-base font-semibold border-2 border-gray-300 text-gray-700 hover:bg-gray-50 rounded-full"
        >
          Explore Courses
        </Button>
      </div>
    </section>
  );
};
