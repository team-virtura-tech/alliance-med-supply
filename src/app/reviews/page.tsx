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
import { siFacebook, siGoogle, siYelp } from 'simple-icons';

export type Testimonial = {
  id: string;
  name: string;
  role: string;
  avatar: string;
  content: string;
  rating: number; // 1–5
  city?: string;
  tags?: string[];
  date?: string; // ISO
};

const defaultTestimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    role: 'Healthcare Professional',
    avatar: '/images/aboutUs/maleProfile.png',
    content:
      'Alliance Medical provided us with excellent wheelchair options for my elderly mother. The delivery was prompt and the setup was professional. Highly recommend their service!',
    rating: 5,
    city: 'San Jose',
    tags: ['Wheelchairs', 'Professional Service'],
    date: '2025-05-12',
  },
  {
    id: '2',
    name: 'Mike Chen',
    role: 'Family Caregiver',
    avatar: '/images/aboutUs/maleProfile.png',
    content:
      'Rented a hospital bed for post-surgery care. The staff was knowledgeable and helped us choose the right model. Same-day delivery made everything so convenient.',
    rating: 5,
    city: 'Fremont',
    tags: ['Hospital Beds', 'Same-Day Delivery'],
    date: '2025-04-28',
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    role: 'Home Care Provider',
    avatar: '/images/aboutUs/maleProfile.png',
    content:
      "We use Alliance Medical for all our clients' equipment needs. Their reliability and quality products make our job easier. JACHO accreditation gives us confidence.",
    rating: 5,
    city: 'Milpitas',
    tags: ['Professional', 'JACHO Accredited'],
    date: '2025-03-30',
  },
  {
    id: '4',
    name: 'David Kumar',
    role: 'Patient',
    avatar: '/images/aboutUs/maleProfile.png',
    content:
      'The mobility scooter rental was a game-changer during my recovery. Great selection and the staff took time to ensure I was comfortable using it.',
    rating: 5,
    city: 'Sunnyvale',
    tags: ['Mobility Scooters', 'Patient Care'],
    date: '2025-02-18',
  },
  {
    id: '5',
    name: 'Lisa Thompson',
    role: 'Family Member',
    avatar: '/images/aboutUs/maleProfile.png',
    content:
      'Purchased a lift chair for my father. The team was patient with our questions and the delivery crew was respectful and efficient. Quality product at fair price.',
    rating: 5,
    city: 'San Jose',
    tags: ['Lift Chairs', 'Quality Service'],
    date: '2025-01-22',
  },
  {
    id: '6',
    name: 'Priya Shah',
    role: 'Registered Nurse',
    avatar: '/images/aboutUs/maleProfile.png',
    content:
      'I recommend Alliance Medical to all my patients. Their equipment is well-maintained and they offer excellent customer support throughout the rental period.',
    rating: 5,
    city: 'Santa Clara',
    tags: ['Professional', 'Customer Support'],
    date: '2024-12-02',
  },
  {
    id: '7',
    name: 'Kevin Nguyen',
    role: 'Physical Therapist',
    avatar: '/images/aboutUs/maleProfile.png',
    content:
      'Great experience working with Alliance Medical. They understand the clinical needs and always provide appropriate equipment recommendations for my patients.',
    rating: 5,
    city: 'San Jose',
    tags: ['Clinical Equipment', 'Professional'],
    date: '2025-06-08',
  },
  {
    id: '8',
    name: 'Sofia Martinez',
    role: 'Patient',
    avatar: '/images/aboutUs/maleProfile.png',
    content:
      'Rented a knee scooter after foot surgery. Much better than crutches! The rental process was easy and they explained everything clearly.',
    rating: 5,
    city: 'Sunnyvale',
    tags: ['Knee Scooters', 'Easy Process'],
    date: '2025-03-10',
  },
  {
    id: '9',
    name: 'Jason Lee',
    role: 'Family Caregiver',
    avatar: '/images/aboutUs/maleProfile.png',
    content:
      "Needed a CPM machine urgently for my wife's post-op care. Alliance Medical came through with same-day delivery and thorough instructions.",
    rating: 5,
    city: 'Fremont',
    tags: ['CPM Machine', 'Same-Day Delivery'],
    date: '2025-04-05',
  },
  {
    id: '10',
    name: 'Aisha Patel',
    role: 'Home Health Aide',
    avatar: '/images/aboutUs/maleProfile.png',
    content:
      "We rely on Alliance Medical for our agency's equipment needs. Consistently good quality and their maintenance service keeps everything in top condition.",
    rating: 5,
    city: 'Milpitas',
    tags: ['Maintenance', 'Quality Equipment'],
    date: '2025-05-14',
  },
  {
    id: '11',
    name: "Brian O'Connor",
    role: 'Patient',
    avatar: '/images/aboutUs/maleProfile.png',
    content:
      'The rollator I rented helped tremendously with my mobility. Lightweight and easy to use. Staff was helpful in showing me the features.',
    rating: 5,
    city: 'San Jose',
    tags: ['Rollators', 'Helpful Staff'],
    date: '2025-05-01',
  },
  {
    id: '12',
    name: 'Hannah Park',
    role: 'Occupational Therapist',
    avatar: '/images/aboutUs/maleProfile.png',
    content:
      'Alliance Medical is my go-to recommendation for patients needing DME. They have a comprehensive inventory and understand clinical requirements.',
    rating: 5,
    city: 'Santa Clara',
    tags: ['DME', 'Clinical Support'],
    date: '2025-04-22',
  },
  {
    id: '13',
    name: 'Omar Ali',
    role: 'Patient',
    avatar: '/images/aboutUs/maleProfile.png',
    content:
      'Rented a transport chair for medical appointments. Lightweight and perfect for our needs. Return process was hassle-free.',
    rating: 5,
    city: 'Fremont',
    tags: ['Transport Chairs', 'Hassle-Free'],
    date: '2025-02-27',
  },
  {
    id: '14',
    name: 'Grace Williams',
    role: 'Family Member',
    avatar: '/images/aboutUs/maleProfile.png',
    content:
      'Purchased an electric bed for my husband. The adjustable features have greatly improved his comfort. Installation was quick and professional.',
    rating: 5,
    city: 'Milpitas',
    tags: ['Electric Beds', 'Professional Setup'],
    date: '2025-01-30',
  },
  {
    id: '15',
    name: 'Nikhil Verma',
    role: 'Patient',
    avatar: '/images/aboutUs/maleProfile.png',
    content:
      'The stand assist lift has been essential for my recovery. Alliance Medical helped us choose the right model and trained us on proper use.',
    rating: 5,
    city: 'San Jose',
    tags: ['Stand Assists', 'Training'],
    date: '2025-03-18',
  },
  {
    id: '16',
    name: 'Chloe Anderson',
    role: 'Home Care Nurse',
    avatar: '/images/aboutUs/maleProfile.png',
    content:
      'I work with multiple DME providers but Alliance Medical stands out for their responsiveness and product knowledge. True professionals.',
    rating: 5,
    city: 'Sunnyvale',
    tags: ['Professional', 'Responsive'],
    date: '2025-02-09',
  },
  {
    id: '17',
    name: 'Mateo Garcia',
    role: 'Patient',
    avatar: '/images/aboutUs/maleProfile.png',
    content:
      'The electric wheelchair rental gave me independence during recovery. Battery life was great and the chair was comfortable for extended use.',
    rating: 5,
    city: 'San Jose',
    tags: ['Electric Wheelchairs', 'Quality'],
    date: '2025-06-01',
  },
  {
    id: '18',
    name: 'Olivia Nguyen',
    role: 'Family Caregiver',
    avatar: '/images/aboutUs/maleProfile.png',
    content:
      'Mattress rental for pressure relief was exactly what we needed. Clean, comfortable, and delivered on time. Made a real difference in care quality.',
    rating: 5,
    city: 'Milpitas',
    tags: ['Mattresses', 'Pressure Relief'],
    date: '2025-05-26',
  },
  {
    id: '19',
    name: 'Isabella Rossi',
    role: 'Physical Therapist',
    avatar: '/images/aboutUs/maleProfile.png',
    content:
      'Alliance Medical is our preferred partner for patient equipment. Their JACHO accreditation and quality standards align with our clinical expectations.',
    rating: 5,
    city: 'Santa Clara',
    tags: ['JACHO Accredited', 'Clinical Partner'],
    date: '2025-04-09',
  },
  {
    id: '20',
    name: 'Ethan Brown',
    role: 'Patient',
    avatar: '/images/aboutUs/maleProfile.png',
    content:
      'Rented a PureWick system during hospital recovery at home. The staff explained usage thoroughly and follow-up support was excellent.',
    rating: 5,
    city: 'Sunnyvale',
    tags: ['PureWick', 'Excellent Support'],
    date: '2025-03-05',
  },
];

