# Design System - Alliance Medical Supply

**Status:** ✅ Finalized  
**Date:** October 25, 2025  
**Stack:** Tailwind CSS + shadcn/ui

---

## 🎨 Standardized Color Palette

**Color Format:** OKLCH (Lightness, Chroma, Hue)  
_We use OKLCH for perceptually uniform colors and better dark mode transitions._

### Primary Color: Teal

| Shade        | OKLCH Value                | Tailwind Ref | Usage                                   |
| ------------ | -------------------------- | ------------ | --------------------------------------- |
| **teal-50**  | `oklch(0.985 0.015 186.5)` | `teal-50`    | Backgrounds, ghost buttons              |
| **teal-600** | `oklch(0.553 0.13 192.5)`  | `teal-600`   | **Main primary color** (buttons, links) |
| **teal-700** | `oklch(0.47 0.11 192.8)`   | `teal-700`   | Hover states, text                      |

**CSS Variables:**

```css
--primary: oklch(0.553 0.13 192.5); /* teal-600 */
--primary-foreground: oklch(1 0 0); /* white */
--muted: oklch(0.985 0.015 186.5); /* teal-50 for ghost buttons */
--muted-foreground: oklch(0.47 0.11 192.8); /* teal-700 */
```

---

### Secondary Color: Same as Primary

**Note:** Secondary uses teal-600 for outline variant consistency

```css
--secondary: oklch(0.553 0.13 192.5); /* teal-600 */
--secondary-foreground: oklch(0.47 0.11 192.8); /* teal-700 */
```

---

### Accent Color: Orange

| Shade          | OKLCH Value               | Tailwind Ref | Usage                                |
| -------------- | ------------------------- | ------------ | ------------------------------------ |
| **orange-500** | `oklch(0.692 0.184 42.3)` | `orange-500` | **Main accent color** (special CTAs) |

**CSS Variables:**

```css
--accent: oklch(0.692 0.184 42.3); /* orange-500 */
--accent-foreground: oklch(1 0 0); /* white */
```

---

### Neutral Colors: Slate

| Shade         | OKLCH Value                 | Tailwind Ref | Usage                  |
| ------------- | --------------------------- | ------------ | ---------------------- |
| **slate-200** | `oklch(0.922 0.003 264.5)`  | `slate-200`  | Borders, dividers      |
| **slate-900** | `oklch(0.187 0.02 265.755)` | `slate-900`  | Primary text, headings |

**CSS Variables:**

```css
--foreground: oklch(0.187 0.02 265.755); /* slate-900 */
--border: oklch(0.922 0.003 264.5); /* slate-200 */
--input: oklch(0.922 0.003 264.5); /* slate-200 */
```

---

### Destructive Color: Red

| Shade       | OKLCH Value                 | Tailwind Ref | Usage                  |
| ----------- | --------------------------- | ------------ | ---------------------- |
| **red-500** | `oklch(0.628 0.257 27.325)` | `red-500`    | Delete, remove actions |

**CSS Variables:**

```css
--destructive: oklch(0.628 0.257 27.325); /* red-500 */
--destructive-foreground: oklch(1 0 0); /* white */
```

---

## 🔘 Button Variants (Final)

### 1. Primary (Default)

**When to use:** Main actions, most important CTAs

```tsx
<Button variant="default">Book Now</Button>
<Button>Call (650) 961-4646</Button>
```

**Style:**

- Background: `bg-primary` (teal-600)
- Text: `text-primary-foreground` (white)
- Hover: `hover:bg-primary/90`
- **No shadow**

---

### 2. Secondary (Outline)

**When to use:** Alternative actions, "Learn More", secondary CTAs

```tsx
<Button variant="secondary">Learn More</Button>
<Button variant="secondary">Browse Equipment</Button>
```

**Style:**

- Border: `border border-input` (slate-200, thin 1px)
- Background: `bg-background` (white)
- Text: `text-secondary-foreground` (teal-700)
- Hover: `hover:bg-accent/10`
- **No shadow**

---

### 3. Accent (Orange)

**When to use:** Special offers, promotions, urgent actions (sparingly)

```tsx
<Button variant="accent">Special Offer</Button>
<Button variant="accent">Shop Now</Button>
```

**Style:**

- Background: `bg-accent` (orange-500)
- Text: `text-accent-foreground` (white)
- Hover: `hover:bg-accent/90`
- **No shadow**

---

### 4. Ghost (Soft)

