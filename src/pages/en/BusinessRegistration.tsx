import ServicePageLayout from "@/components/landing/ServicePageLayout";
import serviceRegistration from "@/assets/service-registration.webp";
import SEOHead from "@/components/SEOHead";
import RegistrationIntro from "@/components/landing/RegistrationIntro";
import RegistrationPricing from "@/components/landing/RegistrationPricing";
import RegistrationIncludes from "@/components/landing/RegistrationIncludes";
import ConferenceCTA from "@/components/landing/ConferenceCTA";

export default function BusinessRegistration() {
  return (
    <>
      <SEOHead
        title="Business Registration"
        description="Relocate your business to Spain or Italy with our registration services at Innovation Campus."
        path="/en/business-registration"
      />
      <ServicePageLayout
        title="Business Registration & Virtual Office"
        subtitle="Relocate your business to Spain or Italy with our registration services."
        image={serviceRegistration}
      >
        <RegistrationIntro />
        <RegistrationPricing />
        <RegistrationIncludes />
        <ConferenceCTA />
      </ServicePageLayout>
    </>
  );
}
