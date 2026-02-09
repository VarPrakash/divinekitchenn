# Divine Kitchen — Style Guide

> A warm, inviting, and appetite-driven visual language for a restaurant and food ordering platform.

---

## 1. Brand Essence

**Personality:** Warm, confident, artisanal, welcoming.
**Tone:** Conversational but polished — like a chef who greets you by name.
**Promise:** "We Serve The Best You Love."

Divine Kitchen's design should feel like stepping into a sunlit kitchen where something delicious is always simmering. Every surface, color, and typographic choice should evoke warmth, craft, and appetite.

---

## 2. Color System

All colors are defined in `design-tokens.css` and `design-tokens.json`. Use **semantic tokens** (not primitives) in all component code.

### 2.1 Primary Palette

| Role | Token | Hex | Usage |
|------|-------|-----|-------|
| **Saffron** (Brand) | `--accent-primary` | `#E8890C` | CTAs, buttons, active states, key highlights |
| **Cream** (Background) | `--bg-primary` | `#FFF8F0` | Page background, warmth foundation |
| **Charcoal** (Text) | `--text-primary` | `#2D2D2D` | Headings, body text, high-contrast elements |

### 2.2 Supporting Palette

| Role | Token | Hex | Usage |
|------|-------|-----|-------|
| Olive | `--accent-success` | `#6B7F2A` | Availability, dietary labels, success |
| Tomato | `--accent-danger` | `#D94432` | Errors, spicy indicators, out-of-stock |
| Cream 200 | `--bg-secondary` | `#FFF1E0` | Alternating section backgrounds |
| White | `--bg-surface` | `#FFFFFF` | Cards, inputs, elevated surfaces |
| Charcoal 800 | `--bg-inverse` | `#1A1A1A` | CTA banners, footer, dark sections |

### 2.3 Color Do's and Don'ts

**Do:**
- Use `--bg-primary` (cream) as the default page background — never stark white.
- Apply saffron accents sparingly to draw the eye to actions.
- Use the full saffron scale for hover/active/focus state progressions.
- Pair dark sections (`--bg-inverse`) with `--text-inverse` for high contrast.

**Don't:**
- Use saffron as a background for large areas — it overwhelms.
- Mix olive and tomato in adjacent elements (visual clash).
- Use raw charcoal-900 for body text — it's too harsh. Use charcoal-700.
- Apply color without ensuring WCAG AA contrast (4.5:1 for text, 3:1 for large text).

---

## 3. Typography

### 3.1 Font Stack

| Role | Font | Token | Weight(s) |
|------|------|-------|-----------|
| **Display** | Playfair Display | `--font-display` | 400, 700, 900 |
| **Heading** | DM Serif Display | `--font-heading` | 400 |
| **Body** | DM Sans | `--font-body` | 400, 500, 700 |
| **Accent** | Caveat | `--font-accent` | 400, 700 |
| **Mono** | JetBrains Mono | `--font-mono` | 400, 500 |

**Load via Google Fonts:**
```
Playfair Display:ital,wght@0,400;0,700;0,900;1,400
DM Serif Display
DM Sans:ital,wght@0,400;0,500;0,700
Caveat:wght@400;700
JetBrains Mono:wght@400;500
```

### 3.2 Type Scale

| Name | Size | Use Case |
|------|------|----------|
| `--text-5xl` | 64px | Splash screens, landing hero numbers |
| `--text-4xl` | 52px | Hero headline ("We Serve The Best You Love") |
| `--text-3xl` | 40px | Primary page headings |
| `--text-2xl` | 32px | Section headings ("Popular Dishes") |
| `--text-xl` | 24px | Subsection headings, card titles |
| `--text-lg` | 20px | Dish names, prominent labels |
| `--text-md` | 18px | Emphasized body, lead paragraphs |
| `--text-base` | 16px | Standard body text |
| `--text-sm` | 14px | Metadata, captions, small labels |
| `--text-xs` | 12px | Fine print, badge text |

