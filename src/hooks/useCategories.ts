'use client';

import { useEffect, useState } from 'react';

import {
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
import {
  CategoriesResponse,
  Category,
  CategoryFilters,
  Product,
} from '@/types/categories';

type LoadingState = 'idle' | 'loading' | 'success' | 'error';

/**
 * Hook to fetch all categories
 */
export const useCategories = () => {
  const [data, setData] = useState<CategoriesResponse | null>(null);
  const [loading, setLoading] = useState<LoadingState>('idle');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      setLoading('loading');
      setError(null);
      try {
        const result = await getAllCategories();
        setData(result);
        setLoading('success');
      } catch (err) {
        setError(
          err instanceof Error ? err.message : 'Failed to fetch categories'
        );
        setLoading('error');
      }
    };

    fetchCategories();
  }, []);

  return { data, loading, error, isLoading: loading === 'loading' };
};

/**
 * Hook to fetch a specific category by ID
 */
export const useCategory = (id: number | null) => {
  const [data, setData] = useState<Category | null>(null);
  const [loading, setLoading] = useState<LoadingState>('idle');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) {
      setData(null);
      setLoading('idle');
      return;
    }

    const fetchCategory = async () => {
      setLoading('loading');
      setError(null);
      try {
        const result = await getCategoryById(id);
        setData(result);
        setLoading('success');
      } catch (err) {
        setError(
          err instanceof Error ? err.message : 'Failed to fetch category'
        );
        setLoading('error');
      }
    };

    fetchCategory();
  }, [id]);

  return { data, loading, error, isLoading: loading === 'loading' };
};

/**
 * Hook to fetch a specific product by ID
 */
export const useProduct = (id: number | null) => {
  const [data, setData] = useState<Product | null>(null);
  const [loading, setLoading] = useState<LoadingState>('idle');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) {
      setData(null);
      setLoading('idle');
      return;
    }

    const fetchProduct = async () => {
      setLoading('loading');
      setError(null);
      try {
        const result = await getProductById(id);
        setData(result);
        setLoading('success');
      } catch (err) {
        setError(
          err instanceof Error ? err.message : 'Failed to fetch product'
        );
        setLoading('error');
      }
    };

    fetchProduct();
  }, [id]);

  return { data, loading, error, isLoading: loading === 'loading' };
};

/**
 * Hook to search products across all categories
 */
export const useProductSearch = (
  searchTerm: string,
  debounceMs: number = 300
) => {
  const [data, setData] = useState<{ category: Category; product: Product }[]>(
    []
  );
  const [loading, setLoading] = useState<LoadingState>('idle');
  const [error, setError] = useState<string | null>(null);
  const [debouncedTerm, setDebouncedTerm] = useState(searchTerm);

  // Debounce search term
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedTerm(searchTerm);
    }, debounceMs);

    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm, debounceMs]);

  useEffect(() => {
    if (!debouncedTerm.trim()) {
      setData([]);
      setLoading('idle');
      return;
    }

    const performSearch = async () => {
      setLoading('loading');
      setError(null);
      try {
        const result = await searchProducts(debouncedTerm);
        setData(result);
        setLoading('success');
      } catch (err) {
        setError(
          err instanceof Error ? err.message : 'Failed to search products'
        );
        setLoading('error');
      }
    };

    performSearch();
  }, [debouncedTerm]);

  return {
    data,
    loading,
    error,
    isLoading: loading === 'loading',
    searchTerm: debouncedTerm,
  };
};

/**
 * Hook to filter categories with advanced filtering
 */
export const useCategoryFilter = (filters: CategoryFilters) => {
  const [data, setData] = useState<Category[]>([]);
  const [loading, setLoading] = useState<LoadingState>('idle');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const applyFilters = async () => {
      setLoading('loading');
      setError(null);
      try {
        const result = await filterCategories(filters);
        setData(result);
        setLoading('success');
      } catch (err) {
        setError(
          err instanceof Error ? err.message : 'Failed to filter categories'
        );
        setLoading('error');
      }
    };

    applyFilters();
  }, [filters]);

  return { data, loading, error, isLoading: loading === 'loading' };
};

/**
 * Hook to get products by category name
 */
export const useProductsByCategory = (categoryName: string | null) => {
  const [data, setData] = useState<Product[]>([]);
  const [loading, setLoading] = useState<LoadingState>('idle');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!categoryName) {
      setData([]);
      setLoading('idle');
      return;
    }

    const fetchProducts = async () => {
      setLoading('loading');
      setError(null);
      try {
        const result = await getProductsByCategory(categoryName);
        setData(result);
        setLoading('success');
      } catch (err) {
        setError(
          err instanceof Error
            ? err.message
            : 'Failed to fetch products by category'
        );
        setLoading('error');
      }
    };

    fetchProducts();
  }, [categoryName]);

  return { data, loading, error, isLoading: loading === 'loading' };
};

/**
 * Hook to get featured products (first product from each category)
 */
export const useFeaturedProducts = () => {
  const [data, setData] = useState<{ category: Category; product: Product }[]>(
    []
  );
  const [loading, setLoading] = useState<LoadingState>('idle');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFeatured = async () => {
      setLoading('loading');
      setError(null);
      try {
        const result = await getFeaturedProducts();
        setData(result);
        setLoading('success');
      } catch (err) {
        setError(
          err instanceof Error
            ? err.message
            : 'Failed to fetch featured products'
        );
        setLoading('error');
      }
    };

    fetchFeatured();
  }, []);

  return { data, loading, error, isLoading: loading === 'loading' };
};

/**
 * Hook to get random products for recommendations
 */
export const useRandomProducts = (count: number = 4) => {
  const [data, setData] = useState<{ category: Category; product: Product }[]>(
    []
  );
  const [loading, setLoading] = useState<LoadingState>('idle');
  const [error, setError] = useState<string | null>(null);

  const refetch = async () => {
    setLoading('loading');
    setError(null);
    try {
      const result = await getRandomProducts(count);
      setData(result);
      setLoading('success');
    } catch (err) {
      setError(
        err instanceof Error ? err.message : 'Failed to fetch random products'
      );
      setLoading('error');
    }
  };

  useEffect(() => {
    refetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);

  return {
    data,
    loading,
    error,
    isLoading: loading === 'loading',
    refetch,
  };
};

/**
 * Hook to get category statistics
 */
export const useCategoryStats = () => {
  const [data, setData] = useState<{
    totalCategories: number;
    totalProducts: number;
    categoriesWithSizes: number;
    averageProductsPerCategory: number;
  } | null>(null);
  const [loading, setLoading] = useState<LoadingState>('idle');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStats = async () => {
      setLoading('loading');
      setError(null);
      try {
        const result = await getCategoryStats();
        setData(result);
        setLoading('success');
      } catch (err) {
        setError(
          err instanceof Error ? err.message : 'Failed to fetch category stats'
        );
        setLoading('error');
      }
    };

    fetchStats();
  }, []);

  return { data, loading, error, isLoading: loading === 'loading' };
};
