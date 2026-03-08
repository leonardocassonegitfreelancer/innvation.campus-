import ServicePageLayout from "@/components/landing/ServicePageLayout";
import serviceCommunity from "@/assets/service-community.jpg";
import SEOHead from "@/components/SEOHead";

export default function Events() {
  return (
    <>
      <SEOHead
        title="Community Events"
        description="Connect, learn, and grow with vibrant community events at Innovation Campus Málaga."
        path="/en/events"
      />
      <ServicePageLayout
        title="Community Events"
        subtitle="Connect, learn, and grow with our vibrant community events."
        image={serviceCommunity}
      />
    </>
  );
}
