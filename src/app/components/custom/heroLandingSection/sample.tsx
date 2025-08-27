// Sample implementation with Alliance Medical Supply content
import { Activity, Shield, Truck } from 'lucide-react';
import { HeroLandingSectionProps } from './HeroLandingSection';

export const allianceMedicalHeroProps: HeroLandingSectionProps = {
  figure: {
    src: '/images/landing-full-hero.jpg',
    alt: 'Modern medical facility with professional healthcare equipment',
    priority: true,
    sizes: '100vw',
  },
  content: {
    eyebrow: 'Medical Equipment Excellence',
    title: 'Professional Healthcare Solutions You Can Trust',
    subtitle:
      'From rental equipment to comprehensive supply solutions, we provide the medical tools healthcare professionals need to deliver exceptional patient care.',
    ctas: [
      {
        label: 'Book a Demo',
        href: '/demo',
        variant: 'primary',
      },
      {
        label: 'Start Your Free Trial',
        href: '/trial',
        variant: 'secondary',
      },
    ],
  },
  cards: {
    items: [
      {
        icon: <Activity className="w-6 h-6" />,
        title: 'AI-Powered Equipment Management',
        body: 'Automated inventory tracking and predictive maintenance reduce downtime by 80% and eliminate manual oversight.',
      },
      {
        icon: <Shield className="w-6 h-6" />,
        title: 'Seamless Healthcare Integration',
        body: 'Connect directly with your EHR, billing systems, and compliance platforms for streamlined operations.',
      },
      {
        icon: <Truck className="w-6 h-6" />,
        title: '100% Compliant Delivery',
        body: 'FDA-certified equipment delivery with full regulatory compliance, insurance coverage, and maintenance support.',
      },
    ],
  },
};
