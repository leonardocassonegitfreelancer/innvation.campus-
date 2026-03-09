import Navbar from "@/components/landing/Navbar";
import MainHero from "@/components/landing/MainHero";
import AboutSection from "@/components/landing/AboutSection";
import ServicesSection from "@/components/landing/ServicesSection";
import QuoteSection from "@/components/landing/QuoteSection";
import LocationsSection from "@/components/landing/LocationsSection";
import FAQSection from "@/components/landing/FAQSection";
import ConferenceCTA from "@/components/landing/ConferenceCTA";
import Footer from "@/components/landing/Footer";
import SEOHead from "@/components/SEOHead";

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "CoworkingSpace",
  "name": "Innovation Campus",
  "description": "Two coworking spaces in Málaga, Spain. One in the historic heart, one by the sea.",
  "url": "https://malaga-duality-landing.lovable.app",
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

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <SEOHead
        title="Uffici - Coworking - Eventi"
        description="Two coworking spaces in Málaga, Spain. One in the historic heart, one by the sea. Find your rhythm at Innovation/Campus."
        path="/"
        jsonLd={localBusinessJsonLd}
      />
      <Navbar />
      <MainHero />
      <AboutSection />
      <ServicesSection />
      <QuoteSection />
      <LocationsSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
