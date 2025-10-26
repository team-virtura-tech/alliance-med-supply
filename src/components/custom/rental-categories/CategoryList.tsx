'use client';

import { Category } from '@/lib/categories';
import { cn } from '@/lib/utils';
import { CategoryCard } from './CategoryCard';

export type CategoryListProps = {
  products: Category[];
  className?: string;
};

export const CategoryList = ({ products, className }: CategoryListProps) => {
  const componentName = 'CategoryList';

  return (
    <section
      id={componentName}
      data-component={componentName}
      className={cn('flex flex-wrap justify-center gap-8', className)}
    >
      {products.map((product) => (
        <CategoryCard
          key={product.id}
          categoryId={product.id}
          name={product.name}
          image={product.image}
          productCount={product.products?.length || 0}
        />
      ))}
    </section>
  );
};
