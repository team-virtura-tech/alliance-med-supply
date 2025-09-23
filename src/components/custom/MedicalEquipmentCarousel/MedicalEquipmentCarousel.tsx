'use client';

import medicalEquipmentData from '@/lib/data/medicalEquipment.json';
import { cn } from '@/lib/utils';
import { type MedicalEquipmentItem } from '@/types/medicalEquipment';
import { EmblaCarouselType, EmblaOptionsType } from 'embla-carousel';
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import React, {
  ComponentPropsWithRef,
  useCallback,
  useEffect,
  useState,
} from 'react';

// Arrow button hooks and components
type UsePrevNextButtonsType = {
  prevBtnDisabled: boolean;
  nextBtnDisabled: boolean;
  onPrevButtonClick: () => void;
  onNextButtonClick: () => void;
};

const usePrevNextButtons = (
  emblaApi: EmblaCarouselType | undefined
): UsePrevNextButtonsType => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  }, [emblaApi]);

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect(emblaApi);
    emblaApi.on('reInit', onSelect).on('select', onSelect);
  }, [emblaApi, onSelect]);

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  };
};

// Dot button hooks and components
type UseDotButtonType = {
  selectedIndex: number;
  scrollSnaps: number[];
  onDotButtonClick: (index: number) => void;
};

const useDotButton = (
  emblaApi: EmblaCarouselType | undefined
): UseDotButtonType => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onDotButtonClick = useCallback(
    (index: number) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on('reInit', onInit).on('reInit', onSelect).on('select', onSelect);
  }, [emblaApi, onInit, onSelect]);

  return {
    selectedIndex,
    scrollSnaps,
    onDotButtonClick,
  };
};

type ButtonProps = ComponentPropsWithRef<'button'>;

const PrevButton: React.FC<ButtonProps> = ({ children, ...restProps }) => (
  <button
    className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-300 bg-white text-gray-600 shadow-sm transition-colors hover:bg-gray-50 hover:text-gray-900 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-100"
    type="button"
    {...restProps}
  >
    <svg className="h-5 w-5" viewBox="0 0 532 532" fill="currentColor">
      <path d="M355.66 11.354c13.793-13.805 36.208-13.805 50.001 0 13.785 13.804 13.785 36.238 0 50.034L201.22 266l204.442 204.61c13.785 13.805 13.785 36.239 0 50.044-13.793 13.796-36.208 13.796-50.002 0a5994246.277 5994246.277 0 0 0-229.332-229.454 35.065 35.065 0 0 1-10.326-25.126c0-9.2 3.393-18.26 10.326-25.2C172.192 194.973 332.731 34.31 355.66 11.354Z" />
    </svg>
    {children}
  </button>
);

const NextButton: React.FC<ButtonProps> = ({ children, ...restProps }) => (
  <button
    className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-300 bg-white text-gray-600 shadow-sm transition-colors hover:bg-gray-50 hover:text-gray-900 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-100"
    type="button"
    {...restProps}
  >
    <svg className="h-5 w-5" viewBox="0 0 532 532" fill="currentColor">
      <path d="M176.34 520.646c-13.793 13.805-36.208 13.805-50.001 0-13.785-13.804-13.785-36.238 0-50.034L330.78 266 126.34 61.391c-13.785-13.805-13.785-36.239 0-50.044 13.793-13.796 36.208-13.796 50.002 0 22.928 22.947 206.395 206.507 229.332 229.454a35.065 35.065 0 0 1 10.326 25.126c0 9.2-3.393 18.26-10.326 25.2-45.865 45.901-206.404 206.564-229.332 229.52Z" />
    </svg>
    {children}
  </button>
);

const DotButton: React.FC<ButtonProps & { isSelected?: boolean }> = ({
  children,
  isSelected,
  ...restProps
}) => (
  <button
    className={cn(
      'h-3 w-3 rounded-full transition-colors',
      isSelected
        ? 'bg-gray-900 dark:bg-white'
        : 'bg-gray-300 hover:bg-gray-400 dark:bg-gray-600 dark:hover:bg-gray-500'
    )}
    type="button"
    {...restProps}
  >
    {children}
  </button>
);

type MedicalEquipmentCarouselProps = {
  className?: string;
  options?: EmblaOptionsType;
  items?: MedicalEquipmentItem[];
};

export const MedicalEquipmentCarousel = ({
  className,
  options,
  items = medicalEquipmentData,
}: MedicalEquipmentCarouselProps) => {
  const defaultOptions: EmblaOptionsType = {
    slidesToScroll: 1,
    loop: true, // Enable infinite scrolling for better autoplay experience
    breakpoints: {
      '(min-width: 768px)': { slidesToScroll: 2 },
      '(min-width: 1024px)': { slidesToScroll: 3 },
    },
    ...options,
  };

  const [emblaRef, emblaApi] = useEmblaCarousel(defaultOptions, [
    Autoplay({ delay: 4000, stopOnInteraction: false }),
  ]);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  // Autoplay control hook
  const onAutoplayButtonClick = useCallback(
    (callback: () => void) => {
      const autoplay = emblaApi?.plugins()?.autoplay;
      if (!autoplay) return;

      const resetOrStop =
        autoplay.options.stopOnInteraction === false
          ? autoplay.reset
          : autoplay.stop;

      resetOrStop();
      callback();
    },
    [emblaApi]
  );

  return (
    <div className={cn('w-full h-full', className)}>
      <div className="overflow-hidden h-[75%]" ref={emblaRef}>
        <div className="flex gap-4 h-full">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0"
            >
              <div className="h-full bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden group cursor-pointer hover:shadow-md transition-shadow duration-300 flex flex-col">
                {/* Image */}
                <div className="relative h-full overflow-hidden flex-shrink-0">
                  <Image
                    src={item.image}
                    alt={`Medical equipment ${item.id}`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between mt-6">
        {/* Arrow Buttons */}
        <div className="flex items-center gap-2">
          <PrevButton
            onClick={() => onAutoplayButtonClick(onPrevButtonClick)}
            disabled={prevBtnDisabled}
          />
          <NextButton
            onClick={() => onAutoplayButtonClick(onNextButtonClick)}
            disabled={nextBtnDisabled}
          />
        </div>

        {/* Dot Indicators */}
        <div className="flex items-center gap-2">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() =>
                onAutoplayButtonClick(() => onDotButtonClick(index))
              }
              isSelected={index === selectedIndex}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
