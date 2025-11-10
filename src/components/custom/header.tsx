'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, Menu, Phone, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'About Us', href: '/about-us' },
    { name: 'Reviews', href: '/reviews' },
    { name: 'Contact Us', href: '/contact-us' },
  ];

  return (
    <header
      id="Header"
      data-component="Header"
      className="fixed top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      <div className="px-4 md:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex cursor-pointer items-center transition-opacity"
          >
            <div className="relative h-16 w-16">
              <Image
                src="/logo/Allience-Medical-logo-large.svg"
                alt="Alliance Medical Supply Logo"
                fill
                className="object-contain"
                sizes="48px"
                priority
              />
            </div>
            <div className="text-center">
              <h1 className="text-xl font-semibold text-foreground md:text-2xl">
                Alliance Medical
              </h1>
              <p className="text-xs text-primary uppercase tracking-widest">
                Supply and Rental
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-2 xl:flex">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`cursor-pointer rounded-md px-5 py-2.5 text-base font-semibold transition-all ${
                    isActive
                      ? 'bg-muted text-primary'
                      : 'text-foreground hover:bg-muted hover:text-primary'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden items-center gap-4 xl:flex">
            <div className="text-right">
              <a
                href="https://www.google.com/maps/search/?api=1&query=1630+Oakland+Road,+Suite+A110,+San+Jose+CA+95131"
                target="_blank"
                rel="noopener noreferrer"
                className="flex cursor-pointer items-center gap-1.5 typography-small text-slate-600 transition-colors hover:text-slate-800 hover:underline hover:decoration-slate-700"
              >
                <MapPin className="h-3.5 w-3.5" />
                San Jose, CA
              </a>
              <Badge
                variant="secondary"
                className="mt-1 text-xs bg-teal-100 text-teal-700 hover:bg-teal-100"
              >
                JACHO Accredited
              </Badge>
            </div>
            <Button size="default">
              <Phone className="h-4 w-4" />
              (408) 942-9000
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="xl:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="border-t bg-background xl:hidden">
            <div className="space-y-1 py-4">
              {navigation.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`typography-body block cursor-pointer rounded-md px-4 py-2.5 font-medium transition-colors ${
                      isActive
                        ? 'bg-muted text-primary'
                        : 'text-foreground/80 hover:bg-muted hover:text-primary'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                );
              })}
              <div className="border-t px-4 pt-4">
                <Button size="lg" className="mb-3 w-full">
                  <Phone className="h-4 w-4" />
                  Call (408) 942-9000
                </Button>
                <div className="typography-small text-center text-muted-foreground">
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
