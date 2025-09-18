# Feature Flags

This project uses feature flags to control the visibility of certain features.

## Available Feature Flags

### `enableInfiniteMovingCards`

**Type:** Boolean
**Default:** `true`
**Description:** Controls whether the infinite moving cards are displayed in the hero section.

**Usage:**

```typescript
// In src/lib/config.ts
export const config = {
  features: {
    enableInfiniteMovingCards: true, // Change to false to disable
  },
} as const;
```

## How to Add New Feature Flags

1. Add the feature flag to `src/lib/config.ts`:

```typescript
export const config = {
  features: {
    enableInfiniteMovingCards: true,
    // Add new feature flag here
    enableNewFeature: true, // or false
  },
} as const;
```

2. Use the feature flag in your component:

```typescript
import { isFeatureEnabled } from '@/lib/config';

const showFeature = isFeatureEnabled('enableNewFeature');

return (
  <div>
    {showFeature && (
      <NewFeatureComponent />
    )}
  </div>
);
```

3. Document the feature flag in this file

## Configuration

1. Open `src/lib/config.ts`
2. Set your desired feature flag values (true/false)
3. Save the file - changes take effect immediately
