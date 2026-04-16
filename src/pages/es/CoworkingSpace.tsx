import ServicePageLayout from "@/components/landing/ServicePageLayout";
import serviceCoworking from "@/assets/service-coworking.webp";
import SEOHead from "@/components/SEOHead";
import CoworkingIntroES from "@/components/landing/es/CoworkingIntroES";
import CoworkingPricingES from "@/components/landing/es/CoworkingPricingES";
import CoworkingIncludesES from "@/components/landing/es/CoworkingIncludesES";
import CoworkingGalleryES from "@/components/landing/es/CoworkingGalleryES";
import CoworkingFAQES from "@/components/landing/es/CoworkingFAQES";
import CoworkingCTAES from "@/components/landing/es/CoworkingCTAES";

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
        <CoworkingIntroES />
        <CoworkingPricingES />
        <CoworkingIncludesES />
        <CoworkingGalleryES />
        <CoworkingFAQES />
        <CoworkingCTAES />
      </ServicePageLayout>
    </>
  );
}
