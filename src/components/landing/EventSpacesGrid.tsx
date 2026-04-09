import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation, Link } from "react-router-dom";
import { MapPin, Users, Calendar, FilterX, Search } from "lucide-react";
import { spacesDataset, getSpaceHref } from "@/data/spaces";

const uiText = {
  en: { 
    eyebrow: "Find Your Space", 
    title: "Host an Unforgettable Event", 
    cta: "View Details",
    filters: {
      type: "Event Type",
      typeOptions: { all: "Any Type", conference: "Conference / Setup", workshop: "Workshop / Training", networking: "Networking", party: "Party / Reception" },
      guests: "Guests",
      guestOptions: { all: "Any Size", "40": "Up to 40", "80": "Up to 80", "150": "Up to 150", "200": "Up to 200+" },
      location: "Location",
      locationOptions: { all: "Any Location", city: "Historic Center", seaside: "Sea Side" }
    },
    noResults: "No spaces match exactly, but we can build a tailored setup for you.",
    contactUs: "Reach out to us"
  },
  es: { 
    eyebrow: "Encuentra Tu Espacio", 
    title: "Organiza un Evento Inolvidable", 
    cta: "Ver Detalles",
    filters: {
      type: "Tipo de Evento",
      typeOptions: { all: "Cualquier Tipo", conference: "Conferencia", workshop: "Taller / Formación", networking: "Networking", party: "Fiesta / Recepción" },
      guests: "Invitados",
      guestOptions: { all: "Cualquier tamaño", "40": "Hasta 40", "80": "Hasta 80", "150": "Hasta 150", "200": "Hasta 200+" },
      location: "Ubicación",
      locationOptions: { all: "Cualquier ubicación", city: "Centro Histórico", seaside: "Vista al Mar" }
    },
    noResults: "Ningún espacio coincide exactamente, pero podemos crear uno a medida.",
    contactUs: "Contáctanos"
  },
  it: { 
    eyebrow: "Trova il Tuo Spazio", 
    title: "Organizza un Evento Indimenticabile", 
    cta: "Scopri di Più",
    filters: {
      type: "Tipo di Evento",
      typeOptions: { all: "Qualsiasi Tipo", conference: "Conferenza", workshop: "Workshop / Formazione", networking: "Networking", party: "Festa / Ricevimento" },
      guests: "Ospiti",
      guestOptions: { all: "Qualsiasi Numero", "40": "Fino a 40", "80": "Fino a 80", "150": "Fino a 150", "200": "Fino a 200+" },
      location: "Posizione",
      locationOptions: { all: "Qualsiasi Posizione", city: "Centro Storico", seaside: "Vista Mare" }
    },
    noResults: "Nessun risultato esatto, ma possiamo creare un set up su misura per te.",
    contactUs: "Contattaci"
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 30 },
  visible: {
    opacity: 1, scale: 1, y: 0,
    transition: { type: "spring" as const, stiffness: 100, damping: 20 },
  },
  exit: { opacity: 0, scale: 0.95, y: -20, transition: { duration: 0.2 } },
};

