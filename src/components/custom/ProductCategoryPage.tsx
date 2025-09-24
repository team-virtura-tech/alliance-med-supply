'use client';

import { ProductCard } from '@/components/custom/ProductCard';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import type { Category } from '@/types/categories';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export type ProductCategoryPageProps = {
  category: Category;
  className?: string;
};

export const ProductCategoryPage = ({
  category,
  className,
}: ProductCategoryPageProps) => {
  return (
    <div
      id="ProductCategoryPage"
      data-component="ProductCategoryPage"
      className={cn('min-h-screen bg-background py-8', className)}
    >
      <div className="mx-auto w-full max-w-screen-xl px-4 md:px-6">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mb-8"
        >
          <Link
            href="/"
            className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>

          <div className="flex flex-col gap-6 md:flex-row md:items-center md:gap-8">
            <div className="relative h-32 w-32 shrink-0 overflow-hidden rounded-xl md:h-40 md:w-40">
              <Image
                src={category.image}
                alt={category.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 128px, 160px"
              />
            </div>

            <div className="flex-1 space-y-2">
              <h1 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
                {category.name}
              </h1>
              <p className="text-lg text-muted-foreground md:text-xl">
                Browse our selection of {category.name.toLowerCase()} available
                for rent or purchase
              </p>
              <div className="flex items-center gap-2">
                <Badge variant="secondary">
                  {category.products.length}{' '}
                  {category.products.length === 1 ? 'Product' : 'Products'}
                </Badge>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {category.products.map((product, index) => (
            <ProductCard
              key={product.id}
              variant="product"
              index={index}
              data={{
                id: product.id,
                name: product.name,
                image: product.image,
                description: product.description,
                sizes: product.sizes,
                href: `/products/${encodeURIComponent(category.name)}/${product.id}`,
                ctaText: 'View Details',
              }}
            />
          ))}
        </motion.div>

        {/* Empty State */}
        {category.products.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="flex flex-col items-center justify-center py-16 text-center"
          >
            <div className="mb-4 text-6xl">📦</div>
            <h3 className="mb-2 text-xl font-semibold">
              No Products Available
            </h3>
            <p className="text-muted-foreground">
              We&apos;re currently updating our {category.name.toLowerCase()}{' '}
              inventory. Please check back soon.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};
