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
        excerpt: "Are you looking to enhance your public speaking and leadership skills?\n\nWe're excited to invite you to an Open Session of our Toastmasters Club!\n\nWhether you're a seasoned speaker or just starting out, Toastmasters is a fantastic opportunity to grow and learn in a friendly, supportive environment.\n\nDuring the session, you'll get a taste of what Toastmasters is all about:\n\n• Witnessing speeches by our current members\n• Observing constructive evaluations\n• Learning about impromptu speaking through Table Topics\n\nThis is a great chance not only to improve your communication and leadership abilities but also to meet like-minded individuals who are eager to learn and grow.\n\nFree and open to all.",
      },
      es: {
        title: "Practica la Oratoria — PowerTalks Málaga \"Open House\" en Toastmasters",
        excerpt: "¿Quieres mejorar tus habilidades de oratoria y liderazgo?\n\n¡Te invitamos a una Sesión Abierta de nuestro Club Toastmasters!\n\nTanto si eres un orador experimentado como si estás empezando, Toastmasters es una oportunidad fantástica para crecer y aprender en un entorno amigable y de apoyo.\n\nDurante la sesión, descubrirás de qué trata Toastmasters:\n\n• Discursos de nuestros miembros actuales\n• Evaluaciones constructivas\n• Oratoria improvisada a través de Table Topics\n\nEs una gran oportunidad no solo para mejorar tus habilidades de comunicación y liderazgo, sino también para conocer a personas con ideas afines.\n\nGratis y abierto a todos.",
      },
      it: {
        title: "Allenati in Pubblico — PowerTalks Málaga \"Open House\" da Toastmasters",
        excerpt: "Vuoi migliorare le tue capacità di public speaking e leadership?\n\nTi invitiamo a una Sessione Aperta del nostro Club Toastmasters!\n\nChe tu sia un oratore esperto o alle prime armi, Toastmasters è un'opportunità fantastica per crescere e imparare in un ambiente amichevole e di supporto.\n\nDurante la sessione, scoprirai di cosa si tratta Toastmasters:\n\n• Discorsi dei nostri membri attuali\n• Valutazioni costruttive\n• Improvvisazione con i Table Topics\n\nUn'ottima occasione per migliorare le tue capacità comunicative e di leadership e incontrare persone con interessi simili.\n\nGratuito e aperto a tutti.",
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
