'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getCategories, getCategorySlug } from '@/lib/categories/utils';
import { cn } from '@/lib/utils';

export type ProductsPageProps = {
  className?: string;
};

export const ProductsPage = ({ className }: ProductsPageProps) => {
  const categories = getCategories();

  return (
    <div
      id="ProductsPage"
      data-component="ProductsPage"
      className={cn('min-h-screen bg-background py-8', className)}
    >
      <div className="mx-auto w-full max-w-screen-xl px-4 md:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mb-12 text-center"
        >
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            Medical Equipment
          </h1>
          <p className="mt-4 text-lg text-muted-foreground md:text-xl">
            Professional medical equipment for rent or purchase in the Bay Area
          </p>
        </motion.div>

        {/* Categories Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
            >
              <Card className="group h-full overflow-hidden transition-all duration-300 hover:shadow-lg">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                  />
                </div>

                <CardHeader className="pb-3">
                  <CardTitle className="line-clamp-2 text-lg">
                    {category.name}
                  </CardTitle>
                  <Badge variant="secondary" className="w-fit">
                    {category.products.length}{' '}
                    {category.products.length === 1 ? 'Product' : 'Products'}
                  </Badge>
                </CardHeader>

                <CardContent className="pt-0">
                  <Button asChild className="w-full">
                    <Link href={`/products/${getCategorySlug(category.name)}`}>
                      Browse {category.name}
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="mt-16 text-center"
        >
          <div className="rounded-lg bg-muted p-8">
            <h2 className="mb-4 text-2xl font-bold">Need Help Choosing?</h2>
            <p className="mb-6 text-muted-foreground">
              Our medical equipment specialists are here to help you find the
              right solution.
            </p>
            <Button size="lg">Call (408) 942-9000</Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
