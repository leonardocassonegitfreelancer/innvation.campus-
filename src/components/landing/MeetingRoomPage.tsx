import { Users, Monitor, Video, PenTool, Coffee, Wifi, Headphones, Wind, UtensilsCrossed, KeyRound, Projector, LayoutGrid } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useLocation, Link } from "react-router-dom";
import ServicePageLayout from "./ServicePageLayout";
import ConferenceCTA from "./ConferenceCTA";
import serviceMeeting from "@/assets/service-meeting.jpg";
import conferencePicasso from "@/assets/conference-picasso.jpg";
import conferenceHalfPicasso from "@/assets/conference-half-picasso.jpg";
import SEOHead from "@/components/SEOHead";

export interface RoomData {
  slug: string;
  seo: { en: { title: string; description: string }; es: { title: string; description: string }; it: { title: string; description: string } };
  name: string;
  capacity: { en: string; es: string; it: string };
  heroImage: string;
  features: { en: string[]; es: string[]; it: string[] };
  description: { en: string; es: string; it: string };
  useCases: { en: string[]; es: string[]; it: string[] };
  amenities: { en: string[]; es: string[]; it: string[] };
  highlight?: boolean;
}

const rooms: RoomData[] = [
  {
    slug: "big-conference-room",
    name: "City Center Picasso",
    seo: {
      en: { title: "Big Conference Room – City Center Picasso", description: "Our flagship conference room for up to 80 people with 85\" 4K display, premium video conferencing and flexible layout in Málaga." },
      es: { title: "Gran Sala de Conferencias – City Center Picasso", description: "Nuestra sala principal para hasta 80 personas con pantalla 4K de 85\", videoconferencia premium y disposición flexible en Málaga." },
      it: { title: "Grande Sala Conferenze – City Center Picasso", description: "La nostra sala principale per fino a 80 persone con display 4K da 85\", videoconferenza premium e layout flessibile a Málaga." },
    },
    capacity: { en: "Up to 80 people", es: "Hasta 80 personas", it: "Fino a 80 persone" },
    heroImage: conferencePicasso,
    highlight: true,
    features: {
      en: ["85\" 4K Display", "Premium Video Conferencing", "Large Whiteboard", "Flexible Layout"],
      es: ["Pantalla 4K 85\"", "Videoconferencia Premium", "Pizarra Grande", "Disposición Flexible"],
      it: ["Display 4K 85\"", "Videoconferenza Premium", "Grande Lavagna", "Layout Flessibile"],
    },
    description: {
      en: "The City Center Picasso is our flagship conference room, designed for large-scale presentations, corporate events, and team gatherings. With a flexible layout that adapts from theater-style to boardroom configurations, this room is the ultimate space for impactful meetings.",
      es: "El City Center Picasso es nuestra sala principal, diseñada para presentaciones a gran escala, eventos corporativas y reuniones de equipo. Con una disposición flexible que se adapta desde estilo teatro hasta configuración de mesa de juntas.",
      it: "Il City Center Picasso è la nostra sala principale, progettata per presentazioni su larga scala, eventi aziendali e riunioni di team. Con un layout flessibile che si adatta dallo stile teatro alla configurazione boardroom.",
    },
    useCases: {
      en: ["Corporate presentations", "Large team meetings", "Product launches", "Training sessions", "Town halls"],
      es: ["Presentaciones corporativas", "Reuniones de equipo grandes", "Lanzamientos de producto", "Sesiones de formación", "Asambleas"],
      it: ["Presentazioni aziendali", "Riunioni di team grandi", "Lanci di prodotto", "Sessioni di formazione", "Assemblee"],
    },
    amenities: {
      en: ["High-Speed WiFi", "85\" 4K Display", "Premium Sound System", "Video Conferencing", "Climate Control", "Catering Available", "Reception Support", "Secure Access"],
      es: ["WiFi Alta Velocidad", "Pantalla 4K 85\"", "Sistema de Sonido Premium", "Videoconferencia", "Climatización", "Catering Disponible", "Soporte Recepción", "Acceso Seguro"],
      it: ["WiFi Alta Velocità", "Display 4K 85\"", "Sistema Audio Premium", "Videoconferenza", "Climatizzazione", "Catering Disponibile", "Supporto Reception", "Accesso Sicuro"],
    },
  },
  {
    slug: "half-conference-room",
    name: "Half Picasso",
    seo: {
      en: { title: "Half Conference Room – Half Picasso", description: "A versatile conference room for up to 50 people with 55\" 4K display and professional video conferencing in Málaga." },
      es: { title: "Media Sala de Conferencias – Half Picasso", description: "Una sala versátil para hasta 50 personas con pantalla 4K de 55\" y videoconferencia profesional en Málaga." },
      it: { title: "Mezza Sala Conferenze – Half Picasso", description: "Una sala versatile per fino a 50 persone con display 4K da 55\" e videoconferenza professionale a Málaga." },
    },
    capacity: { en: "Up to 50 people", es: "Hasta 50 personas", it: "Fino a 50 persone" },
    heroImage: conferenceHalfPicasso,
    features: {
      en: ["55\" 4K Display", "Video Conferencing", "Whiteboard", "Boardroom Setup"],
      es: ["Pantalla 4K 55\"", "Videoconferencia", "Pizarra", "Mesa de Juntas"],
      it: ["Display 4K 55\"", "Videoconferenza", "Lavagna", "Configurazione Boardroom"],
    },
    description: {
      en: "The Half Picasso offers the perfect balance between spaciousness and intimacy. Ideal for medium-sized teams, workshops, and collaborative sessions that need room to breathe without feeling too large.",
      es: "El Half Picasso ofrece el equilibrio perfecto entre amplitud e intimidad. Ideal para equipos medianos, talleres y sesiones colaborativas que necesitan espacio sin sentirse demasiado grandes.",
      it: "Il Half Picasso offre il perfetto equilibrio tra spaziosità e intimità. Ideale per team di medie dimensioni, workshop e sessioni collaborative che necessitano di spazio senza risultare troppo grandi.",
    },
    useCases: {
      en: ["Team workshops", "Client presentations", "Board meetings", "Strategy sessions", "Departmental reviews"],
      es: ["Talleres de equipo", "Presentaciones a clientes", "Reuniones de directiva", "Sesiones de estrategia", "Revisiones departamentales"],
      it: ["Workshop di team", "Presentazioni clienti", "Riunioni di consiglio", "Sessioni di strategia", "Revisioni dipartimentali"],
    },
    amenities: {
      en: ["High-Speed WiFi", "55\" 4K Display", "Sound System", "Video Conferencing", "Climate Control", "Catering Available", "Reception Support", "Secure Access"],
      es: ["WiFi Alta Velocidad", "Pantalla 4K 55\"", "Sistema de Sonido", "Videoconferencia", "Climatización", "Catering Disponible", "Soporte Recepción", "Acceso Seguro"],
      it: ["WiFi Alta Velocità", "Display 4K 55\"", "Sistema Audio", "Videoconferenza", "Climatizzazione", "Catering Disponibile", "Supporto Reception", "Accesso Sicuro"],
    },
  },
  {
    slug: "quarter-room",
    name: "Quarter Picasso",
    seo: {
      en: { title: "Quarter Room – Quarter Picasso", description: "An intimate conference room for up to 30 people with 43\" display and video conferencing in Málaga." },
      es: { title: "Sala Quarter – Quarter Picasso", description: "Una sala íntima para hasta 30 personas con pantalla de 43\" y videoconferencia en Málaga." },
      it: { title: "Sala Quarter – Quarter Picasso", description: "Una sala intima per fino a 30 persone con display da 43\" e videoconferenza a Málaga." },
    },
    capacity: { en: "Up to 30 people", es: "Hasta 30 personas", it: "Fino a 30 persone" },
    heroImage: serviceMeeting,
    features: {
      en: ["43\" Display", "Video Conferencing", "Whiteboard", "Intimate Setting"],
      es: ["Pantalla 43\"", "Videoconferencia", "Pizarra", "Ambiente Íntimo"],
      it: ["Display 43\"", "Videoconferenza", "Lavagna", "Ambiente Intimo"],
    },
    description: {
      en: "The Quarter Picasso is perfect for focused team discussions, brainstorming sessions, and smaller presentations. The intimate setting fosters engagement and productive conversations.",
      es: "El Quarter Picasso es perfecto para discusiones de equipo enfocadas, sesiones de brainstorming y presentaciones más pequeñas. El ambiente íntimo fomenta la participación y conversaciones productivas.",
      it: "Il Quarter Picasso è perfetto per discussioni di team focalizzate, sessioni di brainstorming e presentazioni più piccole. L'ambiente intimo favorisce il coinvolgimento e conversazioni produttive.",
    },
    useCases: {
      en: ["Brainstorming sessions", "Small presentations", "Interview panels", "Project reviews", "Client meetings"],
      es: ["Sesiones de brainstorming", "Presentaciones pequeñas", "Paneles de entrevistas", "Revisiones de proyecto", "Reuniones con clientes"],
      it: ["Sessioni di brainstorming", "Piccole presentazioni", "Panel di colloqui", "Revisioni di progetto", "Riunioni con clienti"],
    },
    amenities: {
      en: ["High-Speed WiFi", "43\" Display", "Video Conferencing", "Whiteboard", "Climate Control", "Coffee & Tea", "Reception Support", "Secure Access"],
      es: ["WiFi Alta Velocidad", "Pantalla 43\"", "Videoconferencia", "Pizarra", "Climatización", "Café y Té", "Soporte Recepción", "Acceso Seguro"],
      it: ["WiFi Alta Velocità", "Display 43\"", "Videoconferenza", "Lavagna", "Climatizzazione", "Caffè e Tè", "Supporto Reception", "Accesso Sicuro"],
    },
  },
  {
    slug: "training-room",
    name: "Training Room",
    seo: {
      en: { title: "Training Room – Innovation Campus Málaga", description: "Dedicated training room with classroom setup, projector, and all amenities for workshops and courses in Málaga." },
      es: { title: "Sala de Formación – Innovation Campus Málaga", description: "Sala de formación dedicada con configuración de aula, proyector y todas las comodidades para talleres y cursos en Málaga." },
      it: { title: "Sala Formazione – Innovation Campus Málaga", description: "Sala formazione dedicata con configurazione aula, proiettore e tutti i servizi per workshop e corsi a Málaga." },
    },
    capacity: { en: "Up to 40 people", es: "Hasta 40 personas", it: "Fino a 40 persone" },
    heroImage: serviceMeeting,
    features: {
      en: ["4K Projector", "Classroom Layout", "Whiteboard Wall", "Breakout Areas"],
      es: ["Proyector 4K", "Disposición Aula", "Pared Pizarra", "Zonas de Descanso"],
      it: ["Proiettore 4K", "Layout Aula", "Parete Lavagna", "Aree Breakout"],
    },
    description: {
      en: "Our Training Room is purpose-built for educational sessions, professional development, and intensive workshops. The classroom-style layout ensures every participant has clear sightlines and desk space.",
      es: "Nuestra Sala de Formación está diseñada específicamente para sesiones educativas, desarrollo profesional y talleres intensivos. La disposición estilo aula asegura que cada participante tenga visibilidad clara y espacio de escritorio.",
      it: "La nostra Sala Formazione è progettata appositamente per sessioni educative, sviluppo professionale e workshop intensivi. Il layout stile aula garantisce che ogni partecipante abbia visibilità chiara e spazio scrivania.",
    },
    useCases: {
      en: ["Corporate training", "Professional workshops", "Certification courses", "Team building", "Hackathons"],
      es: ["Formación corporativa", "Talleres profesionales", "Cursos de certificación", "Team building", "Hackathons"],
      it: ["Formazione aziendale", "Workshop professionali", "Corsi di certificazione", "Team building", "Hackathon"],
    },
    amenities: {
      en: ["High-Speed WiFi", "4K Projector", "Sound System", "Whiteboard Wall", "Climate Control", "Catering Available", "Breakout Area", "Secure Access"],
      es: ["WiFi Alta Velocidad", "Proyector 4K", "Sistema de Sonido", "Pared Pizarra", "Climatización", "Catering Disponible", "Zona Descanso", "Acceso Seguro"],
      it: ["WiFi Alta Velocità", "Proiettore 4K", "Sistema Audio", "Parete Lavagna", "Climatizzazione", "Catering Disponibile", "Area Breakout", "Accesso Sicuro"],
    },
  },
  {
    slug: "meeting-room",
    name: "Pablo Neruda",
    seo: {
      en: { title: "Meeting Room – Pablo Neruda", description: "Private meeting room for up to 6 people, perfect for focused calls, interviews and small team huddles in Málaga." },
      es: { title: "Sala de Reuniones – Pablo Neruda", description: "Sala de reuniones privada para hasta 6 personas, perfecta para llamadas, entrevistas y reuniones pequeñas en Málaga." },
      it: { title: "Sala Riunioni – Pablo Neruda", description: "Sala riunioni privata per fino a 6 persone, perfetta per chiamate, colloqui e riunioni di piccoli team a Málaga." },
    },
    capacity: { en: "Up to 6 people", es: "Hasta 6 personas", it: "Fino a 6 persone" },
    heroImage: serviceMeeting,
    features: {
      en: ["43\" Display", "Video Conferencing", "Focus Room", "Private Calls"],
      es: ["Pantalla 43\"", "Videoconferencia", "Sala Focus", "Llamadas Privadas"],
      it: ["Display 43\"", "Videoconferenza", "Sala Focus", "Chiamate Private"],
    },
    description: {
      en: "The Pablo Neruda room is your go-to space for private conversations, video calls, interviews, and small team huddles. Designed for focus and confidentiality in a professional setting.",
      es: "La sala Pablo Neruda es tu espacio ideal para conversaciones privadas, videollamadas, entrevistas y reuniones de pequeños equipos. Diseñada para concentración y confidencialidad en un entorno profesional.",
      it: "La sala Pablo Neruda è il tuo spazio ideale per conversazioni private, videochiamate, colloqui e riunioni di piccoli team. Progettata per concentrazione e riservatezza in un ambiente professionale.",
    },
    useCases: {
      en: ["Video calls", "1-on-1 interviews", "Small team huddles", "Confidential meetings", "Client calls"],
      es: ["Videollamadas", "Entrevistas 1 a 1", "Reuniones de equipo pequeño", "Reuniones confidenciales", "Llamadas con clientes"],
      it: ["Videochiamate", "Colloqui 1 a 1", "Riunioni di piccoli team", "Riunioni riservate", "Chiamate con clienti"],
    },
    amenities: {
      en: ["High-Speed WiFi", "43\" Display", "Video Conferencing", "Soundproofing", "Climate Control", "Coffee & Tea", "Secure Access", "Power Outlets"],
      es: ["WiFi Alta Velocidad", "Pantalla 43\"", "Videoconferencia", "Insonorización", "Climatización", "Café y Té", "Acceso Seguro", "Enchufes"],
      it: ["WiFi Alta Velocità", "Display 43\"", "Videoconferenza", "Insonorizzazione", "Climatizzazione", "Caffè e Tè", "Accesso Sicuro", "Prese Elettriche"],
    },
  },
];

