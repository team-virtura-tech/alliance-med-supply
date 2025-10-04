import { Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardTitle } from '@/components/ui/card';
import { getCategorySlug } from '@/lib/categories/utils';
import { cn } from '@/lib/utils';

export type ProductCardProps = {
  id: number;
  name: string;
  image: string;
  productCount?: number;
  rating?: number;
  showRating?: boolean;
  className?: string;
};

export const CategoryCard = ({
  id,
  name,
  image,
  productCount,
  rating,
  showRating = false,
  className,
}: ProductCardProps) => {
  const componentName = 'ProductCard';
  const categoryUrl = `/products/${getCategorySlug(name)}`;

  return (
    <Card
      data-component={componentName}
      id={`ProductCard-${id}`}
      className={cn(
        'group w-full sm:w-64 md:w-48 lg:w-56 xl:w-64 h-auto flex flex-col overflow-hidden border-0 shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105 pt-0',
        className
      )}
    >
      {/* Image Container with Badge - No wrapper, directly in Card */}
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        {/* Product Count Badge */}
        {productCount && productCount > 1 && (
          <div className="absolute left-0 top-0 z-10">
            <div className="bg-orange-400 text-white px-3 py-1.5 text-xs font-medium shadow-md rounded-br-lg">
              {productCount} Products
            </div>
          </div>
        )}

        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-cover transition-transform duration-200 group-hover:scale-110"
          priority={false}
        />
      </div>

      {/* Content area with flex-grow to push button down */}
      <div className="flex flex-col flex-grow">
        <CardContent className="px-4 pt-0 pb-2 flex-grow">
          <CardTitle className="text-base font-semibold text-gray-900 group-hover:text-primary transition-colors leading-tight min-h-[2.5rem] flex items-start">
            {name}
          </CardTitle>

          {/* Optional Rating */}
          {showRating && rating && (
            <div className="mt-2 flex items-center gap-1">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm font-medium text-gray-700">
                {rating}
              </span>
            </div>
          )}
        </CardContent>

        <CardFooter className="px-4 pb-4 pt-2 mt-auto">
          <Button asChild className="w-full">
            <Link href={categoryUrl}>
              View All {productCount || 0} Products
            </Link>
          </Button>
        </CardFooter>
      </div>
    </Card>
  );
};