### 3.3 Typographic Recipes

**Hero Headline:**
```css
font-family: var(--font-display);
font-size: var(--text-4xl);
font-weight: var(--weight-black);
line-height: var(--leading-tight);
letter-spacing: var(--tracking-tight);
color: var(--text-primary);
```

**Section Heading:**
```css
font-family: var(--font-heading);
font-size: var(--text-2xl);
font-weight: var(--weight-regular);
line-height: var(--leading-snug);
color: var(--text-primary);
```

**Body:**
```css
font-family: var(--font-body);
font-size: var(--text-base);
font-weight: var(--weight-regular);
line-height: var(--leading-normal);
color: var(--text-primary);
```

**Handwritten Accent (badges, annotations):**
```css
font-family: var(--font-accent);
font-size: var(--text-lg);
font-weight: var(--weight-bold);
color: var(--accent-primary);
```

**Price Display:**
```css
font-family: var(--font-mono);
font-size: var(--text-lg);
font-weight: var(--weight-medium);
color: var(--text-primary);
```

### 3.4 Typography Rules

- Headings use serif fonts (Playfair Display or DM Serif Display) — never sans-serif.
- Body text always uses DM Sans.
- Maximum line length: 65–75 characters for readability.
- Use Caveat **only** for decorative labels (e.g., "Chef's Pick!", "New!") — never for body or headings.
- Prices always use `--font-mono` for tabular alignment.

---

## 4. Spacing & Layout

### 4.1 Spacing Philosophy

All spacing derives from a **4px base unit** (`0.25rem`). Use the token scale:

| Token | Value | Common Usage |
|-------|-------|-------------|
| `--space-2` | 8px | Inline gaps, icon margins |
| `--space-3` | 12px | Tight card padding |
| `--space-4` | 16px | Standard component padding |
| `--space-6` | 24px | Card internal padding, grid gutter |
| `--space-8` | 32px | Between related sections |
| `--space-12` | 48px | Section padding (mobile) |
| `--space-16` | 64px | Section padding (desktop) |
| `--space-20` | 80px | Major section separation |
| `--space-24` | 96px | Hero vertical padding |

### 4.2 Grid System

- **12-column grid**, max-width `1200px`, centered.
- Gutter: `24px` (`--grid-gutter`).
- Page margin: `24px` mobile, `48px` desktop.
- Dish cards: 4 columns on desktop, 2 on tablet, 1 on mobile.
- Chef cards: 4 columns on desktop, 2 on tablet, 1 on mobile.
- Content sections: 8–10 columns centered for text-heavy areas.

### 4.3 Breakpoints

| Name | Value | Target |
|------|-------|--------|
| `sm` | 640px | Mobile landscape |
| `md` | 768px | Tablet portrait |
| `lg` | 1024px | Tablet landscape / small desktop |
| `xl` | 1280px | Standard desktop |
| `2xl` | 1440px | Wide desktop |

---

## 5. Imagery & Photography

### 5.1 Photo Style

- **Warm lighting** — golden hour feel. No cold/blue-toned food photography.
- **Overhead or 45° angle** for plated dishes.
- **Shallow depth of field** for hero shots — food sharp, background softly blurred.
- **Natural backgrounds** — wood tables, linen, ceramic plates. No sterile white backgrounds.
- **Steam/motion** encouraged in hero imagery (pouring sauce, rising steam).

### 5.2 Image Treatments

- Dish card images: **1:1 aspect ratio**, cropped tightly to the plate.
- Hero images: **16:9 or freeform**, with room for overlaid text.
- Chef portraits: **1:1**, cropped at shoulders, warm neutral backgrounds.
- All images should be served in **WebP** with JPEG fallback, lazy-loaded below the fold.

### 5.3 Decorative Elements