const amenityIcons: Record<string, typeof Wifi> = {
  "WiFi": Wifi, "High-Speed WiFi": Wifi, "WiFi Alta Velocidad": Wifi, "WiFi Alta Velocità": Wifi,
  "Display": Monitor, "Sound": Headphones, "Sistema": Headphones,
  "Video": Video, "Videoconferencia": Video, "Videoconferenza": Video,
  "Climate": Wind, "Climatización": Wind, "Climatizzazione": Wind,
  "Catering": UtensilsCrossed, "Coffee": Coffee, "Café": Coffee, "Caffè": Coffee,
  "Reception": Users, "Soporte": Users, "Supporto": Users,
  "Secure": KeyRound, "Acceso": KeyRound, "Accesso": KeyRound,
  "Projector": Projector, "Proyector": Projector, "Proiettore": Projector,
  "Whiteboard": PenTool, "Pizarra": PenTool, "Lavagna": PenTool, "Parete": PenTool,
  "Breakout": LayoutGrid, "Zona": LayoutGrid, "Area": LayoutGrid,
  "Soundproofing": Headphones, "Insonorización": Headphones, "Insonorizzazione": Headphones,
  "Power": Monitor, "Enchufes": Monitor, "Prese": Monitor,
  "Pantalla": Monitor,
};