function calcAverageRating(items: Testimonial[]) {
  const total = items.reduce((sum, t) => sum + (t.rating || 0), 0);
  return items.length ? Math.round((total / items.length) * 10) / 10 : 0;
}

// Convert Google Review to Testimonial format
function convertGoogleReviewToTestimonial(
  review: GoogleReview,
  index: number
): Testimonial {
  return {
    id: `google-${review.time || index}`,
    name: review.author_name,
    role: 'Google Reviewer',
    avatar: review.profile_photo_url || '/images/aboutUs/maleProfile.png',
    content: review.text,
    rating: review.rating,
    tags: ['Google Review', 'Verified'],
    date: review.time
      ? new Date(review.time * 1000).toISOString()
      : new Date().toISOString(),
  };
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
  const allTestimonials = [
    ...defaultTestimonials,
    ...googleReviews.map((review, index) =>
      convertGoogleReviewToTestimonial(review, index)
    ),
  ];

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
      reviewBody: t.content,
      reviewRating: { '@type': 'Rating', ratingValue: t.rating },
      author: { '@type': 'Person', name: t.name },
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
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-xs font-medium text-gray-700 shadow-sm">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      style={{ color: siFacebook.hex }}
                    >
                      <path d={siFacebook.path} />
                    </svg>
                    Facebook
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
