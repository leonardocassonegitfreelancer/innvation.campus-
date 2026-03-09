import ServicePageLayout from "@/components/landing/ServicePageLayout";
import serviceCommunity from "@/assets/service-community.jpg";
import SEOHead from "@/components/SEOHead";

export default function EventsES() {
  return (
    <>
      <SEOHead
        title="Eventos Comunitarios"
        description="Conecta, aprende y crece con vibrantes eventos comunitarios en Innovation Campus Málaga."
        path="/es/eventos"
      />
      <ServicePageLayout
        title="Eventos Comunitarios"
        subtitle="Conecta, aprende y crece con nuestros vibrantes eventos comunitarios."
        image={serviceCommunity}
      />
    </>
  );
}
