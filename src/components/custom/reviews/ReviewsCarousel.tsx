import { GoogleReview } from '@/lib/api/googleReviews';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ReviewCard } from './MasonryWall';

export const ReviewsCarousel = ({
  testimonials,
}: {
  testimonials: GoogleReview[];
}) => {
  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={1}
      breakpoints={{
        640: { slidesPerView: 2 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
        1280: { slidesPerView: 4 },
      }}
      modules={[Autoplay]}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      speed={1200}
      effect="slide"
      cssMode={false}
      loop
    >
      {testimonials.map((r, i) => (
        <SwiperSlide key={i}>
          <ReviewCard
            key={r.id}
            testimonial={r}
            index={i}
            expandable={false}
            isTruncatable={r.text.length > 220}
            defaultAvatar="/images/aboutUs/maleProfile.png"
            fixedHeight={true}
            truncateLength={150}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
