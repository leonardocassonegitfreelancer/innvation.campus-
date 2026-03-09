import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function QuoteSectionES() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="relative py-14 md:py-28 bg-neutral-dark overflow-hidden">
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"
      }} />
      <div className="max-w-5xl mx-auto px-6 text-center" ref={ref}>
        <div className={`scroll-animate ${isVisible ? "visible" : ""}`}>
          <blockquote className="font-display text-2xl md:text-4xl lg:text-5xl text-white/90 leading-snug italic">
            El lugar donde te sientas
            <br />
            cambia <span className="text-primary not-italic font-bold">lo que</span> piensas.
            <br />
            Elige tu mundo.
          </blockquote>
        </div>
      </div>
    </section>
  );
}
