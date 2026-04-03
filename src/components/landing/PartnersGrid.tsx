import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useLocation } from "react-router-dom";
import { Briefcase, Dumbbell, UtensilsCrossed, Tag } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface Partner {
  name: string;
  offer: string;
  detail?: string;
}

interface Category {
  icon: React.ElementType;
  label: string;
  partners: Partner[];
}

const translations = {
  en: {
    tagline: "Member Benefits",
    title: "Discounts & Offers For Our Members",
    subtitle:
      "Being a member of Innovation Campus delivers more value for your money. Our community can make savings with exclusive offers and discounts!",
    memberOnly: "Members Only",
    categories: [
      {
        icon: Briefcase,
        label: "Business & Services",
        partners: [
          {
            name: "Martínez Echevarría Abogados",
            offer: "Free consulting & special fees",
            detail: "Reserve at legal@innovationcampus.biz",
          },
          {
            name: "Adeslas Insurance",
            offer: "Special prices for members",
            detail: "Info at info@innovationcampus.biz",
          },
          {
            name: "Go to Costa del Sol",
            offer: "Best prices for cars & excursions",
            detail: "Discounts available at reception",
          },
        ],
      },
      {
        icon: Dumbbell,
        label: "Sport & Leisure",
        partners: [
          { name: "Hammam Al Ándalus", offer: "Special discounts for members" },
          { name: "Yoga Centre Flow", offer: "Exclusive deals for the community" },
          {
            name: "Brooklyn Fitboxing el Perchel",
            offer: "Special conditions for members",
          },
          { name: "Flamingo Tour & Trips", offer: "Special offers on excursions" },
          {
            name: "Celebreak",
            offer: "Deals for football lovers in the community",
          },
        ],
      },
      {
        icon: UtensilsCrossed,
        label: "Food & Drinks",
        partners: [
          { name: "Puerto Cristal", offer: "15% discount every day" },
          { name: "Copenhague Music Bar", offer: "Special member benefits" },
          { name: "Café Merced 14", offer: "Local member discounts" },
          { name: "Grand Café Gezellig", offer: "Exclusive offers" },
          { name: "Sabor a Nápoles", offer: "Pizza & pasta deals" },
          { name: "Oakberry Açaí", offer: "Discounts on bowls" },
          { name: "Toc-Toc Noodles", offer: "Asian food specials" },
          { name: "Mupanky Bowls", offer: "Health food deals" },
        ],
      },
    ] as Category[],
  },
  es: {
    tagline: "Ventajas para Miembros",
    title: "Descuentos y Ofertas para Nuestros Miembros",
    subtitle:
      "Ser miembro de Innovation Campus aporta más valor a tu dinero. ¡Nuestra comunidad puede ahorrar con ofertas y descuentos exclusivos!",
    memberOnly: "Solo Miembros",
    categories: [
      {
        icon: Briefcase,
        label: "Negocios y Servicios",
        partners: [
          {
            name: "Martínez Echevarría Abogados",
            offer: "Consultoría gratuita y tarifas especiales",
            detail: "Reserva en legal@innovationcampus.biz",
          },
          {
            name: "Adeslas Seguros",
            offer: "Precios especiales para miembros",
            detail: "Info en info@innovationcampus.biz",
          },
          {
            name: "Go to Costa del Sol",
            offer: "Mejores precios en coches y excursiones",
            detail: "Descuentos disponibles en recepción",
          },
        ],
      },
      {
        icon: Dumbbell,
        label: "Deporte y Ocio",
        partners: [
          { name: "Hammam Al Ándalus", offer: "Descuentos especiales para miembros" },
          { name: "Yoga Centre Flow", offer: "Ofertas exclusivas para la comunidad" },
          { name: "Brooklyn Fitboxing el Perchel", offer: "Condiciones especiales" },
          { name: "Flamingo Tour & Trips", offer: "Ofertas especiales en excursiones" },
          { name: "Celebreak", offer: "Ofertas para amantes del fútbol" },
        ],
      },
      {
        icon: UtensilsCrossed,
        label: "Comida y Bebida",
        partners: [
          { name: "Puerto Cristal", offer: "15% de descuento todos los días" },
          { name: "Copenhague Music Bar", offer: "Beneficios especiales para miembros" },
          { name: "Café Merced 14", offer: "Descuentos locales" },
          { name: "Grand Café Gezellig", offer: "Ofertas exclusivas" },
          { name: "Sabor a Nápoles", offer: "Ofertas de pizza y pasta" },
          { name: "Oakberry Açaí", offer: "Descuentos en bowls" },
          { name: "Toc-Toc Noodles", offer: "Especiales de comida asiática" },
          { name: "Mupanky Bowls", offer: "Ofertas de comida saludable" },
        ],
      },
    ] as Category[],
  },
  it: {
    tagline: "Vantaggi per i Membri",
    title: "Sconti e Offerte per i Nostri Membri",
    subtitle:
      "Essere membro di Innovation Campus porta più valore al tuo denaro. La nostra community può risparmiare con offerte e sconti esclusivi!",
    memberOnly: "Solo Membri",
    categories: [
      {
        icon: Briefcase,
        label: "Business e Servizi",
        partners: [
          {
            name: "Martínez Echevarría Abogados",
            offer: "Consulenza gratuita e tariffe speciali",
            detail: "Prenota a legal@innovationcampus.biz",
          },
          {
            name: "Adeslas Assicurazioni",
            offer: "Prezzi speciali per i membri",
            detail: "Info a info@innovationcampus.biz",
          },
          {
            name: "Go to Costa del Sol",
            offer: "Migliori prezzi per auto ed escursioni",
            detail: "Sconti disponibili alla reception",
          },
        ],
      },
      {
        icon: Dumbbell,
        label: "Sport e Tempo Libero",
        partners: [
          { name: "Hammam Al Ándalus", offer: "Sconti speciali per i membri" },
          { name: "Yoga Centre Flow", offer: "Offerte esclusive per la community" },
          { name: "Brooklyn Fitboxing el Perchel", offer: "Condizioni speciali" },
          { name: "Flamingo Tour & Trip", offer: "Offerte speciali sulle escursioni" },
          { name: "Celebreak", offer: "Offerte per gli amanti del calcio" },
        ],
      },
      {
        icon: UtensilsCrossed,
        label: "Cibo e Bevande",
        partners: [
          { name: "Puerto Cristal", offer: "15% di sconto ogni giorno" },
          { name: "Copenhague Music Bar", offer: "Vantaggi speciali per i membri" },
          { name: "Café Merced 14", offer: "Sconti locali" },
          { name: "Grand Café Gezellig", offer: "Offerte esclusive" },
          { name: "Sabor a Nápoles", offer: "Offerte pizza e pasta" },
          { name: "Oakberry Açaí", offer: "Sconti sui bowl" },
          { name: "Toc-Toc Noodles", offer: "Speciali cucina asiatica" },
          { name: "Mupanky Bowls", offer: "Offerte cibo sano" },
        ],
      },
    ] as Category[],
  },
};

