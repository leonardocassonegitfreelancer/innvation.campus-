import { ArrowLeft, Users, CheckCircle2 } from "lucide-react";
import terraceHero from "@/assets/terrace-hero.webp";
import terraceBar from "@/assets/terrace-bar.webp";
import terraceEvents from "@/assets/terrace-events.webp";
import terraceCommunity from "@/assets/terrace-community.webp";

const _s = (img: unknown): string =>
  typeof img === "string" ? img : (img as any)?.src ?? "";

type SpaceId = "full-terrace" | "lounge-corner" | "networking-layout" | "private-dining";

const spaceImages: Record<SpaceId, unknown> = {
  "full-terrace": terraceHero,
  "lounge-corner": terraceBar,
  "networking-layout": terraceEvents,
  "private-dining": terraceCommunity,
};

const spaceSlugMap: Record<SpaceId, string> = {
  "full-terrace": "seaside-terrace",
  "lounge-corner": "private-terrace",
  "networking-layout": "seaside-terrace",
  "private-dining": "private-terrace",
};

const leadBase: Record<"en" | "es" | "it", string> = {
  en: "/en/lead",
  es: "/es/lead",
  it: "/it/lead",
};

const backBase: Record<"en" | "es" | "it", { href: string; label: string }> = {
  en: { href: "/en/private-terrace", label: "Back to private terrace" },
  es: { href: "/es/terraza-privada", label: "Volver a la terraza privada" },
  it: { href: "/it/terrazza-privata", label: "Torna alla terrazza privata" },
};

const data: Record<"en" | "es" | "it", Record<SpaceId, {
  name: string;
  capacity: string;
  description: string;
  features: string[];
  cta: string;
}>> = {
  en: {
    "full-terrace": {
      name: "Full Terrace",
      capacity: "Up to 100 guests",
      description: "Our flagship outdoor venue. Perfect for corporate events, product launches, and networking evenings under the Málaga sky with panoramic city views.",
      features: ["Premium Bar Access", "Panoramic City Views", "Custom Catering", "Flexible Seating", "Ambient Lighting", "Private Access"],
      cta: "Request a Quote",
    },
    "lounge-corner": {
      name: "Lounge Corner",
      capacity: "Up to 30 guests",
      description: "An intimate corner of our terrace designed for smaller gatherings. Perfect for team celebrations, client dinners, and private cocktail receptions.",
      features: ["Cozy Seating", "Sunset Views", "Dedicated Waitstaff", "Intimate Setting", "Cocktail Menu", "Private Area"],
      cta: "Request a Quote",
    },
    "networking-layout": {
      name: "Networking Layout",
      capacity: "Up to 60 guests",
      description: "Designed for flow and connection. Standing tables, a cocktail bar, and open space create the ideal setting for networking events and cocktail parties.",
      features: ["Standing Tables", "Cocktail Bar", "Background Music", "Spacious Flow", "Bar Service", "Outdoor Terrace"],
      cta: "Request a Quote",
    },
    "private-dining": {
      name: "Private Dining",
      capacity: "Up to 20 guests",
      description: "An exclusive dining experience for your most important occasions. Private chef menus, curated wine pairings, and a fully dedicated area just for your group.",
      features: ["Imperial Table", "Private Chef Menus", "Wine Pairing", "Exclusive Area", "Sommelier Service", "Custom Menu"],
      cta: "Request a Quote",
    },
  },
  es: {
    "full-terrace": {
      name: "Terraza Completa",
      capacity: "Hasta 100 personas",
      description: "Nuestro espacio exterior principal. Perfecto para eventos corporativos, lanzamientos de productos y veladas de networking bajo el cielo de Málaga.",
      features: ["Acceso a Barra Premium", "Vistas Panorámicas", "Catering a Medida", "Asientos Flexibles", "Iluminación Ambiental", "Acceso Privado"],
      cta: "Solicitar Presupuesto",
    },
    "lounge-corner": {
      name: "Rincón Lounge",
      capacity: "Hasta 30 personas",
      description: "Un rincón íntimo de nuestra terraza diseñado para grupos pequeños. Perfecto para celebraciones de equipo, cenas con clientes y recepciones de cócteles.",
      features: ["Asientos Acogedores", "Vistas al Atardecer", "Camareros Dedicados", "Ambiente Íntimo", "Menú de Cócteles", "Área Privada"],
      cta: "Solicitar Presupuesto",
    },
    "networking-layout": {
      name: "Zona de Networking",
      capacity: "Hasta 60 personas",
      description: "Diseñado para conectar. Mesas altas, barra de cócteles y espacio abierto crean el escenario ideal para eventos de networking y cocktail parties.",
      features: ["Mesas Altas", "Barra de Cócteles", "Música de Fondo", "Flujo Espacioso", "Servicio de Barra", "Terraza Exterior"],
      cta: "Solicitar Presupuesto",
    },
    "private-dining": {
      name: "Cena Privada",
      capacity: "Hasta 20 personas",
      description: "Una experiencia gastronómica exclusiva para tus ocasiones más importantes. Menús de chef privado, maridaje de vinos y un área totalmente reservada para tu grupo.",
      features: ["Mesa Imperial", "Menús de Chef Privado", "Maridaje de Vinos", "Área Exclusiva", "Servicio de Sommelier", "Menú Personalizado"],
      cta: "Solicitar Presupuesto",
    },
  },
  it: {
    "full-terrace": {
      name: "Terrazza Completa",
      capacity: "Fino a 100 persone",
      description: "Il nostro spazio esterno principale. Perfetto per eventi aziendali, lanci di prodotti e serate di networking sotto il cielo di Málaga con vista panoramica.",
      features: ["Accesso Bar Premium", "Vista Panoramica", "Catering su Misura", "Sedute Flessibili", "Illuminazione Ambientale", "Accesso Privato"],
      cta: "Richiedi Preventivo",
    },
    "lounge-corner": {
      name: "Area Lounge",
      capacity: "Fino a 30 persone",
      description: "Un angolo intimo della nostra terrazza progettato per gruppi più piccoli. Perfetto per celebrazioni di team, cene con clienti e ricevimenti privati.",
      features: ["Sedute Accoglienti", "Vista Tramonto", "Camerieri Dedicati", "Ambiente Intimo", "Menu Cocktail", "Area Privata"],
      cta: "Richiedi Preventivo",
    },
    "networking-layout": {
      name: "Layout Networking",
      capacity: "Fino a 60 persone",
      description: "Progettato per connettere. Tavolini alti, cocktail bar e spazio aperto creano il contesto ideale per eventi di networking e cocktail party.",
      features: ["Tavolini Alti", "Cocktail Bar", "Musica di Sottofondo", "Spazio Aperto", "Servizio Bar", "Terrazza Esterna"],
      cta: "Richiedi Preventivo",
    },
    "private-dining": {
      name: "Cena Privata",
      capacity: "Fino a 20 persone",
      description: "Un'esperienza gastronomica esclusiva per le tue occasioni più importanti. Menu dello chef privato, degustazione vini e un'area completamente riservata al tuo gruppo.",
      features: ["Tavolo Imperiale", "Menu Chef Privato", "Degustazione Vini", "Area Esclusiva", "Servizio Sommelier", "Menu Personalizzato"],
      cta: "Richiedi Preventivo",
    },
  },
};

