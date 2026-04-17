import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { MapPin, Clock, Star } from "lucide-react";
import historicExt from "@/assets/historic-exterior.webp";
import seasideExt from "@/assets/terrace-community.webp";

const locations = [
  {
    name: "Centro Storico",
    tagline: "Málaga Palace",
    img: historicExt,
    alt: "Via del centro storico di Málaga con luce dorata",
    address: "Calle Álamos 7 29012, Málaga",
    hours: "Lun–Gio 9:30–18:30 · Ven fino alle 17:00",
    highlights: ["4 Piani", "2 Terrazze", "Bar", "24/7", "Internet veloce"],
    desc: "Situato in un edificio restaurato del XVIII secolo vicino al Museo Picasso, questo spazio ti avvolge in secoli di storia. Perfetto per il lavoro profondo, il pensiero strategico e le conversazioni che contano.",
    theme: "historic" as const
  },
  {
    name: "Sul Mare",
    tagline: "Málaga Terrace",
    img: seasideExt,
    alt: "Evento comunitario sulla terrazza di Innovation Campus Málaga",
    address: "Calle Puerto 14 29016, Málaga",
    hours: "Lun–Gio 9:30–18:30 · Ven fino alle 17:00",
    highlights: ["Terrazza panoramica", "Scrivanie vista mare", "Zona creativa open space", "Vicino al mare"],
    desc: "Vetro, luce e mare. Uno spazio moderno progettato per l'energia creativa, la collaborazione e quel tipo di libertà che viene solo dal lavorare con l'orizzonte in vista.",
    theme: "seaside" as const
  }
];

export default function LocationsSectionIT() {
  const { ref: titleRef, isVisible: titleVis } = useScrollAnimation();

  return (
    <section id="locations" className="py-24 md:py-36 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={titleRef} className={`scroll-animate ${titleVis ? "visible" : ""} text-center mb-16`}>
          <p className="font-body text-xs uppercase tracking-[0.4em] text-primary mb-4">Le Nostre Sedi a Málaga</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Due mondi <br className="md:hidden" /><span className="text-primary">La tua scelta</span>
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
          <h3 className={`font-bebas ${isHistoric ? "text-neutral-dark" : "text-seaside-text"} text-3xl md:text-4xl`}>{name}</h3>
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
          <Link to={isHistoric ? "/it/malaga-palace" : "/it/malaga-terrace"} className="inline-block bg-primary text-primary-foreground font-body text-sm uppercase tracking-widest px-6 py-3 rounded-sm hover:bg-primary/90 transition-all duration-300">
            Scopri di più
          </Link>
        </div>
      </div>
    </div>
  );
}
