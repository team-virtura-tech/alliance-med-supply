'use client';

import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { motion, useReducedMotion } from 'framer-motion';
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
          className="group h-full overflow-hidden border-0 shadow-lg rounded-3xl transition-all duration-500 hover:shadow-xl hover:-translate-y-1 cursor-pointer"
          style={{
            background:
              'linear-gradient(145deg, hsl(0 0% 100%) 0%, hsl(45 35% 94%) 100%)',
          }}
        >
          {/* Hero Image */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-t-3xl mx-8">
            <Image
              src={data.image}
              alt={data.name}
              fill
              className="object-contain transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />

            {/* Product Count Badge (Category variant only) */}
            {variant === 'category' &&
              typeof data.productCount === 'number' && (
                <div className="absolute top-4 left-4">
                  <Badge
                    className="text-white font-semibold px-3 py-1.5 text-sm rounded-full transition-colors duration-300"
                    style={{
                      backgroundColor: 'hsl(175 65% 45%)',
                    }}
                  >
                    {data.productCount} Product
                    {data.productCount !== 1 ? 's' : ''}
                  </Badge>
                </div>
              )}
          </div>

          {/* Content Below Image */}
          <div className="p-8">
            <h3
              className={cn(
                'font-bold mb-3 text-slate-900 leading-tight',
                variant === 'category' ? 'text-2xl' : 'text-xl'
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
                    className="text-xs border-slate-300 text-slate-600"
                  >
                    {size}
                  </Badge>
                ))}
              </div>
            )}

            <p
              className={cn(
                'text-slate-600 leading-relaxed mb-6 line-clamp-3',
                variant === 'category' ? 'text-base' : 'text-sm'
              )}
            >
              {defaultDescription}
            </p>

            {/* CTA Button */}
            <div
              className="w-full text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 shadow-md hover:shadow-lg inline-flex items-center justify-center gap-2"
              style={{
                backgroundColor: 'hsl(175 65% 45%)',
              }}
            >
              {data.ctaText || defaultCtaText}
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
            </div>
          </div>
        </Card>
      </Link>
    </motion.div>
  );
};
