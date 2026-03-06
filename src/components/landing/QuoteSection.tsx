import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function QuoteSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="relative py-20 md:py-28 bg-neutral-dark overflow-hidden">
      {/* Subtle texture */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"
      }} />

      <div className="max-w-5xl mx-auto px-6 text-center" ref={ref}>
        <div className={`scroll-animate ${isVisible ? "visible" : ""}`}>
          <div className="text-primary text-6xl md:text-8xl font-display leading-none mb-6">"</div>
          <blockquote className="font-display text-2xl md:text-4xl lg:text-5xl text-white/90 leading-snug italic">
            The place where you sit
            <br />
            changes{" "}
            <span className="text-primary not-italic font-bold">what</span>{" "}
            you think.
            <br />
            Choose your world.
          </blockquote>
          <div className="mt-10 w-16 h-[2px] bg-primary mx-auto" />
          <p className="font-body text-white/40 text-sm mt-6 uppercase tracking-widest">
            Innovation/Campus
          </p>
        </div>
      </div>
    </section>
  );
}
