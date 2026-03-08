import ServicePageLayout from "@/components/landing/ServicePageLayout";
import serviceRegistration from "@/assets/service-registration.jpg";

export default function BusinessRegistration() {
  return (
    <ServicePageLayout
      title="Business Registration"
      subtitle="Relocate your business to Spain or Italy with our registration services."
      image={serviceRegistration}
    />
  );
}
