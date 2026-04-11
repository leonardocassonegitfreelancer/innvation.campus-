import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { MapPin, Clock, Star } from "lucide-react";
import historicExt from "@/assets/historic-exterior.jpg";
import seasideExt from "@/assets/terrace-community.jpg";

const locations = [
  {
    name: "Centro Histórico",
    tagline: "Málaga Palace",
    img: historicExt,
    alt: "Calle del casco antiguo de Málaga con luz dorada",
    address: "Calle Álamos 7 29012, Málaga",
    hours: "Lun – Vie 09:30–18:30 · 24/7",
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
    hours: "Lun–Vie 9.30–18.30 · 24/7",
    highlights: ["Terraza panorámica", "Escritorios con vista al mar", "Zona creativa abierta", "Ubicación frente al mar"],
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
    <div ref={ref} className={`${isHistoric ? "scroll-animate-left" : "scroll-animate-right"} ${isVisible ? "visible" : ""} rounded-2xl overflow-hidden group flex flex-col ${isHistoric ? "stone-texture-bg" : "sea-wave-bg"}`}>
      <div className="relative h-80 md:h-[28rem] overflow-hidden z-10">
        <img src={img} alt={alt} className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110" loading="lazy" />
      </div>
      <div className="p-6 md:p-8 relative z-10 flex flex-col flex-1">
        <div className="mb-4">
          <p className="font-body text-xs uppercase tracking-[0.3em] text-primary mb-1 font-semibold">{tagline}</p>
          <h3 className={`${isHistoric ? "font-display italic text-neutral-dark" : "font-body font-light text-seaside-text"} text-3xl md:text-4xl font-bold`}>{name}</h3>
        </div>
        <p className={`font-body text-sm leading-relaxed mb-6 ${isHistoric ? "text-neutral-dark/80" : "text-seaside-text"}`}>{desc}</p>
        <div className="space-y-3 mb-6">
          <div className="flex items-start gap-3">
            <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
            <span className={`font-body text-sm ${isHistoric ? "text-neutral-dark/70" : "text-seaside-text"}`}>{address}</span>
          </div>
          <div className="flex items-start gap-3">
            <Clock className="w-4 h-4 text-primary mt-0.5 shrink-0" />
            <span className={`font-body text-sm ${isHistoric ? "text-neutral-dark/70" : "text-seaside-text"}`}>{hours}</span>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          {highlights.map((h) => (
            <span key={h} className={`inline-flex items-center gap-1 font-body text-xs px-3 py-1.5 rounded-full ${isHistoric ? "bg-neutral-dark/10 text-neutral-dark/80" : "bg-seaside-text/10 text-seaside-text"}`}>
              <Star className="w-3 h-3 text-primary" />
              {h}
            </span>
          ))}
        </div>
        <div className="mt-auto pt-8">
          <Link to={isHistoric ? "/es/malaga-palace" : "/es/malaga-terrace"} className="inline-block bg-primary text-primary-foreground font-body text-sm uppercase tracking-widest px-6 py-3 rounded-sm hover:bg-primary/90 transition-all duration-300">
            Ver más
          </Link>
        </div>
      </div>
    </div>
  );
}
