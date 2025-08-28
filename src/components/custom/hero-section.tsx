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
      className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-teal-50"
    >
      {/* Subtle gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/90 to-white/95" />

      {/* Decorative elements inspired by Aceternity */}
      <div className="absolute top-20 right-10 h-32 w-32 rounded-full bg-teal-100/30 blur-2xl" />
      <div className="absolute bottom-20 left-10 h-40 w-40 rounded-full bg-cyan-100/20 blur-3xl" />

      <div className="relative mx-auto max-w-screen-xl px-4 md:px-6 lg:px-8">
        <div className="grid min-h-screen grid-cols-1 items-center gap-8 pt-20 pb-12 lg:grid-cols-2 lg:gap-16">
          {/* Content Side - Enhanced typography hierarchy */}
          <div className="flex flex-col justify-center space-y-8">
            <Badge className="w-fit bg-teal-50 text-teal-700 border border-teal-200 hover:bg-teal-50 font-medium">
              ✅ JACHO Accredited Provider
            </Badge>

            <div className="space-y-6">
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl">
                Quality{' '}
                <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                  Medical Equipment
                </span>{' '}
                for Bay Area Healthcare
              </h1>

              <p className="text-lg leading-relaxed text-gray-600 md:text-xl max-w-2xl">
                Professional-grade durable medical equipment rentals and sales.
                <span className="font-semibold text-gray-700">
                  {' '}
                  Delivered, setup, and ready to use.
                </span>
              </p>
            </div>

            {/* Enhanced CTA section */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button
                size="lg"
                className="bg-teal-600 text-white hover:bg-teal-700 transition-all duration-200 shadow-lg hover:shadow-xl text-base font-semibold px-8 py-3"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call (408) 942-9000
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-gray-300 bg-white text-gray-700 hover:border-gray-400 hover:bg-gray-50 hover:text-gray-800 transition-all duration-200 shadow-md text-base font-medium px-8 py-3"
              >
                Browse Equipment
              </Button>
            </div>

            {/* Trust indicators - Aceternity style */}
            <div className="flex flex-col gap-4 pt-6 border-t border-gray-100">
              <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                Trusted by Bay Area Healthcare Providers
              </p>

              <div className="flex flex-wrap items-center gap-6 opacity-70">
                <div className="text-sm text-gray-600">
                  15+ Years Experience
                </div>
                <div className="w-1 h-1 bg-gray-400 rounded-full" />
                <div className="text-sm text-gray-600">JACHO Accredited</div>
                <div className="w-1 h-1 bg-gray-400 rounded-full" />
                <div className="text-sm text-gray-600">Same-Day Delivery</div>
              </div>
            </div>

            {/* Quick Info Cards - Enhanced */}
            <div className="grid grid-cols-1 gap-4 pt-6 sm:grid-cols-3">
              <div className="flex items-center gap-3 rounded-xl bg-white/80 backdrop-blur-sm p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="rounded-lg bg-teal-50 p-2">
                  <MapPin className="h-5 w-5 text-teal-600" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    Bay Area Coverage
                  </p>
                  <p className="text-xs text-gray-600">
                    San Jose & Surrounding
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-xl bg-white/80 backdrop-blur-sm p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="rounded-lg bg-orange-50 p-2">
                  <Clock className="h-5 w-5 text-orange-600" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    Mon-Fri 10-6
                  </p>
                  <p className="text-xs text-gray-600">Saturday 10-2</p>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-xl bg-white/80 backdrop-blur-sm p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="rounded-lg bg-green-50 p-2">
                  <div className="h-5 w-5 rounded-full bg-green-500 animate-pulse" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    Same Day Delivery
                  </p>
                  <p className="text-xs text-gray-600">When Available</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image Side - Enhanced with Aceternity-style layout */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative h-[500px] w-full max-w-lg md:h-[600px]">
              {/* Main hero image */}
              <Image
                src="/images/hero-landing-image-2.jpg"
                alt="Medical equipment showcase"
                fill
                className="rounded-2xl object-cover shadow-2xl"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 40vw"
              />

              {/* Gradient overlay for better text contrast */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/20 to-transparent" />

              {/* Enhanced floating stats card */}
              <Card className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-md shadow-xl border-0">
                <CardContent className="p-6">
                  <div className="text-center space-y-1">
                    <p className="text-3xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                      15+
                    </p>
                    <p className="text-sm font-semibold text-gray-900">Years</p>
                    <p className="text-xs text-gray-600">Serving Bay Area</p>
                  </div>
                </CardContent>
              </Card>

              {/* Enhanced floating testimonial badge */}
              <div className="absolute -top-6 -right-6 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-100 p-4 shadow-lg border border-orange-200/50">
                <div className="text-center space-y-1">
                  <div className="flex justify-center text-amber-400">
                    {'★★★★★'.split('').map((star, i) => (
                      <span key={i} className="text-sm">
                        {star}
                      </span>
                    ))}
                  </div>
                  <p className="text-xs font-semibold text-orange-800">
                    5.0 Rating
                  </p>
                  <p className="text-xs text-orange-600">Google Reviews</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
