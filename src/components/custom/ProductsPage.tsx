'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
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
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
            >
              <Card className="group h-full overflow-hidden border-0 shadow-lg bg-gradient-to-br from-orange-50 to-orange-100/50 rounded-3xl transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
                {/* Hero Image */}
                <div className="relative aspect-[4/3] overflow-hidden rounded-t-3xl mx-8">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />

                  {/* Product Count Badge */}
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-teal-500 hover:bg-teal-600 text-white font-semibold px-3 py-1.5 text-sm rounded-full">
                      {category.products.length} Product
                      {category.products.length !== 1 ? 's' : ''}
                    </Badge>
                  </div>
                </div>

                {/* Content Below Image */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3 text-slate-900 leading-tight">
                    {category.name}
                  </h3>

                  <p className="text-slate-600 text-base leading-relaxed mb-6">
                    Professional {category.name.toLowerCase()} rental with
                    delivery, setup, and 24/7 support included.
                  </p>

                  {/* CTA Button */}
                  <Button
                    asChild
                    className="w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    <Link
                      href={`/products/${getCategorySlug(category.name)}`}
                      className="inline-flex items-center justify-center gap-2"
                    >
                      View Products
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
