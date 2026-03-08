import ServicePageLayout from "@/components/landing/ServicePageLayout";
import serviceCommunity from "@/assets/service-community.jpg";

export default function Events() {
  return (
    <ServicePageLayout
      title="Community Events"
      subtitle="Connect, learn, and grow with our vibrant community events."
      image={serviceCommunity}
    />
  );
}
