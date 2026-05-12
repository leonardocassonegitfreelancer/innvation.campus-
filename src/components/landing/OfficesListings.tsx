import { useState } from "react";
import { Users, MoveRight, X } from "lucide-react";
import palaceEntrance from "@/assets/palace-entrance.webp";
import palaceSecondFloor from "@/assets/palace-second-floor.webp";
import palaceCourtyard from "@/assets/palace-courtyard.webp";
import terrace1 from "@/assets/service-terrace.webp";
import terrace2 from "@/assets/terrace-events.webp";
import terraceCommunity from "@/assets/terrace-community.webp";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger, DialogClose } from "@/components/ui/dialog";

const _s = (img: unknown): string => typeof img === 'string' ? img : (img as any)?.src ?? '';

interface Office {
  id: string;
  sizeLabel: string;
  capacity: string;
  features: string[];
  image: string;
  gallery: string[];
}

const palaceGallery = [palaceCourtyard, palaceSecondFloor, palaceEntrance];
const terraceGallery = [terrace1, terrace2, terraceCommunity];

const translations = {
  en: {
    tagline: "Private Offices",
    title: "Find Your Space",
    requestInfo: "Request Info",
    viewDetails: "View Details",
    capacitySubtitle: "Capacity",
    tabs: [
      { value: "palace" as const, label: "Málaga Palace — Historic Center" },
      { value: "terrace" as const, label: "Málaga Terrace — Seaside" },
    ],
    palaceOffices: [
      {
        id: "palace-small",
        sizeLabel: "Small Office",
        capacity: "1–3 people",
        features: ["Historic building", "Natural light", "Air conditioning", "Private entrance"],
        image: palaceCourtyard,
        gallery: palaceGallery,
      },
      {
        id: "palace-medium",
        sizeLabel: "Medium Office",
        capacity: "4–8 people",
        features: ["High ceilings", "Courtyard view", "Air conditioning", "Private"],
        image: palaceSecondFloor,
        gallery: palaceGallery,
      },
      {
        id: "palace-large",
        sizeLabel: "Large Office",
        capacity: "9–15 people",
        features: ["Fully accessible", "Catering option", "Air conditioning", "Event-ready"],
        image: palaceEntrance,
        gallery: palaceGallery,
      },
    ] as Office[],
    terraceOffices: [
      {
        id: "terrace-small",
        sizeLabel: "Small Office",
        capacity: "1–3 people",
        features: ["Ocean view", "Air conditioning", "Modern fit-out", "Private"],
        image: terrace1,
        gallery: terraceGallery,
      },
      {
        id: "terrace-medium",
        sizeLabel: "Medium Office",
        capacity: "4–8 people",
        features: ["Partial sea view", "Air conditioning", "Open layout", "4th floor"],
        image: terrace2,
        gallery: terraceGallery,
      },
      {
        id: "terrace-large",
        sizeLabel: "Large Office",
        capacity: "9–20 people",
        features: ["5th floor", "Panoramic views", "Air conditioning", "Fully isolated"],
        image: terraceCommunity,
        gallery: terraceGallery,
      },
    ] as Office[],
  },
  es: {
    tagline: "Oficinas Privadas",
    title: "Encuentra Tu Espacio",
    requestInfo: "Solicitar Información",
    viewDetails: "Ver Detalles",
    capacitySubtitle: "Capacidad",
    tabs: [
      { value: "palace" as const, label: "Málaga Palace — Centro Histórico" },
      { value: "terrace" as const, label: "Málaga Terrace — Frente al Mar" },
    ],
    palaceOffices: [
      {
        id: "palace-small",
        sizeLabel: "Small Office",
        capacity: "1–3 personas",
        features: ["Edificio histórico", "Luz natural", "Aire acondicionado", "Entrada privada"],
        image: palaceCourtyard,
        gallery: palaceGallery,
      },
      {
        id: "palace-medium",
        sizeLabel: "Medium Office",
        capacity: "4–8 personas",
        features: ["Techos altos", "Vista al patio", "Aire acondicionado", "Privada"],
        image: palaceSecondFloor,
        gallery: palaceGallery,
      },
      {
        id: "palace-large",
        sizeLabel: "Large Office",
        capacity: "9–15 personas",
        features: ["Totalmente accesible", "Servicio de catering", "Aire acondicionado", "Lista para eventos"],
        image: palaceEntrance,
        gallery: palaceGallery,
      },
    ] as Office[],
    terraceOffices: [
      {
        id: "terrace-small",
        sizeLabel: "Small Office",
        capacity: "1–3 personas",
        features: ["Vista al mar", "Aire acondicionado", "Acabados modernos", "Privada"],
        image: terrace1,
        gallery: terraceGallery,
      },
      {
        id: "terrace-medium",
        sizeLabel: "Medium Office",
        capacity: "4–8 personas",
        features: ["Vista parcial al mar", "Aire acondicionado", "Planta abierta", "4ª planta"],
        image: terrace2,
        gallery: terraceGallery,
      },
      {
        id: "terrace-large",
        sizeLabel: "Large Office",
        capacity: "9–20 personas",
        features: ["5ª planta", "Vistas panorámicas", "Aire acondicionado", "Totalmente aislada"],
        image: terraceCommunity,
        gallery: terraceGallery,
      },
    ] as Office[],
  },
  it: {
    tagline: "Uffici Privati",
    title: "Trova il Tuo Spazio",
    requestInfo: "Richiedi Info",
    viewDetails: "Vedi Dettagli",
    capacitySubtitle: "Capacità",
    tabs: [
      { value: "palace" as const, label: "Málaga Palace — Centro Storico" },
      { value: "terrace" as const, label: "Málaga Terrace — Lungomare" },
    ],
    palaceOffices: [
      {
        id: "palace-small",
        sizeLabel: "Small Office",
        capacity: "1–3 persone",
        features: ["Edificio storico", "Luce naturale", "Aria condizionata", "Ingresso privato"],
        image: palaceCourtyard,
        gallery: palaceGallery,
      },
      {
        id: "palace-medium",
        sizeLabel: "Medium Office",
        capacity: "4–8 persone",
        features: ["Soffitti alti", "Vista cortile", "Aria condizionata", "Privato"],
        image: palaceSecondFloor,
        gallery: palaceGallery,
      },
      {
        id: "palace-large",
        sizeLabel: "Large Office",
        capacity: "9–15 persone",
        features: ["Completamente accessibile", "Servizio catering", "Aria condizionata", "Pronto per eventi"],
        image: palaceEntrance,
        gallery: palaceGallery,
      },
    ] as Office[],
    terraceOffices: [
      {
        id: "terrace-small",
        sizeLabel: "Small Office",
        capacity: "1–3 persone",
        features: ["Vista oceano", "Aria condizionata", "Finitura moderna", "Privato"],
        image: terrace1,
        gallery: terraceGallery,
      },
      {
        id: "terrace-medium",
        sizeLabel: "Medium Office",
        capacity: "4–8 persone",
        features: ["Vista parziale mare", "Aria condizionata", "Layout aperto", "4° piano"],
        image: terrace2,
        gallery: terraceGallery,
      },
      {
        id: "terrace-large",
        sizeLabel: "Large Office",
        capacity: "9–20 persone",
        features: ["5° piano", "Vista panoramica", "Aria condizionata", "Completamente isolato"],
        image: terraceCommunity,
        gallery: terraceGallery,
      },
    ] as Office[],
  },
};

