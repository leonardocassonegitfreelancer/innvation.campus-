

# Innovation/Campus Landing Page — Implementation Plan

## Architecture

Single-page landing built in `src/pages/Index.tsx` with section components in `src/components/landing/`. AI images generated at build time via the Lovable image API, saved as base64 in component files or as static assets.

## Files to Create

### 1. `src/hooks/useScrollAnimation.ts`
Custom hook using IntersectionObserver for scroll-triggered fade/slide animations.

### 2. `src/components/landing/Navbar.tsx`
Sticky nav with "Innovation/Campus" logo, section links, red accent CTA. Hamburger menu on mobile via Sheet component.

### 3. `src/components/landing/HeroSection.tsx`
Split-screen hero — left: Historic Center (dark warm bg `#1a1a1a`, serif font, AI image of stone-walled coworking with warm lighting), right: Seaside (light blue bg `#f0f7ff`, sans-serif, AI image of bright ocean-view workspace). Brand name centered across both halves with red `#C0392B` slash. On mobile: stacks vertically with smooth scroll transition. Subtle parallax on images.

### 4. `src/components/landing/AboutSection.tsx`
"Two spaces. Two rhythms. One mission." Background gradient transitions from warm amber to cool blue as you scroll. Text about how different environments unlock different creativity.

### 5. `src/components/landing/ServicesSection.tsx`
**Same services offered at both locations** — displayed as a unified grid of service cards (hot desks, private offices, meeting rooms, high-speed wifi, printing, community events, rooftop terrace, kitchen/café). Each card with an icon. Two callout badges:
- "Meeting rooms shine at Historic Center" (warm-styled badge)
- "The terrace is unbeatable at Seaside" (cool-styled badge)

### 6. `src/components/landing/QuoteSection.tsx`
Full-width dark section with a cinematic quote about creativity and place. Large serif text, red `#C0392B` accent on key words. The neutral ground between both worlds.

### 7. `src/components/landing/LocationsSection.tsx`
Two immersive location cards side by side (stacked on mobile). Each with AI-generated hero image, name, address in Málaga, key highlights, atmosphere description. Historic: stone textures, warm palette. Seaside: ocean blues, airy feel. Red CTA buttons on both.

### 8. `src/components/landing/FAQSection.tsx`
Accordion (using existing Accordion UI component) with 6-8 questions about pricing, membership, trial days, availability. Red accent on triggers.

### 9. `src/components/landing/ContactSection.tsx`
Form with name, email, message fields + a toggle/radio to pick which location interests them. Background subtly shifts warm↔cool based on selection. Red submit button.

### 10. `src/components/landing/Footer.tsx`
Dark footer with both locations' addresses, social links, Innovation/Campus logo. Red accents.

### 11. `src/index.css` updates
Add CSS custom properties for the two-world color system:
- Historic palette: `--historic-bg`, `--historic-text`, `--historic-accent`
- Seaside palette: `--seaside-bg`, `--seaside-text`, `--seaside-accent`
- Brand red: `--brand-red: 6 73% 37%` (HSL of #C0392B)
- Custom font imports (serif for historic sections)

### 12. `tailwind.config.ts` updates
Add brand colors, custom animations (fade-in-up, slide-in-left/right, color-shift), and font families.

### 13. AI-Generated Images (4 images)
Generated via Lovable's image API during implementation:
1. Historic coworking interior — stone walls, warm amber lighting, wooden furniture, intimate atmosphere
2. Seaside coworking interior — glass walls, ocean view, bright modern furniture, open space with terrace
3. Historic exterior / Málaga old town street
4. Seaside exterior / beachfront building

Images saved to Supabase storage or inlined as optimized base64.

## Design Tokens
- **Brand red**: `#C0392B` — buttons, dividers, accents, the "red thread"
- **Historic**: bg `#1a1a1a`→`#2c1810`, text `#f5e6d3`, serif font
- **Seaside**: bg `#f0f7ff`→`#e8f4f8`, text `#1e3a5f`, sans-serif font
- **Neutral**: dark `#111111` for quote/footer sections

## Motion
- Scroll-triggered fade-in animations via IntersectionObserver
- Background color temperature transitions between sections using CSS gradients
- Hover effects on service cards and location cards
- Smooth scroll navigation

## Responsive Strategy
- Split layouts → stacked on mobile (below `md` breakpoint)
- Hamburger nav on mobile
- Touch-friendly tap targets
- Images scale proportionally

