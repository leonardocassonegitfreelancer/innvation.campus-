import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { MapPin, Clock, Star } from "lucide-react";
import historicExt from "@/assets/historic-exterior.webp";
import seasideExt from "@/assets/terrace-community.webp";

const _s = (img: unknown): string => typeof img === 'string' ? img : (img as any)?.src ?? '';

const locations = [
  {
    name: "Centro Histórico",
    tagline: "Málaga Palace",
    img: historicExt,
    alt: "Calle del casco antiguo de Málaga con luz dorada",
    address: "Calle Álamos 7 29012, Málaga",
    hours: "Lun–Jue 9:30–18:30 · Vie hasta 17:00",
    highlights: ["4 Plantas", "2 Terrazas", "Bar", "24/7", "Internet rápido"],
    desc: "Ubicado en un edificio restaurado del siglo XVIII cerca del Museo Picasso, este espacio te envuelve en siglos de historia. Perfecto para trabajo profundo, pensamiento estratégico y conversaciones que importan.",
    theme: "historic" as const
  },
  {
    name: "Junto al Mar",
    tagline: "Málaga Terrace",
    img: seasideExt,
    alt: "Evento comunitario en la terraza de Innovation Campus Málaga",
    address: "Calle Puerto 14 29016, Málaga",
    hours: "Lun–Jue 9:30–18:30 · Vie hasta 17:00",
    highlights: ["Terraza panorámica", "Escritorios con vista al mar", "Zona creativa abierta", "Cerca del mar"],
    desc: "Cristal, luz y mar. Un espacio moderno diseñado para la energía creativa, la colaboración y ese tipo de libertad que solo viene de trabajar con el horizonte a la vista.",
    theme: "seaside" as const
  }
];

export default function LocationsSectionES() {
  const { ref: titleRef, isVisible: titleVis } = useScrollAnimation();

  return (
    <section id="locations" className="py-24 md:py-36 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={titleRef} className={`scroll-animate ${titleVis ? "visible" : ""} text-center mb-16`}>
          <p className="font-body text-xs uppercase tracking-[0.4em] text-primary mb-4">Nuestras Ubicaciones en Málaga</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Dos mundos <br className="md:hidden" /><span className="text-primary">Tu elección</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {locations.map((loc) => <LocationCard key={loc.name} {...loc} />)}
        </div>
      </div>
    </section>
  );
}

function LocationCard({ name, tagline, img, alt, address, hours, highlights, desc, theme }: (typeof locations)[0]) {
  const { ref, isVisible } = useScrollAnimation(0.15);
  const isHistoric = theme === "historic";

  return (
    <div
      ref={ref}
      className={`
        ${isHistoric ? "scroll-animate-left" : "scroll-animate-right"} 
        ${isVisible ? "visible" : ""} 
        rounded-2xl overflow-hidden group flex flex-col transition-all duration-500 ease-out
        ${isHistoric 
          ? "stone-texture-bg border border-amber-600/10 hover:border-amber-500/30 hover:shadow-[0_20px_50px_rgba(217,119,6,0.12)]" 
          : "sea-wave-bg border border-sky-400/15 hover:border-sky-400/35 hover:shadow-[0_20px_50px_rgba(14,165,233,0.12)]"
        }
        hover:-translate-y-2
      `}
    >
      {/* Image */}
      <div className="relative h-80 md:h-[28rem] overflow-hidden z-10">
        <img
          src={_s(img)}
          alt={alt}
          className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-105"
          loading="lazy" 
        />
      </div>

      {/* Content */}
      <div className="p-6 md:p-8 relative z-10 flex flex-col flex-1">
        <div className="mb-4">
          <p className={`
            font-body text-[10px] tracking-[0.3em] uppercase mb-1.5 font-bold transition-all duration-300
            ${isHistoric ? "text-amber-800" : "text-sky-800"}
          `}>
            {tagline}
          </p>
          <h3 className={`
            font-display font-semibold text-3xl md:text-4xl transition-colors duration-300
            ${isHistoric ? "text-neutral-900 group-hover:text-amber-950" : "text-sky-950 group-hover:text-sky-900"}
          `}>
            {name}
          </h3>
          <div className={`h-[2px] w-8 mt-2.5 rounded-full transition-all duration-500 group-hover:w-16 ${
            isHistoric ? "bg-amber-600/30 group-hover:bg-amber-600" : "bg-sky-600/30 group-hover:bg-sky-500"
          }`} />
        </div>

        <p className={`
          font-body text-sm leading-relaxed mb-6 transition-colors duration-300
          ${isHistoric ? "text-neutral-800/85 group-hover:text-neutral-900" : "text-sky-950/80 group-hover:text-sky-950"}
        `}>
          {desc}
        </p>

        {/* Info Box */}
        <div className="space-y-3.5 mb-6 border-t border-black/5 pt-6 mt-auto">
          <div className="flex items-center gap-3">
            <MapPin className={`w-4 h-4 shrink-0 ${isHistoric ? "text-amber-700" : "text-sky-700"}`} />
            <span className={`font-body text-xs font-medium tracking-wide transition-colors duration-300 ${
              isHistoric ? "text-neutral-700/90 group-hover:text-neutral-900" : "text-sky-900/85 group-hover:text-sky-950"
            }`}>
              {address}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <Clock className={`w-4 h-4 shrink-0 ${isHistoric ? "text-amber-700" : "text-sky-700"}`} />
            <span className={`font-body text-xs font-medium tracking-wide transition-colors duration-300 ${
              isHistoric ? "text-neutral-700/90 group-hover:text-neutral-900" : "text-sky-900/85 group-hover:text-sky-950"
            }`}>
              {hours}
            </span>
          </div>
        </div>

        {/* Highlights at bottom */}
        <div className="flex flex-wrap gap-2 mb-8">
          {highlights.map((h) => (
            <span
              key={h}
              className={`inline-flex items-center gap-1.5 font-body text-[11px] px-3.5 py-1.5 rounded-lg border transition-all duration-300 ${
                isHistoric 
                  ? "bg-amber-600/10 text-amber-950 border-amber-600/10 group-hover:bg-amber-600/15" 
                  : "bg-sky-400/15 text-sky-950 border-sky-400/10 group-hover:bg-sky-400/25"
              }`}
            >
              <Star className="w-3 h-3 text-amber-500 fill-amber-500 shrink-0" />
              <span className="font-medium tracking-wide">{h}</span>
            </span>
          ))}
        </div>

        {/* Premium CTA Button */}
        <div>
          <a
            href={isHistoric ? "/es/malaga-palace" : "/es/malaga-terrace"}
            className={`
              w-full inline-flex items-center justify-center font-body text-xs uppercase tracking-widest py-3.5 px-6 rounded-xl font-bold transition-all duration-300
              ${isHistoric 
                ? "bg-amber-950 text-amber-50 hover:bg-amber-800 hover:shadow-[0_8px_25px_rgba(120,53,4,0.25)]" 
                : "bg-sky-950 text-sky-50 hover:bg-sky-900 hover:shadow-[0_8px_25px_rgba(8,112,184,0.25)]"
              }
            `}
          >
            Descubrir el espacio
          </a>
        </div>
      </div>
    </div>
  );
}
