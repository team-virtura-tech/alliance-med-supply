import { ProductsPage } from '@/components/custom/ProductsPage';
import { contact } from '@/data/contact';
import {
  generateBreadcrumbSchema,
  jsonLdScriptProps,
  pageSEO,
  siteConfig,
} from '@/lib/seo';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: pageSEO.products.title,
  description: pageSEO.products.description,
  keywords: pageSEO.products.keywords.join(', '),
  alternates: {
    canonical: `${siteConfig.url}/products`,
  },
  openGraph: {
    title: pageSEO.products.title,
    description: pageSEO.products.description,
    url: `${siteConfig.url}/products`,
    siteName: contact.businessName,
    locale: siteConfig.locale,
    type: 'website',
    images: [
      {
        url: 'https://vid2aacotq8yjr89.public.blob.vercel-storage.com/alliance-med/seo/home-ogImage.png',
        width: 1200,
        height: 630,
        alt: 'Medical Equipment - Alliance Medical Supply & Rental',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageSEO.products.title,
    description: pageSEO.products.description,
  },
};

// Structured data for products page
const breadcrumbData = generateBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Products', url: '/products' },
]);

// ItemList schema for product categories
const productCatalogSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Medical Equipment Catalog',
  description: pageSEO.products.description,
  url: `${siteConfig.url}/products`,
  mainEntity: {
    '@type': 'ItemList',
    name: 'Medical Equipment Categories',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Wheelchairs',
        url: `${siteConfig.url}/products/wheelchairs`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Electric Wheelchairs',
        url: `${siteConfig.url}/products/electric-wheelchairs`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Transport Chairs',
        url: `${siteConfig.url}/products/transport-chairs`,
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: 'Knee Scooters',
        url: `${siteConfig.url}/products/knee-scooters`,
      },
      {
        '@type': 'ListItem',
        position: 5,
        name: 'Rollators',
        url: `${siteConfig.url}/products/rollators`,
      },
      {
        '@type': 'ListItem',
        position: 6,
        name: 'Hospital Beds',
        url: `${siteConfig.url}/products/electric-hospital-beds-and-mattresses`,
      },
      {
        '@type': 'ListItem',
        position: 7,
        name: 'Patient Lifts',
        url: `${siteConfig.url}/products/stand-assists-and-lifts`,
      },
      {
        '@type': 'ListItem',
        position: 8,
        name: 'Mobility Scooters',
        url: `${siteConfig.url}/products/mobility-scooters`,
      },
      {
        '@type': 'ListItem',
        position: 9,
        name: 'CPM Machine',
        url: `${siteConfig.url}/products/cpm-machine`,
      },
      {
        '@type': 'ListItem',
        position: 10,
        name: 'Lift Chairs',
        url: `${siteConfig.url}/products/lift-chair`,
      },
      {
        '@type': 'ListItem',
        position: 11,
        name: 'PureWick',
        url: `${siteConfig.url}/products/purewick`,
      },
    ],
  },
};

export default function Products() {
  return (
    <>
      <script {...jsonLdScriptProps([breadcrumbData, productCatalogSchema])} />
      <ProductsPage />
    </>
  );
}
