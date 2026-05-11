import { CalendarDays, Sunset, Building2, Laptop, FileText, MessageCircle, ArrowRight } from "lucide-react";

type ServiceKey = "meeting-rooms" | "private-terrace" | "private-office" | "coworking" | "business-registration" | "general";

const leadBase: Record<"en" | "es" | "it", string> = {
  en: "/en/lead",
  es: "/es/lead",
  it: "/it/lead",
};

const content = {
  en: {
    tagline: "Get in Touch",
    title: "Start your journey",
    subtitle: "What are you looking for?",
    services: [
      { key: "meeting-rooms" as ServiceKey, icon: CalendarDays, title: "Meeting Rooms", desc: "Conference rooms for workshops, presentations and corporate events at Málaga Palace." },
      { key: "private-terrace" as ServiceKey, icon: Sunset, title: "Private Terrace", desc: "Outdoor venue with panoramic views for networking events and private receptions." },
      { key: "private-office" as ServiceKey, icon: Building2, title: "Private Office", desc: "Dedicated office spaces for your team, fully equipped and flexible." },
      { key: "coworking" as ServiceKey, icon: Laptop, title: "Coworking", desc: "Hot desks and dedicated desks in a vibrant professional community." },
      { key: "business-registration" as ServiceKey, icon: FileText, title: "Business Registration", desc: "Register your company at our address and access key business services." },
      { key: "general" as ServiceKey, icon: MessageCircle, title: "General Enquiry", desc: "Any other question? Our team will get back to you within 24 hours." },
    ],
  },
  es: {
    tagline: "Contáctanos",
    title: "Empieza tu camino",
    subtitle: "¿Qué estás buscando?",
    services: [
      { key: "meeting-rooms" as ServiceKey, icon: CalendarDays, title: "Salas de Reuniones", desc: "Salas de conferencias para talleres, presentaciones y eventos corporativos en Málaga Palace." },
      { key: "private-terrace" as ServiceKey, icon: Sunset, title: "Terraza Privada", desc: "Espacio exterior con vistas panorámicas para eventos de networking y recepciones privadas." },
      { key: "private-office" as ServiceKey, icon: Building2, title: "Oficina Privada", desc: "Espacios de oficina dedicados para tu equipo, totalmente equipados y flexibles." },
      { key: "coworking" as ServiceKey, icon: Laptop, title: "Coworking", desc: "Puestos flexibles y dedicados en una comunidad profesional vibrante." },
      { key: "business-registration" as ServiceKey, icon: FileText, title: "Registro de Empresa", desc: "Registra tu empresa en nuestra dirección y accede a servicios empresariales clave." },
      { key: "general" as ServiceKey, icon: MessageCircle, title: "Consulta General", desc: "¿Alguna otra pregunta? Nuestro equipo te responderá en 24 horas." },
    ],
  },
  it: {
    tagline: "Contattaci",
    title: "Inizia il tuo percorso",
    subtitle: "Cosa stai cercando?",
    services: [
      { key: "meeting-rooms" as ServiceKey, icon: CalendarDays, title: "Sale Riunioni", desc: "Sale conferenze per workshop, presentazioni ed eventi aziendali a Málaga Palace." },
      { key: "private-terrace" as ServiceKey, icon: Sunset, title: "Terrazza Privata", desc: "Spazio esterno con vista panoramica per eventi di networking e ricevimenti privati." },
      { key: "private-office" as ServiceKey, icon: Building2, title: "Ufficio Privato", desc: "Spazi ufficio dedicati per il tuo team, completamente attrezzati e flessibili." },
      { key: "coworking" as ServiceKey, icon: Laptop, title: "Coworking", desc: "Postazioni flessibili e dedicate in una vivace comunità professionale." },
      { key: "business-registration" as ServiceKey, icon: FileText, title: "Registrazione Aziendale", desc: "Registra la tua azienda al nostro indirizzo e accedi ai servizi aziendali chiave." },
      { key: "general" as ServiceKey, icon: MessageCircle, title: "Informazioni Generali", desc: "Qualsiasi altra domanda? Il nostro team ti risponderà entro 24 ore." },
    ],
  },
} as const;

export default function ContactSection({ lang = "en" }: { lang?: "en" | "es" | "it" }) {
  const t = content[lang];

  return (
    <section id="contact" className="relative py-24 md:py-36 bg-neutral-dark overflow-hidden">
      <div
        className="absolute inset-0 opacity-5"
        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }}
      />
      <div className="relative max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="font-body text-xs uppercase tracking-[0.4em] text-primary mb-4">{t.tagline}</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white">{t.title}</h2>
          <p className="font-body mt-4 text-white/60">{t.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {t.services.map(({ key, icon: Icon, title, desc }) => (
            <a
              key={key}
              href={`${leadBase[lang]}?service=${key}`}
              className="group text-left p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-primary/50 transition-all duration-200 flex flex-col gap-3"
            >
              <div className="flex items-start justify-between">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <ArrowRight className="w-4 h-4 text-white/20 group-hover:text-primary group-hover:translate-x-0.5 transition-all duration-200 mt-1" />
              </div>
              <div>
                <p className="font-body font-semibold text-white text-sm mb-1">{title}</p>
                <p className="font-body text-xs text-white/50 leading-relaxed">{desc}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
