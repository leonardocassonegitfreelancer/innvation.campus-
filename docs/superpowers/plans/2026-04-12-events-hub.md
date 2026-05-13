# Events Hub Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a trilingue (EN/IT/ES) events hub with upcoming/past tabs, static event detail pages, and thank-you conversion pages — all using `<a href>` CTAs for full-reload tracking.

**Architecture:** Shared template components (`EventPageTemplate`, `EventThankYouTemplate`, `EventsHub`) receive props from small static page files. A lightweight dataset (`events.ts`) powers the hub card grid. All routes are hardcoded in `App.tsx` — no dynamic slugs.

**Tech Stack:** React 18, TypeScript, React Router DOM, Tailwind CSS, Framer Motion, react-helmet-async, lucide-react

---

## File Map

**New files — data:**
- `src/data/events.ts` — EventData interface + dataset with all current events

**New files — shared components:**
- `src/components/landing/EventsHub.tsx` — tab UI (upcoming/past) + card grid
- `src/components/landing/EventPageTemplate.tsx` — event detail page template
- `src/components/landing/EventThankYouTemplate.tsx` — thank-you + external CTA template

**Modified files:**
- `src/components/SEOHead.tsx` — add optional `noIndex` boolean prop
- `src/pages/en/Events.tsx` — replace stub with EventsHub
- `src/pages/it/Events.tsx` — replace stub with EventsHub
- `src/pages/es/Events.tsx` — replace stub with EventsHub
- `src/App.tsx` — add all new routes
- `public/sitemap.xml` — add event detail URLs

**New files — event pages (Ladies That UX, Apr 7 2026):**
- `src/pages/en/events/LadiesThatUXApr2026.tsx`
- `src/pages/en/events/LadiesThatUXApr2026ThankYou.tsx`
- `src/pages/it/events/LadiesThatUXApr2026.tsx`
- `src/pages/it/events/LadiesThatUXApr2026ThankYou.tsx`
- `src/pages/es/events/LadiesThatUXApr2026.tsx`
- `src/pages/es/events/LadiesThatUXApr2026ThankYou.tsx`

**New files — event pages (PowerTalks Meetup 1, Apr 15 2026):**
- `src/pages/en/events/PowerTalksApr2026.tsx`
- `src/pages/en/events/PowerTalksApr2026ThankYou.tsx`
- `src/pages/it/events/PowerTalksApr2026.tsx`
- `src/pages/it/events/PowerTalksApr2026ThankYou.tsx`
- `src/pages/es/events/PowerTalksApr2026.tsx`
- `src/pages/es/events/PowerTalksApr2026ThankYou.tsx`

**New files — event pages (SheWins, Apr 16 2026):**
- `src/pages/en/events/SheWinsApr2026.tsx`
- `src/pages/en/events/SheWinsApr2026ThankYou.tsx`
- `src/pages/it/events/SheWinsApr2026.tsx`
- `src/pages/it/events/SheWinsApr2026ThankYou.tsx`
- `src/pages/es/events/SheWinsApr2026.tsx`
- `src/pages/es/events/SheWinsApr2026ThankYou.tsx`

**New files — event pages (Malaga-AI, Apr 23 2026):**
- `src/pages/en/events/MalagaAIApr2026.tsx`
- `src/pages/en/events/MalagaAIApr2026ThankYou.tsx`
- `src/pages/it/events/MalagaAIApr2026.tsx`
- `src/pages/it/events/MalagaAIApr2026ThankYou.tsx`
- `src/pages/es/events/MalagaAIApr2026.tsx`
- `src/pages/es/events/MalagaAIApr2026ThankYou.tsx`

**New files — event pages (PowerTalks Meetup 2, Apr 29 2026):**
- `src/pages/en/events/PowerTalksApr2026B.tsx`
- `src/pages/en/events/PowerTalksApr2026BThankYou.tsx`
- `src/pages/it/events/PowerTalksApr2026B.tsx`
- `src/pages/it/events/PowerTalksApr2026BThankYou.tsx`
- `src/pages/es/events/PowerTalksApr2026B.tsx`
- `src/pages/es/events/PowerTalksApr2026BThankYou.tsx`

---

## Task 1: Create `src/data/events.ts`

**Files:**
- Create: `src/data/events.ts`

- [ ] **Step 1: Create the file**

```typescript
// src/data/events.ts

export type EventTag = "networking" | "workshop" | "talk" | "other";

export interface EventTranslation {
  title: string;
  excerpt: string;
}

export interface EventData {
  slug: string;
  date: string;           // ISO format: "2026-04-07"
  time: string;           // "19:00 - 21:00"
  location: string;       // "Innovation Campus La Malagueta"
  image: string;          // asset path or URL
  tag: EventTag;
  externalUrl: string;    // Meetup/Eventbrite link for thank-you CTA
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
];
```

> **Note:** Replace `/placeholder.svg` with real event images. Download images from the WordPress site and add them to `public/assets/` or `src/assets/`. Replace `externalUrl` values with the actual Meetup/Eventbrite URLs for each event.

- [ ] **Step 2: Verify TypeScript compiles**

Run: `npm run build` (or check for red squiggles in VS Code)
Expected: no TypeScript errors on the new file.

---

## Task 2: Add `noIndex` prop to `SEOHead`

**Files:**
- Modify: `src/components/SEOHead.tsx`

Thank-you pages must not be indexed by Google. SEOHead needs to support this.

- [ ] **Step 1: Add `noIndex` prop**

In `src/components/SEOHead.tsx`, change the interface and component:

```typescript
// Change the interface (line ~6):
interface SEOHeadProps {
  title: string;
  description: string;
  path?: string;
  jsonLd?: object;
  ogImage?: string;
  noIndex?: boolean;   // ADD THIS LINE
}

// Change the function signature (line ~15):
export default function SEOHead({ title, description, path = "/", jsonLd, ogImage, noIndex }: SEOHeadProps) {
```

Then inside the `<Helmet>` block, after the existing `<title>` tag, add:

```typescript
{noIndex && <meta name="robots" content="noindex, nofollow" />}
```

- [ ] **Step 2: Verify it compiles**

Run: `npm run build`
Expected: no errors.

---

## Task 3: Create `EventsHub` component

**Files:**
- Create: `src/components/landing/EventsHub.tsx`

- [ ] **Step 1: Create the file**

