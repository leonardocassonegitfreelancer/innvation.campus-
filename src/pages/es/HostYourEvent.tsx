import ServicePageLayout from "@/components/landing/ServicePageLayout";
import serviceCommunity from "@/assets/service-community.jpg";
import SEOHead from "@/components/SEOHead";

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
      />
    </>
  );
}
