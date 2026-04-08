export const routeMap: Record<string, Record<string, string>> = {
  en: { "/": "/", "/en/malaga-palace": "/en/malaga-palace", "/en/malaga-terrace": "/en/malaga-terrace", "/en/ancona": "/en/ancona", "/en/olbia": "/en/olbia", "/en/find-us": "/en/find-us", "/en/meeting-rooms": "/en/meeting-rooms", "/en/private-terrace": "/en/private-terrace", "/en/private-offices": "/en/private-offices", "/en/business-registration": "/en/business-registration", "/en/coworking-space": "/en/coworking-space", "/en/events": "/en/events", "/en/host-your-event": "/en/host-your-event", "/en/academy": "/en/academy", "/en/benefits": "/en/benefits", "/blog": "/blog" },
  es: { "/": "/es", "/en/malaga-palace": "/es/malaga-palace", "/en/malaga-terrace": "/es/malaga-terrace", "/en/ancona": "/es/ancona", "/en/olbia": "/es/olbia", "/en/find-us": "/es/encuentranos", "/en/meeting-rooms": "/es/salas-de-reuniones", "/en/private-terrace": "/es/terraza-privada", "/en/private-offices": "/es/oficinas-privadas", "/en/business-registration": "/es/registro-de-empresas", "/en/coworking-space": "/es/coworking", "/en/events": "/es/eventos", "/en/host-your-event": "/es/organiza-tu-evento", "/en/academy": "/es/academia", "/en/benefits": "/es/beneficios", "/blog": "/es/blog", "/es": "/es", "/es/malaga-palace": "/es/malaga-palace", "/es/malaga-terrace": "/es/malaga-terrace", "/es/ancona": "/es/ancona", "/es/olbia": "/es/olbia", "/es/encuentranos": "/es/encuentranos", "/es/salas-de-reuniones": "/es/salas-de-reuniones", "/es/terraza-privada": "/es/terraza-privada", "/es/oficinas-privadas": "/es/oficinas-privadas", "/es/registro-de-empresas": "/es/registro-de-empresas", "/es/coworking": "/es/coworking", "/es/eventos": "/es/eventos", "/es/organiza-tu-evento": "/es/organiza-tu-evento", "/es/academia": "/es/academia", "/es/beneficios": "/es/beneficios", "/es/blog": "/es/blog" },
  it: { "/": "/it", "/en/malaga-palace": "/it/malaga-palace", "/en/malaga-terrace": "/it/malaga-terrace", "/en/ancona": "/it/ancona", "/en/olbia": "/it/olbia", "/en/find-us": "/it/trovaci", "/en/meeting-rooms": "/it/sale-riunioni", "/en/private-terrace": "/it/terrazza-privata", "/en/private-offices": "/it/uffici-privati", "/en/business-registration": "/it/registrazione-aziendale", "/en/coworking-space": "/it/coworking", "/en/events": "/it/eventi", "/en/host-your-event": "/it/organizza-evento", "/en/academy": "/it/academy", "/en/benefits": "/it/vantaggi", "/blog": "/it/blog", "/es": "/it", "/es/malaga-palace": "/it/malaga-palace", "/es/malaga-terrace": "/it/malaga-terrace", "/es/ancona": "/it/ancona", "/es/olbia": "/it/olbia", "/es/encuentranos": "/it/trovaci", "/es/salas-de-reuniones": "/it/sale-riunioni", "/es/terraza-privada": "/it/terrazza-privata", "/es/oficinas-privadas": "/it/uffici-privati", "/es/registro-de-empresas": "/it/registrazione-aziendale", "/es/coworking": "/it/coworking", "/es/eventos": "/it/eventi", "/es/organiza-tu-evento": "/it/organizza-evento", "/es/academia": "/it/academy", "/es/beneficios": "/it/vantaggi", "/es/blog": "/it/blog", "/it": "/it", "/it/malaga-palace": "/it/malaga-palace", "/it/malaga-terrace": "/it/malaga-terrace", "/it/ancona": "/it/ancona", "/it/olbia": "/it/olbia", "/it/trovaci": "/it/trovaci", "/it/sale-riunioni": "/it/sale-riunioni", "/it/terrazza-privata": "/it/terrazza-privata", "/it/uffici-privati": "/it/uffici-privati", "/it/registrazione-aziendale": "/it/registrazione-aziendale", "/it/coworking": "/it/coworking", "/it/eventi": "/it/eventi", "/it/organizza-evento": "/it/organizza-evento", "/it/academy": "/it/academy", "/it/vantaggi": "/it/vantaggi", "/it/blog": "/it/blog" },
};

