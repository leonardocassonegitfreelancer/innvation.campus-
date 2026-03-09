import ServicePageLayout from "@/components/landing/ServicePageLayout";
import servicePerks from "@/assets/service-perks.jpg";
import SEOHead from "@/components/SEOHead";

export default function BenefitsES() {
  return (
    <>
      <SEOHead
        title="Beneficios para Miembros"
        description="Descuentos y ofertas exclusivas para los miembros de Innovation Campus."
        path="/es/beneficios"
      />
      <ServicePageLayout
        title="Beneficios para Miembros"
        subtitle="Descuentos y ofertas exclusivas para nuestros miembros."
        image={servicePerks}
      />
    </>
  );
}
