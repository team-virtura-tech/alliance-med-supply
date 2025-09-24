'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
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
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
            >
              <Card className="group h-full overflow-hidden border-0 shadow-lg bg-gradient-to-br from-orange-50 to-orange-100/50 rounded-3xl transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
                <div className="relative aspect-[4/3] overflow-hidden rounded-t-3xl mx-8">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>

                {/* Content Below Image */}
                <div className="p-8">
                  <h3 className="text-xl font-bold mb-3 text-slate-900 leading-tight">
                    {product.name}
                  </h3>

                  {product.sizes && product.sizes.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-3">
                      {product.sizes.map((size) => (
                        <Badge
                          key={size}
                          variant="outline"
                          className="text-xs border-slate-300 text-slate-600"
                        >
                          {size}
                        </Badge>
                      ))}
                    </div>
                  )}

                  <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3">
                    {product.description}
                  </p>

                  {/* CTA Button */}
                  <Button
                    asChild
                    className="w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    <Link
                      href={`/products/${encodeURIComponent(category.name)}/${product.id}`}
                      className="inline-flex items-center justify-center gap-2"
                    >
                      View Details
                      <svg
                        className="w-4 h-4 transition-transform group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Link>
                  </Button>
                </div>
              </Card>
            </motion.div>
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