export default function PartnersGrid() {
  const { ref, isVisible } = useScrollAnimation();
  const location = useLocation();
  const lang = location.pathname.startsWith("/es")
    ? "es"
    : location.pathname.startsWith("/it")
    ? "it"
    : "en";
  const t = translations[lang];

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div ref={ref} className={`scroll-animate ${isVisible ? "visible" : ""} text-center mb-16`}>
          <p className="font-body text-xs uppercase tracking-[0.3em] text-primary mb-4 font-semibold">
            {t.tagline}
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
            {t.title}
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* Categories */}
        <div className="space-y-16">
          {t.categories.map((cat, ci) => {
            const Icon = cat.icon;
            return (
              <div key={ci}>
                {/* Category header */}
                <div className="flex items-center gap-3 mb-8 pb-4 border-b border-border/50">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-display text-xl md:text-2xl font-bold text-foreground">
                    {cat.label}
                  </h3>
                </div>

                {/* Partner cards grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {cat.partners.map((partner, pi) => (
                    <div
                      key={pi}
                      className="group p-6 bg-card border border-border/40 hover:border-primary/40 hover:shadow-md transition-all duration-300"
                    >
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <h4 className="font-display text-base font-bold text-foreground leading-tight">
                          {partner.name}
                        </h4>
                        <Badge
                          variant="outline"
                          className="shrink-0 text-[10px] uppercase tracking-wider border-primary/30 text-primary font-body"
                        >
                          <Tag className="w-2.5 h-2.5 mr-1" />
                          {t.memberOnly}
                        </Badge>
                      </div>
                      <p className="font-body text-sm text-muted-foreground leading-relaxed">
                        {partner.offer}
                      </p>
                      {partner.detail && (
                        <p className="font-body text-xs text-primary/70 mt-2 italic">
                          {partner.detail}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
