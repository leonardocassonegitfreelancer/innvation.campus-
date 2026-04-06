import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation, Link } from "react-router-dom";
import conferenceHall from "@/assets/conference-picasso.jpg";
import conferenceHalf from "@/assets/conference-half-picasso.jpg";
import meetingRoom from "@/assets/service-meeting.jpg";
import palaceSkylight from "@/assets/palace-skylight.jpg";
import seasideExterior from "@/assets/seaside-exterior.jpg";
import terraceBar from "@/assets/terrace-bar.jpg";
import seasideInterior from "@/assets/seaside-interior.jpg";
import terraceEvents from "@/assets/terrace-events.jpg";

interface Space {
  image: string;
  label: string;
  name: string;
  capacity: string;
  href: string;
  size: "large" | "small";
}

type LocationKey = "city" | "seaside";

const spaces: Record<string, Record<LocationKey, Space[]>> = {
  en: {
    city: [
      { image: conferenceHall, label: "Conference", name: "PICASSO - CITY CENTER", capacity: "Up to 80 guests", href: "/en/big-conference-room", size: "large" },
      { image: conferenceHalf, label: "Conference", name: "Half Conference Room", capacity: "Up to 40 guests", href: "/en/half-conference-room", size: "small" },
      { image: meetingRoom, label: "Meeting", name: "Meeting Room", capacity: "Up to 12 guests", href: "/en/meeting-room", size: "small" },
      { image: palaceSkylight, label: "Premium", name: "Málaga Palace", capacity: "Up to 200 guests", href: "/en/malaga-palace", size: "large" },
    ],
    seaside: [
      { image: seasideExterior, label: "Outdoor", name: "Seaside Terrace", capacity: "Up to 120 guests", href: "/en/malaga-terrace", size: "large" },
      { image: terraceBar, label: "Outdoor", name: "Terrace Bar", capacity: "Intimate settings", href: "/en/private-terrace", size: "small" },
      { image: seasideInterior, label: "Indoor", name: "Sea View Lounge", capacity: "Up to 40 guests", href: "/en/sea-view-lounge", size: "small" },
      { image: terraceEvents, label: "Events", name: "Beachfront Events Space", capacity: "Up to 200 guests", href: "/en/beachfront-events", size: "large" },
    ],
  },
  es: {
    city: [
      { image: conferenceHall, label: "Conferencia", name: "Sala de Conferencias Grande", capacity: "Hasta 80 personas", href: "/es/big-conference-room", size: "large" },
      { image: conferenceHalf, label: "Conferencia", name: "Sala de Conferencias Mediana", capacity: "Hasta 40 personas", href: "/es/half-conference-room", size: "small" },
      { image: meetingRoom, label: "Reunión", name: "Sala de Reuniones", capacity: "Hasta 12 personas", href: "/es/meeting-room", size: "small" },
      { image: palaceSkylight, label: "Premium", name: "Palacio de Málaga", capacity: "Hasta 200 personas", href: "/es/malaga-palace", size: "large" },
    ],
    seaside: [
      { image: seasideExterior, label: "Exterior", name: "Terraza Marítima", capacity: "Hasta 120 personas", href: "/es/malaga-terrace", size: "large" },
      { image: terraceBar, label: "Exterior", name: "Bar de la Terraza", capacity: "Ambientes íntimos", href: "/es/private-terrace", size: "small" },
      { image: seasideInterior, label: "Interior", name: "Salón con Vistas al Mar", capacity: "Hasta 40 personas", href: "/es/sea-view-lounge", size: "small" },
      { image: terraceEvents, label: "Eventos", name: "Espacio de Eventos en la Playa", capacity: "Hasta 200 personas", href: "/es/beachfront-events", size: "large" },
    ],
  },
  it: {
    city: [
      { image: conferenceHall, label: "Conferenze", name: "Sala Conferenze Grande", capacity: "Fino a 80 persone", href: "/it/big-conference-room", size: "large" },
      { image: conferenceHalf, label: "Conferenze", name: "Sala Conferenze Media", capacity: "Fino a 40 persone", href: "/it/half-conference-room", size: "small" },
      { image: meetingRoom, label: "Riunione", name: "Sala Riunioni", capacity: "Fino a 12 persone", href: "/it/meeting-room", size: "small" },
      { image: palaceSkylight, label: "Premium", name: "Palazzo di Málaga", capacity: "Fino a 200 persone", href: "/it/malaga-palace", size: "large" },
    ],
    seaside: [
      { image: seasideExterior, label: "Esterno", name: "Terrazza sul Mare", capacity: "Fino a 120 persone", href: "/it/malaga-terrace", size: "large" },
      { image: terraceBar, label: "Esterno", name: "Bar della Terrazza", capacity: "Atmosfera intima", href: "/it/private-terrace", size: "small" },
      { image: seasideInterior, label: "Interno", name: "Lounge Vista Mare", capacity: "Fino a 40 persone", href: "/it/sea-view-lounge", size: "small" },
      { image: terraceEvents, label: "Eventi", name: "Spazio Eventi sul Lungomare", capacity: "Fino a 200 persone", href: "/it/beachfront-events", size: "large" },
    ],
  },
};

