import { useState } from "react";
import { Users, MapPin, Maximize2 } from "lucide-react";
import palaceEntrance from "@/assets/palace-entrance.webp";
import palaceCoworking from "@/assets/palace-coworking.webp";
import palaceSecondFloor from "@/assets/palace-second-floor.webp";
import palaceCourtyard from "@/assets/palace-courtyard.webp";
import terrace1 from "@/assets/service-terrace.webp";
import terrace2 from "@/assets/terrace-events.webp";
import terrace3 from "@/assets/historic-interior.webp";
import palaceSkylight from "@/assets/palace-skylight.webp";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useLocation } from "react-router-dom";

interface Office {
  id: string;
  name: string;
  capacity: string;
  size: string;
  features: string[];
  highlight: boolean;
}

const translations = {
  en: {
    tagline: "Available Now",
    title: "Choose Your Office",
    popular: "Popular",
    requestQuote: "Request Quote",
    comingSoon: "Coming Soon",
    tabs: [
      { value: "palace" as const, label: "Málaga Palace — Historic Center" },
      { value: "terrace" as const, label: "Málaga Terrace — Seaside" },
    ],
    palaceOffices: [
      {
        id: "palace-entrance",
        name: "Entrance Floor Office",
        capacity: "Up to 12 people",
        size: "Large",
        features: ["Cozy & Private", "Air Conditioner", "Catering Option", "Fully Accessible"],
        highlight: true,
      },
      {
        id: "palace-1",
        name: "Private Office — 1",
        capacity: "Up to 2 people",
        size: "5 m²",
        features: ["Historic Building", "Air Conditioner", "Negotiable Price"],
        highlight: false,
      },
      {
        id: "palace-2",
        name: "Second Floor Office",
        capacity: "Up to 8 people",
        size: "20 m²",
        features: ["2nd Floor", "High Ceilings", "Air Conditioner", "Negotiable Price"],
        highlight: false,
      },
      {
        id: "palace-3",
        name: "Courtyard Office",
        capacity: "Up to 6 people",
        size: "15 m²",
        features: ["Courtyard View", "Natural Light", "Air Conditioner", "Negotiable Price"],
        highlight: false,
      },
    ] as Office[],
    terraceOffices: [
      {
        id: "terrace-2",
        name: "Private Office — 2",
        capacity: "6–7 people",
        size: "13.52 m²",
        features: ["Partial Ocean View", "Air Conditioner", "Negotiable Price"],
        highlight: true,
      },
      {
        id: "terrace-4",
        name: "Private Office — 4",
        capacity: "Up to 20 people",
        size: "41.93 m²",
        features: ["5th Floor", "Private & Isolated", "Air Conditioner"],
        highlight: false,
      },
      {
        id: "terrace-1",
        name: "Private Office — 1",
        capacity: "6–8 people",
        size: "14 m²",
        features: ["Newly Built", "Air Conditioner", "Negotiable Price"],
        highlight: false,
      },
      {
        id: "terrace-3",
        name: "Private Office — 3",
        capacity: "Up to 20 people",
        size: "41.93 m²",
        features: ["4th Floor", "Private & Isolated", "Air Conditioner"],
        highlight: false,
      },
    ] as Office[],
  },
  es: {
    tagline: "Disponibles Ahora",
    title: "Elige tu Oficina",
    popular: "Popular",
    requestQuote: "Solicitar Presupuesto",
    comingSoon: "Próximamente",
    tabs: [
      { value: "palace" as const, label: "Málaga Palace — Centro Histórico" },
      { value: "terrace" as const, label: "Málaga Terrace — Frente al Mar" },
    ],
    palaceOffices: [
      {
        id: "palace-entrance",
        name: "Oficina Planta Baja",
        capacity: "Hasta 12 personas",
        size: "Grande",
        features: ["Acogedora y Privada", "Aire Acondicionado", "Servicio de Catering", "Totalmente Accesible"],
        highlight: true,
      },
      {
        id: "palace-1",
        name: "Oficina Privada — 1",
        capacity: "Hasta 2 personas",
        size: "5 m²",
        features: ["Edificio Histórico", "Aire Acondicionado", "Precio Negociable"],
        highlight: false,
      },
      {
        id: "palace-2",
        name: "Oficina Segunda Planta",
        capacity: "Hasta 8 personas",
        size: "20 m²",
        features: ["2ª Planta", "Techos Altos", "Aire Acondicionado", "Precio Negociable"],
        highlight: false,
      },
      {
        id: "palace-3",
        name: "Oficina Patio Interior",
        capacity: "Hasta 6 personas",
        size: "15 m²",
        features: ["Vista al Patio", "Luz Natural", "Aire Acondicionado", "Precio Negociable"],
        highlight: false,
      },
    ] as Office[],
    terraceOffices: [
      {
        id: "terrace-2",
        name: "Oficina Privada — 2",
        capacity: "6–7 personas",
        size: "13,52 m²",
        features: ["Vista Parcial al Mar", "Aire Acondicionado", "Precio Negociable"],
        highlight: true,
      },
      {
        id: "terrace-4",
        name: "Oficina Privada — 4",
        capacity: "Hasta 20 personas",
        size: "41,93 m²",
        features: ["5ª Planta", "Privada y Aislada", "Aire Acondicionado"],
        highlight: false,
      },
      {
        id: "terrace-1",
        name: "Oficina Privada — 1",
        capacity: "6–8 personas",
        size: "14 m²",
        features: ["Recién Construida", "Aire Acondicionado", "Precio Negociable"],
        highlight: false,
      },
      {
        id: "terrace-3",
        name: "Oficina Privada — 3",
        capacity: "Hasta 20 personas",
        size: "41,93 m²",
        features: ["4ª Planta", "Privada y Aislada", "Aire Acondicionado"],
        highlight: false,
      },
    ] as Office[],
  },
  it: {
    tagline: "Disponibili Ora",
    title: "Scegli il Tuo Ufficio",
    popular: "Popolare",
    requestQuote: "Richiedi Preventivo",
    comingSoon: "Prossimamente",
    tabs: [
      { value: "palace" as const, label: "Málaga Palace — Centro Storico" },
      { value: "terrace" as const, label: "Málaga Terrace — Lungomare" },
    ],
    palaceOffices: [
      {
        id: "palace-entrance",
        name: "Ufficio Piano Terra",
        capacity: "Fino a 12 persone",
        size: "Grande",
        features: ["Accogliente e Privato", "Aria Condizionata", "Servizio Catering", "Completamente Accessibile"],
        highlight: true,
      },
      {
        id: "palace-1",
        name: "Ufficio Privato — 1",
        capacity: "Fino a 2 persone",
        size: "5 m²",
        features: ["Edificio Storico", "Aria Condizionata", "Prezzo Trattabile"],
        highlight: false,
      },
      {
        id: "palace-2",
        name: "Ufficio Secondo Piano",
        capacity: "Fino a 8 persone",
        size: "20 m²",
        features: ["2° Piano", "Soffitti Alti", "Aria Condizionata", "Prezzo Trattabile"],
        highlight: false,
      },
      {
        id: "palace-3",
        name: "Ufficio Cortile Interno",
        capacity: "Fino a 6 persone",
        size: "15 m²",
        features: ["Vista sul Cortile", "Luce Naturale", "Aria Condizionata", "Prezzo Trattabile"],
        highlight: false,
      },
    ] as Office[],
    terraceOffices: [
      {
        id: "terrace-2",
        name: "Ufficio Privato — 2",
        capacity: "6–7 persone",
        size: "13,52 m²",
        features: ["Vista Parziale Oceano", "Aria Condizionata", "Prezzo Trattabile"],
        highlight: true,
      },
      {
        id: "terrace-4",
        name: "Ufficio Privato — 4",
        capacity: "Fino a 20 persone",
        size: "41,93 m²",
        features: ["5° Piano", "Privato e Isolato", "Aria Condizionata"],
        highlight: false,
      },
      {
        id: "terrace-1",
        name: "Ufficio Privato — 1",
        capacity: "6–8 persone",
        size: "14 m²",
        features: ["Nuova Costruzione", "Aria Condizionata", "Prezzo Trattabile"],
        highlight: false,
      },
      {
        id: "terrace-3",
        name: "Ufficio Privato — 3",
        capacity: "Fino a 20 persone",
        size: "41,93 m²",
        features: ["4° Piano", "Privato e Isolato", "Aria Condizionata"],
        highlight: false,
      },
    ] as Office[],
  },
};

