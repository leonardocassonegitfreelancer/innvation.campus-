import { useLocation, Navigate } from "react-router-dom";
import { ArrowLeft, Users, CheckCircle2 } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import EventConversionForm from "@/components/landing/EventConversionForm";
import { spacesDataset } from "@/data/spaces";

export default function EventLeadCaptureIT() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const spaceSlug = searchParams.get("space");

  const space = spacesDataset.find((s) => s.slug === spaceSlug);

  if (!space) {
    return <Navigate to="/it/organizza-evento" replace />;
  }

  const tr = space.translations.it;
  const amentities = space.amenities.it;
  const otherSpaces = spacesDataset.filter(s => s.slug !== space.slug && s.location === space.location).slice(0, 3);

  return (
    <>
      <SEOHead
        title={`Richiedi - ${tr.name}`}
        description={`Richiedi la prenotazione di ${tr.name} a Innovation Campus.`}
        path={`/it/organizza-evento/lead?space=${space.slug}`}
      />
      <Navbar />
      <main className="pt-24 bg-muted/30">
        
        <section className="max-w-4xl mx-auto px-6 pt-12 pb-8">
          <a href="/it/organizza-evento" className="inline-flex items-center gap-2 font-body text-sm text-primary mb-8 hover:underline">
            <ArrowLeft className="w-4 h-4" /> Torna a tutti gli spazi
          </a>
          
          <div className="bg-card border border-border shadow-md rounded-3xl overflow-hidden flex flex-col md:flex-row">
            <div className="md:w-1/3 aspect-video md:aspect-auto relative">
              <img src={space.image} alt={tr.name} className="w-full h-full object-cover" />
              <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm border border-border px-3 py-1.5 rounded-full font-body text-xs font-bold uppercase tracking-wider text-primary">
                {tr.label}
              </div>
            </div>
            
            <div className="md:w-2/3 p-6 md:p-8 flex flex-col justify-center">
              <h1 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-3">{tr.name}</h1>
              <div className="flex items-center gap-2 mb-6">
                 <span className="font-body text-sm font-semibold text-muted-foreground bg-muted px-3 py-1 rounded-full flex items-center gap-2">
                   <Users className="w-4 h-4" /> {tr.capacityText}
                 </span>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {amentities.map((item, i) => (
                  <div key={i} className="flex items-center gap-2 font-body text-sm text-foreground/80">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <EventConversionForm />

        {otherSpaces.length > 0 && (
          <section className="py-20 bg-background border-t border-border">
            <div className="max-w-4xl mx-auto px-6">
              <h3 className="font-display font-bold text-2xl text-foreground mb-8">Indeciso? Guarda questi spazi</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {otherSpaces.map(altSpace => (
                  <a key={altSpace.slug} href={`/it/organizza-evento/lead?space=${altSpace.slug}`} className="group block bg-card rounded-2xl overflow-hidden border border-border hover:shadow-lg transition-all">
                     <div className="h-40 overflow-hidden relative">
                       <img src={altSpace.image} alt={altSpace.translations.it.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                     </div>
                     <div className="p-4">
                       <h4 className="font-display font-bold text-lg text-foreground mb-1">{altSpace.translations.it.name}</h4>
                       <p className="font-body text-sm text-muted-foreground">{altSpace.translations.it.capacityText}</p>
                     </div>
                  </a>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
