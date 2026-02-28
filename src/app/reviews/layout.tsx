import { contact } from '@/data/contact';
import {
  generateBreadcrumbSchema,
  jsonLdScriptProps,
  pageSEO,
  siteConfig,
} from '@/lib/seo';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: pageSEO.reviews.title,
  description: pageSEO.reviews.description,
  keywords: pageSEO.reviews.keywords.join(', '),
  alternates: {
    canonical: `${siteConfig.url}/reviews`,
  },
  openGraph: {
    title: pageSEO.reviews.title,
    description: pageSEO.reviews.description,
    url: `${siteConfig.url}/reviews`,
    siteName: contact.businessName,
    locale: siteConfig.locale,
    type: 'website',
    images: [
      {
        url: 'https://vid2aacotq8yjr89.public.blob.vercel-storage.com/alliance-med/seo/home-ogImage.png',
        width: 1200,
        height: 630,
        alt: `Customer Reviews - ${contact.businessName}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageSEO.reviews.title,
    description: pageSEO.reviews.description,
  },
};

// Breadcrumb structured data
const breadcrumbData = generateBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Reviews', url: '/reviews' },
]);

export default function ReviewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script {...jsonLdScriptProps(breadcrumbData)} />
      {children}
    </>
  );
}