const leadBasePath: Record<string, string> = {
  en: "/en/private-offices/lead",
  es: "/es/oficinas-privadas/lead",
  it: "/it/uffici-privati/lead",
};

function OfficeCardWithModal({ office, t, activeTab, locationLabel, lang }: any) {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <Dialog onOpenChange={(open) => { if (!open) setActiveIdx(0); }}>
      {/* Card Trigger */}
      <DialogTrigger asChild>
        <div className="group cursor-pointer flex flex-col gap-6">
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
          </div>
        </div>
      </DialogTrigger>

      {/* Split-Screen Modal */}
      <DialogContent className="max-w-[95vw] lg:max-w-[85vw] h-[90vh] p-0 gap-0 overflow-hidden rounded-xl border-none shadow-2xl flex flex-col md:flex-row [&>button]:hidden bg-background">

        {/* Left — Image pane */}
        <div className="w-full md:w-3/5 h-[40vh] md:h-full relative overflow-hidden bg-[#111]">
          {/* Crossfade: key forces remount → fade-in on each change */}
          <img
            key={activeIdx}
            src={_s(office.gallery[activeIdx])}
            alt={`${office.sizeLabel} view ${activeIdx + 1}`}
            className="absolute inset-0 w-full h-full object-cover animate-in fade-in duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent pointer-events-none z-10" />

          {/* Thumbnails */}
          {office.gallery.length > 1 && (
            <div className="absolute bottom-6 left-6 right-6 flex items-center gap-3 z-20 overflow-x-auto pb-1">
              {office.gallery.map((img: string, idx: number) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveIdx(idx)}
                  className={`w-20 h-16 shrink-0 overflow-hidden rounded-sm transition-all duration-300 ${
                    activeIdx === idx
                      ? "ring-2 ring-white scale-105 opacity-100"
                      : "opacity-50 scale-95 hover:opacity-80"
                  }`}
                >
                  <img src={_s(img)} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right Content Pane (Light Theme Luxury) */}
        <div className="w-full md:w-2/5 h-[50vh] md:h-full p-8 md:p-14 lg:p-20 flex flex-col justify-between overflow-y-auto bg-[#faf9f7] relative">
          
          {/* Close button layered purely on the right side */}
          <DialogClose className="absolute top-6 right-6 md:top-10 md:right-10 p-2 rounded-full hover:bg-black/5 transition-colors text-foreground/50 hover:text-foreground">
            <X className="w-6 h-6 stroke-[1.5]" />
          </DialogClose>

          <div className="flex flex-col gap-8 md:gap-12 animate-in fade-in slide-in-from-right-4 duration-700 delay-150 fill-mode-both">
            {/* Header */}
            <div>
              <p className="font-body text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3 font-medium">
                {locationLabel}
              </p>
              <h2 className="font-display italic text-4xl md:text-5xl text-foreground font-medium leading-tight">
                {office.sizeLabel}
              </h2>
            </div>

            {/* Features List */}
            <ul className="grid gap-4">
              {office.features.map((feature: string, i: number) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <span className="font-body text-[15px] leading-relaxed text-foreground/80 font-light">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Footer Stats & CTA */}
          <div className="mt-12 flex flex-col gap-10 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300 fill-mode-both">
            
            <div className="flex flex-col border-t border-border/50 pt-8">
              <span className="font-display italic text-lg text-muted-foreground mb-1">
                {t.capacitySubtitle}
              </span>
              <div className="font-display text-6xl md:text-7xl text-foreground font-light tracking-tight flex items-baseline gap-2">
                {office.capacity.split(" ")[0]}
                <span className="font-body text-lg md:text-xl text-muted-foreground font-normal tracking-normal uppercase">
                  {office.capacity.split(" ").slice(1).join(" ")}
                </span>
              </div>
            </div>

            <Button 
              asChild 
              className="w-full rounded-full h-14 md:h-16 text-sm md:text-base tracking-[0.15em] font-body uppercase bg-foreground text-background hover:bg-foreground/90 transition-transform active:scale-[0.98]"
            >
              <a href={`${leadBasePath[lang]}?size=${office.id.split("-")[1]}&location=${activeTab}`}>
                {t.requestInfo}
              </a>
            </Button>
          </div>
        </div>

      </DialogContent>
    </Dialog>
  );
}

export default function OfficesListings({ lang = "en" }: { lang?: "en" | "es" | "it" }) {
  const [activeTab, setActiveTab] = useState<"palace" | "terrace">("palace");
  const t = translations[lang as keyof typeof translations];
  const offices = activeTab === "palace" ? t.palaceOffices : t.terraceOffices;

  // Derive title for the location
  const locationLabel = activeTab === "palace" ? "Málaga Palace" : "Málaga Terrace";

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
            <OfficeCardWithModal 
              key={office.id} 
              office={office} 
              t={t} 
              activeTab={activeTab} 
              locationLabel={locationLabel} 
              lang={lang} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}