export const getAlternateLinks = (currentPath: string) => {
  let canonicalEnPath = currentPath;
  
  for (const [enPath, esPath] of Object.entries(routeMap.es)) {
    if (esPath === currentPath && (enPath.startsWith('/en/') || enPath === '/' || enPath === '/blog')) {
      canonicalEnPath = enPath;
      break;
    }
  }
  
  for (const [enPath, itPath] of Object.entries(routeMap.it)) {
    if (itPath === currentPath && (enPath.startsWith('/en/') || enPath === '/' || enPath === '/blog')) {
      canonicalEnPath = enPath;
      break;
    }
  }
  
  return {
    en: routeMap.en[canonicalEnPath] || canonicalEnPath,
    es: routeMap.es[canonicalEnPath] || canonicalEnPath,
    it: routeMap.it[canonicalEnPath] || canonicalEnPath,
  };
};

// Breadcrumb name mappings by language
const breadcrumbNames: Record<string, Record<string, string>> = {
  en: {
    "": "Home",
    "malaga-palace": "Málaga Palace",
    "malaga-terrace": "Málaga Terrace",
    "ancona": "Ancona",
    "olbia": "Olbia",
    "find-us": "Find Us",
    "meeting-rooms": "Meeting Rooms",
    "private-terrace": "Private Terrace",
    "private-offices": "Private Offices",
    "business-registration": "Business Registration",
    "coworking-space": "Coworking Space",
    "events": "Events",
    "host-your-event": "Host Your Event",
    "academy": "Academy",
    "benefits": "Benefits",
    "blog": "Blog",
  },
  es: {
    "": "Inicio",
    "malaga-palace": "Málaga Palace",
    "malaga-terrace": "Málaga Terrace",
    "ancona": "Ancona",
    "olbia": "Olbia",
    "encuentranos": "Encuéntranos",
    "salas-de-conferencias": "Salas de Reuniones",
    "terraza-privada": "Terraza Privada",
    "oficinas-privadas": "Oficinas Privadas",
    "registro-de-empresas": "Registro de Empresas",
    "coworking": "Coworking",
    "eventos": "Eventos",
    "organiza-tu-evento": "Organiza Tu Evento",
    "academia": "Academia",
    "beneficios": "Beneficios",
    "blog": "Blog",
  },
  it: {
    "": "Home",
    "malaga-palace": "Málaga Palace",
    "malaga-terrace": "Málaga Terrace",
    "ancona": "Ancona",
    "olbia": "Olbia",
    "trovaci": "Trovaci",
    "sale-conferenze": "Sale Riunioni",
    "terrazza-privata": "Terrazza Privata",
    "uffici-privati": "Uffici Privati",
    "registrazione-aziendale": "Registrazione Aziendale",
    "coworking": "Coworking",
    "eventi": "Eventi",
    "organizza-evento": "Organizza Evento",
    "academy": "Academy",
    "vantaggi": "Vantaggi",
    "blog": "Blog",
  },
};

export const generateBreadcrumbJsonLd = (path: string, baseUrl: string) => {
  const segments = path.split("/").filter(Boolean);
  const lang = segments[0] === "es" || segments[0] === "it" ? segments[0] : "en";
  const names = breadcrumbNames[lang] || breadcrumbNames.en;
  
  const homePath = lang === "en" ? "/" : `/${lang}`;
  const homeName = names[""] || "Home";
  
  const items = [
    {
      "@type": "ListItem",
      position: 1,
      name: homeName,
      item: `${baseUrl}${homePath}`,
    },
  ];
  
  const pathSegments = lang === "en" ? segments.slice(1) : segments.slice(1);
  let currentPath = lang === "en" ? "/en" : `/${lang}`;
  
  pathSegments.forEach((segment, index) => {
    currentPath += `/${segment}`;
    const name = names[segment] || segment.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
    
    items.push({
      "@type": "ListItem",
      position: index + 2,
      name,
      item: `${baseUrl}${currentPath}`,
    });
  });
  
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items,
  };
};
