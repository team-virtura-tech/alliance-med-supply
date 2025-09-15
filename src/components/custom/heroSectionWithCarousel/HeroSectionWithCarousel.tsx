import { cn } from '@/lib/utils';
import { HeroContent } from './HeroContent';
import { ImageCarousel } from './ImageCarousel';

export type HeroSectionWithCarouselProps = {
  id?: string;
  className?: string;
};

export const HeroSectionWithCarousel = ({
  id,
  className,
}: HeroSectionWithCarouselProps) => {
  const componentName = 'HeroSectionWithCarousel';
  const rootId = id ?? componentName;

  // Sample images for the 3D ring - medical supply focused
  const ringImages = [
    '/images/hero-landing-image.jpg',
    '/images/hero-landing-image-2.jpg',
    '/images/landing-hero.jpg',
    '/logo/logo.jpg',
    'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=800&q=80', // Medical supplies
    // 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=800&q=80', // Hospital equipment
    // 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=800&q=80', // Medical devices
    // 'https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?auto=format&fit=crop&w=800&q=80', // Healthcare
    // 'https://images.unsplash.com/photo-1569111784175-d0051a2a7de4?auto=format&fit=crop&w=800&q=80', // Medical equipment
    // 'https://images.unsplash.com/photo-1612277795421-9bc7706a4a34?auto=format&fit=crop&w=800&q=80', // Pharmacy supplies
  ];

  return (
    <section
      id={rootId}
      data-component={componentName}
      className={cn(
        'w-full min-h-screen bg-gradient-to-br from-slate-50 to-gray-100',
        className
      )}
    >
      <div className="container mx-auto px-4 py-12">
        {/* Hero Content - Full Width */}
        <div className="mb-16">
          <HeroContent />
        </div>

        {/* 3D Image Carousel - Full Width Below Content */}
        <div className="w-full">
          <ImageCarousel images={ringImages} scrollSpeed={50} />
        </div>
      </div>
    </section>
  );
};
