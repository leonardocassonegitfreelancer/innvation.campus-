import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Users, Monitor, Video, PenTool, Coffee, Wifi, Headphones, Wind,
  UtensilsCrossed, KeyRound, Projector, LayoutGrid, X, ChevronDown,
  ChevronUp, ArrowLeft, Grid2X2, AlignJustify, Table2, Maximize2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation, Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ConferenceCTA from "./ConferenceCTA";
import SEOHead from "@/components/SEOHead";
import serviceMeeting from "@/assets/service-meeting.jpg";
import conferencePicasso from "@/assets/conference-picasso.jpg";
import conferencePicasso2 from "@/assets/conference-picasso-2.jpg";
import conferenceQuarterPicasso from "@/assets/conference-quarter-picasso.jpg";
import conferenceHalfPicasso from "@/assets/conference-half-picasso.jpg";
import conferenceHalfPicasso2 from "@/assets/conference-half-picasso-2.jpg";

/* ─── Types ─────────────────────────────────────────────── */
interface LangMap<T> { en: T; es: T; it: T }

interface FacilityCategory {
  category: string;
  items: string[];
}

interface RoomLayout {
  name: string;
  capacity: number;
  icon: "theatre" | "boardroom" | "classroom" | "ushape";
}

export interface RoomData {
  slug: string;
  seo: LangMap<{ title: string; description: string }>;
  name: string;
  capacity: LangMap<string>;
  heroImage: string;
  photos: string[];
  features: LangMap<string[]>;
  description: LangMap<string>;
  useCases: LangMap<string[]>;
  amenities: LangMap<string[]>;
  facilitiesCategories: LangMap<FacilityCategory[]>;
  layouts: LangMap<RoomLayout[]>;
  highlight?: boolean;
}

