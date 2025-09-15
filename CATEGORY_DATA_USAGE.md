# Category Data System

This system provides a centralized source of truth for medical equipment category and product data throughout the Alliance Med Supply website.

## Overview

The system simulates API responses using local JSON data and provides TypeScript-safe hooks for React components to consume the data.

## Files Structure

```
src/
├── types/categories.ts           # TypeScript interfaces
├── lib/
│   ├── data/categories.json      # Main data source (JSON)
│   └── api/categories.ts         # API simulation functions
└── hooks/useCategories.ts        # React hooks for data consumption
```

## Quick Usage Examples

### 1. Display All Categories

```tsx
import { useCategories } from '@/hooks/useCategories';

export const CategoryList = () => {
  const { data, isLoading, error } = useCategories();

  if (isLoading) return <div>Loading categories...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!data) return null;

  return (
    <div>
      {data.categories.map((category) => (
        <div key={category.id}>
          <h3>{category.name}</h3>
          <p>{category.products.length} products</p>
        </div>
      ))}
    </div>
  );
};
```

### 2. Show Products for a Specific Category

```tsx
import { useProductsByCategory } from '@/hooks/useCategories';

export const WheelchairProducts = () => {
  const { data, isLoading } = useProductsByCategory('Wheelchairs');

  if (isLoading) return <div>Loading wheelchairs...</div>;

  return (
    <div>
      <h2>Wheelchair Options</h2>
      {data.map((product) => (
        <div key={product.id}>
          <h4>{product.name}</h4>
          <p>{product.description}</p>
          {product.sizes && <div>Sizes: {product.sizes.join(', ')}</div>}
        </div>
      ))}
    </div>
  );
};
```

### 3. Search Products

```tsx
import { useState } from 'react';
import { useProductSearch } from '@/hooks/useCategories';

export const ProductSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { data, isLoading } = useProductSearch(searchTerm);

  return (
    <div>
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {isLoading && <div>Searching...</div>}

      {data.map((result) => (
        <div key={result.product.id}>
          <span className="badge">{result.category.name}</span>
          <h4>{result.product.name}</h4>
          <p>{result.product.description}</p>
        </div>
      ))}
    </div>
  );
};
```

### 4. Featured Products Display

```tsx
import { useFeaturedProducts } from '@/hooks/useCategories';

export const FeaturedProducts = () => {
  const { data, isLoading } = useFeaturedProducts();

  if (isLoading) return <div>Loading featured products...</div>;

  return (
    <section>
      <h2>Featured Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((item) => (
          <div key={item.product.id} className="card">
            <div className="badge">{item.category.name}</div>
            <h3>{item.product.name}</h3>
            <p>{item.product.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
```

### 5. Random Product Recommendations

```tsx
import { useRandomProducts } from '@/hooks/useCategories';

export const ProductRecommendations = () => {
  const { data, isLoading, refetch } = useRandomProducts(3);

  return (
    <div>
      <div className="flex justify-between items-center">
        <h3>You might also like</h3>
        <button onClick={refetch}>Refresh</button>
      </div>

      {isLoading ? (
        <div>Loading recommendations...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {data.map((item) => (
            <div key={item.product.id}>
              <h4>{item.product.name}</h4>
              <p className="text-sm text-gray-600">{item.category.name}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
```

### 6. Advanced Filtering

