import EventConversionForm from "@/components/landing/EventConversionForm";

export default function OfficesLeadCaptureIT() {
  return (
    <main className="pt-20 min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <EventConversionForm lang="it" embedded defaultService="office" />
      </div>
    </main>
  );
}
