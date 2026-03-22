'use client';

import { useCallback, useEffect, useState } from 'react';

import {
  fetchGoogleReviews,
  GoogleReview,
  GoogleReviewsResponse,
  isGoogleReviewsError,
} from '@/lib/api/googleReviews';
import { config } from '@/lib/config';

type LoadingState = 'idle' | 'loading' | 'success' | 'error';

export type UseGoogleReviewsReturn = {
  /** Full response from the API including business info */
  data: GoogleReviewsResponse | null;
  /** Just the reviews array for convenience */
  reviews: GoogleReview[];
  /** Average rating (from API or calculated from reviews) */
  averageRating: number;
  /** Total number of reviews (from API or reviews count) */
  totalReviews: number;
  /** Loading state machine */
  loading: LoadingState;
  /** Error message if any */
  error: string | null;
  /** Simple boolean for loading state */
  isLoading: boolean;
  /** Refetch function to manually trigger a new fetch */
  refetch: () => Promise<void>;
};

/**
 * Calculate average rating from an array of reviews
 */
export function calcAverageRating(reviews: GoogleReview[]): number {
  const total = reviews.reduce((sum, r) => sum + (r.rating || 0), 0);
  return reviews.length ? Math.round((total / reviews.length) * 10) / 10 : 0;
}

/**
 * Hook to fetch Google Reviews from the API
 * Returns both the full response and extracted reviews for convenience
 */
export const useGoogleReviews = (): UseGoogleReviewsReturn => {
  const liveReviewsEnabled = config.features.enableLiveReviews;

  const [data, setData] = useState<GoogleReviewsResponse | null>(null);
  const [loading, setLoading] = useState<LoadingState>(
    liveReviewsEnabled ? 'idle' : 'error'
  );
  const [error, setError] = useState<string | null>(
    liveReviewsEnabled ? null : 'Live reviews are disabled.'
  );

  const fetchReviews = useCallback(async () => {
    if (!liveReviewsEnabled) return;

    setLoading('loading');
    setError(null);

    try {
      const result = await fetchGoogleReviews();

      if (isGoogleReviewsError(result)) {
        setError(result.error);
        setLoading('error');
        setData(null);
        return;
      }

      setData(result);
      setLoading('success');
    } catch (err) {
      setError(
        err instanceof Error ? err.message : 'Failed to fetch Google reviews'
      );
      setLoading('error');
      setData(null);
    }
  }, [liveReviewsEnabled]);

  useEffect(() => {
    fetchReviews();
  }, [fetchReviews]);

  const reviews = data?.reviews ?? [];
  const averageRating = data?.rating ?? calcAverageRating(reviews);
  const totalReviews = data?.user_ratings_total ?? reviews.length;

  return {
    data,
    reviews,
    averageRating,
    totalReviews,
    loading,
    error,
    isLoading: loading === 'loading',
    refetch: fetchReviews,
  };
};
