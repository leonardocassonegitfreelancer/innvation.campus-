import { useState, useEffect, useCallback } from "react";
import claimWhite from "@/assets/claim-white.png";
import palaceEntrance from "@/assets/palace-entrance.jpg";
import palaceCoworking from "@/assets/palace-coworking.jpg";
import terraceCommunity from "@/assets/terrace-community.jpg";
import palaceSkylight from "@/assets/palace-skylight.jpg";
import palaceCourtyard from "@/assets/palace-courtyard.jpg";

const slides = [palaceEntrance, palaceCoworking, terraceCommunity, palaceSkylight, palaceCourtyard];

export default function MainHeroIT() {
  const [loaded, setLoaded] = useState(false);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 200);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  const goTo = useCallback((index: number) => {
    setCurrent(index);
  }, []);

  return (
    <section <section className="relative h-screen md:max-h-screen bg-[hsl(var(--neutral-dark))] overflow-hidden"> bg-[hsl(var(--neutral-dark))] overflow-hidden">
      {slides.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`Spazio Innovation Campus ${i + 1}`}
          style={{
            animationDuration: "7s",
            animationTimingFunction: "ease-in-out",
            animationIterationCount: "1",
            animationFillMode: "forwards",
            animationName: i === current ? "kenburns" : "none"
          }}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[1.8s] ease-in-out ${i === current ? "opacity-100" : "opacity-0 scale-100"}`}
        />
      ))}

      <div className="absolute inset-0 bg-[hsl(var(--neutral-dark))]/80 md:bg-[hsl(var(--neutral-dark))]/75" />

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 pt-32 pb-8 md:pt-0 md:pb-0">
        <p className={`font-body text-[10px] md:text-[11px] uppercase tracking-[0.5em] text-white/60 mb-8 md:mb-10 transition-all duration-1000 delay-200 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          Málaga · Olbia · Ancona
        </p>

        <h1 className={`mb-6 md:mb-8 transition-all duration-1000 delay-400 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <img src={claimWhite} alt="Innovation Campus - Spazi di Coworking" className="h-12 sm:h-16 md:h-20 lg:h-24 xl:h-28" />
        </h1>

        <div className={`w-12 h-px bg-primary mx-auto mb-6 md:mb-8 transition-all duration-1000 delay-500 ${loaded ? "opacity-100 w-12" : "opacity-0 w-0"}`} />

        <p className={`font-display italic text-lg md:text-xl lg:text-2xl font-light text-white mb-4 leading-snug drop-shadow-[0_1px_4px_rgba(0,0,0,0.4)] transition-all duration-1000 delay-600 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          Trasformiamo gli spazi di lavoro in esperienze
        </p>

        <p className={`font-body text-[10px] md:text-xs uppercase tracking-[0.4em] text-white/50 mb-10 md:mb-14 transition-all duration-1000 delay-700 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          Uffici · Coworking · Eventi
        </p>

        <a
          href="#contact"
          className={`inline-flex w-auto items-center gap-2 md:gap-3 backdrop-blur-[10px] bg-primary/80 border border-primary/30 text-primary-foreground font-body text-[10px] md:text-sm uppercase tracking-[0.24em] px-5 py-2 md:px-8 md:py-3 rounded hover:bg-primary/95 hover:border-primary/50 transition-all duration-500 delay-800 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          Trova Il Tuo Spazio
        </a>
      </div>

      <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2 transition-all duration-1000 delay-1000 ${loaded ? "opacity-100" : "opacity-0"}`}>
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`h-[2px] rounded-full transition-all duration-500 ${i === current ? "w-8 bg-primary" : "w-4 bg-white/30 hover:bg-white/50"}`}
            aria-label={`Vai alla slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
