import ServicePageLayout from "@/components/landing/ServicePageLayout";
import serviceTerrace from "@/assets/service-terrace.jpg";
import SEOHead from "@/components/SEOHead";
import TerraceIntro from "@/components/landing/TerraceIntro";
import TerraceIncludes from "@/components/landing/TerraceIncludes";
import TerraceGallery from "@/components/landing/TerraceGallery";
import TerraceCTA from "@/components/landing/TerraceCTA";

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
        <TerraceIncludes />
        <TerraceGallery />
        <TerraceCTA />
      </ServicePageLayout>
    </>
  );
}
