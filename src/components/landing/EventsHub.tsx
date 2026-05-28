import { useState, useMemo, useEffect } from "react";
import { ChevronLeft, ChevronRight, Clock, MapPin, ArrowLeft, ArrowRight, CalendarDays } from "lucide-react";
import { eventsDataset, EventData, EventTag } from "@/data/events";
import serviceCommunity from "@/assets/service-community.webp";

const _s = (img: unknown): string => typeof img === "string" ? img : (img as any)?.src ?? "";

const tagColors: Record<EventTag, string> = {
  networking: "bg-blue-500",
  workshop:   "bg-amber-500",
  talk:       "bg-purple-600",
  other:      "bg-gray-500",
};

const tagGradients: Record<EventTag, string> = {
  networking: "from-blue-900 via-blue-800 to-blue-600",
  workshop:   "from-amber-900 via-amber-800 to-amber-600",
  talk:       "from-purple-900 via-purple-800 to-purple-600",
  other:      "from-slate-800 via-slate-700 to-slate-600",
};

const eventBasePaths: Record<string, string> = {
  en: "/en/events",
  es: "/es/eventos",
  it: "/it/eventi",
};

const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"];

function getEventHref(slug: string, lang: string, utmString?: string): string {
  const base = `${eventBasePaths[lang] ?? "/en/events"}/${slug}`;
  return utmString ? `${base}?${utmString}` : base;
}

const ui = {
  en: {
    title: "Community Events",
    subtitle: "Connect, learn and grow with our vibrant community events.",
    back: "Back to Home",
    noEvents: "No events on this day.",
    noMonth: "No events this month.",
    register: "View event",
    upcoming: "Upcoming Events",
    upcomingSubtitle: "Don't miss what's next",
    noUpcoming: "No upcoming events. Check back soon.",
    hostTitle: "Want to bring your event here?",
    hostSubtitle: "Our spaces host meetups, workshops, talks and community gatherings. Get in touch and let's make it happen.",
    hostCta: "Talk to us",
    tagLabels: { networking: "Networking", workshop: "Workshop", talk: "Talk", other: "Event" } as Record<EventTag, string>,
    months: ["January","February","March","April","May","June","July","August","September","October","November","December"],
    days: ["MO","TU","WE","TH","FR","SA","SU"],
    locale: "en-GB",
  },
  es: {
    title: "Eventos de la Comunidad",
    subtitle: "Conéctate, aprende y crece con nuestros vibrantes eventos comunitarios.",
    back: "Volver al inicio",
    noEvents: "No hay eventos este día.",
    noMonth: "No hay eventos este mes.",
    register: "Ver evento",
    upcoming: "Próximos Eventos",
    upcomingSubtitle: "No te pierdas lo que viene",
    noUpcoming: "No hay eventos próximos. Vuelve pronto.",
    hostTitle: "¿Quieres traer tu evento aquí?",
    hostSubtitle: "Nuestros espacios acogen meetups, talleres, charlas y eventos comunitarios. Contáctanos y lo hacemos realidad.",
    hostCta: "Háblanos",
    tagLabels: { networking: "Networking", workshop: "Taller", talk: "Charla", other: "Evento" } as Record<EventTag, string>,
    months: ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],
    days: ["LU","MA","MI","JU","VI","SA","DO"],
    locale: "es-ES",
  },
  it: {
    title: "Eventi della Comunità",
    subtitle: "Connettiti, impara e cresci con i nostri vivaci eventi comunitari.",
    back: "Torna alla home",
    noEvents: "Nessun evento questo giorno.",
    noMonth: "Nessun evento questo mese.",
    register: "Vedi evento",
    upcoming: "Prossimi Eventi",
    upcomingSubtitle: "Non perdere quello che sta arrivando",
    noUpcoming: "Nessun evento in programma. Torna presto.",
    hostTitle: "Vuoi portare il tuo evento qui?",
    hostSubtitle: "I nostri spazi ospitano meetup, workshop, talk ed eventi comunitari. Contattaci e lo realizziamo insieme.",
    hostCta: "Parlaci",
    tagLabels: { networking: "Networking", workshop: "Workshop", talk: "Talk", other: "Evento" } as Record<EventTag, string>,
    months: ["Gennaio","Febbraio","Marzo","Aprile","Maggio","Giugno","Luglio","Agosto","Settembre","Ottobre","Novembre","Dicembre"],
    days: ["LU","MA","ME","GI","VE","SA","DO"],
    locale: "it-IT",
  },
};

