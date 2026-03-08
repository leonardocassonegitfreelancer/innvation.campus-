import { useState, useEffect } from "react";
import heroImg from "@/assets/palace-branding-wall.jpg";

export default function MainHero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 200);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative min-h-screen bg-[hsl(var(--neutral-dark))] overflow-hidden">
      {/* Editorial grid: text left, image right */}
      <div className="relative z-10 min-h-screen flex flex-col lg:grid lg:grid-cols-2">
        
        {/* Left — Text column */}
        <div className="flex flex-col justify-center px-8 md:px-16 lg:px-20 xl:px-28 py-24 lg:py-0 order-2 lg:order-1">
          {/* Locations */}
          <p
            className={`font-body text-[10px] md:text-[11px] uppercase tracking-[0.5em] text-white/40 mb-8 md:mb-10 transition-all duration-1000 delay-200 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Málaga · Olbia · Ancona
          </p>

          {/* Brand */}
          <h1
            className={`mb-6 md:mb-8 transition-all duration-1000 delay-400 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="block font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white tracking-tight leading-[0.9]">
              Innovation
            </span>
            <span className="block mt-2">
              <span className="text-primary text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-display font-bold leading-none">/</span>
              <span className="font-body text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extralight text-white/90 tracking-[0.15em] leading-none">
                Campus
              </span>
            </span>
          </h1>

          {/* Divider */}
          <div
            className={`w-12 h-px bg-primary mb-6 md:mb-8 transition-all duration-1000 delay-500 ${
              loaded ? "opacity-100 w-12" : "opacity-0 w-0"
            }`}
          />

          {/* Tagline */}
          <p
            className={`font-display italic text-xl md:text-2xl lg:text-3xl font-normal text-white/70 mb-4 leading-snug transition-all duration-1000 delay-600 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            We turn workspaces<br className="hidden md:block" /> into experiences
          </p>

          {/* Services */}
          <p
            className={`font-body text-[10px] md:text-xs uppercase tracking-[0.4em] text-white/30 mb-10 md:mb-14 transition-all duration-1000 delay-700 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Offices · Coworking · Events
          </p>

          {/* CTA */}
          <a
            href="#contact"
            className={`inline-flex items-center gap-3 self-start border-b border-white/30 text-white font-body text-xs md:text-sm uppercase tracking-[0.3em] pb-2 hover:border-primary hover:text-primary transition-all duration-500 delay-800 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Find Your Space
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
          </a>
        </div>

        {/* Right — Image column */}
        <div className="relative order-1 lg:order-2 h-[50vh] lg:h-auto">
          <img
            src={heroImg}
            alt="Innovation Campus coworking space in Málaga historic center"
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-[1.5s] delay-100 ${
              loaded ? "opacity-100 scale-100" : "opacity-0 scale-105"
            }`}
            loading="eager"
          />
          {/* Subtle gradient fade into text area */}
          <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--neutral-dark))] via-transparent to-transparent lg:bg-gradient-to-l lg:from-[hsl(var(--neutral-dark))]/40 lg:via-transparent lg:to-transparent" />
        </div>
      </div>
    </section>
  );
}
