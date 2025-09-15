import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Image from 'next/image';

export type RentalCategoryCardProps = {
  id: number;
  name: string;
  image: string;
  description?: string;
  productCount?: number;
  onClick?: () => void;
  className?: string;
};

export const RentalCategoryCard = ({
  id,
  name,
  image,
  description = 'Professional medical equipment rental with delivery and setup included.',
  productCount,
  onClick,
  className,
}: RentalCategoryCardProps) => {
  const componentName = 'RentalCategoryCard';

  return (
    <div
      data-component={componentName}
      id={`RentalCategoryCard-${id}`}
      className={cn(
        'group flex flex-col overflow-hidden bg-white border transition-all duration-200',
        className
      )}
      style={{
        borderColor: '#c2ccc9',
        borderBottomRightRadius: '16px',
        borderTopLeftRadius: '16px',
      }}
    >
      {/* Image Container with Badge */}
      <div className="relative aspect-[5/3] w-full overflow-hidden bg-green-50">
        {/* Product Count Badge */}
        {productCount && productCount > 1 && (
          <div className="absolute left-6 top-6 z-10">
            <span className="rounded-full bg-primary px-3 py-1 text-xs font-medium text-white shadow-sm">
              {productCount} Products
            </span>
          </div>
        )}

        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 768px) 50vw, (max-width: 1280px) 33vw, 25vw"
          className="object-cover transition-transform duration-200 group-hover:scale-105"
          priority={false}
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-12">
        {/* Title */}
        <h3 className="mb-6 text-3xl font-semibold text-gray-900 group-hover:text-gray-700">
          {name}
        </h3>

        {/* Description */}
        <p className="mb-10 flex-1 text-lg text-gray-600 leading-relaxed">
          {description}
        </p>

        {/* CTA Button */}
        <Button
          onClick={onClick}
          className="w-full rounded-full py-5 text-lg font-medium"
        >
          View Product
        </Button>
      </div>
    </div>
  );
};
