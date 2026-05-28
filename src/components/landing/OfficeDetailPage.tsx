import { useRef } from "react";
import { ArrowLeft, Users, Wifi, Wind, KeyRound, Sparkles, Building2, Coffee, UtensilsCrossed, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import palaceEntrance from "@/assets/palace-entrance.webp";
import palaceSecondFloor from "@/assets/palace-second-floor.webp";
import palaceCourtyard from "@/assets/palace-courtyard.webp";
import terrace1 from "@/assets/service-terrace.webp";
import terrace2 from "@/assets/terrace-events.webp";
import terraceCommunity from "@/assets/terrace-community.webp";
import LeadForm from "./LeadForm";

const _s = (img: unknown): string => typeof img === 'string' ? img : (img as any)?.src ?? '';

/* ─── Types ─────────────────────────────────────────────── */
interface LangMap<T> { en: T; es: T; it: T }

interface OfficeData {
  slug: string;
  image: unknown;
  seo: LangMap<{ title: string; description: string }>;
  sizeLabel: LangMap<string>;
  location: LangMap<string>;
  capacity: LangMap<string>;
  description: LangMap<string>;
  features: LangMap<string[]>;
  amenities: LangMap<string[]>;
  idealFor: LangMap<string[]>;
}

/* ─── Office data ────────────────────────────────────────── */
const offices: OfficeData[] = [
  {
    slug: "palace-small",
    image: palaceCourtyard,
    seo: {
      en: { title: "Small Private Office — Málaga Palace", description: "A charming 1–3 person private office in the historic heart of Málaga. Natural light, private entrance, high-speed WiFi at Innovation Campus Palace." },
      es: { title: "Oficina Privada Pequeña — Málaga Palace", description: "Una acogedora oficina privada para 1–3 personas en el corazón histórico de Málaga. Luz natural, entrada privada, WiFi de alta velocidad." },
      it: { title: "Ufficio Privato Piccolo — Málaga Palace", description: "Un affascinante ufficio privato per 1–3 persone nel cuore storico di Málaga. Luce naturale, ingresso privato, WiFi ad alta velocità." },
    },
    sizeLabel: { en: "Small Office", es: "Oficina Pequeña", it: "Ufficio Piccolo" },
    location: { en: "Málaga Palace — Historic Center", es: "Málaga Palace — Centro Histórico", it: "Málaga Palace — Centro Storico" },
    capacity: { en: "1–3 people", es: "1–3 personas", it: "1–3 persone" },
    description: {
      en: "A charming private office in the heart of Málaga's historic centre, perfect for solo founders, freelancers, or small teams. Set within the historic Málaga Palace building, it combines old-world character — original courtyard views, natural light, and generous ceiling heights — with fast connectivity and full reception support.",
      es: "Una acogedora oficina privada en el corazón del centro histórico de Málaga, perfecta para fundadores, freelancers o equipos pequeños. Ubicada en el edificio histórico Málaga Palace, combina el carácter del edificio original — vistas al patio, luz natural y techos generosos — con conectividad rápida y soporte de recepción completo.",
      it: "Un affascinante ufficio privato nel cuore del centro storico di Málaga, perfetto per founder, freelance o piccoli team. Situato nello storico edificio Málaga Palace, combina il carattere d'epoca — vista sul cortile, luce naturale e soffitti generosi — con connettività veloce e supporto reception completo.",
    },
    features: {
      en: ["Historic building", "Natural light", "Air conditioning", "Private entrance"],
      es: ["Edificio histórico", "Luz natural", "Aire acondicionado", "Entrada privada"],
      it: ["Edificio storico", "Luce naturale", "Aria condizionata", "Ingresso privato"],
    },
    amenities: {
      en: ["High-Speed WiFi", "Air Conditioning", "Private Entrance", "Natural Light", "Reception Support", "Secure Access", "Cleaning Service", "Shared Kitchen"],
      es: ["WiFi Alta Velocidad", "Aire Acondicionado", "Entrada Privada", "Luz Natural", "Soporte Recepción", "Acceso Seguro", "Servicio de Limpieza", "Cocina Compartida"],
      it: ["WiFi Alta Velocità", "Aria Condizionata", "Ingresso Privato", "Luce Naturale", "Supporto Reception", "Accesso Sicuro", "Servizio di Pulizia", "Cucina Condivisa"],
    },
    idealFor: {
      en: ["Solo founders", "Freelancers", "Remote workers", "Small consultancies", "Startups"],
      es: ["Fundadores independientes", "Freelancers", "Trabajadores remotos", "Pequeñas consultoras", "Startups"],
      it: ["Founder indipendenti", "Freelance", "Lavoratori da remoto", "Piccole consulenze", "Startup"],
    },
  },
  {
    slug: "palace-medium",
    image: palaceSecondFloor,
    seo: {
      en: { title: "Medium Private Office — Málaga Palace", description: "A spacious 4–8 person private office with high ceilings and courtyard views in the historic heart of Málaga at Innovation Campus Palace." },
      es: { title: "Oficina Privada Mediana — Málaga Palace", description: "Una oficina privada espaciosa para 4–8 personas con techos altos y vistas al patio en el corazón histórico de Málaga." },
      it: { title: "Ufficio Privato Medio — Málaga Palace", description: "Un ufficio privato spazioso per 4–8 persone con soffitti alti e vista sul cortile nel cuore storico di Málaga." },
    },
    sizeLabel: { en: "Medium Office", es: "Oficina Mediana", it: "Ufficio Medio" },
    location: { en: "Málaga Palace — Historic Center", es: "Málaga Palace — Centro Histórico", it: "Málaga Palace — Centro Storico" },
    capacity: { en: "4–8 people", es: "4–8 personas", it: "4–8 persone" },
    description: {
      en: "A spacious mid-size office with impressive high ceilings and views of the historic courtyard. Ideal for growing teams that need room to collaborate without sacrificing privacy. The second-floor location provides a sense of exclusivity while keeping you connected to the Palace's vibrant community.",
      es: "Una oficina mediana espaciosa con impresionantes techos altos y vistas al patio histórico. Ideal para equipos en crecimiento que necesitan espacio para colaborar sin sacrificar la privacidad. La ubicación en el segundo piso proporciona una sensación de exclusividad.",
      it: "Un ufficio di medie dimensioni con soffitti alti imponenti e vista sul cortile storico. Ideale per team in crescita che necessitano di spazio per collaborare senza sacrificare la privacy. La posizione al secondo piano offre un senso di esclusività.",
    },
    features: {
      en: ["High ceilings", "Courtyard view", "Air conditioning", "Private"],
      es: ["Techos altos", "Vista al patio", "Aire acondicionado", "Privada"],
      it: ["Soffitti alti", "Vista cortile", "Aria condizionata", "Privato"],
    },
    amenities: {
      en: ["High-Speed WiFi", "Air Conditioning", "Courtyard View", "High Ceilings", "Reception Support", "Secure Access", "Cleaning Service", "Meeting Room Access"],
      es: ["WiFi Alta Velocidad", "Aire Acondicionado", "Vista al Patio", "Techos Altos", "Soporte Recepción", "Acceso Seguro", "Servicio de Limpieza", "Acceso Salas de Reunión"],
      it: ["WiFi Alta Velocità", "Aria Condizionata", "Vista Cortile", "Soffitti Alti", "Supporto Reception", "Accesso Sicuro", "Servizio di Pulizia", "Accesso Sale Riunioni"],
    },
    idealFor: {
      en: ["Growing teams", "Design studios", "Tech companies", "Agencies", "SMEs"],
      es: ["Equipos en crecimiento", "Estudios de diseño", "Empresas tech", "Agencias", "PYMEs"],
      it: ["Team in crescita", "Studi di design", "Aziende tech", "Agenzie", "PMI"],
    },
  },
  {
    slug: "palace-large",
    image: palaceEntrance,
    seo: {
      en: { title: "Large Private Office — Málaga Palace", description: "A fully accessible 9–15 person private office suite in Málaga's most iconic historic building. Event-ready with optional catering at Innovation Campus." },
      es: { title: "Oficina Privada Grande — Málaga Palace", description: "Una suite de oficina privada totalmente accesible para 9–15 personas en el edificio histórico más icónico de Málaga. Lista para eventos con catering opcional." },
      it: { title: "Ufficio Privato Grande — Málaga Palace", description: "Una suite ufficio privata completamente accessibile per 9–15 persone nell'edificio storico più iconico di Málaga. Pronta per eventi con catering opzionale." },
    },
    sizeLabel: { en: "Large Office", es: "Oficina Grande", it: "Ufficio Grande" },
    location: { en: "Málaga Palace — Historic Center", es: "Málaga Palace — Centro Histórico", it: "Málaga Palace — Centro Storico" },
    capacity: { en: "9–15 people", es: "9–15 personas", it: "9–15 persone" },
    description: {
      en: "A fully accessible large office suite in Málaga's most iconic historic building. Designed for established teams, it can double as a private event space with optional catering. The entrance-level location makes client visits effortless and leaves a lasting impression on anyone who walks through the door.",
      es: "Una gran suite de oficina totalmente accesible en el edificio histórico más icónico de Málaga. Diseñada para equipos consolidados, puede funcionar como espacio privado para eventos con catering opcional. La ubicación a pie de calle facilita las visitas de clientes.",
      it: "Una grande suite ufficio completamente accessibile nell'edificio storico più iconico di Málaga. Progettata per team consolidati, può fungere anche da spazio eventi privato con catering opzionale. La posizione all'ingresso rende le visite dei clienti semplici e memorabili.",
    },
    features: {
      en: ["Fully accessible", "Catering option", "Air conditioning", "Event-ready"],
      es: ["Totalmente accesible", "Servicio de catering", "Aire acondicionado", "Lista para eventos"],
      it: ["Completamente accessibile", "Servizio catering", "Aria condizionata", "Pronto per eventi"],
    },
    amenities: {
      en: ["High-Speed WiFi", "Air Conditioning", "Catering Option", "Fully Accessible", "Reception Support", "Secure Access", "Cleaning Service", "Meeting Room Access", "Event Setup"],
      es: ["WiFi Alta Velocidad", "Aire Acondicionado", "Opción Catering", "Totalmente Accesible", "Soporte Recepción", "Acceso Seguro", "Servicio de Limpieza", "Acceso Salas", "Montaje para Eventos"],
      it: ["WiFi Alta Velocità", "Aria Condizionata", "Opzione Catering", "Completamente Accessibile", "Supporto Reception", "Accesso Sicuro", "Servizio di Pulizia", "Accesso Sale", "Allestimento Eventi"],
    },
    idealFor: {
      en: ["Established companies", "Corporate teams", "Client-facing businesses", "Training providers", "Professional services"],
      es: ["Empresas consolidadas", "Equipos corporativos", "Negocios orientados a clientes", "Formadores", "Servicios profesionales"],
      it: ["Aziende consolidate", "Team aziendali", "Business orientati ai clienti", "Formatori", "Servizi professionali"],
    },
  },
  {
    slug: "terrace-small",
    image: terrace1,
    seo: {
      en: { title: "Small Private Office — Málaga Terrace", description: "A bright 1–3 person private office with ocean views at the Málaga Terrace location. Modern fit-out, sea light, and full amenities at Innovation Campus." },
      es: { title: "Oficina Privada Pequeña — Málaga Terrace", description: "Una luminosa oficina privada para 1–3 personas con vistas al mar en la sede Málaga Terrace. Acabados modernos, luz del mar y todas las comodidades." },
      it: { title: "Ufficio Privato Piccolo — Málaga Terrace", description: "Un luminoso ufficio privato per 1–3 persone con vista oceano nella sede Málaga Terrace. Finitura moderna, luce del mare e tutti i servizi." },
    },
    sizeLabel: { en: "Small Office", es: "Oficina Pequeña", it: "Ufficio Piccolo" },
    location: { en: "Málaga Terrace — Seaside", es: "Málaga Terrace — Frente al Mar", it: "Málaga Terrace — Lungomare" },
    capacity: { en: "1–3 people", es: "1–3 personas", it: "1–3 persone" },
    description: {
      en: "A bright modern office with ocean views at the Málaga Terrace location. The fresh contemporary fit-out and sea light create an inspiring atmosphere for deep work. Step outside and you're steps from the Mediterranean — ideal for anyone who finds the sea is the best background for creative thinking.",
      es: "Una oficina moderna y luminosa con vistas al océano en la sede Málaga Terrace. El moderno acabado contemporáneo y la luz del mar crean una atmósfera inspiradora para el trabajo concentrado. Sal y estarás a pasos del Mediterráneo.",
      it: "Un luminoso ufficio moderno con vista oceano nella sede Málaga Terrace. La fresca finitura contemporanea e la luce del mare creano un'atmosfera ispiratrice per il lavoro in profondità. Esci e sei a pochi passi dal Mediterraneo.",
    },
    features: {
      en: ["Ocean view", "Air conditioning", "Modern fit-out", "Private"],
      es: ["Vista al mar", "Aire acondicionado", "Acabados modernos", "Privada"],
      it: ["Vista oceano", "Aria condizionata", "Finitura moderna", "Privato"],
    },
    amenities: {
      en: ["High-Speed WiFi", "Air Conditioning", "Ocean View", "Modern Fit-out", "Reception Support", "Secure Access", "Cleaning Service", "Rooftop Access"],
      es: ["WiFi Alta Velocidad", "Aire Acondicionado", "Vista al Océano", "Acabados Modernos", "Soporte Recepción", "Acceso Seguro", "Servicio de Limpieza", "Acceso Azotea"],
      it: ["WiFi Alta Velocità", "Aria Condizionata", "Vista Oceano", "Finitura Moderna", "Supporto Reception", "Accesso Sicuro", "Servizio di Pulizia", "Accesso Terrazza"],
    },
    idealFor: {
      en: ["Remote workers", "Digital nomads", "Creative freelancers", "Coaches & consultants", "Startup founders"],
      es: ["Trabajadores remotos", "Nómadas digitales", "Freelancers creativos", "Coaches y consultores", "Fundadores de startups"],
      it: ["Lavoratori da remoto", "Nomadi digitali", "Freelance creativi", "Coach e consulenti", "Founder di startup"],
    },
  },
  {
    slug: "terrace-medium",
    image: terrace2,
    seo: {
      en: { title: "Medium Private Office — Málaga Terrace", description: "An open-plan 4–8 person office on the 4th floor with partial sea views at Málaga Terrace. Bright, collaborative, and steps from the Mediterranean." },
      es: { title: "Oficina Privada Mediana — Málaga Terrace", description: "Una oficina de planta abierta para 4–8 personas en la 4ª planta con vistas parciales al mar en Málaga Terrace." },
      it: { title: "Ufficio Privato Medio — Málaga Terrace", description: "Un ufficio open-plan per 4–8 persone al 4° piano con vista parziale sul mare a Málaga Terrace." },
    },
    sizeLabel: { en: "Medium Office", es: "Oficina Mediana", it: "Ufficio Medio" },
    location: { en: "Málaga Terrace — Seaside", es: "Málaga Terrace — Frente al Mar", it: "Málaga Terrace — Lungomare" },
    capacity: { en: "4–8 people", es: "4–8 personas", it: "4–8 persone" },
    description: {
      en: "An open-plan mid-size office on the 4th floor with partial sea views. Perfect for small teams who want a bright, collaborative space with a contemporary feel. The generous natural light and coastal energy make this one of our most popular offices for teams doing their best creative work.",
      es: "Una oficina mediana de planta abierta en la 4ª planta con vistas parciales al mar. Perfecta para equipos pequeños que quieren un espacio luminoso y colaborativo con un toque contemporáneo.",
      it: "Un ufficio open-plan di medie dimensioni al 4° piano con vista parziale sul mare. Perfetto per piccoli team che vogliono uno spazio luminoso e collaborativo con un tocco contemporaneo.",
    },
    features: {
      en: ["Partial sea view", "Air conditioning", "Open layout", "4th floor"],
      es: ["Vista parcial al mar", "Aire acondicionado", "Planta abierta", "4ª planta"],
      it: ["Vista parziale mare", "Aria condizionata", "Layout aperto", "4° piano"],
    },
    amenities: {
      en: ["High-Speed WiFi", "Air Conditioning", "Partial Sea View", "Open Layout", "4th Floor", "Reception Support", "Secure Access", "Cleaning Service"],
      es: ["WiFi Alta Velocidad", "Aire Acondicionado", "Vista Parcial al Mar", "Planta Abierta", "4ª Planta", "Soporte Recepción", "Acceso Seguro", "Servicio de Limpieza"],
      it: ["WiFi Alta Velocità", "Aria Condizionata", "Vista Parziale Mare", "Layout Aperto", "4° Piano", "Supporto Reception", "Accesso Sicuro", "Servizio di Pulizia"],
    },
    idealFor: {
      en: ["Small teams", "Creative agencies", "Tech startups", "Product teams", "Marketing teams"],
      es: ["Equipos pequeños", "Agencias creativas", "Startups tech", "Equipos de producto", "Equipos de marketing"],
      it: ["Piccoli team", "Agenzie creative", "Startup tech", "Team di prodotto", "Team marketing"],
    },
  },
  {
    slug: "terrace-large",
    image: terraceCommunity,
    seo: {
      en: { title: "Large Private Office — Málaga Terrace", description: "The top-floor office suite at Málaga Terrace with panoramic sea and city views. Fully isolated for 9–20 people." },
      es: { title: "Oficina Privada Grande — Málaga Terrace", description: "La suite de oficina en la última planta de Málaga Terrace con vistas panorámicas al mar y la ciudad. Totalmente aislada para 9–20 personas." },
      it: { title: "Ufficio Privato Grande — Málaga Terrace", description: "La suite ufficio all'ultimo piano di Málaga Terrace con vista panoramica sul mare e sulla città. Completamente isolata per 9–20 persone." },
    },
    sizeLabel: { en: "Large Office", es: "Oficina Grande", it: "Ufficio Grande" },
    location: { en: "Málaga Terrace — Seaside", es: "Málaga Terrace — Frente al Mar", it: "Málaga Terrace — Lungomare" },
    capacity: { en: "9–20 people", es: "9–20 personas", it: "9–20 persone" },
    description: {
      en: "The top-floor office suite with panoramic views of the sea and city. Fully isolated for complete privacy and concentration. The 5th-floor position places your team above the roofline of the old city — a rare vantage point that turns the workday into something worth looking forward to.",
      es: "La suite de oficina en la última planta con vistas panorámicas al mar y la ciudad. Totalmente aislada para completa privacidad y concentración. La posición en el 5.º piso sitúa a tu equipo por encima del perfil del casco antiguo — un mirador inusual que transforma la jornada laboral.",
      it: "La suite ufficio all'ultimo piano con vista panoramica sul mare e sulla città. Completamente isolata per massima privacy e concentrazione. La posizione al 5° piano colloca il tuo team sopra il profilo del centro storico — un punto di vista raro che trasforma la giornata lavorativa.",
    },
    features: {
      en: ["5th floor", "Panoramic views", "Air conditioning", "Fully isolated"],
      es: ["5ª planta", "Vistas panorámicas", "Aire acondicionado", "Totalmente aislada"],
      it: ["5° piano", "Vista panoramica", "Aria condizionata", "Completamente isolato"],
    },
    amenities: {
      en: ["High-Speed WiFi", "Air Conditioning", "Panoramic Views", "5th Floor", "Fully Isolated", "Reception Support", "Secure Access", "Cleaning Service", "Rooftop Access"],
      es: ["WiFi Alta Velocidad", "Aire Acondicionado", "Vistas Panorámicas", "5ª Planta", "Totalmente Aislada", "Soporte Recepción", "Acceso Seguro", "Servicio de Limpieza", "Acceso Azotea"],
      it: ["WiFi Alta Velocità", "Aria Condizionata", "Vista Panoramica", "5° Piano", "Completamente Isolato", "Supporto Reception", "Accesso Sicuro", "Servizio di Pulizia", "Accesso Terrazza"],
    },
    idealFor: {
      en: ["Established companies", "Executive teams", "Agencies", "Tech scale-ups", "International teams"],
      es: ["Empresas consolidadas", "Equipos directivos", "Agencias", "Scale-ups tech", "Equipos internacionales"],
      it: ["Aziende consolidate", "Team esecutivi", "Agenzie", "Scale-up tech", "Team internazionali"],
    },
  },
];

/* ─── Route map ──────────────────────────────────────────── */
export const officePaths: Record<string, Record<string, string>> = {
  en: {
    "palace-small": "/en/private-offices/palace-small",
    "palace-medium": "/en/private-offices/palace-medium",
    "palace-large": "/en/private-offices/palace-large",
    "terrace-small": "/en/private-offices/terrace-small",
    "terrace-medium": "/en/private-offices/terrace-medium",
    "terrace-large": "/en/private-offices/terrace-large",
  },
  es: {
    "palace-small": "/es/oficinas-privadas/palace-small",
    "palace-medium": "/es/oficinas-privadas/palace-medium",
    "palace-large": "/es/oficinas-privadas/palace-large",
    "terrace-small": "/es/oficinas-privadas/terrace-small",
    "terrace-medium": "/es/oficinas-privadas/terrace-medium",
    "terrace-large": "/es/oficinas-privadas/terrace-large",
  },
  it: {
    "palace-small": "/it/uffici-privati/palace-small",
    "palace-medium": "/it/uffici-privati/palace-medium",
    "palace-large": "/it/uffici-privati/palace-large",
    "terrace-small": "/it/uffici-privati/terrace-small",
    "terrace-medium": "/it/uffici-privati/terrace-medium",
    "terrace-large": "/it/uffici-privati/terrace-large",
  },
};

const backPaths: Record<string, string> = {
  en: "/en/private-offices",
  es: "/es/oficinas-privadas",
  it: "/it/uffici-privati",
};

/* ─── Amenity icon map ───────────────────────────────────── */
const amenityIconMap: [string, React.ElementType][] = [
  ["WiFi", Wifi], ["Air", Wind], ["Climatiz", Wind], ["Aire", Wind],
  ["Secure", KeyRound], ["Acceso", KeyRound], ["Accesso", KeyRound],
  ["Reception", Users], ["Soporte", Users], ["Supporto", Users],
  ["Catering", UtensilsCrossed], ["Coffee", Coffee], ["Café", Coffee], ["Caffè", Coffee],
  ["View", Eye], ["Vista", Eye], ["View", Eye],
  ["Kitchen", Coffee], ["Cocina", Coffee], ["Cucina", Coffee],
];

function getAmenityIcon(label: string): React.ElementType {
  for (const [key, Icon] of amenityIconMap) {
    if (label.includes(key)) return Icon;
  }
  return Building2;
}

/* ─── i18n labels ────────────────────────────────────────── */
const labels = {
  en: {
    back: "All Private Offices",
    about: "About This Office",
    idealFor: "Ideal For",
    included: "What's included",
    requestInfo: "Request Information",
    noCommitment: "Free · No commitment · Reply within 1 business day",
    otherOffices: "Other offices you might like",
  },
  es: {
    back: "Todas las Oficinas",
    about: "Sobre Esta Oficina",
    idealFor: "Ideal Para",
    included: "Qué está incluido",
    requestInfo: "Solicitar Información",
    noCommitment: "Gratis · Sin compromiso · Respuesta en 1 día laborable",
    otherOffices: "Otras oficinas que podrían interesarte",
  },
  it: {
    back: "Tutti gli Uffici",
    about: "Su Questo Ufficio",
    idealFor: "Ideale Per",
    included: "Cosa è incluso",
    requestInfo: "Richiedi Informazioni",
    noCommitment: "Gratuito · Senza impegno · Risposta entro 1 giorno lavorativo",
    otherOffices: "Altri uffici che potrebbero piacerti",
  },
};

/* ─── Main component ─────────────────────────────────────── */
interface OfficeDetailPageProps { officeSlug: string; lang?: "en" | "es" | "it" }

export default function OfficeDetailPage({ officeSlug, lang: langProp }: OfficeDetailPageProps) {
  const location = useLocation();
  const lang = langProp ?? (location.pathname.startsWith("/es") ? "es" : location.pathname.startsWith("/it") ? "it" : "en");
  const formRef = useRef<HTMLDivElement>(null);
  const office = offices.find((o) => o.slug === officeSlug);
  const t = labels[lang];

  if (!office) return null;

  const otherOffices = offices.filter((o) => o.slug !== officeSlug).slice(0, 4);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* ── Hero ───────────────────────────────────────────── */}
      <section className="relative h-[65vh] min-h-[420px] flex items-end">
        <img
          src={_s(office.image)}
          alt={office.sizeLabel[lang]}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/40 to-transparent" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, transparent 30%)" }} />
        <div className="relative z-10 max-w-6xl mx-auto px-6 pb-12 w-full">
          <Link
            to={backPaths[lang]}
            className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm font-body mb-4 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            {t.back}
          </Link>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white">
            {office.sizeLabel[lang]}
          </h1>
          <p className="font-body text-white/70 mt-2 flex items-center gap-2">
            <Users className="w-4 h-4" />
            {office.capacity[lang]} · {office.location[lang]}
          </p>
        </div>
      </section>

      {/* ── Content + Sidebar ──────────────────────────────── */}
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">

          {/* ── Left column ──────────────────────────── */}
          <div className="lg:col-span-8 space-y-12">

            {/* Description */}
            <div>
              <p className="font-body text-xs uppercase tracking-[0.3em] text-primary mb-3">{t.about}</p>
              <p className="font-body text-foreground/80 leading-relaxed">{office.description[lang]}</p>
            </div>

            {/* Feature pills */}
            <div className="flex flex-wrap gap-2 pb-2 border-b border-border">
              {office.features[lang].map((f, i) => (
                <span key={i} className="font-body text-sm px-3 py-1.5 rounded-full bg-muted text-foreground">
                  {f}
                </span>
              ))}
            </div>

            {/* Ideal For */}
            <div>
              <p className="font-body text-xs uppercase tracking-[0.3em] text-primary mb-4">{t.idealFor}</p>
              <div className="flex flex-wrap gap-2">
                {office.idealFor[lang].map((item, i) => (
                  <span key={i} className="flex items-center gap-2 font-body text-sm px-3 py-1.5 rounded-full bg-muted text-foreground">
                    <div className="w-1 h-1 rounded-full bg-primary shrink-0" />
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Other offices */}
            <div>
              <p className="font-body text-xs uppercase tracking-[0.3em] text-primary mb-5">{t.otherOffices}</p>
              <div className="grid sm:grid-cols-2 gap-3">
                {otherOffices.map((o) => (
                  <Link
                    key={o.slug}
                    to={officePaths[lang][o.slug]}
                    className="flex items-center gap-4 p-4 rounded-xl border border-border hover:border-primary/50 hover:shadow-sm transition-all group"
                  >
                    <img src={_s(o.image)} alt={o.sizeLabel[lang]} className="w-16 h-12 object-cover rounded-lg shrink-0" />
                    <div>
                      <h3 className="font-display text-sm font-bold text-foreground group-hover:text-primary transition-colors">{o.sizeLabel[lang]}</h3>
                      <p className="font-body text-xs text-muted-foreground mt-0.5">{o.capacity[lang]} · {o.location[lang].split("—")[0].trim()}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* ── Right: Sticky sidebar ─────────────────── */}
          <div className="hidden lg:block lg:col-span-4">
            <div className="sticky top-24 rounded-2xl border border-border shadow-sm p-6 space-y-5">
              <div>
                <h2 className="font-display text-xl font-bold text-foreground">{office.sizeLabel[lang]}</h2>
                <p className="font-body text-sm text-muted-foreground mt-1 flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  {office.capacity[lang]}
                </p>
                <p className="font-body text-xs text-muted-foreground mt-1">{office.location[lang]}</p>
              </div>

              <div className="space-y-1.5">
                {office.features[lang].map((f, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm font-body text-foreground/80">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    {f}
                  </div>
                ))}
              </div>

              <div className="border-t border-border pt-4">
                <p className="font-body text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">{t.included}</p>
                <div className="grid grid-cols-2 gap-x-3 gap-y-2">
                  {office.amenities[lang].map((a, i) => {
                    const Icon = getAmenityIcon(a);
                    return (
                      <div key={i} className="flex items-center gap-1.5 font-body text-xs text-foreground/70">
                        <Icon className="w-3 h-3 text-primary shrink-0" />
                        <span className="leading-tight">{a}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="border-t border-border pt-4">
                <Button className="w-full h-12 text-base font-semibold" onClick={scrollToForm}>
                  {t.requestInfo}
                </Button>
                <p className="text-center font-body text-xs text-muted-foreground mt-2">{t.noCommitment}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Lead Form ──────────────────────────────────────── */}
      <div ref={formRef}>
        <LeadForm lang={lang} defaultService="office" />
      </div>

      {/* ── Mobile sticky CTA ──────────────────────────────── */}
      <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-background/95 backdrop-blur-sm border-t border-border px-4 py-3">
        <Button className="w-full" onClick={scrollToForm}>
          {t.requestInfo}
        </Button>
      </div>
    </>
  );
}
