/**
 * To be deleted
 * Example component demonstrating how to use the category data system
 * This can be imported and used in your pages or components
 */

'use client';

import {
  useCategories,
  useCategoryStats,
  useFeaturedProducts,
  useProductSearch,
} from '@/hooks/useCategories';
import { useState } from 'react';

export const CategoryDataExample = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Example 1: Get all categories
  const { data: categories, isLoading: categoriesLoading } = useCategories();

  // Example 2: Get featured products
  const { data: featured, isLoading: featuredLoading } = useFeaturedProducts();

  // Example 3: Search products with debouncing
  const { data: searchResults, isLoading: searchLoading } =
    useProductSearch(searchTerm);

  // Example 4: Get stats
  const { data: stats } = useCategoryStats();

  return (
    <div className="space-y-8 p-6">
      <h1 className="text-3xl font-bold">Category Data System Demo</h1>

      {/* Stats Section */}
      {stats && (
        <div className="bg-gray-100 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Quick Stats</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">
                {stats.totalCategories}
              </div>
              <div className="text-sm text-gray-600">Categories</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">
                {stats.totalProducts}
              </div>
              <div className="text-sm text-gray-600">Products</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">
                {stats.categoriesWithSizes}
              </div>
              <div className="text-sm text-gray-600">With Sizes</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600">
                {stats.averageProductsPerCategory}
              </div>
              <div className="text-sm text-gray-600">Avg/Category</div>
            </div>
          </div>
        </div>
      )}

      {/* Search Section */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Product Search</h2>
        <input
          type="text"
          placeholder="Search products (try 'wheelchair', 'electric', 'bed')..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />

        {searchLoading && (
          <div className="mt-4 text-gray-500">Searching...</div>
        )}

        {searchResults.length > 0 && (
          <div className="mt-4 space-y-3">
            <h3 className="font-medium">
              Search Results ({searchResults.length})
            </h3>
            {searchResults.map((result) => (
              <div key={result.product.id} className="border p-3 rounded-lg">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-medium">{result.product.name}</h4>
                    <p className="text-sm text-gray-600 mt-1">
                      {result.product.description}
                    </p>
                    {result.product.sizes && (
                      <div className="mt-2">
                        <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                          Sizes: {result.product.sizes.join(', ')}
                        </span>
                      </div>
                    )}
                  </div>
                  <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs">
                    {result.category.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {searchTerm && searchResults.length === 0 && !searchLoading && (
          <div className="mt-4 text-gray-500">
            No products found for &quot;{searchTerm}&quot;
          </div>
        )}
      </div>

      {/* Featured Products Section */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Featured Products</h2>
        {featuredLoading ? (
          <div className="text-gray-500">Loading featured products...</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {featured?.slice(0, 6).map((item) => (
              <div
                key={item.product.id}
                className="border p-4 rounded-lg hover:shadow-md transition-shadow"
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-medium text-lg">{item.product.name}</h3>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                    {item.category.name}
                  </span>
                </div>
                <p className="text-gray-600 text-sm">
                  {item.product.description}
                </p>
                {item.product.sizes && (
                  <div className="mt-3">
                    <span className="text-xs text-gray-500">
                      Available sizes:{' '}
                    </span>
                    <span className="text-xs font-medium">
                      {item.product.sizes.join(', ')}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Categories Overview */}
      <div>
        <h2 className="text-xl font-semibold mb-4">All Categories</h2>
        {categoriesLoading ? (
          <div className="text-gray-500">Loading categories...</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {categories?.categories.map((category) => (
              <div key={category.id} className="border p-4 rounded-lg">
                <h3 className="font-medium text-lg mb-2">{category.name}</h3>
                <p className="text-gray-600 text-sm mb-3">
                  {category.products.length} products available
                </p>
                <div className="space-y-1">
                  {category.products.slice(0, 3).map((product) => (
                    <div key={product.id} className="text-sm text-gray-500">
                      • {product.name}
                    </div>
                  ))}
                  {category.products.length > 3 && (
                    <div className="text-sm text-blue-600">
                      + {category.products.length - 3} more...
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryDataExample;
