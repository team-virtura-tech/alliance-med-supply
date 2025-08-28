'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Activity,
  ArrowRight,
  BedDouble,
  Car,
  UserCheck,
  Zap,
} from 'lucide-react';

const services = [
  {
    icon: UserCheck,
    title: 'Wheelchairs',
    description:
      'Durable and easy-to-use wheelchairs for short or long-term rental.',
    features: [
      'Standard & Transport',
      'Lightweight Options',
      'Insurance Accepted',
    ],
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: BedDouble,
    title: 'Hospital Beds',
    description:
      'Safe, adjustable hospital beds delivered and set up in your home.',
    features: ['Electric & Manual', 'With Rails & Mattress', 'Free Setup'],
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: UserCheck,
    title: 'Walkers & Rollators',
    description:
      'Lightweight walkers and rollators to help you stay mobile and independent.',
    features: [
      'Standard & Rolling',
      'Adjustable Height',
      'With Seats Available',
    ],
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    icon: Car,
    title: 'Transport Chairs',
    description:
      'Convenient chairs designed for easy transport and comfortable travel.',
    features: ['Ultra Lightweight', 'Foldable Design', 'Easy Transport'],
    gradient: 'from-orange-500 to-red-500',
  },
  {
    icon: Activity,
    title: 'Crutches & Mobility Aids',
    description:
      'Comfortable and adjustable crutches and mobility aids to support safe recovery.',
    features: ['Adjustable Crutches', 'Knee Walkers', 'Canes & Walking Sticks'],
    gradient: 'from-teal-500 to-cyan-500',
  },
  {
    icon: Zap,
    title: 'Specialized Equipment',
    description:
      'Advanced therapeutic and recovery equipment including laser therapy devices.',
    features: ['Laser TouchOne', 'TENS Units', 'Recovery Equipment'],
    gradient: 'from-indigo-500 to-purple-500',
  },
  {
    icon: ArrowRight,
    title: 'Bath Safety & More',
    description:
      'Complete range of bath safety equipment, lift chairs, and specialized medical supplies.',
    features: ['Bath Benches', 'Lift Chairs', 'Compression Garments'],
    gradient: 'from-rose-500 to-pink-500',
  },
];

export const ServicesSection = () => {
  return (
    <section
      id="services"
      data-component="ServicesSection"
      className="relative bg-gradient-to-b from-white via-gray-50/50 to-white py-20 md:py-32"
    >
      {/* Background decorative elements */}
      <div className="absolute top-20 left-20 h-40 w-40 rounded-full bg-teal-100/20 blur-3xl" />
      <div className="absolute bottom-20 right-20 h-32 w-32 rounded-full bg-orange-100/30 blur-2xl" />

      <div className="relative mx-auto max-w-screen-xl px-4 md:px-6 lg:px-8">
        {/* Enhanced Header - Aceternity style */}
        <div className="mx-auto mb-20 max-w-4xl text-center space-y-6">
          <Badge className="bg-teal-50 text-teal-700 border border-teal-200 hover:bg-teal-50 font-medium px-4 py-2">
            Our Equipment & Services
          </Badge>

          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl">
            Quality Medical Equipment
            <span className="block bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
              Rentals & Sales
            </span>
          </h2>

          <p className="text-lg leading-relaxed text-gray-600 md:text-xl max-w-3xl mx-auto">
            We proudly offer an extensive selection of quality brand name home
            medical equipment & supplies from reputable manufacturers like
            Medline, Drive Medical, Invacare, and more.
          </p>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center justify-center gap-8 pt-8 opacity-70">
            <div className="text-sm font-medium text-gray-600">
              15+ Years Experience
            </div>
            <div className="w-1 h-1 bg-gray-400 rounded-full" />
            <div className="text-sm font-medium text-gray-600">
              JACHO Accredited
            </div>
            <div className="w-1 h-1 bg-gray-400 rounded-full" />
            <div className="text-sm font-medium text-gray-600">
              Same-Day Delivery
            </div>
          </div>
        </div>

        {/* Enhanced Services Grid - Aceternity style */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group relative h-full bg-white/80 backdrop-blur-sm border border-gray-200/50 transition-all duration-500 hover:bg-white hover:shadow-2xl hover:shadow-gray-200/20 hover:-translate-y-1"
            >
              <CardContent className="p-8 h-full flex flex-col">
                {/* Enhanced icon with gradient */}
                <div
                  className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r ${service.gradient || 'from-teal-500 to-cyan-500'} shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <service.icon className="h-7 w-7 text-white" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-800">
                  {service.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
                  {service.description}
                </p>

                {/* Enhanced features list */}
                <div className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center text-sm text-gray-600 group-hover:text-gray-700"
                    >
                      <div
                        className={`mr-3 h-2 w-2 rounded-full bg-gradient-to-r ${service.gradient || 'from-teal-500 to-cyan-500'} shadow-sm`}
                      />
                      <span className="font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Enhanced CTA button */}
                <Button
                  variant="outline"
                  className="w-full border-2 border-gray-200 bg-white text-gray-700 hover:bg-teal-50 hover:border-teal-300 hover:text-teal-700 transition-all duration-300 group-hover:scale-[1.02] font-semibold"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Enhanced CTA Section - Aceternity style */}
        <div className="mt-20 relative">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-teal-500 via-cyan-500 to-teal-600 rounded-3xl transform rotate-1" />
          <div className="relative bg-gradient-to-r from-teal-600 to-cyan-600 rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold md:text-3xl lg:text-4xl">
                Need Equipment Today?
              </h3>
              <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
                Same-day delivery available for most equipment in the Bay Area.
                <span className="block mt-2 font-semibold">
                  Call now and get setup within hours.
                </span>
              </p>

              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center pt-4">
                <Button
                  size="lg"
                  className="bg-white text-teal-600 hover:bg-gray-50 transition-all duration-300 hover:scale-[1.02] shadow-lg font-semibold px-8 py-3 text-base"
                >
                  Call (408) 942-9000
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-teal-600 transition-all duration-300 hover:scale-[1.02] font-semibold px-8 py-3 text-base"
                >
                  Request Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
