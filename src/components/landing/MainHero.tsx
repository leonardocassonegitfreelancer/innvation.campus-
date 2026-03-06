import { useState, useEffect } from "react";
import historicImg from "@/assets/historic-interior.jpg";
import seasideImg from "@/assets/seaside-interior.jpg";

export default function MainHero() {
  const [activeWorld, setActiveWorld] = useState<"historic" | "seaside">("historic");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  const bgImage = activeWorld === "historic" ? historicImg : seasideImg;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background images — crossfade */}
      <img
        src={historicImg}
        alt=""
        aria-hidden
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
          activeWorld === "historic" ? "opacity-100" : "opacity-0"
        }`}
        loading="eager"
      />
      <img
        src={seasideImg}
        alt=""
        aria-hidden
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
          activeWorld === "seaside" ? "opacity-100" : "opacity-0"
        }`}
        loading="eager"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/65" />

      {/* Gradient accent at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black/80 to-transparent" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Tagline */}
        <p
          className={`font-body text-[10px] md:text-xs uppercase tracking-[0.5em] text-white/50 mb-6 md:mb-8 transition-all duration-1000 delay-200 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Coworking · Offices · Event Spaces
        </p>

        {/* Brand name */}
        <h1
          className={`mb-4 md:mb-6 transition-all duration-1000 delay-400 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <span className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight">
            Innovation
          </span>
          <span className="text-primary text-6xl md:text-8xl lg:text-9xl font-display font-bold">/</span>
          <span className="font-body text-5xl md:text-7xl lg:text-8xl font-extralight text-white tracking-wide">
            Campus
          </span>
        </h1>

        {/* Subtitle */}
        <p
          className={`font-body text-lg md:text-xl lg:text-2xl font-light text-white/80 mb-6 transition-all duration-1000 delay-500 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          We turn workspaces into experiences
        </p>

        {/* Location line */}
        <p
          className={`font-display italic text-sm md:text-base text-white/50 mb-10 md:mb-14 leading-relaxed transition-all duration-1000 delay-600 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          In the heart of Málaga —<br />
          where history meets the Mediterranean.
        </p>

        {/* World toggle */}
        <div
          className={`flex items-center justify-center gap-4 mb-10 transition-all duration-1000 delay-700 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <button
            onClick={() => setActiveWorld("historic")}
            className={`font-display italic text-sm md:text-base tracking-wide px-4 py-2 transition-all duration-500 border-b-2 ${
              activeWorld === "historic"
                ? "text-white border-primary"
                : "text-white/40 border-transparent hover:text-white/70"
            }`}
          >
            Historic Center
          </button>
          <span className="text-primary text-xl font-bold">/</span>
          <button
            onClick={() => setActiveWorld("seaside")}
            className={`font-body font-light text-sm md:text-base tracking-wider px-4 py-2 transition-all duration-500 border-b-2 ${
              activeWorld === "seaside"
                ? "text-white border-primary"
                : "text-white/40 border-transparent hover:text-white/70"
            }`}
          >
            Seaside
          </button>
        </div>

        {/* CTA */}
        <a
          href="#locations"
          className={`inline-block bg-primary text-primary-foreground font-body text-sm md:text-base uppercase tracking-[0.3em] px-10 py-4 hover:bg-primary/90 transition-all duration-500 delay-800 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Find Your Space
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-white/40 text-[10px] font-body uppercase tracking-[0.4em]">Scroll</span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-white/40 to-transparent" />
      </div>
    </section>
  );
}
