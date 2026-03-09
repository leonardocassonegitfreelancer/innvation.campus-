import ServicePageLayout from "@/components/landing/ServicePageLayout";
import servicePerks from "@/assets/service-perks.jpg";
import SEOHead from "@/components/SEOHead";

export default function BenefitsIT() {
  return (
    <>
      <SEOHead title="Vantaggi per i Membri" description="Sconti e offerte esclusive per i membri di Innovation Campus." path="/it/vantaggi" />
      <ServicePageLayout title="Vantaggi per i Membri" subtitle="Sconti e offerte esclusive per i nostri membri." image={servicePerks} />
    </>
  );
}
