'use client';

import { motion } from 'framer-motion';

import { ProductCard } from '@/components/custom/ProductCard';
import { Button } from '@/components/ui/button';
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
      className={cn(
        'min-h-screen bg-gradient-to-br from-slate-50 to-white pt-24 pb-12',
        className
      )}
    >
      <div className="mx-auto w-full max-w-screen-2xl px-4 md:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mb-16 text-center"
        >
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl lg:text-6xl">
            Medical Equipments
          </h1>
          <p className="mt-6 text-lg text-slate-600 md:text-xl max-w-3xl mx-auto leading-relaxed">
            Professional medical equipments for rent or purchase in the Bay
            Area. Trusted by healthcare professionals and families across
            Northern California.
          </p>
        </motion.div>

        {/* Categories Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {categories.map((category, index) => (
            <ProductCard
              key={category.id}
              variant="category"
              index={index}
              data={{
                id: category.id,
                name: category.name,
                image: category.image,
                productCount: category.products.length,
                href: `/products/${getCategorySlug(category.name)}`,
                ctaText: 'Browse Products',
              }}
            />
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
