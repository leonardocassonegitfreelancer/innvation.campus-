import { MapPin, Mail, UserCheck, Image, Building, ShieldCheck } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useLocation } from "react-router-dom";

const translations = {
  en: {
    tagline: "Amenities",
    title: "What's Included",
    items: [
      { icon: ShieldCheck, label: "Legal Registration" },
      { icon: Building, label: "Commercial Address" },
      { icon: UserCheck, label: "Reception Service" },
      { icon: Image, label: "Company Logo" },
      { icon: Mail, label: "Mail Handling" },
      { icon: MapPin, label: "Prime Location" },
    ]
  },
  es: {
    tagline: "Servicios",
    title: "Qué está Incluido",
    items: [
      { icon: ShieldCheck, label: "Registro Legal" },
      { icon: Building, label: "Dirección Comercial" },
      { icon: UserCheck, label: "Servicio de Recepción" },
      { icon: Image, label: "Logotipo de Empresa" },
      { icon: Mail, label: "Gestión de Correo" },
      { icon: MapPin, label: "Ubicación Premium" },
    ]
  },
  it: {
    tagline: "Servizi",
    title: "Cosa è Incluso",
    items: [
      { icon: ShieldCheck, label: "Sede Legale" },
      { icon: Building, label: "Indirizzo Commerciale" },
      { icon: UserCheck, label: "Servizio Reception" },
      { icon: Image, label: "Logo Aziendale" },
      { icon: Mail, label: "Gestione Posta" },
      { icon: MapPin, label: "Posizione Premium" },
    ]
  }
};

export default function RegistrationIncludes() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation(0.1);
  const location = useLocation();
  const lang = location.pathname.startsWith("/es") ? "es" : location.pathname.startsWith("/it") ? "it" : "en";
  const t = translations[lang];

  return (
    <section className="py-20 md:py-28 bg-muted/50">
      <div className="max-w-5xl mx-auto px-6">
        <div ref={headerRef} className={`scroll-animate ${headerVisible ? "visible" : ""} text-center mb-14`}>
          <p className="font-body text-xs uppercase tracking-[0.3em] text-primary mb-4 font-semibold">
            {t.tagline}
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            {t.title}
          </h2>
        </div>

        <div ref={gridRef} className={`scroll-animate ${gridVisible ? "visible" : ""} grid grid-cols-2 sm:grid-cols-3 gap-8 max-w-4xl mx-auto`}>
          {t.items.map((item) => (
            <div key={item.label} className="flex flex-col items-center gap-3 text-center">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <p className="font-body text-sm font-semibold text-foreground">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
