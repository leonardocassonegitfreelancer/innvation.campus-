import {
  Wifi,
  Projector,
  Coffee,
  KeyRound,
  Headphones,
  Wind,
  Users,
  UtensilsCrossed,
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useLocation } from "react-router-dom";

const translations = {
  en: {
    tagline: "Amenities",
    title: "Everything Included",
    items: [
      { icon: Wifi, label: "High-Speed WiFi" },
      { icon: Projector, label: "4K Projector" },
      { icon: Coffee, label: "Coffee & Tea" },
      { icon: KeyRound, label: "Secure Access" },
      { icon: Headphones, label: "AV Equipment" },
      { icon: Wind, label: "Climate Control" },
      { icon: Users, label: "Reception Support" },
      { icon: UtensilsCrossed, label: "Catering Options" },
    ],
  },
  es: {
    tagline: "Servicios",
    title: "Todo Incluido",
    items: [
      { icon: Wifi, label: "WiFi Alta Velocidad" },
      { icon: Projector, label: "Proyector 4K" },
      { icon: Coffee, label: "Café y Té" },
      { icon: KeyRound, label: "Acceso Seguro" },
      { icon: Headphones, label: "Equipo AV" },
      { icon: Wind, label: "Climatización" },
      { icon: Users, label: "Soporte Recepción" },
      { icon: UtensilsCrossed, label: "Opciones de Catering" },
    ],
  },
  it: {
    tagline: "Servizi",
    title: "Tutto Incluso",
    items: [
      { icon: Wifi, label: "WiFi Alta Velocità" },
      { icon: Projector, label: "Proiettore 4K" },
      { icon: Coffee, label: "Caffè e Tè" },
      { icon: KeyRound, label: "Accesso Sicuro" },
      { icon: Headphones, label: "Attrezzatura AV" },
      { icon: Wind, label: "Climatizzazione" },
      { icon: Users, label: "Supporto Reception" },
      { icon: UtensilsCrossed, label: "Opzioni Catering" },
    ],
  },
};

export default function ConferenceIncludes() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation(0.1);
  const location = useLocation();
  const lang = location.pathname.startsWith("/es") ? "es" : location.pathname.startsWith("/it") ? "it" : "en";
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
