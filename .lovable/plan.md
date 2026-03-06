

## Plan: Simplified Hero Section

**Goal:** Strip the hero down to essentials — clean, minimal, impactful. Remove the world toggle and crossfade complexity.

### New Structure (top to bottom)

1. **Single background image** (historic-interior) with dark overlay
2. **Location dots:** `Málaga · Olbia · Ancona` — small uppercase tracking text
3. **Brand name:** `Innovation/Campus` — same font treatment as current
4. **Subtitle:** `We turn workspaces into experiences`
5. **Service line:** `Offices · Coworking · Events` — small muted text below subtitle
6. **CTA button:** `Find Your Space` — styled like existing buttons (`bg-primary text-primary-foreground uppercase tracking-widest`)
7. **Scroll indicator** — keep existing bounce animation

### What gets removed
- Two-image crossfade system (historic/seaside toggle)
- World toggle buttons
- The `seasideImg` import (no longer needed in hero)
- Staggered delay classes simplified

### File: `src/components/landing/MainHero.tsx`
- Remove `activeWorld` state, keep only `loaded` for entrance animation
- Single `<img>` for background
- Simplified content stack with entrance animations
- CTA links to `#contact` matching other CTAs

### Style
- CTA matches the Contact section's button: `bg-primary text-primary-foreground font-body uppercase tracking-widest` with `rounded-md`
- Clean vertical rhythm, no excessive delays

