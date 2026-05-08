import { Wifi, Sun, Coffee, KeyRound, Music, Wind, Users, UtensilsCrossed } from "lucide-react";
import { useLang } from "@/lib/lang-context";

const translations = {
  en: {
    tagline: "Amenities",
    title: "Everything Included",
    items: [
      { icon: Sun, label: "Open-Air Setting" },
      { icon: Wifi, label: "High-Speed WiFi" },
      { icon: Coffee, label: "Coffee & Tea" },
      { icon: KeyRound, label: "Private Access" },
      { icon: Music, label: "Open Bar" },
      { icon: Wind, label: "Covered Areas" },
      { icon: Users, label: "Event Support" },
      { icon: UtensilsCrossed, label: "Full Catering" },
    ],
  },
  es: {
    tagline: "Servicios",
    title: "Todo Incluido",
    items: [
      { icon: Sun, label: "Espacio al Aire Libre" },
      { icon: Wifi, label: "WiFi Alta Velocidad" },
      { icon: Coffee, label: "Café y Té" },
      { icon: KeyRound, label: "Acceso Privado" },
      { icon: Music, label: "Open Bar" },
      { icon: Wind, label: "Zonas Cubiertas" },
      { icon: Users, label: "Soporte para Eventos" },
      { icon: UtensilsCrossed, label: "Catering Completo" },
    ],
  },
  it: {
    tagline: "Servizi",
    title: "Tutto Incluso",
    items: [
      { icon: Sun, label: "Spazio all'Aperto" },
      { icon: Wifi, label: "WiFi Alta Velocità" },
      { icon: Coffee, label: "Caffè e Tè" },
      { icon: KeyRound, label: "Accesso Privato" },
      { icon: Music, label: "Open Bar" },
      { icon: Wind, label: "Aree Coperte" },
      { icon: Users, label: "Supporto Eventi" },
      { icon: UtensilsCrossed, label: "Catering Completo" },
    ],
  },
};

export default function TerraceIncludes() {
  const lang = useLang();
  const t = translations[lang];

  return (
    <section className="py-20 md:py-28 bg-muted/50">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="font-body text-xs uppercase tracking-[0.3em] text-primary mb-4 font-semibold">{t.tagline}</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">{t.title}</h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
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
