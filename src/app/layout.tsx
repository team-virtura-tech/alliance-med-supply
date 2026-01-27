import { Footer } from '@/components/custom/footer';
import { Header } from '@/components/custom/header';
import { contact } from '@/data/contact';
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
  title: `${contact.businessName} | Bay Area Medical Equipment`,
  description: `Professional medical equipment rentals & sales in ${contact.address.cityState}. Wheelchairs, hospital beds, walkers & more. ${contact.accreditation}. Same-day delivery. Call ${contact.phone.display}.`,
  keywords:
    'medical equipment, wheelchair rental, hospital bed rental, walkers, San Jose, Bay Area',
  authors: [{ name: contact.businessName }],
  robots: 'index, follow',
  openGraph: {
    title: `${contact.businessName} | Bay Area Medical Equipment`,
    description: `Professional medical equipment rentals & sales in ${contact.address.cityState}. Same-day delivery available.`,
    type: 'website',
    locale: 'en_US',
    siteName: contact.businessName,
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
