import ServicePageLayout from "@/components/landing/ServicePageLayout";
import servicePerks from "@/assets/service-perks.jpg";

export default function Benefits() {
  return (
    <ServicePageLayout
      title="Member Perks"
      subtitle="Exclusive discounts and offers for our members."
      image={servicePerks}
    />
  );
}
