'use client';

import { Button } from '@/components/ui/button';
import { useGoogleReviews } from '@/hooks/useGoogleReviews';
import { ExternalLink, Star } from 'lucide-react';
import { ReviewsCarousel } from '../reviews';
import { StarRating } from '../reviews/MasonryWall';

export const GoogleReviews = () => {
  const { data, error, isLoading } = useGoogleReviews();

  if (error) {
    return (
      <section
        id="GoogleReviews"
        data-component="GoogleReviews"
        className="w-full py-16 px-4 md:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-screen-xl rounded-2xl border bg-card p-8 shadow-sm text-center">
          <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-amber-50 border border-amber-200 mb-4 mx-auto">
            <Star className="h-8 w-8 text-amber-400 fill-amber-400" />
          </div>
          <h2 className="text-2xl font-bold text-foreground mb-2">
            What Our Customers Say
          </h2>
          <p className="text-muted-foreground mb-2">
            We&apos;re rated <strong>4.9/5</strong> on Google with hundreds of
            satisfied Bay Area customers.
          </p>
          <p className="text-sm text-muted-foreground mb-6">
            Live reviews are temporarily unavailable.
          </p>
          <div className="flex items-center justify-center">
            <Button variant="default" size="sm" asChild>
              <a
                href="https://www.google.com/search?q=Alliance+Medical+Supply+%26+Rental+San+Jose"
                target="_blank"
                rel="noopener noreferrer"
                onKeyDown={(e) => {
                  if (e.key === ' ') {
                    e.preventDefault();
                    e.currentTarget.click();
                  }
                }}
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                View on Google
              </a>
            </Button>
          </div>
        </div>
      </section>
    );
  }

  if (isLoading || !data) {
    return (
      <section
        id="GoogleReviews"
        data-component="GoogleReviews"
        className="rounded-2xl border bg-card p-8 shadow-sm animate-pulse"
      >
        <div className="space-y-6">
          <div className="text-center space-y-4">
            <div className="h-8 w-48 bg-muted rounded-lg mx-auto" />
            <div className="h-6 w-32 bg-muted rounded-lg mx-auto" />
            <div className="h-4 w-64 bg-muted rounded-lg mx-auto" />
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="rounded-xl border bg-card p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 bg-muted rounded-full" />
                  <div className="space-y-2 flex-1">
                    <div className="h-4 w-24 bg-muted rounded" />
                    <div className="h-3 w-20 bg-muted rounded" />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="h-4 w-full bg-muted rounded" />
                  <div className="h-4 w-full bg-muted rounded" />
                  <div className="h-4 w-3/4 bg-muted rounded" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  const {
    rating,
    user_ratings_total,
    place_id,
    url,
    editorial_summary,
    html_attributions,
    reviews,
  } = data;

  return (
    <section
      id="GoogleReviews"
      data-component="GoogleReviews"
      className="w-full py-16 px-8 md:px-6 lg:px-8"
    >
      <div className="space-y-12">
        {/* Header Section */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
            <Star className="h-4 w-4 fill-current" aria-hidden="true" />
            Google Reviews
          </div>

          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            {'What Our Customers Say'}
          </h2>

          <div className="flex items-center justify-center gap-3">
            <StarRating rating={rating ?? 0} size="lg" />
            <span className="text-2xl font-bold">{rating?.toFixed(1)}</span>
            <span className="text-muted-foreground">
              ({user_ratings_total?.toLocaleString()} reviews)
            </span>
          </div>

          {editorial_summary && (
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {editorial_summary}
            </p>
          )}
        </div>

        {/* Reviews Carousel */}
        <ReviewsCarousel testimonials={reviews} />

        {/* Footer Actions */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          {url && (
            <Button variant="outline" asChild>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View all reviews on Google (opens in a new tab)"
              >
                <ExternalLink className="mr-2 h-4 w-4" aria-hidden="true" />
                View all reviews
              </a>
            </Button>
          )}

          {place_id && (
            <Button asChild>
              <a
                href={`https://search.google.com/local/writereview?placeid=${encodeURIComponent(place_id)}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Write a review on Google (opens in a new tab)"
              >
                <Star className="mr-2 h-4 w-4" aria-hidden="true" />
                Write a review
              </a>
            </Button>
          )}
        </div>

        {/* Required Attribution */}
        {html_attributions?.length ? (
          <div className="text-center">
            <div
              className="text-xs text-muted-foreground"
              dangerouslySetInnerHTML={{ __html: html_attributions.join(' ') }}
            />
          </div>
        ) : null}
      </div>
    </section>
  );
};
