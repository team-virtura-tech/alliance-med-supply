/**
 * Google Reviews API Client
 * Centralized function to fetch Google Reviews data
 */

export type GoogleReview = {
  id: string;
  author_name: string;
  author_url?: string;
  profile_photo_url?: string;
  rating: number;
  relative_time_description?: string;
  text: string;
  time?: number;
  role?: string;
  city?: string;
  tags?: string[];
  date?: string; // ISO
};

export type GoogleReviewsResponse = {
  name?: string;
  url?: string;
  rating?: number;
  user_ratings_total?: number;
  editorial_summary?: string;
  html_attributions?: string[];
  reviews: GoogleReview[];
};

export type GoogleReviewsError = {
  error: string;
};

// Convert Google Review to proper format with mapped properties
function convertGoogleReviewToTestimonial(
  review: GoogleReview,
  index: number
): GoogleReview {
  return {
    ...review,
    id: review.id || `google-${review.time || index}`,
    profile_photo_url:
      review.profile_photo_url || '/images/aboutUs/maleProfile.png',
    role: review.role || '',
    tags: review.tags || ['Google Review', 'Verified'],
    date:
      review.date ||
      (review.time
        ? new Date(review.time * 1000).toISOString()
        : new Date().toISOString()),
  };
}

/**
 * Fetches Google Reviews from the API endpoint
 * @returns Promise with reviews data or error
 */
export async function fetchGoogleReviews(): Promise<
  GoogleReviewsResponse | GoogleReviewsError
> {
  try {
    const response = await fetch('/api/google-reviews');

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    if (data?.error) {
      return { error: data.error };
    }

    // Transform reviews to include all required properties
    const transformedReviews =
      data.reviews?.map((review: GoogleReview, index: number) =>
        convertGoogleReviewToTestimonial(review, index)
      ) || [];

    return {
      ...data,
      reviews: transformedReviews,
    } as GoogleReviewsResponse;
  } catch (error) {
    console.error('Failed to fetch Google reviews:', error);
    return {
      error:
        error instanceof Error
          ? error.message
          : 'Failed to load reviews. Please try again later.',
    };
  }
}

/**
 * Type guard to check if the response is an error
 */
export function isGoogleReviewsError(
  response: GoogleReviewsResponse | GoogleReviewsError
): response is GoogleReviewsError {
  return 'error' in response;
}
