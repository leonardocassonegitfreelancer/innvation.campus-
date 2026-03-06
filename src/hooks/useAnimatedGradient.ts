import { useEffect, useRef } from "react";

interface GradientConfig {
  speed?: number; // lower = slower, default 0.3
  warmHue?: number; // default 25 (amber)
  coolHue?: number; // default 200 (blue)
  saturation?: number; // default 60
  lightness?: number; // default 20
}

export function useAnimatedGradient(config: GradientConfig = {}) {
  const ref = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number>(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const {
      speed = 0.3,
      warmHue = 25,
      coolHue = 200,
      saturation = 60,
      lightness = 20,
    } = config;

    let startTime: number | null = null;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = (timestamp - startTime) / 1000;

      // Oscillate between 0 and 1
      const t = (Math.sin(elapsed * speed) + 1) / 2;
      // Secondary wave for angle
      const t2 = (Math.sin(elapsed * speed * 0.7 + 1) + 1) / 2;

      // Interpolate hue between warm and cool
      const hue1 = warmHue + t * (coolHue - warmHue);
      const hue2 = coolHue - t * (coolHue - warmHue);

      // Rotate angle slowly
      const angle = 135 + t2 * 90;

      el.style.setProperty("--grad-angle", `${angle}deg`);
      el.style.setProperty("--grad-color-1", `hsl(${hue1}, ${saturation}%, ${lightness}%)`);
      el.style.setProperty("--grad-color-2", `hsl(${hue2}, ${saturation}%, ${lightness + 5}%)`);
      el.style.setProperty(
        "--grad-color-3",
        `hsl(${warmHue + t * 15}, ${saturation - 10}%, ${lightness - 5}%)`
      );

      frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameRef.current);
  }, [config]);

  return ref;
}
