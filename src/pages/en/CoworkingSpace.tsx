import ServicePageLayout from "@/components/landing/ServicePageLayout";
import serviceCoworking from "@/assets/service-coworking.webp";
import SEOHead from "@/components/SEOHead";
import CoworkingIntro from "@/components/landing/CoworkingIntro";
import CoworkingPricing from "@/components/landing/CoworkingPricing";
import CoworkingIncludes from "@/components/landing/CoworkingIncludes";
import CoworkingGallery from "@/components/landing/CoworkingGallery";
import CoworkingFAQ from "@/components/landing/CoworkingFAQ";
import CoworkingCTA from "@/components/landing/CoworkingCTA";

export default function CoworkingSpace() {
  return (
    <>
      <SEOHead
        title="Coworking & Pricing"
        description="Flexible coworking plans and pricing for individuals and small teams in Málaga."
        path="/en/coworking-space"
      />
      <ServicePageLayout
        title="Coworking & Pricing"
        subtitle="Flexible plans and pricing for individuals"
        image={serviceCoworking}
      >
        <CoworkingIntro />
        <CoworkingPricing />
        <CoworkingIncludes />
        <CoworkingGallery />
        <CoworkingFAQ />
        <CoworkingCTA />
      </ServicePageLayout>
    </>
  );
}
