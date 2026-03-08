

## Fix Hero Typography

The current hero mixes too many font families and weights inconsistently:
- "Innovation" → Playfair Display bold
- "/" → Playfair Display bold (huge)  
- "Campus" → Inter extralight (with wide tracking)
- Tagline → Playfair Display italic

This creates a disjointed feel. The fix: **unify the title under one consistent typographic system**.

### Changes to `MainHero.tsx`

1. **Title "Innovation / Campus"** — Use Playfair Display for both words, same weight (bold), consistent sizing. Remove the oversized "/" slash and the font-body on "Campus".

2. **Slash "/"** — Keep it but make it the same font-display, same size as the rest, colored primary. No need for it to be 1-2 sizes bigger.

3. **Tagline** — Keep font-display italic but bump down to a more refined size, remove the `font-normal` (use `font-light` or default).

4. **Overall cleanup** — Ensure only two fonts are used: `font-display` (Playfair) for headings/tagline, `font-body` (Inter) for small labels (locations, services, CTA).

### Specific line changes

- Line 34: "Innovation" — keep as-is (font-display bold)
- Line 38: "/" — reduce to same size as "Innovation" (`text-5xl md:text-6xl lg:text-7xl xl:text-8xl`)
- Line 39: "Campus" — change from `font-body font-extralight tracking-[0.15em]` to `font-display font-bold tracking-tight` matching "Innovation"
- Line 54: Tagline — change `font-normal` to `font-light`, reduce to `text-lg md:text-xl lg:text-2xl`

