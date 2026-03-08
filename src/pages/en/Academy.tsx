import ServicePageLayout from "@/components/landing/ServicePageLayout";
import serviceAcademy from "@/assets/service-academy.jpg";

export default function Academy() {
  return (
    <ServicePageLayout
      title="Academy"
      subtitle="Workshops, courses, and training to help you get better day by day."
      image={serviceAcademy}
    />
  );
}
