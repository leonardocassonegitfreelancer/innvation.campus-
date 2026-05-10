import { useState } from "react";
import { Users, MapPin } from "lucide-react";
import conferencePicasso2 from "@/assets/conference-picasso-2.webp";
import conferenceHalfPicasso2 from "@/assets/conference-half-picasso-2.webp";
import conferenceQuarterPicasso from "@/assets/conference-quarter-picasso.webp";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const _s = (img: unknown): string => typeof img === 'string' ? img : (img as any)?.src ?? '';

interface Room {
  id: string;
  name: string;
  capacity: string;
  features: string[];
  highlight: boolean;
  roomType: "conference" | "training" | "focus";
  size?: "small" | "medium" | "large";
}

const translations = {
  en: {
    tagline: "Our Rooms",
    title: "Choose Your Space",
    sizeLabels: { small: "Small", medium: "Medium", large: "Large" },
    conferenceRoomsLabel: "Conference Rooms",
    otherSpacesLabel: "Other Spaces",
    trainingBadge: "Training",
    focusBadge: "Focus Pod",
    requestQuote: "Request Quote",
    viewDetails: "View Details",
    tabs: [
      { value: "centre" as const, label: "Málaga Palace — Historic Center" },
      { value: "seaside" as const, label: "Málaga Terrace — Seaside" },
    ],
    centreRooms: [
      {
        id: "big-conference",
        name: "Big Conference Room",
        capacity: "Up to 80 people",
        features: ["85\" 4K Display", "Premium Video Conferencing", "Large Whiteboard", "Flexible Layout"],
        highlight: true,
        roomType: "conference",
        size: "large",
      },
      {
        id: "large-conference",
        name: "Large Conference Room",
        capacity: "Up to 50 people",
        features: ["55\" 4K Display", "Video Conferencing", "Whiteboard", "Boardroom Setup"],
        highlight: false,
        roomType: "conference",
        size: "medium",
      },
      {
        id: "quarter-conference",
        name: "Quarter Conference Room",
        capacity: "Up to 30 people",
        features: ["43\" Display", "Video Conferencing", "Whiteboard", "Intimate Setting"],
        highlight: false,
        roomType: "conference",
        size: "small",
      },
      {
        id: "training-room",
        name: "Training Room",
        capacity: "Up to 40 people",
        features: ["4K Projector", "Classroom Layout", "Whiteboard Wall", "Breakout Areas"],
        highlight: false,
        roomType: "training",
      },
      {
        id: "phone-booth",
        name: "Phone Booth",
        capacity: "1–2 people",
        features: ["Soundproofed", "27\" Display", "Video Call Ready", "Noise-Cancelling Mic"],
        highlight: false,
        roomType: "focus",
      },
    ] as Room[],
    seasideRooms: [
      {
        id: "seaside-main",
        name: "Seaside Conference Room",
        capacity: "Up to 40 people",
        features: ["65\" 4K Display", "Video Conferencing", "Sea Views", "Flexible Layout"],
        highlight: true,
        roomType: "conference",
        size: "large",
      },
      {
        id: "seaside-meeting",
        name: "Seaside Meeting Room",
        capacity: "Up to 12 people",
        features: ["55\" Display", "Video Conferencing", "Whiteboard", "Terrace Access"],
        highlight: false,
        roomType: "conference",
        size: "small",
      },
    ] as Room[],
  },
  es: {
    tagline: "Nuestras Salas",
    title: "Elige Tu Espacio",
    sizeLabels: { small: "Pequeña", medium: "Mediana", large: "Grande" },
    conferenceRoomsLabel: "Salas de Conferencias",
    otherSpacesLabel: "Otros Espacios",
    trainingBadge: "Formación",
    focusBadge: "Focus Pod",
    requestQuote: "Solicitar Presupuesto",
    viewDetails: "Ver Detalles",
    tabs: [
      { value: "centre" as const, label: "Málaga Palace — Centro Histórico" },
      { value: "seaside" as const, label: "Málaga Terrace — Frente al Mar" },
    ],
    centreRooms: [
      {
        id: "big-conference",
        name: "Big Conference Room",
        capacity: "Hasta 80 personas",
        features: ["Pantalla 4K 85\"", "Videoconferencia Premium", "Pizarra Grande", "Disposición Flexible"],
        highlight: true,
        roomType: "conference",
        size: "large",
      },
      {
        id: "large-conference",
        name: "Large Conference Room",
        capacity: "Hasta 50 personas",
        features: ["Pantalla 4K 55\"", "Videoconferencia", "Pizarra", "Mesa de Juntas"],
        highlight: false,
        roomType: "conference",
        size: "medium",
      },
      {
        id: "quarter-conference",
        name: "Quarter Conference Room",
        capacity: "Hasta 30 personas",
        features: ["Pantalla 43\"", "Videoconferencia", "Pizarra", "Ambiente Íntimo"],
        highlight: false,
        roomType: "conference",
        size: "small",
      },
      {
        id: "training-room",
        name: "Training Room",
        capacity: "Hasta 40 personas",
        features: ["Proyector 4K", "Disposición Aula", "Pared Pizarra", "Zonas de Descanso"],
        highlight: false,
        roomType: "training",
      },
      {
        id: "phone-booth",
        name: "Phone Booth",
        capacity: "1–2 personas",
        features: ["Insonorizada", "Pantalla 27\"", "Lista para Video", "Micro Cancelación Ruido"],
        highlight: false,
        roomType: "focus",
      },
    ] as Room[],
    seasideRooms: [
      {
        id: "seaside-main",
        name: "Sala de Conferencias Seaside",
        capacity: "Hasta 40 personas",
        features: ["Pantalla 4K 65\"", "Videoconferencia", "Vistas al Mar", "Disposición Flexible"],
        highlight: true,
        roomType: "conference",
        size: "large",
      },
      {
        id: "seaside-meeting",
        name: "Sala de Reuniones Seaside",
        capacity: "Hasta 12 personas",
        features: ["Pantalla 55\"", "Videoconferencia", "Pizarra", "Acceso Terraza"],
        highlight: false,
        roomType: "conference",
        size: "small",
      },
    ] as Room[],
  },
  it: {
    tagline: "Le Nostre Sale",
    title: "Scegli il Tuo Spazio",
    sizeLabels: { small: "Piccola", medium: "Media", large: "Grande" },
    conferenceRoomsLabel: "Sale Conferenze",
    otherSpacesLabel: "Altri Spazi",
    trainingBadge: "Formazione",
    focusBadge: "Focus Pod",
    requestQuote: "Richiedi Preventivo",
    viewDetails: "Vedi Dettagli",
    tabs: [
      { value: "centre" as const, label: "Málaga Palace — Centro Storico" },
      { value: "seaside" as const, label: "Málaga Terrace — Lungomare" },
    ],
    centreRooms: [
      {
        id: "big-conference",
        name: "Big Conference Room",
        capacity: "Fino a 80 persone",
        features: ["Display 4K 85\"", "Videoconferenza Premium", "Grande Lavagna", "Layout Flessibile"],
        highlight: true,
        roomType: "conference",
        size: "large",
      },
      {
        id: "large-conference",
        name: "Large Conference Room",
        capacity: "Fino a 50 persone",
        features: ["Display 4K 55\"", "Videoconferenza", "Lavagna", "Configurazione Boardroom"],
        highlight: false,
        roomType: "conference",
        size: "medium",
      },
      {
        id: "quarter-conference",
        name: "Quarter Conference Room",
        capacity: "Fino a 30 persone",
        features: ["Display 43\"", "Videoconferenza", "Lavagna", "Ambiente Intimo"],
        highlight: false,
        roomType: "conference",
        size: "small",
      },
      {
        id: "training-room",
        name: "Training Room",
        capacity: "Fino a 40 persone",
        features: ["Proiettore 4K", "Layout Aula", "Parete Lavagna", "Aree Breakout"],
        highlight: false,
        roomType: "training",
      },
      {
        id: "phone-booth",
        name: "Phone Booth",
        capacity: "1–2 persone",
        features: ["Insonorizzata", "Display 27\"", "Video Call Ready", "Microfono Antirumore"],
        highlight: false,
        roomType: "focus",
      },
    ] as Room[],
    seasideRooms: [
      {
        id: "seaside-main",
        name: "Sala Conferenze Seaside",
        capacity: "Fino a 40 persone",
        features: ["Display 4K 65\"", "Videoconferenza", "Vista Mare", "Layout Flessibile"],
        highlight: true,
        roomType: "conference",
        size: "large",
      },
      {
        id: "seaside-meeting",
        name: "Sala Riunioni Seaside",
        capacity: "Fino a 12 persone",
        features: ["Display 55\"", "Videoconferenza", "Lavagna", "Accesso Terrazza"],
        highlight: false,
        roomType: "conference",
        size: "small",
      },
    ] as Room[],
  },
};

