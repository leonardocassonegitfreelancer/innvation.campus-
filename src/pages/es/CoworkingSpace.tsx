import ServicePageLayout from "@/components/landing/ServicePageLayout";
import serviceCoworking from "@/assets/service-coworking.jpg";
import SEOHead from "@/components/SEOHead";
import CoworkingIntro from "@/components/landing/CoworkingIntro";
import CoworkingPricing from "@/components/landing/CoworkingPricing";
import CoworkingIncludes from "@/components/landing/CoworkingIncludes";
import CoworkingGallery from "@/components/landing/CoworkingGallery";
import CoworkingFAQ from "@/components/landing/CoworkingFAQ";
import CoworkingCTA from "@/components/landing/CoworkingCTA";

export default function CoworkingSpaceES() {
  return (
    <>
      <SEOHead
        title="Coworking y Precios"
        description="Planes de coworking flexibles y precios para individuos y pequeños equipos en Málaga."
        path="/es/coworking"
      />
      <ServicePageLayout
        title="Coworking y Precios"
        subtitle="Planes flexibles y precios para individuos"
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
