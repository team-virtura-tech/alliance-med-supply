import { MedicalEquipmentCarousel } from '@/components/custom/MedicalEquipmentCarousel';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
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

export const HeroWithBentoGridOld = ({
  id,
  className,
  title = 'Quality Medical Equipment',
  subtitle = 'Keep your patients comfortable and mobile',
  description = "Professional medical supply rentals and sales. We understand your patients' needs and provide the equipment they require for recovery and mobility.",
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
      className={cn('w-full min-w-0 p-4 md:p-6 lg:p-8 ', className)}
    >
      <div className="">
        {/* Bento Grid Container - Two Main Columns: 40% left, 60% right */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 min-h-[700px]">
          {/* LEFT COLUMN - 40% (2 out of 5 columns) */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {/* Top Block - Hero Content */}
            <div className="h-80 p-6 md:p-8 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl flex flex-col justify-center">
              <div className="inline-flex items-center rounded-full bg-blue-100 dark:bg-blue-900 px-3 py-1 text-xs font-medium text-blue-700 dark:text-blue-300 w-fit">
                {subtitle}
              </div>

              <div className="mt-6">
                <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white md:text-4xl lg:text-5xl">
                  {title}
                </h1>
                <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  {description}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Button
                  size="lg"
                  onClick={onPrimaryClick}
                  className="bg-black hover:bg-gray-800 text-white"
                  style={{
                    borderBottomRightRadius: '16px',
                    borderTopLeftRadius: '16px',
                  }}
                >
                  {primaryButtonText}
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={onSecondaryClick}
                  className="border-gray-300 text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300"
                  style={{
                    borderBottomRightRadius: '16px',
                    borderTopLeftRadius: '16px',
                  }}
                >
                  {secondaryButtonText}
                </Button>
              </div>
            </div>

            {/* Bottom - Two Side-by-Side Blocks */}
            <div className="grid grid-cols-2 gap-6 h-80">
              {/* Left Block - Vertical Image */}
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#F48741] to-[#F0A372] group cursor-pointer">
                <Image
                  src="/images/wheels.png"
                  alt="Mobility Equipment"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
              </div>

              {/* Right Block - Dark Card with Countdown */}
              <div className="bg-[#006663] rounded-2xl p-6 text-white relative overflow-hidden">
                <Image
                  src="/images/walker.png"
                  alt="Mobility Equipment"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN - 60% (3 out of 5 columns) */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            {/* Top Block - Large Image */}
            <div className="h-80 relative rounded-2xl overflow-hidden bg-gradient-to-br from-green-400 to-emerald-600 group cursor-pointer">
              <Image
                src="/images/branding/van.png"
                alt="Hospital Bed"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />

              {/* Small Square Image Overlay - Bottom Right */}
              {/* <div className="absolute bottom-4 right-4 w-42 h-42 rounded-xl overflow-hidden bg-gradient-to-br from-orange-400 to-red-500 group cursor-pointer ">
                <Image
                  src="/images/knee-scooters/standard-knee-walker.jpeg"
                  alt="Knee Scooter"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="96px"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
              </div> */}
            </div>

            {/* Bottom - Carousel */}
            <div className="h-80 flex flex-col gap-4">
              {/* Carousel */}
              <div className="flex-1">
                <MedicalEquipmentCarousel />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
