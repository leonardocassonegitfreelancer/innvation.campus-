import ServicePageLayout from "@/components/landing/ServicePageLayout";
import serviceAcademy from "@/assets/service-academy.webp";
import SEOHead from "@/components/SEOHead";
import AcademyIntro from "@/components/landing/AcademyIntro";
import AcademyCourses from "@/components/landing/AcademyCourses";
import ConferenceCTA from "@/components/landing/ConferenceCTA";

const _s = (img: unknown): string => typeof img === 'string' ? img : (img as any)?.src ?? '';

export default function Academy({ lang = "en" }: { lang?: "en" | "es" | "it" }) {
  return (
    <>
      <AcademyIntro lang={lang} />
      <AcademyCourses lang={lang} />
      <ConferenceCTA lang={lang} />
    </>
  );
}
