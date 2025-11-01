'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { motion, useReducedMotion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export type ProductCardData = {
  id: number | string;
  name: string;
  image: string;
  description?: string;
  sizes?: string[];
  productCount?: number;
  href: string;
  ctaText?: string;
};

export type ProductCardProps = {
  data: ProductCardData;
  variant?: 'category' | 'product';
  index?: number;
  className?: string;
  id?: string;
};

export const ProductCard = ({
  data,
  variant = 'product',
  index = 0,
  className,
  id,
}: ProductCardProps) => {
  const reduce = useReducedMotion();
  const componentName = 'ProductCard';

  const defaultDescription =
    variant === 'category'
      ? `Professional ${data.name.toLowerCase()} rental with delivery, setup, and 24/7 support included.`
      : data.description || '';

  const defaultCtaText =
    variant === 'category' ? 'Browse Products' : 'View Details';

  return (
    <motion.div
      id={id}
      data-component={componentName}
      initial={reduce ? false : { opacity: 0, y: 20 }}
      animate={reduce ? {} : { opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: reduce ? 0 : 0.1 + index * 0.05 }}
      className={className}
    >
      <Link href={data.href} className="block h-full">
        <Card
          className="group h-full flex flex-col overflow-hidden border-0 rounded-3xl transition-all duration-500 hover:shadow-md hover:-translate-y-1 cursor-pointer pt-0"
          style={{
            background:
              'linear-gradient(145deg, hsl(0 0% 100%) 0%, hsl(45 35% 96%) 100%)',
          }}
        >
          {/* Hero Image */}
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src={data.image}
              alt={data.name}
              fill
              className="object-contain transition-transform duration-500 group-hover:scale-105 p-6"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />

            {/* Product Count Badge (Category variant only) */}
            {variant === 'category' &&
              typeof data.productCount === 'number' && (
                <div className="absolute top-4 left-4">
                  <Badge className="bg-accent text-accent-foreground font-semibold px-3 py-1.5 text-sm rounded-full hover:bg-accent/90">
                    {data.productCount} Product
                    {data.productCount !== 1 ? 's' : ''}
                  </Badge>
                </div>
              )}
          </div>

          {/* Content Below Image */}
          <div className="flex flex-col flex-1 px-6">
            <h3
              className={cn(
                'font-bold mb-3 text-text-primary leading-tight min-h-[3.5rem] flex items-start',
                variant === 'category'
                  ? 'text-xl md:text-2xl'
                  : 'text-lg md:text-xl'
              )}
            >
              {data.name}
            </h3>

            {/* Sizes (Product variant only) */}
            {variant === 'product' && data.sizes && data.sizes.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-3">
                {data.sizes.map((size) => (
                  <Badge
                    key={size}
                    variant="outline"
                    className="text-xs text-text-secondary"
                  >
                    {size}
                  </Badge>
                ))}
              </div>
            )}

            <p
              className={cn(
                'text-text-muted leading-relaxed mb-6 line-clamp-3 flex-1',
                variant === 'category' ? 'text-sm md:text-base' : 'text-sm'
              )}
            >
              {defaultDescription}
            </p>

            {/* CTA Button - pushed to bottom */}
            <Button className="w-full mt-auto" size="lg">
              {data.ctaText || defaultCtaText}
              <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </Card>
      </Link>
    </motion.div>
  );
};
