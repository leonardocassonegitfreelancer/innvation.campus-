import conferenceHall from "@/assets/conference-picasso.jpg";
import conferenceHalf from "@/assets/conference-half-picasso.jpg";
import trainingRoom from "@/assets/service-meeting.jpg";
import palaceSkylight from "@/assets/palace-skylight.jpg";
import seasideExterior from "@/assets/seaside-exterior.jpg";
import terraceBar from "@/assets/terrace-bar.jpg";
import seasideInterior from "@/assets/seaside-interior.jpg";
import terraceEvents from "@/assets/terrace-events.jpg";

export type EventType = "conference" | "workshop" | "networking" | "party";
export type LocationType = "city" | "seaside";

export interface SpaceTranslation {
  label: string;
  name: string;
  capacityText: string;
}

export interface SpaceData {
  slug: string;
  routeSlug?: string; // Optional override for the URL slug (when different from the data slug)
  image: string;
  maxGuests: number;
  location: LocationType;
  eventTypes: EventType[];
  size: "large" | "small";
  baseRoute: string; // The base folder route independent of lang, e.g. "/meeting-rooms" or ""
  translations: {
    en: SpaceTranslation;
    es: SpaceTranslation;
    it: SpaceTranslation;
  };
  amenities: {
    en: string[];
    es: string[];
    it: string[];
  };
}

