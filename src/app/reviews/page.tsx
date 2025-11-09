'use client';

import { AnimatedSection } from '@/components/custom/Animated';
import { MasonryWall } from '@/components/custom/reviews/MasonryWall';
import {
  fetchGoogleReviews,
  isGoogleReviewsError,
  type GoogleReview,
  type GoogleReviewsResponse,
} from '@/lib/api/googleReviews';
import { useEffect, useState } from 'react';
import { siGoogle, siYelp } from 'simple-icons';

function calcAverageRating(items: GoogleReview[]) {
  const total = items.reduce((sum, t) => sum + (t.rating || 0), 0);
  return items.length ? Math.round((total / items.length) * 10) / 10 : 0;
}

export default function ReviewsPage() {
  const [googleReviews, setGoogleReviews] = useState<GoogleReview[]>([]);
  const [googleData, setGoogleData] = useState<GoogleReviewsResponse | null>(
    null
  );
  const [isLoading, setIsLoading] = useState(true);

  // Fetch Google Reviews
  useEffect(() => {
    fetchGoogleReviews().then((response) => {
      if (!isGoogleReviewsError(response)) {
        setGoogleReviews(response.reviews || []);
        setGoogleData(response);
      }
      setIsLoading(false);
    });
  }, []);

  // Combine default testimonials with Google reviews
  const allTestimonials = [...googleReviews];

  const reviewCount = allTestimonials.length;
  const avg = googleData?.rating || calcAverageRating(allTestimonials);
  const totalReviews = googleData?.user_ratings_total || reviewCount;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Alliance Medical Supply & Rental',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: avg,
      reviewCount: totalReviews,
    },
    review: allTestimonials.slice(0, 20).map((t) => ({
      '@type': 'Review',
      reviewBody: t.text,
      reviewRating: { '@type': 'Rating', ratingValue: t.rating },
      author: { '@type': 'Person', name: t.author_name },
      datePublished: t.date || undefined,
    })),
  };

  return (
    <div className="min-h-screen bg-white m-12" data-component="ReviewsPage">
      {/* Hero Section with Stats */}
      <div className="relative bg-white py-16 md:py-20">
        <div className="relative mx-auto max-w-screen-xl px-4 md:px-6 lg:px-8">
          <AnimatedSection
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Stats Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto mb-8">
              <div className="bg-gradient-to-br from-teal-50 to-teal-100/50 border border-teal-200 rounded-2xl p-6 text-center hover:shadow-md transition-shadow">
                <div className="flex items-center justify-center gap-1 mb-2">
                  <p className="text-4xl md:text-5xl font-bold text-teal-700">
                    {avg.toFixed(1)}
                  </p>
                  <span className="text-3xl text-yellow-500">★</span>
                </div>
                <p className="text-sm text-teal-700 font-medium">
                  Average Rating
                </p>
              </div>

              <div className="bg-gradient-to-br from-teal-50 to-teal-100/50 border border-teal-200 rounded-2xl p-6 text-center hover:shadow-md transition-shadow">
                <p className="text-4xl md:text-5xl font-bold text-teal-700 mb-2">
                  {isLoading ? '...' : `${totalReviews}+`}
                </p>
                <p className="text-sm text-teal-700 font-medium">
                  Customer Reviews
                </p>
              </div>

              <div className="bg-gradient-to-br from-teal-50 to-teal-100/50 border border-teal-200 rounded-2xl p-6 text-center hover:shadow-md transition-shadow col-span-2 lg:col-span-1">
                <p className="text-4xl md:text-5xl font-bold text-teal-700 mb-2">
                  15+
                </p>
                <p className="text-sm text-teal-700 font-medium">
                  Years Serving Bay Area
                </p>
              </div>

              <div className="bg-gradient-to-br from-teal-50 to-teal-100/50 border border-teal-200 rounded-2xl p-6 text-center hover:shadow-md transition-shadow col-span-2 lg:col-span-1">
                <div className="flex items-center justify-center gap-2 mb-3 flex-wrap">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-xs font-medium text-gray-700 shadow-sm">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      style={{ color: siGoogle.hex }}
                    >
                      <path d={siGoogle.path} />
                    </svg>
                    Google
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-xs font-medium text-gray-700 shadow-sm">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      style={{ color: siYelp.hex }}
                    >
                      <path d={siYelp.path} />
                    </svg>
                    Yelp
                  </span>
                </div>
                <p className="text-sm text-teal-700 font-medium">
                  Verified Reviews
                </p>
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 mt-12 md:mt-16">
              Wall of Love
            </h1>
            {/* Subtitle moved here */}
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Real feedback from patients, families, and healthcare
              professionals across the Bay Area
            </p>
          </AnimatedSection>
        </div>
      </div>

      {/* Reviews Content */}
      <div className="relative pt-2 pb-16">
        <div className="mx-auto max-w-screen-xl px-4 md:px-6 lg:px-8">
          {isLoading ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-teal-600" />
              <p className="mt-4 text-gray-600">Loading reviews...</p>
            </div>
          ) : (
            <MasonryWall testimonials={allTestimonials} />
          )}
        </div>
      </div>

      {/* SEO: JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
}
