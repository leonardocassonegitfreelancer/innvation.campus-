import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useAnimatedGradient } from "@/hooks/useAnimatedGradient";

export default function AboutSection() {
  const { ref: r1, isVisible: v1 } = useScrollAnimation();
  const { ref: r2, isVisible: v2 } = useScrollAnimation();
  const { ref: r3, isVisible: v3 } = useScrollAnimation();
  const gradientRef = useAnimatedGradient({
    speed: 0.2,
    warmHue: 25,
    coolHue: 210,
    saturation: 40,
    lightness: 12,
  });

  return (
    <section
      id="about"
      ref={gradientRef}
      className="relative py-24 md:py-36 overflow-hidden"
      style={{
        background:
          "linear-gradient(var(--grad-angle, 180deg), var(--grad-color-1, hsl(25,40%,12%)), var(--grad-color-2, hsl(210,40%,17%)), var(--grad-color-3, hsl(20,30%,8%)))",
      }}
    >
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div ref={r1} className={`scroll-animate ${v1 ? "visible" : ""}`}>
          <p className="font-body text-xs uppercase tracking-[0.4em] text-primary mb-6">
            Our Philosophy
          </p>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
            <span className="text-historic-text">Two spaces.</span>
            <br />
            <span className="text-seaside-bg">Two rhythms.</span>
            <br />
            <span className="text-primary">One mission.</span>
          </h2>
        </div>

        <div ref={r2} className={`scroll-animate ${v2 ? "visible" : ""} mt-8`} style={{ transitionDelay: "0.2s" }}>
          <p className="font-body text-lg md:text-xl leading-relaxed max-w-2xl mx-auto text-historic-muted">
            Some ideas need stone walls and silence to take root.
            Others need open sky and sea breeze to take flight.
          </p>
        </div>

        <div ref={r3} className={`scroll-animate ${v3 ? "visible" : ""} mt-6`} style={{ transitionDelay: "0.4s" }}>
          <p className="font-body text-lg md:text-xl leading-relaxed max-w-2xl mx-auto text-seaside-muted">
            Innovation/Campus gives you both — two coworking spaces in Málaga,
            each with its own personality, designed for the way{" "}
            <em className="text-primary font-medium">you</em> work best.
          </p>
        </div>

        <div className="mt-16 flex justify-center">
          <div className="w-[2px] h-20 bg-gradient-to-b from-primary to-transparent" />
        </div>
      </div>
    </section>
  );
}
