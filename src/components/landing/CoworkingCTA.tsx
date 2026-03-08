import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function CoworkingCTA() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 md:py-28 bg-primary">
      <div ref={ref} className={`scroll-animate ${isVisible ? "visible" : ""} max-w-3xl mx-auto px-6 text-center`}>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mb-4">
          Ready to Start?
        </h2>
        <p className="font-body text-lg text-primary-foreground/80 mb-10 max-w-xl mx-auto">
          Book a free tour of our spaces or get in touch — we'll help you find the right plan.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            size="lg"
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-body uppercase tracking-widest text-sm"
          >
            <a
              href="https://members.innovationcampus.biz/tours/locations"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book a Tour
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 font-body uppercase tracking-widest text-sm"
          >
            <Link to="/#contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