```tsx
import { useState } from 'react';
import { useCategoryFilter } from '@/hooks/useCategories';

export const CategoryFilter = () => {
  const [filters, setFilters] = useState({
    searchTerm: '',
    hasSize: undefined as boolean | undefined,
  });

  const { data, isLoading } = useCategoryFilter(filters);

  return (
    <div>
      <div className="filters">
        <input
          placeholder="Search..."
          value={filters.searchTerm}
          onChange={(e) =>
            setFilters((prev) => ({ ...prev, searchTerm: e.target.value }))
          }
        />

        <select
          value={
            filters.hasSize === undefined ? '' : filters.hasSize.toString()
          }
          onChange={(e) => {
            const value = e.target.value;
            setFilters((prev) => ({
              ...prev,
              hasSize: value === '' ? undefined : value === 'true',
            }));
          }}
        >
          <option value="">All Products</option>
          <option value="true">With Size Options</option>
          <option value="false">No Size Options</option>
        </select>
      </div>

      {isLoading ? (
        <div>Filtering...</div>
      ) : (
        <div>
          {data.map((category) => (
            <div key={category.id}>
              <h3>{category.name}</h3>
              <div className="products">
                {category.products.map((product) => (
                  <div key={product.id}>{product.name}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
```

### 7. Category Statistics Dashboard

```tsx
import { useCategoryStats } from '@/hooks/useCategories';

export const CategoryStats = () => {
  const { data, isLoading } = useCategoryStats();

  if (isLoading) return <div>Loading stats...</div>;
  if (!data) return null;

  return (
    <div className="stats-grid">
      <div className="stat-card">
        <h3>Total Categories</h3>
        <p className="text-3xl font-bold">{data.totalCategories}</p>
      </div>

      <div className="stat-card">
        <h3>Total Products</h3>
        <p className="text-3xl font-bold">{data.totalProducts}</p>
      </div>

      <div className="stat-card">
        <h3>Categories with Sizes</h3>
        <p className="text-3xl font-bold">{data.categoriesWithSizes}</p>
      </div>

      <div className="stat-card">
        <h3>Avg Products/Category</h3>
        <p className="text-3xl font-bold">{data.averageProductsPerCategory}</p>
      </div>
    </div>
  );
};
```

## Available Hooks

| Hook                               | Purpose                       | Parameters                          |
| ---------------------------------- | ----------------------------- | ----------------------------------- |
| `useCategories()`                  | Get all categories            | None                                |
| `useCategory(id)`                  | Get specific category         | `id: number`                        |
| `useProduct(id)`                   | Get specific product          | `id: number`                        |
| `useProductSearch(term, debounce)` | Search products               | `term: string`, `debounce?: number` |
| `useCategoryFilter(filters)`       | Filter categories/products    | `filters: CategoryFilters`          |
| `useProductsByCategory(name)`      | Get products by category name | `name: string`                      |
| `useFeaturedProducts()`            | Get featured products         | None                                |
| `useRandomProducts(count)`         | Get random products           | `count?: number`                    |
| `useCategoryStats()`               | Get category statistics       | None                                |

## TypeScript Types

All hooks return data with proper TypeScript typing:

```typescript
// Main interfaces
interface Category {
  id: number;
  name: string;
  products: Product[];
}

interface Product {
  id: number;
  name: string;
  sizes?: string[];
  description: string;
}

// Hook return type
{
  data: T | null;
  loading: 'idle' | 'loading' | 'success' | 'error';
  error: string | null;
  isLoading: boolean;
}
```

## API Functions (Direct Usage)

If you need to use the API functions directly without hooks:

```typescript
import {
  getAllCategories,
  getCategoryById,
  searchProducts,
  filterCategories,
} from '@/lib/api/categories';

// Direct usage (returns Promises)
const categories = await getAllCategories();
const wheelchair = await getCategoryById(1);
const results = await searchProducts('electric');
```

## Data Structure

The main data source (`src/lib/data/categories.json`) contains:

- 12 medical equipment categories
- 32 total products across all categories
- Products with optional size specifications
- Detailed descriptions for each product

## Future Enhancements

This system is designed to easily transition to a real API:

1. **Replace API functions**: Update `src/lib/api/categories.ts` to make real HTTP calls
2. **Add caching**: Integrate with React Query or SWR for better data management
3. **Add mutations**: Extend hooks to support create/update/delete operations
4. **Add pagination**: Implement pagination for large datasets
5. **Add images**: Extend the `Product` interface to include image URLs

The hook interfaces will remain the same, making the transition seamless for components.
