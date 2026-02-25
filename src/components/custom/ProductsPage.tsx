'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { Phone } from 'lucide-react';

import { ProductCard } from '@/components/custom/ProductCard';
import { Button } from '@/components/ui/button';
import { contact } from '@/data/contact';
import { getCategories, getCategorySlug } from '@/lib/categories/utils';
import { cn } from '@/lib/utils';

export type ProductsPageProps = {
  className?: string;
};

export const ProductsPage = ({ className }: ProductsPageProps) => {
  const categories = getCategories();
  const shouldReduceMotion = useReducedMotion();

  return (
    <div
      id="ProductsPage"
      data-component="ProductsPage"
      className={cn(
        'min-h-screen bg-background pt-20 pb-12 md:pt-28 lg:pt-36',
        className
      )}
    >
      <div className="mx-auto w-full max-w-screen-2xl px-4 md:px-6 lg:px-8">
        {/* Header — use div, not header landmark, to avoid spurious landmark in AT */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="mb-12 text-center md:mb-16"
        >
          <h1 className="text-3xl font-bold tracking-tight text-text-primary md:text-4xl lg:text-5xl">
            Medical Equipment
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-text-muted md:mt-6 md:text-lg">
            Professional medical equipment for rent or purchase in the Bay Area.
            Trusted by healthcare professionals and families across Northern
            California.
          </p>
        </motion.div>

        {/* Categories Grid — flex-wrap so orphaned last-row cards centre automatically */}
        <motion.section
          aria-label="Equipment categories"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.25, delay: shouldReduceMotion ? 0 : 0.1 }}
          className="flex flex-wrap justify-center gap-6 md:gap-8"
        >
          {categories.map((category, index) => (
            <ProductCard
              key={category.id}
              variant="category"
              index={index}
              priority={index < 3}
              className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.4rem)]"
              data={{
                id: category.id,
                name: category.name,
                image: category.image,
                productCount: category.products.length,
                href: `/products/${getCategorySlug(category.name)}`,
                ctaText: 'Browse Products',
                description: category.description,
              }}
            />
          ))}
        </motion.section>

        {/* Contact Section */}
        <motion.section
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.25, delay: shouldReduceMotion ? 0 : 0.2 }}
          className="mt-12 text-center md:mt-16"
        >
          <div className="mx-auto max-w-2xl rounded-lg border border-border bg-muted p-6 md:p-8">
            <h2 className="mb-3 text-xl font-bold text-text-primary md:mb-4 md:text-2xl">
              Need Help Choosing?
            </h2>
            <p className="mb-4 text-base text-text-muted md:mb-6">
              Our medical equipment specialists are here to help you find the
              right solution.
            </p>
            <Button variant="default" size="lg" asChild>
              <a
                href={contact.phone.href}
                aria-label={`Call us at ${contact.phone.display}`}
                onKeyDown={(e) => {
                  if (e.key === ' ') {
                    e.preventDefault();
                    e.currentTarget.click();
                  }
                }}
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                Call {contact.phone.display}
              </a>
            </Button>
          </div>
        </motion.section>
      </div>
    </div>
  );
};
