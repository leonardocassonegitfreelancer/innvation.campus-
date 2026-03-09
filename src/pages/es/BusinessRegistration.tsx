import ServicePageLayout from "@/components/landing/ServicePageLayout";
import serviceRegistration from "@/assets/service-registration.jpg";
import SEOHead from "@/components/SEOHead";

export default function BusinessRegistrationES() {
  return (
    <>
      <SEOHead
        title="Registro de Empresas"
        description="Reubica tu empresa a España o Italia con nuestros servicios de registro en Innovation Campus."
        path="/es/registro-de-empresas"
      />
      <ServicePageLayout
        title="Registro de Empresas"
        subtitle="Reubica tu empresa a España o Italia con nuestros servicios de registro."
        image={serviceRegistration}
      />
    </>
  );
}
