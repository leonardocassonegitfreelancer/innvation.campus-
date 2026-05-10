import { MapPin, Clock, Phone, Mail } from "lucide-react";
import ContactSection from "@/components/landing/ContactSection";

const translations = {
  en: {
    tagline: "Get in touch",
    title: "Contact Us",
    subtitle: "Fill in the form or reach us directly at any of our locations.",
    locations: {
      label: "Come and find us",
      hours: "Mon–Fri 09:30–18:30",
      historic: "Historic Center",
      seaside: "Sea Side",
      italy: "Italy",
      sardinia: "Sardinia",
    },
  },
  es: {
    tagline: "Contáctanos",
    title: "Contacto",
    subtitle: "Rellena el formulario o contáctanos directamente en cualquiera de nuestras sedes.",
    locations: {
      label: "Ven a visitarnos",
      hours: "Lun–Vie 09:30–18:30",
      historic: "Centro Histórico",
      seaside: "Frente al Mar",
      italy: "Italia",
      sardinia: "Cerdeña",
    },
  },
  it: {
    tagline: "Contattaci",
    title: "Contatti",
    subtitle: "Compila il modulo oppure contattaci direttamente in una delle nostre sedi.",
    locations: {
      label: "Vieni a trovarci",
      hours: "Lun–Ven 09:30–18:30",
      historic: "Centro Storico",
      seaside: "Lungomare",
      italy: "Italia",
      sardinia: "Sardegna",
    },
  },
};

export default function Contact({ lang = "en" }: { lang?: "en" | "es" | "it" }) {
  const t = translations[lang];

  const locations = [
    {
      name: "Málaga Palace",
      subtitle: t.locations.historic,
      address: "Calle Álamos 7, 29012 Málaga",
      phone: "+34 671 44 12 88",
      email: "info@innovationcampus.biz",
      mapUrl: "https://maps.google.com/?q=Calle+Álamos+7+29012+Málaga",
    },
    {
      name: "Málaga Terrace",
      subtitle: t.locations.seaside,
      address: "Calle Puerto 14, 29016 Málaga",
      phone: "+34 676 94 39 78",
      email: "malaga.terrace@innovationcampus.biz",
      mapUrl: "https://maps.google.com/?q=Calle+Puerto+14+29016+Málaga",
    },
    {
      name: "Ancona",
      subtitle: t.locations.italy,
      address: "Via Montebello 71, 60122 Ancona AN",
      phone: "+39 338 335 5908",
      email: "michela@i-campus.biz",
      mapUrl: "https://maps.google.com/?q=Via+Montebello+71+60122+Ancona",
    },
    {
      name: "Olbia",
      subtitle: t.locations.sardinia,
      address: "Via Georgia 11, Torre 2, Piano 1, 07026 Olbia SS",
      phone: "+39 338 335 5908",
      email: "olbia@innovationcampus.biz",
      mapUrl: "https://maps.google.com/?q=Via+Georgia+11+07026+Olbia",
    },
  ];

  return (
    <main className="overflow-x-hidden">
      {/* Header */}
      <section className="bg-neutral-dark pt-32 pb-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="font-body text-xs uppercase tracking-[0.3em] text-primary mb-3 font-semibold">
            {t.tagline}
          </p>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-primary-foreground">
            {t.title}
          </h1>
          <p className="font-body text-lg text-primary-foreground/60 mt-4 max-w-xl mx-auto">
            {t.subtitle}
          </p>
        </div>
      </section>

      {/* Contact form */}
      <ContactSection lang={lang} />

      {/* Compact locations */}
      <section className="py-20 bg-muted/40">
        <div className="max-w-6xl mx-auto px-6">
          <p className="font-body text-xs uppercase tracking-[0.3em] text-primary mb-10 font-semibold text-center">
            {t.locations.label}
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {locations.map((loc) => (
              <div key={loc.name} className="rounded-xl border border-border bg-card p-6 flex flex-col gap-3">
                <div>
                  <h3 className="font-display text-lg font-bold text-foreground">{loc.name}</h3>
                  <p className="font-body text-xs text-muted-foreground">{loc.subtitle}</p>
                </div>
                <a href={loc.mapUrl} target="_blank" rel="noopener noreferrer"
                  className="flex items-start gap-2 text-sm font-body text-muted-foreground hover:text-primary transition-colors">
                  <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  {loc.address}
                </a>
                <div className="flex items-center gap-2 text-sm font-body text-muted-foreground">
                  <Clock className="w-4 h-4 text-primary shrink-0" />
                  {t.locations.hours}
                </div>
                <a href={`tel:${loc.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-2 text-sm font-body text-muted-foreground hover:text-primary transition-colors">
                  <Phone className="w-4 h-4 text-primary shrink-0" />
                  {loc.phone}
                </a>
                <a href={`mailto:${loc.email}`}
                  className="flex items-center gap-2 text-sm font-body text-muted-foreground hover:text-primary transition-colors break-all">
                  <Mail className="w-4 h-4 text-primary shrink-0" />
                  {loc.email}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