const headings: Record<string, { eyebrow: string; title: string; cta: string; city: string; seaside: string }> = {
  en: { eyebrow: "Our Venues", title: "Choose Your Space", cta: "View Details", city: "Málaga City Center", seaside: "Málaga Sea Side" },
  es: { eyebrow: "Nuestros Espacios", title: "Elige Tu Espacio", cta: "Ver Detalles", city: "Centro de Málaga", seaside: "Málaga Marítima" },
  it: { eyebrow: "I Nostri Spazi", title: "Scegli il Tuo Spazio", cta: "Scopri di Più", city: "Centro di Málaga", seaside: "Málaga sul Mare" },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] as any },
  }),
};

export default function EventSpacesGrid() {
  const location = useLocation();
  const lang = location.pathname.startsWith("/es") ? "es" : location.pathname.startsWith("/it") ? "it" : "en";
  const t = headings[lang];
  const [activeTab, setActiveTab] = useState<LocationKey>("city");

  const items = spaces[lang][activeTab];

  // Pairs: [large, small] then [small, large] → pattern large|small / small|large
  const pairs: Space[][] = [
    items.slice(0, 2),
    items.slice(2, 4),
  ];

  return (
    <section id="event-spaces" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          <p className="font-body text-xs uppercase tracking-[0.4em] text-primary mb-4">{t.eyebrow}</p>
          <h2 className="font-display font-bold text-foreground" style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}>
            {t.title}
          </h2>
        </motion.div>

        {/* Tab switcher */}
        <motion.div
          className="mb-10 inline-flex gap-2 p-1 rounded-full border border-border bg-muted/40"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {(["city", "seaside"] as LocationKey[]).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative px-6 py-2.5 rounded-full font-body text-sm transition-colors duration-300 ${
                activeTab === tab
                  ? "text-white"
                  : "text-foreground/60 hover:text-foreground"
              }`}
            >
              {activeTab === tab && (
                <motion.span
                  layoutId="tab-pill"
                  className="absolute inset-0 rounded-full bg-primary"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{t[tab]}</span>
            </button>
          ))}
        </motion.div>

        {/* Cards grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            className="flex flex-col gap-4 md:gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            {pairs.map((pair, pairIdx) => {
              const isOddPair = pairIdx % 2 !== 0;
              // Even pairs: large left, small right. Odd pairs: small left, large right.
              const displayPair = isOddPair
                ? [...pair].sort((a) => (a.size === "small" ? -1 : 1))
                : [...pair].sort((a) => (a.size === "large" ? -1 : 1));
              return (
                <div key={pairIdx} className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
                  {displayPair.map((space, j) => {
                    const isLarge = space.size === "large";
                    const colSpan = isLarge ? "md:col-span-8" : "md:col-span-4";
                    const globalIdx = pairIdx * 2 + j;
                    return (
                      <motion.div
                        key={space.name}
                        className={`${colSpan} group`}
                        custom={globalIdx}
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-60px" }}
                      >
                        <Link to={space.href} className="block relative overflow-hidden rounded-2xl bg-neutral-100 dark:bg-neutral-900">
                          <div className="relative overflow-hidden h-72 md:h-96">
                            <motion.img
                              src={space.image}
                              alt={space.name}
                              className="w-full h-full object-cover"
                              whileHover={{ scale: 1.05 }}
                              transition={{ duration: 0.7, ease: "easeOut" }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                            <div className="absolute top-4 left-4">
                              <span className="font-body text-[10px] uppercase tracking-[0.25em] text-white/80 border border-white/30 px-3 py-1 backdrop-blur-sm">
                                {space.label}
                              </span>
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between">
                              <div>
                                <h3 className="font-display font-bold text-white text-xl md:text-2xl leading-tight mb-1">
                                  {space.name}
                                </h3>
                                <p className="font-body text-sm text-white/60">{space.capacity}</p>
                              </div>
                              <motion.span
                                className="font-body text-[10px] uppercase tracking-[0.2em] text-white border-b border-white/50 pb-0.5 opacity-0 group-hover:opacity-100"
                                transition={{ duration: 0.3 }}
                              >
                                {t.cta} →
                              </motion.span>
                            </div>
                          </div>
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
