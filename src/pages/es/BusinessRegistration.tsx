import ServicePageLayout from "@/components/landing/ServicePageLayout";
import serviceRegistration from "@/assets/service-registration.webp";
import SEOHead from "@/components/SEOHead";
import RegistrationIntro from "@/components/landing/RegistrationIntro";
import RegistrationPricing from "@/components/landing/RegistrationPricing";
import RegistrationIncludes from "@/components/landing/RegistrationIncludes";
import ConferenceCTA from "@/components/landing/ConferenceCTA";

export default function BusinessRegistrationES() {
  return (
    <>
      <SEOHead
        title="Registro de Empresas"
        description="Reubica tu empresa a España o Italia con nuestros servicios de registro en Innovation Campus."
        path="/es/registro-de-empresas"
      />
      <ServicePageLayout
        title="Registro de Empresas y Oficina Virtual"
        subtitle="Reubica tu empresa a España o Italia con nuestros servicios de registro."
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
