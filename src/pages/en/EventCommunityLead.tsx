import { useState } from "react";
import { ArrowLeft, Calendar, MapPin, Clock, ArrowRight } from "lucide-react";
import { eventsDataset, EventTag } from "@/data/events";

const _s = (img: unknown): string => typeof img === "string" ? img : (img as any)?.src ?? "";

const tagColors: Record<EventTag, string> = {
  networking: "bg-blue-500",
  workshop:   "bg-amber-500",
  talk:       "bg-purple-600",
  other:      "bg-gray-500",
};

const ui = {
  en: {
    back: "Back to events",
    backHref: "/en/events",
    tagLabels: { networking: "Networking", workshop: "Workshop", talk: "Talk", other: "Event" } as Record<EventTag, string>,
    formTitle: "Save your spot",
    formSub: "Enter your details and we'll redirect you to the registration page.",
    name: "Full name",
    email: "Email address",
    cta: "Register now",
    sending: "Redirecting...",
    privacy: "Your data will only be used to send you event updates.",
  },
  es: {
    back: "Volver a eventos",
    backHref: "/es/eventos",
    tagLabels: { networking: "Networking", workshop: "Taller", talk: "Charla", other: "Evento" } as Record<EventTag, string>,
    formTitle: "Reserva tu plaza",
    formSub: "Introduce tus datos y te redirigiremos a la página de registro.",
    name: "Nombre completo",
    email: "Correo electrónico",
    cta: "Registrarse ahora",
    sending: "Redirigiendo...",
    privacy: "Tus datos solo se usarán para enviarte novedades del evento.",
  },
  it: {
    back: "Torna agli eventi",
    backHref: "/it/eventi",
    tagLabels: { networking: "Networking", workshop: "Workshop", talk: "Talk", other: "Evento" } as Record<EventTag, string>,
    formTitle: "Prenota il tuo posto",
    formSub: "Inserisci i tuoi dati e ti reindirizzeremo alla pagina di registrazione.",
    name: "Nome completo",
    email: "Indirizzo email",
    cta: "Registrati ora",
    sending: "Reindirizzamento...",
    privacy: "I tuoi dati saranno usati solo per aggiornarti sull'evento.",
  },
};

function buildRedirectUrl(externalUrl: string, slug: string): string {
  const url = new URL(externalUrl);
  url.searchParams.set("utm_source", "innovation_campus");
  url.searchParams.set("utm_medium", "website");
  url.searchParams.set("utm_campaign", slug);
  url.searchParams.set("utm_content", "event_lead");
  return url.toString();
}

export default function EventCommunityLead({ lang = "en" }: { lang?: "en" | "es" | "it" }) {
  const slug = typeof window !== "undefined"
    ? new URLSearchParams(window.location.search).get("space") ?? ""
    : "";

  const event = eventsDataset.find(e => e.slug === slug);
  const t = ui[lang];

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  if (!event) {
    if (typeof window !== "undefined") window.location.href = t.backHref;
    return null;
  }

  const tr = event.translations[lang];
  const eventDate = new Date(event.date + "T12:00:00");
  const dateStr = eventDate.toLocaleDateString(
    lang === "it" ? "it-IT" : lang === "es" ? "es-ES" : "en-GB",
    { weekday: "long", day: "numeric", month: "long", year: "numeric" }
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Log lead — fire and forget, don't block redirect
    fetch("/api/event-lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, eventSlug: slug, lang }),
    }).catch(() => {});

    // Redirect immediately with UTMs
    window.location.href = buildRedirectUrl(event.externalUrl, slug);
  };

  return (
    <main className="pt-20 bg-background min-h-screen">
      <div className="max-w-5xl mx-auto px-6 pt-8 pb-16">

        {/* Back */}
        <a href={t.backHref} className="inline-flex items-center gap-2 font-body text-sm text-muted-foreground hover:text-primary transition-colors mb-10">
          <ArrowLeft className="w-4 h-4" /> {t.back}
        </a>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

          {/* LEFT — Event card */}
          <div className="rounded-2xl overflow-hidden border border-border bg-card shadow-sm">
            {event.image && event.image !== "/placeholder.svg" && (
              <div className="h-52 overflow-hidden">
                <img src={_s(event.image)} alt={tr.title} className="w-full h-full object-cover" />
              </div>
            )}
            <div className="p-6 space-y-4">
              <span className={`text-white font-body text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${tagColors[event.tag]}`}>
                {t.tagLabels[event.tag]}
              </span>
              <h1 className="font-display font-bold text-xl md:text-2xl text-foreground leading-snug mt-3">
                {tr.title}
              </h1>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {tr.excerpt}
              </p>
              <div className="border-t border-border pt-4 space-y-2">
                <div className="flex items-center gap-2 font-body text-sm text-foreground/80">
                  <Calendar className="w-4 h-4 text-primary shrink-0" />
                  {dateStr}
                </div>
                <div className="flex items-center gap-2 font-body text-sm text-foreground/80">
                  <Clock className="w-4 h-4 text-primary shrink-0" />
                  {event.time}
                </div>
                <div className="flex items-center gap-2 font-body text-sm text-foreground/80">
                  <MapPin className="w-4 h-4 text-primary shrink-0" />
                  {event.location}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT — Form */}
          <div className="lg:sticky lg:top-24">
            <h2 className="font-display font-bold text-2xl text-foreground mb-2">{t.formTitle}</h2>
            <p className="font-body text-sm text-muted-foreground mb-8">{t.formSub}</p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="font-body text-sm font-semibold text-foreground block mb-1.5">{t.name}</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={e => setName(e.target.value)}
                  className="w-full border border-border rounded-xl px-4 py-3 font-body text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary/40"
                />
              </div>
              <div>
                <label className="font-body text-sm font-semibold text-foreground block mb-1.5">{t.email}</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="w-full border border-border rounded-xl px-4 py-3 font-body text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary/40"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-primary text-primary-foreground font-body font-bold text-sm uppercase tracking-widest py-4 rounded-xl hover:bg-primary/90 transition-colors disabled:opacity-60 flex items-center justify-center gap-2"
              >
                {loading ? t.sending : <><span>{t.cta}</span><ArrowRight className="w-4 h-4" /></>}
              </button>

              <p className="font-body text-xs text-muted-foreground text-center">{t.privacy}</p>
            </form>
          </div>

        </div>
      </div>
    </main>
  );
}
