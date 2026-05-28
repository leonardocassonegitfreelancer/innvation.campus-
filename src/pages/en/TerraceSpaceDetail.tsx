import { ArrowLeft, Users, CheckCircle2 } from "lucide-react";

const _s = (img: unknown): string =>
  typeof img === "string" ? img : (img as any)?.src ?? "";

const fullTerraceGlob = import.meta.glob('@/assets/full-terrace-*.webp', { eager: true });
const fullTerracePhotos: string[] = Object.keys(fullTerraceGlob).sort().map((k) => _s(fullTerraceGlob[k]));

export type SpaceId = "full-terrace" | "half-terrace";

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

const spaceSlugMap: Record<SpaceId, string> = {
  "full-terrace": "seaside-terrace",
  "half-terrace": "private-terrace",
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
      name: "Full Terrace Experience",
      capacity: "Up to 120 guests",
      description: "Our flagship outdoor venue on the rooftop of Málaga Terrace. The full terrace is available for exclusive hire — perfect for corporate events, product launches, private parties and networking evenings under the Málaga sky with panoramic sea and city views.",
      features: ["Full Terrace Exclusive Use", "Panoramic Sea & City Views", "Full Bar Service", "Custom Catering", "Flexible Seating", "Ambient Lighting", "Sound System", "Private Access"],
      cta: "Request a Quote",
    },
    "half-terrace": {
      name: "Half Terrace Experience",
      capacity: "Up to 60 guests",
      description: "Half of our rooftop terrace for a more intimate setting, without giving up the views. Ideal for smaller corporate events, team celebrations, cocktail receptions and private dinners with sea views.",
      features: ["Half Terrace Exclusive Use", "Sea & City Views", "Bar Service", "Catering Available", "Flexible Seating", "Ambient Lighting", "Private Area"],
      cta: "Request a Quote",
    },
  },
  es: {
    "full-terrace": {
      name: "Experiencia Terraza Completa",
      capacity: "Hasta 120 personas",
      description: "Nuestro espacio exterior principal en la azotea de Málaga Terrace, disponible en exclusiva. Perfecto para eventos corporativos, lanzamientos de productos, fiestas privadas y veladas de networking bajo el cielo de Málaga con vistas panorámicas al mar y la ciudad.",
      features: ["Uso Exclusivo Terraza Completa", "Vistas Panorámicas al Mar", "Servicio de Barra Completo", "Catering a Medida", "Asientos Flexibles", "Iluminación Ambiental", "Sistema de Sonido", "Acceso Privado"],
      cta: "Solicitar Presupuesto",
    },
    "half-terrace": {
      name: "Experiencia Media Terraza",
      capacity: "Hasta 60 personas",
      description: "La mitad de nuestra terraza en azotea para un ambiente más íntimo, sin renunciar a las vistas. Ideal para eventos corporativos más pequeños, celebraciones de equipo, recepciones de cócteles y cenas privadas con vistas al mar.",
      features: ["Uso Exclusivo Media Terraza", "Vistas al Mar y la Ciudad", "Servicio de Barra", "Catering Disponible", "Asientos Flexibles", "Iluminación Ambiental", "Área Privada"],
      cta: "Solicitar Presupuesto",
    },
  },
  it: {
    "full-terrace": {
      name: "Esperienza Terrazza Completa",
      capacity: "Fino a 120 persone",
      description: "Il nostro spazio esterno principale sul rooftop di Málaga Terrace, disponibile in esclusiva. Perfetto per eventi aziendali, lanci di prodotti, feste private e serate di networking sotto il cielo di Málaga con vista panoramica sul mare e sulla città.",
      features: ["Uso Esclusivo Terrazza Completa", "Vista Panoramica sul Mare", "Servizio Bar Completo", "Catering su Misura", "Sedute Flessibili", "Illuminazione Ambientale", "Sistema Audio", "Accesso Privato"],
      cta: "Richiedi Preventivo",
    },
    "half-terrace": {
      name: "Esperienza Mezza Terrazza",
      capacity: "Fino a 60 persone",
      description: "Metà della nostra terrazza sul rooftop per un'atmosfera più intima, senza rinunciare alla vista. Ideale per eventi aziendali più piccoli, celebrazioni di team, ricevimenti cocktail e cene private con vista sul mare.",
      features: ["Uso Esclusivo Mezza Terrazza", "Vista Mare e Città", "Servizio Bar", "Catering Disponibile", "Sedute Flessibili", "Illuminazione Ambientale", "Area Privata"],
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
  const photos = spaceId === "full-terrace" ? fullTerracePhotos : fullTerracePhotos.slice(0, 6);
  const heroPhoto = photos[0] || "";

  return (
    <main className="pt-20 bg-background min-h-screen">
      {/* Hero */}
      <div className="relative h-[55vh] min-h-[360px] overflow-hidden">
        {heroPhoto && (
          <img src={heroPhoto} alt={space.name} className="w-full h-full object-cover" />
        )}
        <div className="absolute inset-0 bg-neutral-dark/55" />
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
              {lang === "en" ? "What's included" : lang === "es" ? "Qué incluye" : "Cosa è incluso"}
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

          {/* Photo grid */}
          {photos.length > 1 && (
            <div>
              <p className="font-body text-xs uppercase tracking-widest text-primary font-semibold mb-6">
                {lang === "en" ? "Gallery" : lang === "es" ? "Galería" : "Galleria"}
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {photos.slice(1, 7).map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt={`${space.name} ${i + 2}`}
                    className="w-full h-48 object-cover rounded-lg"
                    loading="lazy"
                  />
                ))}
              </div>
            </div>
          )}
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
              {lang === "en"
                ? "We'll get back to you within 24 hours with a tailored proposal."
                : lang === "es"
                ? "Te responderemos en 24 horas con una propuesta personalizada."
                : "Ti risponderemo entro 24 ore con una proposta su misura."}
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
