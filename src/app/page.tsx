'use client';

import { ScrollProgress } from '@/app/components/custom/scrollProgress';
import { CtaSection } from '@/components/custom/cta-section';
import { GoogleReviews } from '@/components/custom/GoogleReviews';
import { HeroWithBentoGrid } from '@/components/custom/heroWithBentoGrid';
import { RentalCategoriesGrid } from '@/components/custom/rental-categories';
import { ServiceAreaSection } from '@/components/custom/service-area-section';
import { FAQSchema } from '@/components/seo';
import { useSimpleParallax } from '@/hooks/useParallax';

export default function Home() {
  // Subtle parallax for background sections
  const sectionsParallax = useSimpleParallax(0.05);

  return (
    <main className="pt-24 md:pt-28 lg:pt-32">
      {/* FAQ Schema for SEO - helps with featured snippets and "near me" searches */}
      <FAQSchema />

      {/* Modern redesigned home page */}
      <div className="w-full">
        <HeroWithBentoGrid />
      </div>
      <div ref={sectionsParallax.ref} style={sectionsParallax.style}>
        <RentalCategoriesGrid />
      </div>
      <GoogleReviews />
      <ServiceAreaSection />
      <CtaSection />
      <ScrollProgress />
    </main>
  );
}