const getSrc = (img: any): string => typeof img === 'string' ? img : img.src;

const roomImages: Record<string, string> = {
  "big-conference": getSrc(conferencePicasso2),
  "large-conference": getSrc(conferenceHalfPicasso2),
  "quarter-conference": getSrc(conferenceQuarterPicasso),
  "training-room": getSrc(conferenceQuarterPicasso),
  "phone-booth": getSrc(conferenceQuarterPicasso),
};

const roomPaths: Record<string, Record<string, string>> = {
  en: {
    "big-conference": "/en/meeting-rooms/big-conference-room",
    "large-conference": "/en/meeting-rooms/large-conference-room",
    "quarter-conference": "/en/meeting-rooms/quarter-conference-room",
    "training-room": "/en/meeting-rooms/training-room",
    "phone-booth": "/en/meeting-rooms/phone-booth",
  },
  es: {
    "big-conference": "/es/salas/gran-sala-conferencias",
    "large-conference": "/es/salas/gran-sala-conferencias-2",
    "quarter-conference": "/es/salas/sala-quarter",
    "training-room": "/es/salas/sala-formacion",
    "phone-booth": "/es/salas/cabina-telefonica",
  },
  it: {
    "big-conference": "/it/sale/grande-sala-conferenze",
    "large-conference": "/it/sale/grande-sala-conferenze-2",
    "quarter-conference": "/it/sale/sala-quarter",
    "training-room": "/it/sale/sala-formazione",
    "phone-booth": "/it/sale/cabina-telefonica",
  },
};

