import ServicePageLayout from "@/components/landing/ServicePageLayout";
import servicePerks from "@/assets/service-perks.jpg";
import SEOHead from "@/components/SEOHead";
import PartnersGrid from "@/components/landing/PartnersGrid";

export default function Benefits() {
  return (
    <>
      <SEOHead
        title="Member Perks"
        description="Exclusive discounts and offers from our partners for Innovation Campus members."
        path="/en/benefits"
      />
      <ServicePageLayout
        title="Member Perks"
        subtitle="Exclusive discounts and offers for our members."
        image={servicePerks}
      >
        <PartnersGrid />
      </ServicePageLayout>
    </>
  );
}
