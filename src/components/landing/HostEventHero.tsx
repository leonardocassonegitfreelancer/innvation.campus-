import { useLocation } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import terrace from "@/assets/terrace-events.jpg";

const translations = {
  en: {
    label: "Innovation Campus — Málaga",
    line1: "Host",
    line2italic: "Your",
    line2bold: "Event",
    sub: "Elevate your next gathering to an environment designed for visionary thinkers and cultural pioneers.",
    cta: "Explore the Spaces",
    stats: [
      { num: "3", label: "Locations" },
      { num: "500+", label: "Events Hosted" },
      { num: "2018", label: "Since" },
    ],
  },
  es: {
    label: "Innovation Campus — Málaga",
    line1: "Organiza",
    line2italic: "Tu",
    line2bold: "Evento",
    sub: "Eleva tu próxima reunión a un entorno diseñado para pensadores visionarios y pioneros culturales.",
    cta: "Explorar los Espacios",
    stats: [
      { num: "3", label: "Ubicaciones" },
      { num: "500+", label: "Eventos" },
      { num: "2018", label: "Desde" },
    ],
  },
  it: {
    label: "Innovation Campus — Málaga",
    line1: "Ospita",
    line2italic: "il Tuo",
    line2bold: "Evento",
    sub: "Trasforma il tuo prossimo evento in un'esperienza in un ambiente creato per pensatori visionari.",
    cta: "Esplora gli Spazi",
    stats: [
      { num: "3", label: "Location" },
      { num: "500+", label: "Eventi Ospitati" },
      { num: "2018", label: "Dal" },
    ],
  },
};

export default function HostEventHero() {
  const { ref, isVisible } = useScrollAnimation();
  const location = useLocation();
  const lang = location.pathname.startsWith("/es")
    ? "es"
    : location.pathname.startsWith("/it")
    ? "it"
    : "en";
  const t = translations[lang];

  return (
    <section className="relative w-full min-h-[92vh] flex flex-col overflow-hidden bg-[#131313]">
      {/* Full-bleed background image with dark overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={terrace}
          alt="Event space"
          className="w-full h-full object-cover opacity-40"
        />
        {/* Diagonal gradient for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#131313]/95 via-[#131313]/60 to-transparent" />
        {/* Red accent line — thin diagonal element breaking the grid */}
        <div
          className="absolute left-[38%] top-0 bottom-0 w-px opacity-30"
          style={{
            background:
              "linear-gradient(to bottom, transparent 0%, #a3190e 30%, #a3190e 70%, transparent 100%)",
            transform: "rotate(8deg) translateX(-50%)",
          }}
        />
      </div>

      {/* Brand label — top left */}
      <div className="relative z-10 pt-10 px-8 md:px-16">
        <p className="font-accent text-xs tracking-[0.4em] text-primary uppercase">
          {t.label}
        </p>
      </div>

      {/* Main hero content */}
      <div
        ref={ref}
        className={`scroll-animate ${
          isVisible ? "visible" : ""
        } relative z-10 flex-1 flex flex-col justify-center px-8 md:px-16 pb-8`}
      >
        {/* Oversized editorial headline */}
        <div className="max-w-6xl">
          {/* Line 1: "Host" — bold, huge */}
          <h1 className="font-display font-bold leading-none tracking-tight text-white"
            style={{ fontSize: "clamp(5rem, 15vw, 14rem)", lineHeight: 0.9 }}>
            {t.line1}
          </h1>
          {/* Line 2: "Your" italic + "Event" bold — indented */}
          <div
            className="flex items-baseline gap-4 md:gap-6"
            style={{ marginLeft: "clamp(3rem, 8vw, 10rem)" }}
          >
            <span
              className="font-display font-normal italic text-white/80 leading-none"
              style={{ fontSize: "clamp(3.5rem, 10vw, 10rem)", lineHeight: 0.9 }}
            >
              {t.line2italic}
            </span>
            <span
              className="font-display font-bold text-white leading-none"
              style={{ fontSize: "clamp(5rem, 15vw, 14rem)", lineHeight: 0.9 }}
            >
              {t.line2bold}
            </span>
          </div>
        </div>

        {/* Subtitle + CTA — right-aligned float */}
        <div className="mt-12 flex flex-col md:flex-row items-start md:items-end justify-between gap-10 max-w-6xl">
          <p className="font-body text-white/60 text-lg max-w-sm leading-relaxed">
            {t.sub}
          </p>
          <a
            href="#venues"
            className="inline-flex items-center gap-3 bg-primary hover:bg-primary/90 text-white font-body text-sm uppercase tracking-[0.2em] px-8 py-5 transition-all duration-300 shadow-[0_20px_60px_rgba(163,25,14,0.4)] hover:shadow-[0_20px_60px_rgba(163,25,14,0.7)] shrink-0"
          >
            {t.cta}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>

      {/* Stats bar — bottom */}
      <div className="relative z-10 border-t border-white/10 px-8 md:px-16 py-6">
        <div className="flex items-center gap-0 max-w-6xl">
          {t.stats.map((stat, i) => (
            <div key={stat.label} className="flex items-center">
              <div className="pr-8 md:pr-16">
                <span className="font-accent text-3xl md:text-4xl text-primary tracking-wider">
                  {stat.num}
                </span>
                <span className="font-accent text-xs tracking-[0.25em] text-white/50 uppercase ml-2">
                  {stat.label}
                </span>
              </div>
              {i < t.stats.length - 1 && (
                <div className="h-8 w-px bg-white/15 mr-8 md:mr-16 shrink-0" />
              )}
            </div>
          ))}
          {/* Scroll cue */}
          <div className="ml-auto hidden md:flex items-center gap-3 text-white/30">
            <div className="w-12 h-px bg-white/30" />
            <span className="font-accent text-xs tracking-[0.3em] uppercase">
              Scroll
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
