import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";

interface PlanCard {
  name: string;
  price: string;
  period: string;
  features: string[];
  bestSeller?: boolean;
  url: string;
}

const translations = {
  en: {
    tagline: "Pricing",
    title: "Plans & Memberships",
    monthly: "Monthly Memberships",
    short: "Short Stays",
    bestSeller: "Best Seller",
    bookNow: "Book Now",
    perMonth: "/month + VAT",
    plusVat: "+ VAT",
    extrasLabel: "Extras",
    extras: [
      "Half-day pass (4h): €14 + VAT",
      "Locker (when not included): €9/month",
      "Extra prints: €0.05 each",
      "Screen rental: only in addition to a membership"
    ],
    monthlyPlans: [
      {
        name: "UNLIMITED",
        price: "€179",
        period: "/month + VAT",
        url: "https://members.innovationcampus.biz/signup?plan=UNL",
        features: ["24/7 Access", "Fixed Desk", "Personal Locker", "Meeting Rooms 4h/mo", "200 prints", "Discounts in shops and services", "Events and Community"]
      },
      {
        name: "FLEXI 12",
        price: "€139",
        period: "/month + VAT",
        url: "https://members.innovationcampus.biz/signup?plan=FL12",
        features: ["Access 12 days/month", "24/7 Access", "Flex Desk", "Meeting Rooms 2h/mo", "150 prints", "Discounts in shops and services", "Events and Community"]
      },
      {
        name: "FLEXI 7",
        price: "€90",
        period: "/month + VAT",
        bestSeller: true,
        url: "https://members.innovationcampus.biz/signup?plan=FL7",
        features: ["Access 7 days/month", "24/7 Access", "Flex Desk", "Meeting Rooms 1h/mo", "50 prints", "Discounts in shops and services", "Events and Community"]
      }
    ],
    shortStayPlans: [
      {
        name: "TWO WEEKS",
        price: "€139",
        period: "+ VAT",
        url: "https://members.innovationcampus.biz/signup?plan=2We",
        features: ["Two weeks in a row", "24/7 Access", "Flex Desk", "Meeting Rooms 2h", "100 prints", "Discounts in shops and services", "Events and Community"]
      },
      {
        name: "ONE WEEK",
        price: "€90",
        period: "+ VAT",
        url: "https://members.innovationcampus.biz/signup?plan=1WE",
        features: ["One week in a row", "24/7 Access", "Flex Desk", "Meeting Rooms 1h", "50 prints", "Discounts in shops and services", "Events and Community"]
      },
      {
        name: "DAY PASS",
        price: "€24",
        period: "+ VAT",
        url: "https://members.innovationcampus.biz/signup?plan=DAY",
        features: ["Monday to Friday, 9:30–18:30", "Flex Desk", "Monitor included", "10 prints"]
      }
    ]
  },
  es: {
    tagline: "Precios",
    title: "Planes y Membresías",
    monthly: "Suscripciones Mensuales",
    short: "Estancias Cortas",
    bestSeller: "Más Vendido",
    bookNow: "Reservar Ahora",
    perMonth: "/mes + IVA",
    plusVat: "+ IVA",
    extrasLabel: "Extras",
    extras: [
      "Pase de medio día (4h): €14 + IVA",
      "Taquilla (si no está incluida): €9/mes",
      "Impresiones extra: €0.05 cada una",
      "Alquiler de pantalla: solo adicional a una suscripción"
    ],
    monthlyPlans: [
      {
        name: "ILIMITADO",
        price: "€179",
        period: "/mes + IVA",
        url: "https://members.innovationcampus.biz/signup?plan=UNL",
        features: ["Acceso 24/7", "Escritorio Fijo", "Taquilla Personal", "Salas de Reuniones 4h/mes", "200 impresiones", "Descuentos en tiendas y servicios", "Eventos y Comunidad"]
      },
      {
        name: "FLEXI 12",
        price: "€139",
        period: "/mes + IVA",
        url: "https://members.innovationcampus.biz/signup?plan=FL12",
        features: ["Acceso 12 días/mes", "Acceso 24/7", "Escritorio Flex", "Salas de Reuniones 2h/mes", "150 impresiones", "Descuentos en tiendas y servicios", "Eventos y Comunidad"]
      },
      {
        name: "FLEXI 7",
        price: "€90",
        period: "/mes + IVA",
        bestSeller: true,
        url: "https://members.innovationcampus.biz/signup?plan=FL7",
        features: ["Acceso 7 días/mes", "Acceso 24/7", "Escritorio Flex", "Salas de Reuniones 1h/mes", "50 impresiones", "Descuentos en tiendas y servicios", "Eventos y Comunidad"]
      }
    ],
    shortStayPlans: [
      {
        name: "DOS SEMANAS",
        price: "€139",
        period: "+ IVA",
        url: "https://members.innovationcampus.biz/signup?plan=2We",
        features: ["Dos semanas seguidas", "Acceso 24/7", "Escritorio Flex", "Salas de Reuniones 2h", "100 impresiones", "Descuentos en tiendas y servicios", "Eventos y Comunidad"]
      },
      {
        name: "UNA SEMANA",
        price: "€90",
        period: "+ IVA",
        url: "https://members.innovationcampus.biz/signup?plan=1WE",
        features: ["Una semana seguida", "Acceso 24/7", "Escritorio Flex", "Salas de Reuniones 1h", "50 impresiones", "Descuentos en tiendas y servicios", "Eventos y Comunidad"]
      },
      {
        name: "PASE DIARIO",
        price: "€24",
        period: "+ IVA",
        url: "https://members.innovationcampus.biz/signup?plan=DAY",
        features: ["Lunes a Viernes, 9:30–18:30", "Escritorio Flex", "Monitor incluido", "10 impresiones"]
      }
    ]
  },
  it: {
    tagline: "Prezzi",
    title: "Piani e Abbonamenti",
    monthly: "Abbonamenti Mensili",
    short: "Soggiorni Brevi",
    bestSeller: "Più Venduto",
    bookNow: "Prenota Ora",
    perMonth: "/mese + IVA",
    plusVat: "+ IVA",
    extrasLabel: "Extra",
    extras: [
      "Pass mezza giornata (4h): €14 + IVA",
      "Locker (se non incluso): €9/mese",
      "Stampe extra: €0.05 cad.",
      "Noleggio schermo: solo in aggiunta a un abbonamento"
    ],
    monthlyPlans: [
      {
        name: "UNLIMITED",
        price: "€179",
        period: "/mese + IVA",
        url: "https://members.innovationcampus.biz/signup?plan=UNL",
        features: ["Accesso 24/7", "Scrivania Fissa", "Locker Personale", "Sale Riunioni 4h/mese", "200 stampe", "Sconti in negozi e servizi", "Eventi e Comunità"]
      },
      {
        name: "FLEXI 12",
        price: "€139",
        period: "/mese + IVA",
        url: "https://members.innovationcampus.biz/signup?plan=FL12",
        features: ["Accesso 12 giorni/mese", "Accesso 24/7", "Scrivania Flex", "Sale Riunioni 2h/mese", "150 stampe", "Sconti in negozi e servizi", "Eventi e Comunità"]
      },
      {
        name: "FLEXI 7",
        price: "€90",
        period: "/mese + IVA",
        bestSeller: true,
        url: "https://members.innovationcampus.biz/signup?plan=FL7",
        features: ["Accesso 7 giorni/mese", "Accesso 24/7", "Scrivania Flex", "Sale Riunioni 1h/mese", "50 stampe", "Sconti in negozi e servizi", "Eventi e Comunità"]
      }
    ],
    shortStayPlans: [
      {
        name: "DUE SETTIMANE",
        price: "€139",
        period: "+ IVA",
        url: "https://members.innovationcampus.biz/signup?plan=2We",
        features: ["Due settimane consecutive", "Accesso 24/7", "Scrivania Flex", "Sale Riunioni 2h", "100 stampe", "Sconti in negozi e servizi", "Eventi e Comunità"]
      },
      {
        name: "UNA SETTIMANA",
        price: "€90",
        period: "+ IVA",
        url: "https://members.innovationcampus.biz/signup?plan=1WE",
        features: ["Una settimana consecutiva", "Accesso 24/7", "Scrivania Flex", "Sale Riunioni 1h", "50 stampe", "Sconti in negozi e servizi", "Eventi e Comunità"]
      },
      {
        name: "DAY PASS",
        price: "€24",
        period: "+ IVA",
        url: "https://members.innovationcampus.biz/signup?plan=DAY",
        features: ["Lunedì a Venerdì, 9:30–18:30", "Scrivania Flex", "Monitor incluso", "10 stampe"]
      }
    ]
  }
};

