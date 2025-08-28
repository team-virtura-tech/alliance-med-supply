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
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Users,
    title: 'Personal Service',
    description:
      "Individual attention to each customer's needs with friendly, knowledgeable staff.",
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: Award,
    title: 'JACHO Accredited',
    description:
      'Certified provider meeting the highest standards for quality and safety in medical equipment.',
    gradient: 'from-amber-500 to-orange-500',
  },
  {
    icon: Clock,
    title: 'Same-Day Delivery',
    description:
      'Quick delivery and setup service throughout the Bay Area when you need it most.',
    gradient: 'from-green-500 to-emerald-500',
  },
];

export const AboutSection = () => {
  return (
    <section
      id="about"
      data-component="AboutSection"
      className="relative bg-gradient-to-b from-gray-50/30 via-white to-gray-50/30 py-20 md:py-32 overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-20 right-20 h-48 w-48 rounded-full bg-gradient-to-r from-teal-100/30 to-cyan-100/30 blur-3xl" />
      <div className="absolute bottom-20 left-20 h-32 w-32 rounded-full bg-gradient-to-r from-orange-100/40 to-pink-100/40 blur-2xl" />

      <div className="relative mx-auto max-w-screen-xl px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-20 lg:grid-cols-2 lg:gap-24 items-center">
          {/* Enhanced Content Side */}
          <div className="flex flex-col justify-center space-y-8">
            <Badge className="w-fit bg-teal-50 text-teal-700 border border-teal-200 hover:bg-teal-50 font-medium px-4 py-2">
              About Alliance Medical Supply
            </Badge>

            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl md:text-4xl lg:text-5xl">
              Serving Bay Area{' '}
              <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                Communities
              </span>{' '}
              Since 2009
            </h2>

            <div className="space-y-6 text-lg leading-relaxed text-gray-600 md:text-xl">
              <p>
                Welcome to Alliance Medical Supply & Rental. We are a trusted
                provider and supplier of durable medical equipment and supplies,
                proudly serving Bay Area communities including{' '}
                <span className="font-semibold text-gray-700">
                  San Jose, Santa Clara, Milpitas, Fremont, Palo Alto,
                  Sunnyvale, Gilroy, and Morgan Hill.
                </span>
              </p>

              <p>
                We look forward to working with you to fulfill all your
                healthcare needs. We value your business and strive to provide{' '}
                <span className="font-semibold text-gray-700">
                  individual attention to our customers&apos; needs.
                </span>{' '}
                Our relationship with you is important, and we are committed to
                earning your business throughout the years ahead.
              </p>
            </div>

            {/* Enhanced Payment Methods */}
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-teal-600 to-cyan-600 rounded-2xl blur opacity-20" />
              <div className="relative bg-white/90 backdrop-blur-sm p-8 rounded-2xl border border-gray-200/50 shadow-lg">
                <h3 className="mb-6 text-xl font-bold text-gray-900">
                  We Accept Multiple Payment Methods
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 group">
                    <div className="rounded-lg bg-teal-50 p-2 group-hover:bg-teal-100 transition-colors">
                      <CheckCircle className="h-5 w-5 text-teal-600" />
                    </div>
                    <span className="font-medium text-gray-700">Cash</span>
                  </div>
                  <div className="flex items-center gap-3 group">
                    <div className="rounded-lg bg-teal-50 p-2 group-hover:bg-teal-100 transition-colors">
                      <CheckCircle className="h-5 w-5 text-teal-600" />
                    </div>
                    <span className="font-medium text-gray-700">
                      Personal Check
                    </span>
                  </div>
                  <div className="flex items-center gap-3 group">
                    <div className="rounded-lg bg-teal-50 p-2 group-hover:bg-teal-100 transition-colors">
                      <CheckCircle className="h-5 w-5 text-teal-600" />
                    </div>
                    <span className="font-medium text-gray-700">
                      Visa & Mastercard
                    </span>
                  </div>
                  <div className="flex items-center gap-3 group">
                    <div className="rounded-lg bg-teal-50 p-2 group-hover:bg-teal-100 transition-colors">
                      <CheckCircle className="h-5 w-5 text-teal-600" />
                    </div>
                    <span className="font-medium text-gray-700">
                      Insurance Plans
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Image Side */}
          <div className="relative order-first lg:order-last">
            <div className="relative h-[500px] w-full rounded-3xl overflow-hidden group">
              <Image
                src="/images/landing-hero.jpg"
                alt="Alliance Medical Supply storefront and staff"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 50vw"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* Enhanced Stats Overlay */}
            <div className="absolute -bottom-8 -left-8 grid grid-cols-2 gap-4">
              <Card className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white border-0 shadow-xl">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold">15+</div>
                  <div className="text-sm opacity-90 font-medium">
                    Years Serving
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-r from-amber-500 to-orange-500 text-white border-0 shadow-xl">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold">★★★★★</div>
                  <div className="text-sm opacity-90 font-medium">
                    5.0 Reviews
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Enhanced Features Grid - Aceternity style */}
        <div className="mt-32 space-y-12">
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-bold text-gray-900 md:text-3xl">
              Why Choose{' '}
              <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                Alliance Medical
              </span>
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We go above and beyond to ensure you get the right equipment with
              exceptional service
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="mx-auto mb-6 relative">
                  <div
                    className={`flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-r ${feature.gradient} shadow-lg group-hover:scale-110 transition-transform duration-300 mx-auto`}
                  >
                    <feature.icon className="h-10 w-10 text-white" />
                  </div>
                </div>

                <h3 className="mb-4 text-xl font-bold text-gray-900 group-hover:text-gray-800 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