export default function TerraceSpaceDetail({
  lang = "en",
  spaceId,
}: {
  lang?: "en" | "es" | "it";
  spaceId: SpaceId;
}) {
  const space = data[lang][spaceId];
  const back = backBase[lang];
  const leadUrl = `${leadBase[lang]}?service=private-terrace&space=${spaceSlugMap[spaceId]}`;

  return (
    <main className="pt-20 bg-background min-h-screen">
      {/* Hero */}
      <div className="relative h-[50vh] min-h-[320px] overflow-hidden">
        <img
          src={_s(spaceImages[spaceId])}
          alt={space.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-neutral-dark/50" />
        <div className="absolute bottom-0 left-0 right-0 p-8 max-w-6xl mx-auto">
          <a
            href={back.href}
            className="inline-flex items-center gap-2 font-body text-sm text-white/70 hover:text-white transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4" /> {back.label}
          </a>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-white">
            {space.name}
          </h1>
          <p className="font-body text-white/70 flex items-center gap-2 mt-2">
            <Users className="w-4 h-4" /> {space.capacity}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12">
        {/* Left */}
        <div className="space-y-10">
          <p className="font-body text-lg text-muted-foreground leading-relaxed">
            {space.description}
          </p>

          <div>
            <p className="font-body text-xs uppercase tracking-widest text-primary font-semibold mb-6">
              Included
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {space.features.map((f) => (
                <div key={f} className="flex items-center gap-3 font-body text-sm text-foreground">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  {f}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right — sticky CTA */}
        <aside className="lg:sticky lg:top-24 h-fit">
          <div className="border border-border rounded-2xl p-6 bg-card shadow-sm space-y-4">
            <p className="font-body text-xs uppercase tracking-widest text-muted-foreground font-semibold">
              {space.capacity}
            </p>
            <h2 className="font-display text-2xl font-bold text-foreground">
              {space.name}
            </h2>
            <p className="font-body text-sm text-muted-foreground">
              We'll get back to you within 24 hours with a tailored proposal.
            </p>
            <a
              href={leadUrl}
              className="block w-full text-center bg-primary text-primary-foreground font-body uppercase tracking-widest text-sm px-6 py-4 rounded-xl hover:bg-primary/90 transition-colors"
            >
              {space.cta}
            </a>
          </div>
        </aside>
      </div>
    </main>
  );
}
