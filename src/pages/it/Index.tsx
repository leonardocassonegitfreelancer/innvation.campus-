import Navbar from "@/components/landing/Navbar";
import MainHeroIT from "@/components/landing/it/MainHeroIT";
import AboutSectionIT from "@/components/landing/it/AboutSectionIT";
import ServicesSectionIT from "@/components/landing/it/ServicesSectionIT";
import QuoteSectionIT from "@/components/landing/it/QuoteSectionIT";
import LocationsSectionIT from "@/components/landing/it/LocationsSectionIT";
import FAQSectionIT from "@/components/landing/it/FAQSectionIT";
import ConferenceCTA from "@/components/landing/ConferenceCTA";
import FooterIT from "@/components/landing/it/FooterIT";
import SEOHead from "@/components/SEOHead";

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "CoworkingSpace",
  "name": "Innovation Campus",
  "description": "Due spazi di coworking a Málaga, Spagna. Uno nel centro storico, uno sul mare.",
  "url": "https://malaga-duality-landing.lovable.app/it",
  "address": [
    { "@type": "PostalAddress", "addressLocality": "Málaga", "addressCountry": "ES" },
    { "@type": "PostalAddress", "addressLocality": "Ancona", "addressCountry": "IT" }
  ],
  "openingHours": "Mo-Fr 09:00-19:00",
  "sameAs": []
};

const IndexIT = () => {
  return (
    <main className="overflow-x-hidden">
      <SEOHead
        title="Uffici - Coworking - Eventi"
        description="Due spazi di coworking a Málaga, Spagna. Uno nel centro storico, uno sul mare. Trova il tuo ritmo a Innovation/Campus."
        path="/it"
        jsonLd={localBusinessJsonLd}
      />
      <Navbar />
      <MainHeroIT />
      <AboutSectionIT />
      <ServicesSectionIT />
      <QuoteSectionIT />
      <LocationsSectionIT />
      <FAQSectionIT />
      <ConferenceCTA titleOverride={{ en: "Start your journey", es: "Comienza tu viaje", it: "Inizia il tuo viaggio" }} subtitleOverride={{ en: "Ask a question, check availability or become a member.", es: "Haz una pregunta, consulta disponibilidad o hazte miembro.", it: "Fai una domanda, verifica la disponibilità o diventa membro." }} />
      
      <FooterIT />
    </main>
  );
};

export default IndexIT;
