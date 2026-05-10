import {
  Wifi,
  Coffee,
  Printer,
  Lock,
  UtensilsCrossed,
  Cctv,
  Wind,
  CalendarHeart,
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const translations = {
  en: {
    tagline: "Amenities",
    title: "What's Included",
    items: [
      { icon: Wifi, label: "High-Speed WiFi" },
      { icon: Coffee, label: "Free Coffee/Tea" },
      { icon: Printer, label: "Printing" },
      { icon: Lock, label: "Personal Locker" },
      { icon: UtensilsCrossed, label: "Fully Equipped Kitchen" },
      { icon: Cctv, label: "Video surveillance" },
      { icon: Wind, label: "Air Conditioning" },
      { icon: CalendarHeart, label: "Community Events" },
    ]
  },
  es: {
    tagline: "Servicios",
    title: "Qué Incluye",
    items: [
      { icon: Wifi, label: "WiFi Alta Velocidad" },
      { icon: Coffee, label: "Café/Té Gratis" },
      { icon: Printer, label: "Impresión" },
      { icon: Lock, label: "Taquilla Personal" },
      { icon: UtensilsCrossed, label: "Cocina Equipada" },
      { icon: Cctv, label: "Videovigilancia" },
      { icon: Wind, label: "Aire Acondicionado" },
      { icon: CalendarHeart, label: "Eventos Comunidad" },
    ]
  },
  it: {
    tagline: "Servizi",
    title: "Cosa è Incluso",
    items: [
      { icon: Wifi, label: "WiFi Alta Velocità" },
      { icon: Coffee, label: "Caffè/Tè Gratis" },
      { icon: Printer, label: "Stampa" },
      { icon: Lock, label: "Locker Personale" },
      { icon: UtensilsCrossed, label: "Cucina Attrezzata" },
      { icon: Cctv, label: "Videosorveglianza" },
      { icon: Wind, label: "Aria Condizionata" },
      { icon: CalendarHeart, label: "Eventi Comunità" },
    ]
  }
};

export default function CoworkingIncludes({ lang = "en" }: { lang?: "en" | "es" | "it" }) {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation(0.1);
  const t = translations[lang];

  return (
    <section className="py-20 md:py-28 bg-muted/50">
      <div className="max-w-5xl mx-auto px-6">
        <div ref={headerRef} className={`scroll-animate ${headerVisible ? "visible" : ""} text-center mb-14`}>
          <p className="font-body text-xs uppercase tracking-[0.3em] text-primary mb-4 font-semibold">
            {t.tagline}
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            {t.title}
          </h2>
        </div>

        <div ref={gridRef} className={`scroll-animate ${gridVisible ? "visible" : ""} grid grid-cols-2 sm:grid-cols-4 gap-8`}>
          {t.items.map((item) => (
            <div key={item.label} className="flex flex-col items-center gap-3 text-center">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <p className="font-body text-sm font-semibold text-foreground">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
