'use client';

export type HeaderProps = {
  className?: string;
  id?: string;
};

import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Rental Equipment', href: '/rental-equipment' },
  { label: 'Parts & Repairs', href: '/parts-repairs' },
  { label: 'About Us', href: '/about' },
  { label: 'Contact Us', href: '/contact' },
];

export const Header = ({ className, id }: HeaderProps) => {
  const [open, setOpen] = useState(false);
  const componentName = 'Header';
  const rootId = id ?? componentName;

  return (
    <header
      id={rootId}
      data-component={componentName}
      className={cn('w-full bg-background', className)}
    >
      <nav
        className="mx-auto flex max-w-screen-xl items-center justify-between px-4 py-3 md:px-8"
        aria-label="Main navigation"
      >
        {/* Logo/Brand */}
        <Link
          href="/"
          className="text-lg font-normal"
          aria-label="Alliance Medical Supply and Rental"
        >
          Alliance Medical Supply and Rental
        </Link>

        {/* Mobile menu button */}
        <button
          className="ml-auto flex items-center md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="main-nav"
          onClick={() => setOpen((v) => !v)}
          type="button"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Desktop nav */}
        <ul className="hidden md:flex md:items-center md:gap-8" id="main-nav">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="block rounded px-2 py-1 text-base font-normal text-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile nav drawer */}
      {open && (
        <div className="md:hidden">
          <ul className="space-y-2 px-4 pb-4 pt-2" id="main-nav-mobile">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block rounded px-2 py-2 text-base font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};
