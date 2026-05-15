import { useState } from "react";
import { Users, MoveRight } from "lucide-react";
import palaceEntrance from "@/assets/palace-entrance.webp";
import palaceSecondFloor from "@/assets/palace-second-floor.webp";
import palaceCourtyard from "@/assets/palace-courtyard.webp";
import terrace1 from "@/assets/service-terrace.webp";
import terrace2 from "@/assets/terrace-events.webp";
import terraceCommunity from "@/assets/terrace-community.webp";

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

const leadBasePath: Record<string, string> = {
  en: "/en/private-offices/lead",
  es: "/es/oficinas-privadas/lead",
  it: "/it/uffici-privati/lead",
};

function OfficeCard({ office, t, activeTab, lang }: { office: Office; t: any; activeTab: string; lang: string }) {
  const href = `${leadBasePath[lang]}?size=${office.id.split("-")[1]}&location=${activeTab}`;

  return (
    <a href={href} className="group flex flex-col gap-6 cursor-pointer">
      <div className="relative w-full aspect-[3/4] overflow-hidden rounded-md bg-muted">
        <img
          src={_s(office.image)}
          alt={office.sizeLabel}
          className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="font-display italic text-2xl text-foreground group-hover:text-primary transition-colors">
          {office.sizeLabel}
        </h3>
        <div className="flex items-center justify-between">
          <span className="font-body text-sm text-muted-foreground flex items-center gap-1.5 line-clamp-1">
            <Users className="w-4 h-4 shrink-0" />
            {office.capacity}
          </span>
          <span className="font-body text-xs uppercase tracking-wider font-semibold text-foreground flex items-center gap-1 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
            {t.viewDetails} <MoveRight className="w-3 h-3" />
          </span>
        </div>
        <ul className="mt-2 grid gap-1">
          {office.features.map((f) => (
            <li key={f} className="font-body text-xs text-muted-foreground flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-primary shrink-0" />
              {f}
            </li>
          ))}
        </ul>
      </div>
    </a>
  );
}

export default function OfficesListings({ lang = "en" }: { lang?: "en" | "es" | "it" }) {
  const [activeTab, setActiveTab] = useState<"palace" | "terrace">("palace");
  const t = translations[lang as keyof typeof translations];
  const offices = activeTab === "palace" ? t.palaceOffices : t.terraceOffices;

  return (
    <section className="py-24 md:py-32 bg-background flex flex-col items-center">
      <div className="w-full max-w-[1400px] px-6 lg:px-12">
        <div className="text-center mb-16 md:mb-24">
          <p className="font-body text-xs uppercase tracking-[0.3em] text-primary mb-6 font-semibold">
            {t.tagline}
          </p>
          <h2 className="font-display italic text-4xl md:text-6xl font-medium text-foreground tracking-tight">
            {t.title}
          </h2>
          <div className="flex flex-wrap justify-center gap-4 mt-12">
            {t.tabs.map((tab) => (
              <button
                key={tab.value}
                type="button"
                onClick={() => setActiveTab(tab.value)}
                className={`font-body text-sm px-8 py-3 rounded-full border transition-all duration-300 ${
                  activeTab === tab.value
                    ? "bg-foreground text-background border-foreground shadow-lg"
                    : "bg-transparent border-border text-muted-foreground hover:border-foreground/30 hover:text-foreground"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12 w-full">
          {offices.map((office) => (
            <OfficeCard
              key={office.id}
              office={office}
              t={t}
              activeTab={activeTab}
              lang={lang}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
