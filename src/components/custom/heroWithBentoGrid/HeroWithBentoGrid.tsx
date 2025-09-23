import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Eye, Heart } from 'lucide-react';
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
  const rootId = id ?? componentName;

  return (
    <section
      id={rootId}
      data-component={componentName}
      className={cn('w-full min-w-0 p-4 md:p-6 lg:p-8', className)}
    >
      {/* Main Wrapper - Full Width */}
      <div className="w-full">
        {/* ROW 1 - Content Card + Van Image */}
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 mb-4 lg:mb-6">
          {/* ROW 1, COL 1 - Content Card (40%) */}
          <div className="w-full lg:flex-[0_0_40%]">
            <div className="bg-gradient-to-br from-teal-50 via-white to-orange-50 rounded-2xl lg:rounded-3xl p-6 lg:p-8 xl:p-10 h-full flex flex-col justify-center shadow-sm min-h-[350px] lg:min-h-[400px]">
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
          </div>

          {/* ROW 1, COL 2 - Van Image (60%) */}
          <div className="w-full lg:flex-[0_0_60%]">
            <div className="relative rounded-2xl lg:rounded-3xl overflow-hidden h-full min-h-[250px] lg:min-h-[400px]">
              <Image
                src="/images/branding/van-1.png"
                alt="Alliance Medical Supply Van - Professional medical equipment delivery"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />

              {/* Tag overlay */}
              <div className="absolute top-6 left-6">
                <span className="bg-orange-500 text-white text-sm px-4 py-2 rounded-full font-medium shadow-lg">
                  Professional Service
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ROW 2 - Two Images Side by Side + Article Card */}
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
          {/* ROW 2, COL 1 - Two Images Side by Side (40%) */}
          <div className="w-full lg:flex-[0_0_40%] flex gap-4 lg:gap-6">
            {/* Mobility Scooter Image */}
            <div className="flex-1">
              <div className="relative rounded-2xl lg:rounded-3xl overflow-hidden h-full min-h-[200px] lg:min-h-[250px]">
                <Image
                  src="/images/categories/mobility-scooters.jpg"
                  alt="Mobility Scooter - Patient mobility solutions"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
            </div>

            {/* Medical Equipment Image Card */}
            <div className="flex-1">
              <div className="relative rounded-2xl lg:rounded-3xl overflow-hidden h-full min-h-[200px] lg:min-h-[250px]">
                <Image
                  src="/images/categories/electric-wheelchair.jpg"
                  alt="Electric Wheelchair - Medical Equipment"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 20vw"
                />
              </div>
            </div>
          </div>

          {/* ROW 2, COL 2 - Article Card with Image (60%) */}
          <div className="w-full lg:flex-[0_0_60%]">
            <div className="bg-gradient-to-br from-orange-50 to-teal-50 rounded-2xl lg:rounded-3xl p-4 lg:p-6 h-full min-h-[200px] lg:min-h-[250px] flex flex-col lg:flex-row gap-4 lg:gap-6 border border-orange-100">
              {/* Left side - Large Image (responsive) */}
              <div className="relative w-full h-32 lg:w-48 lg:h-full rounded-2xl lg:rounded-3xl overflow-hidden flex-shrink-0">
                <Image
                  src="/images/walker.png"
                  alt="Medical walker for patient recovery"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 192px"
                />
              </div>

              {/* Right side - Well Structured Content */}
              <div className="flex-1 flex flex-col justify-between py-1 lg:py-2">
                {/* Header with heart icon and title */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Heart className="h-4 w-4 text-orange-500" />
                    <span className="text-sm text-teal-700 font-medium">
                      Basic equipment for patient recovery
                    </span>
                  </div>
                  <h3 className="text-lg lg:text-xl font-semibold text-gray-900 mb-2">
                    Quality Medical Equipment Rentals
                  </h3>
                  <p className="text-gray-700 text-xs lg:text-sm leading-relaxed">
                    Quality medical equipment rentals support patient mobility
                    and comfort during recovery periods.
                  </p>
                </div>

                {/* Stats section */}
                <div className="space-y-2 lg:space-y-3">
                  <div className="flex items-center gap-4 lg:gap-6 text-xs lg:text-sm text-gray-800 font-medium">
                    <div className="flex items-center gap-1 lg:gap-2">
                      <Eye className="h-3 w-3 lg:h-4 lg:w-4 text-gray-700" />
                      <span>456,779 Views</span>
                    </div>
                    <div className="flex items-center gap-1 lg:gap-2">
                      <Heart className="h-3 w-3 lg:h-4 lg:w-4 text-red-500" />
                      <span>45,789 Likes</span>
                    </div>
                  </div>

                  {/* Author info */}
                  <div className="flex items-center gap-2 lg:gap-3">
                    <div className="relative w-6 h-6 lg:w-8 lg:h-8 rounded-full overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-r from-teal-500 to-orange-500 flex items-center justify-center">
                        <span className="text-white text-xs font-bold">A</span>
                      </div>
                    </div>
                    <div>
                      <span className="text-xs lg:text-sm font-semibold text-gray-900">
                        Alliance Medical
                      </span>
                      <span className="text-xs lg:text-sm text-gray-600 ml-1 lg:ml-2">
                        4 days ago
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
