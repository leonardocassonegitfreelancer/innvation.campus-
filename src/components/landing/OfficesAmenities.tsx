import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useLocation } from "react-router-dom";
import { Phone, Sparkles, DoorOpen, Smartphone, Headphones, MapPin } from "lucide-react";

const translations = {
  en: {
    tagline: "Included in Every Office",
    title: "What's Included",
    items: [
      { icon: Phone, label: "Reception Service", desc: "Our team receives your clients and handles calls." },
      { icon: Sparkles, label: "Cleaning & Maintenance", desc: "Daily professional cleaning of your workspace." },
      { icon: DoorOpen, label: "Smart Door Access", desc: "24/7 keyless, secure entry to your office." },
      { icon: Smartphone, label: "Innovation Campus App", desc: "Manage bookings, access & services from your phone." },
      { icon: Headphones, label: "Professional Support", desc: "On-site team ready to assist you at all times." },
      { icon: MapPin, label: "Multi-Location Access", desc: "Use any Innovation Campus across our network." },
    ],
  },
  es: {
    tagline: "Incluido en Cada Oficina",
    title: "¿Qué está incluido?",
    items: [
      { icon: Phone, label: "Servicio de Recepción", desc: "Nuestro equipo recibe a tus clientes y gestiona llamadas." },
      { icon: Sparkles, label: "Limpieza y Mantenimiento", desc: "Limpieza profesional diaria de tu espacio de trabajo." },
      { icon: DoorOpen, label: "Acceso Inteligente", desc: "Entrada sin llaves, segura, disponible 24/7." },
      { icon: Smartphone, label: "App Innovation Campus", desc: "Gestiona reservas, acceso y servicios desde tu móvil." },
      { icon: Headphones, label: "Soporte Profesional", desc: "Equipo en sitio listo para ayudarte en todo momento." },
      { icon: MapPin, label: "Acceso Multi-Ubicación", desc: "Usa cualquier Innovation Campus de nuestra red." },
    ],
  },
  it: {
    tagline: "Incluso in Ogni Ufficio",
    title: "Cosa È Incluso",
    items: [
      { icon: Phone, label: "Servizio Receptionist", desc: "Il nostro team riceve i tuoi clienti e gestisce le chiamate." },
      { icon: Sparkles, label: "Pulizie e Manutenzione", desc: "Pulizia professionale quotidiana del tuo spazio." },
      { icon: DoorOpen, label: "Accesso Smart", desc: "Ingresso senza chiavi, sicuro, disponibile 24/7." },
      { icon: Smartphone, label: "App Innovation Campus", desc: "Gestisci prenotazioni, accesso e servizi dal tuo telefono." },
      { icon: Headphones, label: "Supporto Professionale", desc: "Team in loco pronto ad assisterti in qualsiasi momento." },
      { icon: MapPin, label: "Accesso Multi-Location", desc: "Usa qualsiasi Innovation Campus del nostro network." },
    ],
  },
};

export default function OfficesAmenities() {
  const { ref, isVisible } = useScrollAnimation();
  const location = useLocation();
  const lang = location.pathname.startsWith("/es") ? "es" : location.pathname.startsWith("/it") ? "it" : "en";
  const t = translations[lang];

  return (
    <section className="py-20 md:py-28 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className={`scroll-animate ${isVisible ? "visible" : ""} text-center mb-16`}>
          <p className="font-body text-xs uppercase tracking-[0.3em] text-primary mb-4 font-semibold">
            {t.tagline}
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            {t.title}
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {t.items.map(({ icon: Icon, label, desc }, i) => (
            <div
              key={label}
              className="group p-8 bg-white border-l-2 border-transparent hover:border-primary transition-all duration-300 hover:shadow-md animate-fade-in"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="w-10 h-10 flex items-center justify-center bg-primary/10 mb-5 group-hover:bg-primary/20 transition-colors">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground mb-2">{label}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
