import ServiceLeadForm from "@/pages/en/ServiceLeadForm";

type ServiceKey = "meeting-rooms" | "private-terrace" | "private-office" | "coworking" | "business-registration" | "general";

export default function LeadPage({ lang = "en" }: { lang?: "en" | "es" | "it" }) {
  const params = typeof window !== "undefined" ? new URLSearchParams(window.location.search) : new URLSearchParams();
  const service = (params.get("service") ?? "general") as ServiceKey;

  return <ServiceLeadForm lang={lang} service={service} />;
}
