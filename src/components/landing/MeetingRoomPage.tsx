import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Users, Monitor, Video, PenTool, Coffee, Wifi, Headphones, Wind,
  UtensilsCrossed, KeyRound, Projector, LayoutGrid, X,
  ChevronLeft, ChevronRight, ArrowLeft, Grid2X2, AlignJustify, Table2, Maximize2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SEOHead from "@/components/SEOHead";
import serviceMeeting from "@/assets/service-meeting.webp";
import bigConf27 from "@/assets/big-conference-room-27.webp";

const _s = (img: unknown): string => typeof img === 'string' ? img : (img as any)?.src ?? '';

const getSrc = (img: any): string => typeof img === 'string' ? img : img.src;

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
const bigConfPhotosGlob = import.meta.glob('@/assets/big-conference-room-*.webp', { eager: true });
const bigConfPhotos = Object.values(bigConfPhotosGlob).map((mod: any) => getSrc(mod.default || mod));

const largeConfPhotosGlob = import.meta.glob('@/assets/large-conference-room-*.webp', { eager: true });
const largeConfPhotos = Object.values(largeConfPhotosGlob).map((mod: any) => getSrc(mod.default || mod));

const quarterConfPhotosGlob = import.meta.glob('@/assets/quarter-conference-room-*.webp', { eager: true });
const quarterConfPhotos = Object.values(quarterConfPhotosGlob).map((mod: any) => getSrc(mod.default || mod));

const trainingRoomPhotosGlob = import.meta.glob('@/assets/training-room-*.webp', { eager: true });
const trainingRoomPhotos = Object.values(trainingRoomPhotosGlob).map((mod: any) => getSrc(mod.default || mod));

const phoneBoothPhotosGlob = import.meta.glob('@/assets/phone-booth-*.webp', { eager: true });
const phoneBoothPhotos = Object.values(phoneBoothPhotosGlob).map((mod: any) => getSrc(mod.default || mod));

const terraceTrainingPhotosGlob = import.meta.glob('@/assets/terrace-training-room-*.webp', { eager: true });
const terraceTrainingPhotos = Object.values(terraceTrainingPhotosGlob).map((mod: any) => getSrc(mod.default || mod));

const fourthFloorPhotosGlob = import.meta.glob('@/assets/4th-floor-training-room-*.webp', { eager: true });
const fourthFloorPhotos = Object.values(fourthFloorPhotosGlob).map((mod: any) => getSrc(mod.default || mod));

