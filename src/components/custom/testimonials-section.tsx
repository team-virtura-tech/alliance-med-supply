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
      className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-24"
    >
      <div className="mx-auto max-w-screen-xl px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <Badge className="mb-4 bg-teal-100 text-teal-700 hover:bg-teal-100">
            Customer Reviews
          </Badge>
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl lg:text-5xl">
            Trusted by Bay Area <span className="text-teal-600">Families</span>
          </h2>
          <p className="text-lg text-gray-600 md:text-xl">
            See what our customers say about our service, equipment quality, and
            dedication to helping when you need it most.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="h-full border-2 border-gray-100">
              <CardContent className="p-6">
                {/* Quote Icon */}
                <div className="mb-4">
                  <Quote className="h-8 w-8 text-teal-200" />
                </div>

                {/* Rating */}
                <div className="mb-4 flex items-center">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-orange-400 text-orange-400"
                    />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="mb-6 text-gray-700 leading-relaxed">
                  &quot;{testimonial.text}&quot;
                </p>

                {/* Customer Info */}
                <div className="border-t pt-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {testimonial.service}
                      </p>
                    </div>
                    <Badge variant="outline" className="text-teal-600">
                      Verified Customer
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Review Stats */}
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="text-center">
            <div className="mb-2 text-4xl font-bold text-teal-600">★★★★★</div>
            <p className="text-lg font-semibold text-gray-900">
              5.0 Average Rating
            </p>
            <p className="text-gray-600">Google & Yelp Reviews</p>
          </div>

          <div className="text-center">
            <div className="mb-2 text-4xl font-bold text-orange-600">100+</div>
            <p className="text-lg font-semibold text-gray-900">
              Happy Customers
            </p>
            <p className="text-gray-600">Served This Year</p>
          </div>

          <div className="text-center">
            <div className="mb-2 text-4xl font-bold text-teal-600">15+</div>
            <p className="text-lg font-semibold text-gray-900">
              Years Experience
            </p>
            <p className="text-gray-600">In Medical Supply</p>
          </div>
        </div>
      </div>
    </section>
  );
};
