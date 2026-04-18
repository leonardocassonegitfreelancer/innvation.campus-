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

const monthlyPlans: PlanCard[] = [
  {
    name: "ILIMITADO",
    price: "€179",
    period: "/mes + IVA",
    url: "https://members.innovationcampus.biz/signup?plan=UNL",
    features: [
      "Acceso 24/7",
      "Escritorio Fijo",
      "Taquilla Personal",
      "Salas de Reunión 4h/mes",
      "200 impresiones",
      "Descuentos en tiendas y servicios",
      "Eventos y Comunidad",
    ],
  },
  {
    name: "FLEXI 12",
    price: "€139",
    period: "/mes + IVA",
    url: "https://members.innovationcampus.biz/signup?plan=FL12",
    features: [
      "Acceso 12 días/mes",
      "Acceso 24/7",
      "Escritorio Flexible",
      "Salas de Reunión 2h/mes",
      "150 impresiones",
      "Descuentos en tiendas y servicios",
      "Eventos y Comunidad",
    ],
  },
  {
    name: "FLEXI 7",
    price: "€90",
    period: "/mes + IVA",
    bestSeller: true,
    url: "https://members.innovationcampus.biz/signup?plan=FL7",
    features: [
      "Acceso 7 días/mes",
      "Acceso 24/7",
      "Escritorio Flexible",
      "Salas de Reunión 1h/mes",
      "50 impresiones",
      "Descuentos en tiendas y servicios",
      "Eventos y Comunidad",
    ],
  },
];

const shortStayPlans: PlanCard[] = [
  {
    name: "DOS SEMANAS",
    price: "€139",
    period: "+ IVA",
    url: "https://members.innovationcampus.biz/signup?plan=2We",
    features: [
      "Dos semanas consecutivas",
      "Acceso 24/7",
      "Escritorio Flexible",
      "Salas de Reunión 2h",
      "100 impresiones",
      "Descuentos en tiendas y servicios",
      "Eventos y Comunidad",
    ],
  },
  {
    name: "UNA SEMANA",
    price: "€90",
    period: "+ IVA",
    url: "https://members.innovationcampus.biz/signup?plan=1WE",
    features: [
      "Una semana consecutiva",
      "Acceso 24/7",
      "Escritorio Flexible",
      "Salas de Reunión 1h",
      "50 impresiones",
      "Descuentos en tiendas y servicios",
      "Eventos y Comunidad",
    ],
  },
  {
    name: "PASE DIARIO",
    price: "€24",
    period: "+ IVA",
    url: "https://members.innovationcampus.biz/signup?plan=DAY",
    features: [
      "Lunes a Viernes, 9:30–18:30",
      "Escritorio Flexible",
      "Monitor incluido",
      "10 impresiones",
    ],
  },
];

const extras = [
  "Pase medio día (4h): €14 + IVA",
  "Taquilla (cuando no está incluida): €9/mes",
  "Impresiones extra: €0,05 cada una",
  "Alquiler de pantalla: solo con membresía",
];

function PricingCard({ plan }: { plan: PlanCard }) {
  return (
    <div
      className={`relative rounded-xl border p-6 flex flex-col transition-shadow hover:shadow-lg ${
        plan.bestSeller
          ? "border-primary ring-2 ring-primary/20 bg-card"
          : "border-border bg-card"
      }`}
    >
      {plan.bestSeller && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="inline-flex items-center gap-1.5 bg-primary text-primary-foreground text-xs font-body font-semibold uppercase tracking-wider px-4 py-1 rounded-full">
            <Star className="w-3 h-3" /> Más Vendido
          </span>
        </div>
      )}

      <h3 className="font-display text-lg font-bold text-foreground uppercase tracking-wider text-center mt-1">
        {plan.name}
      </h3>

      <div className="text-center my-4">
        <span className="font-display text-4xl font-bold text-primary">{plan.price}</span>
        <span className="font-body text-sm text-muted-foreground">{plan.period}</span>
      </div>

      <ul className="space-y-2.5 flex-1 mb-6">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-2 font-body text-sm text-foreground/80">
            <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
            <span>{f}</span>
          </li>
        ))}
      </ul>

      <Button
        asChild
        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-body text-sm uppercase tracking-widest"
      >
        <a target="_blank" rel="noopener noreferrer" href={plan.url}>
          Reservar Ahora
        </a>
      </Button>
    </div>
  );
}

export default function CoworkingPricingES() {
  const [tab, setTab] = useState<"monthly" | "short">("monthly");

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <p className="font-body text-xs uppercase tracking-[0.3em] text-primary mb-4 font-semibold text-center">
          Precios
        </p>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground text-center mb-12">
          Planes y Membresías
        </h2>

        <div className="flex gap-3 mb-12 justify-center">
          <button
            onClick={() => setTab("monthly")}
            className={`py-3 px-6 rounded-md font-body text-sm font-semibold uppercase tracking-wider transition-colors ${
              tab === "monthly"
                ? "bg-primary text-primary-foreground"
                : "border border-primary text-primary bg-transparent"
            }`}
          >
            Membresías Mensuales
          </button>
          <button
            onClick={() => setTab("short")}
            className={`py-3 px-6 rounded-md font-body text-sm font-semibold uppercase tracking-wider transition-colors ${
              tab === "short"
                ? "bg-primary text-primary-foreground"
                : "border border-primary text-primary bg-transparent"
            }`}
          >
            Estancias Cortas
          </button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in" key={tab}>
          {(tab === "monthly" ? monthlyPlans : shortStayPlans).map((plan) => (
            <PricingCard key={plan.name} plan={plan} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="font-body text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3 font-semibold">
            Extras
          </p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-1">
            {extras.map((e) => (
              <span key={e} className="font-body text-sm text-muted-foreground">
                {e}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
