/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import Image from 'next/image';

function Stars({ rating }: { rating: number }) {
  return (
    <div
      className="flex items-center gap-0.5"
      aria-label={`${rating} out of 5 stars`}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`size-4 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
          fill={i < rating ? 'currentColor' : 'none'}
        />
      ))}
    </div>
  );
}

export const MasonryWall = ({ testimonials }: { testimonials: any[] }) => {
  return (
    <div className="[column-fill:_balance] columns-1 sm:columns-2 lg:columns-3 gap-4 md:gap-6">
      {testimonials.map((t, idx) => (
        <motion.article
          key={t.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4, delay: (idx % 9) * 0.05 }}
          data-component="ReviewCard"
          className="mb-4 md:mb-6 break-inside-avoid rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-lg hover:border-teal-200 transition-all duration-300"
        >
          {/* Header */}
          <div className="flex items-start gap-4">
            <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border-2 border-teal-100 bg-gray-100">
              <Image
                src={t.avatar}
                alt={`${t.name} avatar`}
                fill
                className="object-cover"
                sizes="56px"
              />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-2 mb-2">
                <div className="min-w-0">
                  <p className="font-semibold text-gray-900 leading-tight truncate">
                    {t.name}
                  </p>
                  <p className="text-sm text-gray-600 mt-0.5">
                    {t.role}
                    {t.city ? ` • ${t.city}` : ''}
                  </p>
                </div>
                <Stars rating={t.rating} />
              </div>
              {/* Tags */}
              {t.tags?.length ? (
                <ul className="flex flex-wrap gap-2">
                  {t.tags.map((tag: any) => (
                    <li
                      key={tag}
                      className="inline-flex items-center rounded-full bg-teal-50 px-3 py-1 text-xs font-medium text-teal-700 border border-teal-100"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          </div>

          {/* Body */}
          <div className="mt-4 relative">
            <Quote className="absolute -left-1 -top-1 size-6 text-teal-500/20" />
            {t.content.length > 220 ? (
              <details className="group">
                <summary className="cursor-pointer text-sm text-gray-700 leading-relaxed pl-5 [&::-webkit-details-marker]:hidden hover:text-gray-900 transition-colors">
                  {t.content.slice(0, 220)}…{' '}
                  <span className="text-teal-600 font-medium hover:text-teal-700">
                    Read more
                  </span>
                </summary>
                <p className="mt-2 text-sm text-gray-700 leading-relaxed pl-5">
                  {t.content}
                </p>
              </details>
            ) : (
              <p className="text-sm text-gray-700 leading-relaxed pl-5">
                {t.content}
              </p>
            )}
          </div>

          {/* Date */}
          {t.date ? (
            <p className="mt-4 text-xs text-gray-500 font-medium">
              {new Date(t.date).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric',
              })}
            </p>
          ) : null}
        </motion.article>
      ))}
    </div>
  );
};
