import { Users, Monitor, Video, PenTool, LayoutGrid } from "lucide-react";
import conferencePicasso2 from "@/assets/conference-picasso-2.jpg";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useLocation } from "react-router-dom";

const translations = {
  en: {
    tagline: "Our Rooms",
    title: "Choose Your Space",
    flagship: "Flagship Room",
    requestQuote: "Request Quote",
    rooms: [
      {
        id: "picasso",
        name: "City Center Picasso",
        capacity: "Up to 80 people",
        features: ["85\" 4K Display", "Premium Video Conferencing", "Large Whiteboard", "Flexible Layout"],
        highlight: true,
      },
      {
        id: "half-picasso",
        name: "Half Picasso",
        capacity: "Up to 50 people",
        features: ["55\" 4K Display", "Video Conferencing", "Whiteboard", "Boardroom Setup"],
        highlight: false,
      },
      {
        id: "quarter-picasso",
        name: "Quarter Picasso",
        capacity: "Up to 30 people",
        features: ["43\" Display", "Video Conferencing", "Whiteboard", "Intimate Setting"],
        highlight: false,
      },
      {
        id: "pablo-neruda",
        name: "Pablo Neruda",
        capacity: "Up to 6 people",
        features: ["43\" Display", "Video Conferencing", "Focus Room", "Private Calls"],
        highlight: false,
      },
    ],
  },
  es: {
    tagline: "Nuestras Salas",
    title: "Elige Tu Espacio",
    flagship: "Sala Principal",
    requestQuote: "Solicitar Presupuesto",
    rooms: [
      {
        id: "picasso",
        name: "City Center Picasso",
        capacity: "Hasta 80 personas",
        features: ["Pantalla 4K 85\"", "Videoconferencia Premium", "Pizarra Grande", "Disposición Flexible"],
        highlight: true,
      },
      {
        id: "half-picasso",
        name: "Half Picasso",
        capacity: "Hasta 50 personas",
        features: ["Pantalla 4K 55\"", "Videoconferencia", "Pizarra", "Mesa de Juntas"],
        highlight: false,
      },
      {
        id: "quarter-picasso",
        name: "Quarter Picasso",
        capacity: "Hasta 30 personas",
        features: ["Pantalla 43\"", "Videoconferencia", "Pizarra", "Ambiente Íntimo"],
        highlight: false,
      },
      {
        id: "pablo-neruda",
        name: "Pablo Neruda",
        capacity: "Hasta 6 personas",
        features: ["Pantalla 43\"", "Videoconferencia", "Sala Focus", "Llamadas Privadas"],
        highlight: false,
      },
    ],
  },
  it: {
    tagline: "Le Nostre Sale",
    title: "Scegli il Tuo Spazio",
    flagship: "Sala Principale",
    requestQuote: "Richiedi Preventivo",
    rooms: [
      {
        id: "picasso",
        name: "City Center Picasso",
        capacity: "Fino a 80 persone",
        features: ["Display 4K 85\"", "Videoconferenza Premium", "Grande Lavagna", "Layout Flessibile"],
        highlight: true,
      },
      {
        id: "half-picasso",
        name: "Half Picasso",
        capacity: "Fino a 50 persone",
        features: ["Display 4K 55\"", "Videoconferenza", "Lavagna", "Configurazione Boardroom"],
        highlight: false,
      },
      {
        id: "quarter-picasso",
        name: "Quarter Picasso",
        capacity: "Fino a 30 persone",
        features: ["Display 43\"", "Videoconferenza", "Lavagna", "Ambiente Intimo"],
        highlight: false,
      },
      {
        id: "pablo-neruda",
        name: "Pablo Neruda",
        capacity: "Fino a 6 persone",
        features: ["Display 43\"", "Videoconferenza", "Sala Focus", "Chiamate Private"],
        highlight: false,
      },
    ],
  },
};

const roomSlugs = ["big-conference-room", "half-conference-room", "quarter-room", "meeting-room"];

const roomPaths: Record<string, Record<string, string>> = {
  en: {
    "big-conference-room": "/en/meeting-rooms/big-conference-room",
    "half-conference-room": "/en/meeting-rooms/half-conference-room",
    "quarter-room": "/en/meeting-rooms/quarter-room",
    "meeting-room": "/en/meeting-rooms/meeting-room",
  },
  es: {
    "big-conference-room": "/es/salas/gran-sala-conferencias",
    "half-conference-room": "/es/salas/media-sala-conferencias",
    "quarter-room": "/es/salas/sala-quarter",
    "meeting-room": "/es/salas/sala-reuniones",
  },
  it: {
    "big-conference-room": "/it/sale/grande-sala-conferenze",
    "half-conference-room": "/it/sale/mezza-sala-conferenze",
    "quarter-room": "/it/sale/sala-quarter",
    "meeting-room": "/it/sale/sala-riunioni",
  },
};

const featureIcons: Record<string, typeof Monitor> = {
  display: Monitor,
  video: Video,
  whiteboard: PenTool,
  layout: LayoutGrid,
};

export default function ConferenceRooms() {
  const { ref, isVisible } = useScrollAnimation();
  const location = useLocation();
  const lang = location.pathname.startsWith("/es") ? "es" : location.pathname.startsWith("/it") ? "it" : "en";
  const t = translations[lang];

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
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {t.rooms.map((room, i) => {
            const roomPath = roomPaths[lang]?.[room.id];
            return (
              <Card
                key={room.id}
                className={`relative overflow-hidden transition-all duration-300 hover:shadow-lg ${
                  room.highlight
                    ? "border-2 border-primary bg-primary/5 md:col-span-2"
                    : "border-border"
                }`}
              >
                {room.highlight && (
                  <div className="w-full h-48 md:h-64 overflow-hidden">
                    <img
                      src={conferencePicasso2}
                      alt={room.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                )}
                {room.highlight && (
                  <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
                    {t.flagship}
                  </Badge>
                )}
                <CardHeader>
                  <CardTitle className={`font-display ${room.highlight ? "text-2xl md:text-3xl" : "text-xl"}`}>
                    {roomPath ? (
                      <Link to={roomPath} className="hover:text-primary transition-colors">
                        {room.name}
                      </Link>
                    ) : room.name}
                  </CardTitle>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Users className="w-4 h-4" />
                    <span className="font-body text-sm">{room.capacity}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className={`grid ${room.highlight ? "grid-cols-2 md:grid-cols-4" : "grid-cols-2"} gap-3 mb-6`}>
                    {room.features.map((feature, j) => (
                      <div key={j} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span className="font-body">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    {roomPath && (
                      <Button asChild variant="outline">
                        <Link to={roomPath}>
                          {lang === "en" ? "View Details" : lang === "es" ? "Ver Detalles" : "Vedi Dettagli"}
                        </Link>
                      </Button>
                    )}
                    <Button
                      asChild
                      variant={room.highlight ? "default" : "outline"}
                      className={room.highlight ? "bg-primary hover:bg-primary/90" : ""}
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
