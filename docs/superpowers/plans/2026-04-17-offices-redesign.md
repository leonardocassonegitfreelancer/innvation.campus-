# Offices Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace availability-based office listings with S/M/L size cards — no pricing, no availability — with a contact CTA.

**Architecture:** Single file rewrite of `OfficesListings.tsx`. Keep tab toggle (Palace | Terrace), replace office data with 3 size-based entries per tab. Remove `highlight`, `size` (m²), `comingSoon` logic. CTA links to `#contact`.

**Tech Stack:** React, TypeScript, Tailwind, existing shadcn Card/Button/Badge components.

---

### Task 1: Rewrite OfficesListings.tsx

**Files:**
- Modify: `src/components/landing/OfficesListings.tsx`

- [ ] **Step 1: Replace the file with the new implementation**

```tsx
import { useState } from "react";
import { Users } from "lucide-react";
import palaceEntrance from "@/assets/palace-entrance.webp";
import palaceSecondFloor from "@/assets/palace-second-floor.webp";
import palaceCourtyard from "@/assets/palace-courtyard.webp";
import terrace1 from "@/assets/service-terrace.webp";
import terrace2 from "@/assets/terrace-events.webp";
import terraceCommunity from "@/assets/terrace-community.webp";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useLocation } from "react-router-dom";

interface Office {
  id: string;
  sizeLabel: string;
  capacity: string;
  features: string[];
  image: string;
}

const translations = {
  en: {
    tagline: "Private Offices",
    title: "Find Your Space",
    requestInfo: "Request Info",
    tabs: [
      { value: "palace" as const, label: "Málaga Palace — Historic Center" },
      { value: "terrace" as const, label: "Málaga Terrace — Seaside" },
    ],
    palaceOffices: [
      {
        id: "palace-small",
        sizeLabel: "Small",
        capacity: "1–3 people",
        features: ["Historic building", "Natural light", "Air conditioning", "Private entrance"],
        image: palaceCourtyard,
      },
      {
        id: "palace-medium",
        sizeLabel: "Medium",
        capacity: "4–8 people",
        features: ["High ceilings", "Courtyard view", "Air conditioning", "Private"],
        image: palaceSecondFloor,
      },
      {
        id: "palace-large",
        sizeLabel: "Large",
        capacity: "9–15 people",
        features: ["Fully accessible", "Catering option", "Air conditioning", "Event-ready"],
        image: palaceEntrance,
      },
    ] as Office[],
    terraceOffices: [
      {
        id: "terrace-small",
        sizeLabel: "Small",
        capacity: "1–3 people",
        features: ["Ocean view", "Air conditioning", "Modern fit-out", "Private"],
        image: terrace1,
      },
      {
        id: "terrace-medium",
        sizeLabel: "Medium",
        capacity: "4–8 people",
        features: ["Partial sea view", "Air conditioning", "Open layout", "4th floor"],
        image: terrace2,
      },
      {
        id: "terrace-large",
        sizeLabel: "Large",
        capacity: "9–20 people",
        features: ["5th floor", "Panoramic views", "Air conditioning", "Fully isolated"],
        image: terraceCommunity,
      },
    ] as Office[],
  },
  es: {
    tagline: "Oficinas Privadas",
    title: "Encuentra Tu Espacio",
    requestInfo: "Solicitar Información",
    tabs: [
      { value: "palace" as const, label: "Málaga Palace — Centro Histórico" },
      { value: "terrace" as const, label: "Málaga Terrace — Frente al Mar" },
    ],
    palaceOffices: [
      {
        id: "palace-small",
        sizeLabel: "Small",
        capacity: "1–3 personas",
        features: ["Edificio histórico", "Luz natural", "Aire acondicionado", "Entrada privada"],
        image: palaceCourtyard,
      },
      {
        id: "palace-medium",
        sizeLabel: "Medium",
        capacity: "4–8 personas",
        features: ["Techos altos", "Vista al patio", "Aire acondicionado", "Privada"],
        image: palaceSecondFloor,
      },
      {
        id: "palace-large",
        sizeLabel: "Large",
        capacity: "9–15 personas",
        features: ["Totalmente accesible", "Servicio de catering", "Aire acondicionado", "Lista para eventos"],
        image: palaceEntrance,
      },
    ] as Office[],
    terraceOffices: [
      {
        id: "terrace-small",
        sizeLabel: "Small",
        capacity: "1–3 personas",
        features: ["Vista al mar", "Aire acondicionado", "Acabados modernos", "Privada"],
        image: terrace1,
      },
      {
        id: "terrace-medium",
        sizeLabel: "Medium",
        capacity: "4–8 personas",
        features: ["Vista parcial al mar", "Aire acondicionado", "Planta abierta", "4ª planta"],
        image: terrace2,
      },
      {
        id: "terrace-large",
        sizeLabel: "Large",
        capacity: "9–20 personas",
        features: ["5ª planta", "Vistas panorámicas", "Aire acondicionado", "Totalmente aislada"],
        image: terraceCommunity,
      },
    ] as Office[],
  },
  it: {
    tagline: "Uffici Privati",
    title: "Trova il Tuo Spazio",
    requestInfo: "Richiedi Informazioni",
    tabs: [
      { value: "palace" as const, label: "Málaga Palace — Centro Storico" },
      { value: "terrace" as const, label: "Málaga Terrace — Lungomare" },
    ],
    palaceOffices: [
      {
        id: "palace-small",
        sizeLabel: "Small",
        capacity: "1–3 persone",
        features: ["Edificio storico", "Luce naturale", "Aria condizionata", "Ingresso privato"],
        image: palaceCourtyard,
      },
      {
        id: "palace-medium",
        sizeLabel: "Medium",
        capacity: "4–8 persone",
        features: ["Soffitti alti", "Vista cortile", "Aria condizionata", "Privato"],
        image: palaceSecondFloor,
      },
      {
        id: "palace-large",
        sizeLabel: "Large",
        capacity: "9–15 persone",
        features: ["Completamente accessibile", "Servizio catering", "Aria condizionata", "Pronto per eventi"],
        image: palaceEntrance,
      },
    ] as Office[],
    terraceOffices: [
      {
        id: "terrace-small",
        sizeLabel: "Small",
        capacity: "1–3 persone",
        features: ["Vista oceano", "Aria condizionata", "Finitura moderna", "Privato"],
        image: terrace1,
      },
      {
        id: "terrace-medium",
        sizeLabel: "Medium",
        capacity: "4–8 persone",
        features: ["Vista parziale mare", "Aria condizionata", "Layout aperto", "4° piano"],
        image: terrace2,
      },
      {
        id: "terrace-large",
        sizeLabel: "Large",
        capacity: "9–20 persone",
        features: ["5° piano", "Vista panoramica", "Aria condizionata", "Completamente isolato"],
        image: terraceCommunity,
      },
    ] as Office[],
  },
};

function OfficeCard({ office, requestInfo }: { office: Office; requestInfo: string }) {
  return (
    <Card className="relative overflow-hidden transition-all duration-300 hover:shadow-lg border-border">
      <div className="w-full h-48 md:h-56 overflow-hidden">
        <img src={office.image} alt={office.sizeLabel} className="w-full h-full object-cover" loading="lazy" />
      </div>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="font-bebas text-2xl tracking-wide">{office.sizeLabel}</CardTitle>
          <span className="flex items-center gap-1.5 font-body text-sm text-muted-foreground">
            <Users className="w-4 h-4" />
            {office.capacity}
          </span>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-2 mb-6">
          {office.features.map((feature, i) => (
            <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
              <span className="font-body">{feature}</span>
            </div>
          ))}
        </div>
        <Button asChild variant="default" className="bg-primary hover:bg-primary/90 w-full">
          <a href="#contact">{requestInfo}</a>
        </Button>
      </CardContent>
    </Card>
  );
}

export default function OfficesListings() {
  const [activeTab, setActiveTab] = useState<"palace" | "terrace">("palace");
  const { ref, isVisible } = useScrollAnimation();
  const location = useLocation();
  const lang = location.pathname.startsWith("/es") ? "es" : location.pathname.startsWith("/it") ? "it" : "en";
  const t = translations[lang];
  const offices = activeTab === "palace" ? t.palaceOffices : t.terraceOffices;

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className={`scroll-animate ${isVisible ? "visible" : ""} text-center mb-14`}>
          <p className="font-body text-xs uppercase tracking-[0.3em] text-primary mb-4 font-semibold">
            {t.tagline}
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            {t.title}
          </h2>
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {t.tabs.map((tab) => (
              <button
                key={tab.value}
                type="button"
                onClick={() => setActiveTab(tab.value)}
                className={`font-body text-sm px-6 py-2.5 rounded-full border transition-all duration-300 ${
                  activeTab === tab.value
                    ? "bg-primary text-primary-foreground border-primary shadow-md"
                    : "bg-transparent border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {offices.map((office) => (
            <OfficeCard key={office.id} office={office} requestInfo={t.requestInfo} />
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/landing/OfficesListings.tsx
git commit -m "feat: redesign offices section with S/M/L cards (EN/ES/IT)"
```
