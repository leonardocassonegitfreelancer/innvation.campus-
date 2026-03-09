import { Wifi, Monitor, Coffee, KeyRound, Printer, Wind, Users, Mail } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useLocation } from "react-router-dom";

const translations = {
  en: {
    tagline: "Amenities",
    title: "Everything Included",
    items: [
      { icon: Wifi, label: "High-Speed WiFi" },
      { icon: Monitor, label: "Ergonomic Furniture" },
      { icon: Coffee, label: "Coffee & Tea" },
      { icon: KeyRound, label: "24/7 Access" },
      { icon: Printer, label: "Print & Scan" },
      { icon: Wind, label: "Climate Control" },
      { icon: Users, label: "Meeting Room Credits" },
      { icon: Mail, label: "Business Address" },
    ],
  },
  es: {
    tagline: "Servicios",
    title: "Todo Incluido",
    items: [
      { icon: Wifi, label: "WiFi Alta Velocidad" },
      { icon: Monitor, label: "Mobiliario Ergonómico" },
      { icon: Coffee, label: "Café y Té" },
      { icon: KeyRound, label: "Acceso 24/7" },
      { icon: Printer, label: "Impresora y Escáner" },
      { icon: Wind, label: "Climatización" },
      { icon: Users, label: "Créditos Sala Reuniones" },
      { icon: Mail, label: "Dirección Comercial" },
    ],
  },
  it: {
    tagline: "Servizi",
    title: "Tutto Incluso",
    items: [
      { icon: Wifi, label: "WiFi Alta Velocità" },
      { icon: Monitor, label: "Arredo Ergonomico" },
      { icon: Coffee, label: "Caffè e Tè" },
      { icon: KeyRound, label: "Accesso 24/7" },
      { icon: Printer, label: "Stampa e Scansione" },
      { icon: Wind, label: "Climatizzazione" },
      { icon: Users, label: "Crediti Sala Riunioni" },
      { icon: Mail, label: "Indirizzo Commerciale" },
    ],
  },
};

export default function OfficesIncludes() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation(0.1);
  const location = useLocation();
  const lang = location.pathname.startsWith("/es") ? "es" : location.pathname.startsWith("/it") ? "it" : "en";
  const t = translations[lang];

  return (
    <section className="py-20 md:py-28 bg-muted/50">
      <div className="max-w-5xl mx-auto px-6">
        <div ref={headerRef} className={`scroll-animate ${headerVisible ? "visible" : ""} text-center mb-14`}>
          <p className="font-body text-xs uppercase tracking-[0.3em] text-primary mb-4 font-semibold">{t.tagline}</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">{t.title}</h2>
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
