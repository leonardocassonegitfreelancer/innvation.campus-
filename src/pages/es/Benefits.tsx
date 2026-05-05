import ServicePageLayout from "@/components/landing/ServicePageLayout";
import servicePerks from "@/assets/service-perks.webp";
import SEOHead from "@/components/SEOHead";
import PartnersGrid from "@/components/landing/PartnersGrid";

const _s = (img: unknown): string => typeof img === 'string' ? img : (img as any)?.src ?? '';

export default function BenefitsES() {
  return (
    <>
      <SEOHead
        title="Beneficios para Miembros"
        description="Descuentos y ofertas exclusivas de nuestros partners para los miembros de Innovation Campus."
        path="/es/beneficios"
      />
      <ServicePageLayout
        title="Beneficios para Miembros"
        subtitle="Descuentos y ofertas exclusivas para nuestros miembros."
        image={servicePerks}
      >
        <PartnersGrid />
      </ServicePageLayout>
    </>
  );
}
