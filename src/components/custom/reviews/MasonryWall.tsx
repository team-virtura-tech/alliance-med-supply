'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

const TRUNCATE_LENGTH = 220;
const FIXED_HEIGHT_TRUNCATE_LENGTH = 150; // ~3-4 lines of text

const truncateAtWord = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  const truncated = text.slice(0, maxLength);
  const lastSpace = truncated.lastIndexOf(' ');
  return lastSpace > 0 ? truncated.slice(0, lastSpace) : truncated;
};

// Generic review type - works with any review data structure
export type Review = {
  id: string;
  author_name: string;
  author_url?: string;
  profile_photo_url?: string;
  rating: number;
  text: string;
  date?: string;
  role?: string;
  city?: string;
  tags?: string[];
};

type MasonryWallProps = {
  testimonials: Review[];
  expandable?: boolean;
  defaultAvatar?: string;
  fixedHeight?: boolean;
};

export const MasonryWall = ({
  testimonials,
  expandable = true,
  defaultAvatar = '/images/aboutUs/maleProfile.png',
  fixedHeight = false,
}: MasonryWallProps) => {
  return (
    <div
      data-component="MasonryWall"
      className="[column-fill:_balance] columns-1 sm:columns-2 lg:columns-3 gap-4 md:gap-6"
    >
      {testimonials.map((t, idx) => {
        const truncateLength = fixedHeight
          ? FIXED_HEIGHT_TRUNCATE_LENGTH
          : TRUNCATE_LENGTH;
        const isTruncatable = t.text.length > truncateLength;
        return (
          <ReviewCard
            key={t.id}
            testimonial={t}
            index={idx}
            expandable={expandable && !fixedHeight}
            isTruncatable={isTruncatable}
            defaultAvatar={defaultAvatar}
            fixedHeight={fixedHeight}
            truncateLength={truncateLength}
          />
        );
      })}
    </div>
  );
};

type ReviewCardProps = {
  testimonial: Review;
  index: number;
  expandable: boolean;
  isTruncatable: boolean;
  defaultAvatar: string;
  fixedHeight: boolean;
  truncateLength: number;
};

// Inline StarRating component - no external dependencies

export const StarRating = ({
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

export const ReviewCard = ({
  testimonial: t,
  index: idx,
  expandable,
  isTruncatable,
  defaultAvatar,
  fixedHeight,
  truncateLength,
}: ReviewCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const displayContent =
    !expandable || !isExpanded
      ? truncateAtWord(t.text, truncateLength)
      : t.text;

  const showExpandButton = expandable && isTruncatable;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4, delay: (idx % 9) * 0.05 }}
      data-component="ReviewCard"
      className={`mb-4 md:mb-6 break-inside-avoid rounded-2xl border border-border bg-white p-6 shadow-sm hover:shadow-lg hover:border-primary/30 transition-all duration-300 ${
        fixedHeight ? 'flex flex-col h-[280px]' : ''
      }`}
    >
      {/* Header */}
      <div className="flex items-start gap-4">
        <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border-2 border-primary/20 bg-muted">
          <Image
            src={t.profile_photo_url || defaultAvatar}
            alt={`${t.author_name} avatar`}
            fill
            className="object-cover"
            sizes="56px"
          />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2 mb-2">
            <div className="min-w-0">
              <p className="font-semibold text-foreground leading-tight truncate">
                {t.author_name}
              </p>
              <p className="text-sm text-muted-foreground mt-0.5">
                {t.role || 'Reviewer'}
                {t.city ? ` • ${t.city}` : ''}
              </p>
            </div>
            <StarRating rating={t.rating} />
          </div>
          {/* Tags */}
          {t.tags && t.tags.length > 0 ? (
            <ul className="flex flex-wrap gap-2">
              {t.tags.map((tag: string) => (
                <li
                  key={tag}
                  className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary border border-primary/20"
                >
                  {tag}
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>

      {/* Body */}
      <div
        className={`mt-4 relative ${fixedHeight ? 'flex-1 overflow-hidden' : ''}`}
      >
        <p
          className={`text-sm text-foreground leading-relaxed ${fixedHeight ? 'line-clamp-4' : ''}`}
        >
          {displayContent}
          {isTruncatable && !isExpanded && '…'}
        </p>
        {!expandable && isTruncatable && !fixedHeight && (
          <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white to-transparent pointer-events-none" />
        )}
      </div>

      {showExpandButton && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-3 text-sm font-medium text-primary hover:text-primary/80 transition-colors underline-offset-4 hover:underline"
          aria-expanded={isExpanded}
          aria-label={isExpanded ? 'Show less content' : 'Read more content'}
        >
          {isExpanded ? 'Show less' : 'Read more'}
        </button>
      )}

      {/* Date */}
      {t.date ? (
        <p
          className={`text-xs text-muted-foreground font-medium ${fixedHeight ? 'mt-auto pt-3' : 'mt-4'}`}
        >
          {new Date(t.date).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
          })}
        </p>
      ) : null}
    </motion.article>
  );
};
