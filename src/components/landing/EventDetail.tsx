import { useEffect, useState } from "react";
import { Calendar, Clock, MapPin, ArrowLeft, ArrowRight } from "lucide-react";
import { eventsDataset, EventTag } from "@/data/events";
import serviceCommunity from "@/assets/service-community.webp";

const _s = (img: unknown): string => typeof img === "string" ? img : (img as any)?.src ?? "";

const tagColors: Record<EventTag, string> = {
  networking: "bg-blue-500",
  workshop:   "bg-amber-500",
  talk:       "bg-purple-600",
  other:      "bg-gray-500",
};

const ui = {
  en: {
    back: "Back to events", backHref: "/en/events",
    free: "Free",
    cta: "Register now",
    organizer: "Organizer",
    tagLabels: { networking: "Networking", workshop: "Workshop", talk: "Talk", other: "Event" } as Record<EventTag, string>,
    locale: "en-GB",
  },
  es: {
    back: "Volver a eventos", backHref: "/es/eventos",
    free: "Gratis",
    cta: "Registrarse ahora",
    organizer: "Organizador",
    tagLabels: { networking: "Networking", workshop: "Taller", talk: "Charla", other: "Evento" } as Record<EventTag, string>,
    locale: "es-ES",
  },
  it: {
    back: "Torna agli eventi", backHref: "/it/eventi",
    free: "Gratuito",
    cta: "Registrati ora",
    organizer: "Organizzatore",
    tagLabels: { networking: "Networking", workshop: "Workshop", talk: "Talk", other: "Evento" } as Record<EventTag, string>,
    locale: "it-IT",
  },
};

interface Props {
  slug: string;
  lang?: "en" | "es" | "it";
  leadUrl: string;
}

export default function EventDetail({ slug, lang = "en", leadUrl }: Props) {
  const t = ui[lang];
  const [fullLeadUrl, setFullLeadUrl] = useState(leadUrl);

  useEffect(() => {
    const qs = new URLSearchParams(window.location.search);
    qs.set("event_page", window.location.pathname);
    setFullLeadUrl(`${leadUrl}?${qs.toString()}`);
  }, [leadUrl]);

  const event = eventsDataset.find(e => e.slug === slug);

  if (!event) return null;

  const tr = event.translations[lang];
  const d = new Date(event.date + "T12:00:00");
  const dateStr = d.toLocaleDateString(t.locale, {
    weekday: "long", day: "numeric", month: "long", year: "numeric",
  });
  const heroSrc = event.image && event.image !== "/placeholder.svg"
    ? event.image
    : _s(serviceCommunity);

  return (
    <main className="min-h-screen bg-background pb-24 lg:pb-0">
      {/* Page header */}
      <section className="bg-background pt-20 pb-8">
        <div className="max-w-4xl mx-auto px-6">
          <a href={t.backHref} className="flex items-center gap-2 text-muted-foreground hover:text-foreground text-sm font-body mb-6 transition-colors w-fit">
            <ArrowLeft className="w-4 h-4" /> {t.back}
          </a>
          <span className={`text-white font-body text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${tagColors[event.tag]}`}>
            {t.tagLabels[event.tag]}
          </span>
          <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-4 leading-tight">
            {tr.title}
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-10 items-start">

            {/* Left — description */}
            <div>
              <p className="font-body text-lg text-foreground/80 leading-relaxed whitespace-pre-line">
                {tr.excerpt}
              </p>
            </div>

            {/* Right — info card + CTA */}
            <div className="lg:sticky lg:top-24">
              <div className="bg-card border border-border rounded-2xl overflow-hidden">
                {heroSrc && (
                  <img src={heroSrc} alt={tr.title} className="w-full h-48 object-cover" />
                )}
              <div className="p-6 space-y-4">
                <div className="flex items-start gap-3 font-body text-sm text-foreground/80">
                  <Calendar className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>{dateStr}</span>
                </div>
                <div className="flex items-center gap-3 font-body text-sm text-foreground/80">
                  <Clock className="w-4 h-4 text-primary shrink-0" />
                  {event.time}
                </div>
                <div className="flex items-center gap-3 font-body text-sm text-foreground/80">
                  <MapPin className="w-4 h-4 text-primary shrink-0" />
                  {event.location}
                </div>

                <div className="border-t border-border pt-4">
                  <p className="font-body text-xs uppercase tracking-widest text-muted-foreground mb-1">{t.organizer}</p>
                  <p className="font-body text-sm font-semibold text-foreground">PowerTalks Málaga</p>
                </div>

                <div className="border-t border-border pt-4">
                  <p className="font-display text-2xl font-bold text-primary">{t.free}</p>
                </div>

                <a
                  href={fullLeadUrl}
                  className="flex items-center justify-center gap-2 w-full bg-primary text-primary-foreground font-body font-bold text-sm uppercase tracking-widest py-4 rounded-xl hover:bg-primary/90 transition-colors"
                >
                  {t.cta} <ArrowRight className="w-4 h-4" />
                </a>
              </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      {/* Sticky bottom CTA — mobile only */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-background border-t border-border px-4 py-3">
        <a
          href={fullLeadUrl}
          className="flex items-center justify-center gap-2 w-full bg-primary text-primary-foreground font-body font-bold text-base uppercase tracking-widest py-4 rounded-xl hover:bg-primary/90 transition-colors"
        >
          {t.cta} <ArrowRight className="w-5 h-5" />
        </a>
      </div>
    </main>
  );
}
