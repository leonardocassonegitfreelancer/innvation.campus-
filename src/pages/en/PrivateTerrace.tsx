import ServicePageLayout from "@/components/landing/ServicePageLayout";
import serviceTerrace from "@/assets/service-terrace.jpg";

export default function PrivateTerrace() {
  return (
    <ServicePageLayout
      title="Private Terrace"
      subtitle="An exclusive outdoor space with catering options for your events and meetings."
      image={serviceTerrace}
    />
  );
}
