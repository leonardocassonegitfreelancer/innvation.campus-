import ServicePageLayout from "@/components/landing/ServicePageLayout";
import serviceCoworking from "@/assets/service-coworking.jpg";
import SEOHead from "@/components/SEOHead";
import CoworkingIntro from "@/components/landing/CoworkingIntro";
import CoworkingPricing from "@/components/landing/CoworkingPricing";
import CoworkingIncludes from "@/components/landing/CoworkingIncludes";
import CoworkingGallery from "@/components/landing/CoworkingGallery";
import CoworkingFAQ from "@/components/landing/CoworkingFAQ";
import CoworkingCTA from "@/components/landing/CoworkingCTA";

export default function CoworkingSpaceIT() {
  return (
    <>
      <SEOHead title="Coworking e Prezzi" description="Piani di coworking flessibili e prezzi per individui e piccoli team a Málaga." path="/it/coworking" />
      <ServicePageLayout title="Coworking e Prezzi" subtitle="Piani flessibili e prezzi per individui" image={serviceCoworking}>
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