/* ─── Room data ──────────────────────────────────────────── */
const rooms: RoomData[] = [
  {
    slug: "big-conference-room",
    name: "City Center Picasso",
    highlight: true,
    seo: {
      en: { title: "Big Conference Room – City Center Picasso", description: "Our flagship conference room for up to 80 people with 85\" 4K display, premium video conferencing and flexible layout in Málaga." },
      es: { title: "Gran Sala de Conferencias – City Center Picasso", description: "Nuestra sala principal para hasta 80 personas con pantalla 4K de 85\", videoconferencia premium y disposición flexible en Málaga." },
      it: { title: "Grande Sala Conferenze – City Center Picasso", description: "La nostra sala principale per fino a 80 persone con display 4K da 85\", videoconferenza premium e layout flessibile a Málaga." },
    },
    capacity: { en: "Up to 80 people", es: "Hasta 80 personas", it: "Fino a 80 persone" },
    heroImage: conferencePicasso,
    photos: [conferencePicasso, conferencePicasso2, conferenceHalfPicasso, conferenceHalfPicasso2, conferenceQuarterPicasso],
    features: {
      en: ["85\" 4K Display", "Premium Video Conferencing", "Large Whiteboard", "Flexible Layout"],
      es: ["Pantalla 4K 85\"", "Videoconferencia Premium", "Pizarra Grande", "Disposición Flexible"],
      it: ["Display 4K 85\"", "Videoconferenza Premium", "Grande Lavagna", "Layout Flessibile"],
    },
    description: {
      en: "The City Center Picasso is our flagship conference room, designed for large-scale presentations, corporate events, and team gatherings. With a flexible layout that adapts from theater-style to boardroom configurations, this room is the ultimate space for impactful meetings.",
      es: "El City Center Picasso es nuestra sala principal, diseñada para presentaciones a gran escala, eventos corporativos y reuniones de equipo. Con una disposición flexible que se adapta desde estilo teatro hasta configuración de mesa de juntas.",
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
    facilitiesCategories: {
      en: [
        { category: "AV & Technology", items: ["85\" 4K Display", "Premium Sound System", "Video Conferencing", "Wireless Presentation"] },
        { category: "Connectivity", items: ["High-Speed WiFi", "Multiple Power Outlets", "HDMI & USB-C"] },
        { category: "Comfort", items: ["Climate Control", "Natural Light", "Blackout Blinds"] },
        { category: "Services", items: ["Catering Available", "Reception Support", "Secure Access", "Dedicated Coordinator"] },
      ],
      es: [
        { category: "AV y Tecnología", items: ["Pantalla 4K 85\"", "Sistema de Sonido Premium", "Videoconferencia", "Presentación Inalámbrica"] },
        { category: "Conectividad", items: ["WiFi Alta Velocidad", "Múltiples Enchufes", "HDMI y USB-C"] },
        { category: "Confort", items: ["Climatización", "Luz Natural", "Persianas Opacas"] },
        { category: "Servicios", items: ["Catering Disponible", "Soporte Recepción", "Acceso Seguro", "Coordinador Dedicado"] },
      ],
      it: [
        { category: "AV e Tecnologia", items: ["Display 4K 85\"", "Sistema Audio Premium", "Videoconferenza", "Presentazione Wireless"] },
        { category: "Connettività", items: ["WiFi Alta Velocità", "Prese Multiple", "HDMI e USB-C"] },
        { category: "Comfort", items: ["Climatizzazione", "Luce Naturale", "Tende Oscuranti"] },
        { category: "Servizi", items: ["Catering Disponibile", "Supporto Reception", "Accesso Sicuro", "Coordinatore Dedicato"] },
      ],
    },
    layouts: {
      en: [
        { name: "Theatre", capacity: 80, icon: "theatre" },
        { name: "Classroom", capacity: 60, icon: "classroom" },
        { name: "Boardroom", capacity: 40, icon: "boardroom" },
        { name: "U-Shape", capacity: 35, icon: "ushape" },
      ],
      es: [
        { name: "Teatro", capacity: 80, icon: "theatre" },
        { name: "Aula", capacity: 60, icon: "classroom" },
        { name: "Mesa de Juntas", capacity: 40, icon: "boardroom" },
        { name: "U", capacity: 35, icon: "ushape" },
      ],
      it: [
        { name: "Teatro", capacity: 80, icon: "theatre" },
        { name: "Aula", capacity: 60, icon: "classroom" },
        { name: "Boardroom", capacity: 40, icon: "boardroom" },
        { name: "U", capacity: 35, icon: "ushape" },
      ],
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
    photos: [conferenceHalfPicasso, conferenceHalfPicasso2, conferencePicasso, conferencePicasso2, conferenceQuarterPicasso],
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
    facilitiesCategories: {
      en: [
        { category: "AV & Technology", items: ["55\" 4K Display", "Sound System", "Video Conferencing", "Wireless Presentation"] },
        { category: "Connectivity", items: ["High-Speed WiFi", "Power Outlets", "HDMI & USB-C"] },
        { category: "Comfort", items: ["Climate Control", "Natural Light"] },
        { category: "Services", items: ["Catering Available", "Reception Support", "Secure Access"] },
      ],
      es: [
        { category: "AV y Tecnología", items: ["Pantalla 4K 55\"", "Sistema de Sonido", "Videoconferencia", "Presentación Inalámbrica"] },
        { category: "Conectividad", items: ["WiFi Alta Velocidad", "Enchufes", "HDMI y USB-C"] },
        { category: "Confort", items: ["Climatización", "Luz Natural"] },
        { category: "Servicios", items: ["Catering Disponible", "Soporte Recepción", "Acceso Seguro"] },
      ],
      it: [
        { category: "AV e Tecnologia", items: ["Display 4K 55\"", "Sistema Audio", "Videoconferenza", "Presentazione Wireless"] },
        { category: "Connettività", items: ["WiFi Alta Velocità", "Prese", "HDMI e USB-C"] },
        { category: "Comfort", items: ["Climatizzazione", "Luce Naturale"] },
        { category: "Servizi", items: ["Catering Disponibile", "Supporto Reception", "Accesso Sicuro"] },
      ],
    },
    layouts: {
      en: [
        { name: "Theatre", capacity: 50, icon: "theatre" },
        { name: "Classroom", capacity: 35, icon: "classroom" },
        { name: "Boardroom", capacity: 25, icon: "boardroom" },
        { name: "U-Shape", capacity: 20, icon: "ushape" },
      ],
      es: [
        { name: "Teatro", capacity: 50, icon: "theatre" },
        { name: "Aula", capacity: 35, icon: "classroom" },
        { name: "Mesa de Juntas", capacity: 25, icon: "boardroom" },
        { name: "U", capacity: 20, icon: "ushape" },
      ],
      it: [
        { name: "Teatro", capacity: 50, icon: "theatre" },
        { name: "Aula", capacity: 35, icon: "classroom" },
        { name: "Boardroom", capacity: 25, icon: "boardroom" },
        { name: "U", capacity: 20, icon: "ushape" },
      ],
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
    heroImage: conferenceQuarterPicasso,
    photos: [conferenceQuarterPicasso, conferencePicasso, conferenceHalfPicasso, conferenceHalfPicasso2, conferencePicasso2],
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
    facilitiesCategories: {
      en: [
        { category: "AV & Technology", items: ["43\" Display", "Video Conferencing", "Whiteboard"] },
        { category: "Connectivity", items: ["High-Speed WiFi", "Power Outlets"] },
        { category: "Comfort", items: ["Climate Control"] },
        { category: "Services", items: ["Coffee & Tea", "Reception Support", "Secure Access"] },
      ],
      es: [
        { category: "AV y Tecnología", items: ["Pantalla 43\"", "Videoconferencia", "Pizarra"] },
        { category: "Conectividad", items: ["WiFi Alta Velocidad", "Enchufes"] },
        { category: "Confort", items: ["Climatización"] },
        { category: "Servicios", items: ["Café y Té", "Soporte Recepción", "Acceso Seguro"] },
      ],
      it: [
        { category: "AV e Tecnologia", items: ["Display 43\"", "Videoconferenza", "Lavagna"] },
        { category: "Connettività", items: ["WiFi Alta Velocità", "Prese"] },
        { category: "Comfort", items: ["Climatizzazione"] },
        { category: "Servizi", items: ["Caffè e Tè", "Supporto Reception", "Accesso Sicuro"] },
      ],
    },
    layouts: {
      en: [
        { name: "Theatre", capacity: 30, icon: "theatre" },
        { name: "Classroom", capacity: 20, icon: "classroom" },
        { name: "Boardroom", capacity: 15, icon: "boardroom" },
        { name: "U-Shape", capacity: 12, icon: "ushape" },
      ],
      es: [
        { name: "Teatro", capacity: 30, icon: "theatre" },
        { name: "Aula", capacity: 20, icon: "classroom" },
        { name: "Mesa de Juntas", capacity: 15, icon: "boardroom" },
        { name: "U", capacity: 12, icon: "ushape" },
      ],
      it: [
        { name: "Teatro", capacity: 30, icon: "theatre" },
        { name: "Aula", capacity: 20, icon: "classroom" },
        { name: "Boardroom", capacity: 15, icon: "boardroom" },
        { name: "U", capacity: 12, icon: "ushape" },
      ],
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
    photos: [serviceMeeting, conferenceQuarterPicasso, conferenceHalfPicasso, conferencePicasso, conferencePicasso2],
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
    facilitiesCategories: {
      en: [
        { category: "AV & Technology", items: ["4K Projector", "Sound System", "Whiteboard Wall"] },
        { category: "Connectivity", items: ["High-Speed WiFi", "Power Outlets"] },
        { category: "Comfort", items: ["Climate Control", "Breakout Area"] },
        { category: "Services", items: ["Catering Available", "Secure Access"] },
      ],
      es: [
        { category: "AV y Tecnología", items: ["Proyector 4K", "Sistema de Sonido", "Pared Pizarra"] },
        { category: "Conectividad", items: ["WiFi Alta Velocidad", "Enchufes"] },
        { category: "Confort", items: ["Climatización", "Zona Descanso"] },
        { category: "Servicios", items: ["Catering Disponible", "Acceso Seguro"] },
      ],
      it: [
        { category: "AV e Tecnologia", items: ["Proiettore 4K", "Sistema Audio", "Parete Lavagna"] },
        { category: "Connettività", items: ["WiFi Alta Velocità", "Prese"] },
        { category: "Comfort", items: ["Climatizzazione", "Area Breakout"] },
        { category: "Servizi", items: ["Catering Disponibile", "Accesso Sicuro"] },
      ],
    },
    layouts: {
      en: [
        { name: "Classroom", capacity: 40, icon: "classroom" },
        { name: "Theatre", capacity: 40, icon: "theatre" },
        { name: "Boardroom", capacity: 20, icon: "boardroom" },
      ],
      es: [
        { name: "Aula", capacity: 40, icon: "classroom" },
        { name: "Teatro", capacity: 40, icon: "theatre" },
        { name: "Mesa de Juntas", capacity: 20, icon: "boardroom" },
      ],
      it: [
        { name: "Aula", capacity: 40, icon: "classroom" },
        { name: "Teatro", capacity: 40, icon: "theatre" },
        { name: "Boardroom", capacity: 20, icon: "boardroom" },
      ],
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
    photos: [serviceMeeting, conferenceQuarterPicasso, conferenceHalfPicasso, conferencePicasso, conferenceHalfPicasso2],
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
    facilitiesCategories: {
      en: [
        { category: "AV & Technology", items: ["43\" Display", "Video Conferencing", "Soundproofing"] },
        { category: "Connectivity", items: ["High-Speed WiFi", "Power Outlets"] },
        { category: "Comfort", items: ["Climate Control"] },
        { category: "Services", items: ["Coffee & Tea", "Secure Access"] },
      ],
      es: [
        { category: "AV y Tecnología", items: ["Pantalla 43\"", "Videoconferencia", "Insonorización"] },
        { category: "Conectividad", items: ["WiFi Alta Velocidad", "Enchufes"] },
        { category: "Confort", items: ["Climatización"] },
        { category: "Servicios", items: ["Café y Té", "Acceso Seguro"] },
      ],
      it: [
        { category: "AV e Tecnologia", items: ["Display 43\"", "Videoconferenza", "Insonorizzazione"] },
        { category: "Connettività", items: ["WiFi Alta Velocità", "Prese Elettriche"] },
        { category: "Comfort", items: ["Climatizzazione"] },
        { category: "Servizi", items: ["Caffè e Tè", "Accesso Sicuro"] },
      ],
    },
    layouts: {
      en: [{ name: "Boardroom", capacity: 6, icon: "boardroom" }],
      es: [{ name: "Mesa de Juntas", capacity: 6, icon: "boardroom" }],
      it: [{ name: "Boardroom", capacity: 6, icon: "boardroom" }],
    },
  },
];

/* ─── Route map ──────────────────────────────────────────── */
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

/* ─── Layout icon map ────────────────────────────────────── */
const layoutIcons = {
  theatre: AlignJustify,
  classroom: LayoutGrid,
  boardroom: Table2,
  ushape: Grid2X2,
};

/* ─── i18n labels ────────────────────────────────────────── */
const labels = {
  en: {
    back: "Back",
    allRooms: "All Conference Rooms",
    aboutRoom: "About This Room",
    readMore: "Read more",
    readLess: "Read less",
    idealFor: "Ideal For",
    facilities: "Facilities",
    layouts: "Room Configurations",
    people: "people",
    otherRooms: "Explore Other Rooms",
    getInTouch: "Get in Touch",
    showPhotos: "Show all photos",
  },
  es: {
    back: "Volver",
    allRooms: "Todas las Salas",
    aboutRoom: "Sobre Esta Sala",
    readMore: "Leer más",
    readLess: "Leer menos",
    idealFor: "Ideal Para",
    facilities: "Instalaciones",
    layouts: "Configuraciones de Sala",
    people: "personas",
    otherRooms: "Explorar Otras Salas",
    getInTouch: "Contáctanos",
    showPhotos: "Ver todas las fotos",
  },
  it: {
    back: "Indietro",
    allRooms: "Tutte le Sale",
    aboutRoom: "Informazioni sulla Sala",
    readMore: "Leggi di più",
    readLess: "Leggi meno",
    idealFor: "Ideale Per",
    facilities: "Servizi",
    layouts: "Configurazioni Sala",
    people: "persone",
    otherRooms: "Esplora Altre Sale",
    getInTouch: "Contattaci",
    showPhotos: "Vedi tutte le foto",
  },
};

const conferencePaths: Record<string, string> = {
  en: "/en/conference-rooms",
  es: "/es/salas-de-conferencias",
  it: "/it/sale-conferenze",
};

/* ─── Facility icon helper ───────────────────────────────── */
const facilityIconMap: [string, React.ElementType][] = [
  ["WiFi", Wifi], ["Display", Monitor], ["Pantalla", Monitor], ["Sound", Headphones],
  ["Sistema", Headphones], ["Video", Video], ["Climate", Wind], ["Climatiz", Wind],
  ["Catering", UtensilsCrossed], ["Coffee", Coffee], ["Café", Coffee], ["Caffè", Coffee],
  ["Reception", Users], ["Soporte", Users], ["Supporto", Users],
  ["Secure", KeyRound], ["Acceso", KeyRound], ["Accesso", KeyRound],
  ["Projector", Projector], ["Proyector", Projector], ["Proiettore", Projector],
  ["Whiteboard", PenTool], ["Pizarra", PenTool], ["Lavagna", PenTool], ["Parete", PenTool],
  ["Breakout", LayoutGrid], ["Zona", LayoutGrid], ["Area", LayoutGrid],
  ["Soundproof", Headphones], ["Insonor", Headphones],
  ["Power", Monitor], ["Enchufes", Monitor], ["Prese", Monitor], ["Outlet", Monitor],
  ["HDMI", Monitor], ["USB", Monitor], ["Light", Wind], ["Blind", Wind],
  ["Wireless", Video], ["Inalámbric", Video], ["Coordinator", Users], ["Coordinat", Users],
];

function getFacilityIcon(label: string): React.ElementType {
  for (const [key, Icon] of facilityIconMap) {
    if (label.includes(key)) return Icon;
  }
  return Coffee;
}

/* ─── Photo Gallery Overlay ──────────────────────────────── */
function PhotoGallery({ photos, onClose }: { photos: string[]; onClose: () => void }) {
  const [current, setCurrent] = useState(0);
  return (
    <motion.div
      className="fixed inset-0 z-50 bg-black flex flex-col"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="flex items-center justify-between px-6 py-4">
        <span className="text-white/60 font-body text-sm">{current + 1} / {photos.length}</span>
        <button onClick={onClose} className="text-white hover:text-white/70 transition-colors">
          <X className="w-6 h-6" />
        </button>
      </div>
      <div className="flex-1 flex items-center justify-center px-4">
        <img src={photos[current]} alt="" className="max-h-full max-w-full object-contain rounded-lg" />
      </div>
      <div className="flex gap-2 justify-center px-6 py-4 overflow-x-auto">
        {photos.map((p, i) => (
          <button key={i} onClick={() => setCurrent(i)} className={`shrink-0 w-16 h-12 rounded overflow-hidden border-2 transition-colors ${i === current ? "border-white" : "border-transparent opacity-50 hover:opacity-80"}`}>
            <img src={p} alt="" className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
    </motion.div>
  );
}

/* ─── Main component ─────────────────────────────────────── */
interface MeetingRoomPageProps { roomSlug: string }

export default function MeetingRoomPage({ roomSlug }: MeetingRoomPageProps) {
  const location = useLocation();
  const lang = location.pathname.startsWith("/es") ? "es" : location.pathname.startsWith("/it") ? "it" : "en";
  const room = rooms.find((r) => r.slug === roomSlug);
  const [showGallery, setShowGallery] = useState(false);
  const [descExpanded, setDescExpanded] = useState(false);
  const t = labels[lang];

  if (!room) return null;

  const seo = room.seo[lang];
  const paths = roomPaths[lang];
  const otherRooms = rooms.filter((r) => r.slug !== roomSlug);
  const description = room.description[lang];
  const shortDesc = description.length > 180 ? description.slice(0, 180) + "…" : description;

  return (
    <>
      <SEOHead title={seo.title} description={seo.description} path={roomPaths[lang][roomSlug]} />

      <AnimatePresence>
        {showGallery && <PhotoGallery photos={room.photos} onClose={() => setShowGallery(false)} />}
      </AnimatePresence>

      <div className="overflow-x-hidden">
        <Navbar />

        {/* ── Photo Grid ─────────────────────────────────── */}
        <section className="relative bg-neutral-900">
          {/* Mobile: single image */}
          <div className="md:hidden relative h-64">
            <img src={room.photos[0]} alt={room.name} className="w-full h-full object-cover" />
            <button
              onClick={() => setShowGallery(true)}
              className="absolute bottom-4 right-4 flex items-center gap-2 bg-white/90 backdrop-blur-sm text-neutral-900 text-xs font-body font-semibold px-3 py-2 rounded-lg"
            >
              <Maximize2 className="w-3.5 h-3.5" />
              {t.showPhotos}
            </button>
          </div>

          {/* Desktop: 1 large + 2×2 grid */}
          <div className="hidden md:grid grid-cols-4 grid-rows-2 gap-1 h-[480px]">
            <div className="col-span-2 row-span-2 overflow-hidden cursor-pointer" onClick={() => setShowGallery(true)}>
              <img src={room.photos[0]} alt={room.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            {room.photos.slice(1, 5).map((photo, i) => (
              <div
                key={i}
                className={`overflow-hidden cursor-pointer relative ${i === 3 ? "group" : ""}`}
                onClick={() => setShowGallery(true)}
              >
                <img src={photo} alt="" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                {i === 3 && room.photos.length > 5 && (
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center group-hover:bg-black/60 transition-colors">
                    <span className="text-white font-display font-bold text-xl">+{room.photos.length - 4}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ── Content + Sidebar ──────────────────────────── */}
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-10 md:py-14">

          {/* Back link */}
          <Link
            to={conferencePaths[lang]}
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground text-sm font-body mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            {t.allRooms}
          </Link>

          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">

            {/* ── Left column ──────────────────────────── */}
            <div className="lg:col-span-8 space-y-12">

              {/* Title + highlights */}
              <div>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground">{room.name}</h1>
                    <p className="font-body text-muted-foreground mt-1 flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      {room.capacity[lang]}
                    </p>
                  </div>
                  {room.highlight && (
                    <span className="shrink-0 font-body text-[10px] uppercase tracking-[0.2em] border border-primary text-primary px-3 py-1 rounded-full">
                      Flagship
                    </span>
                  )}
                </div>

                {/* Feature pills */}
                <div className="flex flex-wrap gap-2 pt-2 pb-6 border-b border-border">
                  {room.features[lang].map((f, i) => (
                    <span key={i} className="font-body text-sm px-3 py-1.5 rounded-full bg-muted text-foreground">
                      {f}
                    </span>
                  ))}
                </div>
              </div>

              {/* Description */}
              <div>
                <p className="font-body text-xs uppercase tracking-[0.3em] text-primary mb-3">{t.aboutRoom}</p>
                <p className="font-body text-foreground/80 leading-relaxed">
                  {descExpanded ? description : shortDesc}
                </p>
                {description.length > 180 && (
                  <button
                    onClick={() => setDescExpanded(!descExpanded)}
                    className="mt-3 flex items-center gap-1 font-body text-sm text-primary hover:text-primary/80 transition-colors"
                  >
                    {descExpanded ? t.readLess : t.readMore}
                    {descExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                )}
              </div>

              {/* Ideal For */}
              <div>
                <p className="font-body text-xs uppercase tracking-[0.3em] text-primary mb-5">{t.idealFor}</p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {room.useCases[lang].map((uc, i) => (
                    <div key={i} className="flex items-center gap-3 p-4 rounded-xl border border-border hover:border-primary/40 transition-colors">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      <span className="font-body text-sm text-foreground">{uc}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Facilities by category */}
              <div>
                <p className="font-body text-xs uppercase tracking-[0.3em] text-primary mb-5">{t.facilities}</p>
                <div className="space-y-6">
                  {room.facilitiesCategories[lang].map((cat, ci) => (
                    <div key={ci}>
                      <h3 className="font-body text-sm font-semibold text-foreground mb-3">{cat.category}</h3>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {cat.items.map((item, ii) => {
                          const Icon = getFacilityIcon(item);
                          return (
                            <div key={ii} className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                              <div className="w-8 h-8 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                                <Icon className="w-4 h-4 text-primary" />
                              </div>
                              <span className="font-body text-xs text-foreground leading-tight">{item}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Layout configurations */}
              <div>
                <p className="font-body text-xs uppercase tracking-[0.3em] text-primary mb-5">{t.layouts}</p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {room.layouts[lang].map((layout, i) => {
                    const Icon = layoutIcons[layout.icon];
                    return (
                      <div key={i} className="flex flex-col items-center gap-3 p-5 rounded-xl border border-border text-center hover:border-primary/40 transition-colors">
                        <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                          <Icon className="w-5 h-5 text-muted-foreground" />
                        </div>
                        <div>
                          <p className="font-body text-sm font-semibold text-foreground">{layout.name}</p>
                          <p className="font-body text-xs text-muted-foreground mt-0.5">{layout.capacity} {t.people}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Other rooms */}
              <div>
                <p className="font-body text-xs uppercase tracking-[0.3em] text-primary mb-5">{t.otherRooms}</p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {otherRooms.map((r) => (
                    <Link
                      key={r.slug}
                      to={paths[r.slug]}
                      className="flex items-center gap-4 p-4 rounded-xl border border-border hover:border-primary/50 hover:shadow-sm transition-all group"
                    >
                      <img src={r.heroImage} alt={r.name} className="w-16 h-12 object-cover rounded-lg shrink-0" />
                      <div>
                        <h3 className="font-display text-sm font-bold text-foreground group-hover:text-primary transition-colors">{r.name}</h3>
                        <p className="font-body text-xs text-muted-foreground mt-0.5">{r.capacity[lang]}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* ── Right: Sticky sidebar ─────────────────── */}
            <div className="hidden lg:block lg:col-span-4">
              <div className="sticky top-24 rounded-2xl border border-border p-6 space-y-6 shadow-sm">
                <div>
                  <h2 className="font-display text-xl font-bold text-foreground">{room.name}</h2>
                  <p className="font-body text-sm text-muted-foreground mt-1 flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    {room.capacity[lang]}
                  </p>
                </div>

                <div className="space-y-2">
                  {room.features[lang].map((f, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm font-body text-foreground/80">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      {f}
                    </div>
                  ))}
                </div>

                <div className="border-t border-border pt-4 space-y-2">
                  {room.layouts[lang].map((layout, i) => {
                    const Icon = layoutIcons[layout.icon];
                    return (
                      <div key={i} className="flex items-center justify-between text-sm font-body">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Icon className="w-4 h-4" />
                          {layout.name}
                        </div>
                        <span className="font-semibold text-foreground">{layout.capacity} {t.people}</span>
                      </div>
                    );
                  })}
                </div>

                <Button asChild className="w-full">
                  <Link to={lang === "en" ? "/#contact" : lang === "es" ? "/es#contact" : "/it#contact"}>
                    {t.getInTouch}
                  </Link>
                </Button>
              </div>
            </div>

          </div>
        </div>

        <ConferenceCTA />
        <Footer />
      </div>

      {/* ── Mobile sticky CTA ──────────────────────────────── */}
      <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-background/95 backdrop-blur-sm border-t border-border px-4 py-3">
        <Button asChild className="w-full">
          <Link to={lang === "en" ? "/#contact" : lang === "es" ? "/es#contact" : "/it#contact"}>
            {t.getInTouch}
          </Link>
        </Button>
      </div>
    </>
  );
}
