import ServicePageLayout from "@/components/landing/ServicePageLayout";
import serviceTerrace from "@/assets/service-terrace.webp";
import SEOHead from "@/components/SEOHead";
import TerraceIntro from "@/components/landing/TerraceIntro";
import TerraceSpaces from "@/components/landing/TerraceSpaces";
import TerraceIncludes from "@/components/landing/TerraceIncludes";
import TerraceGallery from "@/components/landing/TerraceGallery";
import ConferenceCTA from "@/components/landing/ConferenceCTA";

const _s = (img: unknown): string => typeof img === 'string' ? img : (img as any)?.src ?? '';

export default function PrivateTerrace() {
  return (
    <>
      <SEOHead
        title="Private Terrace"
        description="An exclusive outdoor space with catering options for your events and meetings in Málaga."
        path="/en/private-terrace"
      />
      <ServicePageLayout
        title="Private Terrace"
        subtitle="An exclusive outdoor space with catering options for your events and meetings."
        image={serviceTerrace}
      >
        <TerraceIntro />
        <TerraceSpaces />
        <TerraceIncludes />
        <TerraceGallery />
        <ConferenceCTA />
      </ServicePageLayout>
    </>
  );
}
