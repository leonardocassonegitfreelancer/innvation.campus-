import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function QuoteSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="relative py-6 md:py-10 bg-background overflow-hidden">

      <div className="max-w-5xl mx-auto px-6 text-center" ref={ref}>
        <div className={`scroll-animate ${isVisible ? "visible" : ""}`}>
          <blockquote className="font-display text-2xl md:text-4xl lg:text-5xl text-foreground/90 leading-snug italic">
            The place where you sit
            <br />
            changes{" "}
            <span className="text-primary not-italic font-bold">what</span>{" "}
            you think.
            <br />
            Choose your world.
          </blockquote>
          <p className="font-body text-muted-foreground text-sm mt-4 uppercase tracking-widest">
            Innovation/Campus
          </p>
        </div>
      </div>
    </section>
  );
}