function PricingCard({ plan, t }: {plan: PlanCard; t: any}) {
  return (
    <div
      className={`relative rounded-xl border p-6 flex flex-col transition-shadow hover:shadow-lg ${
      plan.bestSeller ?
      "border-primary ring-2 ring-primary/20 bg-card" :
      "border-border bg-card"}`
      }>
      
      {plan.bestSeller &&
      <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="inline-flex items-center gap-1.5 bg-primary text-primary-foreground text-xs font-body font-semibold uppercase tracking-wider px-4 py-1 rounded-full">
            <Star className="w-3 h-3" /> {t.bestSeller}
          </span>
        </div>
      }

      <h3 className="font-display text-lg font-bold text-foreground uppercase tracking-wider text-center mt-1">
        {plan.name}
      </h3>

      <div className="text-center my-4">
        <span className="font-display text-4xl font-bold text-primary">{plan.price}</span>
        <span className="font-body text-sm text-muted-foreground">{plan.period}</span>
      </div>

      <ul className="space-y-2.5 flex-1 mb-6">
        {plan.features.map((f) =>
        <li key={f} className="flex items-start gap-2 font-body text-sm text-foreground/80">
            <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
            <span>{f}</span>
          </li>
        )}
      </ul>

      <Button
        asChild
        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-body text-sm uppercase tracking-widest">
        
        <a
          target="_blank"
          rel="noopener noreferrer" href={plan.url}>
          {t.bookNow}
        </a>
      </Button>
    </div>);

}

