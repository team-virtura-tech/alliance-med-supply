'use client';

import { ProductCard } from '@/components/custom/ProductCard';
import { Badge } from '@/components/ui/badge';
import { getCategorySlug, getProductSlug } from '@/lib/categories/utils';
import { cn } from '@/lib/utils';
import type { Category } from '@/types/categories';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export type ProductCategoryPageProps = {
  id?: string;
  category: Category;
  className?: string;
};

export const ProductCategoryPage = ({
  id,
  category,
  className,
}: ProductCategoryPageProps) => {
  const reduce = useReducedMotion();
  const componentName = 'ProductCategoryPage';
  const rootId = id ?? componentName;

  return (
    <div
      id={rootId}
      data-component={componentName}
      className={cn(
        'min-h-screen bg-background pt-20 pb-12 md:pt-24 md:pb-16 lg:pt-28 lg:pb-20',
        className
      )}
    >
      <div className="mx-auto w-full max-w-screen-xl px-4 md:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={reduce ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="mb-8 md:mb-10 lg:mb-12"
        >
          <Link
            href="/products"
            className="mb-6 inline-flex items-center gap-2 text-sm text-text-muted hover:text-text-primary transition-colors md:mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Products
          </Link>

          <div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-6 lg:gap-8">
            {/* Category Image */}
            <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-2xl md:h-32 md:w-32 lg:h-36 lg:w-36">
              <Image
                src={category.image}
                alt={category.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 96px, (max-width: 1024px) 128px, 144px"
                priority
              />
            </div>

            {/* Category Info */}
            <div className="flex-1 space-y-2 md:space-y-3">
              <h1 className="text-2xl font-bold tracking-tight text-text-primary md:text-3xl lg:text-4xl xl:text-5xl">
                {category.name}
              </h1>
              <p className="text-base text-text-muted md:text-lg lg:text-xl">
                Browse our selection of {category.name.toLowerCase()} available
                for rent or purchase
              </p>
              <div className="flex items-center gap-2 pt-1">
                <Badge
                  variant="accent"
                  className="text-xs font-semibold md:text-sm"
                >
                  {category.products.length}{' '}
                  {category.products.length === 1 ? 'Product' : 'Products'}
                </Badge>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Products Grid */}
        {category.products.length > 0 && (
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={reduce ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.25, delay: reduce ? 0 : 0.1 }}
            className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3"
          >
            {category.products.map((product, index) => (
              <ProductCard
                key={product.id}
                id={`ProductCard-${product.id}`}
                variant="product"
                index={index}
                data={{
                  id: product.id,
                  name: product.name,
                  image: product.image,
                  description: product.description,
                  sizes: product.sizes,
                  href: `/products/${getCategorySlug(category.name)}/${getProductSlug(product.name)}`,
                  ctaText: 'View Details',
                }}
              />
            ))}
          </motion.div>
        )}

        {/* Empty State */}
        {category.products.length === 0 && (
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={reduce ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.25, delay: reduce ? 0 : 0.1 }}
            className="flex flex-col items-center justify-center py-12 text-center md:py-16 lg:py-20"
          >
            <div className="mb-4 text-5xl md:text-6xl" aria-hidden="true">
              📦
            </div>
            <h3 className="mb-2 text-lg font-semibold text-text-primary md:text-xl">
              No Products Available
            </h3>
            <p className="text-sm text-text-muted md:text-base max-w-md">
              We&apos;re currently updating our {category.name.toLowerCase()}{' '}
              inventory. Please check back soon.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};
