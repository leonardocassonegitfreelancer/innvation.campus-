import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import SEOHead from "@/components/SEOHead";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import aboutCampus from "@/assets/about-campus.jpg";
import palaceCatering from "@/assets/palace-catering.jpg";
import serviceCoworking from "@/assets/service-coworking.jpg";

export default function AboutUsES() {
  return (
    <>
      <SEOHead
        title="Quiénes Somos — Innovation Campus"
        description="Innovation Campus crea espacios de trabajo inspiradores y cultiva comunidades emprendedoras internacionales en España e Italia."
        path="/es/quienes-somos"
      />
      <main className="overflow-x-hidden">
        <Navbar />

        {/* Hero */}
        <section className="relative h-[60vh] min-h-[400px] flex items-end">
          <img src={aboutCampus} alt="Innovation Campus" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-dark via-neutral-dark/40 to-transparent" />
          <div className="relative z-10 max-w-6xl mx-auto px-6 pb-12 w-full">
            <Link to="/es" className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm font-body mb-4 transition-colors">
              <ArrowLeft className="w-4 h-4" /> Volver al Inicio
            </Link>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-primary-foreground">Quiénes Somos</h1>
            <p className="font-body text-lg md:text-xl text-primary-foreground/70 mt-3 max-w-2xl">
              Espacios inspiradores. Comunidad internacional. Impacto real.
            </p>
          </div>
        </section>

        {/* Mission */}
        <section className="py-20 bg-background">
          <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="font-body text-xs uppercase tracking-[0.3em] text-primary mb-4 font-semibold">Nuestra Misión</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
                Donde la ambición encuentra el entorno adecuado
              </h2>
              <p className="font-body text-foreground/70 text-lg leading-relaxed mb-4">
                Innovation Campus ofrece a empresas, startups y emprendedores espacios de trabajo profesionales y con estilo, un servicio excepcional y la oportunidad de formar parte de una comunidad emprendedora en crecimiento.
              </p>
              <p className="font-body text-foreground/70 text-lg leading-relaxed">
                Operamos en ciudades de tamaño medio que ofrecen el equilibrio adecuado entre éxito profesional y calidad de vida — lugares donde las grandes ideas pueden crecer sin el ruido de las grandes metrópolis.
              </p>
            </div>
            <img
              src={serviceCoworking}
              alt="Coworking en Innovation Campus"
              className="w-full h-80 object-cover rounded-2xl"
            />
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 bg-neutral-dark">
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { value: "2", label: "Países" },
                { value: "3", label: "Ciudades" },
                { value: "3.200+", label: "Metros Cuadrados" },
                { value: "4", label: "Sedes" },
              ].map((stat) => (
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
              src={palaceCatering}
              alt="Eventos Innovation Campus"
              className="w-full h-80 object-cover rounded-2xl order-last lg:order-first"
            />
            <div>
              <p className="font-body text-xs uppercase tracking-[0.3em] text-primary mb-4 font-semibold">Qué Hacemos</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
                Mucho más que un espacio de trabajo
              </h2>
              <ul className="space-y-4">
                {[
                  "Coworking, oficinas privadas y salas de reuniones",
                  "Registro de empresas y servicios empresariales",
                  "Eventos comunitarios, networking y talleres",
                  "Programas Academy para emprendedores",
                  "Apoyo y aceleración para startups",
                ].map((item) => (
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
            <p className="font-body text-xs uppercase tracking-[0.3em] text-primary mb-4 font-semibold">Nuestras Sedes</p>
            <h2 className="font-display text-3xl font-bold text-foreground">España & Italia</h2>
          </div>
          <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { city: "Málaga", country: "España", venues: [{ label: "Málaga Palace", href: "/es/malaga-palace" }, { label: "Málaga Terrace", href: "/es/malaga-terrace" }] },
              { city: "Ancona", country: "Italia", venues: [{ label: "Innovation Campus Ancona", href: "/es/ancona" }] },
              { city: "Olbia", country: "Italia", venues: [{ label: "Innovation Campus Olbia", href: "/es/olbia" }] },
            ].map((loc) => (
              <div key={loc.city} className="bg-background border border-border rounded-2xl p-6">
                <p className="font-body text-xs uppercase tracking-widest text-muted-foreground mb-1">{loc.country}</p>
                <h3 className="font-display text-xl font-bold text-foreground mb-3">{loc.city}</h3>
                {loc.venues.map((v) => (
                  <Link key={v.href} to={v.href} className="block font-body text-sm text-primary hover:underline">
                    {v.label} →
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
