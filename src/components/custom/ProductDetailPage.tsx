'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, ShoppingCart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { ProductCard } from '@/components/custom/ProductCard';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { getCategorySlug, getProductSlug } from '@/lib/categories/utils';
import { cn } from '@/lib/utils';
import type { Category, Product } from '@/types/categories';

export type ProductDetailPageProps = {
  product: Product;
  category: Category;
  className?: string;
};

export const ProductDetailPage = ({
  product,
  category,
  className,
}: ProductDetailPageProps) => {
  return (
    <div
      id="ProductDetailPage"
      data-component="ProductDetailPage"
      className={cn(
        'min-h-screen bg-background pt-24 md:pt-28 lg:pt-32 pb-8',
        className
      )}
    >
      <div className="mx-auto w-full max-w-screen-xl px-4 md:px-6">
        {/* Breadcrumb Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mb-8 flex flex-wrap items-center gap-2 text-sm text-muted-foreground"
        >
          <Link
            href="/products"
            className="hover:text-foreground transition-colors"
          >
            Products
          </Link>
          <span>/</span>
          <Link
            href={`/products/${getCategorySlug(category.name)}`}
            className="hover:text-foreground transition-colors"
          >
            {category.name}
          </Link>
          <span>/</span>
          <span className="text-foreground">{product.name}</span>
        </motion.div>

        {/* Product Details */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="relative aspect-square overflow-hidden rounded-3xl bg-gradient-to-br from-orange-50 to-orange-100/30"
          >
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </motion.div>

          {/* Product Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Category Badge */}
            {/* <div>
              <Badge className="bg-teal-100 text-teal-700 hover:bg-teal-200 px-4 py-2 text-sm font-medium rounded-full">
                {category.name}
              </Badge>
            </div> */}

            {/* Availability Pills */}
            <div className="flex flex-wrap gap-2">
              <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 px-3 py-1.5 text-xs font-medium rounded-full">
                Rental Available
              </Badge>
              <Badge className="bg-green-100 text-green-700 hover:bg-green-200 px-3 py-1.5 text-xs font-medium rounded-full">
                Purchase Available
              </Badge>
            </div>

            {/* Product Title */}
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl lg:text-6xl">
                {product.name}
              </h1>
            </div>

            {/* Sizes */}
            {product.sizes && product.sizes.length > 0 && (
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-slate-900">
                  Available Sizes
                </h3>
                <div className="flex flex-wrap gap-3">
                  {product.sizes.map((size) => (
                    <Badge
                      key={size}
                      variant="outline"
                      className="px-4 py-2 text-base font-medium border-2 border-slate-200 text-slate-700 hover:border-slate-300 rounded-xl"
                    >
                      {size}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {/* Description */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-slate-900">Description</h3>
              <p className="text-slate-600 text-lg leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Call to Action */}
            <div className="space-y-6 pt-4">
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button
                  size="lg"
                  className="flex-1 bg-teal-500 hover:bg-teal-600 text-white font-semibold py-4 px-8 rounded-2xl text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <ShoppingCart className="mr-3 h-5 w-5" />
                  Call (408) 942-9000 for Quote
                </Button>
              </div>
            </div>

            {/* Professional Medical Equipment Rental Banner */}
            <div className="bg-teal-50 rounded-3xl p-8 border border-teal-100">
              <div className="text-center space-y-4">
                <h3 className="text-2xl font-bold text-teal-800">
                  Professional Medical Equipment Rental
                </h3>
                <p className="text-lg text-teal-700">
                  Same-day delivery available in the Bay Area
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Related Products */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
          className="mt-16"
        >
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-2xl font-bold">More {category.name}</h2>
            <Button variant="outline" asChild>
              <Link href={`/products/${getCategorySlug(category.name)}`}>
                View All
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {category.products
              .filter((p) => p.id !== product.id)
              .slice(0, 3)
              .map((relatedProduct, index) => (
                <ProductCard
                  key={relatedProduct.id}
                  variant="product"
                  index={index}
                  data={{
                    id: relatedProduct.id,
                    name: relatedProduct.name,
                    image: relatedProduct.image,
                    description: relatedProduct.description,
                    sizes: relatedProduct.sizes,
                    href: `/products/${getCategorySlug(category.name)}/${getProductSlug(relatedProduct.name)}`,
                    ctaText: 'View Details',
                  }}
                />
              ))}
          </div>
        </motion.div>

        {/* Back to Category */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <Button variant="outline" asChild>
            <Link
              href={`/products/${getCategorySlug(category.name)}`}
              className="inline-flex items-center gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to {category.name}
            </Link>
          </Button>
        </motion.div>
      </div>
    </div>
  );
};
