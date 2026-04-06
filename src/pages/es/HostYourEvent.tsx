import SEOHead from "@/components/SEOHead";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import EventHero from "@/components/landing/EventHero";
import EventSpacesGrid from "@/components/landing/EventSpacesGrid";
import EventDetails from "@/components/landing/EventDetails";

export default function HostYourEventES() {
  return (
    <>
      <SEOHead
        title="Organiza Tu Evento"
        description="Organiza tu próximo evento en Innovation Campus. Espacios únicos en Málaga para conferencias, talleres, networking y celebraciones privadas."
        path="/es/organiza-tu-evento"
      />
      <Navbar />
      <main>
        <EventHero />
        <EventSpacesGrid />
        <EventDetails />
      </main>
      <Footer />
    </>
  );
}
