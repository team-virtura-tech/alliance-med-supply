import { contact } from '@/data/contact';
import { IMAGES } from '@/lib/images';
import {
  generateBreadcrumbSchema,
  jsonLdScriptProps,
  pageSEO,
  siteConfig,
} from '@/lib/seo';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: pageSEO.about.title,
  description: pageSEO.about.description,
  keywords: pageSEO.about.keywords.join(', '),
  alternates: {
    canonical: `${siteConfig.url}/about-us`,
  },
  openGraph: {
    title: pageSEO.about.title,
    description: pageSEO.about.description,
    url: `${siteConfig.url}/about-us`,
    siteName: contact.businessName,
    locale: siteConfig.locale,
    type: 'website',
    images: [
      {
        url: IMAGES.ogHome,
        width: 1200,
        height: 630,
        alt: `About ${contact.businessName}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageSEO.about.title,
    description: pageSEO.about.description,
  },
};

// Breadcrumb structured data for about page
const breadcrumbData = generateBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'About Us', url: '/about-us' },
]);

// About page specific structured data
const aboutPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: `About ${contact.businessName}`,
  description: pageSEO.about.description,
  url: `${siteConfig.url}/about-us`,
  mainEntity: {
    '@type': 'MedicalBusiness',
    name: contact.businessName,
    description: siteConfig.description,
    foundingDate: '2004',
    numberOfEmployees: {
      '@type': 'QuantitativeValue',
      minValue: 5,
      maxValue: 20,
    },
    knowsAbout: [
      'Medical Equipment Rental',
      'Durable Medical Equipment',
      'Home Healthcare Equipment',
      'Mobility Aids',
      'Hospital Bed Rental',
      'Wheelchair Rental',
    ],
    hasCredential: {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'Accreditation',
      name: contact.accreditation,
    },
  },
};

export default function AboutUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script {...jsonLdScriptProps([breadcrumbData, aboutPageSchema])} />
      {children}
    </>
  );
}
