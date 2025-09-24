import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { ProductDetailPage } from '@/components/custom/ProductDetailPage';
import {
  getCategories,
  getCategorySlug,
  getProductBySlugInCategory,
  getProductSlug,
} from '@/lib/categories/utils';

interface PageProps {
  params: Promise<{
    category: string;
    productId: string;
  }>;
}

export async function generateStaticParams() {
  const categories = getCategories();
  const paths: { category: string; productId: string }[] = [];

  categories.forEach((category) => {
    const categorySlug = getCategorySlug(category.name);
    category.products.forEach((product) => {
      paths.push({
        category: categorySlug,
        productId: getProductSlug(product.name),
      });
    });
  });

  return paths;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { category: categorySlug, productId: productSlug } = await params;
  const result = getProductBySlugInCategory(categorySlug, productSlug);

  if (!result) {
    return {
      title: 'Product Not Found',
    };
  }

  const { product, category } = result;

  return {
    title: `${product.name} | ${category.name} | Alliance Medical Supply`,
    description: `${product.description} Available for rent or purchase in the Bay Area.`,
    keywords: `${product.name}, ${category.name.toLowerCase()}, medical equipment rental, Bay Area, San Jose`,
    openGraph: {
      title: `${product.name} | Alliance Medical Supply`,
      description: product.description,
      images: [
        {
          url: product.image,
          width: 1200,
          height: 630,
          alt: product.name,
        },
      ],
    },
  };
}

export default async function ProductPage({ params }: PageProps) {
  const { category: categorySlug, productId: productSlug } = await params;
  const result = getProductBySlugInCategory(categorySlug, productSlug);

  if (!result) {
    notFound();
  }

  const { product, category } = result;

  return <ProductDetailPage product={product} category={category} />;
}
