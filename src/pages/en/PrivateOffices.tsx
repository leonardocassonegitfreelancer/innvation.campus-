import ServicePageLayout from "@/components/landing/ServicePageLayout";
import servicePrivate from "@/assets/service-private.jpg";
import SEOHead from "@/components/SEOHead";
import OfficesIntro from "@/components/landing/OfficesIntro";
import OfficesIncludes from "@/components/landing/OfficesIncludes";
import OfficesGallery from "@/components/landing/OfficesGallery";
import ConferenceCTA from "@/components/landing/ConferenceCTA";

export default function PrivateOffices() {
  return (
    <>
      <SEOHead
        title="Private Offices"
        description="Dedicated office spaces in different sizes to suit your team's needs in Málaga."
        path="/en/private-offices"
      />
      <ServicePageLayout
        title="Private Offices"
        subtitle="Dedicated office spaces in different sizes to suit your team's needs."
        image={servicePrivate}
      >
        <OfficesIntro />
        <OfficesIncludes />
        <OfficesGallery />
        <ConferenceCTA />
      </ServicePageLayout>
    </>
  );
}
