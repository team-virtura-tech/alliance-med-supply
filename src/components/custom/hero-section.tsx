'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Clock, MapPin, Phone } from 'lucide-react';
import Image from 'next/image';

export const HeroSection = () => {
  return (
    <section
      id="hero"
      data-component="HeroSection"
      className="relative min-h-screen bg-gradient-to-br from-teal-50 to-cyan-50"
    >
      <div className="absolute inset-0 bg-white/90" />

      <div className="relative mx-auto max-w-screen-xl px-4 md:px-6 lg:px-8">
        <div className="grid min-h-screen grid-cols-1 items-center gap-8 pt-20 pb-12 lg:grid-cols-2 lg:gap-16">
          {/* Content Side */}
          <div className="flex flex-col justify-center space-y-6">
            <Badge className="w-fit bg-teal-100 text-teal-700 hover:bg-teal-100">
              ✅ JACHO Accredited Provider
            </Badge>

            <div className="space-y-4">
              <h1 className="text-4xl font-bold leading-tight tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
                Professional{' '}
                <span className="text-teal-600">Medical Equipment</span> Rentals
                & Sales
              </h1>

              <p className="text-lg text-gray-600 md:text-xl">
                Serving Bay Area communities with quality durable medical
                equipment and supplies. From wheelchairs to hospital beds -
                delivered and ready to go.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Button
                size="lg"
                className="bg-teal-600 text-white hover:bg-teal-700 transition-all duration-200"
              >
                <Phone className="mr-2 h-4 w-4" />
                Call (408) 942-9000
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-orange-300 bg-white text-orange-700 hover:bg-orange-50 hover:text-orange-800 hover:border-orange-400 transition-all duration-200"
              >
                Browse Equipment
              </Button>
            </div>

            {/* Quick Info Cards */}
            <div className="grid grid-cols-1 gap-3 pt-4 sm:grid-cols-3">
              <div className="flex items-center gap-2 rounded-lg bg-white p-3 shadow-sm border">
                <MapPin className="h-4 w-4 text-teal-600" />
                <div>
                  <p className="text-xs font-medium text-gray-900">
                    San Jose, CA
                  </p>
                  <p className="text-xs text-gray-600">Bay Area Service</p>
                </div>
              </div>

              <div className="flex items-center gap-2 rounded-lg bg-white p-3 shadow-sm border">
                <Clock className="h-4 w-4 text-orange-600" />
                <div>
                  <p className="text-xs font-medium text-gray-900">
                    Mon-Fri 10-6
                  </p>
                  <p className="text-xs text-gray-600">Sat 10-2</p>
                </div>
              </div>

              <div className="flex items-center gap-2 rounded-lg bg-white p-3 shadow-sm border">
                <div className="h-4 w-4 rounded-full bg-green-500" />
                <div>
                  <p className="text-xs font-medium text-gray-900">Same Day</p>
                  <p className="text-xs text-gray-600">Delivery Available</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image Side */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative h-[500px] w-full max-w-lg md:h-[600px]">
              <Image
                src="/images/hero-landing-image-2.jpg"
                alt="Medical equipment showcase"
                fill
                className="rounded-2xl object-cover shadow-2xl"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 40vw"
              />

              {/* Floating Stats Card */}
              <Card className="absolute -bottom-4 -left-4 bg-white shadow-lg">
                <CardContent className="p-4">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-teal-600">15+</p>
                    <p className="text-sm text-gray-600">Years Serving</p>
                    <p className="text-sm text-gray-600">Bay Area</p>
                  </div>
                </CardContent>
              </Card>

              {/* Floating Badge */}
              <div className="absolute -top-4 -right-4 rounded-full bg-orange-100 p-4">
                <div className="text-center">
                  <p className="text-lg font-bold text-orange-700">★★★★★</p>
                  <p className="text-xs text-orange-600">Trusted Reviews</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
