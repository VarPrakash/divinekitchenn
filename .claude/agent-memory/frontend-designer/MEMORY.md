# Frontend Designer Agent Memory

## Project: Divine Kitchen
- Next.js 16.1.6, Tailwind v4 (`@theme` block in globals.css), React 19
- Design docs live in `docs/design/` (STYLE_GUIDE.md, design-tokens.json, COMPONENT_SPECS.md, design-tokens.css)

## Design Token Mapping (Key Hex Values)
| Token | Hex | Usage |
|-------|-----|-------|
| saffron-500 | #E8890C | accent-primary, CTAs, buttons |
| saffron-600 | #CC6907 | accent-primary-hover |
| saffron-400 | #F5A623 | border-focus, rating |
| cream-50 | #FFFDF9 | text-inverse |
| cream-100 | #FFF8F0 | bg-primary (page background) |
| cream-200 | #FFF1E0 | bg-secondary |
| charcoal-700 | #2D2D2D | text-primary |
| charcoal-800 | #1A1A1A | bg-inverse (footer, header bars) |
| charcoal-100 | #E8E8E8 | border-default |
| charcoal-300 | #A3A3A3 | text-tertiary |

## Radius Scale
- sm: 4px, md: 8px (buttons/inputs), lg: 12px (cards), xl: 16px (modals), 2xl: 24px, full: 9999px

## Shadow Scale
- sm: subtle rest state, md: hover/dropdown, lg: modals/floating, xl: hero, glow: saffron focus

## Font Families
- Display: Playfair Display (hero headlines)
- Heading: DM Serif Display (section headings, card titles)
- Body: DM Sans (body text, UI)
- Accent: Caveat (decorative labels only)
- Mono: JetBrains Mono (prices)

## z-index Scale
- base: 0, dropdown: 100, sticky: 200, overlay: 300, modal: 400, toast: 500

## n8n Chat Widget Styling (completed 2026-02-09)
- See `n8n-chat-widget.md` for detailed notes
- CSS overrides in `src/app/globals.css` (lines ~222-473)
- Component config in `src/components/N8nChat.tsx`
- Uses CSS custom properties (`--chat--*`) plus `.n8n-chat` selector overrides
- Widget does NOT use Shadow DOM, so global CSS selectors work

## Common Patterns Observed
- Navbar: fixed, bg-white/90 + backdrop-blur, shadow-soft, z-50
- Footer: bg-charcoal-800, text-cream-50, 4-col grid
- Modals: z-[400], charcoal-900/60 overlay + backdrop-blur, rounded-2xl, shadow-dramatic
- Buttons: saffron-500 bg, white text, rounded-lg, hover:-translate-y-0.5 + saffron-600
- Inputs: white bg, border-charcoal-100, rounded-lg, focus:border-saffron-400 + shadow-glow
