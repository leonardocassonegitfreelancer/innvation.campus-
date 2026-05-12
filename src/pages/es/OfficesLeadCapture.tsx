import LeadForm from "@/components/landing/LeadForm";

export default function OfficesLeadCaptureES() {
  return (
    <main className="pt-20 min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <LeadForm lang="es" embedded defaultService="office" />
      </div>
    </main>
  );
}
