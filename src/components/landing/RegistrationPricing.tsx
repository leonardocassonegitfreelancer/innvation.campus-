import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useLocation } from "react-router-dom";

interface RegistrationPlan {
  name: string;
  price: string;
  period: string;
  features: string[];
  bestSeller?: boolean;
}

const translations = {
  en: {
    tagline: "Pricing",
    title: "Business Registration Plans",
    bestSeller: "popular",
    bookNow: "Request Now!",
    extrasTitle: "Optional Add-ons",
    extras: [
      "Complete mail scanning: from €9/month",
      "Complete mail forwarding: from €19/month"
    ],
    plans: [
      {
        name: "MALAGA TERRACE",
        price: "€29",
        period: "/month + VAT",
        features: [
          "Minimum 6 months",
          "Address for mails & registry",
          "Logo at entrance",
          "Logo on our website",
          "Reception handling duties"
        ],
        bestSeller: false,
      },
      {
        name: "MALAGA PALACE",
        price: "€39",
        period: "/month + VAT",
        features: [
          "Minimum 6 months",
          "Prestigious Palace Address",
          "Logo at entrance",
          "Logo on our website",
          "Reception handling duties"
        ],
        bestSeller: true,
      }
    ]
  },
  es: {
    tagline: "Precios",
    title: "Suscripciones para Empresas",
    bestSeller: "popular",
    bookNow: "¡Solicitar Ahora!",
    extrasTitle: "Extras Opcionales",
    extras: [
      "Escaneo de todo el correo: desde 9€/mes",
      "Reenvío de todo el correo: desde 19€/mes"
    ],
    plans: [
      {
        name: "TERRAZA MÁLAGA",
        price: "29€",
        period: "/mes + IVA",
        features: [
          "Mínimo 6 meses",
          "Dirección postal y legal",
          "Logotipo en la entrada",
          "Logotipo en la web",
          "Recepción y gestión de visitas"
        ],
        bestSeller: false,
      },
      {
        name: "PALACIO MÁLAGA",
        price: "39€",
        period: "/mes + IVA",
        features: [
          "Mínimo 6 meses",
          "Dirección prestigiosa en Palacio",
          "Logotipo en la entrada",
          "Logotipo en la web",
          "Recepción y gestión de visitas"
        ],
        bestSeller: true,
      }
    ]
  },
  it: {
    tagline: "Prezzi",
    title: "Piani Registrazione",
    bestSeller: "popolare",
    bookNow: "Richiedi Ora!",
    extrasTitle: "Extra Opzionali",
    extras: [
      "Scansione posta: da 9€/mese",
      "Inoltro posta: da 19€/mese"
    ],
    plans: [
      {
        name: "MALAGA TERRACE",
        price: "29€",
        period: "/mese + IVA",
        features: [
          "Minimo 6 mesi",
          "Indirizzo postale e legale",
          "Logo all'ingresso",
          "Logo sul nostro sito",
          "Servizio reception"
        ],
        bestSeller: false,
      },
      {
        name: "MALAGA PALACE",
        price: "39€",
        period: "/mese + IVA",
        features: [
          "Minimo 6 mesi",
          "Indirizzo prestigioso al Palazzo",
          "Logo all'ingresso",
          "Logo sul nostro sito",
          "Servizio reception"
        ],
        bestSeller: true,
      }
    ]
  }
};

export default function RegistrationPricing({ lang = "en" }: { lang?: "en" | "es" | "it" }) {
  const { ref, isVisible } = useScrollAnimation();
  const t = translations[lang];

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="max-w-4xl mx-auto px-6">
        <div ref={ref} className={`scroll-animate ${isVisible ? "visible" : ""} text-center mb-16`}>
          <p className="font-body text-xs uppercase tracking-[0.3em] text-primary mb-4 font-semibold">
            {t.tagline}
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            {t.title}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {t.plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-xl border p-8 flex flex-col transition-shadow hover:shadow-lg ${
                plan.bestSeller
                  ? "border-primary ring-2 ring-primary/20 bg-card transform md:-translate-y-2"
                  : "border-border bg-card"
              }`}
            >
              {plan.bestSeller && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1.5 bg-primary text-primary-foreground text-xs font-body font-semibold uppercase tracking-wider px-4 py-1 rounded-full">
                    <Star className="w-3 h-3" /> {t.bestSeller}
                  </span>
                </div>
              )}

              <h3 className="font-display text-xl font-bold text-foreground uppercase tracking-wider text-center mt-2">
                {plan.name}
              </h3>

              <div className="text-center my-6">
                <span className="font-display text-5xl font-bold text-primary">{plan.price}</span>
                <span className="font-body text-sm text-muted-foreground">{plan.period}</span>
              </div>

              <ul className="space-y-3 flex-1 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 font-body text-sm text-foreground/80">
                    <Check className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                size="lg"
                className={`w-full font-body text-sm uppercase tracking-widest ${
                  plan.bestSeller ? "bg-primary hover:bg-primary/90 text-primary-foreground" : ""
                }`}
              >
                <a href="/#contact">{t.bookNow}</a>
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center p-8 bg-neutral-100 rounded-xl">
          <p className="font-body text-sm uppercase tracking-[0.2em] text-foreground font-semibold mb-6">
            {t.extrasTitle}
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8">
            {t.extras.map((e) => (
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
