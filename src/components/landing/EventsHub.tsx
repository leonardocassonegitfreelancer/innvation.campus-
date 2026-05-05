import { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";
import { eventsDataset, EventData } from "@/data/events";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SEOHead from "@/components/SEOHead";
import serviceCommunity from "@/assets/service-community.webp";

const _s = (img: unknown): string => typeof img === 'string' ? img : (img as any)?.src ?? '';

const INITIAL_COUNT = 4;

const uiText = {
  en: {
    seoTitle: "Community Events",
    seoDescription: "Connect, learn and grow with our vibrant community events at Innovation Campus Málaga.",
    eyebrow: "What's On",
    title: "Community Events",
    subtitle: "Connect, learn and grow with our vibrant community events.",
    backLabel: "Back to Home",
    upcoming: "Upcoming Events",
    past: "Past Events",
    noUpcoming: "No upcoming events right now. Check back soon.",
    noPast: "No past events yet.",
    discoverMore: "Discover More →",
    showMore: "Show more",
    showLess: "Show less",
    badge: "Past",
    tagLabels: { networking: "Networking", workshop: "Workshop", talk: "Talk", other: "Event" },
  },
  it: {
    seoTitle: "Eventi della Comunità",
    seoDescription: "Connettiti, impara e cresci con i nostri vivaci eventi comunitari a Innovation Campus Málaga.",
    eyebrow: "In Programma",
    title: "Eventi della Comunità",
    subtitle: "Connettiti, impara e cresci con i nostri vivaci eventi comunitari.",
    backLabel: "Torna alla Home",
    upcoming: "Prossimi Eventi",
    past: "Eventi Passati",
    noUpcoming: "Nessun evento in programma. Torna presto.",
    noPast: "Nessun evento passato.",
    discoverMore: "Scopri di più →",
    showMore: "Mostra altri",
    showLess: "Mostra meno",
    badge: "Passato",
    tagLabels: { networking: "Networking", workshop: "Workshop", talk: "Talk", other: "Evento" },
  },
  es: {
    seoTitle: "Eventos de la Comunidad",
    seoDescription: "Conéctate, aprende y crece con nuestros vibrantes eventos comunitarios en Innovation Campus Málaga.",
    eyebrow: "En Cartelera",
    title: "Eventos de la Comunidad",
    subtitle: "Conéctate, aprende y crece con nuestros vibrantes eventos comunitarios.",
    backLabel: "Volver al Inicio",
    upcoming: "Próximos Eventos",
    past: "Eventos Pasados",
    noUpcoming: "No hay eventos próximos. Vuelve pronto.",
    noPast: "No hay eventos pasados aún.",
    discoverMore: "Descubrir más →",
    showMore: "Ver más",
    showLess: "Ver menos",
    badge: "Pasado",
    tagLabels: { networking: "Networking", workshop: "Taller", talk: "Charla", other: "Evento" },
  },
};

const tagColors: Record<string, string> = {
  networking: "bg-blue-600",
  workshop: "bg-amber-500",
  talk: "bg-purple-600",
  other: "bg-gray-500",
};

function getEventHref(lang: "en" | "it" | "es", slug: string): string {
  if (lang === "it") return `/it/eventi/${slug}`;
  if (lang === "es") return `/es/eventos/${slug}`;
  return `/en/events/${slug}`;
}

function getSeoPath(lang: "en" | "it" | "es"): string {
  if (lang === "it") return "/it/eventi";
  if (lang === "es") return "/es/eventos";
  return "/en/events";
}

export default function EventsHub({ lang = "en" }: { lang?: "en" | "es" | "it" }) {
  const [tab, setTab] = useState<"upcoming" | "past">("upcoming");
  const [showAll, setShowAll] = useState(false);
  const t = uiText[lang];

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const upcoming = eventsDataset.filter((e) => new Date(e.date) >= today);
  const past = eventsDataset.filter((e) => new Date(e.date) < today);
  const displayed = tab === "upcoming" ? upcoming : past;
  const visible = showAll ? displayed : displayed.slice(0, INITIAL_COUNT);
  const hasMore = displayed.length > INITIAL_COUNT;
  const emptyMessage = tab === "upcoming" ? t.noUpcoming : t.noPast;

  const handleTabChange = (newTab: "upcoming" | "past") => {
    setTab(newTab);
    setShowAll(false);
  };

  return (
    <main className="overflow-x-hidden">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-end">
        <img
          src={_s(serviceCommunity)}
          alt={t.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-dark via-neutral-dark/40 to-transparent" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 pb-12 w-full">
          <a
            href={lang === "en" ? "/" : `/${lang}`}
            className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm font-body mb-4 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            {t.backLabel}
          </a>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-primary-foreground">
            {t.title}
          </h1>
          <p className="font-body text-lg md:text-xl text-primary-foreground/70 mt-3 max-w-2xl">
            {t.subtitle}
          </p>
        </div>
      </section>

      {/* Tab bar */}
      <section className="bg-background border-b border-border sticky top-16 z-30">
        <div className="max-w-6xl mx-auto px-6 flex gap-2 py-4">
          <button
            onClick={() => handleTabChange("upcoming")}
            className={`font-body font-bold text-sm uppercase tracking-widest px-6 py-3 rounded-full transition-colors ${tab === "upcoming"
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
          >
            {t.upcoming}
          </button>
          <button
            onClick={() => handleTabChange("past")}
            className={`font-body font-bold text-sm uppercase tracking-widest px-6 py-3 rounded-full transition-colors ${tab === "past"
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
          >
            {t.past}
          </button>
        </div>
      </section>

      {/* Event grid */}
      <section className="py-16 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatePresence mode="wait">
            {displayed.length === 0 ? (
              <motion.p
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="font-body text-muted-foreground text-lg text-center py-20"
              >
                {emptyMessage}
              </motion.p>
            ) : (
              <motion.div
                key={tab}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {visible.map((event: EventData) => {
                    const tr = event.translations[lang];
                    const isPast = tab === "past";
                    return (
                      <div
                        key={event.slug}
                        className="group bg-card border border-border rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
                      >
                        {/* Card image */}
                        <div className="relative h-52 overflow-hidden">
                          <img
                            src={event.image}
                            alt={tr.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                          />
                          {isPast && (
                            <span className="absolute top-3 left-3 bg-gray-700/90 text-white font-body text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                              {t.badge}
                            </span>
                          )}
                          <span
                            className={`absolute top-3 right-3 text-white font-body text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full ${tagColors[event.tag]}`}
                          >
                            {t.tagLabels[event.tag]}
                          </span>
                        </div>

                        {/* Card body */}
                        <div className="p-6">
                          <div className="flex items-center gap-2 mb-2 font-body text-xs text-muted-foreground">
                            <Calendar className="w-3.5 h-3.5 shrink-0" />
                            {event.date} · {event.time}
                          </div>
                          <div className="flex items-center gap-2 mb-4 font-body text-xs text-muted-foreground">
                            <MapPin className="w-3.5 h-3.5 shrink-0" />
                            {event.location}
                          </div>
                          <h3 className="font-display font-bold text-lg text-foreground mb-5 leading-tight line-clamp-2">
                            {tr.title}
                          </h3>
                          <a
                            href={getEventHref(lang, event.slug)}
                            className="inline-flex items-center font-body font-bold text-sm uppercase tracking-widest text-primary border-b border-primary pb-0.5 hover:opacity-75 transition-opacity"
                          >
                            {t.discoverMore}
                          </a>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {hasMore && (
                  <div className="mt-12 text-center">
                    <button
                      onClick={() => setShowAll(!showAll)}
                      className="font-body font-bold text-sm uppercase tracking-widest px-10 py-4 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                    >
                      {showAll ? t.showLess : t.showMore}
                    </button>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </main>
  );
}
