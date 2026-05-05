import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import SEOHead from "@/components/SEOHead";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import aboutCampus from "@/assets/about-campus.webp";
import palaceCatering from "@/assets/palace-catering.webp";
import serviceCoworking from "@/assets/service-coworking.webp";

const _s = (img: unknown): string => typeof img === 'string' ? img : (img as any)?.src ?? '';

const translations = {
  en: {
    back: "Back to Home",
    title: "About Us",
    subtitle: "Inspiring workspaces. International community. Real impact.",
    mission: {
      eyebrow: "Our Mission",
      title: "Where ambition meets the right environment",
      p1: "Innovation Campus provides companies, startups, and entrepreneurs with professional and stylish workspaces, outstanding service, and the opportunity to be part of a thriving entrepreneurial community.",
      p2: "We operate in mid-size cities that offer the right balance between successful business and quality of life — places where great ideas can grow without the noise of a megalopolis.",
    },
    stats: [
      { value: "2", label: "Countries" },
      { value: "3", label: "Cities" },
      { value: "3,200+", label: "Square Metres" },
      { value: "4", label: "Locations" },
    ],
    offer: {
      eyebrow: "What We Do",
      title: "More than a workspace",
      list: [
        "Coworking spaces, private offices and meeting rooms",
        "Business registration and company services",
        "Community events, networking and workshops",
        "Academy programmes for entrepreneurs",
        "Startup support and acceleration",
      ],
    },
    locations: {
      eyebrow: "Our Locations",
      title: "Spain & Italy",
      list: [
        { city: "Málaga", country: "Spain", venues: [{ label: "Málaga Palace", href: "/en/malaga-palace" }, { label: "Málaga Terrace", href: "/en/malaga-terrace" }] },
        { city: "Ancona", country: "Italy", venues: [{ label: "Innovation Campus Ancona", href: "/en/ancona" }] },
        { city: "Olbia", country: "Italy", venues: [{ label: "Innovation Campus Olbia", href: "/en/olbia" }] },
      ]
    }
  },
  es: {
    back: "Volver al inicio",
    title: "Sobre Nosotros",
    subtitle: "Espacios inspiradores. Comunidad internacional. Impacto real.",
    mission: {
      eyebrow: "Nuestra Misión",
      title: "Donde la ambición encuentra el entorno adecuado",
      p1: "Innovation Campus ofrece a empresas, startups y emprendedores espacios de trabajo profesionales y elegantes, un servicio excelente y la oportunidad de formar parte de una próspera comunidad empresarial.",
      p2: "Operamos en ciudades de tamaño medio che ofrecen el equilibrio adecuado entre éxito empresarial y calidad de vida, lugares donde las grandes ideas pueden crecer sin el ruido de una megalópolis.",
    },
    stats: [
      { value: "2", label: "Países" },
      { value: "3", label: "Ciudades" },
      { value: "3.200+", label: "Metros Cuadrados" },
      { value: "4", label: "Ubicaciones" },
    ],
    offer: {
      eyebrow: "Qué Hacemos",
      title: "Más que un espacio de trabajo",
      list: [
        "Espacios de coworking, oficinas privadas y salas de reuniones",
        "Registro de empresas y servicios corporativos",
        "Eventos comunitarios, networking y talleres",
        "Programas de academia para emprendedores",
        "Apoyo y aceleración de startups",
      ],
    },
    locations: {
      eyebrow: "Nuestras Ubicaciones",
      title: "España e Italia",
      list: [
        { city: "Málaga", country: "España", venues: [{ label: "Málaga Palace", href: "/es/malaga-palace" }, { label: "Málaga Terrace", href: "/es/malaga-terrace" }] },
        { city: "Ancona", country: "Italia", venues: [{ label: "Innovation Campus Ancona", href: "/es/ancona" }] },
        { city: "Olbia", country: "Italia", venues: [{ label: "Innovation Campus Olbia", href: "/es/olbia" }] },
      ]
    }
  },
  it: {
    back: "Torna alla Home",
    title: "Chi Siamo",
    subtitle: "Spazi di lavoro ispiratori. Comunità internazionale. Impatto reale.",
    mission: {
      eyebrow: "La Nostra Missione",
      title: "Dove l'ambizione incontra l'ambiente giusto",
      p1: "Innovation Campus offre ad aziende, startup e imprenditori spazi di lavoro professionali ed eleganti, un servizio eccellente e l'opportunità di far parte di una fiorente comunità imprenditoriale.",
      p2: "Operiamo in città di medie dimensioni che offrono il giusto equilibrio tra business di successo e qualità della vita — luoghi dove le grandi idee possono crescere senza il rumore di una megalopoli.",
    },
    stats: [
      { value: "2", label: "Paesi" },
      { value: "3", label: "Città" },
      { value: "3.200+", label: "Metri Quadrati" },
      { value: "4", label: "Location" },
    ],
    offer: {
      eyebrow: "Cosa Facciamo",
      title: "Più di uno spazio di lavoro",
      list: [
        "Spazi di coworking, uffici privati e sale riunioni",
        "Registrazione aziendale e servizi per le imprese",
        "Eventi comunitari, networking e workshop",
        "Programmi di accademia per imprenditori",
        "Supporto e accelerazione startup",
      ],
    },
    locations: {
      eyebrow: "Le Nostre Location",
      title: "Spagna e Italia",
      list: [
        { city: "Málaga", country: "Spagna", venues: [{ label: "Málaga Palace", href: "/it/malaga-palace" }, { label: "Málaga Terrace", href: "/it/malaga-terrace" }] },
        { city: "Ancona", country: "Italia", venues: [{ label: "Innovation Campus Ancona", href: "/it/ancona" }] },
        { city: "Olbia", country: "Italia", venues: [{ label: "Innovation Campus Olbia", href: "/it/olbia" }] },
      ]
    }
  }
};

