import ServicePageLayout from "@/components/landing/ServicePageLayout";
import servicePrivate from "@/assets/service-private.jpg";
import SEOHead from "@/components/SEOHead";

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
      />
    </>
  );
}