export const spacesDataset: SpaceData[] = [
  // CITY CENTER SPACES
  {
    slug: "big-conference-room",
    image: conferenceHall,
    maxGuests: 80,
    location: "city",
    eventTypes: ["conference", "workshop", "networking"],
    size: "large",
    baseRoute: "meeting-rooms",
    translations: {
      en: { label: "Conference", name: "Big Conference Room", capacityText: "Up to 80 guests" },
      es: { label: "Conferencia", name: "Gran Sala de Conferencias", capacityText: "Hasta 80 personas" },
      it: { label: "Conferenze", name: "Grande Sala Conferenze", capacityText: "Fino a 80 persone" },
    },
    amenities: {
      en: ["High-Speed WiFi", "100-inch 4K Display", "Premium Audio System", "Modular Seating", "Whiteboards"],
      es: ["WiFi de Alta Velocidad", "Pantalla 4K de 100 pulgadas", "Sistema de Audio Premium", "Asientos Modulares", "Pizarras"],
      it: ["WiFi ad Alta Velocità", "Schermo 4K 100 pollici", "Sistema Audio Premium", "Sedute Modulari", "Lavagne"],
    }
  },
  {
    slug: "large-conference-room",
    image: conferenceHalf,
    maxGuests: 40,
    location: "city",
    eventTypes: ["conference", "workshop"],
    size: "small",
    baseRoute: "meeting-rooms",
    translations: {
      en: { label: "Conference", name: "Large Conference Room", capacityText: "Up to 40 guests" },
      es: { label: "Conferencia", name: "Sala de Conferencias Grande", capacityText: "Hasta 40 personas" },
      it: { label: "Conferenze", name: "Sala Conferenze Grande", capacityText: "Fino a 40 persone" },
    },
    amenities: {
      en: ["High-Speed WiFi", "85-inch 4K Display", "Video Conferencing Setup", "Whiteboards"],
      es: ["WiFi de Alta Velocidad", "Pantalla 4K de 85 pulgadas", "Video Conferencia", "Pizarras"],
      it: ["WiFi ad Alta Velocità", "Schermo 4K 85 pollici", "Videoconferenza", "Lavagne"],
    }
  },
  {
    slug: "training-room",
    image: trainingRoom,
    maxGuests: 40,
    location: "city",
    eventTypes: ["workshop", "networking"],
    size: "small",
    baseRoute: "meeting-rooms",
    translations: {
      en: { label: "Meeting", name: "Training Room", capacityText: "Up to 40 guests" },
      es: { label: "Reunión", name: "Sala de Formación", capacityText: "Hasta 40 personas" },
      it: { label: "Riunione", name: "Sala Formazione", capacityText: "Fino a 40 persone" },
    },
    amenities: {
      en: ["High-Speed WiFi", "Classroom Layout", "Two 65-inch Displays", "Whiteboards", "Coffee Station"],
      es: ["WiFi de Alta Velocidad", "Distribución Aula", "Dos Pantallas de 65\"", "Pizarras", "Estación de Café"],
      it: ["WiFi ad Alta Velocità", "Layout Aula", "Due Schermi 65\"", "Lavagne", "Postazione Caffè"],
    }
  },
  {
    slug: "malaga-palace",
    image: palaceSkylight,
    maxGuests: 150,
    location: "city",
    eventTypes: ["networking", "party"],
    size: "large",
    baseRoute: "", // Root page e.g. /en/malaga-palace
    translations: {
      en: { label: "Premium", name: "Málaga Palace Courtyard", capacityText: "Up to 150 guests" },
      es: { label: "Premium", name: "Patio Palacio Málaga", capacityText: "Hasta 150 personas" },
      it: { label: "Premium", name: "Cortile Palazzo Málaga", capacityText: "Fino a 150 persone" },
    },
    amenities: {
      en: ["Natural Skylight", "Catering Space", "Lounge Furniture", "Ambient Lighting", "Bar Setup"],
      es: ["Claraboya Natural", "Espacio para Catering", "Mobiliario Lounge", "Iluminación Ambiental", "Zona de Bar"],
      it: ["Lucernario Naturale", "Spazio Catering", "Arredo Lounge", "Illuminazione Ambientale", "Area Bar"],
    }
  },

  // SEASIDE SPACES
  {
    slug: "seaside-terrace",
    routeSlug: "malaga-terrace",
    image: seasideExterior,
    maxGuests: 120,
    location: "seaside",
    eventTypes: ["networking", "party"],
    size: "large",
    baseRoute: "",
    translations: {
      en: { label: "Outdoor", name: "Seaside Terrace", capacityText: "Up to 120 guests" },
      es: { label: "Exterior", name: "Terraza Marítima", capacityText: "Hasta 120 personas" },
      it: { label: "Esterno", name: "Terrazza sul Mare", capacityText: "Fino a 120 persone" },
    },
    amenities: {
      en: ["Sea Views", "Outdoor Bar", "Lounge Seating", "Sun Shades", "Sound System"],
      es: ["Vistas al Mar", "Bar Exterior", "Asientos Lounge", "Toldos", "Sistema de Sonido"],
      it: ["Vista Mare", "Bar Esterno", "Divanetti Lounge", "Ombrelloni", "Sistema Audio"],
    }
  },
  {
    slug: "private-terrace",
    image: terraceBar,
    maxGuests: 30,
    location: "seaside",
    eventTypes: ["networking", "party"],
    size: "small",
    baseRoute: "", 
    translations: {
      en: { label: "Outdoor", name: "Terrace Bar", capacityText: "Up to 30 guests" },
      es: { label: "Exterior", name: "Bar de la Terraza", capacityText: "Hasta 30 personas" },
      it: { label: "Esterno", name: "Bar della Terrazza", capacityText: "Fino a 30 persone" },
    },
    amenities: {
      en: ["Private Bar", "High Tables", "Ambient Lighting", "Intimate Setting", "Breeze Access"],
      es: ["Bar Privado", "Mesas Altas", "Iluminación Ambiental", "Entorno Íntimo", "Brisa Marina"],
      it: ["Bar Privato", "Tavoli Alti", "Illuminazione Ambientale", "Atmosfera Intima", "Brezza Marina"],
    }
  },
  {
    slug: "sea-view-lounge",
    routeSlug: "malaga-terrace",
    image: seasideInterior,
    maxGuests: 40,
    location: "seaside",
    eventTypes: ["conference", "workshop", "networking"],
    size: "small",
    baseRoute: "",
    translations: {
      en: { label: "Indoor", name: "Sea View Lounge", capacityText: "Up to 40 guests" },
      es: { label: "Interior", name: "Salón con Vistas al Mar", capacityText: "Hasta 40 personas" },
      it: { label: "Interno", name: "Lounge Vista Mare", capacityText: "Fino a 40 persone" },
    },
    amenities: {
      en: ["Panoramic Windows", "Climate Control", "Projector Setup", "Modular Desks", "Coffee Station"],
      es: ["Cristaleras Panorámicas", "Climatización", "Proyector", "Mesas Modulares", "Estación de Café"],
      it: ["Vetrate Panoramiche", "Aria Condizionata", "Proiettore", "Scrivanie Modulari", "Postazione Caffè"],
    }
  },
  {
    slug: "beachfront-events",
    routeSlug: "host-your-event",
    image: terraceEvents,
    maxGuests: 200,
    location: "seaside",
    eventTypes: ["conference", "networking", "party"],
    size: "large",
    baseRoute: "",
    translations: {
      en: { label: "Events", name: "Beachfront Events Space", capacityText: "Up to 200 guests" },
      es: { label: "Eventos", name: "Espacio de Eventos en la Playa", capacityText: "Hasta 200 personas" },
      it: { label: "Eventi", name: "Spazio Eventi sul Lungomare", capacityText: "Fino a 200 persone" },
    },
    amenities: {
      en: ["Stage Setup", "Full AV Equipment", "Catering Area", "Cloakroom", "Direct Sea Access"],
      es: ["Escenario", "Equipamiento Audiovisual", "Área de Catering", "Guardarropa", "Acceso al Mar"],
      it: ["Palco", "Attrezzatura AV", "Area Catering", "Guardaroba", "Accesso al Mare"],
    }
  }
];

/**
 * Returns localized path to the specific space landing page.
 * Uses `i18n.ts` path concepts internally.
 */
export const getSpaceHref = (lang: "en" | "es" | "it", space: SpaceData) => {
  // Determine prefix based on baseRoute and lang
  const prefix = {
    "meeting-rooms": {
      en: "/en/meeting-rooms/",
      es: "/es/salas-de-reuniones/", // Using canonical URLs from valid i18n mapping
      it: "/it/sale-riunioni/"
    },
    "host-your-event": {
      en: "/en/host-your-event/",
      es: "/es/organiza-tu-evento/",
      it: "/it/organizza-evento/"
    },
    "": { // Root pages
      en: "/en/",
      es: "/es/",
      it: "/it/"
    }
  };

  const routePrefix = prefix[space.baseRoute as keyof typeof prefix]?.[lang] || `/${lang}/`;
  const urlSlug = space.routeSlug ?? space.slug;

  return `${routePrefix}${urlSlug}`;
};
