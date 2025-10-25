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
4. **Icons:** 4x4 size, use Lucide icons only
5. **Accessibility:** All buttons have proper focus states
6. **Mobile-first:** All buttons are responsive and touch-friendly

---

## 🚫 What NOT to Do

❌ Don't create one-off button styles with custom classes  
❌ Don't mix button variants on the same page without purpose  
❌ Don't overuse the accent (orange) variant  
❌ Don't use ghost for primary actions  
❌ Don't use too many button variants in one section

---

## 🔗 Resources

- **Demo Page:** `/ux-demo`
- **Button Component:** `src/components/ui/button.tsx`
- **Tailwind Colors:** [Tailwind CSS Colors](https://tailwindcss.com/docs/customizing-colors)
- **shadcn/ui Docs:** [shadcn/ui Button](https://ui.shadcn.com/docs/components/button)

---

**Need help?** Check the `/ux-demo` page to see all variants in action!