- Subtle **circular crop frames** with thin saffron borders on featured dishes.
- **Organic blob shapes** (soft, rounded SVGs) behind hero images — never hard geometric frames.
- Light **grain texture overlay** on hero sections for warmth (opacity 3–5%).

---

## 6. Iconography

- Style: **Rounded line icons**, 1.5px–2px stroke weight.
- Size: 20px (inline), 24px (standard), 32px (feature).
- Color: Inherit from text color in context. Saffron for interactive states.
- Recommended library: **Lucide** or **Phosphor** (rounded variant).
- Star ratings: Filled stars use `--accent-rating` (#F5A623).

---

## 7. Motion & Animation

### 7.1 Principles

- Motion should feel **organic and appetizing** — gentle, never robotic.
- Use ease curves that mimic natural deceleration (`--ease-elegant`).
- Stagger entrance animations for card grids (50–80ms delay between items).
- Never animate for animation's sake — every motion should guide attention or provide feedback.

### 7.2 Standard Animations

| Action | Duration | Easing | Property |
|--------|----------|--------|----------|
| Button hover | 150ms | standard | background-color, transform |
| Card hover lift | 250ms | standard | transform, box-shadow |
| Page section enter | 600ms | elegant | opacity, transform |
| Modal open | 400ms | elegant | opacity, transform |
| Toast notification | 500ms | spring | transform, opacity |
| Skeleton shimmer | 1500ms | linear | background-position |

### 7.3 Scroll-Triggered Entrances

- Sections fade in + translate up 24px on scroll into view.
- Dish cards stagger with 60ms delay between each card.
- Use `IntersectionObserver` — do not rely on scroll position calculations.

---

## 8. Component Patterns

Detailed specifications are in `COMPONENT_SPECS.md`. Key principles:

### 8.1 Cards

- Always white (`--bg-surface`) on cream backgrounds.
- Border-radius: `--radius-lg` (12px).
- Shadow: `--shadow-sm` at rest, `--shadow-md` on hover.
- Hover: Lift 4px (`translateY(-4px)`).
- Internal padding: `--space-4` to `--space-6`.

### 8.2 Buttons

- Primary: Saffron background, white text, `--radius-md`.
- Secondary: Transparent with saffron border and saffron text.
- Ghost: No border, saffron text, subtle hover background.
- All buttons: minimum 44px touch target, `--weight-semibold`.

### 8.3 Forms & Inputs

- Background: `--bg-surface`.
- Border: 1px `--border-default`, focus ring `--border-focus` with `--shadow-glow`.
- Border-radius: `--radius-md`.
- Padding: `--space-3` vertical, `--space-4` horizontal.
- Label: `--text-sm`, `--weight-medium`, `--text-secondary`.

---

## 9. Accessibility

- All text must meet **WCAG AA** contrast ratio (4.5:1 body, 3:1 large text).
- Focus indicators: 2px saffron outline with 2px offset — never remove `:focus-visible`.
- Touch targets: Minimum 44x44px.
- Reduced motion: All animations honor `prefers-reduced-motion: reduce` (tokens handle this).
- Alt text: All food images must describe the dish name and presentation.
- Semantic HTML: Use `<nav>`, `<main>`, `<section>`, `<article>` appropriately.
- ARIA: Cards use `role="article"`, star ratings use `aria-label="X out of 5 stars"`.

---

## 10. Voice & Copy Guidelines

- **Headlines:** Short, warm, appetite-triggering. Prefer active voice.
  - Good: "We Serve The Best You Love"
  - Avoid: "Our comprehensive menu features a variety of options"
- **Descriptions:** 1–2 sentences max. Focus on ingredients and sensory language.
  - Good: "Tender chicken shawarma wrapped in warm flatbread with garlic sauce."
  - Avoid: "A type of food typically made from an unleavened dough."
- **CTAs:** Direct, inviting, personal.
  - "Reserve Your Table" / "Add to Cart" / "Explore the Menu"
- **Pricing:** Always display with currency symbol and two decimals (₹35.00).
