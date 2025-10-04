import { Category } from '@/lib/categories';
import { cn } from '@/lib/utils';
import { CategoryCard } from './CategoryCard';

export type ProductListProps = {
  products: Category[];
  className?: string;
};

export const CategoryList = ({ products, className }: ProductListProps) => {
  const componentName = 'ProductList';

  return (
    <section
      data-component={componentName}
      className={cn('flex flex-wrap justify-center gap-8', className)}
    >
      {products.map((product) => (
        <CategoryCard
          key={product.id}
          {...product}
          productCount={product.products?.length || 0}
        />
      ))}
    </section>
  );
};
