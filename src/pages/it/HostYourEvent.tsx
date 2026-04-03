import ServicePageLayout from "@/components/landing/ServicePageLayout";
import serviceCommunity from "@/assets/service-community.jpg";
import SEOHead from "@/components/SEOHead";

export default function HostYourEventIT() {
  return (
    <>
      <SEOHead title="Organizza il Tuo Evento" description="Organizza il tuo prossimo evento a Innovation Campus. Location uniche a Málaga per conferenze, workshop, networking e celebrazioni private." path="/it/organizza-evento" />
      <ServicePageLayout title="Organizza il Tuo Evento" subtitle="Da conferenze aziendali a workshop creativi — dai vita alla tua visione nei nostri spazi unici." image={serviceCommunity} />
    </>
  );
}
