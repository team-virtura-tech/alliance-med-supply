/**
 * Application configuration and feature flags
 */

export const config = {
  features: {
    // Feature flag for infinite moving cards in hero section
    enableInfiniteMovingCards: false,
  },
} as const;

/**
 * Check if a feature is enabled
 */
export const isFeatureEnabled = (
  feature: keyof typeof config.features
): boolean => {
  return config.features[feature];
};
