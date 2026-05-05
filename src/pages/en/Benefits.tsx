import ServicePageLayout from "@/components/landing/ServicePageLayout";
import servicePerks from "@/assets/service-perks.webp";
import SEOHead from "@/components/SEOHead";
import PartnersGrid from "@/components/landing/PartnersGrid";

const _s = (img: unknown): string => typeof img === 'string' ? img : (img as any)?.src ?? '';

export default function Benefits({ lang = "en" }: { lang?: "en" | "es" | "it" }) {
  return (
    <PartnersGrid lang={lang} />
  );
}
