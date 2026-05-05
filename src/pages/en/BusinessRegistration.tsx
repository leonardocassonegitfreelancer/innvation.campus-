import ServicePageLayout from "@/components/landing/ServicePageLayout";
import serviceRegistration from "@/assets/service-registration.webp";
import SEOHead from "@/components/SEOHead";
import RegistrationIntro from "@/components/landing/RegistrationIntro";
import RegistrationPricing from "@/components/landing/RegistrationPricing";
import RegistrationIncludes from "@/components/landing/RegistrationIncludes";
import ConferenceCTA from "@/components/landing/ConferenceCTA";

const _s = (img: unknown): string => typeof img === 'string' ? img : (img as any)?.src ?? '';

export default function BusinessRegistration({ lang = "en" }: { lang?: "en" | "es" | "it" }) {
  return (
    <>
      <RegistrationIntro lang={lang} />
      <RegistrationPricing lang={lang} />
      <RegistrationIncludes lang={lang} />
      <ConferenceCTA lang={lang} />
    </>
  );
}
