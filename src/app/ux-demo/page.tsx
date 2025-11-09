import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import {
  ArrowRight,
  Download,
  Heart,
  Mail,
  Phone,
  Plus,
  Search,
  ShoppingCart,
  Trash2,
} from 'lucide-react';

export default function UxDemoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-teal-50/30">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-slate-900 md:text-5xl">
            UX Component Demo
          </h1>
          <p className="text-lg text-slate-600">
            Alliance Medical Supply - Design System Preview
          </p>
        </div>

        {/* Color Palette Section */}
        <section className="mb-16">
          <h2 className="mb-6 text-2xl font-semibold text-slate-900">
            🎨 Color Palette (Tailwind Shades)
          </h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Teal Palette */}
            <Card>
              <CardHeader>
                <CardTitle>Primary - Teal</CardTitle>
                <CardDescription>Main brand color</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-lg bg-teal-400 shadow-sm"></div>
                  <div>
                    <p className="text-sm font-medium">teal-400</p>
                    <p className="text-xs text-slate-500">#2dd4bf</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-lg bg-teal-500 shadow-sm"></div>
                  <div>
                    <p className="text-sm font-medium">
                      teal-500 (recommended)
                    </p>
                    <p className="text-xs text-slate-500">#14b8a6</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-lg bg-teal-600 shadow-sm"></div>
                  <div>
                    <p className="text-sm font-medium">teal-600</p>
                    <p className="text-xs text-slate-500">#0d9488</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-lg bg-teal-700 shadow-sm"></div>
                  <div>
                    <p className="text-sm font-medium">teal-700</p>
                    <p className="text-xs text-slate-500">#0f766e</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Orange Palette */}
            <Card>
              <CardHeader>
                <CardTitle>Accent - Orange</CardTitle>
                <CardDescription>Highlights & CTAs</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-lg bg-orange-400 shadow-sm"></div>
                  <div>
                    <p className="text-sm font-medium">orange-400</p>
                    <p className="text-xs text-slate-500">#fb923c</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-lg bg-orange-500 shadow-sm"></div>
                  <div>
                    <p className="text-sm font-medium">
                      orange-500 (recommended)
                    </p>
                    <p className="text-xs text-slate-500">#f97316</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-lg bg-orange-600 shadow-sm"></div>
                  <div>
                    <p className="text-sm font-medium">orange-600</p>
                    <p className="text-xs text-slate-500">#ea580c</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-lg bg-orange-700 shadow-sm"></div>
                  <div>
                    <p className="text-sm font-medium">orange-700</p>
                    <p className="text-xs text-slate-500">#c2410c</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Neutral Palette */}
            <Card>
              <CardHeader>
                <CardTitle>Neutral - Slate</CardTitle>
                <CardDescription>Text & backgrounds</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-lg bg-slate-100 shadow-sm"></div>
                  <div>
                    <p className="text-sm font-medium">slate-100</p>
                    <p className="text-xs text-slate-500">#f1f5f9</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-lg bg-slate-500 shadow-sm"></div>
                  <div>
                    <p className="text-sm font-medium">slate-500</p>
                    <p className="text-xs text-slate-500">#64748b</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-lg bg-slate-700 shadow-sm"></div>
                  <div>
                    <p className="text-sm font-medium">slate-700</p>
                    <p className="text-xs text-slate-500">#334155</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-lg bg-slate-900 shadow-sm"></div>
                  <div>
                    <p className="text-sm font-medium">slate-900</p>
                    <p className="text-xs text-slate-500">#0f172a</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Button Variants - Current vs Proposed */}
        <section className="mb-16">
          <h2 className="mb-6 text-2xl font-semibold text-slate-900">
            🔘 Button Variants
          </h2>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Current Buttons */}
            <Card>
              <CardHeader>
                <CardTitle>Current Buttons (Existing)</CardTitle>
                <CardDescription>
                  Using current button component variants
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label className="mb-2 block text-sm font-medium">
                    Default (Primary)
                  </Label>
                  <div className="flex flex-wrap gap-3">
                    <Button variant="default" size="sm">
                      Small
                    </Button>
                    <Button variant="default">Default</Button>
                    <Button variant="default" size="lg">
                      Large
                    </Button>
                    <Button variant="default">
                      With Icon <ArrowRight />
                    </Button>
                  </div>
                </div>

                <div>
                  <Label className="mb-2 block text-sm font-medium">
                    Secondary
                  </Label>
                  <div className="flex flex-wrap gap-3">
                    <Button variant="secondary" size="sm">
                      Small
                    </Button>
                    <Button variant="secondary">Default</Button>
                    <Button variant="secondary" size="lg">
                      Large
                    </Button>
                    <Button variant="secondary">
                      With Icon <Phone />
                    </Button>
                  </div>
                </div>

                <div>
                  <Label className="mb-2 block text-sm font-medium">
                    Outline
                  </Label>
                  <div className="flex flex-wrap gap-3">
                    <Button variant="outline" size="sm">
                      Small
                    </Button>
                    <Button variant="outline">Default</Button>
                    <Button variant="outline" size="lg">
                      Large
                    </Button>
                    <Button variant="outline">
                      With Icon <Search />
                    </Button>
                  </div>
                </div>

                <div>
                  <Label className="mb-2 block text-sm font-medium">
                    Ghost
                  </Label>
                  <div className="flex flex-wrap gap-3">
                    <Button variant="ghost" size="sm">
                      Small
                    </Button>
                    <Button variant="ghost">Default</Button>
                    <Button variant="ghost" size="lg">
                      Large
                    </Button>
                    <Button variant="ghost">
                      With Icon <Mail />
                    </Button>
                  </div>
                </div>

                <div>
                  <Label className="mb-2 block text-sm font-medium">
                    Destructive
                  </Label>
                  <div className="flex flex-wrap gap-3">
                    <Button variant="destructive" size="sm">
                      Small
                    </Button>
                    <Button variant="destructive">Delete</Button>
                    <Button variant="destructive" size="lg">
                      Remove
                    </Button>
                    <Button variant="destructive">
                      <Trash2 /> Delete Item
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Proposed New Variants */}
            <Card className="border-2 border-teal-500/20 bg-teal-50/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  ✨ Proposed New Variants
                </CardTitle>
                <CardDescription>
                  Standardized design system with Tailwind colors
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label className="mb-2 block text-sm font-medium">
                    Primary (Teal-600 Solid)
                  </Label>
                  <div className="flex flex-wrap gap-3">
                    <Button
                      size="sm"
                      className="bg-teal-600 text-white hover:bg-teal-700"
                    >
                      Small
                    </Button>
                    <Button className="bg-teal-600 text-white hover:bg-teal-700">
                      Default
                    </Button>
                    <Button
                      size="lg"
                      className="bg-teal-600 text-white hover:bg-teal-700"
                    >
                      Large
                    </Button>
                    <Button className="bg-teal-600 text-white hover:bg-teal-700">
                      Book Now <ArrowRight />
                    </Button>
                  </div>
                </div>

                <div>
                  <Label className="mb-2 block text-sm font-medium">
                    Secondary (Teal Outline - Thin Border)
                  </Label>
                  <div className="flex flex-wrap gap-3">
                    <Button
                      size="sm"
                      className="border border-teal-600 bg-white text-teal-700 hover:bg-teal-50 hover:border-teal-700"
                    >
                      Small
                    </Button>
                    <Button className="border border-teal-600 bg-white text-teal-700 hover:bg-teal-50 hover:border-teal-700">
                      Default
                    </Button>
                    <Button
                      size="lg"
                      className="border border-teal-600 bg-white text-teal-700 hover:bg-teal-50 hover:border-teal-700"
                    >
                      Large
                    </Button>
                    <Button className="border border-teal-600 bg-white text-teal-700 hover:bg-teal-50 hover:border-teal-700">
                      Learn More <Phone />
                    </Button>
                  </div>
                </div>

                <div>
                  <Label className="mb-2 block text-sm font-medium">
                    Accent (Orange Solid - Special CTAs)
                  </Label>
                  <div className="flex flex-wrap gap-3">
                    <Button
                      size="sm"
                      className="bg-orange-500 text-white hover:bg-orange-600"
                    >
                      Small
                    </Button>
                    <Button className="bg-orange-500 text-white hover:bg-orange-600">
                      Special Offer
                    </Button>
                    <Button
                      size="lg"
                      className="bg-orange-500 text-white hover:bg-orange-600"
                    >
                      Get Started
                    </Button>
                    <Button className="bg-orange-500 text-white hover:bg-orange-600">
                      Shop Now <ShoppingCart />
                    </Button>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <Label className="mb-2 block text-sm font-medium">
                      Option A: Ghost - Minimal with Strong Hover (Link-like)
                    </Label>
                    <p className="mb-3 text-xs text-slate-500">
                      Clean text, bold hover feedback. Best for cancel/close
                      actions.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <Button
                        size="sm"
                        className="text-teal-700 hover:bg-teal-100 hover:text-teal-900"
                      >
                        Small
                      </Button>
                      <Button className="text-teal-700 hover:bg-teal-100 hover:text-teal-900">
                        Cancel
                      </Button>
                      <Button
                        size="lg"
                        className="text-teal-700 hover:bg-teal-100 hover:text-teal-900"
                      >
                        Back
                      </Button>
                      <Button className="text-teal-700 hover:bg-teal-100 hover:text-teal-900">
                        Close <Mail />
                      </Button>
                    </div>
                  </div>

                  <div>
                    <Label className="mb-2 block text-sm font-medium">
                      Option B: Ghost - Subtle Outline
                    </Label>
                    <p className="mb-3 text-xs text-slate-500">
                      Nearly invisible border, appears on hover. Professional
                      and balanced.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <Button
                        size="sm"
                        className="border border-slate-200 text-slate-700 hover:border-teal-600 hover:bg-teal-50 hover:text-teal-700"
                      >
                        Small
                      </Button>
                      <Button className="border border-slate-200 text-slate-700 hover:border-teal-600 hover:bg-teal-50 hover:text-teal-700">
                        Cancel
                      </Button>
                      <Button
                        size="lg"
                        className="border border-slate-200 text-slate-700 hover:border-teal-600 hover:bg-teal-50 hover:text-teal-700"
                      >
                        Back
                      </Button>
                      <Button className="border border-slate-200 text-slate-700 hover:border-teal-600 hover:bg-teal-50 hover:text-teal-700">
                        Close <Mail />
                      </Button>
                    </div>
                  </div>

                  <div>
                    <Label className="mb-2 block text-sm font-medium">
                      Option C: Soft (Replace Ghost) - Tinted Background
                    </Label>
                    <p className="mb-3 text-xs text-slate-500">
                      Soft teal background, always visible. Modern and friendly.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <Button
                        size="sm"
                        className="bg-teal-50 text-teal-700 hover:bg-teal-100 hover:text-teal-800"
                      >
                        Small
                      </Button>
                      <Button className="bg-teal-50 text-teal-700 hover:bg-teal-100 hover:text-teal-800">
                        Cancel
                      </Button>
                      <Button
                        size="lg"
                        className="bg-teal-50 text-teal-700 hover:bg-teal-100 hover:text-teal-800"
                      >
                        Back
                      </Button>
                      <Button className="bg-teal-50 text-teal-700 hover:bg-teal-100 hover:text-teal-800">
                        Close <Mail />
                      </Button>
                    </div>
                  </div>
                </div>

                <div>
                  <Label className="mb-2 block text-sm font-medium">
                    Destructive (Red - Keep as is)
                  </Label>
                  <div className="flex flex-wrap gap-3">
                    <Button variant="destructive" size="sm">
                      Small
                    </Button>
                    <Button variant="destructive">Delete</Button>
                    <Button variant="destructive" size="lg">
                      Remove
                    </Button>
                    <Button variant="destructive">
                      <Trash2 /> Delete
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Real-World Examples */}
        <section className="mb-16">
          <h2 className="mb-6 text-2xl font-semibold text-slate-900">
            💼 Real-World Usage Examples
          </h2>

          <div className="grid gap-6 lg:grid-cols-2">
            {/* Hero Section Example */}
            <Card className="overflow-hidden">
              <div className="bg-gradient-to-br from-teal-50 to-orange-50 p-8">
                <h3 className="mb-2 text-2xl font-bold text-slate-900">
                  Medical Equipment Rentals
                </h3>
                <p className="mb-6 text-slate-600">
                  Professional medical supply rentals in the Bay Area. Fast,
                  reliable service.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button className="bg-teal-600 text-white hover:bg-teal-700">
                    <Phone className="mr-2 h-4 w-4" />
                    Call (408) 942-9000
                  </Button>
                  <Button className="border border-teal-600 bg-white text-teal-700 hover:bg-teal-50 hover:border-teal-700">
                    Browse Equipment
                  </Button>
                </div>
              </div>
            </Card>

            {/* Product Card Example */}
            <Card>
              <CardHeader>
                <CardTitle>Electric Wheelchair</CardTitle>
                <CardDescription>Premium mobility solution</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-slate-900">
                    $250
                  </span>
                  <span className="text-slate-500">/month</span>
                </div>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>✓ Professional delivery & setup</li>
                  <li>✓ 24/7 support included</li>
                  <li>✓ Sanitized & certified</li>
                </ul>
                <div className="flex gap-3">
                  <Button className="flex-1 bg-teal-600 text-white hover:bg-teal-700">
                    Rent Now
                  </Button>
                  <Button className="border border-teal-600 bg-white text-teal-700 hover:bg-teal-50 hover:border-teal-700">
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Special Offer Card */}
            <Card className="border-2 border-orange-200 bg-orange-50/50">
              <CardHeader>
                <div className="mb-2 inline-block rounded-full bg-orange-500 px-3 py-1 text-xs font-semibold text-white">
                  SPECIAL OFFER
                </div>
                <CardTitle>New Customer Discount</CardTitle>
                <CardDescription>Get 20% off your first rental</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-orange-500 text-white hover:bg-orange-600">
                  Claim Offer <ArrowRight />
                </Button>
              </CardContent>
            </Card>

            {/* Contact Form Example */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Contact</CardTitle>
                <CardDescription>
                  We&apos;ll respond within 24 hours
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="demo-name">Name</Label>
                  <Input id="demo-name" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="demo-email">Email</Label>
                  <Input
                    id="demo-email"
                    type="email"
                    placeholder="john@example.com"
                  />
                </div>
                <div className="space-y-3">
                  <div className="flex gap-3">
                    <Button className="flex-1 bg-teal-600 text-white hover:bg-teal-700">
                      Send Message
                    </Button>
                    <Button className="text-teal-700 hover:bg-teal-100 hover:text-teal-900">
                      Cancel
                    </Button>
                  </div>
                  <div className="flex gap-3">
                    <Button className="flex-1 bg-teal-600 text-white hover:bg-teal-700">
                      Send Message
                    </Button>
                    <Button className="border border-slate-200 text-slate-700 hover:border-teal-600 hover:bg-teal-50 hover:text-teal-700">
                      Cancel
                    </Button>
                  </div>
                  <div className="flex gap-3">
                    <Button className="flex-1 bg-teal-600 text-white hover:bg-teal-700">
                      Send Message
                    </Button>
                    <Button className="bg-teal-50 text-teal-700 hover:bg-teal-100 hover:text-teal-800">
                      Cancel
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Icon Sizes Demo */}
        <section className="mb-16">
          <h2 className="mb-6 text-2xl font-semibold text-slate-900">
            🎯 Button + Icon Combinations
          </h2>

          <Card>
            <CardContent className="space-y-6 pt-6">
              <div>
                <Label className="mb-3 block text-sm font-medium">
                  Primary Actions with Icons
                </Label>
                <div className="flex flex-wrap gap-3">
                  <Button className="bg-teal-600 text-white hover:bg-teal-700">
                    <Phone className="mr-2 h-4 w-4" />
                    Call Now
                  </Button>
                  <Button className="bg-teal-600 text-white hover:bg-teal-700">
                    <Download className="mr-2 h-4 w-4" />
                    Download
                  </Button>
                  <Button className="bg-teal-600 text-white hover:bg-teal-700">
                    <Plus className="mr-2 h-4 w-4" />
                    Add to Cart
                  </Button>
                  <Button className="bg-teal-600 text-white hover:bg-teal-700">
                    Continue
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div>
                <Label className="mb-3 block text-sm font-medium">
                  Secondary Actions with Icons
                </Label>
                <div className="flex flex-wrap gap-3">
                  <Button className="border-2 border-teal-600 bg-white text-teal-700 hover:bg-teal-50">
                    <Search className="mr-2 h-4 w-4" />
                    Search
                  </Button>
                  <Button className="border-2 border-teal-600 bg-white text-teal-700 hover:bg-teal-50">
                    <Mail className="mr-2 h-4 w-4" />
                    Email Us
                  </Button>
                  <Button className="border-2 border-teal-600 bg-white text-teal-700 hover:bg-teal-50">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div>
                <Label className="mb-3 block text-sm font-medium">
                  Icon-Only Buttons
                </Label>
                <div className="flex flex-wrap gap-3">
                  <Button
                    size="icon"
                    className="bg-teal-600 text-white hover:bg-teal-700"
                  >
                    <Heart className="h-4 w-4" />
                  </Button>
                  <Button
                    size="icon"
                    className="border border-teal-600 bg-white text-teal-700 hover:bg-teal-50 hover:border-teal-700"
                  >
                    <Search className="h-4 w-4" />
                  </Button>
                  <Button
                    size="icon"
                    className="bg-orange-500 text-white hover:bg-orange-600"
                  >
                    <ShoppingCart className="h-4 w-4" />
                  </Button>
                  <Button size="icon" variant="destructive">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Recommendations */}
        <section>
          <Card className="border-2 border-teal-500 bg-teal-50">
            <CardHeader>
              <CardTitle>📋 Recommended Color System</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h4 className="font-semibold text-slate-900">
                  ✅ Primary: Teal-600
                </h4>
                <p className="text-sm text-slate-600">
                  Use for main CTAs, navigation, links, focus states. Most
                  important actions.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-slate-900">
                  ✅ Secondary: Teal-600 Outline (Thin Border)
                </h4>
                <p className="text-sm text-slate-600">
                  Use for secondary actions, alternative choices, &quot;Learn
                  More&quot; type buttons. Thin border (1px) for elegance.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-slate-900">
                  ✅ Accent: Orange-500
                </h4>
                <p className="text-sm text-slate-600">
                  Use sparingly for special offers, promotions, urgent CTAs.
                  Creates visual interest.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-slate-900">
                  ✅ Ghost/Soft: Pick from Options A, B, or C
                </h4>
                <p className="text-sm text-slate-600">
                  <strong>Option A:</strong> Best for cancel/back in forms.{' '}
                  <strong>Option B:</strong> Most professional, balanced.{' '}
                  <strong>Option C:</strong> Modern, always visible, friendly.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-slate-900">
                  ✅ Destructive: Keep current red
                </h4>
                <p className="text-sm text-slate-600">
                  Use for delete, remove, dangerous actions. Already works well.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Footer Note */}
        <div className="mt-12 rounded-xl bg-slate-100 p-6 text-center">
          <p className="text-sm text-slate-600">
            💡 <strong>Next Step:</strong> Review these variants and let me know
            which style you prefer. I&apos;ll then update the Button component
            and systematically replace all button usages across your site.
          </p>
        </div>
      </div>
    </div>
  );
}
