'use client';

import { HeroLandingSection } from '@/app/components/custom/heroLandingSection/HeroLandingSection';
import { ParallaxBackground } from '@/app/components/custom/parallaxBackground';
import { ScrollAnimation } from '@/app/components/custom/scrollAnimation';
import { ScrollProgress } from '@/app/components/custom/scrollProgress';

export default function Home() {
  // Mock props for HeroLandingSection
  const heroFigure = {
    // Add your actual props here
    src: '/images/hero-landing-image.jpg',
    alt: 'Hero background',
  };

  const heroContent = {
    eyebrow: '',
    title: 'With Alliance Medical Supply and Rental, mobility is simple.',
    subtitle: 'From transport chairs to rollators delivered and ready to go.',
    ctas: [
      {
        label: 'Get Started',
        href: '/get-started',
        variant: 'primary' as const,
      },
      {
        label: 'Contact Us',
        href: '/contact',
        variant: 'secondary' as const,
      },
    ],
  };

  const heroCards = {
    items: [
      {
        title: 'Fast Delivery',
        body: 'We ensure quick and reliable delivery for all orders.',
      },
      {
        title: 'Quality Products',
        body: 'All our products are certified and quality-checked.',
      },
      {
        title: '24/7 Support',
        body: 'Our team is available around the clock for your needs.',
      },
    ],
  };

  return (
    <ParallaxBackground>
      <div className="min-h-screen">
        {/* Hero Section - already has internal animations */}
        <ScrollAnimation direction="fade" duration={0.8}>
          <HeroLandingSection
            figure={heroFigure}
            content={heroContent}
            cards={heroCards}
          />
        </ScrollAnimation>
      </div>
      <ScrollProgress />
    </ParallaxBackground>
  );
}
