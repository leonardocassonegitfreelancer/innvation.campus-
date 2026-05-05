import ServicePageLayout from "@/components/landing/ServicePageLayout";
import serviceRegistration from "@/assets/service-registration.webp";
import SEOHead from "@/components/SEOHead";
import RegistrationIntro from "@/components/landing/RegistrationIntro";
import RegistrationPricing from "@/components/landing/RegistrationPricing";
import RegistrationIncludes from "@/components/landing/RegistrationIncludes";
import ConferenceCTA from "@/components/landing/ConferenceCTA";

const _s = (img: unknown): string => typeof img === 'string' ? img : (img as any)?.src ?? '';

export default function BusinessRegistrationIT() {
  return (
    <>
      <SEOHead title="Registrazione Aziendale" description="Trasferisci la tua azienda in Spagna o Italia con i nostri servizi di registrazione a Innovation Campus." path="/it/registrazione-aziendale" />
      <ServicePageLayout title="Registrazione Aziendale e Ufficio Virtuale" subtitle="Trasferisci la tua azienda in Spagna o Italia con i nostri servizi di registrazione." image={serviceRegistration}>
        <RegistrationIntro />
        <RegistrationPricing />
        <RegistrationIncludes />
        <ConferenceCTA />
      </ServicePageLayout>
    </>
  );
}
