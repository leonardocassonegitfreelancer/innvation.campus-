import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function CoworkingCTA() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 md:py-28 bg-neutral-dark">
      <div ref={ref} className={`scroll-animate ${isVisible ? "visible" : ""} max-w-3xl mx-auto px-6 text-center`}>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mb-4">
          Ready to Start?
        </h2>
        <p className="font-body text-lg text-primary-foreground/60 mb-10 max-w-xl mx-auto">
          Book a free tour of our spaces, 
we'll help you find the right plan.
        </p>

        <Button asChild
        size="lg"
        className="bg-primary hover:bg-primary/90 text-primary-foreground font-body uppercase tracking-widest text-sm">
          
          <a
            href="https://members.innovationcampus.biz/tours/locations"
            target="_blank"
            rel="noopener noreferrer">
            
            Book a Tour
          </a>
        </Button>
      </div>
    </section>);

}