function toLocalDateStr(d: Date): string {
  return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}-${String(d.getDate()).padStart(2,"0")}`;
}

interface EventCardProps {
  event: EventData;
  lang: "en" | "es" | "it";
  t: typeof ui["en"];
  utmString?: string;
}

function EventCard({ event, lang, t, utmString }: EventCardProps) {
  const tr = event.translations[lang];
  const d = new Date(event.date + "T12:00:00");
  const hasImage = event.image && event.image !== "/placeholder.svg";

  return (
    <a
      href={getEventHref(event.slug, lang, utmString)}
      className="group block rounded-2xl overflow-hidden border border-border hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-card"
    >
      {/* Card top — image or gradient */}
      <div className={`relative h-44 bg-gradient-to-br ${tagGradients[event.tag]} overflow-hidden`}>
        {hasImage && (
          <img src={event.image} alt={tr.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        )}
      </div>

      {/* Card body */}
      <div className="p-5">
        <h3 className="font-display font-bold text-base text-foreground mb-3 leading-snug line-clamp-2 group-hover:text-primary transition-colors">
          {tr.title}
        </h3>
        <div className="flex items-center gap-2 text-xs text-muted-foreground font-body mb-1.5">
          <CalendarDays className="w-3.5 h-3.5 shrink-0" />
          {d.toLocaleDateString(t.locale, { day: "numeric", month: "long", year: "numeric" })}
        </div>
        <div className="flex items-center gap-2 text-xs text-muted-foreground font-body mb-1.5">
          <Clock className="w-3.5 h-3.5 shrink-0" />
          {event.time}
        </div>
        <div className="flex items-center gap-2 text-xs text-muted-foreground font-body mb-4">
          <MapPin className="w-3.5 h-3.5 shrink-0" />
          <span className="truncate">{event.location}</span>
        </div>
        <span className="inline-flex items-center gap-1.5 font-body font-bold text-sm text-primary">
          {t.register} <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </span>
      </div>
    </a>
  );
}

export default function EventsHub({ lang = "en" }: { lang?: "en" | "es" | "it" }) {
  const t = ui[lang];
  const [utmString, setUtmString] = useState<string | undefined>(undefined);

  useEffect(() => {
    const qs = new URLSearchParams(window.location.search);
    const utms = new URLSearchParams();
    let hasUtm = false;
    for (const key of UTM_KEYS) {
      const val = qs.get(key);
      if (val) { utms.set(key, val); hasUtm = true; }
    }
    if (hasUtm) setUtmString(utms.toString());
  }, []);

  const today = useMemo(() => {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    return d;
  }, []);

  const [viewDate, setViewDate] = useState(() => new Date(today.getFullYear(), today.getMonth(), 1));
  const [selectedDate, setSelectedDate] = useState<string | null>(toLocalDateStr(today));

  const eventsByDate = useMemo(() => {
    const map: Record<string, EventData[]> = {};
    for (const e of eventsDataset) {
      if (!map[e.date]) map[e.date] = [];
      map[e.date].push(e);
    }
    return map;
  }, []);

  const calendarDays = useMemo(() => {
    const year = viewDate.getFullYear();
    const month = viewDate.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    let offset = firstDay.getDay() - 1;
    if (offset < 0) offset = 6;
    const days: (Date | null)[] = Array(offset).fill(null);
    for (let d = 1; d <= lastDay.getDate(); d++) days.push(new Date(year, month, d));
    while (days.length % 7 !== 0) days.push(null);
    return days;
  }, [viewDate]);

  const monthEvents = useMemo(() =>
    eventsDataset.filter(e => {
      const d = new Date(e.date + "T12:00:00");
      return d.getFullYear() === viewDate.getFullYear() && d.getMonth() === viewDate.getMonth();
    }),
  [viewDate]);

  const upcomingEvents = useMemo(() =>
    eventsDataset
      .filter(e => e.date >= toLocalDateStr(today))
      .sort((a, b) => a.date.localeCompare(b.date)),
  [today]);

  const selectedEvents = selectedDate ? (eventsByDate[selectedDate] ?? []) : [];
  const todayStr = toLocalDateStr(today);

  const prevMonth = () => setViewDate(d => new Date(d.getFullYear(), d.getMonth() - 1, 1));
  const nextMonth = () => setViewDate(d => new Date(d.getFullYear(), d.getMonth() + 1, 1));

  const hostHref = lang === "en" ? "/en/lead?service=general" : lang === "es" ? "/es/lead?service=general" : "/it/lead?service=general";

  return (
    <main className="overflow-x-hidden min-h-screen bg-background">

      {/* Hero */}
      <section className="relative h-[68vh] min-h-[480px] flex items-end">
        <img src={_s(serviceCommunity)} alt={t.title} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-dark via-neutral-dark/40 to-transparent" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 pb-12 w-full">
          <a href={lang === "en" ? "/" : `/${lang}`} className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm font-body mb-4 transition-colors">
            <ArrowLeft className="w-4 h-4" /> {t.back}
          </a>
          <div className="flex items-end justify-between flex-wrap gap-4">
            <div>
              <h1 className="font-display text-4xl md:text-6xl font-bold text-primary-foreground">{t.title}</h1>
              <p className="font-body text-lg text-primary-foreground/70 mt-2 max-w-2xl">{t.subtitle}</p>
            </div>
            {upcomingEvents.length > 0 && (
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
                <CalendarDays className="w-4 h-4 text-primary" />
                <span className="font-body text-sm text-white font-semibold">
                  {upcomingEvents.length} upcoming
                </span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Calendar + Panel */}
      <section className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col lg:grid lg:grid-cols-[1fr_380px] gap-10">

            {/* Calendar */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <button onClick={prevMonth} className="p-2 rounded-lg hover:bg-muted transition-colors" aria-label="Previous month">
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <h2 className="font-display text-xl md:text-2xl font-bold text-foreground">
                  {t.months[viewDate.getMonth()]} {viewDate.getFullYear()}
                </h2>
                <button onClick={nextMonth} className="p-2 rounded-lg hover:bg-muted transition-colors" aria-label="Next month">
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              <div className="grid grid-cols-7 mb-1">
                {t.days.map(d => (
                  <div key={d} className="text-center font-body text-xs font-semibold text-muted-foreground uppercase tracking-widest py-2">
                    {d}
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-7 gap-1">
                {calendarDays.map((day, i) => {
                  if (!day) return <div key={`e-${i}`} />;
                  const ds = toLocalDateStr(day);
                  const isToday = ds === todayStr;
                  const isSelected = ds === selectedDate;
                  const dayEvents = eventsByDate[ds] ?? [];

                  return (
                    <button
                      key={ds}
                      onClick={() => setSelectedDate(isSelected ? null : ds)}
                      className={`
                        relative flex flex-col items-center py-2.5 px-1 rounded-xl transition-all duration-150
                        ${isSelected ? "bg-primary text-primary-foreground shadow-md" : "hover:bg-muted"}
                        ${isToday && !isSelected ? "ring-2 ring-primary ring-offset-1" : ""}
                      `}
                    >
                      <span className={`font-body text-sm leading-none ${isSelected ? "text-primary-foreground" : isToday ? "text-primary font-bold" : "text-foreground"}`}>
                        {day.getDate()}
                      </span>
                      {dayEvents.length > 0 && (
                        <div className="flex gap-0.5 mt-1.5">
                          {dayEvents.slice(0, 3).map((e, j) => (
                            <span key={j} className={`w-1.5 h-1.5 rounded-full ${isSelected ? "bg-white/80" : tagColors[e.tag]}`} />
                          ))}
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Tag legend */}
              <div className="flex flex-wrap gap-4 mt-6 pt-6 border-t border-border">
                {(["networking","workshop","talk","other"] as EventTag[]).map(tag => (
                  <div key={tag} className="flex items-center gap-1.5">
                    <span className={`w-2.5 h-2.5 rounded-full ${tagColors[tag]}`} />
                    <span className="font-body text-xs text-muted-foreground">{t.tagLabels[tag]}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Side panel */}
            <div className="lg:border-l lg:border-border lg:pl-8 pt-2">
              {selectedDate ? (
                <>
                  <p className="font-body text-xs uppercase tracking-widest text-muted-foreground mb-5">
                    {new Date(selectedDate + "T12:00:00").toLocaleDateString(t.locale, {
                      weekday: "long", day: "numeric", month: "long",
                    })}
                  </p>
                  {selectedEvents.length === 0 ? (
                    <p className="font-body text-muted-foreground text-sm">{t.noEvents}</p>
                  ) : (
                    <div className="flex flex-col gap-4">
                      {selectedEvents.map(event => (
                        <EventCard key={event.slug} event={event} lang={lang} t={t} utmString={utmString} />
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <>
                  <p className="font-body text-xs uppercase tracking-widest text-muted-foreground mb-5">
                    {t.months[viewDate.getMonth()]} {viewDate.getFullYear()}
                  </p>
                  {monthEvents.length === 0 ? (
                    <p className="font-body text-muted-foreground text-sm">{t.noMonth}</p>
                  ) : (
                    <div className="flex flex-col gap-3">
                      {monthEvents.map(event => {
                        const tr = event.translations[lang];
                        const d = new Date(event.date + "T12:00:00");
                        return (
                          <button
                            key={event.slug}
                            onClick={() => setSelectedDate(event.date)}
                            className="text-left flex items-start gap-4 p-3 rounded-xl hover:bg-muted transition-colors group"
                          >
                            <div className={`text-center min-w-[48px] h-[48px] rounded-xl bg-gradient-to-br ${tagGradients[event.tag]} flex flex-col items-center justify-center`}>
                              <div className="font-display text-lg font-bold text-white leading-none">{d.getDate()}</div>
                              <div className="font-body text-[9px] text-white/80 uppercase tracking-wide">{t.months[d.getMonth()].slice(0,3)}</div>
                            </div>
                            <div className="flex-1 min-w-0">
                              <span className={`text-white font-body text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${tagColors[event.tag]}`}>
                                {t.tagLabels[event.tag]}
                              </span>
                              <p className="font-body text-sm font-semibold text-foreground mt-1.5 leading-snug line-clamp-2 group-hover:text-primary transition-colors">
                                {tr.title}
                              </p>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  )}
                </>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* Upcoming events grid */}
      {upcomingEvents.length > 0 && (
        <section className="py-12 md:py-16 bg-muted/40 border-t border-border">
          <div className="max-w-6xl mx-auto px-6">
            <div className="mb-10">
              <p className="font-body text-xs uppercase tracking-[0.3em] text-primary font-semibold mb-2">{t.upcomingSubtitle}</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">{t.upcoming}</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingEvents.map(event => (
                <EventCard key={event.slug} event={event} lang={lang} t={t} utmString={utmString} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Host your event CTA */}
      <section className="py-16 md:py-20 bg-neutral-dark">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-3">{t.hostTitle}</h2>
            <p className="font-body text-white/60 max-w-xl leading-relaxed">{t.hostSubtitle}</p>
          </div>
          <a
            href={hostHref}
            className="shrink-0 inline-flex items-center gap-2 bg-primary text-primary-foreground font-body font-bold text-sm uppercase tracking-widest px-8 py-4 rounded-xl hover:bg-primary/90 transition-colors"
          >
            {t.hostCta} <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

    </main>
  );
}
