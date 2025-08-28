'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Clock, Mail, MapPin, Phone, Star } from 'lucide-react';

export const ContactSection = () => {
  return (
    <section
      id="contact"
      data-component="ContactSection"
      className="bg-white py-16 md:py-24"
    >
      <div className="mx-auto max-w-screen-xl px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <Badge className="mb-4 bg-orange-100 text-orange-700 hover:bg-orange-100">
            Get In Touch
          </Badge>
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl lg:text-5xl">
            Contact Alliance Medical{' '}
            <span className="text-teal-600">Supply</span>
          </h2>
          <p className="text-lg text-gray-600 md:text-xl">
            Ready to rent or purchase medical equipment? We&apos;re here to help
            with expert advice and same-day delivery throughout the Bay Area.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="mb-6 text-2xl font-semibold text-gray-900">
                Reach Out Today
              </h3>

              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-teal-100">
                    <Phone className="h-6 w-6 text-teal-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Call Us</h4>
                    <p className="text-gray-600">
                      <a href="tel:4089429000" className="hover:text-teal-600">
                        (408) 942-9000
                      </a>
                    </p>
                    <p className="text-sm text-gray-500">
                      Speak with our friendly staff
                    </p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100">
                    <MapPin className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Visit Our Store
                    </h4>
                    <p className="text-gray-600">
                      1630 Oakland Road, Suite A110
                      <br />
                      San Jose, CA 95131
                    </p>
                    <p className="text-sm text-gray-500">
                      Easy parking available
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-teal-100">
                    <Clock className="h-6 w-6 text-teal-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Store Hours</h4>
                    <div className="text-gray-600">
                      <p>Monday - Friday: 10:00 AM - 6:00 PM</p>
                      <p>Saturday: 10:00 AM - 2:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                    <p className="text-sm text-gray-500">
                      Saturday by appointment only
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100">
                    <Mail className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Email Us</h4>
                    <p className="text-gray-600">info@alliancemedsupply.com</p>
                    <p className="text-sm text-gray-500">
                      We&apos;ll respond within 24 hours
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Accreditation */}
            <Card className="border-2 border-teal-100 bg-teal-50">
              <CardContent className="p-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-600">
                    <Star className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-teal-900">
                      JACHO Accredited Provider
                    </h4>
                    <p className="text-sm text-teal-700">
                      Certified for quality and safety standards
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Contact Form / CTA */}
          <div className="space-y-8">
            <Card className="border-2 border-gray-100">
              <CardContent className="p-8">
                <h3 className="mb-6 text-xl font-semibold text-gray-900">
                  Need Equipment Right Away?
                </h3>

                <div className="space-y-4">
                  <Button
                    size="lg"
                    className="w-full bg-teal-600 text-white hover:bg-teal-700 transition-all duration-200"
                  >
                    <Phone className="mr-2 h-4 w-4" />
                    Call (408) 942-9000
                  </Button>

                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <Separator className="w-full" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                      <span className="bg-white px-2 text-gray-500">Or</span>
                    </div>
                  </div>

                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full border-2 border-orange-300 bg-white text-orange-700 hover:bg-orange-50 hover:text-orange-800 hover:border-orange-400 transition-all duration-200"
                  >
                    Request Equipment Quote
                  </Button>
                </div>

                <div className="mt-6 rounded-lg bg-gray-50 p-4">
                  <h4 className="mb-2 font-medium text-gray-900">
                    Same-Day Delivery Available
                  </h4>
                  <p className="text-sm text-gray-600">
                    Most equipment can be delivered and set up the same day for
                    customers in San Jose, Santa Clara, Milpitas, Fremont, Palo
                    Alto, Sunnyvale, Gilroy, and Morgan Hill.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Service Areas */}
            <Card>
              <CardContent className="p-6">
                <h3 className="mb-4 text-lg font-semibold text-gray-900">
                  We Serve These Bay Area Communities
                </h3>
                <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                  <p>• San Jose</p>
                  <p>• Santa Clara</p>
                  <p>• Milpitas</p>
                  <p>• Fremont</p>
                  <p>• Palo Alto</p>
                  <p>• Sunnyvale</p>
                  <p>• Gilroy</p>
                  <p>• Morgan Hill</p>
                  <p>• Watsonville</p>
                  <p>• Campbell</p>
                </div>
                <p className="mt-3 text-xs text-gray-500">
                  Don&apos;t see your area? Call us - we may still be able to
                  help!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
