import SEOHead from "@/components/SEOHead";
import ServicePageLayout from "@/components/landing/ServicePageLayout";
import serviceCommunity from "@/assets/service-community.jpg";
import HostEventHero from "@/components/landing/HostEventHero";
import EventBentoGrid from "@/components/landing/EventBentoGrid";
import PremiumVenues from "@/components/landing/PremiumVenues";
import ConferenceCTA from "@/components/landing/ConferenceCTA";

export default function HostYourEvent() {
  return (
    <>
      <SEOHead
        title="Host Your Event"
        description="Host your next event at Innovation Campus. Unique venues in Málaga for conferences, workshops, networking, and private celebrations."
        path="/en/host-your-event"
      />
      <ServicePageLayout
        title="Host Your Event"
        subtitle="From corporate conferences to creative workshops — bring your vision to life in our unique spaces."
        image={serviceCommunity}
      >
        <HostEventHero />
        <EventBentoGrid />
        <PremiumVenues />
        <ConferenceCTA />
      </ServicePageLayout>
    </>
  );
}