const rooms: RoomData[] = [
  {
    slug: "big-conference-room",
    name: "Big Conference Room",
    highlight: true,
    seo: {
      en: { title: "Big Conference Room", description: "Our flagship conference room for up to 80 people with 85\" 4K display, premium video conferencing and flexible layout in Málaga." },
      es: { title: "Gran Sala de Conferencias – City Center Picasso", description: "Nuestra sala principal para hasta 80 personas con pantalla 4K de 85\", videoconferencia premium y disposición flexible en Málaga." },
      it: { title: "Grande Sala Conferenze – City Center Picasso", description: "La nostra sala principale per fino a 80 persone con display 4K da 85\", videoconferenza premium e layout flessibile a Málaga." },
    },
    capacity: { en: "Up to 80 people", es: "Hasta 80 personas", it: "Fino a 80 persone" },
    heroImage: getSrc(bigConf27),
    photos: bigConfPhotos.length > 0 ? bigConfPhotos : ["/placeholder.svg"],
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
    slug: "large-conference-room",
    name: "Large Conference Room",
    seo: {
      en: { title: "Large Conference Room", description: "A versatile conference room for up to 50 people with 55\" 4K display and professional video conferencing in Málaga." },
      es: { title: "Large Conference Room", description: "Una sala versátil para hasta 50 personas con pantalla 4K de 55\" y videoconferencia profesional en Málaga." },
      it: { title: "Large Conference Room", description: "Una sala versatile per fino a 50 persone con display 4K da 55\" e videoconferenza professionale a Málaga." },
    },
    capacity: { en: "Up to 50 people", es: "Hasta 50 personas", it: "Fino a 50 persone" },
    heroImage: largeConfPhotos[0] || "/placeholder.svg",
    photos: largeConfPhotos.length > 0 ? largeConfPhotos : ["/placeholder.svg"],
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
    slug: "quarter-conference-room",
    name: "Quarter Conference Room",
    seo: {
      en: { title: "Quarter Conference Room", description: "An intimate conference room for up to 30 people with 43\" display and video conferencing in Málaga." },
      es: { title: "Quarter Conference Room", description: "Una sala íntima para hasta 30 personas con pantalla de 43\" y videoconferencia en Málaga." },
      it: { title: "Quarter Conference Room", description: "Una sala intima per fino a 30 persone con display da 43\" e videoconferenza a Málaga." },
    },
    capacity: { en: "Up to 30 people", es: "Hasta 30 personas", it: "Fino a 30 persone" },
    heroImage: quarterConfPhotos[0] || "/placeholder.svg",
    photos: quarterConfPhotos.length > 0 ? quarterConfPhotos : ["/placeholder.svg"],
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
      en: { title: "Training Room – Innovation Campus Málaga", description: "Intimate training room for up to 6 people. Perfect for focused workshops, coaching sessions, and small team training in Málaga." },
      es: { title: "Sala de Formación – Innovation Campus Málaga", description: "Sala de formación íntima para hasta 6 personas. Perfecta para talleres enfocados, sesiones de coaching y formación en equipo pequeño en Málaga." },
      it: { title: "Sala Formazione – Innovation Campus Málaga", description: "Sala formazione intima per fino a 6 persone. Ideale per workshop focalizzati, sessioni di coaching e formazione in piccoli team a Málaga." },
    },
    capacity: { en: "Up to 6 people", es: "Hasta 6 personas", it: "Fino a 6 persone" },
    heroImage: trainingRoomPhotos[0] || getSrc(serviceMeeting),
    photos: trainingRoomPhotos.length > 0 ? trainingRoomPhotos : [getSrc(serviceMeeting)],
    features: {
      en: ["Large Display", "Whiteboard", "Video Call Ready", "High-Speed WiFi"],
      es: ["Pantalla Grande", "Pizarra", "Lista para Video", "WiFi Alta Velocidad"],
      it: ["Display Grande", "Lavagna", "Video Call Ready", "WiFi Alta Velocità"],
    },
    description: {
      en: "A focused, intimate space for up to 6 people — ideal for hands-on training sessions, coaching, mentoring, and small team workshops. Everything is within reach: whiteboard, display, and reliable connectivity, in a room designed for concentration and real work.",
      es: "Un espacio íntimo y concentrado para hasta 6 personas, ideal para sesiones de formación práctica, coaching, mentoría y talleres de equipo pequeño. Todo a mano: pizarra, pantalla y conectividad fiable, en una sala diseñada para la concentración y el trabajo real.",
      it: "Uno spazio intimo e focalizzato per fino a 6 persone, ideale per sessioni di formazione pratica, coaching, mentoring e workshop in piccoli team. Tutto a portata di mano: lavagna, display e connettività affidabile, in una sala progettata per la concentrazione e il lavoro vero.",
    },
    useCases: {
      en: ["Hands-on training", "Coaching & mentoring", "Small team workshops", "Onboarding sessions", "Skill intensives"],
      es: ["Formación práctica", "Coaching y mentoría", "Talleres de equipo pequeño", "Sesiones de incorporación", "Intensivos de habilidades"],
      it: ["Formazione pratica", "Coaching e mentoring", "Workshop in piccoli team", "Sessioni di onboarding", "Intensivi sulle competenze"],
    },
    amenities: {
      en: ["High-Speed WiFi", "Large Display", "Whiteboard", "Video Conferencing", "Climate Control", "Catering Available", "Secure Access"],
      es: ["WiFi Alta Velocidad", "Pantalla Grande", "Pizarra", "Videoconferencia", "Climatización", "Catering Disponible", "Acceso Seguro"],
      it: ["WiFi Alta Velocità", "Display Grande", "Lavagna", "Videoconferenza", "Climatizzazione", "Catering Disponibile", "Accesso Sicuro"],
    },
    facilitiesCategories: {
      en: [
        { category: "AV & Technology", items: ["Large Display", "Video Conferencing", "Whiteboard"] },
        { category: "Connectivity", items: ["High-Speed WiFi", "Power Outlets"] },
        { category: "Comfort", items: ["Climate Control"] },
        { category: "Services", items: ["Catering Available", "Secure Access"] },
      ],
      es: [
        { category: "AV y Tecnología", items: ["Pantalla Grande", "Videoconferencia", "Pizarra"] },
        { category: "Conectividad", items: ["WiFi Alta Velocidad", "Enchufes"] },
        { category: "Confort", items: ["Climatización"] },
        { category: "Servicios", items: ["Catering Disponible", "Acceso Seguro"] },
      ],
      it: [
        { category: "AV e Tecnologia", items: ["Display Grande", "Videoconferenza", "Lavagna"] },
        { category: "Connettività", items: ["WiFi Alta Velocità", "Prese"] },
        { category: "Comfort", items: ["Climatizzazione"] },
        { category: "Servizi", items: ["Catering Disponibile", "Accesso Sicuro"] },
      ],
    },
    layouts: {
      en: [
        { name: "Boardroom", capacity: 6, icon: "boardroom" },
        { name: "Classroom", capacity: 6, icon: "classroom" },
      ],
      es: [
        { name: "Mesa de Juntas", capacity: 6, icon: "boardroom" },
        { name: "Aula", capacity: 6, icon: "classroom" },
      ],
      it: [
        { name: "Boardroom", capacity: 6, icon: "boardroom" },
        { name: "Aula", capacity: 6, icon: "classroom" },
      ],
    },
  },
  {
    slug: "phone-booth",
    name: "Phone Booth",
    seo: {
      en: { title: "Phone Booth – Innovation Campus Málaga", description: "Private soundproofed phone booth for 1–2 people. Perfect for confidential calls, quick video meetings, and focused work in Málaga." },
      es: { title: "Cabina Telefónica – Innovation Campus Málaga", description: "Cabina telefónica privada e insonorizada para 1–2 personas. Perfecta para llamadas confidenciales y videorreuniones rápidas en Málaga." },
      it: { title: "Cabina Telefonica – Innovation Campus Málaga", description: "Cabina telefonica privata e insonorizzata per 1–2 persone. Ideale per chiamate riservate, videoriunioni rapide e lavoro concentrato a Málaga." },
    },
    capacity: { en: "1–2 people", es: "1–2 personas", it: "1–2 persone" },
    heroImage: phoneBoothPhotos[0] || "/placeholder.svg",
    photos: phoneBoothPhotos.length > 0 ? phoneBoothPhotos : ["/placeholder.svg"],
    features: {
      en: ["Soundproofed", "27\" Display", "Video Call Ready", "Noise-Cancelling Mic"],
      es: ["Insonorizada", "Pantalla 27\"", "Lista para Video", "Micro Cancelación Ruido"],
      it: ["Insonorizzata", "Display 27\"", "Video Call Ready", "Microfono Antirumore"],
    },
    description: {
      en: "Our Phone Booth is a compact, fully soundproofed private pod designed for confidential phone calls, quick video meetings, and focused individual work. Step inside and enjoy complete acoustic privacy without leaving the campus.",
      es: "Nuestra Cabina Telefónica es un espacio privado compacto e insonorizado, diseñado para llamadas confidenciales, videorreuniones rápidas y trabajo individual concentrado. Entra y disfruta de total privacidad acústica sin salir del campus.",
      it: "La nostra Cabina Telefonica è un pod privato compatto e completamente insonorizzato, progettato per chiamate riservate, videoriunioni rapide e lavoro individuale concentrato. Entra e goditi completa privacy acustica senza lasciare il campus.",
    },
    useCases: {
      en: ["Confidential calls", "Quick video meetings", "Focused deep work", "Recruiting interviews", "Private conversations"],
      es: ["Llamadas confidenciales", "Videorreuniones rápidas", "Trabajo concentrado", "Entrevistas de selección", "Conversaciones privadas"],
      it: ["Chiamate riservate", "Videoriunioni rapide", "Lavoro in deep focus", "Colloqui di selezione", "Conversazioni private"],
    },
    amenities: {
      en: ["High-Speed WiFi", "27\" Display", "Video Conferencing", "Noise-Cancelling Mic", "Climate Control", "USB-C Charging", "Secure Access"],
      es: ["WiFi Alta Velocidad", "Pantalla 27\"", "Videoconferencia", "Micro Cancelación Ruido", "Climatización", "Carga USB-C", "Acceso Seguro"],
      it: ["WiFi Alta Velocità", "Display 27\"", "Videoconferenza", "Microfono Antirumore", "Climatizzazione", "Ricarica USB-C", "Accesso Sicuro"],
    },
    facilitiesCategories: {
      en: [
        { category: "AV & Technology", items: ["27\" Display", "Video Conferencing", "Noise-Cancelling Mic"] },
        { category: "Connectivity", items: ["High-Speed WiFi", "USB-C Charging"] },
        { category: "Comfort", items: ["Climate Control", "Soundproofing"] },
        { category: "Services", items: ["Secure Access"] },
      ],
      es: [
        { category: "AV y Tecnología", items: ["Pantalla 27\"", "Videoconferencia", "Micro Cancelación Ruido"] },
        { category: "Conectividad", items: ["WiFi Alta Velocidad", "Carga USB-C"] },
        { category: "Confort", items: ["Climatización", "Insonorización"] },
        { category: "Servicios", items: ["Acceso Seguro"] },
      ],
      it: [
        { category: "AV e Tecnologia", items: ["Display 27\"", "Videoconferenza", "Microfono Antirumore"] },
        { category: "Connettività", items: ["WiFi Alta Velocità", "Ricarica USB-C"] },
        { category: "Comfort", items: ["Climatizzazione", "Insonorizzazione"] },
        { category: "Servizi", items: ["Accesso Sicuro"] },
      ],
    },
    layouts: {
      en: [{ name: "Individual", capacity: 1, icon: "boardroom" }, { name: "Duo", capacity: 2, icon: "boardroom" }],
      es: [{ name: "Individual", capacity: 1, icon: "boardroom" }, { name: "Dúo", capacity: 2, icon: "boardroom" }],
      it: [{ name: "Individuale", capacity: 1, icon: "boardroom" }, { name: "Duo", capacity: 2, icon: "boardroom" }],
    },
  },
  {
    slug: "terrace-training-room",
    name: "Training Room — Terrace",
    seo: {
      en: { title: "Training Room — Málaga Terrace", description: "Training room for up to 30 people on the 5th floor at Innovation Campus Málaga Terrace. 42m², projector, microphone, whiteboard and speaker included. Catering and events allowed." },
      es: { title: "Sala de Formación — Málaga Terrace", description: "Sala de formación para hasta 30 personas en el 5º piso de Innovation Campus Málaga Terrace. 42m², proyector, micrófono, pizarra y altavoz incluidos. Catering y eventos permitidos." },
      it: { title: "Sala Formazione — Málaga Terrace", description: "Sala formazione per fino a 30 persone al 5º piano di Innovation Campus Málaga Terrace. 42m², proiettore, microfono, lavagna e altoparlante inclusi. Catering ed eventi consentiti." },
    },
    capacity: { en: "Up to 30 people", es: "Hasta 30 personas", it: "Fino a 30 persone" },
    heroImage: terraceTrainingPhotos[0] || "/placeholder.svg",
    photos: terraceTrainingPhotos.length > 0 ? terraceTrainingPhotos : ["/placeholder.svg"],
    features: {
      en: ["Projector", "Whiteboard", "Microphone & Speaker", "Catering Available"],
      es: ["Proyector", "Pizarra", "Micrófono y Altavoz", "Catering Disponible"],
      it: ["Proiettore", "Lavagna", "Microfono e Altoparlante", "Catering Disponibile"],
    },
    description: {
      en: "A bright 42m² training room on the 5th floor of Málaga Terrace, with capacity for up to 30 people and 29 chairs. Equipped with projector, whiteboard, microphone and speaker — everything you need for training days, workshops, and corporate events. Catering available and events allowed.",
      es: "Una luminosa sala de formación de 42m² en el 5º piso de Málaga Terrace, con capacidad para hasta 30 personas y 29 sillas. Equipada con proyector, pizarra, micrófono y altavoz. Catering disponible y eventos permitidos.",
      it: "Una luminosa sala formazione di 42m² al 5º piano di Málaga Terrace, con capacità fino a 30 persone e 29 sedie. Dotata di proiettore, lavagna, microfono e altoparlante. Catering disponibile ed eventi consentiti.",
    },
    useCases: {
      en: ["Training days", "Corporate workshops", "Team presentations", "Events & conferences", "Onboarding sessions"],
      es: ["Jornadas de formación", "Talleres corporativos", "Presentaciones de equipo", "Eventos y conferencias", "Sesiones de incorporación"],
      it: ["Giornate di formazione", "Workshop aziendali", "Presentazioni di team", "Eventi e conferenze", "Sessioni di onboarding"],
    },
    amenities: {
      en: ["High-Speed WiFi", "Projector", "Whiteboard", "Microphone", "Speaker", "Catering Available", "Events Allowed", "Secure Access"],
      es: ["WiFi Alta Velocidad", "Proyector", "Pizarra", "Micrófono", "Altavoz", "Catering Disponible", "Eventos Permitidos", "Acceso Seguro"],
      it: ["WiFi Alta Velocità", "Proiettore", "Lavagna", "Microfono", "Altoparlante", "Catering Disponibile", "Eventi Consentiti", "Accesso Sicuro"],
    },
    facilitiesCategories: {
      en: [
        { category: "AV & Technology", items: ["Projector", "Whiteboard", "Microphone", "Speaker"] },
        { category: "Connectivity", items: ["High-Speed WiFi", "Power Outlets"] },
        { category: "Space", items: ["42m²", "5th Floor", "29 Chairs"] },
        { category: "Services", items: ["Catering Available", "Events Allowed", "Secure Access"] },
      ],
      es: [
        { category: "AV y Tecnología", items: ["Proyector", "Pizarra", "Micrófono", "Altavoz"] },
        { category: "Conectividad", items: ["WiFi Alta Velocidad", "Enchufes"] },
        { category: "Espacio", items: ["42m²", "5º Piso", "29 Sillas"] },
        { category: "Servicios", items: ["Catering Disponible", "Eventos Permitidos", "Acceso Seguro"] },
      ],
      it: [
        { category: "AV e Tecnologia", items: ["Proiettore", "Lavagna", "Microfono", "Altoparlante"] },
        { category: "Connettività", items: ["WiFi Alta Velocità", "Prese"] },
        { category: "Spazio", items: ["42m²", "5º Piano", "29 Sedie"] },
        { category: "Servizi", items: ["Catering Disponibile", "Eventi Consentiti", "Accesso Sicuro"] },
      ],
    },
    layouts: {
      en: [
        { name: "Theatre", capacity: 30, icon: "theatre" },
        { name: "Classroom", capacity: 29, icon: "classroom" },
      ],
      es: [
        { name: "Teatro", capacity: 30, icon: "theatre" },
        { name: "Aula", capacity: 29, icon: "classroom" },
      ],
      it: [
        { name: "Teatro", capacity: 30, icon: "theatre" },
        { name: "Aula", capacity: 29, icon: "classroom" },
      ],
    },
  },
  {
    slug: "4th-floor-training-room",
    name: "Training Room — 4th Floor",
    seo: {
      en: { title: "Training Room 4th Floor — Málaga Terrace", description: "Training room on the 4th floor at Innovation Campus Málaga Terrace. Projector, whiteboard, high-speed WiFi and terrace access included." },
      es: { title: "Sala de Formación 4º Piso — Málaga Terrace", description: "Sala de formación en el 4º piso de Innovation Campus Málaga Terrace. Proyector, pizarra, WiFi y acceso a terraza incluidos." },
      it: { title: "Sala Formazione 4° Piano — Málaga Terrace", description: "Sala formazione al 4° piano di Innovation Campus Málaga Terrace. Proiettore, lavagna, WiFi ad alta velocità e accesso terrazza inclusi." },
    },
    capacity: { en: "Up to 20 people", es: "Hasta 20 personas", it: "Fino a 20 persone" },
    heroImage: fourthFloorPhotos[0] || "/placeholder.svg",
    photos: fourthFloorPhotos.length > 0 ? fourthFloorPhotos : ["/placeholder.svg"],
    features: {
      en: ["Projector", "Whiteboard", "High-Speed WiFi", "Terrace Access"],
      es: ["Proyector", "Pizarra", "WiFi Alta Velocidad", "Acceso Terraza"],
      it: ["Proiettore", "Lavagna", "WiFi Alta Velocità", "Accesso Terrazza"],
    },
    description: {
      en: "A versatile training room on the 4th floor of Málaga Terrace, with capacity for up to 20 people. Equipped with projector, whiteboard and high-speed WiFi, with direct access to the terrace. Perfect for workshops, training days and team meetings.",
      es: "Una sala de formación versátil en el 4º piso de Málaga Terrace, con capacidad para hasta 20 personas. Equipada con proyector, pizarra y WiFi, con acceso directo a la terraza.",
      it: "Una sala formazione versatile al 4° piano di Málaga Terrace, con capacità fino a 20 persone. Dotata di proiettore, lavagna e WiFi, con accesso diretto alla terrazza.",
    },
    useCases: {
      en: ["Training days", "Team workshops", "Presentations", "Meetings", "Onboarding sessions"],
      es: ["Jornadas de formación", "Talleres de equipo", "Presentaciones", "Reuniones", "Sesiones de incorporación"],
      it: ["Giornate di formazione", "Workshop di team", "Presentazioni", "Riunioni", "Sessioni di onboarding"],
    },
    amenities: {
      en: ["High-Speed WiFi", "Projector", "Whiteboard", "Terrace Access", "Climate Control", "Catering Available", "Secure Access"],
      es: ["WiFi Alta Velocidad", "Proyector", "Pizarra", "Acceso Terraza", "Climatización", "Catering Disponible", "Acceso Seguro"],
      it: ["WiFi Alta Velocità", "Proiettore", "Lavagna", "Accesso Terrazza", "Climatizzazione", "Catering Disponibile", "Accesso Sicuro"],
    },
    facilitiesCategories: {
      en: [
        { category: "AV & Technology", items: ["Projector", "Whiteboard"] },
        { category: "Connectivity", items: ["High-Speed WiFi", "Power Outlets"] },
        { category: "Space", items: ["4th Floor", "Terrace Access"] },
        { category: "Services", items: ["Catering Available", "Secure Access"] },
      ],
      es: [
        { category: "AV y Tecnología", items: ["Proyector", "Pizarra"] },
        { category: "Conectividad", items: ["WiFi Alta Velocidad", "Enchufes"] },
        { category: "Espacio", items: ["4º Piso", "Acceso Terraza"] },
        { category: "Servicios", items: ["Catering Disponible", "Acceso Seguro"] },
      ],
      it: [
        { category: "AV e Tecnologia", items: ["Proiettore", "Lavagna"] },
        { category: "Connettività", items: ["WiFi Alta Velocità", "Prese"] },
        { category: "Spazio", items: ["4° Piano", "Accesso Terrazza"] },
        { category: "Servizi", items: ["Catering Disponibile", "Accesso Sicuro"] },
      ],
    },
    layouts: {
      en: [
        { name: "Theatre", capacity: 20, icon: "theatre" },
        { name: "Classroom", capacity: 16, icon: "classroom" },
        { name: "Boardroom", capacity: 12, icon: "boardroom" },
      ],
      es: [
        { name: "Teatro", capacity: 20, icon: "theatre" },
        { name: "Aula", capacity: 16, icon: "classroom" },
        { name: "Mesa de Juntas", capacity: 12, icon: "boardroom" },
      ],
      it: [
        { name: "Teatro", capacity: 20, icon: "theatre" },
        { name: "Aula", capacity: 16, icon: "classroom" },
        { name: "Boardroom", capacity: 12, icon: "boardroom" },
      ],
    },
  },
];

