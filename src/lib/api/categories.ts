import categoriesData from '@/lib/data/categories.json';
import {
  CategoriesResponse,
  Category,
  CategoryFilters,
  Product,
} from '@/types/categories';

/**
 * Simulates API delay for realistic behavior
 */
const simulateDelay = (ms: number = 100): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, ms));

/**
 * Get all categories with their products
 */
export const getAllCategories = async (): Promise<CategoriesResponse> => {
  await simulateDelay();
  return categoriesData as CategoriesResponse;
};

/**
 * Get a specific category by ID
 */
export const getCategoryById = async (id: number): Promise<Category | null> => {
  await simulateDelay();
  const categories = categoriesData.categories as Category[];
  return categories.find((cat) => cat.id === id) || null;
};

/**
 * Get a specific product by ID across all categories
 */
export const getProductById = async (id: number): Promise<Product | null> => {
  await simulateDelay();
  const categories = categoriesData.categories as Category[];

  for (const category of categories) {
    const product = category.products.find((prod) => prod.id === id);
    if (product) return product;
  }

  return null;
};

/**
 * Search products across all categories
 */
export const searchProducts = async (
  searchTerm: string
): Promise<{ category: Category; product: Product }[]> => {
  await simulateDelay();
  const categories = categoriesData.categories as Category[];
  const results: { category: Category; product: Product }[] = [];

  const term = searchTerm.toLowerCase();

  categories.forEach((category) => {
    category.products.forEach((product) => {
      if (
        product.name.toLowerCase().includes(term) ||
        product.description.toLowerCase().includes(term)
      ) {
        results.push({ category, product });
      }
    });
  });

  return results;
};

/**
 * Filter categories and products based on criteria
 */
export const filterCategories = async (
  filters: CategoryFilters
): Promise<Category[]> => {
  await simulateDelay();
  let categories = categoriesData.categories as Category[];

  // Filter by category ID
  if (filters.categoryId) {
    categories = categories.filter((cat) => cat.id === filters.categoryId);
  }

  // Filter categories by search term
  if (filters.searchTerm) {
    const term = filters.searchTerm.toLowerCase();
    categories = categories.filter(
      (category) =>
        category.name.toLowerCase().includes(term) ||
        category.products.some(
          (product) =>
            product.name.toLowerCase().includes(term) ||
            product.description.toLowerCase().includes(term)
        )
    );
  }

  // Filter products within categories
  categories = categories
    .map((category) => {
      let filteredProducts = category.products;

      // Filter by product name
      if (filters.productName) {
        const term = filters.productName.toLowerCase();
        filteredProducts = filteredProducts.filter((product) =>
          product.name.toLowerCase().includes(term)
        );
      }

      // Filter by products that have sizes
      if (filters.hasSize !== undefined) {
        filteredProducts = filteredProducts.filter((product) =>
          filters.hasSize ? !!product.sizes : !product.sizes
        );
      }

      return {
        ...category,
        products: filteredProducts,
      };
    })
    .filter((category) => category.products.length > 0);

  return categories;
};

/**
 * Get products by category name
 */
export const getProductsByCategory = async (
  categoryName: string
): Promise<Product[]> => {
  await simulateDelay();
  const categories = categoriesData.categories as Category[];
  const category = categories.find(
    (cat) => cat.name.toLowerCase() === categoryName.toLowerCase()
  );

  return category?.products || [];
};

/**
 * Get featured products (first product from each category)
 */
export const getFeaturedProducts = async (): Promise<
  { category: Category; product: Product }[]
> => {
  await simulateDelay();
  const categories = categoriesData.categories as Category[];

  return categories
    .filter((category) => category.products.length > 0)
    .map((category) => ({
      category,
      product: category.products[0],
    }));
};

/**
 * Get random products for recommendations
 */
export const getRandomProducts = async (
  count: number = 4
): Promise<{ category: Category; product: Product }[]> => {
  await simulateDelay();
  const categories = categoriesData.categories as Category[];
  const allProducts: { category: Category; product: Product }[] = [];

  categories.forEach((category) => {
    category.products.forEach((product) => {
      allProducts.push({ category, product });
    });
  });

  // Shuffle and return requested count
  const shuffled = allProducts.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

/**
 * Get category statistics
 */
export const getCategoryStats = async (): Promise<{
  totalCategories: number;
  totalProducts: number;
  categoriesWithSizes: number;
  averageProductsPerCategory: number;
}> => {
  await simulateDelay();
  const categories = categoriesData.categories as Category[];

  const totalProducts = categories.reduce(
    (sum, cat) => sum + cat.products.length,
    0
  );

  const categoriesWithSizes = categories.filter((cat) =>
    cat.products.some((product) => product.sizes)
  ).length;

  return {
    totalCategories: categories.length,
    totalProducts,
    categoriesWithSizes,
    averageProductsPerCategory: Math.round(totalProducts / categories.length),
  };
};
