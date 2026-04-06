import { Link, useLocation } from "react-router-dom";
import { CalendarDays, Building2, Users } from "lucide-react";

const translations = {
  en: {
    label: "Quick Links",
    links: [
      { title: "Host Your Event", description: "Conference rooms, terraces & custom setups", href: "/en/host-your-event", icon: CalendarDays },
      { title: "Book an Office", description: "Private offices for teams of any size", href: "/en/private-offices", icon: Building2 },
      { title: "Become a Coworker", description: "Flexible plans starting from one day", href: "/en/coworking-space", icon: Users },
    ],
  },
  es: {
    label: "Enlaces Rápidos",
    links: [
      { title: "Organiza Tu Evento", description: "Salas de conferencias, terrazas y montajes personalizados", href: "/es/organiza-tu-evento", icon: CalendarDays },
      { title: "Reserva una Oficina", description: "Oficinas privadas para equipos de cualquier tamaño", href: "/es/oficinas-privadas", icon: Building2 },
      { title: "Hazte Coworker", description: "Planes flexibles desde un día", href: "/es/coworking", icon: Users },
    ],
  },
  it: {
    label: "Link Utili",
    links: [
      { title: "Organizza un Evento", description: "Sale conferenze, terrazze e allestimenti personalizzati", href: "/it/organizza-evento", icon: CalendarDays },
      { title: "Prenota un Ufficio", description: "Uffici privati per team di qualsiasi dimensione", href: "/it/uffici-privati", icon: Building2 },
      { title: "Diventa Coworker", description: "Piani flessibili a partire da un giorno", href: "/it/coworking", icon: Users },
    ],
  },
};

export default function QuickLinks() {
  const location = useLocation();
  const lang = location.pathname.startsWith("/es") ? "es" : location.pathname.startsWith("/it") ? "it" : "en";
  const t = translations[lang];

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-5xl mx-auto px-6">
        <p className="font-body text-xs uppercase tracking-[0.4em] text-primary text-center mb-10">
          {t.label}
        </p>
        <div className="grid sm:grid-cols-3 gap-6">
          {t.links.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="group flex flex-col items-center text-center p-6 rounded-2xl border border-border bg-background hover:border-primary/40 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <link.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                {link.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground">
                {link.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
