import { useState, useEffect } from "react";
import { ArrowLeft, X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";

// Málaga Palace Assets
import palaceEntrance from "@/assets/palace-entrance.webp";
import palaceSkylight from "@/assets/palace-skylight.webp";
import palaceCoworking from "@/assets/palace-coworking.webp";
import palaceCourtyard from "@/assets/palace-courtyard.webp";
import palaceCoffeeBar from "@/assets/palace-coffee-bar.webp";
import palaceSecondFloor from "@/assets/palace-second-floor.webp";
import palaceOutside from "@/assets/palace-outside.webp";
import palaceOutsideFront from "@/assets/palace-outside-front.webp";
import palaceBrandingWall from "@/assets/palace-branding-wall.webp";
import palaceCatering from "@/assets/palace-catering.webp";
import historicExterior from "@/assets/historic-exterior.webp";

// Málaga Terrace Assets
import terraceHero from "@/assets/terrace-hero.webp";
import terraceEntrance from "@/assets/terrace-entrance.webp";
import terraceBar from "@/assets/terrace-bar.webp";
import terraceEvents from "@/assets/terrace-events.webp";
import terraceCafe from "@/assets/terrace-cafe.webp";
import terraceCoworkingAlt from "@/assets/terrace-coworking-alt.webp";
import terraceInterior from "@/assets/terrace-interior.webp";
import terraceLounge from "@/assets/terrace-lounge.webp";
import terraceMeetingAlt from "@/assets/terrace-meeting-alt.webp";
import terraceReception from "@/assets/terrace-reception.webp";
import terraceTraining01 from "@/assets/terrace-training-room-01.webp";
import terraceTraining02 from "@/assets/terrace-training-room-02.webp";
import terraceTraining03 from "@/assets/terrace-training-room-03.webp";
import terraceTraining04 from "@/assets/terrace-training-room-04.webp";

// Meetings & Conference Rooms Assets
import serviceMeeting from "@/assets/service-meeting.webp";
import largeConference01 from "@/assets/large-conference-room-01.webp";
import largeConference02 from "@/assets/large-conference-room-02.webp";
import largeConference03 from "@/assets/large-conference-room-03.webp";
import largeConference04 from "@/assets/large-conference-room-04.webp";
import largeConference05 from "@/assets/large-conference-room-05.webp";
import largeConference06 from "@/assets/large-conference-room-06.webp";
import largeConference09 from "@/assets/large-conference-room-09.webp";
import largeConference10 from "@/assets/large-conference-room-10.webp";
import largeConference12 from "@/assets/large-conference-room-12.webp";
import largeConference15 from "@/assets/large-conference-room-15.webp";
import largeConference22 from "@/assets/large-conference-room-22.webp";

import bigConference04 from "@/assets/big-conference-room-04.webp";
import bigConference06 from "@/assets/big-conference-room-06.webp";
import bigConference10 from "@/assets/big-conference-room-10.webp";
import bigConference15 from "@/assets/big-conference-room-15.webp";
import bigConference22 from "@/assets/big-conference-room-22.webp";

import quarterConference01 from "@/assets/quarter-conference-room-01.webp";
import quarterConference02 from "@/assets/quarter-conference-room-02.webp";
import quarterConference03 from "@/assets/quarter-conference-room-03.webp";
import quarterConference05 from "@/assets/quarter-conference-room-05.webp";
import quarterConference08 from "@/assets/quarter-conference-room-08.webp";
import quarterConference12 from "@/assets/quarter-conference-room-12.webp";

import trainingRoom01 from "@/assets/training-room-01.webp";
import trainingRoom02 from "@/assets/training-room-02.webp";
import trainingRoom03 from "@/assets/training-room-03.webp";
import trainingRoom04 from "@/assets/training-room-04.webp";
import trainingRoom05 from "@/assets/training-room-05.webp";

// Phone Booths & Services Assets
import phoneBooth01 from "@/assets/phone-booth-malaga-palace-01.webp";
import phoneBooth02 from "@/assets/phone-booth-malaga-palace-02.webp";
import serviceCommunity from "@/assets/service-community.webp";
import serviceAcademy from "@/assets/service-academy.webp";

// Ancona Assets
import anconaHero from "@/assets/ancona-hero.webp";
import anconaCoworking from "@/assets/ancona-coworking.webp";
import anconaMeeting from "@/assets/ancona-meeting.webp";

const _s = (img: unknown): string => typeof img === 'string' ? img : (img as any)?.src ?? '';

type FilterType = "all" | "palace" | "terrace" | "meetings" | "community" | "ancona";

interface PhotoItem {
  src: any;
  alt: { en: string; es: string; it: string };
  category: { en: string; es: string; it: string };
  location: { en: string; es: string; it: string };
  filter: FilterType;
}

const photos: PhotoItem[] = [
  // Málaga Palace
  { src: palaceEntrance, alt: { en: "Palace grand main entrance hall", es: "Gran vestíbulo de entrada del Palace", it: "Grande atrio d'ingresso del Palace" }, category: { en: "Palace Entrance", es: "Entrada Palace", it: "Ingresso Palace" }, location: { en: "Málaga Palace", es: "Málaga Palace", it: "Málaga Palace" }, filter: "palace" },
  { src: palaceSkylight, alt: { en: "Sunny central glass skylight roof", es: "Techo de cristal central soleado", it: "Lucernario centrale in vetro soleggiato" }, category: { en: "Skylight Area", es: "Zona del Lucernario", it: "Area Lucernario" }, location: { en: "Málaga Palace", es: "Málaga Palace", it: "Málaga Palace" }, filter: "palace" },
  { src: palaceCoworking, alt: { en: "High-ceiling historical coworking zone", es: "Zona de coworking de techos altos", it: "Zona coworking storica con soffitti alti" }, category: { en: "Coworking Space", es: "Espacio Coworking", it: "Spazio Coworking" }, location: { en: "Málaga Palace", es: "Málaga Palace", it: "Málaga Palace" }, filter: "palace" },
  { src: palaceCourtyard, alt: { en: "Inner Andalusian open-air courtyard", es: "Patio interior andaluz al aire libre", it: "Cortile interno all'aperto in stile andaluso" }, category: { en: "Central Patio", es: "Patio Central", it: "Patio Centrale" }, location: { en: "Málaga Palace", es: "Málaga Palace", it: "Málaga Palace" }, filter: "palace" },
  { src: palaceCoffeeBar, alt: { en: "Premium bar area for networking and coffee", es: "Zona de bar premium para networking", it: "Area bar premium per networking e caffè" }, category: { en: "Bistro & Coffee", es: "Bistró y Café", it: "Bistrot & Caffè" }, location: { en: "Málaga Palace", es: "Málaga Palace", it: "Málaga Palace" }, filter: "palace" },
  { src: palaceSecondFloor, alt: { en: "Elegant second floor working suites", es: "Elegantes suites de trabajo del segundo piso", it: "Eleganti uffici al secondo piano" }, category: { en: "Hot Desk Zone", es: "Zona Hot Desk", it: "Area Hot Desk" }, location: { en: "Málaga Palace", es: "Málaga Palace", it: "Málaga Palace" }, filter: "palace" },
  { src: palaceOutside, alt: { en: "Historic 18th-century exterior facade", es: "Fachada exterior del siglo XVIII", it: "Facciata esterna storica del XVIII secolo" }, category: { en: "Architecture", es: "Arquitectura", it: "Architettura" }, location: { en: "Málaga Palace", es: "Málaga Palace", it: "Málaga Palace" }, filter: "palace" },
  { src: palaceOutsideFront, alt: { en: "Palace entrance facade near Picasso Museum", es: "Fachada de entrada cerca del Museo Picasso", it: "Ingresso principale vicino al Museo Picasso" }, category: { en: "Architecture", es: "Arquitectura", it: "Architettura" }, location: { en: "Málaga Palace", es: "Málaga Palace", it: "Málaga Palace" }, filter: "palace" },
  { src: palaceBrandingWall, alt: { en: "Modern brand identity feature wall", es: "Pared con identidad de marca moderna", it: "Parete con brand identity" }, category: { en: "Workspace Details", es: "Detalles del Espacio", it: "Dettagli Spazio" }, location: { en: "Málaga Palace", es: "Málaga Palace", it: "Málaga Palace" }, filter: "palace" },
  { src: palaceCatering, alt: { en: "Event catering setup in the courtyard", es: "Configuración de catering para eventos en el patio", it: "Allestimento catering per eventi nel cortile" }, category: { en: "Events Venue", es: "Lugar de Eventos", it: "Location Eventi" }, location: { en: "Málaga Palace", es: "Málaga Palace", it: "Málaga Palace" }, filter: "palace" },
  { src: historicExterior, alt: { en: "Scenic old town street light facade", es: "Fachada pintoresca en el casco antiguo", it: "Pittoresca facciata nel centro storico" }, category: { en: "Neighborhood", es: "Barrio", it: "Quartiere" }, location: { en: "Málaga Palace", es: "Málaga Palace", it: "Málaga Palace" }, filter: "palace" },

  // Málaga Terrace
  { src: terraceEvents, alt: { en: "Spacious sea-view community event hall", es: "Sala de eventos comunitarios con vista al mar", it: "Ampia sala eventi con vista sul mare" }, category: { en: "Events Arena", es: "Área de Eventos", it: "Spazio Eventi" }, location: { en: "Málaga Terrace", es: "Málaga Terrace", it: "Málaga Terrace" }, filter: "terrace" },
  { src: terraceEntrance, alt: { en: "Bright glass entrance and lobby reception", es: "Recepción y vestíbulo con entrada de cristal luminosa", it: "Luminosa reception d'ingresso in vetro" }, category: { en: "Welcome Lobby", es: "Lobby de Entrada", it: "Reception Spazio" }, location: { en: "Málaga Terrace", es: "Málaga Terrace", it: "Málaga Terrace" }, filter: "terrace" },
  { src: terraceBar, alt: { en: "Modern social lounge bar & coffee zone", es: "Bar lounge social y zona de café", it: "Moderno bar lounge e area caffè" }, category: { en: "Community Lounge", es: "Lounge Social", it: "Lounge Bar" }, location: { en: "Málaga Terrace", es: "Málaga Terrace", it: "Málaga Terrace" }, filter: "terrace" },
  { src: terraceHero, alt: { en: "Panoramic community rooftop terrace view", es: "Vista panorámica de la terraza en la azotea", it: "Vista panoramica dalla terrazza sul tetto" }, category: { en: "Rooftop Terrace", es: "Terraza Azotea", it: "Terrazza sul Tetto" }, location: { en: "Málaga Terrace", es: "Málaga Terrace", it: "Málaga Terrace" }, filter: "terrace" },
  { src: terraceCafe, alt: { en: "Relaxing indoor cafe and lunch zone", es: "Zona de almuerzo y cafetería interior", it: "Caffetteria interna e area pranzo" }, category: { en: "Bistro & Coffee", es: "Bistró y Café", it: "Bistrot & Caffè" }, location: { en: "Málaga Terrace", es: "Málaga Terrace", it: "Málaga Terrace" }, filter: "terrace" },
  { src: terraceCoworkingAlt, alt: { en: "Vibrant open desks with natural horizon light", es: "Escritorios abiertos con luz natural del horizonte", it: "Scrivanie open-space con luce naturale" }, category: { en: "Coworking Space", es: "Espacio Coworking", it: "Spazio Coworking" }, location: { en: "Málaga Terrace", es: "Málaga Terrace", it: "Málaga Terrace" }, filter: "terrace" },
  { src: terraceInterior, alt: { en: "Modern industrial design hot desking areas", es: "Áreas de hot desking con diseño industrial", it: "Aree hot desking dal design industriale" }, category: { en: "Shared Offices", es: "Oficinas Compartidas", it: "Uffici Condivisi" }, location: { en: "Málaga Terrace", es: "Málaga Terrace", it: "Málaga Terrace" }, filter: "terrace" },
  { src: terraceLounge, alt: { en: "Cozy sofas and brainstorming chill area", es: "Sofás cómodos y zona de brainstorming", it: "Comodi divani e area relax per brainstorming" }, category: { en: "Creative Hub", es: "Hub Creativo", it: "Area Relax" }, location: { en: "Málaga Terrace", es: "Málaga Terrace", it: "Málaga Terrace" }, filter: "terrace" },
  { src: terraceMeetingAlt, alt: { en: "Professional glass-walled meeting space", es: "Sala de reuniones con paredes de cristal", it: "Sala riunioni vetrata professionale" }, category: { en: "Meeting Suites", es: "Salas Reuniones", it: "Sala Riunioni" }, location: { en: "Málaga Terrace", es: "Málaga Terrace", it: "Málaga Terrace" }, filter: "terrace" },
  { src: terraceReception, alt: { en: "Design-forward greeting and reception desk", es: "Mostrador de recepción de diseño vanguardista", it: "Desk accoglienza dal design moderno" }, category: { en: "Welcome Lobby", es: "Lobby de Entrada", it: "Reception Spazio" }, location: { en: "Málaga Terrace", es: "Málaga Terrace", it: "Málaga Terrace" }, filter: "terrace" },
  { src: terraceTraining01, alt: { en: "High-capacity dynamic training classroom", es: "Aula de capacitación dinámica de gran capacidad", it: "Aula corsi dinamica ad alta capienza" }, category: { en: "Training Room", es: "Sala de Capacitación", it: "Sala Formazione" }, location: { en: "Málaga Terrace", es: "Málaga Terrace", it: "Málaga Terrace" }, filter: "terrace" },
  { src: terraceTraining02, alt: { en: "Interactive seminar and lecture workspace", es: "Espacio de trabajo para seminarios y charlas", it: "Spazio di lavoro per seminari e lezioni" }, category: { en: "Training Room", es: "Sala de Capacitación", it: "Sala Formazione" }, location: { en: "Málaga Terrace", es: "Málaga Terrace", it: "Málaga Terrace" }, filter: "terrace" },
  { src: terraceTraining03, alt: { en: "Flexible learning setup with sea horizon background", es: "Configuración de aprendizaje flexible con el mar de fondo", it: "Setting per corsi ed eventi con il mare sullo sfondo" }, category: { en: "Training Room", es: "Sala de Capacitación", it: "Sala Formazione" }, location: { en: "Málaga Terrace", es: "Málaga Terrace", it: "Málaga Terrace" }, filter: "terrace" },
  { src: terraceTraining04, alt: { en: "Spacious presentation and seminar room layouts", es: "Diseño espacioso para presentaciones y seminarios", it: "Layout spazioso per corsi di formazione e workshop" }, category: { en: "Training Room", es: "Sala de Capacitación", it: "Sala Formazione" }, location: { en: "Málaga Terrace", es: "Málaga Terrace", it: "Málaga Terrace" }, filter: "terrace" },

  // Meetings & Conference (Overhaul with more photos)
  { src: serviceMeeting, alt: { en: "Private boardroom with screen and high speed internet", es: "Sala de juntas privada con pantalla e internet rápido", it: "Sala riunioni privata con schermo e internet veloce" }, category: { en: "Meeting Rooms", es: "Salas de Reunión", it: "Sale Riunioni" }, location: { en: "Meeting Hub", es: "Centro de Reuniones", it: "Spazio Riunioni" }, filter: "meetings" },
  { src: largeConference01, alt: { en: "Executive high-capacity conference table setup", es: "Mesa de conferencias ejecutiva de gran capacidad", it: "Sala conferenze executive ad alta capienza" }, category: { en: "Boardroom", es: "Sala Ejecutiva", it: "Sala Boardroom" }, location: { en: "Málaga Center", es: "Málaga Centro", it: "Málaga Centro" }, filter: "meetings" },
  { src: largeConference02, alt: { en: "Bright glass seminar and corporate training layout", es: "Diseño para seminarios y capacitación corporativa", it: "Layout luminoso per seminari e corsi aziendali" }, category: { en: "Conference Hall", es: "Sala de Conferencias", it: "Sala Conferenze" }, location: { en: "Málaga Center", es: "Málaga Centro", it: "Málaga Centro" }, filter: "meetings" },
  { src: largeConference03, alt: { en: "Premium display screens and interactive presentation area", es: "Pantallas premium y área de presentación interactiva", it: "Schermi di presentazione e area interattiva premium" }, category: { en: "Boardroom", es: "Sala Ejecutiva", it: "Sala Boardroom" }, location: { en: "Málaga Center", es: "Málaga Centro", it: "Málaga Centro" }, filter: "meetings" },
  { src: largeConference04, alt: { en: "Comfortable ergonomic seats for corporate delegates", es: "Asientos ergonómicos para delegados corporativi", it: "Sedute ergonomiche per delegati aziendali" }, category: { en: "Conference Suite", es: "Sala de Juntas", it: "Sala Juntas" }, location: { en: "Málaga Center", es: "Málaga Centro", it: "Málaga Centro" }, filter: "meetings" },
  { src: largeConference05, alt: { en: "Large scale presentation classroom design", es: "Diseño de aula para presentaciones a gran escala", it: "Sala presentazioni per grandi eventi" }, category: { en: "Conference Hall", es: "Sala de Conferencias", it: "Sala Conferenze" }, location: { en: "Málaga Center", es: "Málaga Centro", it: "Málaga Centro" }, filter: "meetings" },
  { src: largeConference06, alt: { en: "Modern executive workshop and debate layout", es: "Diseño moderno para talleres ejecutivos y debates", it: "Design moderno per workshop e dibattiti" }, category: { en: "Boardroom", es: "Sala Ejecutiva", it: "Sala Boardroom" }, location: { en: "Málaga Center", es: "Málaga Centro", it: "Málaga Centro" }, filter: "meetings" },
  { src: largeConference09, alt: { en: "State of the art digital board layout with screen", es: "Sala digitale all'avanguardia con schermo", it: "Sala riunioni digitale con grande schermo" }, category: { en: "Digital Boardroom", es: "Sala Digital", it: "Sala Digitale" }, location: { en: "Málaga Center", es: "Málaga Centro", it: "Málaga Centro" }, filter: "meetings" },
  { src: largeConference10, alt: { en: "Spacious layout with corporate conference seating", es: "Disposición espaciosa con asientos corporativos", it: "Disposizione spaziosa per conferenze aziendali" }, category: { en: "Conference Hall", es: "Sala de Conferencias", it: "Sala Conferenze" }, location: { en: "Málaga Center", es: "Málaga Centro", it: "Málaga Centro" }, filter: "meetings" },
  { src: largeConference12, alt: { en: "Perfect boardroom for strategic decision makers", es: "Sala de juntas perfecta para decisiones estratégicas", it: "Stanza board perfetta per pianificazioni strategiche" }, category: { en: "Executive Room", es: "Sala Ejecutiva", it: "Sala Executive" }, location: { en: "Málaga Center", es: "Málaga Centro", it: "Málaga Centro" }, filter: "meetings" },
  { src: largeConference15, alt: { en: "Creative project coordination workshop room", es: "Sala de coordinación de proyectos y taller", it: "Stanza workshop per coordinamento progetti" }, category: { en: "Workshop Suite", es: "Sala de Taller", it: "Sala Workshop" }, location: { en: "Málaga Center", es: "Málaga Centro", it: "Málaga Centro" }, filter: "meetings" },
  { src: largeConference22, alt: { en: "Full-scale corporate summit and training venue", es: "Lugar para cumbres corporativas y capacitación", it: "Location per summit aziendali e corsi di formazione" }, category: { en: "Summit Arena", es: "Sala de Cumbres", it: "Sala Summit" }, location: { en: "Málaga Center", es: "Málaga Centro", it: "Málaga Centro" }, filter: "meetings" },

  { src: bigConference04, alt: { en: "Comfortable glass corporate boardroom layout", es: "Disposición cómoda de sala de juntas de cristal", it: "Stanza meeting vetrata accogliente" }, category: { en: "Boardroom", es: "Sala de Juntas", it: "Sala Riunioni" }, location: { en: "Málaga Center", es: "Málaga Centro", it: "Málaga Centro" }, filter: "meetings" },
  { src: bigConference06, alt: { en: "Advanced workspace for team planning seminars", es: "Espacio de trabajo avanzado para planificación", it: "Spazio meeting avanzato per pianificazioni" }, category: { en: "Seminar Suite", es: "Sala de Seminarios", it: "Sala Seminari" }, location: { en: "Málaga Center", es: "Málaga Centro", it: "Málaga Centro" }, filter: "meetings" },
  { src: bigConference10, alt: { en: "Premium glass conference room with modern screens", es: "Sala de conferencias de cristal premium con pantallas", it: "Stanza conferenze premium in vetro con schermi" }, category: { en: "Conference Suite", es: "Sala Ejecutiva", it: "Sala Executive" }, location: { en: "Málaga Center", es: "Málaga Centro", it: "Málaga Centro" }, filter: "meetings" },
  { src: bigConference15, alt: { en: "Professional project evaluation workroom", es: "Sala de trabajo profesional para evaluación de proyectos", it: "Sala riunioni per valutazione progetti" }, category: { en: "Meeting Rooms", es: "Salas de Reunión", it: "Sale Riunioni" }, location: { en: "Málaga Center", es: "Málaga Centro", it: "Málaga Centro" }, filter: "meetings" },
  { src: bigConference22, alt: { en: "Summit boardroom with high-end furniture and setup", es: "Sala de juntas con mobiliario y equipos premium", it: "Sala board con arredi e tecnologie premium" }, category: { en: "Boardroom", es: "Sala de Juntas", it: "Sala Riunioni" }, location: { en: "Málaga Center", es: "Málaga Centro", it: "Málaga Centro" }, filter: "meetings" },

  { src: quarterConference01, alt: { en: "Intimate creative workroom and team suite", es: "Sala de trabajo creativa e íntima para equipos", it: "Sala riunioni intima per team building e brainstorming" }, category: { en: "Creative Hub", es: "Sala Creativa", it: "Sala Creativa" }, location: { en: "Málaga Center", es: "Málaga Centro", it: "Málaga Centro" }, filter: "meetings" },
  { src: quarterConference02, alt: { en: "Team discussion room with premium display screens", es: "Sala de discusión de equipos con pantallas premium", it: "Stanza riunioni dotata di schermi premium" }, category: { en: "Team Room", es: "Sala de Equipos", it: "Sala del Team" }, location: { en: "Málaga Center", es: "Málaga Centro", it: "Málaga Centro" }, filter: "meetings" },
  { src: quarterConference03, alt: { en: "Dynamic brainstorming room for design teams", es: "Sala de brainstorming dinámico para equipos de diseño", it: "Stanza brainstorming per team di sviluppo e design" }, category: { en: "Creative Room", es: "Sala Creativa", it: "Sala Creativa" }, location: { en: "Málaga Center", es: "Málaga Centro", it: "Málaga Centro" }, filter: "meetings" },
  { src: quarterConference05, alt: { en: "Coordinating boardroom with soundproofing", es: "Sala de juntas de coordinación con insonorización", it: "Stanza meeting insonorizzata per coordinamento" }, category: { en: "Meeting Rooms", es: "Salas de Reunión", it: "Sale Riunioni" }, location: { en: "Málaga Center", es: "Málaga Centro", it: "Málaga Centro" }, filter: "meetings" },
  { src: quarterConference08, alt: { en: "Compact workshop boardroom for small teams", es: "Sala de juntas compacta para equipos pequeños", it: "Stanza board compatta per piccoli gruppi" }, category: { en: "Team Room", es: "Sala de Equipos", it: "Sala del Team" }, location: { en: "Málaga Center", es: "Málaga Centro", it: "Málaga Centro" }, filter: "meetings" },
  { src: quarterConference12, alt: { en: "Private team briefing and analysis space", es: "Espacio privado para análisis y briefing de equipos", it: "Spazio privato per briefing ed analisi del team" }, category: { en: "Meeting Suite", es: "Sala de Juntas", it: "Sala Juntas" }, location: { en: "Málaga Center", es: "Málaga Centro", it: "Málaga Centro" }, filter: "meetings" },

  { src: trainingRoom01, alt: { en: "Fully featured seminar classroom environment", es: "Entorno de aula para seminarios totalmente equipado", it: "Aula seminari completamente attrezzata" }, category: { en: "Training Room", es: "Sala de Formación", it: "Sala Formazione" }, location: { en: "Training Hub", es: "Centro de Formación", it: "Spazio Formazione" }, filter: "meetings" },
  { src: trainingRoom02, alt: { en: "Dynamic training workshop setup with tables", es: "Configuración dinámica de taller con mesas", it: "Allestimento dinamico per workshop e corsi" }, category: { en: "Workshop Lab", es: "Laboratorio de Taller", it: "Lab Workshop" }, location: { en: "Training Hub", es: "Centro de Formación", it: "Spazio Formazione" }, filter: "meetings" },
  { src: trainingRoom03, alt: { en: "High capacity corporate presentation classroom", es: "Aula de presentaciones corporativas de gran capacidad", it: "Aula presentazioni aziendali ad alta capienza" }, category: { en: "Training Room", es: "Sala de Formación", it: "Sala Formazione" }, location: { en: "Training Hub", es: "Centro de Formación", it: "Spazio Formazione" }, filter: "meetings" },
  { src: trainingRoom04, alt: { en: "Interactive lecturing tables and premium sound", es: "Mesas de conferencias interactivas y sonido premium", it: "Stanza lezioni interattiva con audio premium" }, category: { en: "Training Room", es: "Sala de Formación", it: "Sala Formazione" }, location: { en: "Training Hub", es: "Centro de Formación", it: "Spazio Formazione" }, filter: "meetings" },
  { src: trainingRoom05, alt: { en: "Flexible seminar structure for workshops", es: "Estructura flexible para seminarios y talleres", it: "Struttura flessibile per seminari e workshop" }, category: { en: "Workshop Room", es: "Sala de Taller", it: "Sala Workshop" }, location: { en: "Training Hub", es: "Centro de Formación", it: "Spazio Formazione" }, filter: "meetings" },

  // Phone Booths & Services
  { src: phoneBooth01, alt: { en: "Acoustically isolated glass telephone cabin", es: "Cabina telefónica de cristal aislada acústicamente", it: "Cabina telefonica in vetro isolata acusticamente" }, category: { en: "Phone Booth", es: "Cabina Telefónica", it: "Phone Booth" }, location: { en: "Málaga Palace", es: "Málaga Palace", it: "Málaga Palace" }, filter: "community" },
  { src: phoneBooth02, alt: { en: "Soundproof private calling and video station", es: "Estación privada insonorizada para llamadas y video", it: "Stazione privata insonorizzata per video-chiamate" }, category: { en: "Phone Booth", es: "Cabina Telefónica", it: "Phone Booth" }, location: { en: "Málaga Palace", es: "Málaga Palace", it: "Málaga Palace" }, filter: "community" },
  { src: serviceCommunity, alt: { en: "Coworkers networking at rooftop community breakfast", es: "Coworkers haciendo networking en desayuno en la azotea", it: "Coworker fanno networking alla colazione in terrazza" }, category: { en: "Community Events", es: "Eventos Comunitarios", it: "Eventi Community" }, location: { en: "All Locations", es: "Todas las sedes", it: "Tutte le Sedi" }, filter: "community" },
  { src: serviceAcademy, alt: { en: "Engaging corporate talk and seminar session", es: "Sesión de charla corporativa y seminario", it: "Sessione di formazione aziendale e seminari" }, category: { en: "Academy & Talks", es: "Academia y Charlas", it: "Academy & Talk" }, location: { en: "All Locations", es: "Todas las sedes", it: "Tutte le Sedi" }, filter: "community" },

  // Italy (Ancona)
  { src: anconaHero, alt: { en: "Ancona coworking space historical main entrance hall", es: "Gran vestíbulo de entrada del coworking de Ancona", it: "Ingresso storico principale del coworking di Ancona" }, category: { en: "Entrance Lobby", es: "Vestíbulo de Entrada", it: "Atrio d'Ingresso" }, location: { en: "Ancona, Italy", es: "Ancona, Italia", it: "Ancona, Italia" }, filter: "ancona" },
  { src: anconaCoworking, alt: { en: "Bright historical coworking room in Italy", es: "Luminosa sala de coworking histórica en Italia", it: "Luminosa sala coworking storica in Italia" }, category: { en: "Coworking Space", es: "Espacio Coworking", it: "Spazio Coworking" }, location: { en: "Ancona, Italy", es: "Ancona, Italia", it: "Ancona, Italia" }, filter: "ancona" },
  { src: anconaMeeting, alt: { en: "Elegantly frescoed historic meeting room in Ancona", es: "Elegante sala de reuniones con frescos históricos en Ancona", it: "Elegante sala riunioni affrescata ad Ancona" }, category: { en: "Frescoed Meeting Room", es: "Sala con Frescos", it: "Sala Riunioni Affrescata" }, location: { en: "Ancona, Italy", es: "Ancona, Italia", it: "Ancona, Italia" }, filter: "ancona" },
];

const translations = {
  en: {
    back: "Back to Home",
    title: "Our Spaces Gallery",
    subtitle: "Step inside our historical palaces and sea-view modern spaces. Explore rooms built for deep work, connection, and success.",
    photoCount: "Photos",
    photoLabel: "Photo",
    ofLabel: "of",
    filters: [
      { key: "all", label: "All Photos" },
      { key: "palace", label: "Málaga Palace" },
      { key: "terrace", label: "Málaga Terrace" },
      { key: "meetings", label: "Meeting Rooms" },
      { key: "community", label: "Community & Perks" },
      { key: "ancona", label: "Ancona (Italy)" },
    ]
  },
  es: {
    back: "Volver al Inicio",
    title: "Galería de Espacios",
    subtitle: "Entra a nuestros palacios históricos y espacios modernos con vista al mar. Explora oficinas diseñadas para el trabajo profundo, la conexión y el éxito.",
    photoCount: "Fotos",
    photoLabel: "Foto",
    ofLabel: "de",
    filters: [
      { key: "all", label: "Todas las fotos" },
      { key: "palace", label: "Málaga Palace" },
      { key: "terrace", label: "Málaga Terrace" },
      { key: "meetings", label: "Salas de reuniones" },
      { key: "community", label: "Comunidad y Extras" },
      { key: "ancona", label: "Ancona (Italia)" },
    ]
  },
  it: {
    back: "Torna alla Home",
    title: "Galleria dei Nostri Spazi",
    subtitle: "Entra nei nostri palazzi storici e uffici moderni vista mare. Esplora ambienti pensati per il lavoro focalizzato, la condivisione e il successo.",
    photoCount: "Foto",
    photoLabel: "Foto",
    ofLabel: "di",
    filters: [
      { key: "all", label: "Tutte le foto" },
      { key: "palace", label: "Málaga Palace" },
      { key: "terrace", label: "Málaga Terrace" },
      { key: "meetings", label: "Sale riunioni" },
      { key: "community", label: "Community & Servizi" },
      { key: "ancona", label: "Ancona (Italia)" },
    ]
  }
};

export default function Gallery({ lang = "en" }: { lang?: "en" | "es" | "it" }) {
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const t = translations[lang];

  // Get current active photos
  const filteredPhotos = activeFilter === "all" 
    ? photos 
    : photos.filter((p) => p.filter === activeFilter);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, filteredPhotos]);

  const handlePrev = () => {
    setLightboxIndex((prev) => {
      if (prev === null) return null;
      return prev === 0 ? filteredPhotos.length - 1 : prev - 1;
    });
  };

  const handleNext = () => {
    setLightboxIndex((prev) => {
      if (prev === null) return null;
      return prev === filteredPhotos.length - 1 ? 0 : prev + 1;
    });
  };

  return (
    <main className="min-h-screen bg-[#070707] text-white overflow-x-hidden font-body">
      
      {/* Premium Dark Header with subtle glow */}
      <section className="relative py-28 md:py-36 bg-gradient-to-b from-[#110e0c]/50 to-[#070707] border-b border-neutral-900 overflow-hidden">
        {/* Background glow effects */}
        <div className="absolute top-0 left-1/4 w-[35rem] h-[35rem] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2" />
        <div className="absolute top-0 right-1/4 w-[30rem] h-[30rem] bg-sky-500/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2" />
        
        <div className="max-w-6xl mx-auto px-6 relative z-10 text-center">
          <a 
            href={lang === "en" ? "/" : `/${lang}`} 
            className="inline-flex items-center gap-2 text-neutral-400 hover:text-white text-xs font-semibold uppercase tracking-widest mb-6 transition-all duration-300 group"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" /> 
            {t.back}
          </a>
          <h1 className="font-display text-4xl md:text-7xl font-bold tracking-tight text-white mb-6">
            {t.title}
          </h1>
          <p className="max-w-3xl mx-auto font-body text-base md:text-lg text-neutral-400 leading-relaxed font-light">
            {t.subtitle}
          </p>
        </div>
      </section>

      {/* Sticky Premium Navigation Filter */}
      <section className="sticky top-[70px] z-30 bg-[#070707]/80 backdrop-blur-md border-b border-neutral-900">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between gap-4 overflow-x-auto no-scrollbar scroll-smooth">
          <div className="flex gap-2.5 shrink-0">
            {t.filters.map((f) => {
              const isSelected = activeFilter === f.key;
              return (
                <button
                  key={f.key}
                  onClick={() => {
                    setActiveFilter(f.key as FilterType);
                    setLightboxIndex(null);
                  }}
                  className={`font-body text-[11px] font-bold uppercase tracking-widest px-5 py-3 rounded-full border transition-all duration-300 relative ${
                    isSelected 
                      ? "bg-amber-900/10 text-amber-400 border-amber-500/30 shadow-[0_0_20px_rgba(245,158,11,0.1)]" 
                      : "bg-[#111111] text-neutral-400 border-neutral-800 hover:border-neutral-700 hover:text-white"
                  }`}
                >
                  {f.label}
                </button>
              );
            })}
          </div>

          <div className="hidden md:block shrink-0 text-neutral-500 text-xs font-semibold tracking-wider uppercase">
            {filteredPhotos.length} {t.photoCount}
          </div>
        </div>
      </section>

      {/* Premium Masonry Image Grid */}
      <section className="py-16 bg-[#070707]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {filteredPhotos.map((photo, index) => (
              <div
                key={photo.src.src ?? index}
                onClick={() => setLightboxIndex(index)}
                className="break-inside-avoid relative overflow-hidden rounded-2xl cursor-zoom-in group border border-neutral-900 bg-[#0e0e0e] transition-all duration-700 ease-out hover:border-neutral-800 hover:shadow-[0_15px_40px_rgba(0,0,0,0.6)]"
              >
                {/* Image */}
                <img
                  src={_s(photo.src)}
                  alt={photo.alt[lang]}
                  className="w-full h-auto object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-[1.03]"
                  loading="lazy"
                />

                {/* Elegant Minimalist Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 z-20">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 flex flex-col items-start">
                    
                    {/* Category Label */}
                    <span className="backdrop-blur-md bg-amber-500/20 border border-amber-500/30 text-amber-400 font-body text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-md mb-2 shadow-sm">
                      {photo.category[lang]}
                    </span>
                    
                    {/* Caption */}
                    <h3 className="font-display font-semibold text-lg text-white leading-snug mb-1">
                      {photo.location[lang]}
                    </h3>
                    <p className="font-body text-xs text-neutral-400 font-light leading-relaxed">
                      {photo.alt[lang]}
                    </p>
                  </div>
                </div>

                {/* Subtle top corner indicator */}
                <div className="absolute top-3 right-3 backdrop-blur-md bg-black/40 border border-white/5 rounded-full p-2.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 pointer-events-none">
                  <Maximize2 className="w-3.5 h-3.5 text-white/80" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Component with Full Controls */}
      {lightboxIndex !== null && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 flex flex-col items-center justify-between p-4 md:p-6 backdrop-blur-xl animate-fade-in"
          onClick={() => setLightboxIndex(null)}
        >
          {/* Top Panel Controls */}
          <div className="w-full flex items-center justify-between max-w-7xl z-20 pt-2">
            {/* Index Tracker */}
            <span className="font-body text-xs font-semibold tracking-widest uppercase text-neutral-500">
              {t.photoLabel} {lightboxIndex + 1} {t.ofLabel} {filteredPhotos.length}
            </span>
            
            {/* Close Button */}
            <button 
              onClick={() => setLightboxIndex(null)}
              className="p-3 bg-neutral-900/60 border border-neutral-800 hover:border-neutral-700 rounded-full hover:bg-neutral-800 text-neutral-300 hover:text-white transition-all duration-300 shadow-md"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Main Visual Slider Area */}
          <div className="relative flex-1 w-full flex items-center justify-center max-w-6xl max-h-[72vh] my-4 select-none">
            {/* Previous Control */}
            <button
              onClick={(e) => { e.stopPropagation(); handlePrev(); }}
              className="absolute left-0 md:-left-4 p-3.5 bg-neutral-900/80 border border-neutral-800/80 hover:border-neutral-700 hover:bg-neutral-800 rounded-full text-neutral-300 hover:text-white transition-all duration-300 shadow-xl z-20 hover:-translate-x-1"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Target Image wrapper */}
            <div 
              className="relative max-h-full max-w-[85vw] flex items-center justify-center z-10"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={_s(filteredPhotos[lightboxIndex].src)} 
                alt="" 
                className="max-h-[70vh] max-w-full object-contain rounded-2xl shadow-2xl border border-neutral-900 animate-zoom-in" 
              />
            </div>

            {/* Next Control */}
            <button
              onClick={(e) => { e.stopPropagation(); handleNext(); }}
              className="absolute right-0 md:-right-4 p-3.5 bg-neutral-900/80 border border-neutral-800/80 hover:border-neutral-700 hover:bg-neutral-800 rounded-full text-neutral-300 hover:text-white transition-all duration-300 shadow-xl z-20 hover:translate-x-1"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Bottom Panel Description Info */}
          <div 
            className="w-full max-w-3xl text-center bg-neutral-950/80 border border-neutral-900 backdrop-blur-md rounded-2xl p-5 md:p-6 mb-4 z-20 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Category label */}
            <span className="inline-block bg-amber-900/20 border border-amber-500/30 text-amber-400 font-body text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-md mb-2 shadow-sm">
              {filteredPhotos[lightboxIndex].category[lang]}
            </span>
            
            {/* Title / Description */}
            <h2 className="font-display font-semibold text-xl md:text-2xl text-white mb-2 leading-snug">
              {filteredPhotos[lightboxIndex].location[lang]}
            </h2>
            <p className="font-body text-xs md:text-sm text-neutral-400 font-light leading-relaxed max-w-xl mx-auto">
              {filteredPhotos[lightboxIndex].alt[lang]}
            </p>
          </div>
        </div>
      )}
    </main>
  );
}
