'use client';

import { AnimatedSection } from '@/components/custom/Animated';
import { MasonryWall } from '@/components/custom/reviews/MasonryWall';
import { Button } from '@/components/ui/button';
import { contact } from '@/data/contact';
import { useGoogleReviews } from '@/hooks/useGoogleReviews';
import { ExternalLink, Star } from 'lucide-react';
import { siGoogle, siYelp } from 'simple-icons';

export default function ReviewsPage() {
  const { reviews, averageRating, totalReviews, isLoading, error } =
    useGoogleReviews();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Alliance Medical Supply & Rental',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: averageRating,
      reviewCount: totalReviews,
    },
    review: reviews.slice(0, 20).map((t) => ({
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
                    {error ? '4.9' : averageRating.toFixed(1)}
                  </p>
                  <span className="text-3xl text-yellow-500">★</span>
                </div>
                <p className="text-sm text-teal-700 font-medium">
                  Average Rating
                </p>
              </div>

              <div className="bg-gradient-to-br from-teal-50 to-teal-100/50 border border-teal-200 rounded-2xl p-6 text-center hover:shadow-md transition-shadow">
                <p className="text-4xl md:text-5xl font-bold text-teal-700 mb-2">
                  {isLoading ? '...' : error ? '100+' : `${totalReviews}+`}
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
          ) : error ? (
            <div className="rounded-2xl border bg-card p-10 shadow-sm text-center max-w-lg mx-auto">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-amber-50 border border-amber-200 mb-4 mx-auto">
                <Star className="h-8 w-8 text-amber-400 fill-amber-400" />
              </div>
              <h2 className="text-xl font-bold text-foreground mb-2">
                Reviews temporarily unavailable
              </h2>
              <p className="text-muted-foreground text-sm mb-6">
                Live reviews couldn&apos;t be loaded right now. You can read our
                reviews directly on Google or Yelp.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <Button variant="default" size="sm" asChild>
                  <a
                    href={contact.social.google}
                    target="_blank"
                    rel="noopener noreferrer"
                    onKeyDown={(e) => {
                      if (e.key === ' ') {
                        e.preventDefault();
                        e.currentTarget.click();
                      }
                    }}
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="mr-2"
                      style={{ color: 'white' }}
                    >
                      <path d={siGoogle.path} />
                    </svg>
                    View on Google
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a
                    href={contact.social.yelp}
                    target="_blank"
                    rel="noopener noreferrer"
                    onKeyDown={(e) => {
                      if (e.key === ' ') {
                        e.preventDefault();
                        e.currentTarget.click();
                      }
                    }}
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="mr-2"
                      style={{ color: `#${siYelp.hex}` }}
                    >
                      <path d={siYelp.path} />
                    </svg>
                    View on Yelp
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          ) : (
            <MasonryWall testimonials={reviews} />
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
