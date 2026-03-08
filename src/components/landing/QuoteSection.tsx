import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function QuoteSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="relative py-6 md:py-10 bg-background overflow-hidden">

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
