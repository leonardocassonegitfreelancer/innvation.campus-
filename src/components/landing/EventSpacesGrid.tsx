import { motion } from "framer-motion";
import { useLocation, Link } from "react-router-dom";
import conferenceHall from "@/assets/conference-picasso.jpg";
import conferenceHalf from "@/assets/conference-half-picasso.jpg";
import terraceEvents from "@/assets/terrace-events.jpg";
import terraceBar from "@/assets/terrace-bar.jpg";
import palaceSkylight from "@/assets/palace-skylight.jpg";
import palaceCourtyard from "@/assets/palace-courtyard.jpg";
import meetingRoom from "@/assets/service-meeting.jpg";

interface Space {
  image: string;
  label: string;
  name: string;
  capacity: string;
  href: string;
  size: "large" | "small";
}

const spaces: Record<string, Space[]> = {
  en: [
    { image: conferenceHall, label: "Conference", name: "PICASSO - CITY CENTER", capacity: "Up to 80 guests", href: "/en/big-conference-room", size: "large" },
    { image: conferenceHalf, label: "Conference", name: "Half Conference Room", capacity: "Up to 40 guests", href: "/en/half-conference-room", size: "small" },
    { image: terraceEvents, label: "Outdoor", name: "Private Terrace - SEASIDE", capacity: "Up to 100 guests", href: "/en/malaga-terrace", size: "large" },
    { image: meetingRoom, label: "Meeting", name: "Meeting Room", capacity: "Up to 12 guests", href: "/en/meeting-room", size: "small" },
    { image: terraceBar, label: "Outdoor", name: "Private Terrace", capacity: "Intimate settings", href: "/en/private-terrace", size: "small" },
    { image: palaceSkylight, label: "Premium", name: "Málaga Palace", capacity: "Up to 200 guests", href: "/en/malaga-palace", size: "large" },
    { image: palaceCourtyard, label: "Premium", name: "Training Room", capacity: "Up to 30 guests", href: "/en/training-room", size: "small" },
  ],
  es: [
    { image: conferenceHall, label: "Conferencia", name: "Sala de Conferencias Grande", capacity: "Hasta 80 personas", href: "/es/big-conference-room", size: "large" },
    { image: conferenceHalf, label: "Conferencia", name: "Sala de Conferencias Mediana", capacity: "Hasta 40 personas", href: "/es/half-conference-room", size: "small" },
    { image: terraceEvents, label: "Exterior", name: "Terraza Málaga", capacity: "Hasta 120 personas", href: "/es/malaga-terrace", size: "large" },
    { image: meetingRoom, label: "Reunión", name: "Sala de Reuniones", capacity: "Hasta 12 personas", href: "/es/meeting-room", size: "small" },
    { image: terraceBar, label: "Exterior", name: "Terraza Privada", capacity: "Ambientes íntimos", href: "/es/private-terrace", size: "small" },
    { image: palaceSkylight, label: "Premium", name: "Palacio de Málaga", capacity: "Hasta 200 personas", href: "/es/malaga-palace", size: "large" },
    { image: palaceCourtyard, label: "Premium", name: "Sala de Formación", capacity: "Hasta 30 personas", href: "/es/training-room", size: "small" },
  ],
  it: [
    { image: conferenceHall, label: "Conferenze", name: "Sala Conferenze Grande", capacity: "Fino a 80 persone", href: "/it/big-conference-room", size: "large" },
    { image: conferenceHalf, label: "Conferenze", name: "Sala Conferenze Media", capacity: "Fino a 40 persone", href: "/it/half-conference-room", size: "small" },
    { image: terraceEvents, label: "Esterno", name: "Terrazza Málaga", capacity: "Fino a 120 persone", href: "/it/malaga-terrace", size: "large" },
    { image: meetingRoom, label: "Riunione", name: "Sala Riunioni", capacity: "Fino a 12 persone", href: "/it/meeting-room", size: "small" },
    { image: terraceBar, label: "Esterno", name: "Terrazza Privata", capacity: "Atmosfera intima", href: "/it/private-terrace", size: "small" },
    { image: palaceSkylight, label: "Premium", name: "Palazzo di Málaga", capacity: "Fino a 200 persone", href: "/it/malaga-palace", size: "large" },
    { image: palaceCourtyard, label: "Premium", name: "Sala Formazione", capacity: "Fino a 30 persone", href: "/it/training-room", size: "small" },
  ],
};

const headings: Record<string, { eyebrow: string; title: string; cta: string }> = {
  en: { eyebrow: "Our Venues", title: "Choose Your Space", cta: "View Details" },
  es: { eyebrow: "Nuestros Espacios", title: "Elige Tu Espacio", cta: "Ver Detalles" },
  it: { eyebrow: "I Nostri Spazi", title: "Scegli il Tuo Spazio", cta: "Scopri di Più" },
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
  const items = spaces[lang];

  return (
    <section id="event-spaces" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          className="mb-16"
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

        {/* Grid: alternating large/small pairs, one row-container per pair */}
        <div className="flex flex-col gap-4 md:gap-6">
          {Array.from({ length: Math.ceil(items.length / 2) }, (_, pairIdx) => {
            const pair = items.slice(pairIdx * 2, pairIdx * 2 + 2);
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
                  const globalIdx = pairIdx * 2 + (isOddPair ? (pair.length - 1 - j) : j);
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
        </div>
      </div>
    </section>
  );
}
