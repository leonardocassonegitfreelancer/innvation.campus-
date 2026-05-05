import { useRef } from "react";

// Scroll animations disabled during Astro migration.
// All components render as visible by default.
// Animations will be re-added via CSS/data-animate attributes.
export function useScrollAnimation(_threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  return { ref, isVisible: true };
}
