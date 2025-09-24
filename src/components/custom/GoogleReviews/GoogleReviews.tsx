'use client';

import { Avatar } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  MessageSquare,
  Quote,
  Star,
} from 'lucide-react';
import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';

type Review = {
  author_name: string;
  author_url?: string;
  profile_photo_url?: string;
  rating: number;
  relative_time_description?: string;
  text: string;
  time?: number;
};

type ReviewsPayload = {
  name?: string;
  url?: string;
  rating?: number;
  user_ratings_total?: number;
  editorial_summary?: string;
  html_attributions?: string[];
  reviews: Review[];
};

const StarRating = ({
  rating = 0,
  size = 'sm',
  showNumber = false,
}: {
  rating?: number;
  size?: 'sm' | 'lg';
  showNumber?: boolean;
}) => {
  const sizeClass = size === 'lg' ? 'h-5 w-5' : 'h-4 w-4';
  const stars = Array.from({ length: 5 }, (_, i) => i + 1);

  return (
    <div className="flex items-center gap-1">
      <div className="flex">
        {stars.map((star) => (
          <Star
            key={star}
            className={`${sizeClass} ${
              star <= Math.round(rating)
                ? 'fill-yellow-400 text-yellow-400'
                : 'fill-gray-200 text-gray-200'
            }`}
          />
        ))}
      </div>
      {showNumber && (
        <span className="ml-1 text-sm font-medium text-muted-foreground">
          {rating.toFixed(1)}
        </span>
      )}
    </div>
  );
};

export const GoogleReviews = () => {
  const [data, setData] = useState<ReviewsPayload | null>(null);
  const [err, setErr] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetch('/api/google-reviews')
      .then((r) => r.json())
      .then((d) => {
        if (d?.error) setErr(d.error);
        else setData(d);
      })
      .catch(() => setErr('Failed to load reviews'));
  }, []);

  // Auto-rotate carousel every 6 seconds
  useEffect(() => {
    if (!data?.reviews || data.reviews.length <= 3) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const cardsPerView =
          typeof window !== 'undefined'
            ? window.innerWidth >= 1024
              ? 3
              : window.innerWidth >= 768
                ? 2
                : 1
            : 1;
        const maxIndex = Math.max(0, data.reviews.length - cardsPerView);
        return prev >= maxIndex ? 0 : prev + 1;
      });
    }, 6000);

    return () => clearInterval(interval);
  }, [data?.reviews]);

  const getCardsPerView = useCallback(() => {
    if (typeof window === 'undefined') return 1;
    if (window.innerWidth >= 1024) return 3;
    if (window.innerWidth >= 768) return 2;
    return 1;
  }, []);

  const nextSlide = useCallback(() => {
    if (!data?.reviews) return;
    const cardsPerView = getCardsPerView();
    const maxIndex = Math.max(0, data.reviews.length - cardsPerView);
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [data?.reviews, getCardsPerView]);

  const prevSlide = useCallback(() => {
    if (!data?.reviews) return;
    const cardsPerView = getCardsPerView();
    const maxIndex = Math.max(0, data.reviews.length - cardsPerView);
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [data?.reviews, getCardsPerView]);

  if (err) {
    return (
      <section
        id="GoogleReviews"
        data-component="GoogleReviews"
        className="rounded-2xl border bg-card p-8 shadow-sm"
      >
        <div className="text-center">
          <MessageSquare className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
          <h3 className="text-xl font-semibold text-foreground mb-2">
            Customer Reviews
          </h3>
          <p className="text-muted-foreground">
            Unable to load Google reviews at the moment. Please try again later.
          </p>
        </div>
      </section>
    );
  }

  if (!data) {
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
    name,
    rating,
    user_ratings_total,
    url,
    editorial_summary,
    html_attributions,
    reviews,
  } = data;

  return (
    <section
      id="GoogleReviews"
      data-component="GoogleReviews"
      className="py-16 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      <div className="space-y-12">
        {/* Header Section */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
            <Star className="h-4 w-4 fill-current" />
            Google Reviews
          </div>

          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            {name || 'What Our Customers Say'}
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
        <div className="relative px-16">
          {/* Left Navigation Button */}
          <Button
            variant="outline"
            size="sm"
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full p-0 z-10 bg-background shadow-lg border-2"
            disabled={
              !data?.reviews || data.reviews.length <= getCardsPerView()
            }
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>

          {/* Right Navigation Button */}
          <Button
            variant="outline"
            size="sm"
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full p-0 z-10 bg-background shadow-lg border-2"
            disabled={
              !data?.reviews || data.reviews.length <= getCardsPerView()
            }
          >
            <ChevronRight className="h-5 w-5" />
          </Button>

          {/* Carousel Container */}
          <div className="overflow-x-hidden py-8">
            <div
              className="flex transition-transform duration-500 ease-in-out gap-6 py-4"
              style={{
                transform: `translateX(-${currentIndex * (100 / getCardsPerView())}%)`,
              }}
            >
              {reviews?.map((review) => (
                <div
                  key={review.time}
                  className="flex-none w-full md:w-1/2 lg:w-1/3 px-2"
                >
                  <Card className="h-full p-8 border-0 shadow-lg bg-white rounded-2xl my-4">
                    <div className="text-center space-y-6">
                      {/* Quote Icon */}
                      <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                        <Quote className="h-8 w-8" />
                      </div>

                      {/* Stars */}
                      <div className="flex justify-center">
                        <StarRating rating={review.rating} size="lg" />
                      </div>

                      {/* Review Text */}
                      <p className="text-muted-foreground leading-relaxed text-base h-24 overflow-hidden">
                        &ldquo;
                        {review.text.length > 120
                          ? `${review.text.substring(0, 120)}...`
                          : review.text}
                        &rdquo;
                      </p>

                      {/* Author Info */}
                      <div className="flex items-center justify-center gap-3 pt-4">
                        <Avatar className="h-12 w-12">
                          {review.profile_photo_url ? (
                            <div className="relative h-full w-full">
                              <Image
                                src={review.profile_photo_url}
                                alt={review.author_name}
                                fill
                                className="object-cover rounded-full"
                                sizes="48px"
                              />
                            </div>
                          ) : (
                            <div className="h-full w-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white font-semibold">
                              {review.author_name.charAt(0).toUpperCase()}
                            </div>
                          )}
                        </Avatar>

                        <div className="text-left">
                          {review.author_url ? (
                            <a
                              href={review.author_url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="font-semibold text-foreground hover:text-primary transition-colors block"
                            >
                              {review.author_name}
                            </a>
                          ) : (
                            <div className="font-semibold text-foreground">
                              {review.author_name}
                            </div>
                          )}
                          <div className="text-sm text-muted-foreground">
                            {review.relative_time_description}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          {url && (
            <Button variant="outline" asChild>
              <a href={url} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                View all reviews
              </a>
            </Button>
          )}

          <Button asChild>
            <a
              href={`https://search.google.com/local/writereview?placeid=${encodeURIComponent(
                process.env.NEXT_PUBLIC_ALLIANCE_PLACE_ID || ''
              )}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Star className="mr-2 h-4 w-4" />
              Write a review
            </a>
          </Button>
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
