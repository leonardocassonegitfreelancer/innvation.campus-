import Navbar from "@/components/landing/Navbar";
import MainHero from "@/components/landing/MainHero";
import AboutSection from "@/components/landing/AboutSection";
import ServicesSection from "@/components/landing/ServicesSection";
import QuoteSection from "@/components/landing/QuoteSection";
import LocationsSection from "@/components/landing/LocationsSection";
import FAQSection from "@/components/landing/FAQSection";
import ContactSection from "@/components/landing/ContactSection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <main className="overflow-x-hidden">
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