**When to use:** Cancel, close, back buttons, tertiary actions

```tsx
<Button variant="ghost">Cancel</Button>
<Button variant="ghost">Back</Button>
```

**Style:**

- Background: `bg-muted` (teal-50)
- Text: `text-muted-foreground` (teal-700)
- Hover: `hover:bg-muted/80`
- **No shadow, soft appearance**

---

### 5. Destructive

**When to use:** Delete, remove, dangerous actions

```tsx
<Button variant="destructive">Delete</Button>
<Button variant="destructive">Remove Item</Button>
```

**Style:**

- Background: `bg-destructive` (red-500)
- Text: `text-destructive-foreground` (white)
- Hover: `hover:bg-destructive/90`
- **No shadow**

---

### 6. Outline (Neutral)

**When to use:** Generic neutral actions, filters

```tsx
<Button variant="outline">Filter</Button>
```

**Style:**

- Border: `border border-input`
- Background: `bg-background`
- Hover: `hover:bg-accent hover:text-accent-foreground`
- **No shadow**

---

### 7. Link

**When to use:** Text-only links that look like buttons

```tsx
<Button variant="link">View Details</Button>
```

**Style:**

- Text: `text-primary underline-offset-4`
- Underline on hover
- No background
- **No shadow**

---

## 📏 Button Sizes

```tsx
<Button size="sm">Small</Button>       // h-8
<Button>Default</Button>               // h-9
<Button size="lg">Large</Button>       // h-10
<Button size="icon">🔍</Button>        // size-9 (square)
```

---

## 🎨 Icons

### Icon Libraries

**Use ONLY these two icon libraries:**

1. **Lucide React** - For all UI icons
2. **Simple Icons** - For brand logos ONLY (social media, tech brands)

### 1. Lucide React (Primary Icon Library)

**Installation:** Already installed (`lucide-react` in package.json)

**Usage:**

```tsx
import { Phone, MapPin, Star, Award, Clock, Heart, ArrowRight } from 'lucide-react';

// Standard size (matches button icon size)
<Phone className="h-4 w-4" />

// Larger icons for emphasis
<Star className="h-5 w-5" />

// With color
<Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />

// In buttons (auto-sized by button component)
<Button>
  <Phone className="h-4 w-4" />
  Call Now
</Button>
```

**Common Icons:**

| Use Case         | Icon Component | Example                                                        |
| ---------------- | -------------- | -------------------------------------------------------------- |
| Phone/Call       | `Phone`        | `<Phone className="h-4 w-4" />`                                |
| Location/Map     | `MapPin`       | `<MapPin className="h-4 w-4" />`                               |
| Time/Clock       | `Clock`        | `<Clock className="h-4 w-4" />`                                |
| Rating/Star      | `Star`         | `<Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />` |
| Award/Badge      | `Award`        | `<Award className="h-4 w-4" />`                                |
| Navigation Arrow | `ArrowRight`   | `<ArrowRight className="h-4 w-4" />`                           |
| Favorite/Like    | `Heart`        | `<Heart className="h-4 w-4" />`                                |
| Menu             | `Menu`         | `<Menu className="h-5 w-5" />`                                 |
| Close/X          | `X`            | `<X className="h-5 w-5" />`                                    |
| Check/Success    | `Check`        | `<Check className="h-5 w-5" />`                                |
| Shopping         | `ShoppingCart` | `<ShoppingCart className="h-5 w-5" />`                         |
| User/Profile     | `User`         | `<User className="h-5 w-5" />`                                 |

**Icon Sizes:**

```tsx
// Small (in-text icons, button icons)
className = 'h-4 w-4'; // 16px × 16px

// Medium (default standalone icons)
className = 'h-5 w-5'; // 20px × 20px

// Large (feature icons, hero sections)
className = 'h-6 w-6'; // 24px × 24px

// Extra Large (decorative)
className = 'h-8 w-8'; // 32px × 32px
```

**Icon Colors:**

```tsx
// Primary brand color
<Phone className="h-4 w-4 text-primary" />

// Muted/secondary
<Clock className="h-4 w-4 text-muted-foreground" />

// Accent/orange
<Award className="h-4 w-4 text-accent" />

// Custom colors
<Star className="h-4 w-4 text-yellow-400" />

// With fill (for stars, hearts, etc.)
<Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
```

---

### 2. Simple Icons (Brand Logos Only)

**Installation:** Already installed (`simple-icons` in package.json)

