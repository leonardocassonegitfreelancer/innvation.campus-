import ServicePageLayout from "@/components/landing/ServicePageLayout";
import servicePrivate from "@/assets/service-private.jpg";

export default function PrivateOffices() {
  return (
    <ServicePageLayout
      title="Private Offices"
      subtitle="Dedicated office spaces in different sizes to suit your team's needs."
      image={servicePrivate}
    />
  );
}
