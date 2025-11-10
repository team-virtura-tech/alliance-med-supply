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
      className={`break-inside-avoid rounded-2xl border border-border bg-white p-6 hover:border-primary/30 transition-all duration-300 ${
        fixedHeight ? 'flex flex-col h-[220px]' : ''
      }`}
    >
      {/* Header */}
      <div className="flex items-center gap-4 ">
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
            <div className="min-w-0 flex items-center gap-1.5">
              <p className="font-semibold text-foreground leading-tight truncate">
                {t.author_name}
              </p>
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4 shrink-0 fill-blue-500"
                aria-label="Verified"
              >
                <path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z" />
              </svg>
            </div>
            <StarRating rating={t.rating} />
          </div>
        </div>
      </div>

      {/* Body */}
      <div
        className={`mt-3 relative ${fixedHeight ? 'flex-1 overflow-hidden' : ''}`}
      >
        <p
          className={`text-sm text-foreground leading-normal ${fixedHeight ? 'line-clamp-4' : ''}`}
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
        <div
          className={`flex items-center justify-between ${fixedHeight ? 'mt-auto pt-3' : 'mt-2'}`}
        >
          <p className="text-xs text-muted-foreground font-medium">
            {new Date(t.date).toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
              year: 'numeric',
            })}
          </p>
          <Image
            src="/google_g_icon.svg"
            alt="Google"
            width={24}
            height={24}
            className="shrink-0"
          />
        </div>
      ) : null}
    </motion.article>
  );
};
