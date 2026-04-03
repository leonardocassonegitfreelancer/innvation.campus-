import SEOHead from "@/components/SEOHead";
import ServicePageLayout from "@/components/landing/ServicePageLayout";
import serviceCommunity from "@/assets/service-community.jpg";
import HostEventHero from "@/components/landing/HostEventHero";
import EventBentoGrid from "@/components/landing/EventBentoGrid";
import PremiumVenues from "@/components/landing/PremiumVenues";
import ConferenceCTA from "@/components/landing/ConferenceCTA";

export default function HostYourEventIT() {
  return (
    <>
      <SEOHead title="Organizza il Tuo Evento" description="Organizza il tuo prossimo evento a Innovation Campus. Location uniche a Málaga per conferenze, workshop, networking e celebrazioni private." path="/it/organizza-evento" />
      <ServicePageLayout title="Organizza il Tuo Evento" subtitle="Da conferenze aziendali a workshop creativi — dai vita alla tua visione nei nostri spazi unici." image={serviceCommunity}>
        <HostEventHero />
        <EventBentoGrid />
        <PremiumVenues />
        <ConferenceCTA />
      </ServicePageLayout>
    </>
  );
}
