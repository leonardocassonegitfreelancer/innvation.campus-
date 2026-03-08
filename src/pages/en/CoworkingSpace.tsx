import ServicePageLayout from "@/components/landing/ServicePageLayout";
import serviceCoworking from "@/assets/service-coworking.jpg";
import SEOHead from "@/components/SEOHead";
import CoworkingPricing from "@/components/landing/CoworkingPricing";

export default function CoworkingSpace() {
  return (
    <>
      <SEOHead
        title="Coworking Space"
        description="Flexible coworking plans and pricing for individuals and small teams in Málaga."
        path="/en/coworking-space"
      />
      <ServicePageLayout
        title="Coworking & Pricing"
        subtitle="Flexible plans and pricing for individuals"
        image={serviceCoworking}
      >
        <CoworkingPricing />
      </ServicePageLayout>
    </>
  );
}
