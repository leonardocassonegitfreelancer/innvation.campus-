export type EventTag = "networking" | "workshop" | "talk" | "other";

export interface EventTranslation {
  title: string;
  excerpt: string;
}

export interface EventData {
  slug: string;
  date: string;
  time: string;
  location: string;
  image: string;
  tag: EventTag;
  externalUrl: string;
  translations: {
    en: EventTranslation;
    it: EventTranslation;
    es: EventTranslation;
  };
}

export const eventsDataset: EventData[] = [
  {
    slug: "ladies-that-ux-malaga-apr-2026",
    date: "2026-04-07",
    time: "19:00 - 21:00",
    location: "Innovation Campus La Malagueta",
    image: "/placeholder.svg",
    tag: "workshop",
    externalUrl: "https://www.meetup.com/ladies-that-ux-malaga/",
    translations: {
      en: {
        title: "Ladies That UX Málaga: Inclusive Digital Design & Accessibility",
        excerpt: "An evening dedicated to inclusive digital design and accessibility with speaker Irene Puertas.",
      },
      it: {
        title: "Ladies That UX Málaga: Design Digitale Inclusivo & Accessibilità",
        excerpt: "Una serata dedicata al design digitale inclusivo e all'accessibilità con la speaker Irene Puertas.",
      },
      es: {
        title: "Ladies That UX Málaga: Diseño Digital Inclusivo & Accesibilidad",
        excerpt: "Una velada dedicada al diseño digital inclusivo y la accesibilidad con la ponente Irene Puertas.",
      },
    },
  },
  {
    slug: "powertalks-malaga-apr-2026",
    date: "2026-04-15",
    time: "19:00 - 21:00",
    location: "Innovation Campus La Malagueta",
    image: "/placeholder.svg",
    tag: "talk",
    externalUrl: "https://www.meetup.com/powertalks-malaga/",
    translations: {
      en: {
        title: "PowerTalks Málaga Meetup April 2026",
        excerpt: "Toastmasters English public speaking meetup — practice, improve, inspire.",
      },
      it: {
        title: "PowerTalks Málaga Meetup Aprile 2026",
        excerpt: "Meetup Toastmasters di public speaking in inglese — pratica, miglioramento, ispirazione.",
      },
      es: {
        title: "PowerTalks Málaga Meetup Abril 2026",
        excerpt: "Meetup Toastmasters de oratoria en inglés — practica, mejora, inspira.",
      },
    },
  },
  {
    slug: "shewins-malaga-apr-2026",
    date: "2026-04-16",
    time: "18:30 - 20:00",
    location: "Innovation Campus Málaga Palace",
    image: "/placeholder.svg",
    tag: "workshop",
    externalUrl: "https://www.meetup.com/shewins-malaga/",
    translations: {
      en: {
        title: "SheWins Málaga: The Simple Rules of Money",
        excerpt: "Personal finance workshop with Alice Dickinson, Chartered Accountant.",
      },
      it: {
        title: "SheWins Málaga: Le Semplici Regole del Denaro",
        excerpt: "Workshop di finanza personale con Alice Dickinson, Dottore Commercialista.",
      },
      es: {
        title: "SheWins Málaga: Las Reglas Simples del Dinero",
        excerpt: "Taller de finanzas personales con Alice Dickinson, Contable Colegiada.",
      },
    },
  },
  {
    slug: "malaga-ai-networking-apr-2026",
    date: "2026-04-23",
    time: "18:30 - 20:30",
    location: "Innovation Campus La Malagueta",
    image: "/placeholder.svg",
    tag: "networking",
    externalUrl: "https://www.meetup.com/malaga-ai/",
    translations: {
      en: {
        title: "Malaga-AI Networking Night April 2026",
        excerpt: "Connect with Málaga's AI community — builders, researchers and enthusiasts.",
      },
      it: {
        title: "Malaga-AI Networking Night Aprile 2026",
        excerpt: "Connettiti con la community AI di Málaga — builder, ricercatori e appassionati.",
      },
      es: {
        title: "Malaga-AI Networking Night Abril 2026",
        excerpt: "Conéctate con la comunidad de IA de Málaga — creadores, investigadores y entusiastas.",
      },
    },
  },
  {
    slug: "powertalks-open-house-jun-2026",
    date: "2026-06-03",
    time: "19:00 - 21:00",
    location: "Málaga Terrace — Calle Puerto 14",
    image: "/placeholder.svg",
    tag: "workshop",
    externalUrl: "https://www.meetup.com/es-es/malaga-speaking-with-confidence-and-enthusiasm-meetup-group/events/314397785/?eventOrigin=group_upcoming_events",
    translations: {
      en: {
        title: "Practice Public Speaking — PowerTalks Málaga \"Open House\" at Toastmasters",
        excerpt: "Join an open session of our Toastmasters club. Witness speeches, observe evaluations, and try impromptu speaking through Table Topics — free and open to all.",
      },
      es: {
        title: "Practica la Oratoria — PowerTalks Málaga \"Open House\" en Toastmasters",
        excerpt: "Únete a una sesión abierta de nuestro club Toastmasters. Observa discursos, evaluaciones constructivas y prueba el habla improvisada — gratis y abierto a todos.",
      },
      it: {
        title: "Allenati in Pubblico — PowerTalks Málaga \"Open House\" da Toastmasters",
        excerpt: "Partecipa a una sessione aperta del nostro club Toastmasters. Assisti a discorsi, valutazioni costruttive e prova l'improvvisazione con i Table Topics — gratuito e aperto a tutti.",
      },
    },
  },
  {
    slug: "powertalks-malaga-apr-2026-b",
    date: "2026-04-29",
    time: "19:00 - 20:30",
    location: "Innovation Campus La Malagueta",
    image: "/placeholder.svg",
    tag: "talk",
    externalUrl: "https://www.meetup.com/powertalks-malaga/",
    translations: {
      en: {
        title: "PowerTalks Málaga Second Meetup April 2026",
        excerpt: "Second Toastmasters English public speaking session of the month.",
      },
      it: {
        title: "PowerTalks Málaga Secondo Meetup Aprile 2026",
        excerpt: "Seconda sessione Toastmasters di public speaking in inglese del mese.",
      },
      es: {
        title: "PowerTalks Málaga Segundo Meetup Abril 2026",
        excerpt: "Segunda sesión Toastmasters de oratoria en inglés del mes.",
      },
    },
  },
];
