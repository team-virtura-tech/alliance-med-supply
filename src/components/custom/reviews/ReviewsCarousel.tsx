import { InfiniteSlider } from '@/components/ui/infinite-slider';
import { GoogleReview } from '@/lib/api/googleReviews';
import { motion, useReducedMotion } from 'framer-motion';
import 'swiper/css';
import { ReviewCard } from './MasonryWall';

export const ReviewsCarousel = ({
  testimonials,
}: {
  testimonials: GoogleReview[];
}) => {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 20 }}
      whileInView={reduce ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
      className="mb-12"
    >
      <InfiniteSlider
        duration={50}
        durationOnHover={6000}
        gap={16}
        className="md:[mask-image:linear-gradient(to_right,transparent_0%,_black_128px,_black_calc(100%-128px),_transparent_100%)]"
      >
        {testimonials.map((r, i) => (
          <ReviewCard
            key={r.id}
            testimonial={r}
            index={i}
            expandable={false}
            isTruncatable={r.text.length > 220}
            defaultAvatar="/images/aboutUs/maleProfile.png"
            fixedHeight={true}
            truncateLength={150}
            className="w-[320px] sm:w-[380px] shrink-0"
          />
        ))}
      </InfiniteSlider>
    </motion.div>
  );
};
