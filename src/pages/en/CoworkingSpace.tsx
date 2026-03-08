import ServicePageLayout from "@/components/landing/ServicePageLayout";
import serviceCoworking from "@/assets/service-coworking.jpg";

export default function CoworkingSpace() {
  return (
    <ServicePageLayout
      title="Coworking Space"
      subtitle="Flexible plans and pricing for individuals and small teams."
      image={serviceCoworking}
    />
  );
}
