import ServicePageLayout from "@/components/landing/ServicePageLayout";
import serviceTerrace from "@/assets/service-terrace.jpg";
import SEOHead from "@/components/SEOHead";

export default function PrivateTerraceES() {
  return (
    <>
      <SEOHead
        title="Terraza Privada"
        description="Un espacio exterior exclusivo con opciones de catering para tus eventos y reuniones en Málaga."
        path="/es/terraza-privada"
      />
      <ServicePageLayout
        title="Terraza Privada"
        subtitle="Un espacio exterior exclusivo con opciones de catering para tus eventos y reuniones."
        image={serviceTerrace}
      />
    </>
  );
}
