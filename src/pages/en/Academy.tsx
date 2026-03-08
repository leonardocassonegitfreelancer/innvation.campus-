import ServicePageLayout from "@/components/landing/ServicePageLayout";
import serviceAcademy from "@/assets/service-academy.jpg";
import SEOHead from "@/components/SEOHead";

export default function Academy() {
  return (
    <>
      <SEOHead
        title="Academy"
        description="Workshops, courses, and training to help you grow at Innovation Campus."
        path="/en/academy"
      />
      <ServicePageLayout
        title="Academy"
        subtitle="Workshops, courses, and training to help you get better day by day."
        image={serviceAcademy}
      />
    </>
  );
}