**Usage:**

```tsx
import { siGoogle, siFacebook, siInstagram } from 'simple-icons';

// Use with custom SVG component or inline
<svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
  <path d={siGoogle.path} />
</svg>;
```

**When to use:**

- Social media icons (Facebook, Instagram, LinkedIn, etc.)
- Tech brand logos (Google, Apple, Microsoft, etc.)
- Payment provider logos (Visa, Mastercard, PayPal, etc.)

**Common Brand Icons:**

- `siGoogle` - Google logo
- `siApple` - Apple logo
- `siFacebook` - Facebook logo
- `siInstagram` - Instagram logo
- `siLinkedin` - LinkedIn logo
- `siTwitter` / `siX` - Twitter/X logo
- `siYelp` - Yelp logo

---

### Icon Usage Rules

✅ **DO:**

- Use Lucide React for ALL UI icons
- Use Simple Icons ONLY for brand logos
- Keep icon sizes consistent (h-4 w-4 for buttons, h-5 w-5 for standalone)
- Use semantic colors (text-primary, text-muted-foreground)
- Add descriptive aria-labels for icon-only buttons

❌ **DON'T:**

- Don't use emoji icons (🔍, 📞, 📍, ⭐, 🕒) in production code
- Don't mix different icon libraries
- Don't use custom SVGs unless absolutely necessary
- Don't use icon images when icon components are available
- Don't create inconsistent icon sizes

---

### Icon Examples in Context

**Trust Indicators:**

```tsx
<div className="flex items-center gap-2">
  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
  <span>4.9/5 Rating</span>
</div>

<div className="flex items-center gap-2">
  <Award className="h-4 w-4 text-primary" />
  <span>15+ Years Experience</span>
</div>
```

**Buttons with Icons:**

```tsx
<Button variant="default">
  <Phone className="h-4 w-4" />
  Call (650) 961-4646
</Button>

<Button variant="secondary">
  <MapPin className="h-4 w-4" />
  Find Location
</Button>
```

**Feature Lists:**

```tsx
<div className="flex items-center gap-2">
  <Check className="h-5 w-5 text-primary" />
  <span>Professional delivery service</span>
</div>
```

**Hours/Time:**

```tsx
<div className="flex items-center gap-2">
  <Clock className="h-4 w-4" />
  <span>Mon-Fri: 10AM-5PM | Sat: 10AM-2PM</span>
</div>
```

---

## 🎯 Usage Examples

### Hero Section

```tsx
<Button variant="default">
  <Phone className="mr-2 h-4 w-4" />
  Call (650) 961-4646
</Button>
<Button variant="secondary">Browse Equipment</Button>
```

### Product Card

```tsx
<Button className="flex-1" variant="default">Rent Now</Button>
<Button variant="secondary" size="icon">
  <Heart className="h-4 w-4" />
</Button>
```

### Special Offer

```tsx
<Button variant="accent" className="w-full">
  Claim Offer <ArrowRight />
</Button>
```

### Form Actions

```tsx
<Button variant="default">Submit</Button>
<Button variant="ghost">Cancel</Button>
```

---

## ✅ Design Principles

1. **Consistency:** Use semantic variants, not custom classes
2. **Hierarchy:** Primary → Secondary → Ghost → Destructive
3. **Spacing:** Use standard sizes (sm, default, lg)
4. **Icons:** Use Lucide React (h-4 w-4 in buttons, h-5 w-5 standalone)
5. **Accessibility:** All buttons have proper focus states
6. **Mobile-first:** All buttons are responsive and touch-friendly

---

## 🚫 What NOT to Do

❌ Don't create one-off button styles with custom classes  
❌ Don't mix button variants on the same page without purpose  
❌ Don't overuse the accent (orange) variant  
❌ Don't use ghost for primary actions  
❌ Don't use too many button variants in one section  
❌ Don't use emoji icons (🔍, 📞, 📍) - use Lucide React instead  
❌ Don't mix icon libraries or use custom SVGs unnecessarily

---

## 🔗 Resources

- **Demo Page:** `/ux-demo`
- **Button Component:** `src/components/ui/button.tsx`
- **Tailwind Colors:** [Tailwind CSS Colors](https://tailwindcss.com/docs/customizing-colors)
- **shadcn/ui Docs:** [shadcn/ui Button](https://ui.shadcn.com/docs/components/button)

---

**Need help?** Check the `/ux-demo` page to see all variants in action!
