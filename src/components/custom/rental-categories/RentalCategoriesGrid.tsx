import { useCategories } from '@/hooks/useCategories';
import type { Category } from '@/types/categories';
import { CategoryList } from './CategoryList';

export const RentalCategoriesGrid = () => {
  const { data, loading, error } = useCategories();
  const componentName = 'RentalCategoriesGrid';

  if (loading === 'loading') {
    return (
      <section
        data-component={componentName}
        id={componentName}
        className="mx-auto w-full max-w-screen-xl px-4 md:px-6"
      >
        <div className="py-12 text-center text-muted-foreground">
          Loading categories…
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section
        data-component={componentName}
        id={componentName}
        className="mx-auto w-full max-w-screen-xl px-4 md:px-6"
      >
        <div className="py-12 text-center text-destructive">{error}</div>
      </section>
    );
  }

  const categories = data?.categories as
    | (Category & { image?: string })[]
    | undefined;

  return (
    <section
      data-component={componentName}
      id={componentName}
      className=" mx-auto max-w-screen-xl px-4 md:px-6 lg:px-8"
    >
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
          Medical Equipment Rentals
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Professional-grade medical equipment delivered to your door
        </p>
      </div>
      <CategoryList products={categories || []} />
    </section>
  );
};
