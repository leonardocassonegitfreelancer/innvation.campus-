import { useEffect, useState } from "react";
import { useAnimatedGradient } from "@/hooks/useAnimatedGradient";
import historicImg from "@/assets/historic-interior.jpg";

export default function HeroSection() {
  const gradientRef = useAnimatedGradient({
    speed: 0.25,
    warmHue: 20,
    coolHue: 210,
    saturation: 55,
    lightness: 15,
  });

  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      ref={gradientRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background:
          "linear-gradient(var(--grad-angle, 135deg), var(--grad-color-1, hsl(20,55%,15%)), var(--grad-color-2, hsl(210,55%,20%)), var(--grad-color-3, hsl(25,45%,10%)))",
      }}
    >
      {/* Background image */}
      <img
        src={historicImg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-overlay"
        loading="eager"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Tagline */}
        <p
          className={`font-body text-[10px] md:text-xs uppercase tracking-[0.5em] text-white/50 mb-8 md:mb-12 transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          Coworking · Offices · Event Spaces
        </p>

        {/* Brand name */}
        <h1
          className={`mb-6 md:mb-8 transition-all duration-1000 delay-200 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="font-display text-5xl md:text-7xl lg:text-9xl font-bold text-white tracking-tight">
            Innovation
          </span>
          <span className="text-primary font-display text-6xl md:text-8xl lg:text-[10rem] font-bold leading-none">
            /
          </span>
          <span className="font-body text-5xl md:text-7xl lg:text-9xl font-extralight text-white tracking-wider">
            Campus
          </span>
        </h1>

        {/* Subtitle */}
        <p
          className={`font-body text-lg md:text-2xl lg:text-3xl text-white/80 font-light mb-8 md:mb-12 transition-all duration-1000 delay-500 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          We turn workspaces into{" "}
          <em className="text-primary not-italic font-medium">experiences</em>
        </p>

        {/* Location line */}
        <p
          className={`font-display text-base md:text-lg text-white/50 italic leading-relaxed mb-10 md:mb-14 transition-all duration-1000 delay-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          In the heart of Málaga:
          <br />
          where history meets the Mediterranean.
        </p>

        {/* CTA */}
        <div
          className={`transition-all duration-1000 delay-[900ms] ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <a
            href="#locations"
            className="inline-block bg-primary text-primary-foreground font-body text-sm md:text-base uppercase tracking-[0.3em] px-10 py-4 hover:bg-primary/90 transition-all duration-500 animate-pulse-red"
          >
            Find Your Space
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-white/40 text-[10px] font-body uppercase tracking-[0.4em]">
          Scroll
        </span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-white/40 to-transparent" />
      </div>
    </section>
  );
}
