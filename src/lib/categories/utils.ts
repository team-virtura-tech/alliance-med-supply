import categoriesData from '@/lib/data/categories.json';
import type { Category, Product } from '@/types/categories';

/**
 * Get all categories
 */
export const getCategories = (): Category[] => {
  return categoriesData.categories;
};

/**
 * Get a category by its name (handles URL encoding/decoding)
 */
export const getCategoryByName = (name: string): Category | null => {
  const decodedName = decodeURIComponent(name);
  const categories = getCategories();
  return (
    categories.find(
      (category) => category.name.toLowerCase() === decodedName.toLowerCase()
    ) || null
  );
};

/**
 * Get a category by its ID
 */
export const getCategoryById = (id: number): Category | null => {
  const categories = getCategories();
  return categories.find((category) => category.id === id) || null;
};

/**
 * Get a product by its ID across all categories
 */
export const getProductById = (
  productId: number
): { product: Product; category: Category } | null => {
  const categories = getCategories();

  for (const category of categories) {
    const product = category.products.find((p) => p.id === productId);
    if (product) {
      return { product, category };
    }
  }

  return null;
};

/**
 * Get a product by its ID within a specific category
 */
export const getProductByIdInCategory = (
  categoryName: string,
  productId: number
): { product: Product; category: Category } | null => {
  const category = getCategoryByName(categoryName);
  if (!category) return null;

  const product = category.products.find((p) => p.id === productId);
  if (!product) return null;

  return { product, category };
};

/**
 * Convert string to URL-safe slug
 */
export const createSlug = (text: string): string => {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-') // Replace non-alphanumeric with hyphens
    .replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphens
};

/**
 * Generate URL-safe category slug
 */
export const getCategorySlug = (categoryName: string): string => {
  return createSlug(categoryName);
};

/**
 * Generate URL-safe product slug
 */
export const getProductSlug = (productName: string): string => {
  return createSlug(productName);
};

/**
 * Get category by slug
 */
export const getCategoryBySlug = (slug: string): Category | null => {
  const categories = getCategories();
  return (
    categories.find((category) => getCategorySlug(category.name) === slug) ||
    null
  );
};

/**
 * Get product by slug within a category
 */
export const getProductBySlugInCategory = (
  categorySlug: string,
  productSlug: string
): { product: Product; category: Category } | null => {
  const category = getCategoryBySlug(categorySlug);
  if (!category) return null;

  const product = category.products.find(
    (p) => getProductSlug(p.name) === productSlug
  );
  if (!product) return null;

  return { product, category };
};

/**
 * Generate URL-safe category name for display
 */
export const getCategoryDisplayName = (categorySlug: string): string => {
  const category = getCategoryBySlug(categorySlug);
  return category ? category.name : categorySlug;
};

/**
 * Get all category names as URL-safe slugs
 */
export const getCategorySlugs = (): string[] => {
  const categories = getCategories();
  return categories.map((category) => getCategorySlug(category.name));
};

/**
 * Get all product slugs for a category
 */
export const getProductSlugsForCategory = (categorySlug: string): string[] => {
  const category = getCategoryBySlug(categorySlug);
  if (!category) return [];
  return category.products.map((product) => getProductSlug(product.name));
};
