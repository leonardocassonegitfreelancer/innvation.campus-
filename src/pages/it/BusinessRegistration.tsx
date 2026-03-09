import ServicePageLayout from "@/components/landing/ServicePageLayout";
import serviceRegistration from "@/assets/service-registration.jpg";
import SEOHead from "@/components/SEOHead";

export default function BusinessRegistrationIT() {
  return (
    <>
      <SEOHead title="Registrazione Aziendale" description="Trasferisci la tua azienda in Spagna o Italia con i nostri servizi di registrazione a Innovation Campus." path="/it/registrazione-aziendale" />
      <ServicePageLayout title="Registrazione Aziendale" subtitle="Trasferisci la tua azienda in Spagna o Italia con i nostri servizi di registrazione." image={serviceRegistration} />
    </>
  );
}