export default function CoworkingPricing({ lang = "en" }: { lang?: "en" | "es" | "it" }) {
  const [tab, setTab] = useState<"monthly" | "short">("monthly");
  const t = translations[lang];

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <p className="font-body text-xs uppercase tracking-[0.3em] text-primary mb-4 font-semibold text-center">
          {t.tagline}
        </p>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground text-center mb-12">
          {t.title}
        </h2>

        {/* Tabs */}
        <div className="flex gap-3 mb-12 justify-center">
          <button
            onClick={() => setTab("monthly")}
            className={`py-3 px-6 rounded-md font-body text-sm font-semibold uppercase tracking-wider transition-colors ${
            tab === "monthly" ?
            "bg-primary text-primary-foreground" :
            "border border-primary text-primary bg-transparent"}`
            }>
            {t.monthly}
          </button>
          <button
            onClick={() => setTab("short")}
            className={`py-3 px-6 rounded-md font-body text-sm font-semibold uppercase tracking-wider transition-colors ${
            tab === "short" ?
            "bg-primary text-primary-foreground" :
            "border border-primary text-primary bg-transparent"}`
            }>
            {t.short}
          </button>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in" key={tab}>
          {(tab === "monthly" ? t.monthlyPlans : t.shortStayPlans).map((plan) =>
          <PricingCard key={plan.name} plan={plan} t={t} />
          )}
        </div>

        {/* Extras */}
        <div className="mt-10 text-center">
          <p className="font-body text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3 font-semibold">
            {t.extrasLabel}
          </p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-1">
            {t.extras.map((e) =>
            <span key={e} className="font-body text-sm text-muted-foreground">
                {e}
              </span>
            )}
          </div>
        </div>
      </div>
    </section>);
}