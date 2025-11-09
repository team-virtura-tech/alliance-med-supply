'use client';

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { ExternalLink, Mail, MapPin, Phone, Star } from 'lucide-react';

export const Footer = () => {
  return (
    <footer
      id="footer"
      data-component="Footer"
      className="bg-gray-900 text-white"
    >
      <div className="mx-auto max-w-screen-xl px-4 md:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="mb-4 text-xl font-bold">
              Alliance Medical Supply & Rental
            </h3>
            <p className="mb-6 text-gray-300 leading-relaxed">
              Serving Bay Area communities for over 15 years with quality
              durable medical equipment and supplies. We are a JACHO accredited
              provider committed to helping you maintain independence and
              comfort at home.
            </p>

            <div className="flex items-center gap-2 mb-4">
              <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
              <span className="font-semibold">JACHO Accredited Provider</span>
            </div>

            <div className="flex gap-4">
              <Button
                variant="outline"
                className="border-2 border-teal-400 bg-transparent text-teal-400 hover:bg-teal-400 hover:text-white transition-all duration-200"
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                View on Google
              </Button>
              <Button
                variant="outline"
                className="border-2 border-orange-400 bg-transparent text-orange-400 hover:bg-orange-400 hover:text-white transition-all duration-200"
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                View on Yelp
              </Button>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="mb-4 text-lg font-semibold">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-teal-400" />
                <div>
                  <p className="font-medium">(408) 942-9000</p>
                  <p className="text-sm text-gray-400">Main Phone</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-teal-400" />
                <div>
                  <p className="font-medium">hello@alliancemedsupply.com</p>
                  <p className="text-sm text-gray-400">Email</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-teal-400 mt-1" />
                <div>
                  <p className="font-medium">1630 Oakland Road, Suite A110</p>
                  <p className="font-medium">San Jose, CA 95131</p>
                  <p className="text-sm text-gray-400">Visit Our Store</p>
                </div>
              </div>
            </div>
          </div>

          {/* Store Hours & Services */}
          <div>
            <h4 className="mb-4 text-lg font-semibold">Store Hours</h4>
            <div className="space-y-2 mb-6">
              <div className="flex justify-between">
                <span className="text-gray-300">Mon - Fri:</span>
                <span className="font-medium">11:00 AM - 5:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Saturday:</span>
                <span className="font-medium">Appointments Only</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Sunday:</span>
                <span className="font-medium">Closed</span>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-green-400" />
                <span className="text-sm">Same-Day Delivery</span>
              </div>
              {/* <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-green-400" />
                <span className="text-sm">Insurance Accepted</span>
              </div> */}
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-green-400" />
                <span className="text-sm">Free Setup & Training</span>
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-gray-700" />

        {/* Bottom Footer */}
        <div className="py-8">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:flex lg:items-center lg:justify-between">
            <div className="text-sm text-gray-400">
              <p>
                &copy; 2024 Alliance Medical Supply and Rental. All rights
                reserved.
              </p>
              <div className="mt-1 flex gap-4">
                <a href="/privacy-policy" className="hover:text-teal-400">
                  Privacy Policy
                </a>
                <span>|</span>
                <a href="/terms-conditions" className="hover:text-teal-400">
                  Terms & Conditions
                </a>
                <span>|</span>
                <a href="/sitemap.xml" className="hover:text-teal-400">
                  Site Map
                </a>
              </div>
            </div>

            <div className="text-sm text-gray-400">
              <p>
                Serving San Jose, Santa Clara, Milpitas, Fremont, Palo Alto,
              </p>
              <p>
                Sunnyvale, Gilroy, Morgan Hill, and surrounding Bay Area
                communities
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
