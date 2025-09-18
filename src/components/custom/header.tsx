'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, Menu, Phone, X } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Equipment', href: '#services' },
    { name: 'About Us', href: '#about' },
    { name: 'Reviews', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      id="header"
      data-component="Header"
      className="fixed top-0 z-50 w-full bg-white/95 backdrop-blur-md"
    >
      <div className="px-4 md:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="relative h-12 w-12">
              <Image
                src="/logo/logo.jpg"
                alt="Alliance Medical Supply Logo"
                fill
                className="rounded-lg object-cover"
                sizes="48px"
              />
            </div>
            <div>
              <h1 className="text-lg font-bold text-gray-900">
                Alliance Medical
              </h1>
              <p className="text-sm text-teal-600">Supply & Rental</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-teal-600 font-medium transition-colors"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden md:flex items-center gap-4">
            <div className="text-right">
              <div className="flex items-center gap-1 text-sm text-gray-600">
                <MapPin className="h-3 w-3" />
                San Jose, CA
              </div>
              <Badge className="text-xs bg-green-100 text-green-700 hover:bg-green-100">
                JACHO Accredited
              </Badge>
            </div>
            <Button className="bg-teal-600 text-white hover:bg-teal-700 transition-all duration-200">
              <Phone className="mr-2 h-4 w-4" />
              (408) 942-9000
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <div className="py-4 space-y-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-2 text-gray-700 hover:text-teal-600 hover:bg-gray-50 rounded-lg font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="px-4 pt-4 border-t border-gray-200">
                <Button className="w-full bg-teal-600 text-white hover:bg-teal-700 mb-2 transition-all duration-200">
                  <Phone className="mr-2 h-4 w-4" />
                  Call (408) 942-9000
                </Button>
                <div className="text-center text-sm text-gray-600">
                  San Jose, CA • JACHO Accredited
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
