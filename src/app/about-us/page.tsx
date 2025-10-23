'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Accessibility,
  Award,
  CheckCircle2,
  Heart,
  Home,
  MapPin,
  Shield,
  Stethoscope,
  Users,
} from 'lucide-react';
import Link from 'next/link';

export default function AboutUsPage() {
  return (
    <main
      id="AboutUsPage"
      data-component="AboutUsPage"
      className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-teal-50"
    >
      {/* Hero Section with Stats */}
      <section className="relative px-4 py-16 md:px-6 md:py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/90 to-white/95" />
        <div className="absolute top-20 right-10 h-32 w-32 rounded-full bg-orange-100/40 blur-2xl" />
        <div className="absolute bottom-20 left-10 h-40 w-40 rounded-full bg-teal-100/30 blur-3xl" />

        <div className="relative mx-auto max-w-6xl">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              About{' '}
              <span className="bg-gradient-to-r from-teal-600 via-cyan-600 to-orange-500 bg-clip-text text-transparent">
                Alliance Med Supply
              </span>
            </h1>
            <p className="mt-6 text-xl font-semibold text-gray-700 md:text-2xl">
              Your Trusted Partner in Medical Equipment & Healthcare Solutions
            </p>
          </div>

          {/* Key Stats/Badges */}
          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 md:gap-6">
            <div className="flex flex-col items-center rounded-xl border border-teal-100 bg-white/80 p-6 backdrop-blur-sm">
              <Award className="h-10 w-10 text-teal-600" />
              <h3 className="mt-3 text-sm font-semibold text-gray-900 md:text-base">
                Certified Provider
              </h3>
              <p className="mt-1 text-center text-xs text-gray-600 md:text-sm">
                JACHO-accredited & FDA-approved equipment
              </p>
            </div>

            <div className="flex flex-col items-center rounded-xl border border-orange-100 bg-white/80 p-6 backdrop-blur-sm">
              <div className="text-3xl">⭐</div>
              <h3 className="mt-3 text-sm font-semibold text-gray-900 md:text-base">
                4.9/5 Rating
              </h3>
              <p className="mt-1 text-center text-xs text-gray-600 md:text-sm">
                Highly rated by our customers
              </p>
            </div>

            <div className="flex flex-col items-center rounded-xl border border-cyan-100 bg-white/80 p-6 backdrop-blur-sm">
              <MapPin className="h-10 w-10 text-cyan-600" />
              <h3 className="mt-3 text-sm font-semibold text-gray-900 md:text-base">
                Bay Area Coverage
              </h3>
              <p className="mt-1 text-center text-xs text-gray-600 md:text-sm">
                Serving San Jose & surrounding counties
              </p>
            </div>

            <div className="flex flex-col items-center rounded-xl border border-orange-100 bg-white/80 p-6 backdrop-blur-sm">
              <div className="text-3xl">🕐</div>
              <h3 className="mt-3 text-sm font-semibold text-gray-900 md:text-base">
                15+ Years Experience
              </h3>
              <p className="mt-1 text-center text-xs text-gray-600 md:text-sm">
                Trusted expertise in medical equipment
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="bg-white px-4 py-16 md:px-6 md:py-20">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
              Our Story
            </h2>
            <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-orange-500 via-teal-500 to-cyan-500" />
          </div>

          <div className="mt-8 space-y-4 text-base leading-relaxed text-gray-600 md:text-lg">
            <p>
              Alliance Med Supply is a trusted provider of durable medical
              equipment and healthcare supplies, proudly serving clinics,
              hospitals, and home patients throughout the Bay Area communities
              and counties, including San Jose, Santa Clara, Milpitas, Fremont,
              Palo Alto, Sunnyvale, Gilroy, and Morgan Hill.
            </p>
            <p>
              We proudly offer an extensive selection of quality brand name home
              medical equipment and supplies. All of our products are from
              reputable, well-known manufacturers like Invacare, Medline, Mebis
              Healthcare, Duro-med Industries, FLA Orthopedics, OTC, Jobst,
              Major&apos;s Mobisist, Drive Medical, and other sought-after
              medical product brands.
            </p>
            <p>
              We look forward to working with you to fulfill all your healthcare
              needs. We value your business and strive to provide individual
              attention to our customers&apos; needs. Our relationship with you
              is important, and we are committed to earning your business
              throughout the years ahead.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="px-4 py-16 md:px-6 md:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
            {/* Mission */}
            <div className="rounded-2xl border border-orange-100 bg-white p-8 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-orange-500 to-orange-600">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
                  Our Mission
                </h2>
              </div>
              <p className="mt-6 text-base leading-relaxed text-gray-600">
                To make a positive difference in the lives of our communities by
                providing them with customer service that exceeds their
                expectations and products that help to improve the quality of
                their lives. We are committed to providing healthcare
                professionals and patients with the highest quality medical
                equipment and supplies to support healing, enhance mobility, and
                promote independence.
              </p>
            </div>

            {/* Vision/Goal */}
            <div className="rounded-2xl border border-teal-100 bg-white p-8 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-teal-500 to-cyan-500">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
                  Our Goal
                </h2>
              </div>
              <p className="mt-6 text-base leading-relaxed text-gray-600">
                To educate our senior communities on the proper use and safety
                of durable medical equipment and home safety. We encourage them
                to seek professional medical consultation and help find the
                right product or service to meet their needs. We strive to be
                the Bay Area&apos;s premier destination for comprehensive
                medical equipment solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section - Card Style with Colored Borders */}
      <section className="bg-white px-4 py-16 md:px-6 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
              Our Values
            </h2>
            <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-teal-500 via-cyan-500 to-orange-500" />
            <p className="mx-auto mt-6 max-w-2xl text-base text-gray-600 md:text-lg">
              The principles that guide everything we do
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {/* Quality Excellence - Teal */}
            <div className="relative overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md">
              <div className="absolute left-0 top-0 h-full w-1 bg-teal-500" />
              <div className="flex flex-col gap-4 p-6 pl-8">
                <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-teal-500">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900">
                    Quality Excellence
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">
                    Certified, reliable equipment from trusted manufacturers
                    meeting the highest industry standards. All products are
                    JACHO-accredited and FDA-approved.
                  </p>
                </div>
              </div>
            </div>

            {/* Compassionate Care - Orange */}
            <div className="relative overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md">
              <div className="absolute left-0 top-0 h-full w-1 bg-orange-500" />
              <div className="flex flex-col gap-4 p-6 pl-8">
                <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-orange-500">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900">
                    Compassionate Care
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">
                    Personalized attention guided by empathy and a genuine
                    desire to improve lives. We provide individual attention to
                    every customer&apos;s unique needs.
                  </p>
                </div>
              </div>
            </div>

            {/* Community Partnership - Cyan */}
            <div className="relative overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md">
              <div className="absolute left-0 top-0 h-full w-1 bg-cyan-500" />
              <div className="flex flex-col gap-4 p-6 pl-8">
                <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-cyan-500">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900">
                    Community Partnership
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">
                    Supporting Bay Area families, seniors, and healthcare
                    professionals with reliable service. Committed to earning
                    your business for years to come.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="px-4 py-16 md:px-6 md:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
              What We Offer
            </h2>
            <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-cyan-500 via-orange-500 to-teal-500" />
            <p className="mx-auto mt-6 max-w-2xl text-base text-gray-600 md:text-lg">
              Comprehensive medical equipment solutions tailored to your needs
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Card 1: Mobility & Accessibility */}
            <Card className="border-teal-100 shadow-sm transition-all hover:shadow-lg">
              <CardContent className="p-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-gradient-to-br from-teal-500 to-cyan-500">
                  <Accessibility className="h-7 w-7 text-white" />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-gray-900">
                  Mobility & Accessibility
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  Wheelchairs, walkers, rollators, mobility scooters, and lift
                  chairs designed to restore independence and freedom of
                  movement.
                </p>
              </CardContent>
            </Card>

            {/* Card 2: Home Care & Recovery */}
            <Card className="border-orange-100 shadow-sm transition-all hover:shadow-lg">
              <CardContent className="p-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-gradient-to-br from-orange-500 to-orange-600">
                  <Home className="h-7 w-7 text-white" />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-gray-900">
                  Home Care & Recovery
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  Hospital beds, patient lifts, bedside commodes, and recovery
                  aids to support healing and comfort in the home environment.
                </p>
              </CardContent>
            </Card>

            {/* Card 3: Medical Equipment Rentals */}
            <Card className="border-cyan-100 shadow-sm transition-all hover:shadow-lg">
              <CardContent className="p-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500 to-teal-500">
                  <Stethoscope className="h-7 w-7 text-white" />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-gray-900">
                  Medical Equipment Rentals
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  Flexible short-term and long-term rental options for CPM
                  machines, oxygen concentrators, and other specialized medical
                  devices.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section - Two Column Checklist */}
      <section className="bg-white px-4 py-16 md:px-6 md:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
              Why Choose Alliance Med Supply
            </h2>
            <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-teal-500 to-orange-500" />
            <p className="mx-auto mt-6 max-w-3xl text-base text-gray-600 md:text-lg">
              Experience the convenience of having all your medical equipment
              needs handled by one trusted provider with proven excellence.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-x-16 md:gap-y-6">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 h-6 w-6 flex-shrink-0 text-teal-500" />
              <span className="text-base text-gray-700">
                JACHO-accredited and FDA-approved equipment
              </span>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 h-6 w-6 flex-shrink-0 text-teal-500" />
              <span className="text-base text-gray-700">
                Same-day and next-day delivery available
              </span>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 h-6 w-6 flex-shrink-0 text-teal-500" />
              <span className="text-base text-gray-700">
                Trusted brands: Invacare, Medline, Drive Medical
              </span>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 h-6 w-6 flex-shrink-0 text-teal-500" />
              <span className="text-base text-gray-700">
                Professional equipment setup and training
              </span>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 h-6 w-6 flex-shrink-0 text-teal-500" />
              <span className="text-base text-gray-700">
                Flexible rental and purchase options available
              </span>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 h-6 w-6 flex-shrink-0 text-teal-500" />
              <span className="text-base text-gray-700">
                Serving Bay Area clinics, hospitals, and homes
              </span>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 h-6 w-6 flex-shrink-0 text-teal-500" />
              <span className="text-base text-gray-700">
                Home safety education and guidance provided
              </span>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 h-6 w-6 flex-shrink-0 text-teal-500" />
              <span className="text-base text-gray-700">
                Insurance billing assistance and support
              </span>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 h-6 w-6 flex-shrink-0 text-teal-500" />
              <span className="text-base text-gray-700">
                Equipment maintenance and repair services
              </span>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 h-6 w-6 flex-shrink-0 text-teal-500" />
              <span className="text-base text-gray-700">
                Individual attention to every customer&apos;s needs
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Patient Safety Notice */}
      <section className="px-4 py-12 md:px-6">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-xl border border-gray-200 bg-gray-50 p-6 md:p-8">
            <h3 className="text-lg font-semibold text-gray-900">
              Patient Safety & Compliance
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-gray-600">
              To report a patient safety event or concern not resolved by our
              company, you may contact the Joint Commission Resources Customer
              Service at{' '}
              <a
                href="tel:630-792-5800"
                className="font-medium text-teal-600 hover:underline"
              >
                630-792-5800
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Get in Touch CTA */}
      <section className="px-4 py-16 md:px-6 md:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <div className="rounded-2xl border border-gray-200 bg-gradient-to-br from-slate-50 to-gray-50 p-8 shadow-lg md:p-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
              Ready to Get Started?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-gray-600 md:text-lg">
              Whether you need equipment for home care, a medical facility, or
              have questions about our services, our team is here to help you
              find the right solution.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white shadow-md transition-all hover:shadow-lg hover:from-teal-700 hover:to-cyan-700"
                >
                  Contact Us Today
                </Button>
              </Link>
              <Link href="/products">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-orange-500 text-orange-600 transition-all hover:border-orange-600 hover:bg-orange-500 hover:text-white"
                >
                  Browse Equipment
                </Button>
              </Link>
            </div>
            <div className="mt-8 flex flex-col items-center gap-2 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-orange-500" />
                <span>1630 Oakland Road, Suite A110, San Jose, CA 95131</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-lg">📞</span>
                <a
                  href="tel:408-942-9000"
                  className="text-lg font-semibold text-orange-600 transition-colors hover:text-orange-700 hover:underline"
                >
                  (408) 942-9000
                </a>
              </div>
              <div className="mt-2 text-xs text-gray-500">
                Mon-Fri: 11:00 AM - 5:00 PM | Sat: By Appointment Only
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
