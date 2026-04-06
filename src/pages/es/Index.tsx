import Navbar from "@/components/landing/Navbar";
import MainHeroES from "@/components/landing/es/MainHeroES";
import AboutSectionES from "@/components/landing/es/AboutSectionES";
import ServicesSectionES from "@/components/landing/es/ServicesSectionES";
import QuoteSectionES from "@/components/landing/es/QuoteSectionES";
import LocationsSectionES from "@/components/landing/es/LocationsSectionES";
import FAQSectionES from "@/components/landing/es/FAQSectionES";
import ConferenceCTA from "@/components/landing/ConferenceCTA";
import QuickLinks from "@/components/landing/QuickLinks";
import FooterES from "@/components/landing/es/FooterES";
import SEOHead from "@/components/SEOHead";

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "CoworkingSpace",
  "name": "Innovation Campus",
  "description": "Dos espacios de coworking en Málaga, España. Uno en el centro histórico, otro junto al mar.",
  "url": "https://malaga-duality-landing.lovable.app/es",
  "address": [
    {
      "@type": "PostalAddress",
      "addressLocality": "Málaga",
      "addressCountry": "ES"
    },
    {
      "@type": "PostalAddress",
      "addressLocality": "Ancona",
      "addressCountry": "IT"
    }
  ],
  "openingHours": "Mo-Fr 09:00-19:00",
  "sameAs": []
};

const IndexES = () => {
  return (
    <main className="overflow-x-hidden">
      <SEOHead
        title="Oficinas - Coworking - Eventos"
        description="Dos espacios de coworking en Málaga, España. Uno en el centro histórico, otro junto al mar. Encuentra tu ritmo en Innovation/Campus."
        path="/es"
        jsonLd={localBusinessJsonLd}
      />
      <Navbar />
      <MainHeroES />
      <AboutSectionES />
      <ServicesSectionES />
      <QuoteSectionES />
      <LocationsSectionES />
      <FAQSectionES />
      <ConferenceCTA titleOverride={{ en: "Start your journey", es: "Comienza tu viaje", it: "Inizia il tuo viaggio" }} subtitleOverride={{ en: "Ask a question, check availability or become a member.", es: "Haz una pregunta, consulta disponibilidad o hazte miembro.", it: "Fai una domanda, verifica la disponibilità o diventa membro." }} />
      <FooterES />
    </main>
  );
};

export default IndexES;