export default function AboutUs({ lang = "en" }: { lang?: "en" | "es" | "it" }) {
  const t = translations[lang];

  return (
    <main className="overflow-x-hidden">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-end">
        <img src={_s(aboutCampus)} alt="Innovation Campus" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-dark via-neutral-dark/40 to-transparent" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 pb-12 w-full">
          <a href={lang === "en" ? "/" : `/${lang}`} className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm font-body mb-4 transition-colors">
            <ArrowLeft className="w-4 h-4" /> {t.back}
          </a>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-primary-foreground">{t.title}</h1>
          <p className="font-body text-lg md:text-xl text-primary-foreground/70 mt-3 max-w-2xl">
            {t.subtitle}
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-background">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="font-body text-xs uppercase tracking-[0.3em] text-primary mb-4 font-semibold">{t.mission.eyebrow}</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
              {t.mission.title}
            </h2>
            <p className="font-body text-foreground/70 text-lg leading-relaxed mb-4">
              {t.mission.p1}
            </p>
            <p className="font-body text-foreground/70 text-lg leading-relaxed">
              {t.mission.p2}
            </p>
          </div>
          <img
            src={_s(serviceCoworking)}
            alt="Coworking at Innovation Campus"
            className="w-full h-80 object-cover rounded-2xl"
          />
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-neutral-dark">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {t.stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</p>
                <p className="font-body text-sm uppercase tracking-widest text-primary-foreground/60">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we offer */}
      <section className="py-20 bg-background">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <img
            src={_s(palaceCatering)}
            alt="Innovation Campus events"
            className="w-full h-80 object-cover rounded-2xl order-last lg:order-first"
          />
          <div>
            <p className="font-body text-xs uppercase tracking-[0.3em] text-primary mb-4 font-semibold">{t.offer.eyebrow}</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
              {t.offer.title}
            </h2>
            <ul className="space-y-4">
              {t.offer.list.map((item) => (
                <li key={item} className="flex items-start gap-3 font-body text-foreground/70">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-16 bg-muted/30 border-t border-border">
        <div className="max-w-5xl mx-auto px-6 text-center mb-12">
          <p className="font-body text-xs uppercase tracking-[0.3em] text-primary mb-4 font-semibold">{t.locations.eyebrow}</p>
          <h2 className="font-display text-3xl font-bold text-foreground">{t.locations.title}</h2>
        </div>
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.locations.list.map((loc) => (
            <div key={loc.city} className="bg-background border border-border rounded-2xl p-6">
              <p className="font-body text-xs uppercase tracking-widest text-muted-foreground mb-1">{loc.country}</p>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">{loc.city}</h3>
              {loc.venues.map((v) => (
                <a key={v.href} href={v.href} className="block font-body text-sm text-primary hover:underline">
                  {v.label} →
                </a>
              ))}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