/* ─── Route map ──────────────────────────────────────────── */
const roomPaths: Record<string, Record<string, string>> = {
  en: {
    "big-conference-room": "/en/meeting-rooms/big-conference-room",
    "large-conference-room": "/en/meeting-rooms/large-conference-room",
    "quarter-conference-room": "/en/meeting-rooms/quarter-conference-room",
    "training-room": "/en/meeting-rooms/training-room",
    "phone-booth": "/en/meeting-rooms/phone-booth",
    "terrace-training-room": "/en/meeting-rooms/terrace-training-room",
    "4th-floor-training-room": "/en/meeting-rooms/4th-floor-training-room",
  },
  es: {
    "big-conference-room": "/es/salas/gran-sala-conferencias",
    "large-conference-room": "/es/salas/gran-sala-conferencias-2",
    "quarter-conference-room": "/es/salas/sala-quarter",
    "training-room": "/es/salas/sala-formacion",
    "phone-booth": "/es/salas/cabina-telefonica",
    "terrace-training-room": "/es/salas/sala-formacion-terraza",
    "4th-floor-training-room": "/es/salas/sala-formacion-4-planta",
  },
  it: {
    "big-conference-room": "/it/sale/grande-sala-conferenze",
    "large-conference-room": "/it/sale/grande-sala-conferenze-2",
    "quarter-conference-room": "/it/sale/sala-quarter",
    "training-room": "/it/sale/sala-formazione",
    "phone-booth": "/it/sale/cabina-telefonica",
    "terrace-training-room": "/it/sale/sala-formazione-terrazza",
    "4th-floor-training-room": "/it/sale/sala-formazione-4-piano",
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
    idealFor: "Ideal For",
    facilities: "Facilities",
    layouts: "Room Configurations",
    people: "people",
    otherRooms: "Explore Other Rooms",
    getInTouch: "Request availability",
    showPhotos: "Show all photos",
    included: "What's included",
    noCommitment: "Free · No commitment · Reply within 24h",
    pastEvents: "Events hosted here",
    pastEventsItems: [
      { tag: "Workshop", title: "Product Design Sprint" },
      { tag: "Conference", title: "Tech Leadership Summit" },
      { tag: "Networking", title: "Startup Founders Meetup" },
      { tag: "Training", title: "Agile Certification Course" },
    ],
  },
  es: {
    back: "Volver",
    allRooms: "Todas las Salas",
    aboutRoom: "Sobre Esta Sala",
    idealFor: "Ideal Para",
    facilities: "Instalaciones",
    layouts: "Configuraciones de Sala",
    people: "personas",
    otherRooms: "Explorar Otras Salas",
    getInTouch: "Consultar disponibilidad",
    showPhotos: "Ver todas las fotos",
    included: "Qué está incluido",
    noCommitment: "Gratis · Sin compromiso · Respuesta en 24h",
    pastEvents: "Eventos celebrados aquí",
    pastEventsItems: [
      { tag: "Workshop", title: "Sprint de Diseño de Producto" },
      { tag: "Conferencia", title: "Cumbre de Liderazgo Tech" },
      { tag: "Networking", title: "Encuentro de Fundadores" },
      { tag: "Formación", title: "Curso Certificación Agile" },
    ],
  },
  it: {
    back: "Indietro",
    allRooms: "Tutte le Sale",
    aboutRoom: "Informazioni sulla Sala",
    idealFor: "Ideale Per",
    facilities: "Servizi",
    layouts: "Configurazioni Sala",
    people: "persone",
    otherRooms: "Esplora Altre Sale",
    getInTouch: "Verifica disponibilità",
    showPhotos: "Vedi tutte le foto",
    included: "Cosa è incluso",
    noCommitment: "Gratuito · Senza impegno · Risposta entro 24h",
    pastEvents: "Eventi ospitati qui",
    pastEventsItems: [
      { tag: "Workshop", title: "Sprint di Product Design" },
      { tag: "Conferenza", title: "Summit Tech Leadership" },
      { tag: "Networking", title: "Incontro Founder Startup" },
      { tag: "Formazione", title: "Corso Certificazione Agile" },
    ],
  },
};

