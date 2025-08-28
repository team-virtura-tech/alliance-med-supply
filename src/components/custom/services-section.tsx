'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Activity, ArrowRight, BedDouble, Car, UserCheck } from 'lucide-react';

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
  },
  {
    icon: BedDouble,
    title: 'Hospital Beds',
    description:
      'Safe, adjustable hospital beds delivered and set up in your home.',
    features: ['Electric & Manual', 'With Rails & Mattress', 'Free Setup'],
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
  },
  {
    icon: Car,
    title: 'Transport Chairs',
    description:
      'Convenient chairs designed for easy transport and comfortable travel.',
    features: ['Ultra Lightweight', 'Foldable Design', 'Easy Transport'],
  },
  {
    icon: Activity,
    title: 'Crutches & Mobility Aids',
    description:
      'Comfortable and adjustable crutches and mobility aids to support safe recovery.',
    features: ['Adjustable Crutches', 'Knee Walkers', 'Canes & Walking Sticks'],
  },
  {
    icon: ArrowRight,
    title: 'Bath Safety & More',
    description:
      'Complete range of bath safety equipment, lift chairs, and specialized medical supplies.',
    features: ['Bath Benches', 'Lift Chairs', 'Compression Garments'],
  },
];

export const ServicesSection = () => {
  return (
    <section
      id="services"
      data-component="ServicesSection"
      className="bg-white py-16 md:py-24"
    >
      <div className="mx-auto max-w-screen-xl px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <Badge className="mb-4 bg-orange-100 text-orange-700 hover:bg-orange-100">
            Our Equipment & Services
          </Badge>
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl lg:text-5xl">
            Quality Medical Equipment
            <span className="text-teal-600"> Rentals & Sales</span>
          </h2>
          <p className="text-lg text-gray-600 md:text-xl">
            We proudly offer an extensive selection of quality brand name home
            medical equipment & supplies from reputable manufacturers like
            Medline, Drive Medical, Invacare, and more.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group h-full border-2 border-gray-100 transition-all duration-300 hover:border-teal-200 hover:shadow-lg"
            >
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-teal-100 group-hover:bg-teal-200">
                  <service.icon className="h-6 w-6 text-teal-600" />
                </div>

                <h3 className="mb-3 text-xl font-semibold text-gray-900">
                  {service.title}
                </h3>

                <p className="mb-4 text-gray-600">{service.description}</p>

                <ul className="mb-6 space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-sm text-gray-600"
                    >
                      <div className="mr-2 h-1.5 w-1.5 rounded-full bg-teal-500" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  variant="outline"
                  className="w-full border-2 border-teal-300 bg-white text-teal-700 hover:bg-teal-50 hover:text-teal-800 hover:border-teal-400 transition-all duration-200"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 rounded-2xl bg-gradient-to-r from-teal-600 to-cyan-600 p-8 text-center text-white md:p-12">
          <h3 className="mb-4 text-2xl font-bold md:text-3xl">
            Need Equipment Today?
          </h3>
          <p className="mb-6 text-lg opacity-90 md:text-xl">
            Same-day delivery available for most equipment in the Bay Area
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button
              size="lg"
              className="bg-white text-teal-600 hover:bg-gray-50 transition-all duration-200"
            >
              Call (408) 942-9000
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-teal-600 transition-all duration-200"
            >
              Request Quote
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