```typescript
// src/components/landing/EventsHub.tsx
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";
import { eventsDataset, EventData } from "@/data/events";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SEOHead from "@/components/SEOHead";

const uiText = {
  en: {
    seoTitle: "Community Events",
    seoDescription: "Connect, learn and grow with our vibrant community events at Innovation Campus Málaga.",
    eyebrow: "What's On",
    title: "Community Events",
    upcoming: "Upcoming Events",
    past: "Past Events",
    noUpcoming: "No upcoming events right now. Check back soon.",
    noPast: "No past events yet.",
    discoverMore: "Discover More →",
    badge: "Past",
    tagLabels: { networking: "Networking", workshop: "Workshop", talk: "Talk", other: "Event" },
  },
  it: {
    seoTitle: "Eventi della Comunità",
    seoDescription: "Connettiti, impara e cresci con i nostri vivaci eventi comunitari a Innovation Campus Málaga.",
    eyebrow: "In Programma",
    title: "Eventi della Comunità",
    upcoming: "Prossimi Eventi",
    past: "Eventi Passati",
    noUpcoming: "Nessun evento in programma. Torna presto.",
    noPast: "Nessun evento passato.",
    discoverMore: "Scopri di più →",
    badge: "Passato",
    tagLabels: { networking: "Networking", workshop: "Workshop", talk: "Talk", other: "Evento" },
  },
  es: {
    seoTitle: "Eventos de la Comunidad",
    seoDescription: "Conéctate, aprende y crece con nuestros vibrantes eventos comunitarios en Innovation Campus Málaga.",
    eyebrow: "En Cartelera",
    title: "Eventos de la Comunidad",
    upcoming: "Próximos Eventos",
    past: "Eventos Pasados",
    noUpcoming: "No hay eventos próximos. Vuelve pronto.",
    noPast: "No hay eventos pasados aún.",
    discoverMore: "Descubrir más →",
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

export default function EventsHub() {
  const [tab, setTab] = useState<"upcoming" | "past">("upcoming");
  const { pathname } = useLocation();
  const lang: "en" | "it" | "es" = pathname.startsWith("/it")
    ? "it"
    : pathname.startsWith("/es")
    ? "es"
    : "en";
  const t = uiText[lang];

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const upcoming = eventsDataset.filter((e) => new Date(e.date) >= today);
  const past = eventsDataset.filter((e) => new Date(e.date) < today);
  const displayed = tab === "upcoming" ? upcoming : past;
  const emptyMessage = tab === "upcoming" ? t.noUpcoming : t.noPast;

  return (
    <>
      <SEOHead
        title={t.seoTitle}
        description={t.seoDescription}
        path={getSeoPath(lang)}
      />
      <main className="overflow-x-hidden">
        <Navbar />

        {/* Hero */}
        <section className="pt-32 pb-16 bg-neutral-dark text-center px-6">
          <p className="font-body text-xs uppercase tracking-[0.3em] text-primary mb-4 font-semibold">
            {t.eyebrow}
          </p>
          <h1
            className="font-display font-bold text-primary-foreground"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
          >
            {t.title}
          </h1>
        </section>

        {/* Tab bar */}
        <section className="bg-background border-b border-border sticky top-16 z-30">
          <div className="max-w-6xl mx-auto px-6 flex gap-2 py-4">
            <button
              onClick={() => setTab("upcoming")}
              className={`font-body font-bold text-sm uppercase tracking-widest px-6 py-3 rounded-full transition-colors ${
                tab === "upcoming"
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {t.upcoming}
            </button>
            <button
              onClick={() => setTab("past")}
              className={`font-body font-bold text-sm uppercase tracking-widest px-6 py-3 rounded-full transition-colors ${
                tab === "past"
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
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                  {displayed.map((event: EventData) => {
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
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
```

- [ ] **Step 2: Verify TypeScript compiles**

Run: `npm run build`
Expected: no errors.

---

## Task 4: Update existing Events hub pages

**Files:**
- Modify: `src/pages/en/Events.tsx`
- Modify: `src/pages/it/Events.tsx`
- Modify: `src/pages/es/Events.tsx`

- [ ] **Step 1: Replace `src/pages/en/Events.tsx`**

```typescript
import EventsHub from "@/components/landing/EventsHub";

export default function Events() {
  return <EventsHub />;
}
```

- [ ] **Step 2: Replace `src/pages/it/Events.tsx`**

```typescript
import EventsHub from "@/components/landing/EventsHub";

export default function EventsIT() {
  return <EventsHub />;
}
```

- [ ] **Step 3: Replace `src/pages/es/Events.tsx`**

```typescript
import EventsHub from "@/components/landing/EventsHub";

export default function EventsES() {
  return <EventsHub />;
}
```

- [ ] **Step 4: Verify in browser**

Start dev server: `npm run dev`
Open `http://localhost:8080/en/events` — verify:
- Hero section renders
- Two tab buttons visible ("Upcoming Events" / "Past Events")
- Cards appear for events whose `date >= today`
- Clicking "Past Events" shows events with `date < today` and the "Past" badge
- "Discover More →" link points to `/en/events/[slug]` (will 404 until Task 7 — that's OK)

- [ ] **Step 5: Commit**

```bash
git add src/data/events.ts src/components/landing/EventsHub.tsx src/pages/en/Events.tsx src/pages/it/Events.tsx src/pages/es/Events.tsx src/components/SEOHead.tsx
git commit -m "feat: add events dataset and hub with upcoming/past tabs"
```

---

## Task 5: Create `EventPageTemplate` component

**Files:**
- Create: `src/components/landing/EventPageTemplate.tsx`

- [ ] **Step 1: Create the file**

```typescript
// src/components/landing/EventPageTemplate.tsx
import { ArrowLeft, Calendar, Clock, MapPin, User } from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SEOHead from "@/components/SEOHead";

export interface ScheduleItem {
  time: string;
  description: string;
}

export interface EventPageProps {
  seo: {
    title: string;
    description: string;
    path: string;
  };
  hero: {
    image: string;
    tag: string;
    title: string;
  };
  details: {
    date: string;
    time: string;
    location: string;
    address: string;
    organizer: string;
  };
  description: string;
  bullets: string[];
  schedule: ScheduleItem[];
  cta: {
    href: string;      // points to /lang/events/slug/thank-you
    label: string;     // "Reserve Your Spot" / "Prenota il tuo posto" / "Reserva tu plaza"
  };
  backLink: {
    href: string;      // points to /lang/events
    label: string;     // "Back to all events" etc.
  };
  detailsLabel: {
    eventDetails: string;
    date: string;
    time: string;
    location: string;
    organizer: string;
    schedule: string;
  };
}

export default function EventPageTemplate({
  seo,
  hero,
  details,
  description,
  bullets,
  schedule,
  cta,
  backLink,
  detailsLabel,
}: EventPageProps) {
  return (
    <>
      <SEOHead title={seo.title} description={seo.description} path={seo.path} />
      <main className="overflow-x-hidden">
        <Navbar />

        {/* Hero */}
        <section className="relative h-[55vh] min-h-[400px] flex items-end">
          <img
            src={hero.image}
            alt={hero.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-dark via-neutral-dark/60 to-transparent" />
          <div className="relative z-10 max-w-5xl mx-auto px-6 pb-12 w-full">
            <a
              href={backLink.href}
              className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm font-body mb-5 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> {backLink.label}
            </a>
            <span className="inline-block font-body text-xs font-bold uppercase tracking-widest text-primary bg-background px-3 py-1.5 rounded-full mb-4">
              {hero.tag}
            </span>
            <h1
              className="font-display font-bold text-primary-foreground leading-tight max-w-3xl"
              style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}
            >
              {hero.title}
            </h1>
          </div>
        </section>

        {/* Content + Sidebar */}
        <section className="py-16 bg-background">
          <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Main content */}
            <div className="lg:col-span-2">
              <p className="font-body text-foreground/80 text-lg leading-relaxed mb-8">
                {description}
              </p>

              {bullets.length > 0 && (
                <ul className="space-y-3 mb-10">
                  {bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-3 font-body text-foreground/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              )}

              {/* Schedule */}
              <h2 className="font-display font-bold text-2xl text-foreground mb-6">
                {detailsLabel.schedule}
              </h2>
              <div className="space-y-4 mb-12">
                {schedule.map((item, i) => (
                  <div key={i} className="flex gap-4 items-start border-l-2 border-primary/20 pl-4">
                    <span className="font-body font-bold text-sm text-primary w-16 shrink-0 pt-0.5">
                      {item.time}
                    </span>
                    <span className="font-body text-foreground/80">{item.description}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <a
                href={cta.href}
                className="inline-flex items-center gap-3 font-body text-sm uppercase tracking-[0.2em] bg-primary text-primary-foreground px-10 py-4 hover:bg-primary/90 transition-colors duration-300"
              >
                {cta.label}
              </a>
            </div>

            {/* Sidebar */}
            <div className="bg-muted/50 border border-border rounded-2xl p-6 h-fit">
              <h3 className="font-display font-bold text-lg text-foreground mb-5">
                {detailsLabel.eventDetails}
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Calendar className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="font-body text-xs text-muted-foreground uppercase tracking-wide mb-0.5">
                      {detailsLabel.date}
                    </p>
                    <p className="font-body text-sm text-foreground">{details.date}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="font-body text-xs text-muted-foreground uppercase tracking-wide mb-0.5">
                      {detailsLabel.time}
                    </p>
                    <p className="font-body text-sm text-foreground">{details.time}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="font-body text-xs text-muted-foreground uppercase tracking-wide mb-0.5">
                      {detailsLabel.location}
                    </p>
                    <p className="font-body text-sm text-foreground">{details.location}</p>
                    <p className="font-body text-xs text-muted-foreground mt-0.5">{details.address}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <User className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="font-body text-xs text-muted-foreground uppercase tracking-wide mb-0.5">
                      {detailsLabel.organizer}
                    </p>
                    <p className="font-body text-sm text-foreground">{details.organizer}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
```

- [ ] **Step 2: Verify it compiles**

Run: `npm run build`
Expected: no TypeScript errors.

---

## Task 6: Create `EventThankYouTemplate` component

**Files:**
- Create: `src/components/landing/EventThankYouTemplate.tsx`

- [ ] **Step 1: Create the file**

```typescript
// src/components/landing/EventThankYouTemplate.tsx
import { CheckCircle2, Calendar, MapPin } from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SEOHead from "@/components/SEOHead";

export interface EventThankYouProps {
  seo: {
    title: string;
    description: string;
    path: string;
  };
  lang: "en" | "it" | "es";
  event: {
    title: string;
    date: string;         // "April 7, 2026 · 19:00 - 21:00"
    location: string;
    externalUrl: string;  // Meetup/Eventbrite URL
  };
}

const ui = {
  en: {
    heading: "You're almost there!",
    subtitle: "We've registered your interest.",
    message: "Complete your registration on the event page to secure your spot.",
    cta: "Complete Registration →",
    dateLabel: "Date",
    locationLabel: "Location",
    newsletterHeading: "Stay updated",
    newsletterSubtitle: "Be the first to know about upcoming events.",
    // Newsletter form placeholder — integrate Mailchimp/Brevo here when ready
  },
  it: {
    heading: "Ci siamo quasi!",
    subtitle: "Abbiamo registrato il tuo interesse.",
    message: "Completa la registrazione sulla pagina dell'evento per assicurarti il posto.",
    cta: "Completa la registrazione →",
    dateLabel: "Data",
    locationLabel: "Sede",
    newsletterHeading: "Resta aggiornato",
    newsletterSubtitle: "Sii il primo a sapere dei prossimi eventi.",
  },
  es: {
    heading: "¡Ya casi está!",
    subtitle: "Hemos registrado tu interés.",
    message: "Completa tu registro en la página del evento para asegurar tu lugar.",
    cta: "Completar registro →",
    dateLabel: "Fecha",
    locationLabel: "Lugar",
    newsletterHeading: "Mantente informado",
    newsletterSubtitle: "Sé el primero en conocer los próximos eventos.",
  },
};

export default function EventThankYouTemplate({ seo, lang, event }: EventThankYouProps) {
  const t = ui[lang];
  return (
    <>
      <SEOHead
        title={seo.title}
        description={seo.description}
        path={seo.path}
        noIndex
      />
      <main className="overflow-x-hidden">
        <Navbar />

        <section className="min-h-[75vh] flex items-center justify-center py-24 bg-background">
          <div className="max-w-lg mx-auto px-6 text-center">

            {/* Check icon */}
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-8 h-8 text-primary" />
            </div>

            <h1 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-3">
              {t.heading}
            </h1>
            <p className="font-body text-muted-foreground text-lg mb-8">{t.subtitle}</p>

            {/* Event summary card */}
            <div className="bg-muted/50 border border-border rounded-2xl p-6 mb-8 text-left">
              <h2 className="font-display font-bold text-lg text-foreground mb-4 leading-tight">
                {event.title}
              </h2>
              <div className="space-y-3">
                <div className="flex items-center gap-3 font-body text-sm text-foreground/80">
                  <Calendar className="w-4 h-4 text-primary shrink-0" />
                  {event.date}
                </div>
                <div className="flex items-center gap-3 font-body text-sm text-foreground/80">
                  <MapPin className="w-4 h-4 text-primary shrink-0" />
                  {event.location}
                </div>
              </div>
            </div>

            <p className="font-body text-muted-foreground text-sm mb-6">{t.message}</p>

            {/* External CTA — full reload intentional for tracking */}
            <a
              href={event.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 font-body text-sm uppercase tracking-[0.2em] bg-primary text-primary-foreground px-10 py-4 hover:bg-primary/90 transition-colors duration-300"
            >
              {t.cta}
            </a>

            {/* Newsletter placeholder — integrate Mailchimp/Brevo here */}
            <div className="mt-16 pt-10 border-t border-border">
              <p className="font-body font-bold text-foreground mb-1">{t.newsletterHeading}</p>
              <p className="font-body text-sm text-muted-foreground">{t.newsletterSubtitle}</p>
              {/* TODO: add newsletter embed */}
            </div>

          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
```

- [ ] **Step 2: Verify it compiles**

Run: `npm run build`
Expected: no TypeScript errors.

---

## Task 7: Create static pages for "Ladies That UX Málaga" (Apr 7, 2026)

**Files:**
- Create: `src/pages/en/events/LadiesThatUXApr2026.tsx`
- Create: `src/pages/en/events/LadiesThatUXApr2026ThankYou.tsx`
- Create: `src/pages/it/events/LadiesThatUXApr2026.tsx`
- Create: `src/pages/it/events/LadiesThatUXApr2026ThankYou.tsx`
- Create: `src/pages/es/events/LadiesThatUXApr2026.tsx`
- Create: `src/pages/es/events/LadiesThatUXApr2026ThankYou.tsx`
- Modify: `src/App.tsx` (add 6 routes)

- [ ] **Step 1: Create EN detail page**

```typescript
// src/pages/en/events/LadiesThatUXApr2026.tsx
import EventPageTemplate from "@/components/landing/EventPageTemplate";

export default function LadiesThatUXApr2026EN() {
  return (
    <EventPageTemplate
      seo={{
        title: "Ladies That UX Málaga: Inclusive Digital Design & Accessibility",
        description: "Join Ladies That UX Málaga for an evening dedicated to inclusive digital design and accessibility with speaker Irene Puertas. April 7, 2026.",
        path: "/en/events/ladies-that-ux-malaga-apr-2026",
      }}
      hero={{
        image: "/placeholder.svg",
        tag: "Workshop",
        title: "Ladies That UX Málaga: Inclusive Digital Design & Accessibility",
      }}
      details={{
        date: "April 7, 2026",
        time: "19:00 - 21:00",
        location: "Innovation Campus La Malagueta",
        address: "Calle Puerto 14, 29016 Málaga",
        organizer: "Irene Puertas",
      }}
      description="Join Ladies That UX Málaga for an inspiring evening dedicated to inclusive digital design and accessibility. Speaker Irene Puertas will guide us through principles and practices that make digital experiences welcoming to everyone — from visual impairments to motor difficulties and cognitive differences."
      bullets={[
        "Understanding WCAG accessibility guidelines in practice",
        "Inclusive design patterns for real-world products",
        "Case studies and hands-on examples",
      ]}
      schedule={[
        { time: "19:00", description: "Walk-in & welcome networking" },
        { time: "19:30", description: "Talk: Inclusive Digital Design & Accessibility" },
        { time: "20:30", description: "Q&A session with Irene Puertas" },
        { time: "21:00", description: "End of event" },
      ]}
      cta={{
        href: "/en/events/ladies-that-ux-malaga-apr-2026/thank-you",
        label: "Reserve Your Spot",
      }}
      backLink={{
        href: "/en/events",
        label: "Back to all events",
      }}
      detailsLabel={{
        eventDetails: "Event Details",
        date: "Date",
        time: "Time",
        location: "Location",
        organizer: "Speaker",
        schedule: "Schedule",
      }}
    />
  );
}
```

- [ ] **Step 2: Create EN thank-you page**

```typescript
// src/pages/en/events/LadiesThatUXApr2026ThankYou.tsx
import EventThankYouTemplate from "@/components/landing/EventThankYouTemplate";

export default function LadiesThatUXApr2026ThankYouEN() {
  return (
    <EventThankYouTemplate
      seo={{
        title: "Thank You — Ladies That UX Málaga",
        description: "Thank you for your interest in Ladies That UX Málaga April 2026.",
        path: "/en/events/ladies-that-ux-malaga-apr-2026/thank-you",
      }}
      lang="en"
      event={{
        title: "Ladies That UX Málaga: Inclusive Digital Design & Accessibility",
        date: "April 7, 2026 · 19:00 - 21:00",
        location: "Innovation Campus La Malagueta",
        externalUrl: "https://www.meetup.com/ladies-that-ux-malaga/",
      }}
    />
  );
}
```

- [ ] **Step 3: Create IT detail page**

```typescript
// src/pages/it/events/LadiesThatUXApr2026.tsx
import EventPageTemplate from "@/components/landing/EventPageTemplate";

export default function LadiesThatUXApr2026IT() {
  return (
    <EventPageTemplate
      seo={{
        title: "Ladies That UX Málaga: Design Digitale Inclusivo & Accessibilità",
        description: "Unisciti a Ladies That UX Málaga per una serata dedicata al design digitale inclusivo e all'accessibilità con la speaker Irene Puertas. 7 Aprile 2026.",
        path: "/it/eventi/ladies-that-ux-malaga-apr-2026",
      }}
      hero={{
        image: "/placeholder.svg",
        tag: "Workshop",
        title: "Ladies That UX Málaga: Design Digitale Inclusivo & Accessibilità",
      }}
      details={{
        date: "7 Aprile 2026",
        time: "19:00 - 21:00",
        location: "Innovation Campus La Malagueta",
        address: "Calle Puerto 14, 29016 Málaga",
        organizer: "Irene Puertas",
      }}
      description="Unisciti a Ladies That UX Málaga per una serata dedicata al design digitale inclusivo e all'accessibilità. La speaker Irene Puertas ci guiderà attraverso i principi e le pratiche che rendono le esperienze digitali accessibili a tutti."
      bullets={[
        "Le linee guida WCAG applicate nella pratica",
        "Pattern di design inclusivo per prodotti reali",
        "Case study ed esempi pratici",
      ]}
      schedule={[
        { time: "19:00", description: "Walk-in e networking di benvenuto" },
        { time: "19:30", description: "Talk: Design Digitale Inclusivo & Accessibilità" },
        { time: "20:30", description: "Q&A con Irene Puertas" },
        { time: "21:00", description: "Fine evento" },
      ]}
      cta={{
        href: "/it/eventi/ladies-that-ux-malaga-apr-2026/grazie",
        label: "Prenota il tuo posto",
      }}
      backLink={{
        href: "/it/eventi",
        label: "Torna a tutti gli eventi",
      }}
      detailsLabel={{
        eventDetails: "Dettagli Evento",
        date: "Data",
        time: "Orario",
        location: "Sede",
        organizer: "Speaker",
        schedule: "Programma",
      }}
    />
  );
}
```

- [ ] **Step 4: Create IT thank-you page**

```typescript
// src/pages/it/events/LadiesThatUXApr2026ThankYou.tsx
import EventThankYouTemplate from "@/components/landing/EventThankYouTemplate";

export default function LadiesThatUXApr2026ThankYouIT() {
  return (
    <EventThankYouTemplate
      seo={{
        title: "Grazie — Ladies That UX Málaga",
        description: "Grazie per il tuo interesse a Ladies That UX Málaga Aprile 2026.",
        path: "/it/eventi/ladies-that-ux-malaga-apr-2026/grazie",
      }}
      lang="it"
      event={{
        title: "Ladies That UX Málaga: Design Digitale Inclusivo & Accessibilità",
        date: "7 Aprile 2026 · 19:00 - 21:00",
        location: "Innovation Campus La Malagueta",
        externalUrl: "https://www.meetup.com/ladies-that-ux-malaga/",
      }}
    />
  );
}
```

- [ ] **Step 5: Create ES detail page**

```typescript
// src/pages/es/events/LadiesThatUXApr2026.tsx
import EventPageTemplate from "@/components/landing/EventPageTemplate";

export default function LadiesThatUXApr2026ES() {
  return (
    <EventPageTemplate
      seo={{
        title: "Ladies That UX Málaga: Diseño Digital Inclusivo & Accesibilidad",
        description: "Únete a Ladies That UX Málaga para una velada dedicada al diseño digital inclusivo y la accesibilidad con la ponente Irene Puertas. 7 de Abril de 2026.",
        path: "/es/eventos/ladies-that-ux-malaga-apr-2026",
      }}
      hero={{
        image: "/placeholder.svg",
        tag: "Taller",
        title: "Ladies That UX Málaga: Diseño Digital Inclusivo & Accesibilidad",
      }}
      details={{
        date: "7 de Abril de 2026",
        time: "19:00 - 21:00",
        location: "Innovation Campus La Malagueta",
        address: "Calle Puerto 14, 29016 Málaga",
        organizer: "Irene Puertas",
      }}
      description="Únete a Ladies That UX Málaga para una inspiradora velada dedicada al diseño digital inclusivo y la accesibilidad. La ponente Irene Puertas nos guiará a través de los principios y prácticas que hacen que las experiencias digitales sean accesibles para todos."
      bullets={[
        "Pautas de accesibilidad WCAG aplicadas en la práctica",
        "Patrones de diseño inclusivo para productos reales",
        "Casos de estudio y ejemplos prácticos",
      ]}
      schedule={[
        { time: "19:00", description: "Walk-in y networking de bienvenida" },
        { time: "19:30", description: "Charla: Diseño Digital Inclusivo & Accesibilidad" },
        { time: "20:30", description: "Preguntas y respuestas con Irene Puertas" },
        { time: "21:00", description: "Fin del evento" },
      ]}
      cta={{
        href: "/es/eventos/ladies-that-ux-malaga-apr-2026/gracias",
        label: "Reserva tu plaza",
      }}
      backLink={{
        href: "/es/eventos",
        label: "Volver a todos los eventos",
      }}
      detailsLabel={{
        eventDetails: "Detalles del Evento",
        date: "Fecha",
        time: "Horario",
        location: "Lugar",
        organizer: "Ponente",
        schedule: "Programa",
      }}
    />
  );
}
```

- [ ] **Step 6: Create ES thank-you page**

```typescript
// src/pages/es/events/LadiesThatUXApr2026ThankYou.tsx
import EventThankYouTemplate from "@/components/landing/EventThankYouTemplate";

export default function LadiesThatUXApr2026ThankYouES() {
  return (
    <EventThankYouTemplate
      seo={{
        title: "Gracias — Ladies That UX Málaga",
        description: "Gracias por tu interés en Ladies That UX Málaga Abril 2026.",
        path: "/es/eventos/ladies-that-ux-malaga-apr-2026/gracias",
      }}
      lang="es"
      event={{
        title: "Ladies That UX Málaga: Diseño Digital Inclusivo & Accesibilidad",
        date: "7 de Abril de 2026 · 19:00 - 21:00",
        location: "Innovation Campus La Malagueta",
        externalUrl: "https://www.meetup.com/ladies-that-ux-malaga/",
      }}
    />
  );
}
```

- [ ] **Step 7: Add routes to `App.tsx`**

Add imports at the top of `src/App.tsx` in the EN/IT/ES sections:

```typescript
// EN events
import LadiesThatUXApr2026EN from "./pages/en/events/LadiesThatUXApr2026";
import LadiesThatUXApr2026ThankYouEN from "./pages/en/events/LadiesThatUXApr2026ThankYou";

// IT events
import LadiesThatUXApr2026IT from "./pages/it/events/LadiesThatUXApr2026";
import LadiesThatUXApr2026ThankYouIT from "./pages/it/events/LadiesThatUXApr2026ThankYou";

// ES events
import LadiesThatUXApr2026ES from "./pages/es/events/LadiesThatUXApr2026";
import LadiesThatUXApr2026ThankYouES from "./pages/es/events/LadiesThatUXApr2026ThankYou";
```

Add routes inside `<Routes>` in `src/App.tsx`:

```typescript
{/* EN event pages */}
<Route path="/en/events/ladies-that-ux-malaga-apr-2026" element={<LadiesThatUXApr2026EN />} />
<Route path="/en/events/ladies-that-ux-malaga-apr-2026/thank-you" element={<LadiesThatUXApr2026ThankYouEN />} />

{/* IT event pages */}
<Route path="/it/eventi/ladies-that-ux-malaga-apr-2026" element={<LadiesThatUXApr2026IT />} />
<Route path="/it/eventi/ladies-that-ux-malaga-apr-2026/grazie" element={<LadiesThatUXApr2026ThankYouIT />} />

{/* ES event pages */}
<Route path="/es/eventos/ladies-that-ux-malaga-apr-2026" element={<LadiesThatUXApr2026ES />} />
<Route path="/es/eventos/ladies-that-ux-malaga-apr-2026/gracias" element={<LadiesThatUXApr2026ThankYouES />} />
```

- [ ] **Step 8: Verify in browser**

Open `http://localhost:8080/en/events` — click "Discover More →" on Ladies That UX card — verify:
- Detail page renders with hero, schedule, sidebar
- "Reserve Your Spot" button leads to `/en/events/ladies-that-ux-malaga-apr-2026/thank-you`
- Thank-you page shows confirmation + external CTA button
- `noindex` meta tag present in page source of thank-you page

- [ ] **Step 9: Commit**

```bash
git add src/pages/en/events/ src/pages/it/events/ src/pages/es/events/ src/App.tsx
git commit -m "feat: add Ladies That UX April 2026 event pages (EN/IT/ES)"
```

---

## Task 8: Create pages for remaining 4 events

**Pattern:** Copy the structure from Task 7 exactly. For each event, create 6 files (EN/IT/ES detail + thank-you) and add 6 routes to `App.tsx`.

### Event: PowerTalks Meetup 1 — Apr 15, 2026 (slug: `powertalks-malaga-apr-2026`)

- [ ] **Step 1: Create 6 files following Task 7 pattern**

Key data to substitute:
- slug: `powertalks-malaga-apr-2026`
- EN title: `PowerTalks Málaga Meetup April 2026`
- IT title: `PowerTalks Málaga Meetup Aprile 2026`
- ES title: `PowerTalks Málaga Meetup Abril 2026`
- date EN: `April 15, 2026` / IT: `15 Aprile 2026` / ES: `15 de Abril de 2026`
- time: `19:00 - 21:00`
- location: `Innovation Campus La Malagueta`
- address: `Calle Puerto 14, 29016 Málaga`
- organizer: `PowerTalks Málaga`
- tag: `Talk` / `Talk` / `Charla`
- EN description: `PowerTalks Málaga is a Toastmasters club dedicated to improving English public speaking skills. Join us for a night of prepared speeches, impromptu speaking rounds, and constructive feedback in a supportive environment.`
- IT description: `PowerTalks Málaga è un club Toastmasters dedicato al miglioramento del public speaking in inglese. Unisciti a noi per una serata di discorsi preparati, improvvisazione e feedback costruttivo in un ambiente di supporto.`
- ES description: `PowerTalks Málaga es un club Toastmasters dedicado a mejorar las habilidades de oratoria en inglés. Únete a nosotros para una noche de discursos preparados, improvisación y retroalimentación constructiva en un entorno de apoyo.`
- EN bullets: `["Prepared speeches by club members", "Table Topics — impromptu 1-2 min speeches", "Evaluations and feedback session"]`
- schedule EN: `[{time:"19:00",description:"Doors open & welcome"},{time:"19:30",description:"Prepared speeches"},{time:"20:15",description:"Table Topics round"},{time:"20:45",description:"Evaluations & feedback"},{time:"21:00",description:"End of event"}]`
- EN cta href: `/en/events/powertalks-malaga-apr-2026/thank-you`
- IT cta href: `/it/eventi/powertalks-malaga-apr-2026/grazie`
- ES cta href: `/es/eventos/powertalks-malaga-apr-2026/gracias`
- externalUrl: `https://www.meetup.com/powertalks-malaga/`

- [ ] **Step 2: Add 6 routes to `App.tsx`**

```typescript
<Route path="/en/events/powertalks-malaga-apr-2026" element={<PowerTalksApr2026EN />} />
<Route path="/en/events/powertalks-malaga-apr-2026/thank-you" element={<PowerTalksApr2026ThankYouEN />} />
<Route path="/it/eventi/powertalks-malaga-apr-2026" element={<PowerTalksApr2026IT />} />
<Route path="/it/eventi/powertalks-malaga-apr-2026/grazie" element={<PowerTalksApr2026ThankYouIT />} />
<Route path="/es/eventos/powertalks-malaga-apr-2026" element={<PowerTalksApr2026ES />} />
<Route path="/es/eventos/powertalks-malaga-apr-2026/gracias" element={<PowerTalksApr2026ThankYouES />} />
```

- [ ] **Step 3: Commit**

```bash
git commit -m "feat: add PowerTalks Meetup 1 April 2026 event pages (EN/IT/ES)"
```

---

### Event: SheWins Málaga — Apr 16, 2026 (slug: `shewins-malaga-apr-2026`)

- [ ] **Step 1: Create 6 files following Task 7 pattern**

Key data:
- slug: `shewins-malaga-apr-2026`
- EN title: `SheWins Málaga: The Simple Rules of Money`
- IT title: `SheWins Málaga: Le Semplici Regole del Denaro`
- ES title: `SheWins Málaga: Las Reglas Simples del Dinero`
- date EN: `April 16, 2026` / IT: `16 Aprile 2026` / ES: `16 de Abril de 2026`
- time: `18:30 - 20:00`
- location: `Innovation Campus Málaga Palace`
- address: `Calle Alamos 7, 29012 Málaga`
- organizer: `Alice Dickinson — Chartered Accountant`
- tag: `Workshop` / `Workshop` / `Taller`
- EN description: `SheWins Málaga presents The Simple Rules of Money — a personal finance workshop with Alice Dickinson, Chartered Accountant with over 10 years of experience. Walk away with clear, actionable rules for managing your finances with confidence.`
- IT description: `SheWins Málaga presenta Le Semplici Regole del Denaro — un workshop di finanza personale con Alice Dickinson, Dottore Commercialista con oltre 10 anni di esperienza. Impara regole chiare e pratiche per gestire le tue finanze con sicurezza.`
- ES description: `SheWins Málaga presenta Las Reglas Simples del Dinero — un taller de finanzas personales con Alice Dickinson, Contable Colegiada con más de 10 años de experiencia. Aprende reglas claras y prácticas para gestionar tus finanzas con confianza.`
- EN bullets: `["How to build a personal budget that actually works", "The basics of saving and investing for beginners", "Understanding your relationship with money"]`
- schedule EN: `[{time:"18:30",description:"Walk-in & networking"},{time:"19:00",description:"Workshop: The Simple Rules of Money"},{time:"20:00",description:"Q&A and open networking"},{time:"20:30",description:"End of event"}]`
- EN cta href: `/en/events/shewins-malaga-apr-2026/thank-you`
- IT cta href: `/it/eventi/shewins-malaga-apr-2026/grazie`
- ES cta href: `/es/eventos/shewins-malaga-apr-2026/gracias`
- externalUrl: `https://www.meetup.com/shewins-malaga/`

- [ ] **Step 2: Add 6 routes to `App.tsx`**

```typescript
<Route path="/en/events/shewins-malaga-apr-2026" element={<SheWinsApr2026EN />} />
<Route path="/en/events/shewins-malaga-apr-2026/thank-you" element={<SheWinsApr2026ThankYouEN />} />
<Route path="/it/eventi/shewins-malaga-apr-2026" element={<SheWinsApr2026IT />} />
<Route path="/it/eventi/shewins-malaga-apr-2026/grazie" element={<SheWinsApr2026ThankYouIT />} />
<Route path="/es/eventos/shewins-malaga-apr-2026" element={<SheWinsApr2026ES />} />
<Route path="/es/eventos/shewins-malaga-apr-2026/gracias" element={<SheWinsApr2026ThankYouES />} />
```

- [ ] **Step 3: Commit**

```bash
git commit -m "feat: add SheWins April 2026 event pages (EN/IT/ES)"
```

---

### Event: Malaga-AI Networking Night — Apr 23, 2026 (slug: `malaga-ai-networking-apr-2026`)

- [ ] **Step 1: Create 6 files following Task 7 pattern**

Key data:
- slug: `malaga-ai-networking-apr-2026`
- EN title: `Malaga-AI Networking Night April 2026`
- IT title: `Malaga-AI Networking Night Aprile 2026`
- ES title: `Malaga-AI Networking Night Abril 2026`
- date EN: `April 23, 2026` / IT: `23 Aprile 2026` / ES: `23 de Abril de 2026`
- time: `18:30 - 20:30`
- location: `Innovation Campus La Malagueta`
- address: `Calle Puerto 14, 29016 Málaga`
- organizer: `Malaga-AI Community`
- tag: `Networking` / `Networking` / `Networking`
- EN description: `Connect with Málaga's growing AI community. Whether you're building AI products, researching machine learning, or simply curious about what's happening in the field — this is your night. Expect genuine conversations, new connections, and a few interesting demos.`
- IT description: `Connettiti con la crescente community AI di Málaga. Che tu stia costruendo prodotti AI, facendo ricerca sul machine learning o semplicemente curioso di cosa sta succedendo nel settore — questa è la tua serata. Aspettati conversazioni genuine, nuove connessioni e qualche demo interessante.`
- ES description: `Conéctate con la creciente comunidad de IA de Málaga. Ya seas creador de productos de IA, investigador de machine learning o simplemente curioso sobre lo que está pasando en el sector — esta es tu noche. Espera conversaciones genuinas, nuevas conexiones y algunas demos interesantes.`
- EN bullets: `["Open networking with AI builders and researchers", "Short demos and project showcases", "No agenda — just good conversations"]`
- schedule EN: `[{time:"18:30",description:"Doors open — free networking"},{time:"19:15",description:"Lightning demos & project showcases"},{time:"20:00",description:"Open networking continues"},{time:"20:30",description:"End of event"}]`
- EN cta href: `/en/events/malaga-ai-networking-apr-2026/thank-you`
- IT cta href: `/it/eventi/malaga-ai-networking-apr-2026/grazie`
- ES cta href: `/es/eventos/malaga-ai-networking-apr-2026/gracias`
- externalUrl: `https://www.meetup.com/malaga-ai/`

- [ ] **Step 2: Add 6 routes to `App.tsx`**

```typescript
<Route path="/en/events/malaga-ai-networking-apr-2026" element={<MalagaAIApr2026EN />} />
<Route path="/en/events/malaga-ai-networking-apr-2026/thank-you" element={<MalagaAIApr2026ThankYouEN />} />
<Route path="/it/eventi/malaga-ai-networking-apr-2026" element={<MalagaAIApr2026IT />} />
<Route path="/it/eventi/malaga-ai-networking-apr-2026/grazie" element={<MalagaAIApr2026ThankYouIT />} />
<Route path="/es/eventos/malaga-ai-networking-apr-2026" element={<MalagaAIApr2026ES />} />
<Route path="/es/eventos/malaga-ai-networking-apr-2026/gracias" element={<MalagaAIApr2026ThankYouES />} />
```

- [ ] **Step 3: Commit**

```bash
git commit -m "feat: add Malaga-AI Networking Night April 2026 event pages (EN/IT/ES)"
```

---

### Event: PowerTalks Meetup 2 — Apr 29, 2026 (slug: `powertalks-malaga-apr-2026-b`)

- [ ] **Step 1: Create 6 files following Task 7 pattern**

Key data:
- slug: `powertalks-malaga-apr-2026-b`
- EN title: `PowerTalks Málaga Second Meetup April 2026`
- IT title: `PowerTalks Málaga Secondo Meetup Aprile 2026`
- ES title: `PowerTalks Málaga Segundo Meetup Abril 2026`
- date EN: `April 29, 2026` / IT: `29 Aprile 2026` / ES: `29 de Abril de 2026`
- time: `19:00 - 20:30`
- location: `Innovation Campus La Malagueta`
- address: `Calle Puerto 14, 29016 Málaga`
- organizer: `PowerTalks Málaga`
- tag: `Talk` / `Talk` / `Charla`
- EN description: `The second PowerTalks Málaga session of April — same great Toastmasters format for developing English public speaking skills. New speakers, new topics, same supportive community.`
- IT description: `La seconda sessione di PowerTalks Málaga di aprile — stesso ottimo formato Toastmasters per sviluppare le capacità di public speaking in inglese. Nuovi speaker, nuovi argomenti, stessa community di supporto.`
- ES description: `La segunda sesión de PowerTalks Málaga de abril — el mismo gran formato Toastmasters para desarrollar habilidades de oratoria en inglés. Nuevos ponentes, nuevos temas, la misma comunidad de apoyo.`
- EN bullets: `["Prepared speeches by club members", "Table Topics — impromptu 1-2 min speeches", "Evaluations and feedback session"]`
- schedule EN: `[{time:"19:00",description:"Doors open & welcome"},{time:"19:30",description:"Prepared speeches"},{time:"20:00",description:"Table Topics round"},{time:"20:15",description:"Evaluations & feedback"},{time:"20:30",description:"End of event"}]`
- EN cta href: `/en/events/powertalks-malaga-apr-2026-b/thank-you`
- IT cta href: `/it/eventi/powertalks-malaga-apr-2026-b/grazie`
- ES cta href: `/es/eventos/powertalks-malaga-apr-2026-b/gracias`
- externalUrl: `https://www.meetup.com/powertalks-malaga/`

- [ ] **Step 2: Add 6 routes to `App.tsx`**

```typescript
<Route path="/en/events/powertalks-malaga-apr-2026-b" element={<PowerTalksApr2026BEN />} />
<Route path="/en/events/powertalks-malaga-apr-2026-b/thank-you" element={<PowerTalksApr2026BThankYouEN />} />
<Route path="/it/eventi/powertalks-malaga-apr-2026-b" element={<PowerTalksApr2026BIT />} />
<Route path="/it/eventi/powertalks-malaga-apr-2026-b/grazie" element={<PowerTalksApr2026BThankYouIT />} />
<Route path="/es/eventos/powertalks-malaga-apr-2026-b" element={<PowerTalksApr2026BES />} />
<Route path="/es/eventos/powertalks-malaga-apr-2026-b/gracias" element={<PowerTalksApr2026BThankYouES />} />
```

- [ ] **Step 3: Commit**

```bash
git commit -m "feat: add PowerTalks Meetup 2 April 2026 event pages (EN/IT/ES)"
```

---

## Task 9: Update `sitemap.xml`

**Files:**
- Modify: `public/sitemap.xml`

Add entries for all 5 event detail pages (EN/IT/ES). Thank-you pages are noindex — do NOT add them.

- [ ] **Step 1: Add event hub URLs**

Add after the existing hub entries:

```xml
<!-- EVENTS HUB -->
<url>
  <loc>https://innovationcampus.biz/en/events</loc>
  <xhtml:link rel="alternate" hreflang="en" href="https://innovationcampus.biz/en/events"/>
  <xhtml:link rel="alternate" hreflang="es" href="https://innovationcampus.biz/es/eventos"/>
  <xhtml:link rel="alternate" hreflang="it" href="https://innovationcampus.biz/it/eventi"/>
  <changefreq>weekly</changefreq>
  <priority>0.8</priority>
</url>
<url>
  <loc>https://innovationcampus.biz/es/eventos</loc>
  <xhtml:link rel="alternate" hreflang="en" href="https://innovationcampus.biz/en/events"/>
  <xhtml:link rel="alternate" hreflang="es" href="https://innovationcampus.biz/es/eventos"/>
  <xhtml:link rel="alternate" hreflang="it" href="https://innovationcampus.biz/it/eventi"/>
  <changefreq>weekly</changefreq>
  <priority>0.8</priority>
</url>
<url>
  <loc>https://innovationcampus.biz/it/eventi</loc>
  <xhtml:link rel="alternate" hreflang="en" href="https://innovationcampus.biz/en/events"/>
  <xhtml:link rel="alternate" hreflang="es" href="https://innovationcampus.biz/es/eventos"/>
  <xhtml:link rel="alternate" hreflang="it" href="https://innovationcampus.biz/it/eventi"/>
  <changefreq>weekly</changefreq>
  <priority>0.8</priority>
</url>
```

- [ ] **Step 2: Add one URL block per event (repeat for all 5 events)**

Pattern (repeat changing slug and titles):

```xml
<!-- EVENT: Ladies That UX April 2026 -->
<url>
  <loc>https://innovationcampus.biz/en/events/ladies-that-ux-malaga-apr-2026</loc>
  <xhtml:link rel="alternate" hreflang="en" href="https://innovationcampus.biz/en/events/ladies-that-ux-malaga-apr-2026"/>
  <xhtml:link rel="alternate" hreflang="es" href="https://innovationcampus.biz/es/eventos/ladies-that-ux-malaga-apr-2026"/>
  <xhtml:link rel="alternate" hreflang="it" href="https://innovationcampus.biz/it/eventi/ladies-that-ux-malaga-apr-2026"/>
  <changefreq>monthly</changefreq>
  <priority>0.6</priority>
</url>
<url>
  <loc>https://innovationcampus.biz/es/eventos/ladies-that-ux-malaga-apr-2026</loc>
  <xhtml:link rel="alternate" hreflang="en" href="https://innovationcampus.biz/en/events/ladies-that-ux-malaga-apr-2026"/>
  <xhtml:link rel="alternate" hreflang="es" href="https://innovationcampus.biz/es/eventos/ladies-that-ux-malaga-apr-2026"/>
  <xhtml:link rel="alternate" hreflang="it" href="https://innovationcampus.biz/it/eventi/ladies-that-ux-malaga-apr-2026"/>
  <changefreq>monthly</changefreq>
  <priority>0.6</priority>
</url>
<url>
  <loc>https://innovationcampus.biz/it/eventi/ladies-that-ux-malaga-apr-2026</loc>
  <xhtml:link rel="alternate" hreflang="en" href="https://innovationcampus.biz/en/events/ladies-that-ux-malaga-apr-2026"/>
  <xhtml:link rel="alternate" hreflang="es" href="https://innovationcampus.biz/es/eventos/ladies-that-ux-malaga-apr-2026"/>
  <xhtml:link rel="alternate" hreflang="it" href="https://innovationcampus.biz/it/eventi/ladies-that-ux-malaga-apr-2026"/>
  <changefreq>monthly</changefreq>
  <priority>0.6</priority>
</url>
```

Repeat this block for the other 4 events using their slugs:
- `powertalks-malaga-apr-2026`
- `shewins-malaga-apr-2026`
- `malaga-ai-networking-apr-2026`
- `powertalks-malaga-apr-2026-b`

- [ ] **Step 3: Commit and push**

```bash
git add public/sitemap.xml
git commit -m "feat: add event pages to sitemap.xml"
git push
```

---

## Task 10: Final verification

- [ ] **Step 1: Build check**

```bash
npm run build
```

Expected: build succeeds with no TypeScript errors.

- [ ] **Step 2: Spot-check all 3 languages**

Open in browser:
- `http://localhost:8080/en/events` — hub EN, tab Upcoming/Past work
- `http://localhost:8080/it/eventi` — hub IT, labels in Italian
- `http://localhost:8080/es/eventos` — hub ES, labels in Spanish
- `http://localhost:8080/en/events/shewins-malaga-apr-2026` — detail page
- `http://localhost:8080/en/events/shewins-malaga-apr-2026/thank-you` — thank-you, CTA button present
- View source of thank-you page: confirm `<meta name="robots" content="noindex, nofollow">` present

- [ ] **Step 3: Check `_redirects` still correct**

Confirm `public/_redirects` still contains:
```
/* /index.html 200
```
This must be the last rule. It was already correct — just double-check nothing overwrote it.

---

## Notes for future events

When adding a new event, follow this checklist:
1. Add entry to `src/data/events.ts`
2. Create `src/pages/[lang]/events/[EventName].tsx` × 3 (EN/IT/ES) — copy nearest existing event file
3. Create `src/pages/[lang]/events/[EventName]ThankYou.tsx` × 3
4. Add 6 routes to `src/App.tsx`
5. Add sitemap entries (3 URLs per event, no thank-you URLs)
6. Replace `/placeholder.svg` with actual event image
7. Replace `externalUrl` with actual Meetup/Eventbrite URL
8. Deploy
