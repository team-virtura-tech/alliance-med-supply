import { Footer } from '@/components/custom/footer';
import { Header } from '@/components/custom/header';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title:
    'Alliance Medical Supply and Rental | Bay Area Medical Equipment Rentals',
  description:
    'Professional medical equipment rentals & sales in San Jose, CA. Wheelchairs, hospital beds, walkers & more. JACHO accredited. Same-day delivery. Call (408) 942-9000.',
  keywords:
    'medical equipment rental, wheelchair rental, hospital bed rental, San Jose, Bay Area, medical supplies, JACHO accredited',
  authors: [{ name: 'Alliance Medical Supply and Rental' }],
  robots: 'index, follow',
  openGraph: {
    title: 'Alliance Medical Supply and Rental | Bay Area Medical Equipment',
    description:
      'Professional medical equipment rentals & sales in San Jose, CA. Same-day delivery available.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Alliance Medical Supply and Rental',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
          async
          defer
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
