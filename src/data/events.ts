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
  organizer?: string;
  price?: string; // omit ⇒ shows the localized "Free" label; set e.g. "€10.00" for paid events
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
    image: "/events/powertalks-open-house-jun-2026.webp",
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
    slug: "double-click-shewins-jun-2026",
    date: "2026-06-04",
    time: "18:30 - 20:00",
    location: "Innovation Campus Coworking, Málaga Terrace, Cl Puerto 14",
    image: "/events/double-click-jun-2026.webp",
    tag: "networking",
    externalUrl: "https://www.meetup.com/she_wins_malaga/events/314858509/?eventOrigin=group_upcoming_events",
    translations: {
      en: {
        title: "Double Click: Connection, Laughter & Networking — An Unexpected Evening in Málaga",
        excerpt: "Join SheWins Málaga for an evening with Kate Feeney — Behavioural Scientist, Comedian and HR consultant with 15 years working with Microsoft, LinkedIn, Mind Gym and Deloitte. Expect real talk, unexpected laughs and genuine connections. Free admission.",
      },
      es: {
        title: "Double Click: Una Sesión de Conexión, Comportamiento y Networking",
        excerpt: "Únete a SheWins Málaga para una velada con Kate Feeney — Científica del Comportamiento, Comediante y consultora de RRHH con 15 años trabajando con Microsoft, LinkedIn, Mind Gym y Deloitte. Espera conversaciones reales, risas inesperadas y conexiones genuinas. Entrada gratuita.",
      },
      it: {
        title: "Double Click: Connessione, Risate & Networking — Una Serata Inaspettata a Málaga",
        excerpt: "Unisciti a SheWins Málaga per una serata con Kate Feeney — Scienziata del Comportamento, Comica e consulente HR con 15 anni di esperienza con Microsoft, LinkedIn, Mind Gym e Deloitte. Aspettati conversazioni vere, risate inaspettate e connessioni genuine. Ingresso gratuito.",
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
  {
    slug: "ladies-that-ux-anniversary-jun-2026",
    date: "2026-06-11",
    time: "19:00",
    location: "Málaga Terrace, Cl Puerto 14",
    image: "/events/ladies-that-ux-anniversary-jun-2026.webp",
    tag: "networking",
    externalUrl: "https://luma.com/aqqsv2su",
    organizer: "Ladies That UX Málaga",
    translations: {
      en: {
        title: "Ladies That UX Málaga: Anniversary Celebration",
        excerpt: "On this special occasion, the Ladies That UX community looks back on everything they've experienced this year and shares ideas for the future. There'll be activities to enjoy together, snacks and drinks... and above all, plenty of networking to celebrate everything they've built together 🎂\n\n🎁 There will be a prize raffle for the lucky ones and a free drink for the first to arrive. 🍻",
      },
      es: {
        title: "Ladies That UX Málaga: Celebración de Aniversario",
        excerpt: "En esta ocasión especial, la comunidad de Ladies That UX hace un pequeño repaso a todo lo que ha vivido este año e ideas para el futuro, tendrán actividades para disfrutar juntas, podrán disfrutar de picoteo y bebidas... y sobre todo, mucho networking para celebrar todo lo que han construido juntas 🎂\n\n🎁 Habrá sorteo de regalos para las más afortunadas y una consumición gratuita a las primeras que lleguen. 🍻",
      },
      it: {
        title: "Ladies That UX Málaga: Festa di Anniversario",
        excerpt: "In questa occasione speciale, la community di Ladies That UX ripercorre tutto ciò che ha vissuto durante l'anno e condivide idee per il futuro. Ci saranno attività da vivere insieme, stuzzichini e bevande... e soprattutto tanto networking per celebrare tutto ciò che hanno costruito insieme 🎂\n\n🎁 Ci sarà un'estrazione di regali per le più fortunate e una consumazione gratuita per le prime ad arrivare. 🍻",
      },
    },
  },
  {
    slug: "designing-you-jun-2026",
    date: "2026-06-24",
    time: "19:00",
    location: "Málaga Terrace, Cl Puerto 14",
    image: "/events/women-in-tech-jun-2026.jpeg",
    tag: "talk",
    externalUrl: "https://www.meetup.com/women-in-tech-malaga/events/315072178/?utm_medium=referral&utm_campaign=share-btn_savedevents_share_modal&utm_source=link&utm_version=v2",
    organizer: "Women in Tech Málaga",
    translations: {
      en: {
        title: "Designing You — A Live, Guided Life Strategy Session for Ambitious Women",
        excerpt: "Designing You is a live, interactive workshop for ambitious women who are ready to stop treating themselves as an afterthought and start designing their next chapter with clarity and purpose.\n\nLed by Kate Tuscano, a Managing Director of Strategy and Innovation with more than 20 years of experience helping organizations navigate growth and transformation, this session brings proven strategic thinking out of the boardroom and into your personal life.\n\nThrough a practical, guided framework, Kate will help you translate big ambitions into a focused plan for what comes next.",
      },
      es: {
        title: "Designing You — Una Sesión de Estrategia de Vida en Directo para Mujeres Ambiciosas",
        excerpt: "Designing You es un taller en directo e interactivo para mujeres ambiciosas que están listas para dejar de relegarse a un segundo plano y empezar a diseñar su próximo capítulo con claridad y propósito.\n\nDirigida por Kate Tuscano, Directora General de Estrategia e Innovación con más de 20 años de experiencia ayudando a organizaciones a navegar el crecimiento y la transformación, esta sesión lleva el pensamiento estratégico probado fuera de la sala de juntas a tu vida personal.\n\nA través de un marco práctico y guiado, Kate te ayudará a traducir grandes ambiciones en un plan enfocado para lo que viene a continuación.",
      },
      it: {
        title: "Designing You — Una Sessione di Strategia di Vita dal Vivo per Donne Ambiziose",
        excerpt: "Designing You è un workshop dal vivo e interattivo per donne ambiziose pronte a smettere di mettersi in secondo piano e a iniziare a progettare il proprio prossimo capitolo con chiarezza e determinazione.\n\nGuidata da Kate Tuscano, Managing Director di Strategia e Innovazione con oltre 20 anni di esperienza nell'aiutare le organizzazioni ad affrontare crescita e trasformazione, questa sessione porta il pensiero strategico collaudato fuori dalla sala riunioni e nella tua vita personale.\n\nAttraverso un framework pratico e guidato, Kate ti aiuterà a tradurre grandi ambizioni in un piano mirato per ciò che verrà dopo.",
      },
    },
  },
  {
    slug: "intercambio-de-idiomas-jun-2026",
    date: "2026-06-19",
    time: "20:30",
    location: "Málaga Terrace, Cl Puerto 14",
    image: "/events/lenguage-exchange-jun-2026.jpeg",
    tag: "talk",
    externalUrl: "https://wa.me/34637356953",
    organizer: "Málaga Connection",
    translations: {
      en: {
        title: "Language Exchange by Málaga Connection",
        excerpt: "This language exchange stands out for its flexibility — all languages and all levels are welcome. Open groups with no turns, a relaxed and natural atmosphere, meet new people, learn or improve languages.\n\nSign up in the WhatsApp chat by sending your language and your level.",
      },
      es: {
        title: "Intercambio de Idiomas by Málaga Connection",
        excerpt: "Este intercambio se caracteriza por su flexibilidad, por aceptar todos los idiomas y todos los niveles. Grupos abiertos sin turnos, naturalidad, conocer gente nueva, aprender o mejorar idiomas.\n\nInscríbete en el chat de WhatsApp enviando tu idioma y tu nivel.",
      },
      it: {
        title: "Scambio Linguistico by Málaga Connection",
        excerpt: "Questo scambio linguistico si distingue per la sua flessibilità: sono benvenute tutte le lingue e tutti i livelli. Gruppi aperti senza turni, atmosfera naturale, conoscere gente nuova, imparare o migliorare le lingue.\n\nIscriviti nella chat di WhatsApp inviando la tua lingua e il tuo livello.",
      },
    },
  },
  {
    slug: "grants-subsidies-public-funding-jun-2026",
    date: "2026-06-18",
    time: "19:00",
    location: "Málaga Terrace, Cl Puerto 14",
    image: "/events/grants-subsidies-public-funding-jun-2026.png",
    tag: "workshop",
    externalUrl: "https://luma.com/j9562w74",
    organizer: "StartupOasis Málaga",
    price: "€10.00",
    translations: {
      en: {
        title: "Grants, Subsidies & Public Funding = Growth Accelerator! 🚀",
        excerpt: "Grants, subsidies, public tenders… they can be powerful tools for startups and growing companies — but only when used strategically.\n\nJoin StartupOasis Málaga at Innovation Campus Terrace for a fun and practical session on what public funding really is, how it works in Spain, and how to identify the right opportunities without wasting time chasing every grant. We'll also explore why cybersecurity is becoming a leadership priority — and how public funding can help companies build stronger, more resilient businesses.\n\nWhat to expect:\n✨ Understand what grants are — and what they are not\n💡 Learn how subsidies and public funding work in Spain\n🛡️ Discover why cybersecurity is a business leadership issue\n🔗 See how grants can support innovation and cyber resilience\n🧭 Get a practical framework to evaluate funding opportunities\n📌 Explore real-world examples and common mistakes to avoid\n\nMeet the speaker:\nSergio González Peral is a financial analyst at Binvester, focused on startups, investment analysis and M&A. He also supports the grants team, helping identify and prepare public funding opportunities for growing companies.\n\nWhether you're a founder, operator, SME leader, or simply curious about public funding, this session will help you understand how to use grants as an accelerator!",
      },
      es: {
        title: "Subvenciones, Ayudas y Financiación Pública = Acelerador de Crecimiento! 🚀",
        excerpt: "Subvenciones, ayudas, licitaciones públicas… pueden ser herramientas poderosas para startups y empresas en crecimiento, pero solo cuando se usan de forma estratégica.\n\nÚnete a StartupOasis Málaga en la Terraza de Innovation Campus para una sesión divertida y práctica sobre qué es realmente la financiación pública, cómo funciona en España y cómo identificar las oportunidades adecuadas sin perder tiempo persiguiendo cada subvención. También exploraremos por qué la ciberseguridad se está convirtiendo en una prioridad de liderazgo, y cómo la financiación pública puede ayudar a construir empresas más sólidas y resilientes.\n\nQué esperar:\n✨ Entiende qué son las subvenciones, y qué no son\n💡 Aprende cómo funcionan las ayudas y la financiación pública en España\n🛡️ Descubre por qué la ciberseguridad es una cuestión de liderazgo empresarial\n🔗 Ve cómo las subvenciones pueden impulsar la innovación y la ciberresiliencia\n🧭 Obtén un marco práctico para evaluar oportunidades de financiación\n📌 Explora ejemplos reales y errores comunes que evitar\n\nConoce al ponente:\nSergio González Peral es analista financiero en Binvester, especializado en startups, análisis de inversión y M&A. También colabora con el equipo de subvenciones, ayudando a identificar y preparar oportunidades de financiación pública para empresas en crecimiento.\n\nTanto si eres fundador, operador, líder de una pyme o simplemente sientes curiosidad por la financiación pública, esta sesión te ayudará a entender cómo usar las subvenciones como acelerador.",
      },
      it: {
        title: "Sovvenzioni, Sussidi e Finanziamento Pubblico = Acceleratore di Crescita! 🚀",
        excerpt: "Sovvenzioni, sussidi, bandi pubblici… possono essere strumenti potenti per startup e aziende in crescita, ma solo se usati in modo strategico.\n\nUnisciti a StartupOasis Málaga sulla Terrazza di Innovation Campus per una sessione divertente e pratica su cosa sia davvero il finanziamento pubblico, come funziona in Spagna e come individuare le opportunità giuste senza perdere tempo a inseguire ogni bando. Esploreremo anche perché la cybersecurity sta diventando una priorità per la leadership, e come il finanziamento pubblico possa aiutare a costruire aziende più solide e resilienti.\n\nCosa aspettarsi:\n✨ Capire cosa sono le sovvenzioni, e cosa non sono\n💡 Scoprire come funzionano sussidi e finanziamenti pubblici in Spagna\n🛡️ Capire perché la cybersecurity è una questione di leadership aziendale\n🔗 Vedere come le sovvenzioni possono sostenere innovazione e resilienza informatica\n🧭 Ottenere un framework pratico per valutare le opportunità di finanziamento\n📌 Esplorare esempi reali ed errori comuni da evitare\n\nIncontra il relatore:\nSergio González Peral è analista finanziario presso Binvester, specializzato in startup, analisi degli investimenti e M&A. Collabora inoltre con il team sovvenzioni, aiutando a individuare e preparare opportunità di finanziamento pubblico per aziende in crescita.\n\nChe tu sia un fondatore, un operatore, un leader di una PMI o semplicemente curioso riguardo al finanziamento pubblico, questa sessione ti aiuterà a capire come usare le sovvenzioni come acceleratore.",
      },
    },
  },
  {
    slug: "behind-the-scenes-hiring-jun-2026",
    date: "2026-06-23",
    time: "19:30",
    location: "Málaga Terrace, Cl Puerto 14",
    image: "/events/behind-the-scenes-jun-2026.jpeg",
    tag: "talk",
    externalUrl: "https://www.meetup.com/projector-global-community/events/315200787/?utm_medium=referral&utm_campaign=share-btn_savedevents_share_modal&utm_source=link&utm_version=v2",
    organizer: "Prjctr Global Community Málaga",
    translations: {
      en: {
        title: "Behind the Scenes of Hiring at Product Companies",
        excerpt: "Ever wondered how product companies actually hire — and what it really takes to get in? This meetup pulls back the curtain on the hiring process: what companies are really looking for, how decisions get made, and what candidates can do to stand out.\n\nWhether you're eyeing a role at a product company or just curious how the market works — this one is for you.\n\n🎙️ Speaker\nOlha Sadula — People Manager at FastCTO, a Boston-based IT company, and a Career Consultant with hands-on experience placing talent from entry-level roles to C-suite executives. She has worked across IT, finance, logistics, marketing and HoReCa, giving her a rare cross-sector perspective on hiring and career growth. Olha is also the founder of Junior Program, an initiative helping Ukrainian juniors take their first steps in IT.",
      },
      es: {
        title: "Detrás del Telón de la Contratación en Empresas de Producto",
        excerpt: "¿Alguna vez te has preguntado cómo contratan realmente las empresas de producto, y qué hace falta para entrar? Este meetup descorre el telón sobre el proceso de contratación: qué buscan realmente las empresas, cómo se toman las decisiones y qué pueden hacer los candidatos para destacar.\n\nTanto si aspiras a un puesto en una empresa de producto como si simplemente sientes curiosidad por cómo funciona el mercado, esto es para ti.\n\n🎙️ Ponente\nOlha Sadula — People Manager en FastCTO, una empresa de IT con sede en Boston, y Career Consultant con experiencia práctica ubicando talento desde puestos junior hasta directivos de alto nivel. Ha trabajado en IT, finanzas, logística, marketing y HoReCa, lo que le da una perspectiva intersectorial poco común sobre la contratación y el crecimiento profesional. Olha es también fundadora de Junior Program, una iniciativa que ayuda a juniors ucranianos a dar sus primeros pasos en IT.",
      },
      it: {
        title: "Dietro le Quinte delle Assunzioni nelle Aziende di Prodotto",
        excerpt: "Ti sei mai chiesto come assumono davvero le aziende di prodotto, e cosa serve per entrarci? Questo meetup svela il dietro le quinte del processo di selezione: cosa cercano davvero le aziende, come si prendono le decisioni e cosa possono fare i candidati per distinguersi.\n\nChe tu stia puntando a un ruolo in un'azienda di prodotto o sia semplicemente curioso di capire come funziona il mercato, questo evento fa per te.\n\n🎙️ Relatrice\nOlha Sadula — People Manager presso FastCTO, azienda IT con sede a Boston, e Career Consultant con esperienza diretta nel collocare talenti dai ruoli entry-level fino ai dirigenti C-suite. Ha lavorato in IT, finanza, logistica, marketing e HoReCa, acquisendo una rara prospettiva intersettoriale su selezione e crescita professionale. Olha è inoltre fondatrice di Junior Program, un'iniziativa che aiuta i giovani junior ucraini a muovere i primi passi nell'IT.",
      },
    },
  },
];
