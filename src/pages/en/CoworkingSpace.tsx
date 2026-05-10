import ServicePageLayout from "@/components/landing/ServicePageLayout";
import serviceCoworking from "@/assets/service-coworking.webp";
import SEOHead from "@/components/SEOHead";
import CoworkingIntro from "@/components/landing/CoworkingIntro";
import CoworkingPricing from "@/components/landing/CoworkingPricing";
import CoworkingIncludes from "@/components/landing/CoworkingIncludes";
import CoworkingGallery from "@/components/landing/CoworkingGallery";
import CoworkingFAQ from "@/components/landing/CoworkingFAQ";
import CoworkingCTA from "@/components/landing/CoworkingCTA";

const _s = (img: unknown): string => typeof img === 'string' ? img : (img as any)?.src ?? '';

export default function CoworkingSpace({ lang: langProp }: { lang?: "en" | "es" | "it" } = {}) {
  const lang = langProp ?? "en";
  return (
    <>
      <CoworkingIntro lang={lang} />
      <CoworkingPricing lang={lang} />
      <CoworkingIncludes lang={lang} />
      <CoworkingGallery lang={lang} />
      <CoworkingFAQ lang={lang} />
      <CoworkingCTA lang={lang} />
    </>
  );
}
