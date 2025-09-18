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

export const HeroWithBentoGrid = ({
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
              <div className="bg-gray-900 dark:bg-gray-800 rounded-2xl p-6 text-white relative overflow-hidden">
                <div className="absolute top-4 right-4">
                  <div className="flex items-center gap-2 text-xs text-gray-400">
                    <span>6 day left</span>
                    <div className="w-4 h-4 rounded bg-blue-500 flex items-center justify-center">
                      <span className="text-xs">↗</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="text-xl font-semibold mb-2">Rent 50% Off</h3>
                  <p className="text-gray-300 text-sm mb-4">
                    Any equipment rental
                  </p>

                  <div className="relative rounded-lg overflow-hidden h-20 bg-gray-800">
                    <Image
                      src="/images/electric-wheelchairs/power-chair.jpeg"
                      alt="Featured Equipment"
                      fill
                      className="object-cover"
                      sizes="200px"
                    />
                  </div>
                </div>
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

            {/* Bottom - Stacked Blocks */}
            <div className="h-80 flex flex-col gap-6">
              {/* Wide Content Card */}
              <div className="flex-1 bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
                <div className="flex items-start gap-4">
                  <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-gradient-to-br from-yellow-400 to-orange-500">
                    <Image
                      src="/images/rollators/standard-rollator.jpeg"
                      alt="Rollator"
                      fill
                      className="object-cover"
                      sizes="64px"
                    />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        Essential mobility aids for recovery
                      </h3>
                      <button className="text-red-500 hover:text-red-600">
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                      Quality mobility equipment designed for comfort and
                      independence. Our range includes wheelchairs, scooters,
                      and walking aids.
                    </p>

                    <div className="flex items-center gap-6 text-sm text-gray-500 dark:text-gray-400 mb-4">
                      <div className="flex items-center gap-1">
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                          <path
                            fillRule="evenodd"
                            d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span>456,777 Views</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span>46,786 Likes</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-gray-300 dark:bg-gray-600 flex items-center justify-center">
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          AK
                        </span>
                      </div>
                      <span className="text-sm font-medium text-gray-900 dark:text-white">
                        Alliance Medical
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
