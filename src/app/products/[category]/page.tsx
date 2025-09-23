import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { ProductCategoryPage } from '@/components/custom/ProductCategoryPage';
import { getCategoryByName, getCategorySlugs } from '@/lib/categories/utils';

interface PageProps {
  params: Promise<{
    category: string;
  }>;
}

export async function generateStaticParams() {
  const categorySlugs = getCategorySlugs();

  return categorySlugs.map((category) => ({
    category,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { category: categorySlug } = await params;
  const category = getCategoryByName(categorySlug);

  if (!category) {
    return {
      title: 'Category Not Found',
    };
  }

  return {
    title: `${category.name} | Alliance Medical Supply and Rental`,
    description: `Browse our selection of ${category.name.toLowerCase()} available for rent or purchase. Professional medical equipment in the Bay Area.`,
    keywords: `${category.name.toLowerCase()}, medical equipment rental, Bay Area, San Jose`,
    openGraph: {
      title: `${category.name} | Alliance Medical Supply`,
      description: `Professional ${category.name.toLowerCase()} rentals and sales in San Jose, CA.`,
      images: [
        {
          url: category.image,
          width: 1200,
          height: 630,
          alt: category.name,
        },
      ],
    },
  };
}

export default async function CategoryPage({ params }: PageProps) {
  const { category: categorySlug } = await params;
  const category = getCategoryByName(categorySlug);

  if (!category) {
    notFound();
  }

  return <ProductCategoryPage category={category} />;
}
