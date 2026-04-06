import SEOHead from "@/components/SEOHead";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import EventHero from "@/components/landing/EventHero";
import EventSpacesGrid from "@/components/landing/EventSpacesGrid";
import EventDetails from "@/components/landing/EventDetails";

export default function HostYourEvent() {
  return (
    <>
      <SEOHead
        title="Host Your Event"
        description="Host your next event at Innovation Campus. Unique venues in Málaga for conferences, workshops, networking, and private celebrations."
        path="/en/host-your-event"
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
