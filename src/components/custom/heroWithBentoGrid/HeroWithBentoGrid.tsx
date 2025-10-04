import { Button } from '@/components/ui/button';
import { useSimpleParallax } from '@/hooks/useParallax';
import { cn } from '@/lib/utils';
import { motion, useReducedMotion } from 'framer-motion';
import { Heart } from 'lucide-react';
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
  title = 'Quality Medical Equipment Rentals',
  subtitle = 'Keep your patients comfortable and mobile',
  description = 'Professional medical supply rentals and sales. We understand your patients needs and provide the equipment they require for recovery and mobility.',
  primaryButtonText = 'Browse Equipment',
  secondaryButtonText = 'Learn More',
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
        'w-full min-w-0 h-[calc(100vh-5rem)] flex items-center px-4 pb-6 md:px-6 md:pb-8 lg:px-8 lg:pb-10',
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
            <div className="inline-flex items-center rounded-full bg-teal-100 px-4 py-2 text-sm text-teal-700 w-fit mb-6">
              {subtitle}
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4 lg:mb-6">
              {title}
            </h1>

            <p className="text-base lg:text-lg text-gray-600 leading-relaxed mb-6 lg:mb-8">
              {description}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 lg:gap-4">
              <Button
                size="lg"
                onClick={onPrimaryClick}
                className="bg-teal-600 hover:bg-teal-700 text-white rounded-2xl px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-200"
              >
                <Heart className="mr-2 h-5 w-5" />
                {primaryButtonText}
              </Button>
              <Button
                variant="ghost"
                size="lg"
                onClick={onSecondaryClick}
                className="text-teal-600 hover:bg-teal-50 hover:text-teal-700 border border-teal-200 rounded-2xl px-8 py-3 transition-all duration-200"
              >
                ▶ {secondaryButtonText}
              </Button>
            </div>
          </div>
        </motion.div>

        {/* RIGHT COLUMN - Van Image Top + 4 Images Bottom (60%) */}
        <div className="w-full lg:flex-[0_0_60%] flex flex-col gap-4 lg:gap-6">
          {/* TOP - Van Image */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 30 }}
            animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.2,
              ease: [0.4, 0.0, 0.2, 1],
            }}
            className="flex-1 min-h-0"
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
