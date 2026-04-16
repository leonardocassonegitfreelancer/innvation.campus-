import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import SEOHead from "@/components/SEOHead";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import palaceCourtyard from "@/assets/palace-courtyard.webp";
import serviceCommunity from "@/assets/service-community.webp";

export default function GalleryES() {
  return (
    <>
      <SEOHead
        title="Galería — Innovation Campus"
        description="Explora fotos de nuestros espacios y eventos comunitarios en Málaga, Ancona y Olbia."
        path="/es/galeria"
      />
      <main className="overflow-x-hidden">
        <Navbar />
        <section className="relative h-[50vh] min-h-[360px] flex items-end">
          <img src={palaceCourtyard} alt="Innovation Campus" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-dark via-neutral-dark/40 to-transparent" />
          <div className="relative z-10 max-w-6xl mx-auto px-6 pb-12 w-full">
            <Link to="/es" className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm font-body mb-4 transition-colors">
              <ArrowLeft className="w-4 h-4" /> Volver al Inicio
            </Link>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-primary-foreground">Galería</h1>
            <p className="font-body text-lg text-primary-foreground/70 mt-3">Nuestros espacios y momentos de comunidad.</p>
          </div>
        </section>
        <section className="py-20 bg-background">
          <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
            <a href="/es/galeria/espacios" className="group block overflow-hidden rounded-3xl border border-border shadow-sm hover:shadow-xl transition-all duration-500">
              <div className="relative h-64 overflow-hidden">
                <img src={palaceCourtyard} alt="Espacios" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-dark/80 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <h2 className="font-display text-2xl font-bold text-primary-foreground mb-1">Espacios</h2>
                  <p className="font-body text-sm text-primary-foreground/70">Coworking, salas de reuniones y venues</p>
                </div>
              </div>
              <div className="px-6 py-4 bg-card">
                <span className="font-body font-bold text-sm uppercase tracking-widest text-primary">Ver espacios →</span>
              </div>
            </a>
            <a href="/es/galeria/eventos" className="group block overflow-hidden rounded-3xl border border-border shadow-sm hover:shadow-xl transition-all duration-500">
              <div className="relative h-64 overflow-hidden">
                <img src={serviceCommunity} alt="Eventos" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-dark/80 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <h2 className="font-display text-2xl font-bold text-primary-foreground mb-1">Eventos</h2>
                  <p className="font-body text-sm text-primary-foreground/70">Networking, talleres y charlas</p>
                </div>
              </div>
              <div className="px-6 py-4 bg-card">
                <span className="font-body font-bold text-sm uppercase tracking-widest text-primary">Ver eventos →</span>
              </div>
            </a>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