const officeImages: Record<string, string> = {
  "palace-entrance": palaceEntrance,
  "palace-1": palaceCoworking,
  "palace-2": palaceSecondFloor,
  "palace-3": palaceCourtyard,
  "terrace-1": terrace1,
  "terrace-2": terrace2,
  "terrace-3": terrace3,
  "terrace-4": palaceSkylight,
};

function OfficeCard({ office, t }: { office: Office; t: typeof translations.en }) {
  const image = officeImages[office.id];

  return (
    <Card
      className={`relative overflow-hidden transition-all duration-300 hover:shadow-lg ${
        office.highlight
          ? "border-2 border-primary bg-primary/5 md:col-span-2"
          : "border-border"
      }`}
    >
      {image ? (
        <div className={`w-full ${office.highlight ? "h-48 md:h-64" : "h-40 md:h-48"} overflow-hidden`}>
          <img src={image} alt={office.name} className="w-full h-full object-cover" loading="lazy" />
        </div>
      ) : (
        <div className={`w-full ${office.highlight ? "h-48 md:h-64" : "h-40 md:h-48"} bg-muted flex items-center justify-center`}>
          <div className="text-center text-muted-foreground">
            <MapPin className="w-8 h-8 mx-auto mb-2 opacity-40" />
            <span className="font-body text-sm opacity-60">Photo coming soon</span>
          </div>
        </div>
      )}

      {office.highlight && (
        <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
          {t.popular}
        </Badge>
      )}

      <CardHeader>
        <CardTitle className={`font-display ${office.highlight ? "text-2xl md:text-3xl" : "text-xl"}`}>
          {office.name}
        </CardTitle>
        <div className="flex items-center gap-4 text-muted-foreground flex-wrap">
          <span className="flex items-center gap-2 font-body text-sm">
            <Users className="w-4 h-4" />
            {office.capacity}
          </span>
          <span className="flex items-center gap-2 font-body text-sm">
            <Maximize2 className="w-4 h-4" />
            {office.size}
          </span>
        </div>
      </CardHeader>

      <CardContent>
        <div className={`grid ${office.highlight ? "grid-cols-2 md:grid-cols-4" : "grid-cols-2"} gap-3 mb-6`}>
          {office.features.map((feature, j) => (
            <div key={j} className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
              <span className="font-body">{feature}</span>
            </div>
          ))}
        </div>
        <Button
          asChild
          variant={office.highlight ? "default" : "outline"}
          className={office.highlight ? "bg-primary hover:bg-primary/90" : ""}
        >
          <a href="#offices-form">{t.requestQuote}</a>
        </Button>
      </CardContent>
    </Card>
  );
}

export default function OfficesListings() {
  const [activeTab, setActiveTab] = useState<"palace" | "terrace">("palace");
  const { ref, isVisible } = useScrollAnimation();
  const location = useLocation();
  const lang = location.pathname.startsWith("/es") ? "es" : location.pathname.startsWith("/it") ? "it" : "en";
  const t = translations[lang];

  const offices = activeTab === "palace" ? t.palaceOffices : t.terraceOffices;

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className={`scroll-animate ${isVisible ? "visible" : ""} text-center mb-14`}>
          <p className="font-body text-xs uppercase tracking-[0.3em] text-primary mb-4 font-semibold">
            {t.tagline}
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            {t.title}
          </h2>

          {/* Location toggle — pill style like ConferenceRooms */}
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {t.tabs.map((tab) => (
              <button
                key={tab.value}
                type="button"
                onClick={() => setActiveTab(tab.value)}
                className={`font-body text-sm px-6 py-2.5 rounded-full border transition-all duration-300 ${
                  activeTab === tab.value
                    ? "bg-primary text-primary-foreground border-primary shadow-md"
                    : "bg-transparent border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {offices.map((office) => (
            <OfficeCard key={office.id} office={office} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
