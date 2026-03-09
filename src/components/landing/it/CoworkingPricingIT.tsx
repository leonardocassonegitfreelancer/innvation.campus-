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
    name: "ILLIMITATO",
    price: "€179",
    period: "/mese + IVA",
    url: "https://members.innovationcampus.biz/signup?plan=UNL",
    features: [
      "Accesso 24/7",
      "Scrivania Fissa",
      "Armadietto Personale",
      "Sale Riunioni 4h/mese",
      "200 stampe",
      "Sconti in negozi e servizi",
      "Eventi e Comunità",
    ],
  },
  {
    name: "FLEXI 12",
    price: "€139",
    period: "/mese + IVA",
    url: "https://members.innovationcampus.biz/signup?plan=FL12",
    features: [
      "Accesso 12 giorni/mese",
      "Lunedì a Venerdì, 7–23",
      "Scrivania Flessibile",
      "Sale Riunioni 2h/mese",
      "150 stampe",
      "Sconti in negozi e servizi",
      "Eventi e Comunità",
    ],
  },
  {
    name: "FLEXI 7",
    price: "€90",
    period: "/mese + IVA",
    bestSeller: true,
    url: "https://members.innovationcampus.biz/signup?plan=FL7",
    features: [
      "Accesso 7 giorni/mese",
      "Lunedì a Venerdì, 7–23",
      "Scrivania Flessibile",
      "Sale Riunioni 1h/mese",
      "50 stampe",
      "Sconti in negozi e servizi",
      "Eventi e Comunità",
    ],
  },
];

const shortStayPlans: PlanCard[] = [
  {
    name: "DUE SETTIMANE",
    price: "€139",
    period: "+ IVA",
    url: "https://members.innovationcampus.biz/signup?plan=2We",
    features: [
      "Due settimane consecutive",
      "7–23",
      "Scrivania Flessibile",
      "Sale Riunioni 2h",
      "100 stampe",
      "Sconti in negozi e servizi",
      "Eventi e Comunità",
    ],
  },
  {
    name: "UNA SETTIMANA",
    price: "€90",
    period: "+ IVA",
    url: "https://members.innovationcampus.biz/signup?plan=1WE",
    features: [
      "Una settimana consecutiva",
      "7–23",
      "Scrivania Flessibile",
      "Sale Riunioni 1h",
      "50 stampe",
      "Sconti in negozi e servizi",
      "Eventi e Comunità",
    ],
  },
  {
    name: "PASS GIORNALIERO",
    price: "€24",
    period: "+ IVA",
    url: "https://members.innovationcampus.biz/signup?plan=DAY",
    features: [
      "Lunedì a Venerdì, 9:30–18:30",
      "Scrivania Flessibile",
      "Monitor incluso",
      "10 stampe",
    ],
  },
];

const extras = [
  "Pass mezza giornata (4h): €14 + IVA",
  "Armadietto (quando non incluso): €9/mese",
  "Stampe extra: €0,05 ciascuna",
  "Noleggio schermo: solo con abbonamento",
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
            <Star className="w-3 h-3" /> Più Venduto
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
          Prenota Ora
        </a>
      </Button>
    </div>
  );
}

export default function CoworkingPricingIT() {
  const [tab, setTab] = useState<"monthly" | "short">("monthly");

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <p className="font-body text-xs uppercase tracking-[0.3em] text-primary mb-4 font-semibold text-center">
          Prezzi
        </p>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground text-center mb-12">
          Piani e Abbonamenti
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
            Abbonamenti Mensili
          </button>
          <button
            onClick={() => setTab("short")}
            className={`py-3 px-6 rounded-md font-body text-sm font-semibold uppercase tracking-wider transition-colors ${
              tab === "short"
                ? "bg-primary text-primary-foreground"
                : "border border-primary text-primary bg-transparent"
            }`}
          >
            Soggiorni Brevi
          </button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in" key={tab}>
          {(tab === "monthly" ? monthlyPlans : shortStayPlans).map((plan) => (
            <PricingCard key={plan.name} plan={plan} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="font-body text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3 font-semibold">
            Extra
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