export default function EventSpacesGrid() {
  const location = useLocation();
  const lang = (location.pathname.startsWith("/es") ? "es" : location.pathname.startsWith("/it") ? "it" : "en") as "en"|"es"|"it";
  const t = uiText[lang];
  
  const [filterType, setFilterType] = useState<string>("all");
  const [filterGuests, setFilterGuests] = useState<string>("all");
  const [filterLocation, setFilterLocation] = useState<string>("all");

  const filteredSpaces = useMemo(() => {
    return spacesDataset.filter(space => {
      // Filter by Type
      if (filterType !== "all" && !space.eventTypes.includes(filterType as any)) return false;
      // Filter by Location
      if (filterLocation !== "all" && space.location !== filterLocation) return false;
      // Filter by Guests
      if (filterGuests !== "all") {
        const guestNum = parseInt(filterGuests, 10);
        if (space.maxGuests < guestNum) return false;
        // Optionally omit too large spaces
        if (guestNum === 40 && space.maxGuests > 150) return false; 
      }
      return true;
    });
  }, [filterType, filterGuests, filterLocation]);

  return (
    <section id="event-spaces" className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <motion.div
           className="mb-10 text-center md:text-left"
           initial={{ opacity: 0, y: 24 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-80px" }}
           transition={{ duration: 0.7 }}
        >
          <p className="font-body text-xs uppercase tracking-[0.4em] text-primary mb-4 font-semibold">{t.eyebrow}</p>
          <h2 className="font-display font-bold text-foreground leading-tight" style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}>
            {t.title}
          </h2>
        </motion.div>

        {/* Interactive Filter Bar */}
        <motion.div 
          className="mb-16 bg-card/80 backdrop-blur-xl border border-border rounded-2xl p-4 md:p-3 shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex flex-col md:flex-row items-center gap-3 md:gap-2">
            
            {/* Filter: Type */}
            <div className="flex-1 w-full bg-background border border-border rounded-xl px-4 py-3 flex flex-col justify-center transition-colors focus-within:border-primary/50 group">
              <label className="text-[10px] font-body uppercase text-muted-foreground font-semibold flex items-center gap-1.5 mb-1">
                <Calendar className="w-3 h-3 text-primary" /> {t.filters.type}
              </label>
              <select 
                value={filterType} 
                onChange={(e) => setFilterType(e.target.value)}
                className="w-full bg-transparent outline-none font-body text-sm text-foreground appearance-none cursor-pointer"
              >
                {Object.entries(t.filters.typeOptions).map(([k, v]) => (
                  <option key={k} value={k}>{v}</option>
                ))}
              </select>
            </div>

            {/* Filter: Guests */}
            <div className="flex-1 w-full bg-background border border-border rounded-xl px-4 py-3 flex flex-col justify-center transition-colors focus-within:border-primary/50 group">
              <label className="text-[10px] font-body uppercase text-muted-foreground font-semibold flex items-center gap-1.5 mb-1">
                <Users className="w-3 h-3 text-primary" /> {t.filters.guests}
              </label>
              <select 
                value={filterGuests} 
                onChange={(e) => setFilterGuests(e.target.value)}
                className="w-full bg-transparent outline-none font-body text-sm text-foreground appearance-none cursor-pointer"
              >
                {Object.entries(t.filters.guestOptions).map(([k, v]) => (
                  <option key={k} value={k}>{v}</option>
                ))}
              </select>
            </div>

            {/* Filter: Location */}
            <div className="flex-1 w-full bg-background border border-border rounded-xl px-4 py-3 flex flex-col justify-center transition-colors focus-within:border-primary/50 group">
              <label className="text-[10px] font-body uppercase text-muted-foreground font-semibold flex items-center gap-1.5 mb-1">
                <MapPin className="w-3 h-3 text-primary" /> {t.filters.location}
              </label>
              <select 
                value={filterLocation} 
                onChange={(e) => setFilterLocation(e.target.value)}
                className="w-full bg-transparent outline-none font-body text-sm text-foreground appearance-none cursor-pointer"
              >
                {Object.entries(t.filters.locationOptions).map(([k, v]) => (
                  <option key={k} value={k}>{v}</option>
                ))}
              </select>
            </div>

            {/* Clear Filters Button (Desktop icon, Mobile text) */}
            <button 
              onClick={() => { setFilterType("all"); setFilterGuests("all"); setFilterLocation("all"); }}
              className="md:w-14 w-full h-[52px] shrink-0 rounded-xl bg-primary/10 text-primary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              title="Reset search"
            >
              <FilterX className="w-5 h-5 hidden md:block" />
              <span className="md:hidden font-body text-sm font-semibold uppercase">Reset Filters</span>
            </button>
            <button className="md:w-14 w-full h-[52px] shrink-0 rounded-xl bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-colors shadow-md">
              <Search className="w-5 h-5 hidden md:block" />
              <span className="md:hidden font-body text-sm font-semibold uppercase">Search</span>
            </button>
          </div>
        </motion.div>

        {/* Results Grid */}
        <div className="min-h-[500px]">
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredSpaces.map((space, i) => {
                const tr = space.translations[lang];
                const href = getSpaceHref(lang, space);
                const isLarge = filteredSpaces.length > 2 && i % 4 === 0;
                
                return (
                  <motion.div
                    key={space.slug}
                    layoutId={`space-${space.slug}`}
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className={`group ${isLarge ? "md:col-span-2" : "md:col-span-1"}`}
                  >
                    <Link to={href} className="block relative overflow-hidden rounded-3xl bg-card border border-border shadow-sm hover:shadow-xl transition-all duration-500 h-80 md:h-[400px]">
                      <motion.img
                        src={space.image}
                        alt={tr.name}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      
                      {/* Top Badges */}
                      <div className="absolute top-5 left-5 flex gap-2">
                        <span className="font-body text-[10px] uppercase font-bold tracking-widest text-primary bg-background px-3 py-1.5 rounded-full shadow-md">
                          {tr.label}
                        </span>
                        <span className="font-body text-[10px] uppercase tracking-wider text-white bg-black/40 backdrop-blur-sm border border-white/20 px-3 py-1.5 rounded-full flex items-center gap-1">
                          <Users className="w-3 h-3" /> {space.maxGuests}
                        </span>
                      </div>

                      {/* Bottom Info */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                        <div className="flex items-end justify-between">
                          <div>
                            <h3 className="font-display font-medium text-white text-2xl md:text-3xl leading-tight mb-2 drop-shadow-md">
                              {tr.name}
                            </h3>
                            <p className="font-body text-sm font-medium text-white/80 drop-shadow-md flex items-center gap-2">
                              <MapPin className="w-3.5 h-3.5" /> 
                              {space.location === "city" ? t.filters.locationOptions.city : t.filters.locationOptions.seaside}
                            </p>
                          </div>
                          
                          <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-colors shrink-0">
                            <span className="text-white">→</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>

          {/* Fallback Empty State */}
          <AnimatePresence>
            {filteredSpaces.length === 0 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center justify-center h-64 border-2 border-dashed border-border rounded-3xl"
              >
                <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-4">
                  <FilterX className="w-8 h-8 text-muted-foreground" />
                </div>
                <p className="font-body text-foreground text-lg mb-4 text-center max-w-md px-4">
                  {t.noResults}
                </p>
                <Link to={lang === "en" ? "/#contact" : `/${lang}#contact`} className="font-body font-bold text-sm uppercase tracking-widest text-primary border-b border-primary pb-1">
                  {t.contactUs}
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
