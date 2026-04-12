import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import SEOHead from "@/components/SEOHead";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import aboutCampus from "@/assets/about-campus.jpg";
import palaceCatering from "@/assets/palace-catering.jpg";
import serviceCoworking from "@/assets/service-coworking.jpg";

export default function AboutUsIT() {
  return (
    <>
      <SEOHead
        title="Chi Siamo — Innovation Campus"
        description="Innovation Campus crea spazi di lavoro ispiranti e coltiva comunità imprenditoriali internazionali in Spagna e Italia."
        path="/it/chi-siamo"
      />
      <main className="overflow-x-hidden">
        <Navbar />

        {/* Hero */}
        <section className="relative h-[60vh] min-h-[400px] flex items-end">
          <img src={aboutCampus} alt="Innovation Campus" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-dark via-neutral-dark/40 to-transparent" />
          <div className="relative z-10 max-w-6xl mx-auto px-6 pb-12 w-full">
            <Link to="/it" className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm font-body mb-4 transition-colors">
              <ArrowLeft className="w-4 h-4" /> Torna alla Home
            </Link>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-primary-foreground">Chi Siamo</h1>
            <p className="font-body text-lg md:text-xl text-primary-foreground/70 mt-3 max-w-2xl">
              Spazi ispiranti. Comunità internazionale. Impatto reale.
            </p>
          </div>
        </section>

        {/* Mission */}
        <section className="py-20 bg-background">
          <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="font-body text-xs uppercase tracking-[0.3em] text-primary mb-4 font-semibold">La Nostra Missione</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
                Dove l'ambizione incontra l'ambiente giusto
              </h2>
              <p className="font-body text-foreground/70 text-lg leading-relaxed mb-4">
                Innovation Campus offre ad aziende, startup e imprenditori spazi di lavoro professionali e curati, un servizio eccellente e l'opportunità di far parte di una comunità imprenditoriale in crescita.
              </p>
              <p className="font-body text-foreground/70 text-lg leading-relaxed">
                Operiamo in città di medie dimensioni che offrono il giusto equilibrio tra successo professionale e qualità della vita — luoghi dove le idee possono crescere senza il caos delle grandi metropoli.
              </p>
            </div>
            <img
              src={serviceCoworking}
              alt="Coworking a Innovation Campus"
              className="w-full h-80 object-cover rounded-2xl"
            />
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 bg-neutral-dark">
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { value: "2", label: "Paesi" },
                { value: "3", label: "Città" },
                { value: "3.200+", label: "Metri Quadri" },
                { value: "4", label: "Sedi" },
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
              alt="Eventi Innovation Campus"
              className="w-full h-80 object-cover rounded-2xl order-last lg:order-first"
            />
            <div>
              <p className="font-body text-xs uppercase tracking-[0.3em] text-primary mb-4 font-semibold">Cosa Facciamo</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
                Molto più di uno spazio di lavoro
              </h2>
              <ul className="space-y-4">
                {[
                  "Coworking, uffici privati e sale riunioni",
                  "Registrazione aziendale e servizi alle imprese",
                  "Eventi comunitari, networking e workshop",
                  "Programmi Academy per imprenditori",
                  "Supporto e accelerazione per startup",
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
            <p className="font-body text-xs uppercase tracking-[0.3em] text-primary mb-4 font-semibold">Le Nostre Sedi</p>
            <h2 className="font-display text-3xl font-bold text-foreground">Spagna & Italia</h2>
          </div>
          <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { city: "Málaga", country: "Spagna", venues: [{ label: "Málaga Palace", href: "/it/malaga-palace" }, { label: "Málaga Terrace", href: "/it/malaga-terrace" }] },
              { city: "Ancona", country: "Italia", venues: [{ label: "Innovation Campus Ancona", href: "/it/ancona" }] },
              { city: "Olbia", country: "Italia", venues: [{ label: "Innovation Campus Olbia", href: "/it/olbia" }] },
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
