import { Button } from '@/components/ui/button';
import { useSimpleParallax } from '@/hooks/useParallax';
import { cn } from '@/lib/utils';
import { motion, useReducedMotion } from 'framer-motion';
import Image from 'next/image';

export type HeroWithBentoGridProps = {
  id?: string;
  className?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
};

export const HeroWithBentoGrid = ({
  id,
  className,
  title: _title = 'Quality Medical Equipment Rentals',
  subtitle: _subtitle = 'Keep your patients comfortable and mobile',
  description:
    _description = 'Professional medical supply rentals and sales. We understand your patients needs and provide the equipment they require for recovery and mobility.',
  primaryButtonText: _primaryButtonText = 'Browse Equipment',
  secondaryButtonText: _secondaryButtonText = 'Learn More',
  onPrimaryClick,
  onSecondaryClick,
}: HeroWithBentoGridProps) => {
  const componentName = 'HeroWithBentoGrid';
  const reduceMotion = useReducedMotion();
  const rootId = id ?? componentName;

  // Parallax effects for depth
  const vanParallax = useSimpleParallax(0.3); // Slow parallax for background
  const cardsParallax = useSimpleParallax(0.15); // Subtle parallax for cards
  const cardsParallax2 = useSimpleParallax(0.2); // Slightly different parallax for second card

  return (
    <section
      id={rootId}
      data-component={componentName}
      className={cn(
        'w-full min-w-0 min-h-[600px] md:min-h-[700px] lg:h-[calc(100vh-8rem)] flex items-center px-4 py-6 md:px-6 md:py-8 lg:px-8 lg:pb-10',
        className
      )}
    >
      {/* Main Layout - Left Content + Right Column */}
      <div className="w-full h-full flex flex-col lg:flex-row gap-4 lg:gap-6">
        {/* LEFT COLUMN - Full Height Content Card (40%) */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 30 }}
          animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            ease: [0.4, 0.0, 0.2, 1],
          }}
          className="w-full lg:flex-[0_0_40%] flex"
        >
          <div className="bg-gradient-to-br from-teal-50 via-white to-orange-50 rounded-2xl lg:rounded-3xl p-6 lg:p-8 xl:p-10 w-full flex flex-col justify-center shadow-sm h-full">
            {/* Trust Indicators Header */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                Licensed Provider
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                ⭐ 4.9/5 Rating
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                🕒 15+ Years Experience
              </div>
            </div>

            <div className="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-sm text-primary w-fit mb-6">
              All equipments are available for rent or purchase
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4 lg:mb-6">
              Bay Area&apos;s Trusted{' '}
              <span className="text-primary">Medical Equipment</span> Services
            </h1>

            <p className="text-base lg:text-lg text-gray-600 leading-relaxed mb-6 lg:mb-8">
              From mobility aids and hospital beds to specialized equipment for
              recovery, we handle all your medical supply needs quickly and
              professionally. Serving Mountain View, Palo Alto, Sunnyvale, San
              Jose, and entire Bay Area.
            </p>

            {/* Service Features Grid */}
            <div className="grid grid-cols-2 gap-4 mb-6 lg:mb-8">
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <div className="w-1 h-4 bg-primary rounded-full"></div>
                All equipments are sanitized
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <div className="w-1 h-4 bg-primary rounded-full"></div>
                Walk-ins welcome
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <div className="w-1 h-4 bg-primary rounded-full"></div>
                Professional delivery service
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <div className="w-1 h-4 bg-primary rounded-full"></div>
                Trusted by 15,000+ customers
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 lg:gap-4">
              <Button
                size="lg"
                onClick={onPrimaryClick}
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-2xl px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-200"
              >
                📞 Call (650) 961-4646
              </Button>
              <Button
                variant="ghost"
                size="lg"
                onClick={onSecondaryClick}
                className="text-primary hover:bg-primary/5 hover:text-primary/80 border border-primary/20 rounded-2xl px-8 py-3 transition-all duration-200"
              >
                📍 Find Location
              </Button>
            </div>

            {/* Hours */}
            <div className="mt-6 pt-4 border-t border-gray-200">
              <p className="text-sm text-gray-600">
                🕒 Mon-Fri: 10AM-5PM | Sat: 10AM-2PM
              </p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT COLUMN - Van Image Top + 4 Images Bottom (60%) */}
        <div className="w-full lg:flex-[0_0_60%] flex flex-col gap-4 lg:gap-6 min-h-[400px] lg:min-h-0">
          {/* TOP - Van Image */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 30 }}
            animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.2,
              ease: [0.4, 0.0, 0.2, 1],
            }}
            className="flex-1 min-h-[300px] lg:min-h-0"
          >
            <div
              ref={vanParallax.ref}
              style={vanParallax.style}
              className="relative rounded-2xl lg:rounded-3xl overflow-hidden h-full"
            >
              <Image
                src="/images/branding/van-1.png"
                alt="Alliance Medical Supply Van - Professional medical equipment delivery"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 60vw"
                priority
              />

              {/* Tag overlay */}
              <div className="absolute top-6 left-6">
                <span className="bg-orange-500 text-white text-sm px-4 py-2 rounded-full font-medium shadow-lg">
                  Professional Service
                </span>
              </div>
            </div>
          </motion.div>

          {/* BOTTOM - Four Equal Image Cards in a Row */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 30 }}
            animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.4,
              ease: [0.4, 0.0, 0.2, 1],
            }}
          >
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
              {/* Image Card 1 */}
              <div
                ref={cardsParallax.ref}
                style={cardsParallax.style}
                className="relative rounded-xl lg:rounded-2xl overflow-hidden aspect-square bg-orange-300 group cursor-pointer"
              >
                <Image
                  src="/images/wheels.png"
                  alt="Mobility Equipment"
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 50vw, 15vw"
                />
              </div>

              {/* Image Card 2 */}
              <div
                ref={cardsParallax2.ref}
                style={cardsParallax2.style}
                className="bg-[#006663] p-3 lg:p-4 relative rounded-xl lg:rounded-2xl overflow-hidden aspect-square"
              >
                <Image
                  src="/images/walker.png"
                  alt="Walker Equipment"
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 50vw, 15vw"
                />
              </div>

              {/* Image Card 3 */}
              <div className="relative rounded-xl lg:rounded-2xl overflow-hidden aspect-square bg-gradient-to-br from-blue-100 to-blue-200">
                <Image
                  src="/images/categories/electric-wheelchair.jpg"
                  alt="Electric Wheelchair"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 15vw"
                />
              </div>

              {/* Image Card 4 */}
              <div className="relative rounded-xl lg:rounded-2xl overflow-hidden aspect-square bg-gradient-to-br from-purple-100 to-purple-200">
                <Image
                  src="/images/categories/mobility-scooters.jpg"
                  alt="Mobility Scooter"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 15vw"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
