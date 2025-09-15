'use client';

import { ScrollProgress } from '@/app/components/custom/scrollProgress';
import { AboutSection } from '@/components/custom/about-section';
// import { AboutSection } from '@/components/custom/about-section';
import { ContactSection } from '@/components/custom/contact-section';
import { HeroWithMovingCards } from '@/components/custom/heroWithMovingCards';
import { RentalCategoriesGrid } from '@/components/custom/rental-categories';
import { ServicesSection } from '@/components/custom/services-section';
import { TestimonialsSection } from '@/components/custom/testimonials-section';

// Keep the existing commented code for reference
// export default function Home() {
//   // Mock props for HeroLandingSection
//   const heroFigure = {
//     // Add your actual props here
//     src: '/images/hero-landing-image-2.jpg',
//     alt: 'Hero background',
//   };

//   const heroContent = {
//     eyebrow: 'From transport chairs to rollators delivered and ready to go.',
//     title: 'With Alliance Medical Supply and Rental, mobility is simple.',
//     subtitle: '',
//     ctas: [
//       {
//         label: 'Get Started',
//         href: '/get-started',
//         variant: 'primary' as const,
//       },
//       {
//         label: 'Contact Us',
//         href: '/contact',
//         variant: 'secondary' as const,
//       },
//     ],
//   };

//   const heroCards = {
//     items: [
//       {
//         title: 'Wheelchairs',
//         body: 'Durable and easy-to-use wheelchairs for short or long-term rental.',
//       },
//       {
//         title: 'Hospital Beds',
//         body: 'Safe, adjustable hospital beds delivered and set up in your home.',
//       },
//       {
//         title: 'Walkers',
//         body: 'Lightweight walkers to help you stay mobile and independent.',
//       },
//       {
//         title: 'Transport Chairs',
//         body: 'Convenient chairs designed for easy transport and travel.',
//       },
//       {
//         title: 'Crutches',
//         body: 'Comfortable and adjustable crutches to support safe recovery.',
//       },
//       {
//         title: 'Knee Walkers',
//         body: 'Stable knee walkers that provide smooth mobility during healing.',
//       },
//       {
//         title: 'Laser TouchOne',
//         body: 'Advanced pain relief technology available for convenient rental.',
//       },
//       {
//         title: 'Click to view more',
//         body: '',
//       },
//     ],
//   };

//   return (
//     <ParallaxBackground>
//       <div className="min-h-screen">
//         {/* Hero Section - already has internal animations */}
//         <ScrollAnimation direction="fade" duration={0.8}>
//           <HeroLandingSection
//             figure={heroFigure}
//             content={heroContent}
//             cards={heroCards}
//           />
//         </ScrollAnimation>
//       </div>
//       <ScrollProgress />
//     </ParallaxBackground>
//   );
// }

export default function Home() {
  return (
    <>
      {/* Modern redesigned home page */}
      <HeroWithMovingCards />
      <RentalCategoriesGrid />
      <ServicesSection />
      <AboutSection />
      <TestimonialsSection />
      <ContactSection />
      <ScrollProgress />
    </>
  );
}
