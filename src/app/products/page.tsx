import { ProductsPage } from '@/components/custom/ProductsPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Medical Equipment Products | Alliance Medical Supply and Rental',
  description:
    'Browse our complete selection of medical equipment available for rent or purchase. Wheelchairs, beds, mobility aids, and more in the Bay Area.',
  keywords:
    'medical equipment, wheelchairs, hospital beds, mobility scooters, medical supplies, Bay Area rental',
};

export default function Products() {
  return <ProductsPage />;
}
