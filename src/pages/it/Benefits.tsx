import ServicePageLayout from "@/components/landing/ServicePageLayout";
import servicePerks from "@/assets/service-perks.webp";
import SEOHead from "@/components/SEOHead";
import PartnersGrid from "@/components/landing/PartnersGrid";

export default function BenefitsIT() {
  return (
    <>
      <SEOHead
        title="Vantaggi per i Membri"
        description="Sconti e offerte esclusive dai nostri partner per i membri di Innovation Campus."
        path="/it/vantaggi"
      />
      <ServicePageLayout
        title="Vantaggi per i Membri"
        subtitle="Sconti e offerte esclusive per i nostri membri."
        image={servicePerks}
      >
        <PartnersGrid />
      </ServicePageLayout>
    </>
  );
}
