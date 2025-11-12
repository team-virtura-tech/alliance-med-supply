'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { MapPin, Phone } from 'lucide-react';

import { InfiniteSlider } from '@/components/ui/infinite-slider';
import { cn } from '@/lib/utils';

const primaryCities = [
  'Campbell',
  'Cupertino',
  'Dublin',
  'Fremont',
  'Gilroy',
  'Hayward',
  'Livermore',
  'Los Gatos',
  'Milpitas',
  'Morgan Hill',
  'Mountain View',
  'Newark',
  'Palo Alto',
  'Pleasanton',
  'San Jose',
  'Santa Clara',
  'Sunnyvale',
  'Union City',
];

export type ServiceAreaSectionProps = {
  className?: string;
  id?: string;
};

export const ServiceAreaSection = ({
  className,
  id,
}: ServiceAreaSectionProps) => {
  const reduce = useReducedMotion();
  const componentName = 'ServiceAreaSection';
  const rootId = id ?? componentName;

  return (
    <section
      id={rootId}
      data-component={componentName}
      className={cn('w-full bg-muted/30 py-16 md:py-20 lg:py-24', className)}
    >
      <div className="mx-auto w-full max-w-screen-xl px-4 md:px-6">
        {/* Header */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={reduce ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mb-12 text-center md:mb-16"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            <MapPin className="h-4 w-4" />
            Service Area
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl lg:text-4xl">
            Bay Area Communities We Serve
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600 md:text-lg">
            Conveniently located in San Jose with easy access from all major Bay
            Area cities
          </p>
        </motion.div>

        {/* Primary Cities */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={reduce ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
          className="mb-12"
        >
          <InfiniteSlider
            duration={30}
            durationOnHover={60}
            gap={16}
            className="[mask-image:linear-gradient(to_right,transparent_0%,_black_128px,_black_calc(100%-128px),_transparent_100%)]"
          >
            {primaryCities.map((city) => (
              <div
                key={city}
                className="inline-flex items-center gap-2 rounded-lg bg-primary/5 px-4 py-2 text-sm font-medium text-primary md:px-5 md:py-2.5 md:text-base whitespace-nowrap"
              >
                {city}
              </div>
            ))}
          </InfiniteSlider>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={reduce ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.4 }}
          className="text-center"
        >
          <p className="mb-4 text-base text-slate-600 md:text-lg">
            Don&apos;t see your area? Call us - we may still be able to help!
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-6">
            <a
              href="https://www.google.com/maps/place/1630+Oakland+Road+Suite+A110,+San+Jose,+CA+95131"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80 hover:underline md:text-base"
            >
              <MapPin className="h-4 w-4" />
              1630 Oakland Road, Suite A110, San Jose CA 95131
            </a>
            <span className="hidden text-slate-300 sm:inline">•</span>
            <a
              href="tel:+14089429000"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80 hover:underline md:text-base"
            >
              <Phone className="h-4 w-4" />
              (408) 942-9000
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
