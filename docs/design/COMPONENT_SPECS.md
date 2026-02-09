# Divine Kitchen — Component Specifications

> Detailed specs for every reusable UI component, derived from reference designs.
> All token references point to `design-tokens.css`.

---

## Table of Contents

1. [Navbar](#1-navbar)
2. [Hero Section](#2-hero-section)
3. [Section Header](#3-section-header)
4. [Dish Card](#4-dish-card)
5. [Chef Card](#5-chef-card)
6. [Star Rating](#6-star-rating)
7. [Buttons](#7-buttons)
8. [CTA Banner (Reservation)](#8-cta-banner-reservation)
9. [Category Tabs](#9-category-tabs)
10. [Price Tag](#10-price-tag)
11. [Badge / Label](#11-badge--label)
12. [Cart Indicator](#12-cart-indicator)
13. [Footer](#13-footer)
14. [Testimonial Card](#14-testimonial-card)
15. [Input Field](#15-input-field)
16. [Modal / Drawer](#16-modal--drawer)

---

## 1. Navbar

The persistent top navigation, anchoring the brand and primary actions.

### Structure
```
┌──────────────────────────────────────────────────────────────┐
│  [Logo]     Home  Menu  About  Contact      [Cart🛒] [CTA]  │
└──────────────────────────────────────────────────────────────┘
```

### Specs

| Property | Value |
|----------|-------|
| Height | 72px (desktop), 60px (mobile) |
| Background | `--bg-surface` (transparent until scrolled, then white with `--shadow-sm`) |
| Position | `sticky`, top: 0, `z-index: var(--z-sticky)` |
| Max width | `--max-w-content` (centered) |
| Padding | `0 var(--grid-margin-lg)` desktop, `0 var(--grid-margin)` mobile |

### Logo
- Font: `--font-display`, `--text-xl`, `--weight-bold`
- Color: `--text-primary`
- The word "Divine" with a small saffron accent dot or leaf icon

### Nav Links
- Font: `--font-body`, `--text-base`, `--weight-medium`
- Color: `--text-secondary` default, `--text-primary` on hover, `--accent-primary` when active
- Underline: 2px `--accent-primary` bar, slides in from left on hover (`--transition-fast`)
- Spacing: `--space-8` between links

### Cart Icon
- Size: 24px
- Badge: 18px circle, `--accent-primary` background, `--color-white` text, `--text-xs`, `--weight-bold`
- Position: top-right of icon, offset -4px

### CTA Button
- "Reserve Table" — uses Primary Button (small variant)

### Mobile
- Hamburger icon replaces nav links at `< md` breakpoint
- Slide-in drawer from right, `--bg-surface`, full viewport height
- Overlay: `--bg-overlay`

---

## 2. Hero Section

The emotional anchor of the landing page.

### Structure
```
┌──────────────────────────────────────────────────────────────────┐
│                                                                  │
│   [Subtitle: "Discover food that speaks to your soul"]           │
│                                                                  │
│   We Serve The                                                   │
│   Best You Love 😋         [Hero Image: plated dish]            │
│                              (with organic blob backdrop)        │
│   [Explore Menu] [Watch Video ▶]                                │
│                                                                  │
│   ┌─────┐ ┌─────┐ ┌─────┐                                      │
│   │ 50+ │ │ 20+ │ │ 10k+│    ← Stats row                      │
│   │Dishes│ │Chefs│ │Happy│                                      │
│   └─────┘ └─────┘ └─────┘                                      │
│                                                                  │
└──────────────────────────────────────────────────────────────────┘
```

### Specs

| Property | Value |
|----------|-------|
| Background | `--bg-primary` with decorative blob in `--color-saffron-100` |
| Padding | `var(--space-24) 0` desktop, `var(--space-16) 0` mobile |
| Layout | 2-column (55% text / 45% image) on desktop, stacked on mobile |

### Headline
- Font: `--font-display`, `--text-4xl` (desktop) / `--text-3xl` (mobile)
- Weight: `--weight-black`
- Line height: `--leading-tight`
- Color: `--text-primary`
- The emoji or icon accent beside text uses `--font-accent`

### Subtitle
- Font: `--font-body`, `--text-md`
- Color: `--text-secondary`
- Letter-spacing: `--tracking-wide`
- Text-transform: uppercase

### Hero Image
- Circular or organic crop, max-width 480px
- Behind it: soft SVG blob shape in `--color-saffron-100`
- Shadow: `--shadow-xl`
- Entrance: Scale from 0.9 to 1 + fade, `--transition-elegant`

### Stats Row
- 3 items, spaced with `--space-10` between
- Number: `--font-display`, `--text-2xl`, `--weight-bold`, `--accent-primary`
- Label: `--font-body`, `--text-sm`, `--text-secondary`

### Animations
- Headline: Fade up (24px), `--transition-elegant`, delay 0ms
- Subtitle: Fade up, delay 100ms
- Buttons: Fade up, delay 200ms
- Image: Scale + fade, delay 150ms
- Stats: Stagger fade up, delay 400ms + 80ms each

---

## 3. Section Header

Used before "Popular Dishes", "Our Chefs", etc.

### Structure
```
         Our
    Popular Dishes
  Fresh meals made with love
  ─────── ◆ ───────
```

### Specs

| Property | Value |
|----------|-------|
| Alignment | Center |
| Margin bottom | `var(--space-12)` |

### Kicker (subtitle above heading)
- Font: `--font-accent`, `--text-lg`, `--weight-bold`
- Color: `--accent-primary`

### Heading
- Font: `--font-heading`, `--text-2xl` (desktop) / `--text-xl` (mobile)
- Color: `--text-primary`
- Line height: `--leading-snug`

### Description
- Font: `--font-body`, `--text-base`
- Color: `--text-secondary`
- Max-width: `--max-w-narrow`
- Margin top: `--space-3`

### Divider
- Width: 60px, 2px solid `--accent-primary`
- Centered, `--space-4` below description
- Optional: small diamond/dot in center

---

## 4. Dish Card

The core commerce component — displays a menu item for browsing and adding to cart.

### Structure
```
┌─────────────────────────┐
│  ┌───────────────────┐  │
│  │                   │  │
│  │   [Dish Image]    │  │
│  │        1:1        │  │
│  │                   │  │
│  └───────────────────┘  │
│                         │
│  Chicken Shawarma       │  ← Name
│  ★★★★★                 │  ← Rating
│  A savory wrap with...  │  ← Description (2-line clamp)
│                         │
│  ₹35.00    [Add to Cart]│  ← Price + CTA
│                         │
└─────────────────────────┘
```

### Specs

| Property | Value |
|----------|-------|
| Width | Fluid within grid column (min 260px) |
| Background | `--bg-surface` |
| Border-radius | `--radius-lg` |
| Shadow | `--shadow-sm` rest, `--shadow-md` hover |
| Padding | `--space-4` (image area has 0 padding) |
| Hover | `translateY(-4px)`, shadow transition `--transition-normal` |
| Border | 1px `--border-subtle` (optional, very faint) |

### Image
- Aspect ratio: 1:1
- Border-radius: `--radius-lg` `--radius-lg` 0 0 (top corners only)
- Object-fit: cover
- Background while loading: `--color-cream-200` with shimmer animation

### Dish Name
- Font: `--font-heading`, `--text-lg`, `--weight-regular`
- Color: `--text-primary`
- Margin top: `--space-3`

### Rating
- Uses [Star Rating](#6-star-rating) component
- Margin top: `--space-1`

### Description
- Font: `--font-body`, `--text-sm`
- Color: `--text-secondary`
- Line clamp: 2 lines, ellipsis overflow
- Margin top: `--space-2`

### Price Row
- Flex: space-between, align center
- Margin top: `--space-4`

### Price
- Font: `--font-mono`, `--text-lg`, `--weight-medium`
- Color: `--text-primary`

### Add to Cart Button
- Uses [Button](#7-buttons) — Primary, small size
- Text: "Add to Cart"

---

## 5. Chef Card

Showcases team members in the "Our Chefs" section.

### Structure
```
┌─────────────────────┐
│                     │
│     [Portrait]      │  ← Circular, 120px
│       ○○○○○         │
│                     │
│    Chef Ramesh      │
│   Head Chef         │
│                     │
│   [Social Icons]    │
│                     │
└─────────────────────┘
```

### Specs

| Property | Value |
|----------|-------|
| Width | Fluid within grid column |
| Background | `--bg-surface` |
| Border-radius | `--radius-xl` |
| Shadow | `--shadow-sm` |
| Padding | `--space-8` vertical, `--space-6` horizontal |
| Text-align | Center |
| Hover | Subtle shadow increase to `--shadow-md` |

### Portrait
- Size: 120px x 120px
- Shape: Circle (`--radius-full`)
- Border: 3px `--accent-primary`
- Object-fit: cover

### Name
- Font: `--font-heading`, `--text-lg`
- Color: `--text-primary`
- Margin top: `--space-4`

### Role
- Font: `--font-body`, `--text-sm`
- Color: `--text-secondary`
- Margin top: `--space-1`

### Social Icons
- Size: 18px, `--text-secondary` default, `--accent-primary` on hover
- Spacing: `--space-3` between icons
- Margin top: `--space-4`

---

## 6. Star Rating

Reusable star rating display (read-only in listings, interactive in reviews).

### Specs

| Property | Value |
|----------|-------|
| Star size | 16px (small), 20px (default), 24px (large) |
| Filled color | `--accent-rating` (#F5A623) |
| Empty color | `--color-charcoal-200` |
| Gap | `--space-1` between stars |
| Half-star | Supported via linear-gradient fill trick or SVG clip |

### Accessibility
- `aria-label="4.5 out of 5 stars"`
- Stars are decorative (`aria-hidden="true"` on individual star elements)
- Rating value is in a visually hidden `<span>` for screen readers

---

## 7. Buttons

### Variants

#### Primary
| Property | Value |
|----------|-------|
| Background | `--accent-primary` |
| Text | `--color-white`, `--weight-semibold` |
| Border-radius | `--radius-md` |
| Padding | `--space-3 --space-6` (default), `--space-2 --space-4` (small) |
| Shadow | `--shadow-sm` |
| Hover | Background `--accent-primary-hover`, `translateY(-1px)`, `--shadow-md` |
| Active | `translateY(0)`, `--shadow-inner` |
| Focus | 2px outline `--border-focus`, offset 2px |
| Min height | 44px (default), 36px (small) |
| Transition | `--transition-fast` |

#### Secondary (Outline)
| Property | Value |
|----------|-------|
| Background | transparent |
| Border | 1.5px solid `--accent-primary` |
| Text | `--accent-primary`, `--weight-semibold` |
| Hover | Background `--accent-secondary`, border `--accent-primary-hover` |

#### Ghost
| Property | Value |
|----------|-------|
| Background | transparent |
| Border | none |
| Text | `--accent-primary`, `--weight-semibold` |
| Hover | Background `--color-saffron-50` |

#### Inverse (on dark backgrounds)
| Property | Value |
|----------|-------|
| Background | `--color-white` |
| Text | `--accent-primary`, `--weight-semibold` |
| Hover | Background `--color-cream-100` |

### Sizes

| Size | Height | Padding | Font Size |
|------|--------|---------|-----------|
| Small | 36px | `--space-2` `--space-4` | `--text-sm` |
| Default | 44px | `--space-3` `--space-6` | `--text-base` |
| Large | 52px | `--space-4` `--space-8` | `--text-md` |

### Icon Buttons
- Padding: equal on all sides (`--space-3` for default)
- Icon: 20px centered
- Border-radius: `--radius-md` (or `--radius-full` for circular)

---

## 8. CTA Banner (Reservation)

A dark, full-width banner encouraging table reservations.

### Structure
```
┌──────────────────────────────────────────────────────────────────┐
│ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ │
│ ▓                                                              ▓ │
│ ▓  Do You Have Any Dinner                                      ▓ │
│ ▓  Plan Today? Reserve              [Decorative dish image]    ▓ │
│ ▓  Your Table                                                  ▓ │
│ ▓                                                              ▓ │
│ ▓  [Reserve Now →]                                             ▓ │
│ ▓                                                              ▓ │
│ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ │
└──────────────────────────────────────────────────────────────────┘
```

### Specs

| Property | Value |
|----------|-------|
| Background | `--bg-inverse` with subtle radial gradient of `--color-saffron-900` at 10% opacity |
| Padding | `var(--space-16) 0` |
| Layout | 2-column (60% text / 40% image), stacked on mobile |
| Border-radius | `--radius-2xl` (if contained within content area) or none (if full-bleed) |

### Headline
- Font: `--font-display`, `--text-3xl` (desktop) / `--text-2xl` (mobile)
- Weight: `--weight-bold`
- Color: `--text-inverse`
- Line height: `--leading-snug`

### Button
- Uses Inverse Button variant
- "Reserve Now" with right arrow icon

### Decorative Image
- Semi-circular crop, partially clipped at edge
- Opacity: 0.9
- A warm dish photo with visible steam/warmth

---

## 9. Category Tabs

Horizontal filter tabs for menu categories (All, Main Course, Appetizers, Desserts, etc.).

### Specs

| Property | Value |
|----------|-------|
| Layout | Horizontal scroll on mobile, flex-wrap on desktop |
| Gap | `--space-2` |
| Overflow | scroll-x with hidden scrollbar on mobile |

### Individual Tab

| State | Background | Text | Border |
|-------|-----------|------|--------|
| Default | transparent | `--text-secondary` | 1px `--border-default` |
| Hover | `--color-cream-200` | `--text-primary` | 1px `--border-default` |
| Active | `--accent-primary` | `--color-white` | none |

| Property | Value |
|----------|-------|
| Padding | `--space-2` `--space-5` |
| Border-radius | `--radius-full` |
| Font | `--font-body`, `--text-sm`, `--weight-medium` |
| Transition | `--transition-fast` |
| Min height | 36px |

---

## 10. Price Tag

Standalone price display with optional original/discounted pricing.

### Standard
```
₹35.00
```
- Font: `--font-mono`, `--text-lg`, `--weight-medium`
- Color: `--text-primary`

### With Discount
```
₹55.00  ₹35.00
```
- Original: `--font-mono`, `--text-sm`, `--text-tertiary`, `text-decoration: line-through`
- Discounted: `--font-mono`, `--text-lg`, `--weight-medium`, `--accent-danger`

---

## 11. Badge / Label

Small decorative labels like "Chef's Pick", "New", "Veg", "Spicy".

### Specs

| Property | Value |
|----------|-------|
| Padding | `--space-1` `--space-3` |
| Border-radius | `--radius-full` |
| Font | `--font-body`, `--text-xs`, `--weight-semibold` |
| Letter-spacing | `--tracking-wide` |
| Text-transform | uppercase |

### Variants

| Variant | Background | Text |
|---------|-----------|------|
| Default | `--accent-secondary` | `--accent-primary` |
| Success (Veg) | olive-500 at 12% | `--accent-success` |
| Danger (Spicy) | tomato-500 at 12% | `--accent-danger` |
| Handwritten | transparent | `--accent-primary`, uses `--font-accent`, `--text-sm`, normal case |

---

## 12. Cart Indicator

Floating or navbar-embedded cart icon with item count.

### Navbar Version
- See [Navbar](#1-navbar) cart icon specs.

### Floating Version (mobile)

| Property | Value |
|----------|-------|
| Position | Fixed, bottom `--space-6`, right `--space-6` |
| Size | 56px x 56px |
| Background | `--accent-primary` |
| Border-radius | `--radius-full` |
| Shadow | `--shadow-lg` |
| Icon | Cart icon, 24px, `--color-white` |
| Badge | Same as navbar badge but positioned top-right |
| Z-index | `--z-overlay` |
| Hover | Scale 1.05, `--shadow-xl` |
| Entrance | Scale + bounce from bottom, `--transition-spring` |

---

## 13. Footer

### Structure
```
┌──────────────────────────────────────────────────────────────────┐
│ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ │
│ ▓                                                              ▓ │
│ ▓  Divine Kitchen    Quick Links    Contact     Follow Us      ▓ │
│ ▓  [Description]     Home           Address     [Social]       ▓ │
│ ▓                    Menu           Phone                      ▓ │
│ ▓                    About          Email                      ▓ │
│ ▓                    Reservations                              ▓ │
│ ▓                                                              ▓ │
│ ▓  ──────────────────────────────────────────────────────      ▓ │
│ ▓  © 2026 Divine Kitchen. All rights reserved.                 ▓ │
│ ▓                                                              ▓ │
│ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ │
└──────────────────────────────────────────────────────────────────┘
```

### Specs

| Property | Value |
|----------|-------|
| Background | `--bg-inverse` |
| Padding | `var(--space-16) 0 var(--space-8)` |
| Layout | 4-column grid on desktop, 2-column on tablet, stacked on mobile |

### Footer Logo
- Font: `--font-display`, `--text-xl`, `--weight-bold`
- Color: `--text-inverse`

### Description
- Font: `--font-body`, `--text-sm`
- Color: `--text-inverse` at 70% opacity
- Max-width: 280px

### Column Heading
- Font: `--font-body`, `--text-base`, `--weight-semibold`
- Color: `--text-inverse`
- Margin bottom: `--space-4`

### Links
- Font: `--font-body`, `--text-sm`
- Color: `--text-inverse` at 70% opacity, `--accent-primary` on hover
- Line spacing: `--space-3` between items

### Divider
- 1px `--color-charcoal-600`
- Margin: `--space-8` 0

### Copyright
- Font: `--font-body`, `--text-xs`
- Color: `--text-inverse` at 50% opacity

---

## 14. Testimonial Card

Customer review/testimonial display.

### Structure
```
┌─────────────────────────────────┐
│                                 │
│  "The best biryani I've ever    │
│   had in this city!"            │
│                                 │
│  ★★★★★                         │
│                                 │
│  ○ Priya Sharma                 │
│    Regular Customer             │
│                                 │
└─────────────────────────────────┘
```

### Specs

| Property | Value |
|----------|-------|
| Background | `--bg-surface` |
| Border-radius | `--radius-xl` |
| Shadow | `--shadow-sm` |
| Padding | `--space-8` |
| Border-left | 3px solid `--accent-primary` |

### Quote
- Font: `--font-body`, `--text-md`, italic
- Color: `--text-primary`
- `"` decorative open-quote in `--font-display`, `--text-4xl`, `--accent-primary`, opacity 20%

### Rating
- Star Rating component, default size
- Margin top: `--space-4`

### Author
- Avatar: 40px circle
- Name: `--font-body`, `--text-base`, `--weight-semibold`, `--text-primary`
- Role: `--font-body`, `--text-sm`, `--text-secondary`
- Layout: flex, avatar + text, gap `--space-3`
- Margin top: `--space-4`

---

## 15. Input Field

Form inputs for reservation, search, contact forms.

### Specs

| Property | Value |
|----------|-------|
| Height | 44px (default), 52px (large) |
| Background | `--bg-surface` |
| Border | 1px `--border-default` |
| Border-radius | `--radius-md` |
| Padding | `--space-3` `--space-4` |
| Font | `--font-body`, `--text-base` |
| Color | `--text-primary` |
| Placeholder | `--text-tertiary` |

### States

| State | Border | Shadow | Other |
|-------|--------|--------|-------|
| Default | `--border-default` | none | — |
| Hover | `--color-charcoal-200` | none | — |
| Focus | `--border-focus` | `--shadow-glow` | outline: none |
| Error | `--accent-danger` | 0 0 0 3px tomato-500 at 12% | Error message below in `--accent-danger`, `--text-sm` |
| Disabled | `--border-default` | none | Background `--color-charcoal-50`, opacity 0.6 |

### Label
- Font: `--font-body`, `--text-sm`, `--weight-medium`
- Color: `--text-secondary`
- Margin bottom: `--space-2`

---

## 16. Modal / Drawer

Used for dish detail views, reservation forms, cart drawer.

### Modal

| Property | Value |
|----------|-------|
| Background | `--bg-surface` |
| Border-radius | `--radius-xl` |
| Shadow | `--shadow-xl` |
| Max-width | 560px (small), 720px (default), 960px (large) |
| Padding | `--space-8` |
| Overlay | `--bg-overlay` |
| Z-index | `--z-modal` |

### Entrance Animation
- Overlay: Fade in, `--transition-normal`
- Modal: Fade + scale from 0.95, `--transition-elegant`

### Close Button
- Position: absolute, top `--space-4`, right `--space-4`
- Icon button variant, 36px
- `--text-secondary`, hover `--text-primary`

### Cart Drawer (Mobile)

| Property | Value |
|----------|-------|
| Position | Fixed, right 0, full height |
| Width | 100% (mobile), 400px (desktop) |
| Background | `--bg-surface` |
| Shadow | `--shadow-xl` (left side) |
| Z-index | `--z-modal` |
| Entrance | Slide from right, `--transition-elegant` |
