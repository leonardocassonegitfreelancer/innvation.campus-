import SEOHead from "@/components/SEOHead";
import ServicePageLayout from "@/components/landing/ServicePageLayout";
import serviceCommunity from "@/assets/service-community.jpg";
import HostEventHero from "@/components/landing/HostEventHero";
import EventBentoGrid from "@/components/landing/EventBentoGrid";
import PremiumVenues from "@/components/landing/PremiumVenues";
import ConferenceCTA from "@/components/landing/ConferenceCTA";

export default function HostYourEventES() {
  return (
    <>
      <SEOHead
        title="Organiza Tu Evento"
        description="Organiza tu próximo evento en Innovation Campus. Espacios únicos en Málaga para conferencias, talleres, networking y celebraciones privadas."
        path="/es/organiza-tu-evento"
      />
      <ServicePageLayout
        title="Organiza Tu Evento"
        subtitle="Desde conferencias corporativas hasta talleres creativos — da vida a tu visión en nuestros espacios únicos."
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