const conferencePaths: Record<string, string> = {
  en: "/en/meeting-rooms#rooms",
  es: "/es/salas-de-reuniones#rooms",
  it: "/it/sale-riunioni#rooms",
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
  const touchStartX = useRef<number>(0);
  const onCloseRef = useRef(onClose);
  onCloseRef.current = onClose;

  const prev = () => setCurrent((c) => (c - 1 + photos.length) % photos.length);
  const next = () => setCurrent((c) => (c + 1) % photos.length);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") setCurrent((c) => (c - 1 + photos.length) % photos.length);
      else if (e.key === "ArrowRight") setCurrent((c) => (c + 1) % photos.length);
      else if (e.key === "Escape") onCloseRef.current();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [photos.length]);

  return (
    <motion.div
      className="fixed inset-0 bg-black flex flex-col"
      style={{ zIndex: 9999 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onTouchStart={(e) => { touchStartX.current = e.touches[0].clientX; }}
      onTouchEnd={(e) => {
        const diff = touchStartX.current - e.changedTouches[0].clientX;
        if (Math.abs(diff) > 50) diff > 0 ? next() : prev();
      }}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 shrink-0 border-b border-white/10">
        <span className="text-white/60 font-body text-sm">{current + 1} / {photos.length}</span>
        <button
          onClick={onClose}
          className="flex items-center gap-2 bg-white text-black font-body font-semibold text-sm rounded-full px-5 py-2 hover:bg-white/90 transition-colors"
        >
          <X className="w-4 h-4" />
          Close
        </button>
      </div>

      {/* Main image + prev/next arrows */}
      <div className="flex-1 flex items-center justify-center px-4 relative min-h-0">
        <button
          onClick={prev}
          className="absolute left-2 md:left-6 z-10 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center transition-colors"
          aria-label="Previous photo"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>

        <motion.img
          key={current}
          src={photos[current]}
          alt=""
          className="max-h-full max-w-full object-contain rounded-lg select-none"
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2 }}
        />

        <button
          onClick={next}
          className="absolute right-2 md:right-6 z-10 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center transition-colors"
          aria-label="Next photo"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>
      </div>

      {/* Thumbnails */}
      <div className="flex gap-2 justify-center px-6 py-4 overflow-x-auto shrink-0">
        {photos.map((p, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`shrink-0 w-16 h-12 rounded overflow-hidden border-2 transition-all ${i === current ? "border-white opacity-100" : "border-transparent opacity-50 hover:opacity-80"}`}
          >
            <img src={p} alt="" className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
    </motion.div>
  );
}

/* ─── Main component ─────────────────────────────────────── */
interface MeetingRoomPageProps { roomSlug: string; lang?: "en" | "es" | "it" }

export default function MeetingRoomPage({ roomSlug, lang: langProp }: MeetingRoomPageProps) {
  const lang = langProp ?? (typeof window !== "undefined" && window.location.pathname.startsWith("/es") ? "es" : typeof window !== "undefined" && window.location.pathname.startsWith("/it") ? "it" : "en");
  const room = rooms.find((r) => r.slug === roomSlug);
  const [showGallery, setShowGallery] = useState(false);
  const [mobilePhoto, setMobilePhoto] = useState(0);
  const mobileTouchStart = useRef<number>(0);
  const t = labels[lang];

  if (!room) return null;

  const seo = room.seo[lang];
  const paths = roomPaths[lang];
  const otherRooms = rooms.filter((r) => r.slug !== roomSlug);
  const description = room.description[lang];
  const shortDesc = description.length > 160 ? description.slice(0, 160) + "…" : description;

  const leadUrl = `/${lang}/lead?service=meeting-rooms&space=${room.slug}`;

  return (
    <>
      <AnimatePresence>
        {showGallery && <PhotoGallery photos={room.photos} onClose={() => setShowGallery(false)} />}
      </AnimatePresence>

      <div>
        {/* ── Desktop hero — full-width with text overlay ─── */}
        <section className="hidden lg:flex relative h-[70vh] min-h-[500px] items-end cursor-pointer" onClick={() => setShowGallery(true)}>
          <img src={room.heroImage} alt={room.name} className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/40 to-transparent" />
          <div className="relative z-10 max-w-7xl mx-auto px-6 pb-12 w-full">
            <a
              href={conferencePaths[lang]}
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm font-body mb-4 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              {t.allRooms}
            </a>
            <div className="flex items-end justify-between gap-4">
              <div>
                <h1 className="font-display text-4xl md:text-5xl font-bold text-white">{room.name}</h1>
                <p className="font-body text-white/70 mt-2 flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  {room.capacity[lang]}
                </p>
              </div>
              {room.highlight && (
                <span className="shrink-0 font-body text-[10px] uppercase tracking-[0.2em] border border-white/50 text-white px-3 py-1 rounded-full mb-1">
                  Flagship
                </span>
              )}
            </div>
          </div>
        </section>

        {/* ── Photo Grid ─────────────────────────────────── */}
        <section className="relative bg-neutral-900 pt-20 lg:hidden">
          {/* Mobile: swipeable single photo (Booking.com style) */}
          <div
            className="md:hidden relative h-64 overflow-hidden cursor-pointer"
            onClick={() => setShowGallery(true)}
            onTouchStart={(e) => { mobileTouchStart.current = e.touches[0].clientX; }}
            onTouchEnd={(e) => {
              const diff = mobileTouchStart.current - e.changedTouches[0].clientX;
              if (Math.abs(diff) > 40) {
                setMobilePhoto((p) => diff > 0
                  ? Math.min(p + 1, room.photos.length - 1)
                  : Math.max(p - 1, 0)
                );
              }
            }}
          >
            <img
              src={room.photos[mobilePhoto]}
              alt={room.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-3 right-3 bg-black/60 text-white font-body text-xs px-2.5 py-1 rounded-full">
              {mobilePhoto + 1} / {room.photos.length}
            </div>
          </div>

          {/* Tablet only: large grid hero (md → lg) */}
          <div className="hidden md:block lg:hidden relative max-w-7xl mx-auto px-4 md:px-6 mb-8">
            <div className="grid gap-2 h-[400px] lg:h-[500px] rounded-2xl overflow-hidden" style={{ gridTemplateColumns: "2fr 1fr 1fr" }}>
              <div className="overflow-hidden cursor-pointer min-h-0 relative group" onClick={() => setShowGallery(true)}>
                <img src={room.photos[0]} alt={room.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 group-hover:brightness-90" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
              </div>
              <div className="grid grid-rows-2 gap-2 min-h-0">
                {room.photos.slice(1, 3).map((photo, i) => (
                  <div key={i} className="overflow-hidden cursor-pointer min-h-0 relative group" onClick={() => setShowGallery(true)}>
                    <img src={photo} alt="" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 group-hover:brightness-90" />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                  </div>
                ))}
              </div>
              <div className="grid grid-rows-2 gap-2 min-h-0">
                {room.photos.slice(3, 5).map((photo, i) => (
                  <div key={i} className="overflow-hidden cursor-pointer min-h-0 relative group" onClick={() => setShowGallery(true)}>
                    <img src={photo || room.photos[0]} alt="" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 group-hover:brightness-90" />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                  </div>
                ))}
              </div>
            </div>
            
            {/* Show all photos button (Airbnb style) */}
            <button 
              onClick={() => setShowGallery(true)}
              className="absolute bottom-6 right-10 lg:right-12 bg-white text-black font-body font-medium text-sm px-4 py-2.5 rounded-lg flex items-center gap-2 hover:bg-neutral-100 hover:scale-105 active:scale-95 transition-all shadow-md border border-neutral-200 z-10"
            >
              <Grid2X2 className="w-4 h-4" />
              {t.showPhotos}
            </button>
          </div>
        </section>

        {/* ── Content + Sidebar ──────────────────────────── */}
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-10 md:py-14">

          {/* Back link — mobile/tablet only (desktop version is in hero) */}
          <a
            href={conferencePaths[lang]}
            className="lg:hidden inline-flex items-center gap-2 text-muted-foreground hover:text-foreground text-sm font-body mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            {t.allRooms}
          </a>

          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">

            {/* ── Left column ──────────────────────────── */}
            <div className="lg:col-span-8 space-y-12">

              {/* Title + highlights — mobile/tablet only */}
              <div>
                <div className="lg:hidden flex items-start justify-between gap-4 mb-4">
                  <div>
                    <h1 className="font-display text-2xl md:text-4xl font-bold text-foreground">{room.name}</h1>
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

              </div>

              {/* Description */}
              <div>
                <p className="font-body text-xs uppercase tracking-[0.3em] text-primary mb-3">{t.aboutRoom}</p>
                <p className="font-body text-foreground/80 leading-relaxed">{description}</p>
              </div>

              {/* Feature pills */}
              <div className="flex flex-wrap gap-2 pb-2 border-b border-border">
                {room.features[lang].map((f, i) => (
                  <span key={i} className="font-body text-sm px-3 py-1.5 rounded-full bg-muted text-foreground">
                    {f}
                  </span>
                ))}
              </div>

              {/* Ideal For */}
              <div>
                <p className="font-body text-xs uppercase tracking-[0.3em] text-primary mb-4">{t.idealFor}</p>
                <div className="flex flex-wrap gap-2">
                  {room.useCases[lang].map((uc, i) => (
                    <span key={i} className="flex items-center gap-2 font-body text-sm px-3 py-1.5 rounded-full bg-muted text-foreground">
                      <div className="w-1 h-1 rounded-full bg-primary shrink-0" />
                      {uc}
                    </span>
                  ))}
                </div>
              </div>

              {/* Other rooms */}
              <div>
                <p className="font-body text-xs uppercase tracking-[0.3em] text-primary mb-5">{t.otherRooms}</p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {otherRooms.map((r) => (
                    <a
                      key={r.slug}
                      href={paths[r.slug]}
                      className="flex items-center gap-4 p-4 rounded-xl border border-border hover:border-primary/50 hover:shadow-sm transition-all group"
                    >
                      <img src={r.heroImage} alt={r.name} className="w-16 h-12 object-cover rounded-lg shrink-0" />
                      <div>
                        <h3 className="font-display text-sm font-bold text-foreground group-hover:text-primary transition-colors">{r.name}</h3>
                        <p className="font-body text-xs text-muted-foreground mt-0.5">{r.capacity[lang]}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* ── Right: Sticky sidebar ─────────────────── */}
            <div className="hidden lg:block lg:col-span-4">

              {/* Desktop photo grid — above booking card */}
              <div className="rounded-2xl overflow-hidden mb-4 cursor-pointer" onClick={() => setShowGallery(true)}>
                <div className="grid gap-1 h-64" style={{ gridTemplateColumns: "2fr 1fr" }}>
                  <div className="overflow-hidden group min-h-0">
                    <img src={room.photos[0]} alt={room.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="grid grid-rows-2 gap-1 min-h-0">
                    <div className="overflow-hidden group">
                      <img src={room.photos[1] || room.photos[0]} alt="" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    </div>
                    <div className="overflow-hidden relative group">
                      <img src={room.photos[2] || room.photos[0]} alt="" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                      {room.photos.length > 3 && (
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                          <span className="text-white text-sm font-body font-semibold flex items-center gap-1.5">
                            <Grid2X2 className="w-4 h-4" />
                            +{room.photos.length - 3} {t.showPhotos}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="sticky top-24 rounded-2xl border border-border shadow-sm">

                <div className="p-6 space-y-5">
                  {/* Name + capacity */}
                  <div>
                    <div className="flex items-start justify-between gap-2">
                      <h2 className="font-display text-xl font-bold text-foreground">{room.name}</h2>
                      {room.highlight && (
                        <span className="shrink-0 font-body text-[9px] uppercase tracking-[0.2em] border border-primary text-primary px-2 py-0.5 rounded-full">
                          Flagship
                        </span>
                      )}
                    </div>
                    <p className="font-body text-sm text-muted-foreground mt-1 flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      {room.capacity[lang]}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="space-y-1.5">
                    {room.features[lang].map((f, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm font-body text-foreground/80">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                        {f}
                      </div>
                    ))}
                  </div>

                  {/* Layouts */}
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

                  {/* CTA */}
                  <div className="border-t border-border pt-4">
                    <Button asChild className="w-full h-12 text-base font-semibold">
                      <a href={leadUrl}>{t.getInTouch}</a>
                    </Button>
                    <p className="text-center font-body text-xs text-muted-foreground mt-2">{t.noCommitment}</p>
                  </div>

                  {/* What's included */}
                  <div className="border-t border-border pt-4">
                    <p className="font-body text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">{t.included}</p>
                    <div className="grid grid-cols-2 gap-x-3 gap-y-2">
                      {room.amenities[lang].map((a, i) => {
                        const Icon = getFacilityIcon(a);
                        return (
                          <div key={i} className="flex items-center gap-1.5 font-body text-xs text-foreground/70">
                            <Icon className="w-3 h-3 text-primary shrink-0" />
                            <span className="leading-tight">{a}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* ── Mobile sticky CTA ──────────────────────────────── */}
      <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-background/95 backdrop-blur-sm border-t border-border px-4 py-3">
        <Button asChild className="w-full">
          <a href={leadUrl}>
            {t.getInTouch}
          </a>
        </Button>
      </div>
    </>
  );
}