function getIcon(label: string) {
  for (const [key, Icon] of Object.entries(amenityIcons)) {
    if (label.includes(key)) return Icon;
  }
  return Coffee;
}

const otherRoomsLabel = { en: "Explore Other Rooms", es: "Explora Otras Salas", it: "Esplora Altre Sale" };
const idealForLabel = { en: "Ideal For", es: "Ideal Para", it: "Ideale Per" };
const amenitiesLabel = { en: "Amenities", es: "Servicios", it: "Servizi" };
const everythingIncluded = { en: "Everything Included", es: "Todo Incluido", it: "Tutto Incluso" };
const aboutLabel = { en: "About This Room", es: "Sobre Esta Sala", it: "Informazioni sulla Sala" };

const roomPaths: Record<string, Record<string, string>> = {
  en: {
    "big-conference-room": "/en/meeting-rooms/big-conference-room",
    "half-conference-room": "/en/meeting-rooms/half-conference-room",
    "quarter-room": "/en/meeting-rooms/quarter-room",
    "training-room": "/en/meeting-rooms/training-room",
    "meeting-room": "/en/meeting-rooms/meeting-room",
  },
  es: {
    "big-conference-room": "/es/salas/gran-sala-conferencias",
    "half-conference-room": "/es/salas/media-sala-conferencias",
    "quarter-room": "/es/salas/sala-quarter",
    "training-room": "/es/salas/sala-formacion",
    "meeting-room": "/es/salas/sala-reuniones",
  },
  it: {
    "big-conference-room": "/it/sale/grande-sala-conferenze",
    "half-conference-room": "/it/sale/mezza-sala-conferenze",
    "quarter-room": "/it/sale/sala-quarter",
    "training-room": "/it/sale/sala-formazione",
    "meeting-room": "/it/sale/sala-riunioni",
  },
};

