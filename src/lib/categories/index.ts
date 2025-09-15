/**
 * Main export file for the category data system
 * Import everything you need from here
 */

// Types
export type {
  CategoriesResponse,
  Category,
  CategoryFilters,
  CategoryName,
  Product,
} from '@/types/categories';

// API Functions
export {
  filterCategories,
  getAllCategories,
  getCategoryById,
  getCategoryStats,
  getFeaturedProducts,
  getProductById,
  getProductsByCategory,
  getRandomProducts,
  searchProducts,
} from '@/lib/api/categories';

// React Hooks
export {
  useCategories,
  useCategory,
  useCategoryFilter,
  useCategoryStats,
  useFeaturedProducts,
  useProduct,
  useProductSearch,
  useProductsByCategory,
  useRandomProducts,
} from '@/hooks/useCategories';
