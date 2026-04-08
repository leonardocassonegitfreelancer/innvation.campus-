import SEOHead from "@/components/SEOHead";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import EventHero from "@/components/landing/EventHero";
import EventSocialProof from "@/components/landing/EventSocialProof";
import EventSpacesGrid from "@/components/landing/EventSpacesGrid";
import EventDetails from "@/components/landing/EventDetails";
import EventConversionForm from "@/components/landing/EventConversionForm";

export default function HostYourEventIT() {
  return (
    <>
      <SEOHead
        title="Organizza il Tuo Evento"
        description="Organizza il tuo prossimo evento a Innovation Campus. Location uniche a Málaga per conferenze, workshop, networking e celebrazioni private."
        path="/it/organizza-evento"
      />
      <Navbar />
      <main>
        <EventHero />
        <EventSocialProof />
        <EventSpacesGrid />
        <EventDetails />
        <EventConversionForm />
      </main>
      <Footer />
    </>
  );
}
