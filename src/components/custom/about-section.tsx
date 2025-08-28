'use client';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Award, CheckCircle, Clock, Users } from 'lucide-react';
import Image from 'next/image';

const features = [
  {
    icon: CheckCircle,
    title: 'Quality Equipment',
    description:
      'Brand name medical equipment from trusted manufacturers like Medline, Drive Medical, and Invacare.',
  },
  {
    icon: Users,
    title: 'Personal Service',
    description:
      "Individual attention to each customer's needs with friendly, knowledgeable staff.",
  },
  {
    icon: Award,
    title: 'JACHO Accredited',
    description:
      'Certified provider meeting the highest standards for quality and safety in medical equipment.',
  },
  {
    icon: Clock,
    title: 'Same-Day Delivery',
    description:
      'Quick delivery and setup service throughout the Bay Area when you need it most.',
  },
];

export const AboutSection = () => {
  return (
    <section
      id="about"
      data-component="AboutSection"
      className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-24"
    >
      <div className="mx-auto max-w-screen-xl px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Content Side */}
          <div className="flex flex-col justify-center">
            <Badge className="mb-6 w-fit bg-teal-100 text-teal-700 hover:bg-teal-100">
              About Alliance Medical Supply
            </Badge>

            <h2 className="mb-6 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl lg:text-5xl">
              Serving Bay Area{' '}
              <span className="text-teal-600">Communities</span> Since 2009
            </h2>

            <div className="space-y-6 text-lg text-gray-600">
              <p>
                Welcome to Alliance Medical Supply & Rental. We are a trusted
                provider and supplier of durable medical equipment and supplies,
                proudly serving Bay Area communities including San Jose, Santa
                Clara, Milpitas, Fremont, Palo Alto, Sunnyvale, Gilroy, and
                Morgan Hill.
              </p>

              <p>
                We look forward to working with you to fulfill all your
                healthcare needs. We value your business and strive to provide
                individual attention to our customers&apos; needs. Our
                relationship with you is important, and we are committed to
                earning your business throughout the years ahead.
              </p>
            </div>

            {/* Payment Methods */}
            <div className="mt-8 rounded-lg bg-white p-6 border border-gray-200">
              <h3 className="mb-4 font-semibold text-gray-900">
                We Accept Multiple Payment Methods
              </h3>
              <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-teal-600" />
                  Cash
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-teal-600" />
                  Personal Check
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-teal-600" />
                  Visa & Mastercard
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-teal-600" />
                  Insurance Plans
                </div>
              </div>
            </div>
          </div>

          {/* Image Side */}
          <div className="relative">
            <div className="relative h-[500px] w-full rounded-2xl overflow-hidden">
              <Image
                src="/images/landing-hero.jpg"
                alt="Alliance Medical Supply storefront and staff"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Stats Overlay */}
            <div className="absolute -bottom-8 -left-8 grid grid-cols-2 gap-4">
              <Card className="bg-teal-600 text-white border-0">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold">15+</div>
                  <div className="text-sm opacity-90">Years</div>
                </CardContent>
              </Card>
              <Card className="bg-orange-600 text-white border-0">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold">★★★★★</div>
                  <div className="text-sm opacity-90">Reviews</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mt-24 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-teal-100">
                <feature.icon className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
