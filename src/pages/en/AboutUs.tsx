import palaceCourtyard from "@/assets/palace-courtyard.webp";
import palaceCoworking from "@/assets/palace-coworking.webp";
import terraceCommunity from "@/assets/terrace-community.webp";
import historicExterior from "@/assets/historic-exterior.webp";

const _s = (img: unknown): string => typeof img === 'string' ? img : (img as any)?.src ?? '';

const translations = {
  en: {
    mission: {
      eyebrow: "Our Mission",
      title: "Where ambition meets the right environment",
      p1: "Innovation Campus provides companies, startups, and entrepreneurs with professional and stylish workspaces, outstanding service, and the opportunity to be part of a thriving entrepreneurial community.",
      p2: "We operate in mid-size cities that offer the right balance between successful business and quality of life — places where great ideas can grow without the noise of a megalopolis.",
    },
    stats: [
      { value: "2", label: "Countries" },
      { value: "4", label: "Locations" },
      { value: "3,200+", label: "Square Metres" },
      { value: "500+", label: "Members" },
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
      ],
    },
  },
  es: {
    mission: {
      eyebrow: "Nuestra Misión",
      title: "Donde la ambición encuentra el entorno adecuado",
      p1: "Innovation Campus ofrece a empresas, startups y emprendedores espacios de trabajo profesionales y elegantes, un servicio excelente y la oportunidad de formar parte de una próspera comunidad empresarial.",
      p2: "Operamos en ciudades de tamaño medio que ofrecen el equilibrio adecuado entre éxito empresarial y calidad de vida — lugares donde las grandes ideas pueden crecer sin el ruido de una megalópolis.",
    },
    stats: [
      { value: "2", label: "Países" },
      { value: "4", label: "Ubicaciones" },
      { value: "3.200+", label: "Metros Cuadrados" },
      { value: "500+", label: "Miembros" },
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
      ],
    },
  },
  it: {
    mission: {
      eyebrow: "La Nostra Missione",
      title: "Dove l'ambizione incontra l'ambiente giusto",
      p1: "Innovation Campus offre ad aziende, startup e imprenditori spazi di lavoro professionali ed eleganti, un servizio eccellente e l'opportunità di far parte di una fiorente comunità imprenditoriale.",
      p2: "Operiamo in città di medie dimensioni che offrono il giusto equilibrio tra business di successo e qualità della vita — luoghi dove le grandi idee possono crescere senza il rumore di una megalopoli.",
    },
    stats: [
      { value: "2", label: "Paesi" },
      { value: "4", label: "Location" },
      { value: "3.200+", label: "Metri Quadrati" },
      { value: "500+", label: "Membri" },
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
      ],
    },
  },
};

export default function AboutUs({ lang = "en" }: { lang?: "en" | "es" | "it" }) {
  const t = translations[lang];

  return (
    <>
      {/* Mission — editorial split */}
      <section className="py-24 md:py-36 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <p className="font-body text-xs uppercase tracking-[0.3em] text-primary mb-6 font-semibold">
              {t.mission.eyebrow}
            </p>
            <h2 className="font-display italic text-4xl md:text-5xl lg:text-6xl font-medium text-foreground mb-8 leading-tight">
              {t.mission.title}
            </h2>
            <div className="space-y-5 border-l-2 border-primary/20 pl-6">
              <p className="font-body text-lg text-foreground/70 leading-relaxed">
                {t.mission.p1}
              </p>
              <p className="font-body text-lg text-foreground/70 leading-relaxed">
                {t.mission.p2}
              </p>
            </div>
          </div>
          <div className="relative">
            <img
              src={_s(palaceCourtyard)}
              alt="Innovation Campus"
              className="w-full h-[500px] lg:h-[620px] object-cover rounded-2xl"
            />
            <img
              src={_s(palaceCoworking)}
              alt="Coworking"
              className="absolute -bottom-8 -left-8 w-48 h-36 object-cover rounded-xl shadow-2xl border-4 border-background hidden lg:block"
            />
          </div>
        </div>
      </section>

      {/* Stats — dark band */}
      <section className="py-20 bg-neutral-dark">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {t.stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-5xl md:text-7xl font-light text-primary mb-3 tracking-tight">
                  {stat.value}
                </p>
                <p className="font-body text-xs uppercase tracking-[0.25em] text-white/40">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo strip */}
      <section className="grid grid-cols-2 h-[40vh] md:h-[55vh]">
        <div className="relative overflow-hidden">
          <img src={_s(historicExterior)} alt="Historic campus" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-neutral-dark/30" />
        </div>
        <div className="relative overflow-hidden">
          <img src={_s(terraceCommunity)} alt="Community" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-neutral-dark/20" />
        </div>
      </section>

      {/* What we offer */}
      <section className="py-24 md:py-36 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="order-last lg:order-first">
            <img
              src={_s(terraceCommunity)}
              alt="Community events"
              className="w-full h-[480px] object-cover rounded-2xl"
            />
          </div>
          <div>
            <p className="font-body text-xs uppercase tracking-[0.3em] text-primary mb-6 font-semibold">
              {t.offer.eyebrow}
            </p>
            <h2 className="font-display italic text-4xl md:text-5xl font-medium text-foreground mb-10 leading-tight">
              {t.offer.title}
            </h2>
            <ul className="space-y-5">
              {t.offer.list.map((item) => (
                <li key={item} className="flex items-start gap-4 group">
                  <span className="w-5 h-5 rounded-full border border-primary/40 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-primary/10 transition-colors">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  </span>
                  <span className="font-body text-base text-foreground/75 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-24 bg-neutral-dark">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="font-body text-xs uppercase tracking-[0.3em] text-primary mb-4 font-semibold">
              {t.locations.eyebrow}
            </p>
            <h2 className="font-display italic text-4xl md:text-5xl font-medium text-primary-foreground">
              {t.locations.title}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10">
            {t.locations.list.map((loc) => (
              <div key={loc.city} className="bg-neutral-dark p-10 flex flex-col gap-6">
                <div>
                  <p className="font-body text-xs uppercase tracking-[0.25em] text-white/30 mb-2">
                    {loc.country}
                  </p>
                  <h3 className="font-display italic text-3xl font-medium text-primary-foreground">
                    {loc.city}
                  </h3>
                </div>
                <div className="space-y-2 mt-auto">
                  {loc.venues.map((v) => (
                    <a
                      key={v.href}
                      href={v.href}
                      className="block font-body text-sm text-white/50 hover:text-primary transition-colors duration-200"
                    >
                      {v.label} →
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
