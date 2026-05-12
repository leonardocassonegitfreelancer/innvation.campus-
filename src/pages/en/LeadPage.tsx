import LeadForm from "@/components/landing/LeadForm";

const serviceMap: Record<string, string> = {
  "meeting-rooms": "conference",
  "private-terrace": "terrace",
  "private-office": "office",
  "coworking": "coworking",
  "business-registration": "bizreg",
  "general": "other",
};

export default function LeadPage({ lang = "en" }: { lang?: "en" | "es" | "it" }) {
  const params = typeof window !== "undefined" ? new URLSearchParams(window.location.search) : new URLSearchParams();
  const serviceParam = params.get("service") ?? "general";
  const defaultService = serviceMap[serviceParam] ?? "other";

  return (
    <main className="pt-20 min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <LeadForm lang={lang} embedded defaultService={defaultService} />
      </div>
    </main>
  );
}
