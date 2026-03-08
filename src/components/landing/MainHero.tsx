import { useState, useEffect } from "react";
import heroImg from "@/assets/palace-branding-wall.jpg";

export default function MainHero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <img
        src={historicImg}
        alt="Innovation Campus coworking space interior in Málaga historic center"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 bg-black/65" />
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black/80 to-transparent" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Locations */}
        <p
          className={`font-body text-[10px] md:text-xs uppercase tracking-[0.5em] text-white/50 mb-6 md:mb-8 transition-all duration-1000 delay-200 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Málaga · Olbia · Ancona
        </p>

        {/* Brand name */}
        <h1
          className={`mb-4 md:mb-6 transition-all duration-1000 delay-300 ${
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
          className={`font-body text-lg md:text-xl lg:text-2xl font-light text-white/80 mb-4 transition-all duration-1000 delay-400 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          We turn workspaces into experiences
        </p>

        {/* Service line */}
        <p
          className={`font-body text-[10px] md:text-xs uppercase tracking-[0.4em] text-white/40 mb-10 md:mb-14 transition-all duration-1000 delay-500 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Offices · Coworking · Events
        </p>

        {/* CTA */}
        <a
          href="#contact"
          className={`inline-block bg-primary text-primary-foreground font-body text-sm md:text-base uppercase tracking-[0.3em] px-10 py-4 rounded-md hover:bg-primary/90 transition-all duration-500 delay-600 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Find Your Space
        </a>
      </div>

    </section>
  );
}
