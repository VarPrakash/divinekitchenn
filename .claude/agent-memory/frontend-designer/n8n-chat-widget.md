# n8n Chat Widget -- Styling Notes

## How It Works
- `@n8n/chat` package, loaded dynamically in `src/components/N8nChat.tsx`
- Renders into the DOM (NOT Shadow DOM), so global CSS overrides apply
- Styled via CSS custom properties (`--chat--*`) on `:root` plus `.n8n-chat` class selectors
- Widget CSS imported via `@n8n/chat/style.css` in the component file

## Available CSS Custom Properties
See the full list in the user's prompt or n8n docs. Key ones:
- `--chat--color--primary`, `--chat--color--secondary`
- `--chat--toggle--*` (background, hover, active, color, size)
- `--chat--header--*` (background, color)
- `--chat--message--*` (bot/user background, font-size)
- `--chat--window--*` (width, height, z-index)
- `--chat--textarea--*`, `--chat--button--*`

## Design System Mapping Decisions
- **Chat window** = Modal pattern (radius-xl, shadow-lg, bg-surface)
- **Toggle button** = Floating Cart Indicator pattern (56px, radius-full, shadow-lg, scale on hover)
- **Header** = Inverse pattern (charcoal-800 bg like footer/CTA banner)
- **Header title** = font-heading (DM Serif Display) at text-lg
- **Messages** = font-body (DM Sans), leading-normal (1.6)
- **Message bubbles** = radius-lg with asymmetric tail corners
- **Input** = Input Field spec (radius-md, border-default, focus glow)
- **Send button** = Icon button variant (radius-md, 44px min touch target)
- **Messages area background** = cream-100 (warm bg-primary, not stark white)
- **z-index** = 450 (between modal=400 and toast=500)

## Key Violations Fixed (2026-02-09)
1. No border-radius on chat window (added radius-xl)
2. No box-shadow on chat window (added shadow-lg)
3. No font-family anywhere (added DM Sans body, DM Serif Display heading)
4. Header was charcoal-700 instead of charcoal-800 (bg-inverse)
5. Toggle was 64px default (reduced to 56px per floating indicator spec)
6. No hover/active transitions on toggle (added scale + shadow progression)
7. No input focus state styling (added border-focus + shadow-glow)
8. No reduced-motion handling (added @media query)
9. Message font-size was 0.9375rem (changed to 1rem/text-base)
10. Toggle icon was cream-50 (changed to white for max contrast)
11. Missing message bubble border-radius (added asymmetric with tail)
12. No scrollbar styling (added thin charcoal scrollbar)
13. No "New Conversation" button styling (added primary button pattern)
14. z-index was default 9999 (set to 450 within the design system scale)

## Copy Changes in N8nChat.tsx
- subtitle: "We're here to help you 24/7." -> "Your personal concierge, anytime." (warmer, matches brand voice)
- getStarted: "New Conversation" -> "Start a Conversation" (more inviting CTA)
