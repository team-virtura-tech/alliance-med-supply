'use client';

import { motion, useReducedMotion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

import { cn } from '@/lib/utils';

export type ImageCarouselProps = {
  id?: string;
  className?: string;
  images: string[];
  scrollSpeed?: number; // Duration in seconds for one complete loop
};

export const ImageCarousel = ({
  id,
  className,
  images,
  scrollSpeed = 20, // 20 seconds for one complete loop
}: ImageCarouselProps) => {
  const componentName = 'ImageCarousel';
  const rootId = id ?? componentName;
  const shouldReduceMotion = useReducedMotion();

  const [isHovered, setIsHovered] = useState(false);

  // Calculate the width needed to move one full set of images
  // We'll use a responsive width per image to fit the container height
  const imageHeight = 250; // Fixed height per image in pixels
  const imageWidth = Math.round(imageHeight * 1.2); // Aspect ratio 1.2:1 (300px for 250px height)
  const imageGap = 16; // Gap between images in pixels
  const totalWidthPerImage = imageWidth + imageGap;
  const moveDistance = images.length * totalWidthPerImage;

  if (images.length === 0) {
    return (
      <div
        id={rootId}
        data-component={componentName}
        className={cn(
          'w-full h-80 rounded-2xl flex items-center justify-center',
          className
        )}
      >
        <p className="text-gray-500">No images to display</p>
      </div>
    );
  }

  return (
    <div
      id={rootId}
      data-component={componentName}
      className={cn(
        'relative w-full h-80 md:h-96 lg:h-[28rem] overflow-hidden rounded-2xl',
        className
      )}
      role="region"
      aria-label="Image carousel"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Gradient overlays for smooth edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-gray-50 to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-gray-50 to-transparent z-10" />

      {/* Infinite scroll container */}
      <div className="h-full overflow-hidden flex items-center">
        <motion.div
          className="flex items-center gap-4 px-4"
          style={{
            willChange: 'transform',
            height: `${imageHeight}px`,
          }}
          animate={
            shouldReduceMotion || isHovered
              ? {}
              : {
                  x: [0, -moveDistance],
                }
          }
          transition={{
            repeat: Infinity,
            repeatType: 'loop',
            duration: scrollSpeed,
            ease: 'linear',
          }}
        >
          {/* Repeat images twice for seamless loop */}
          {[...images, ...images].map((image, index) => (
            <div
              key={`${index}-${image}`}
              className="flex-shrink-0"
              style={{
                width: `${imageWidth}px`,
                height: `${imageHeight}px`,
              }}
            >
              <div className="relative w-full h-full overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
                <Image
                  src={image}
                  alt={`Product ${(index % images.length) + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  sizes={`${imageWidth}px`}
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
