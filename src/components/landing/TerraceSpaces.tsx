import { Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLang } from "@/lib/lang-context";

const _s = (img: unknown): string => typeof img === 'string' ? img : (img as any)?.src ?? '';

const fullTerraceGlob = import.meta.glob('@/assets/full-terrace-*.webp', { eager: true });
const fullTerracePhotos: string[] = Object.keys(fullTerraceGlob).sort().map((k) => _s(fullTerraceGlob[k]));

const spaceImages: Record<string, string> = {
  "full-terrace": fullTerracePhotos[0] || "",
  "half-terrace": fullTerracePhotos[4] || fullTerracePhotos[0] || "",
};

const detailBase: Record<"en" | "es" | "it", string> = {
  en: "/en/private-terrace",
  es: "/es/terraza-privada",
  it: "/it/terrazza-privada",
};

const translations = {
  en: {
    tagline: "Our Spaces",
    title: "Choose Your Terrace Experience",
    badge: "Terrace",
    viewDetails: "View Details",
    spaces: [
      {
        id: "full-terrace",
        name: "Full Terrace Experience",
        capacity: "Up to 120 people",
        features: ["Full Terrace Exclusive Use", "Panoramic Sea & City Views", "Full Bar Service", "Custom Catering", "Flexible Seating", "Sound System"],
      },
      {
        id: "half-terrace",
        name: "Half Terrace Experience",
        capacity: "Up to 60 people",
        features: ["Half Terrace Exclusive Use", "Sea & City Views", "Bar Service", "Catering Available", "Flexible Seating", "Private Area"],
      },
    ],
  },
  es: {
    tagline: "Nuestros Espacios",
    title: "Elige Tu Experiencia",
    badge: "Terraza",
    viewDetails: "Ver Detalles",
    spaces: [
      {
        id: "full-terrace",
        name: "Experiencia Terraza Completa",
        capacity: "Hasta 120 personas",
        features: ["Uso Exclusivo Terraza Completa", "Vistas Panorámicas al Mar", "Servicio de Barra Completo", "Catering a Medida", "Asientos Flexibles", "Sistema de Sonido"],
      },
      {
        id: "half-terrace",
        name: "Experiencia Media Terraza",
        capacity: "Hasta 60 personas",
        features: ["Uso Exclusivo Media Terraza", "Vistas al Mar y la Ciudad", "Servicio de Barra", "Catering Disponible", "Asientos Flexibles", "Área Privada"],
      },
    ],
  },
  it: {
    tagline: "I Nostri Spazi",
    title: "Scegli la Tua Esperienza",
    badge: "Terrazza",
    viewDetails: "Vedi Dettagli",
    spaces: [
      {
        id: "full-terrace",
        name: "Esperienza Terrazza Completa",
        capacity: "Fino a 120 persone",
        features: ["Uso Esclusivo Terrazza Completa", "Vista Panoramica sul Mare", "Servizio Bar Completo", "Catering su Misura", "Sedute Flessibili", "Sistema Audio"],
      },
      {
        id: "half-terrace",
        name: "Esperienza Mezza Terrazza",
        capacity: "Fino a 60 persone",
        features: ["Uso Esclusivo Mezza Terrazza", "Vista Mare e Città", "Servizio Bar", "Catering Disponibile", "Sedute Flessibili", "Area Privata"],
      },
    ],
  },
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

        <div className="grid grid-cols-1 gap-6">
          {t.spaces.map((space) => {
            const roomPath = `${detailBase[lang]}/${space.id}`;
            const image = spaceImages[space.id];

            return (
              <Card
                key={space.id}
                className="relative overflow-hidden border-2 border-primary bg-primary/5 transition-all duration-300 hover:shadow-lg"
              >
                {image && (
                  <div className="w-full h-48 md:h-64 overflow-hidden">
                    <img
                      src={image}
                      alt={space.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                )}
                <Badge className="absolute top-4 right-4 bg-background/90 text-foreground border border-border backdrop-blur-sm">
                  {t.badge}
                </Badge>
                <CardHeader>
                  <CardTitle className="font-display text-2xl md:text-3xl">
                    <a href={roomPath} className="hover:text-primary transition-colors">
                      {space.name}
                    </a>
                  </CardTitle>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Users className="w-4 h-4" />
                    <span className="font-body text-sm">{space.capacity}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
                    {space.features.map((feature, j) => (
                      <div key={j} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span className="font-body">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button asChild variant="default" className="bg-primary hover:bg-primary/90">
                    <a href={roomPath}>{t.viewDetails}</a>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
