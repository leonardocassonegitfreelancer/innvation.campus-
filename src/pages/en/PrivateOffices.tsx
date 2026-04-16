import ServicePageLayout from "@/components/landing/ServicePageLayout";
import servicePrivate from "@/assets/service-private.webp";
import SEOHead from "@/components/SEOHead";
import OfficesListings from "@/components/landing/OfficesListings";
import OfficesIntroSection from "@/components/landing/OfficesIntroSection";
import OfficesAmenities from "@/components/landing/OfficesAmenities";
import OfficesQuoteForm from "@/components/landing/OfficesQuoteForm";

export default function PrivateOffices() {
  return (
    <>
      <SEOHead
        title="Private Offices"
        description="Dedicated office spaces in different sizes to suit your team's needs in Málaga — Palace & Terrace locations."
        path="/en/private-offices"
      />
      <ServicePageLayout
        title="Private Offices"
        subtitle="Your dream office is closer than you think. Work in inspiring locations surrounded by an international entrepreneurial community."
        image={servicePrivate}
      >
        <OfficesIntroSection />
        <OfficesListings />
        <OfficesAmenities />
        <OfficesQuoteForm />
      </ServicePageLayout>
    </>
  );
}
