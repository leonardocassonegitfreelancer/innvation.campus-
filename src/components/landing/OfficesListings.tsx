import { useState } from "react";
import { Users, MapPin } from "lucide-react";
import { officePaths } from "./OfficeDetailPage";
import palaceEntrance from "@/assets/palace-entrance.webp";
import palaceSecondFloor from "@/assets/palace-second-floor.webp";
import palaceCourtyard from "@/assets/palace-courtyard.webp";
import terrace1 from "@/assets/service-terrace.webp";
import terrace2 from "@/assets/terrace-events.webp";
import terraceCommunity from "@/assets/terrace-community.webp";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const _s = (img: unknown): string => typeof img === 'string' ? img : (img as any)?.src ?? '';

interface Office {
  id: string;
  sizeLabel: string;
  capacity: string;
  features: string[];
  image: unknown;
}

const translations = {
  en: {
    tagline: "Private Offices",
    title: "Find Your Space",
    requestInfo: "Request Info",
    viewDetails: "View Details",
    tabs: [
      { value: "palace" as const, label: "Málaga Palace — Historic Center" },
      { value: "terrace" as const, label: "Málaga Terrace — Seaside" },
    ],
    palaceOffices: [
      { id: "palace-small", sizeLabel: "Small Office", capacity: "1–3 people", features: ["Historic building", "Natural light", "Air conditioning", "Private entrance"], image: palaceCourtyard },
      { id: "palace-medium", sizeLabel: "Medium Office", capacity: "4–8 people", features: ["High ceilings", "Courtyard view", "Air conditioning", "Private"], image: palaceSecondFloor },
      { id: "palace-large", sizeLabel: "Large Office", capacity: "9–15 people", features: ["Fully accessible", "Catering option", "Air conditioning", "Event-ready"], image: palaceEntrance },
    ] as Office[],
    terraceOffices: [
      { id: "terrace-small", sizeLabel: "Small Office", capacity: "1–3 people", features: ["Ocean view", "Air conditioning", "Modern fit-out", "Private"], image: terrace1 },
      { id: "terrace-medium", sizeLabel: "Medium Office", capacity: "4–8 people", features: ["Partial sea view", "Air conditioning", "Open layout", "4th floor"], image: terrace2 },
      { id: "terrace-large", sizeLabel: "Large Office", capacity: "9–20 people", features: ["5th floor", "Panoramic views", "Air conditioning", "Fully isolated"], image: terraceCommunity },
    ] as Office[],
  },
  es: {
    tagline: "Oficinas Privadas",
    title: "Encuentra Tu Espacio",
    requestInfo: "Solicitar Información",
    viewDetails: "Ver Detalles",
    tabs: [
      { value: "palace" as const, label: "Málaga Palace — Centro Histórico" },
      { value: "terrace" as const, label: "Málaga Terrace — Frente al Mar" },
    ],
    palaceOffices: [
      { id: "palace-small", sizeLabel: "Small Office", capacity: "1–3 personas", features: ["Edificio histórico", "Luz natural", "Aire acondicionado", "Entrada privada"], image: palaceCourtyard },
      { id: "palace-medium", sizeLabel: "Medium Office", capacity: "4–8 personas", features: ["Techos altos", "Vista al patio", "Aire acondicionado", "Privada"], image: palaceSecondFloor },
      { id: "palace-large", sizeLabel: "Large Office", capacity: "9–15 personas", features: ["Totalmente accesible", "Servicio de catering", "Aire acondicionado", "Lista para eventos"], image: palaceEntrance },
    ] as Office[],
    terraceOffices: [
      { id: "terrace-small", sizeLabel: "Small Office", capacity: "1–3 personas", features: ["Vista al mar", "Aire acondicionado", "Acabados modernos", "Privada"], image: terrace1 },
      { id: "terrace-medium", sizeLabel: "Medium Office", capacity: "4–8 personas", features: ["Vista parcial al mar", "Aire acondicionado", "Planta abierta", "4ª planta"], image: terrace2 },
      { id: "terrace-large", sizeLabel: "Large Office", capacity: "9–20 personas", features: ["5ª planta", "Vistas panorámicas", "Aire acondicionado", "Totalmente aislada"], image: terraceCommunity },
    ] as Office[],
  },
  it: {
    tagline: "Uffici Privati",
    title: "Trova il Tuo Spazio",
    requestInfo: "Richiedi Info",
    viewDetails: "Vedi Dettagli",
    tabs: [
      { value: "palace" as const, label: "Málaga Palace — Centro Storico" },
      { value: "terrace" as const, label: "Málaga Terrace — Lungomare" },
    ],
    palaceOffices: [
      { id: "palace-small", sizeLabel: "Small Office", capacity: "1–3 persone", features: ["Edificio storico", "Luce naturale", "Aria condizionata", "Ingresso privato"], image: palaceCourtyard },
      { id: "palace-medium", sizeLabel: "Medium Office", capacity: "4–8 persone", features: ["Soffitti alti", "Vista cortile", "Aria condizionata", "Privato"], image: palaceSecondFloor },
      { id: "palace-large", sizeLabel: "Large Office", capacity: "9–15 persone", features: ["Completamente accessibile", "Servizio catering", "Aria condizionata", "Pronto per eventi"], image: palaceEntrance },
    ] as Office[],
    terraceOffices: [
      { id: "terrace-small", sizeLabel: "Small Office", capacity: "1–3 persone", features: ["Vista oceano", "Aria condizionata", "Finitura moderna", "Privato"], image: terrace1 },
      { id: "terrace-medium", sizeLabel: "Medium Office", capacity: "4–8 persone", features: ["Vista parziale mare", "Aria condizionata", "Layout aperto", "4° piano"], image: terrace2 },
      { id: "terrace-large", sizeLabel: "Large Office", capacity: "9–20 persone", features: ["5° piano", "Vista panoramica", "Aria condizionata", "Completamente isolato"], image: terraceCommunity },
    ] as Office[],
  },
};

function OfficeCard({ office, t, lang }: { office: Office; t: any; lang: string }) {
  const href = officePaths[lang]?.[office.id] ?? "#";

  return (
    <Card className="relative overflow-hidden transition-all duration-300 hover:shadow-lg border-border">
      <div className="w-full h-48 md:h-56 overflow-hidden">
        <img
          src={_s(office.image)}
          alt={office.sizeLabel}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <Badge className="absolute top-4 right-4 bg-background/90 text-foreground border border-border backdrop-blur-sm">
        {office.sizeLabel}
      </Badge>
      <CardHeader>
        <CardTitle className="font-display text-xl">
          {office.sizeLabel}
        </CardTitle>
        <div className="flex items-center gap-2 text-muted-foreground">
          <Users className="w-4 h-4" />
          <span className="font-body text-sm">{office.capacity}</span>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-3 mb-6">
          {office.features.map((feature, j) => (
            <div key={j} className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span className="font-body">{feature}</span>
            </div>
          ))}
        </div>
        <Button asChild variant="default" className="bg-primary hover:bg-primary/90">
          <a href={href}>{t.requestInfo}</a>
        </Button>
      </CardContent>
    </Card>
  );
}

export default function OfficesListings({ lang = "en" }: { lang?: "en" | "es" | "it" }) {
  const [activeTab, setActiveTab] = useState<"palace" | "terrace">("palace");
  const { ref, isVisible } = useScrollAnimation();
  const t = translations[lang as keyof typeof translations];
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

        <div className="grid md:grid-cols-3 gap-6">
          {offices.map((office) => (
            <OfficeCard
              key={office.id}
              office={office}
              t={t}
              lang={lang}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
