import ServicePageLayout from "@/components/landing/ServicePageLayout";
import serviceCoworking from "@/assets/service-coworking.jpg";
import SEOHead from "@/components/SEOHead";
import CoworkingIntroIT from "@/components/landing/it/CoworkingIntroIT";
import CoworkingPricingIT from "@/components/landing/it/CoworkingPricingIT";
import CoworkingIncludesIT from "@/components/landing/it/CoworkingIncludesIT";
import CoworkingGalleryIT from "@/components/landing/it/CoworkingGalleryIT";
import CoworkingFAQIT from "@/components/landing/it/CoworkingFAQIT";
import CoworkingCTAIT from "@/components/landing/it/CoworkingCTAIT";

export default function CoworkingSpaceIT() {
  return (
    <>
      <SEOHead title="Coworking e Prezzi" description="Piani di coworking flessibili e prezzi per individui e piccoli team a Málaga." path="/it/coworking" />
      <ServicePageLayout title="Coworking e Prezzi" subtitle="Piani flessibili e prezzi per individui" image={serviceCoworking}>
        <CoworkingIntroIT />
        <CoworkingPricingIT />
        <CoworkingIncludesIT />
        <CoworkingGalleryIT />
        <CoworkingFAQIT />
        <CoworkingCTAIT />
      </ServicePageLayout>
    </>
  );
}
