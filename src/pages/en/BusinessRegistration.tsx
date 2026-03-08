import ServicePageLayout from "@/components/landing/ServicePageLayout";
import serviceRegistration from "@/assets/service-registration.jpg";
import SEOHead from "@/components/SEOHead";

export default function BusinessRegistration() {
  return (
    <>
      <SEOHead
        title="Business Registration"
        description="Relocate your business to Spain or Italy with our registration services at Innovation Campus."
        path="/en/business-registration"
      />
      <ServicePageLayout
        title="Business Registration"
        subtitle="Relocate your business to Spain or Italy with our registration services."
        image={serviceRegistration}
      />
    </>
  );
}
