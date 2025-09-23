'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Phone, ShoppingCart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
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
      className={cn('min-h-screen bg-background py-8', className)}
    >
      <div className="mx-auto w-full max-w-screen-xl px-4 md:px-6">
        {/* Breadcrumb Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mb-8 flex flex-wrap items-center gap-2 text-sm text-muted-foreground"
        >
          <Link href="/" className="hover:text-foreground transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link
            href={`/products/${encodeURIComponent(category.name)}`}
            className="hover:text-foreground transition-colors"
          >
            {category.name}
          </Link>
          <span>/</span>
          <span className="text-foreground">{product.name}</span>
        </motion.div>

        {/* Product Details */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="relative aspect-square overflow-hidden rounded-xl bg-muted"
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
            className="space-y-6"
          >
            <div>
              <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
                {product.name}
              </h1>
              <p className="mt-2 text-lg text-muted-foreground">
                {category.name}
              </p>
            </div>

            {/* Sizes */}
            {product.sizes && product.sizes.length > 0 && (
              <div>
                <h3 className="mb-3 text-lg font-semibold">Available Sizes</h3>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <Badge key={size} variant="outline" className="px-3 py-1">
                      {size}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {/* Description */}
            <div>
              <h3 className="mb-3 text-lg font-semibold">Description</h3>
              <p className="text-muted-foreground leading-relaxed">
                {product.description}
              </p>
            </div>

            <Separator />

            {/* Call to Action */}
            <div className="space-y-4">
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button size="lg" className="flex-1">
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Request Quote
                </Button>
                <Button variant="outline" size="lg" className="flex-1">
                  <Phone className="mr-2 h-5 w-5" />
                  Call (408) 942-9000
                </Button>
              </div>

              <div className="rounded-lg bg-muted p-4 text-center text-sm text-muted-foreground">
                <p className="font-medium">
                  Professional Medical Equipment Rental
                </p>
                <p>Same-day delivery available in the Bay Area</p>
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
              <Link href={`/products/${encodeURIComponent(category.name)}`}>
                View All
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {category.products
              .filter((p) => p.id !== product.id)
              .slice(0, 3)
              .map((relatedProduct) => (
                <Card
                  key={relatedProduct.id}
                  className="group overflow-hidden transition-all duration-300 hover:shadow-lg"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>

                  <CardHeader className="pb-3">
                    <CardTitle className="line-clamp-2 text-lg">
                      {relatedProduct.name}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <p className="line-clamp-2 text-sm text-muted-foreground mb-4">
                      {relatedProduct.description}
                    </p>

                    <Button asChild className="w-full">
                      <Link
                        href={`/products/${encodeURIComponent(category.name)}/${relatedProduct.id}`}
                      >
                        View Details
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
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
              href={`/products/${encodeURIComponent(category.name)}`}
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