function RoomCard({ room, lang, t }: { room: Room; lang: "en" | "es" | "it"; t: any }) {
  const roomPath = roomPaths[lang]?.[room.id];
  const image = roomImages[room.id];

  const badge =
    room.roomType === "conference" && room.size
      ? t.sizeLabels[room.size]
      : room.roomType === "training"
        ? t.trainingBadge
        : t.focusBadge;

  return (
    <Card
      className={`relative overflow-hidden transition-all duration-300 hover:shadow-lg ${
        room.highlight
          ? "border-2 border-primary bg-primary/5 md:col-span-2"
          : "border-border"
      }`}
    >
      {image ? (
        <div className={`w-full ${room.highlight ? "h-48 md:h-64" : "h-40 md:h-48"} overflow-hidden`}>
          <img src={image} alt={room.name} className="w-full h-full object-cover" loading="lazy" />
        </div>
      ) : (
        <div className={`w-full ${room.highlight ? "h-48 md:h-64" : "h-40 md:h-48"} bg-muted flex items-center justify-center`}>
          <div className="text-center text-muted-foreground">
            <MapPin className="w-8 h-8 mx-auto mb-2 opacity-40" />
            <span className="font-body text-sm opacity-60">Photo coming soon</span>
          </div>
        </div>
      )}
      <Badge className="absolute top-4 right-4 bg-background/90 text-foreground border border-border backdrop-blur-sm">
        {badge}
      </Badge>
      <CardHeader>
        <CardTitle className={`font-display ${room.highlight ? "text-2xl md:text-3xl" : "text-xl"}`}>
          {roomPath ? (
            <a href={roomPath} className="hover:text-primary transition-colors">{room.name}</a>
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
            <Button asChild variant="default" className="bg-primary hover:bg-primary/90">
              <a href={roomPath}>{t.viewDetails}</a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

export default function ConferenceRooms({ lang = "en" }: { lang?: "en" | "es" | "it" }) {
  const [activeTab, setActiveTab] = useState<"centre" | "seaside">("centre");
  const { ref, isVisible } = useScrollAnimation();
  const t = translations[lang];

  const rooms = activeTab === "centre" ? t.centreRooms : t.seasideRooms;
  const conferenceRooms = rooms.filter(r => r.roomType === "conference");
  const otherRooms = rooms.filter(r => r.roomType !== "conference");
  const hasSections = otherRooms.length > 0;

  return (
    <section id={activeTab === "centre" ? "centre" : "seaside"} className="py-20 md:py-28 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className={`scroll-animate ${isVisible ? "visible" : ""} text-center mb-14`}>
          <p className="font-body text-xs uppercase tracking-[0.3em] text-primary mb-4 font-semibold">
            {t.tagline}
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            {t.title}
          </h2>

          {/* Location toggle */}
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

        {hasSections ? (
          <>
            <div className="mb-10">
              <p className="font-body text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6 font-semibold">
                {t.conferenceRoomsLabel}
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                {conferenceRooms.map((room) => (
                  <RoomCard key={room.id} room={room} lang={lang} t={t} />
                ))}
              </div>
            </div>
            <div className="border-t border-border/50 my-10" />
            <div>
              <p className="font-body text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6 font-semibold">
                {t.otherSpacesLabel}
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                {otherRooms.map((room) => (
                  <RoomCard key={room.id} room={room} lang={lang} t={t} />
                ))}
              </div>
            </div>
          </>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            {rooms.map((room) => (
              <RoomCard key={room.id} room={room} lang={lang} t={t} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
