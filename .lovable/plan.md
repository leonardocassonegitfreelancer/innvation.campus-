# Plan: 3 Changes

## 1. add the hero section:   
add this hero section

```
COWORKING · OFFICES · EVENT SPACES          (small caps tagline)

INNOVATION/CAMPUS                            (massive brand name)
We turn workspaces into experiences          (subtitle)

In the heart of Málaga:                      (location line)
where history meets the Mediterranean.

        [ FIND YOUR SPACE ]                  (red CTA button)
```

- Full-viewport background using one of the existing images with a dark overlay
- The two-world split moves to the Locations section instead
- Animated gradient accent behind the brand name (warm-to-cool shift via CSS/JS)
- Entrance animations: staggered fade-in-up for each text line

## 2. Mobile section after the hero: create aToggle Switch

Replace the hamburger menu on mobile with a **toggle switch** for the duality concept  
  
3. Animated Color Gradients (JavaScript-driven)

Add dynamic, living gradients across multiple sections using JS `requestAnimationFrame`:

- **Hero**: A slow-moving gradient that shifts between warm amber and cool blue behind the overlay, creating a "breathing" effect
- **About section**: The existing static CSS gradient becomes animated — colors slowly shift as time passes
- **Quote section**: Subtle pulsing gradient glow behind the quote text
- Implementation: A `useAnimatedGradient` hook that updates CSS custom properties (`--grad-angle`, `--grad-color-1`, etc.) on each frame, applied via inline styles. Performant because it only touches CSS variables, not re-renders.  
  
create a mix of colours that recalls both of the ambients for the neutral background not the plain white but siomething that feels likehistory and the see toghether a gradient would be the best idea here 

### Technical Details

**Files to modify:**

- `src/components/landing/HeroSection.tsx` — complete rewrite with new layout + animated gradient canvas
- `src/components/landing/Navbar.tsx` — add toggle switch for mobile
- `src/hooks/useAnimatedGradient.ts` — new hook for JS-driven gradient animation
- `src/index.css` — add gradient animation keyframes and utility classes

**New hook `useAnimatedGradient.ts`:**

- Uses `useRef` + `requestAnimationFrame` to update a container's CSS variables
- Cycles gradient angle and interpolates between warm (amber/red) and cool (blue/teal) color stops
- Returns a ref to attach to the animated element