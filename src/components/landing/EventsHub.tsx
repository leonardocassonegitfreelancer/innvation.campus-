import { useState, useMemo } from "react";
import { ChevronLeft, ChevronRight, Clock, MapPin, ArrowLeft, ArrowRight } from "lucide-react";
import { eventsDataset, EventData, EventTag } from "@/data/events";
import serviceCommunity from "@/assets/service-community.webp";

const _s = (img: unknown): string => typeof img === "string" ? img : (img as any)?.src ?? "";

const tagColors: Record<EventTag, string> = {
  networking: "bg-blue-500",
  workshop:   "bg-amber-500",
  talk:       "bg-purple-600",
  other:      "bg-gray-500",
};

function getEventHref(lang: "en" | "it" | "es", slug: string): string {
  return `/${lang}/lead?service=event&space=${slug}`;
}

const ui = {
  en: {
    title: "Community Events",
    subtitle: "Connect, learn and grow with our vibrant community events.",
    back: "Back to Home",
    noEvents: "No events on this day.",
    noMonth: "No events this month.",
    register: "View event",
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
    tagLabels: { networking: "Networking", workshop: "Workshop", talk: "Talk", other: "Evento" } as Record<EventTag, string>,
    months: ["Gennaio","Febbraio","Marzo","Aprile","Maggio","Giugno","Luglio","Agosto","Settembre","Ottobre","Novembre","Dicembre"],
    days: ["LU","MA","ME","GI","VE","SA","DO"],
    locale: "it-IT",
  },
};

export default function EventsHub({ lang = "en" }: { lang?: "en" | "es" | "it" }) {
  const t = ui[lang];
  const today = useMemo(() => {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    return d;
  }, []);

  const [viewDate, setViewDate] = useState(() => new Date(today.getFullYear(), today.getMonth(), 1));
  const [selectedDate, setSelectedDate] = useState<string | null>(today.toISOString().slice(0, 10));

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
      const d = new Date(e.date);
      return d.getFullYear() === viewDate.getFullYear() && d.getMonth() === viewDate.getMonth();
    }),
  [viewDate]);

  const selectedEvents = selectedDate ? (eventsByDate[selectedDate] ?? []) : [];
  const todayStr = today.toISOString().slice(0, 10);

  const prevMonth = () => setViewDate(d => new Date(d.getFullYear(), d.getMonth() - 1, 1));
  const nextMonth = () => setViewDate(d => new Date(d.getFullYear(), d.getMonth() + 1, 1));

  return (
    <main className="overflow-x-hidden min-h-screen bg-background">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[360px] flex items-end">
        <img src={_s(serviceCommunity)} alt={t.title} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-dark via-neutral-dark/40 to-transparent" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 pb-12 w-full">
          <a href={lang === "en" ? "/" : `/${lang}`} className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm font-body mb-4 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            {t.back}
          </a>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-primary-foreground">{t.title}</h1>
          <p className="font-body text-lg text-primary-foreground/70 mt-2 max-w-2xl">{t.subtitle}</p>
        </div>
      </section>

      {/* Calendar + Panel */}
      <section className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col lg:grid lg:grid-cols-[1fr_380px] gap-10">

            {/* ── Calendar ── */}
            <div>
              {/* Month nav */}
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

              {/* Day headers */}
              <div className="grid grid-cols-7 mb-1">
                {t.days.map(d => (
                  <div key={d} className="text-center font-body text-xs font-semibold text-muted-foreground uppercase tracking-widest py-2">
                    {d}
                  </div>
                ))}
              </div>

              {/* Day cells */}
              <div className="grid grid-cols-7 gap-1">
                {calendarDays.map((day, i) => {
                  if (!day) return <div key={`e-${i}`} />;
                  const ds = day.toISOString().slice(0, 10);
                  const isToday = ds === todayStr;
                  const isSelected = ds === selectedDate;
                  const dayEvents = eventsByDate[ds] ?? [];

                  return (
                    <button
                      key={ds}
                      onClick={() => setSelectedDate(isSelected ? null : ds)}
                      className={`
                        relative flex flex-col items-center py-2 px-1 rounded-xl transition-all duration-150
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
            </div>

            {/* ── Side panel ── */}
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
                      {selectedEvents.map(event => {
                        const tr = event.translations[lang];
                        return (
                          <div key={event.slug} className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-md transition-shadow">
                            <div className="p-5">
                              <span className={`text-white font-body text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${tagColors[event.tag]}`}>
                                {t.tagLabels[event.tag]}
                              </span>
                              <h3 className="font-display font-bold text-base text-foreground mt-3 mb-3 leading-snug">
                                {tr.title}
                              </h3>
                              <div className="flex items-center gap-2 text-xs text-muted-foreground font-body mb-1">
                                <Clock className="w-3.5 h-3.5 shrink-0" />
                                {event.time}
                              </div>
                              <div className="flex items-center gap-2 text-xs text-muted-foreground font-body mb-4">
                                <MapPin className="w-3.5 h-3.5 shrink-0" />
                                {event.location}
                              </div>
                              <a
                                href={getEventHref(lang, event.slug)}
                                className="inline-flex items-center gap-1.5 font-body font-bold text-sm text-primary border-b border-primary pb-0.5 hover:opacity-75 transition-opacity"
                              >
                                {t.register} <ArrowRight className="w-3.5 h-3.5" />
                              </a>
                            </div>
                          </div>
                        );
                      })}
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
                    <div className="flex flex-col gap-2">
                      {monthEvents.map(event => {
                        const tr = event.translations[lang];
                        const d = new Date(event.date + "T12:00:00");
                        return (
                          <button
                            key={event.slug}
                            onClick={() => setSelectedDate(event.date)}
                            className="text-left flex items-start gap-4 p-3 rounded-xl hover:bg-muted transition-colors"
                          >
                            <div className="text-center min-w-[44px]">
                              <div className="font-body text-2xl font-bold text-primary leading-none">{d.getDate()}</div>
                              <div className="font-body text-xs text-muted-foreground uppercase tracking-wide">{t.months[d.getMonth()].slice(0, 3)}</div>
                            </div>
                            <div className="flex-1 min-w-0">
                              <span className={`text-white font-body text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${tagColors[event.tag]}`}>
                                {t.tagLabels[event.tag]}
                              </span>
                              <p className="font-body text-sm font-semibold text-foreground mt-1.5 leading-snug line-clamp-2">
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
    </main>
  );
}
