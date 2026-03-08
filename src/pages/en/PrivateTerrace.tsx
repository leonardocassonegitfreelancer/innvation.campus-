import ServicePageLayout from "@/components/landing/ServicePageLayout";
import serviceTerrace from "@/assets/service-terrace.jpg";
import SEOHead from "@/components/SEOHead";

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
      />
    </>
  );
}
