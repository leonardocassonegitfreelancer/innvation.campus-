import { Users, Wine, Sun, Music, GlassWater } from "lucide-react";
import terraceHero from "@/assets/terrace-hero.webp";
import terraceBar from "@/assets/terrace-bar.webp";
import terraceEvents from "@/assets/terrace-events.webp";
import terraceCommunity from "@/assets/terrace-community.webp";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLang } from "@/lib/lang-context";

const _s = (img: unknown): string => typeof img === 'string' ? img : (img as any)?.src ?? '';

const translations = {
  en: {
    tagline: "Our Spaces",
    title: "Choose Your Terrace Experience",
    flagship: "popular",
    requestQuote: "Request Quote",
    spaces: [
      {
        id: "full-terrace",
        name: "Full Terrace",
        capacity: "Up to 100 people",
        features: ["Premium Bar Access", "Panoramic City Views", "Custom Catering", "Flexible Seating"],
        highlight: true,
      },
      {
        id: "lounge-corner",
        name: "Lounge Corner",
        capacity: "Up to 30 people",
        features: ["Cozy Seating", "Sunset Views", "Dedicated Waitstaff", "Intimate Setting"],
        highlight: false,
      },
      {
        id: "networking-layout",
        name: "Networking Layout",
        capacity: "Up to 60 people",
        features: ["Standing Tables", "Cocktail Bar", "Background Music", "Spacious Flow"],
        highlight: false,
      },
      {
        id: "private-dining",
        name: "Private Dining",
        capacity: "Up to 20 people",
        features: ["Imperial Table", "Private Chef Menus", "Wine Pairing", "Exclusive Area"],
        highlight: false,
      },
    ],
  },
  es: {
    tagline: "Nuestros Espacios",
    title: "Elige Tu Experiencia",
    flagship: "más popular",
    requestQuote: "Solicitar Presupuesto",
    spaces: [
      {
        id: "full-terrace",
        name: "Terraza Completa",
        capacity: "Hasta 100 personas",
        features: ["Acceso a Barra Premium", "Vistas Panorámicas", "Catering a Medida", "Asientos Flexibles"],
        highlight: true,
      },
      {
        id: "lounge-corner",
        name: "Rincón Lounge",
        capacity: "Hasta 30 personas",
        features: ["Asientos Acogedores", "Vistas al Atardecer", "Camareros", "Ambiente Íntimo"],
        highlight: false,
      },
      {
        id: "networking-layout",
        name: "Zona de Networking",
        capacity: "Hasta 60 personas",
        features: ["Mesas Altas", "Barra de Cócteles", "Música de Fondo", "Flujo Espacioso"],
        highlight: false,
      },
      {
        id: "private-dining",
        name: "Cena Privada",
        capacity: "Hasta 20 personas",
        features: ["Mesa Imperial", "Menús Privados", "Maridaje", "Área Exclusiva"],
        highlight: false,
      },
    ],
  },
  it: {
    tagline: "I Nostri Spazi",
    title: "Scegli la Tua Esperienza",
    flagship: "popolare",
    requestQuote: "Richiedi Preventivo",
    spaces: [
      {
        id: "full-terrace",
        name: "Terrazza Completa",
        capacity: "Fino a 100 persone",
        features: ["Accesso Bar Premium", "Vista Panoramica", "Catering su Misura", "Sedute Flessibili"],
        highlight: true,
      },
      {
        id: "lounge-corner",
        name: "Area Lounge",
        capacity: "Fino a 30 persone",
        features: ["Sedute Accoglienti", "Vista Tramonto", "Camerieri Dedicati", "Ambiente Intimo"],
        highlight: false,
      },
      {
        id: "networking-layout",
        name: "Layout Networking",
        capacity: "Fino a 60 persone",
        features: ["Tavolini Alti", "Cocktail Bar", "Musica di Sottofondo", "Spazio Aperto"],
        highlight: false,
      },
      {
        id: "private-dining",
        name: "Cena Privata",
        capacity: "Fino a 20 persone",
        features: ["Tavolo Imperiale", "Menu Chef", "Degustazione Vini", "Area Esclusiva"],
        highlight: false,
      },
    ],
  },
};

const spaceImages: Record<string, string> = {
  "full-terrace": terraceHero,
  "lounge-corner": terraceBar,
  "networking-layout": terraceEvents,
  "private-dining": terraceCommunity,
};

export default function TerraceSpaces() {
  const lang = useLang();
  const t = translations[lang];

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="font-body text-xs uppercase tracking-[0.3em] text-primary mb-4 font-semibold">
            {t.tagline}
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            {t.title}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {t.spaces.map((space) => {
            return (
              <Card
                key={space.id}
                className={`relative overflow-hidden transition-all duration-300 hover:shadow-lg ${
                  space.highlight
                    ? "border-2 border-primary bg-primary/5 md:col-span-2"
                    : "border-border"
                }`}
              >
                {spaceImages[space.id] && (
                  <div className={`w-full ${space.highlight ? "h-48 md:h-64" : "h-40 md:h-48"} overflow-hidden`}>
                    <img
                      src={_s(spaceImages[space.id])}
                      alt={space.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                )}
                {space.highlight && (
                  <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
                    {t.flagship}
                  </Badge>
                )}
                <CardHeader>
                  <CardTitle className={`font-display ${space.highlight ? "text-2xl md:text-3xl" : "text-xl"}`}>
                    {space.name}
                  </CardTitle>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Users className="w-4 h-4" />
                    <span className="font-body text-sm">{space.capacity}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className={`grid ${space.highlight ? "grid-cols-2 md:grid-cols-4" : "grid-cols-2"} gap-3 mb-6`}>
                    {space.features.map((feature, j) => (
                      <div key={j} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span className="font-body">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Button
                      asChild
                      variant={space.highlight ? "default" : "outline"}
                      className={space.highlight ? "bg-primary hover:bg-primary/90" : ""}
                    >
                      <a href="/#contact">{t.requestQuote}</a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
