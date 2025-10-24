'use client';
import type { Testimonial } from '@/app/reviews/page.tsx';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

function Stars({ rating }: { rating: number }) {
  return (
    <div
      className="flex items-center gap-0.5"
      aria-label={`${rating} out of 5 stars`}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`size-4 ${i < rating ? 'text-yellow-500' : 'text-muted-foreground/40'}`}
          fill={i < rating ? 'currentColor' : 'none'}
        />
      ))}
    </div>
  );
}

export const ReviewsCarousel = ({
  testimonials,
}: {
  testimonials: Testimonial[];
}) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  // Snap to nearest slide on resize/scroll
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const onScroll = () => {
      const w = el.clientWidth;
      const i = Math.round(el.scrollLeft / w);
      setIndex(i);
    };
    el.addEventListener('scroll', onScroll, { passive: true });
    const ro = new ResizeObserver(onScroll);
    ro.observe(el);
    return () => {
      el.removeEventListener('scroll', onScroll);
      ro.disconnect();
    };
  }, []);

  const scrollByPage = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const amount = el.clientWidth * dir;
    el.scrollBy({ left: amount, behavior: 'smooth' });
  };

  // Build pages of 1/2/3 cards depending on viewport via CSS; we scroll by container width.
  return (
    <div className="relative">
      {/* Track */}
      <div
        ref={trackRef}
        className="group overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar"
      >
        <div className="flex" style={{ width: '100%' }}>
          {/* Each page is 100% width, inside each page we show a responsive grid */}
          {chunk(testimonials, 3).map((page, p) => (
            <div key={p} className="snap-start shrink-0 w-full px-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {page.map((t) => (
                  <motion.article
                    key={t.id}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.35 }}
                    className="h-full rounded-2xl border bg-card p-5 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start gap-3">
                      <div className="relative h-12 w-12 overflow-hidden rounded-full border bg-muted">
                        <Image
                          src={t.avatar}
                          alt={`${t.name} avatar`}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-semibold leading-tight">
                              {t.name}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              {t.role}
                            </p>
                          </div>
                          <Stars rating={t.rating} />
                        </div>
                      </div>
                    </div>

                    <p className="mt-3 text-sm text-muted-foreground">
                      <Quote className="mr-2 inline size-4 text-muted-foreground/60" />
                      {t.content}
                    </p>
                  </motion.article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Arrows */}
      <button
        aria-label="Previous"
        onClick={() => scrollByPage(-1)}
        className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full border bg-background/80 p-2 shadow hover:bg-background hidden sm:inline-flex cursor-pointer"
      >
        <ChevronLeft className="size-5" />
      </button>
      <button
        aria-label="Next"
        onClick={() => scrollByPage(1)}
        className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full border bg-background/80 p-2 shadow hover:bg-background hidden sm:inline-flex cursor-pointer"
      >
        <ChevronRight className="size-5" />
      </button>

      {/* Dots */}
      <div className="mt-6 flex justify-center gap-2">
        {Array.from({ length: Math.ceil(testimonials.length / 3) }).map(
          (_, i) => (
            <span
              key={i}
              className={`h-2 w-2 rounded-full border ${i === index ? 'bg-primary' : 'bg-muted'}`}
            />
          )
        )}
      </div>
    </div>
  );
};

function chunk<T>(arr: T[], size: number): T[][] {
  const out: T[][] = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}
