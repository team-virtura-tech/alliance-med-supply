'use client';

import { LandingHero } from '@/app/components/custom/landingHero/landingHero';
import { ParallaxBackground } from '@/app/components/custom/parallaxBackground';
import { ScrollAnimation } from '@/app/components/custom/scrollAnimation';
import { ScrollProgress } from '@/app/components/custom/scrollProgress';

export default function Home() {
  return (
    <ParallaxBackground>
      <div className="min-h-screen">
        {/* Hero Section - already has internal animations */}
        <ScrollAnimation direction="fade" duration={0.8}>
          <LandingHero />
        </ScrollAnimation>
      </div>
      <ScrollProgress />
    </ParallaxBackground>
  );
}
