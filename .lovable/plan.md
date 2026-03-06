

## Plan: Mobile Toggle for Services Section

**Problem:** On mobile, scrolling through 8 tall service cards (4 Business + 4 Individual) is too long.

**Solution:** On mobile only, replace the two stacked grids with two red toggle buttons ("For Businesses" / "For Individuals") that switch which set of 4 cards is visible. Desktop stays unchanged.

### Implementation

**File: `src/components/landing/ServicesSection.tsx`**

1. Import `useState` and `useIsMobile` hook
2. Add `activeTab` state (`"business"` | `"individual"`)
3. On mobile (`md:` breakpoint and below):
   - Render two side-by-side buttons styled like the "Book a Tour" button (red `bg-primary` with white text)
   - Active button is solid red; inactive is outlined/ghost
   - Below the buttons, render only the selected category's 4 cards in a single-column grid
4. On desktop (`md:` and above): keep the existing layout with both sections visible

### UI Details
- Buttons sit centered below the "Services" heading, with equal width
- Smooth transition when switching categories
- Cards render in a `grid-cols-1 sm:grid-cols-2` grid on mobile
- Desktop layout (`lg:grid-cols-4` with both sections) is completely untouched using responsive `hidden md:block` / `md:hidden` classes

