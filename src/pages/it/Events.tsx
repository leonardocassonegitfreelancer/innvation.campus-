import ServicePageLayout from "@/components/landing/ServicePageLayout";
import serviceCommunity from "@/assets/service-community.jpg";
import SEOHead from "@/components/SEOHead";


export default function EventsIT() {
  return (
    <>
      <SEOHead title="Eventi della Comunità" description="Connettiti, impara e cresci con vibranti eventi comunitari a Innovation Campus Málaga." path="/it/eventi" />
      <ServicePageLayout title="Eventi della Comunità" subtitle="Connettiti, impara e cresci con i nostri vibranti eventi comunitari." image={serviceCommunity} />
    </>
  );
}
