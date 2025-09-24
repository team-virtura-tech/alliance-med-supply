# ProductCard Component

A reusable card component for displaying both category and product information with consistent styling across the application.

## Features

- 🎨 **Modern Design**: Orange gradient background with teal accents
- 📱 **Responsive**: Mobile-first design that scales beautifully
- ✨ **Smooth Animations**: Framer Motion integration with reduced motion support
- 🎯 **Two Variants**: Category cards and product cards
- ♿ **Accessible**: Proper ARIA attributes and keyboard navigation

## Usage

### Category Card

```tsx
import { ProductCard } from '@/components/custom/ProductCard';

<ProductCard
  variant="category"
  index={0}
  data={{
    id: 1,
    name: 'Wheelchairs',
    image: '/images/categories/wheelchair.jpg',
    productCount: 15,
    href: '/products/wheelchairs',
    ctaText: 'Browse Products',
  }}
/>;
```

### Product Card

```tsx
import { ProductCard } from '@/components/custom/ProductCard';

<ProductCard
  variant="product"
  index={0}
  data={{
    id: 101,
    name: 'Standard Wheelchair',
    image: '/images/wheelchair-standard.jpg',
    description: 'Comfortable and reliable standard wheelchair...',
    sizes: ['Small', 'Medium', 'Large'],
    href: '/products/wheelchairs/101',
    ctaText: 'View Details',
  }}
/>;
```

## Props

### ProductCardData

| Property       | Type               | Required | Description                                |
| -------------- | ------------------ | -------- | ------------------------------------------ |
| `id`           | `number \| string` | ✅       | Unique identifier                          |
| `name`         | `string`           | ✅       | Display name                               |
| `image`        | `string`           | ✅       | Image URL                                  |
| `description`  | `string`           | ❌       | Product description                        |
| `sizes`        | `string[]`         | ❌       | Available sizes (product variant only)     |
| `productCount` | `number`           | ❌       | Number of products (category variant only) |
| `href`         | `string`           | ✅       | Navigation link                            |
| `ctaText`      | `string`           | ❌       | Custom button text                         |

### ProductCardProps

| Property    | Type                      | Default     | Description            |
| ----------- | ------------------------- | ----------- | ---------------------- |
| `data`      | `ProductCardData`         | -           | Card data              |
| `variant`   | `'category' \| 'product'` | `'product'` | Card type              |
| `index`     | `number`                  | `0`         | Animation delay index  |
| `className` | `string`                  | -           | Additional CSS classes |
| `id`        | `string`                  | -           | DOM ID attribute       |

## Styling

The component uses a consistent design system:

- **Background**: Orange gradient (`from-orange-50 to-orange-100/50`)
- **Borders**: Rounded corners (`rounded-3xl`)
- **Shadows**: Elevated appearance with hover effects
- **Colors**: Teal accents for buttons and badges
- **Typography**: Slate color palette for text

## Animation

- Smooth fade-in with staggered delays
- Hover effects: scale transform, shadow enhancement
- Respects user's reduced motion preferences
- CTA button arrow slides on hover

## Accessibility

- Proper semantic markup
- ARIA attributes for screen readers
- Keyboard navigation support
- Sufficient color contrast ratios
- Focus indicators

## Examples in Codebase

- **ProductsPage**: Uses category variant for main product listing
- **ProductCategoryPage**: Uses product variant for individual products

## Related Components

- `Badge`: Used for product counts and sizes
- `Button`: CTA buttons with consistent styling
- `Card`: Base card component (from shadcn/ui)
