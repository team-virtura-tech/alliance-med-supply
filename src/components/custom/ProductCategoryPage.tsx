'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { cn } from '@/lib/utils';
import type { Category } from '@/types/categories';
import { motion } from 'framer-motion';
import { ArrowLeft, ShoppingCart } from 'lucide-react';
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
              <Card className="group h-full overflow-hidden transition-all duration-300 hover:shadow-lg">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>

                <CardHeader className="pb-3">
                  <CardTitle className="line-clamp-2 text-lg">
                    {product.name}
                  </CardTitle>
                  {product.sizes && product.sizes.length > 0 && (
                    <div className="flex flex-wrap gap-1">
                      {product.sizes.map((size) => (
                        <Badge key={size} variant="outline" className="text-xs">
                          {size}
                        </Badge>
                      ))}
                    </div>
                  )}
                </CardHeader>

                <CardContent className="pt-0">
                  <CardDescription className="line-clamp-3 text-sm">
                    {product.description}
                  </CardDescription>

                  <div className="mt-4 flex gap-2">
                    <Button asChild className="flex-1">
                      <Link
                        href={`/products/${encodeURIComponent(category.name)}/${product.id}`}
                      >
                        View Details
                      </Link>
                    </Button>
                    <Button variant="outline" size="icon">
                      <ShoppingCart className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
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
