'use client';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Malay P.',
    rating: 5,
    text: 'We rented hospital bed and it was great experience overall. No issues with the bed. We needed it on second floor and delivery person safely set it up there. I also was late to call after monthly rental finished and they were fine. Very friendly staff.',
    service: 'Hospital Bed Rental',
  },
  {
    name: 'Garnette C.',
    rating: 5,
    text: 'Everyone wears a mask. We have rented a wheelchair from them numerous times. They are polite, easy to talk to and answers. We will always use them.',
    service: 'Wheelchair Rental',
  },
  {
    name: 'Judy R.',
    rating: 5,
    text: 'I was really happy with all our interactions, in person with the delivery folks and on the phone with Mike. Great service, kind, thoughtful and very fair. They are good people all the way around. Highly recommend using them for your medical needs.',
    service: 'Multiple Services',
  },
  {
    name: 'Rose V.',
    rating: 5,
    text: 'My mother was discharged from a nursing home during Covid19 & I needed a hospital bed for her ASAP (no insurance coverage) after calling around a few places which I had to leave messages, or they had to call me back in regards to delivering in "my area" while browsing on Yelp I found Alliance Medical Supply in San Jose (We live in Watsonville) spoke with Mike Patel he was not only very helpful but he got my mom the Bed she really needed!',
    service: 'Emergency Hospital Bed',
  },
];

export const TestimonialsSection = () => {
  return (
    <section
      id="testimonials"
      data-component="TestimonialsSection"
      className="relative bg-gradient-to-b from-gray-50/50 via-white to-gray-50/50 py-20 md:py-32 overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-40 left-10 h-32 w-32 rounded-full bg-teal-100/20 blur-3xl" />
      <div className="absolute bottom-40 right-10 h-40 w-40 rounded-full bg-cyan-100/30 blur-2xl" />

      <div className="relative mx-auto max-w-screen-xl px-4 md:px-6 lg:px-8">
        {/* Enhanced Header - Aceternity style */}
        <div className="mx-auto mb-20 max-w-4xl text-center space-y-6">
          <Badge className="bg-teal-50 text-teal-700 border border-teal-200 hover:bg-teal-50 font-medium px-4 py-2">
            Customer Reviews
          </Badge>

          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl">
            Trusted by Bay Area{' '}
            <span className="block bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
              Families
            </span>
          </h2>

          <p className="text-lg leading-relaxed text-gray-600 md:text-xl max-w-3xl mx-auto">
            See what our customers say about our service, equipment quality, and
            dedication to helping when you need it most.
          </p>

          {/* Stats section */}
          <div className="flex flex-wrap items-center justify-center gap-8 pt-8 opacity-70">
            <div className="text-center">
              <div className="text-2xl font-bold text-teal-600">5.0★</div>
              <div className="text-sm text-gray-600">Google Rating</div>
            </div>
            <div className="w-1 h-1 bg-gray-400 rounded-full" />
            <div className="text-center">
              <div className="text-2xl font-bold text-teal-600">500+</div>
              <div className="text-sm text-gray-600">Happy Customers</div>
            </div>
            <div className="w-1 h-1 bg-gray-400 rounded-full" />
            <div className="text-center">
              <div className="text-2xl font-bold text-teal-600">15+</div>
              <div className="text-sm text-gray-600">Years Trusted</div>
            </div>
          </div>
        </div>

        {/* Enhanced Testimonials Grid - Aceternity style */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="group relative h-full bg-white/80 backdrop-blur-sm border border-gray-200/50 transition-all duration-500 hover:bg-white hover:shadow-2xl hover:shadow-gray-200/20 hover:-translate-y-1"
            >
              <CardContent className="p-8">
                {/* Enhanced Quote Icon */}
                <div className="mb-6 relative">
                  <div className="absolute -top-2 -left-2 h-12 w-12 bg-gradient-to-r from-teal-100 to-cyan-100 rounded-full opacity-20" />
                  <Quote className="relative h-10 w-10 text-teal-500" />
                </div>

                {/* Enhanced Rating */}
                <div className="mb-6 flex items-center gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-amber-400 text-amber-400"
                    />
                  ))}
                  <span className="ml-2 text-sm font-medium text-gray-600">
                    {testimonial.rating}.0
                  </span>
                </div>

                {/* Enhanced Testimonial Text */}
                <p className="mb-8 text-gray-700 leading-relaxed text-base italic">
                  &quot;{testimonial.text}&quot;
                </p>

                {/* Enhanced Customer Info */}
                <div className="border-t border-gray-100 pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-teal-600 font-medium">
                        {testimonial.service}
                      </p>
                    </div>
                    <div className="rounded-full bg-gradient-to-r from-teal-100 to-cyan-100 p-2">
                      <Badge
                        variant="outline"
                        className="text-teal-700 border-teal-200 bg-white/80 font-medium"
                      >
                        Verified
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Enhanced Review Stats - Aceternity style */}
        <div className="mt-20 relative">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="text-center group">
              <div className="mb-4 mx-auto w-20 h-20 bg-gradient-to-r from-amber-400 to-orange-400 rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                <div className="text-2xl font-bold text-white">★★★</div>
              </div>
              <div className="mb-2 text-4xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                5.0
              </div>
              <p className="text-lg font-semibold text-gray-900 mb-1">
                Average Rating
              </p>
              <p className="text-gray-600">Google & Yelp Reviews</p>
            </div>

            <div className="text-center group">
              <div className="mb-4 mx-auto w-20 h-20 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                <div className="text-2xl font-bold text-white">500+</div>
              </div>
              <div className="mb-2 text-4xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                500+
              </div>
              <p className="text-lg font-semibold text-gray-900 mb-1">
                Happy Customers
              </p>
              <p className="text-gray-600">Served This Year</p>
            </div>

            <div className="text-center group">
              <div className="mb-4 mx-auto w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                <div className="text-2xl font-bold text-white">15+</div>
              </div>
              <div className="mb-2 text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                15+
              </div>
              <p className="text-lg font-semibold text-gray-900 mb-1">
                Years Experience
              </p>
              <p className="text-gray-600">In Medical Supply</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