export { rooms, roomPaths };

interface MeetingRoomPageProps {
  roomSlug: string;
}

export default function MeetingRoomPage({ roomSlug }: MeetingRoomPageProps) {
  const location = useLocation();
  const lang = location.pathname.startsWith("/es") ? "es" : location.pathname.startsWith("/it") ? "it" : "en";
  const room = rooms.find((r) => r.slug === roomSlug);
  const { ref: descRef, isVisible: descVisible } = useScrollAnimation();
  const { ref: useCaseRef, isVisible: useCaseVisible } = useScrollAnimation();
  const { ref: amenRef, isVisible: amenVisible } = useScrollAnimation();
  const { ref: otherRef, isVisible: otherVisible } = useScrollAnimation();

  if (!room) return null;

  const seo = room.seo[lang];
  const otherRooms = rooms.filter((r) => r.slug !== roomSlug);
  const paths = roomPaths[lang];
  const conferencePath = lang === "en" ? "/en/conference-rooms" : lang === "es" ? "/es/salas-de-conferencias" : "/it/sale-conferenze";

  return (
    <>
      <SEOHead title={seo.title} description={seo.description} path={roomPaths[lang][roomSlug]} />
      <ServicePageLayout
        title={room.name}
        subtitle={room.capacity[lang]}
        image={room.heroImage}
      >
        {/* Description */}
        <section className="py-20 md:py-28 bg-neutral-dark overflow-hidden">
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"
          }} />
          <div ref={descRef} className={`scroll-animate ${descVisible ? "visible" : ""} relative max-w-4xl mx-auto px-6`}>
            <div className="text-center mb-8">
              <p className="font-body text-xs uppercase tracking-[0.3em] text-primary mb-4 font-semibold">
                {aboutLabel[lang]}
              </p>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mb-6">
                {room.name}
              </h2>
            </div>
            <p className="font-body text-lg text-primary-foreground/70 text-center max-w-3xl mx-auto leading-relaxed">
              {room.description[lang]}
            </p>
            <div className="flex flex-wrap justify-center gap-3 mt-8">
              {room.features[lang].map((f, i) => (
                <span key={i} className="font-body text-sm px-4 py-2 rounded-full border border-primary/30 text-primary bg-primary/10">
                  {f}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20 md:py-28 bg-background">
          <div ref={useCaseRef} className={`scroll-animate ${useCaseVisible ? "visible" : ""} max-w-5xl mx-auto px-6`}>
            <div className="text-center mb-14">
              <p className="font-body text-xs uppercase tracking-[0.3em] text-primary mb-4 font-semibold">
                {idealForLabel[lang]}
              </p>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {room.useCases[lang].map((uc, i) => (
                <div key={i} className="flex items-center gap-3 p-4 rounded-lg border border-border hover:border-primary/50 transition-colors">
                  <div className="w-2 h-2 rounded-full bg-primary shrink-0" />
                  <span className="font-body text-foreground">{uc}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Amenities */}
        <section className="py-20 md:py-28 bg-muted/50">
          <div ref={amenRef} className={`scroll-animate ${amenVisible ? "visible" : ""} max-w-5xl mx-auto px-6`}>
            <div className="text-center mb-14">
              <p className="font-body text-xs uppercase tracking-[0.3em] text-primary mb-4 font-semibold">
                {amenitiesLabel[lang]}
              </p>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
                {everythingIncluded[lang]}
              </h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
              {room.amenities[lang].map((item) => {
                const Icon = getIcon(item);
                return (
                  <div key={item} className="flex flex-col items-center gap-3 text-center">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <p className="font-body text-sm font-semibold text-foreground">{item}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Other Rooms */}
        <section className="py-20 md:py-28 bg-background">
          <div ref={otherRef} className={`scroll-animate ${otherVisible ? "visible" : ""} max-w-5xl mx-auto px-6`}>
            <div className="text-center mb-14">
              <p className="font-body text-xs uppercase tracking-[0.3em] text-primary mb-4 font-semibold">
                {otherRoomsLabel[lang]}
              </p>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
              {otherRooms.map((r) => (
                <Link
                  key={r.slug}
                  to={paths[r.slug]}
                  className="p-5 rounded-xl border border-border hover:border-primary/50 hover:shadow-md transition-all group"
                >
                  <h3 className="font-display text-lg font-bold text-foreground group-hover:text-primary transition-colors">{r.name}</h3>
                  <p className="font-body text-sm text-muted-foreground mt-1">{r.capacity[lang]}</p>
                </Link>
              ))}
            </div>
            <div className="text-center mt-8">
              <Button asChild variant="outline">
                <Link to={conferencePath}>
                  ← {lang === "en" ? "All Conference Rooms" : lang === "es" ? "Todas las Salas" : "Tutte le Sale"}
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA */}
        <ConferenceCTA />
      </ServicePageLayout>
    </>
  );
}
